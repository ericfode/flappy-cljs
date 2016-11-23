(ns flappy-cljs.flappy
  (:require
   [cljs.spec :as s]
   [cljs.spec.test :as st]
   [clojure.test.check.generators :as g]))




(s/def ::location
  (s/cat ::x number? ::y number?))

(s/def ::size
  (s/cat ::width  number?  ::height  number? ))

(s/def ::gravity number?)
(s/def ::velocity number?)
(s/def ::speed number?)
(s/def ::jump number?)
(s/def ::alive? boolean?)

(s/def ::bird
  (s/keys :req [::location
                ::size
                ::alive?
                ::gravity
                ::velocity
                ::jump]))

(s/def ::pipe
  (s/keys :req [::location
                ::size
                ::speed]))

(s/def ::pipes (s/coll-of ::pipe))
(s/def ::birds (s/coll-of ::bird))

(s/def ::world
  (s/keys :req [::pipes
                ::size
                ::birds]))

(s/def ::game
  (s/keys :req [::world
                ::score
                ::spawn-interval
                ::interval
                ::alives
                ::generation
                ::background-speed
                ::background-x
                ::max-score]))

(def empty-bird
  {::location [80 250]
   ::size     [40 30]
   ::alive?   true
   ::gravity  0
   ::velocity 0.3
   ::jump     -6})

(def empty-world
  {::pipes []
   ::size [500 512]
   ::birds []})

(def empty-game
  {::world empty-world
   ::score 0
   ::spawn-interval 90
   ::interval 0
   ::generation 0
   ::alives 0
   ::background-speed 0.75
   ::background-x 0
   ::max-score 0})

(def empty-pipe
  {::location [0 0]
   ::size  [50 40]
   ::speed 3})

(defn build-game
  [& opts]
  (merge empty-game opts))

(defn build-pipe
  [& {:as opts}]
  (merge empty-pipe opts))

(s/fdef flap
        :args (s/cat :bird ::bird)
        :ret  ::bird
        :fn #(= (::gravity %) (::jump %)))

(defn flap [{::keys [jump] :as bird}]
  (assoc bird ::gravity jump))


(s/fdef update-bird
        :args (s/cat :bird ::bird)
        :ret  ::bird)

(defn update-bird [{::keys [velocity gravity] :as bird}]
  (-> bird
      (update ::gravity (partial + velocity))
      (update-in [::location 1] (partial + velocity gravity))))

(s/fdef add-bird
        :arg (s/cat :game ::game :bird ::bird)
        :ret ::game)

(defn add-bird [game bird]
  (update-in game [::world ::birds] #(into  [] (conj % bird))))

(s/fdef hit-pipe?
        :args (s/cat :bird ::bird :pipe ::pipe)
        :ret boolean?)

(defn hit-pipe? [{[bird-x bird-y] ::location  [bird-width bird-height] ::size :as bird}
                 {[pipe-x pipe-y] ::location  [pipe-width pipe-height] ::size :as pipe}]
  (let [after-pipe (> bird-x (+ pipe-x pipe-width))
        before-pipe (< (+ bird-x bird-width) pipe-x)
        lower-pipe (> bird-y (+ pipe-y pipe-height))
        higher-pipe (< (+ bird-y bird-height) pipe-y)]
    (not
     (or
      (> bird-x (+ pipe-x pipe-width)) ;after pipe
      (< (+ bird-x bird-width) pipe-x) ;before pipe
      (> bird-y (+ pipe-y pipe-height)) ; lower then pipe
      (< (+ bird-y bird-height) pipe-y))))) ;higher then pipe


(s/fdef hit-pipes?
        :args (s/cat :bird ::bird :pipes ::pipes)
        :ret boolean?)

(defn hit-pipes? [bird pipes]
  (reduce (fn [last pipe] (or last (hit-pipe? bird pipe))) false pipes))

(s/fdef is-dead?
        :args (s/cat :world ::world :bird ::bird)
        :ret boolean?)

(defn is-dead? [{[_  world-height] ::size world-pipes ::pipes :as world}
                {[x y] ::location [width height] ::size :as bird}]
  (or (>= y world-height)
      (<= (+ y world-height) 0)
      (hit-pipes? bird world-pipes)))



(s/fdef update-pipe
        :args (s/cat :pipe ::pipe)
        :ret ::pipe)

(defn update-pipe [{speed ::speed :as pipe}]
  (update-in pipe [::location 0] #(- % speed)))

(s/fdef is-pipe-out
        :args (s/cat :pipe ::pipe :world ::world)
        :ret boolean?)

(defn is-pipe-out? [{[x y] ::location [width _] ::size} world]
 (< (+ x width) 0))

(defn start-game
  [game
   {::keys [bird-count] :as  start-params}]
  (-> game
      (assoc ::interval 0)
      (assoc ::score 0)
      (assoc ::pipes [])
      (assoc ::birds
             (take bird-count (repeat empty-bird)))
      (assoc ::alives bird-count)))

(defn should-add-pipe?
  [{::keys [interval spawn-interval]}]
  (= interval spawn-interval))


(s/fdef gen-pipe-pair
        :args (s/cat :size (s/spec  ::size) :hole-scaler (s/and number? #(< % 1) #(> % 0)))
        :ret  (s/cat :top-pipe ::pipe :bottom-pipe ::pipe)
        :fn   (s/and
               #(= false (is-pipe-out? (get-in % [:ret :top-pipe]) empty-world))
               #(= false (is-pipe-out? (get-in % [:ret :bottom-pipe]) empty-world))))

(defn gen-pipe-pair
  [[width height] hole-scaler]
  (let [delta-bord 50
        hole-size 120
        hole-position (+ delta-bord
                         (js.Math.round
                          (* hole-scaler
                             (- height (* 2 delta-bord) hole-size))))
        top-pipe         (build-pipe ::location [width 0]
                                  ::size [50 hole-position])
        bottom-pipe      (build-pipe ::location [width (+ hole-position hole-size)]
                                  ::size [50 height])]
    [top-pipe bottom-pipe]))

(defn add-pipe-pair
  [game [top-pipe bottom-pipe]]
    (-> game
        (update-in  [::world ::pipes]  #(flatten [ % bottom-pipe top-pipe ]))))

(defn maybe-gen-pipe
  [game rand]
  (if (should-add-pipe? game)
    (do
      (-> game
          (assoc ::interval 0)
          (add-pipe-pair (gen-pipe-pair (::size (::world  game)) rand))))
    game
    ))

(defn game-over?
  [game]
  (not (reduce #(or %1 %2) false (map :alive? (get-in game [::world ::birds])))))

(defn bird-count
  [game]
  (count (into []  (filter #(::alive? %) (get-in game [::world ::birds])))))

(defn move-dead-birds
  [game]
  (-> game
      (assoc-in [::world ::dead-birds] (filter ::alive? (get-in game [::world ::birds])))
      (update-in [::world ::birds]  #(filter ::alive? %))))

(defn update-birds [game]
  (update-in game [::world ::birds] (partial mapv (fn [bird]
                                               (if (::alive? bird)
                                                 (update bird ::alive? #(not (is-dead? (::world game) bird)))
                                                 bird)))))
(defn update-game
  [game rand]
  (-> game
      (update ::interval inc)
      (update ::score inc)
      (assoc  ::alives (bird-count game))
      (update ::max-score #(if (> (::score game) %) (::score game) %))
      (update ::backgroundx #(+ % (::background-speed game)))
      (update-in [::world ::pipes] (partial filter (fn [pipe] (not (is-pipe-out? pipe game)))))
      (update-in [::world ::pipes] (partial mapv update-pipe))
      (update-birds)
      (update-in [::world ::birds] (partial mapv update-bird))
      (move-dead-birds)
      (maybe-gen-pipe rand)))



(st/instrument)
