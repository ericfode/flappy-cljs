(ns flappy-cljs.neural
  (:require [cljs.spec :as s]
            [clojure.test.check.generators :as gen]
            [cljs.spec.test :as st]
            [lentes.core :as l]
            [cljs.core.async :as a ]
            [cljs.core :as c])
  (:require-macros
   [cljs.core.async.macros :as am]))


(declare make-network make-generation activation clamped-random)


(s/def ::scaler
  (s/with-gen
    (s/and #(<= % 1)
           #(>= % -1)
           number?)
    #(gen/double*
      {:min -0.99 :max 0.99 :infinite? false :NaN? false})))

(s/def ::pos-scaler
  (s/with-gen
    (s/and #(<= % 1)
           #(>= % 0)
           number?)
    #(gen/double*
      {:min 0.0001 :max 0.99 :infinite? false :NaN? false})))


(s/def ::score-fn
  (s/fspec :args (s/cat :expected any? :actual any?) :ret ::scaler))

(s/def ::activation
  (s/fspec :args (s/cat :a ::scaler) :ret ::scaler :gen #(gen/return activation)))

(s/def ::random-clamped
  (s/fspec :args (s/cat :a ::scaler) :ret ::scaler :gen #(gen/return clamped-random)))

(s/def ::random-population number?)
(s/def ::elitism ::pos-scaler)
(s/def ::random-behaviour number?)
(s/def ::mutation-range ::pos-scaler)
(s/def ::mutation-rate ::pos-scaler)
(s/def ::network-layout (s/cat :percepterons pos-int?
                        :hidden-layer (s/spec (s/coll-of pos-int? :gen-max 4 :min-count 1 :kind vector?))
                        :output-layer pos-int?))
(s/def ::historic int?)
(s/def ::low-historic boolean?)
(s/def ::score-sort int?)
(s/def ::child-count pos-int?)
(s/def ::population pos-int?)
(s/def ::neural-evolver
  (s/keys :req [::activation
                ::random-clamped
                ::population
                ::elitism
                ::random-behaviour
                ::mutation-range
                ::mutation-rate
                ::historic
                ::low-historic
                ::score-sort
                ::child-count]))

(def default-evolver
  {::activation activation
   ::random-clamped clamped-random
   ::population 10
   ::elitism .1
   ::random-behaviour .5
   ::mutation-range .5
   ::mutation-rate .4
   ::historic 4
   ::low-historic false
   ::score-sort 0
   ::child-count 2})

(s/def ::value ::scaler)

(s/def ::inputs (s/coll-of number? :into []))

(s/def ::weights (s/coll-of ::scaler  :into []))


(s/def ::neuron
  (s/keys
   :req [::value
         ::weights
         ::activation]))

(s/def ::id int?)
(s/def ::neurons (s/coll-of ::neuron :into [] ))
(s/def ::layer
  (s/keys
   :req [::id
         ::neurons]))

(s/def ::layers (s/coll-of ::layer :into []))

(s/def ::input-dim (s/and  integer? #(<= 0 %)))

(s/def ::layer-cnt (s/and integer? #(< 0 %)))

(s/def ::network
  (s/with-gen
    (s/keys :req [::network-layout
                  ::layers])
    #(gen/fmap (fn [layout]
                (apply make-network layout))
              (s/gen ::network-layout))))

(s/def ::id integer?)

(s/def ::score (s/or :none nil? :scored number?))

(s/def ::genome
  (s/keys :req [::score
                ::network]))

(s/def ::genomes (s/with-gen
                   (s/coll-of ::genome :into #{} :kind (s/and set? sorted?) :min-count 1 :gen-max 4)
                   #(gen/fmap (fn [genomes]
                              (apply make-generation genomes))
                           (gen/vector (s/gen ::genome)))))

(s/def ::generation
  (s/keys :req [::genomes]))

(defn activation [a]
  (let [ap (/ (- a) 1)]
    (/ 1 (+ 1 (js.Math.exp ap)))))


(defn clamped-random [] (- (* 2 (js.Math.random)) 1))


(s/fdef make-neuron
        :args (s/cat :neuron-params  (s/keys :opt [::input-dim]))
        :ret ::neuron)

(defn make-neuron
  [{cnt ::input-dim :or {cnt 1} :as opts}]
  {::input-dim cnt
   ::value 0
   ::activation activation
   ::weights (into [] (take cnt (rest (iterate clamped-random nil))))})


(defn make-genome
 [network]
 {::score 0
  ::network network})

(s/fdef make-layer
        :args (s/cat :layer-params (s/keys :opt [::layer-cnt ::id ::input-dim]))
        :ret ::layer)

(defn make-layer
  [{layer-cnt ::layer-cnt id ::id input-dim ::input-dim :or {layer-cnt 1  input-dim 1 id 0}}]
  {::id id
   ::neurons (into [] (take layer-cnt (rest (iterate #(make-neuron  {::input-dim input-dim} ) 0))))})

(s/fdef make-network
        :args ::network-layout
        :ret ::network
        :fn (s/and
             (fn [{:keys [args ret]}]
               (= (count (::layers ret))
                  (reduce + (flatten [(:input args) (:hiddens args) (:outputs args)]))))
             (fn [{:keys [ret]}]
                     (sorted?  (map ::id (::layers ret))))))


(defn make-network
  [input hiddens outputs]
  (let
      [input-layer (make-layer {::layer-cnt input
                                ::input-dim 0})
       id 0
       most-layers
       (loop [accum [input-layer]
              previous-layer input-layer
              cur-size (first hiddens)
              last-size input
              hiddens-left  (rest hiddens)
              id 1]

         (if cur-size
           (let [this-layer (make-layer {::layer-cnt cur-size
                                         ::input-dim last-size
                                         ::id id})]
             (recur (conj accum this-layer)
                    this-layer
                    (first hiddens-left)
                    cur-size
                    (rest hiddens-left)
                    (inc id)))
           accum))
       output-layer (make-layer {::layer-cnt outputs
                                 ::input-dim (last hiddens)
                                 ::id (count most-layers)})]
    {::network-layout [input hiddens outputs]
     ::layers (conj most-layers output-layer)}))


(s/fdef update-inputs
        ::args (s/cat :network ::network :inputs ::inputs)
        ::ret ::network)

(defn update-inputs
  [network inputs]
  (update-in network
             [::layers 0 ::neurons]
             (fn [neurons]
               (mapv (fn [neuron input]
                       (assoc neuron ::value input))
                     neurons
                     inputs))))

(defn unpairs
  [coll]
  (conj (mapv first coll) (last (last coll))))

(s/fdef pairs
        :args (s/cat :coll vector?)
        :ret vector?
        :fn (fn [{:keys [ret args]}]
              (= (:coll  args) (unpairs ret))))

(defn pairs
  [coll]
  (if (empty?  coll)
    [[]]
    (let [lset (subvec coll 1)
          tset (subvec coll 0 (dec (count coll)))]
      (map vector tset lset))))

(s/fdef compute-layer
        :args (s/cat :this-layer ::layer :last-layer ::layer)
        :ret ::layer)

(defn compute-layer
  [this-layer last-layer]
  (update-in this-layer [::neurons]
             (fn [neurons]
               (mapv (fn [neuron]

                       (let [total
                             (reduce (fn [sum [prev-neuron weight]]
                                       (+ sum (* (::value prev-neuron) weight)))
                                     0
                                     (map vector (::neurons last-layer) (::weights neuron)))]
                         (assoc neuron ::value (activation total)))) neurons))))


(s/fdef compute-layers
        :args (s/cat :layers (s/and  ::layers #(>= (count %) 2)))
        :ret ::layers)

(defn compute-layers
  [layers]
  (into []
        (reduce (fn [finished-layers this-layer]
                  (conj finished-layers
                        (compute-layer this-layer (last finished-layers))))
                [(first layers)]
                (rest layers))))

(defn outputs
  [network]
  (mapv ::value (::neurons  (last  (::layers network)))))

(s/fdef compute
        :args (s/cat :network ::network :inputs ::inputs)
        :ret (s/coll-of ::scaler :into [])
        :gen (gen/bind (s/gen ::network)
                     (fn [net]
                       (let [input-size (first (::network-layout net))
                             inputs (gen/resize input-size (s/gen ::inputs))]
                         [net inputs]))))

(defn compute
  [network inputs]
  (-> network
      (update-inputs inputs)
      (update-in [::layers] compute-layers)))

(s/fdef make-generation
        :args (s/+ ::genome)
        :ret ::generation)
(defn make-generation
  [& genomes]
  {::genomes
   (apply sorted-set-by
          (fn [left right]
            (>= (::score left) (::score right)))
          genomes)})

;Stack overflow 17711308
(defn close? [tolerance x y]
  (< (js/Math.abs   (- x y)) tolerance))

(s/fdef maybe-mutate
        :args (s/cat :weight ::scaler :opts ::neural-evolver)
        :ret ::scaler
        :fn #(close? (::mutation-range (:opts (:args %)))
                     (:ret %)
                     (:weight  (:args %))))

(defn maybe-mutate
   [weight opts]
    (if (<= (rand) (::mutation-rate opts))
      (min 1
           (max -1
            (+ weight
               (-  (* (::mutation-range opts) (rand) 2)
                   (::mutation-range opts)))))
      weight))

(s/fdef breed-neuron
        :args (s/cat :neuron-left ::neuron :neuron-right ::neuron :opts ::neural-evolver)
        :ret ::neuron
        :gen #(gen/fmap (fn [[neuron-left neuron-right]]
                     [neuron-left neuron-right {::mutation-rate .5 ::mutation-range .1}])
                   (gen/tuple (s/gen ::neuron) (s/gen ::neuron))))

(defn- breed-neuron
  [neuron-left neuron-right opts]
  (let [new-neuron (if (<= (rand) 0.5) neuron-left neuron-right)]
    (update new-neuron ::weights (fn [weights] (mapv #(maybe-mutate % opts) weights)))))

(defn each
  ([]
   (l/lens (fn [s] (flatten s))
           (fn [s f] (into (empty s) (map f) s))))
  ([sub-lens]
   (l/lens (fn [s] (into (empty s) (map (partial l/focus sub-lens)) s))
           (fn [s f] (into (empty s) (map (partial l/over sub-lens f)) s)))))


(def each-weight
  (each (comp  (l/key ::neurons) (each  (l/key ::weights)))))


(defn- randomize-network-weights
  [network]
  (l/over each-weight clamped-random network))

(s/fdef breed-layers
        :args (s/cat :layer-left ::layer :layer-right ::layer :opts ::neural-evolver)
        :ret ::layer
        :gen #(gen/fmap (fn [[layer-left layer-right]]
                         [layer-left layer-right {::mutation-rate .5 ::mutation-range .1}])
                       (gen/tuple (s/gen ::layer) (s/gen ::layer))))

(defn- breed-layers
  [layer-left layer-right opts]
  (assoc layer-left ::neurons
          (mapv (fn [left right]
                  (breed-neuron left right opts))
                 (::neurons layer-left)
                 (::neurons layer-right))))


(def breed-gen (gen/fmap
                (fn [[gen-left gen-right]]
                  [gen-left gen-right 4 {::mutation-range .5}])
                (gen/tuple (s/gen ::genome) (s/gen ::genome))))


(s/fdef breed-one
        :args (s/cat :gen-left ::genome :gen-right ::genome :opts ::neural-evolver)
        :ret ::genome
        :gen breed-gen)

(defn- breed-one
  [gen-left gen-right opts]

  (let [left-network (::network gen-left)
        res {::score 0
             ::network  (assoc left-network ::layers
                               (mapv (fn [left right]
                                       (breed-layers left right opts))
                                     (get-in gen-left [::network ::layers])
                                     (get-in gen-right [::network ::layers])))}] 
    res))

(s/fdef breed
        :args (s/cat :gen-left ::genome :gen-right ::genome :num-children pos-int? :opts ::neural-evolver)
        :ret ::genomes
        :gen breed-gen)



(defn breed
  [gen-left gen-right num-children evolver]
  (into []
        (for [child-index (range num-children)]
          (breed-one gen-left gen-right evolver))))


(s/fdef kill-the-weak
        :args (s/cat :gen ::generation :keep number?)
        :ret ::generation)

(defn maybe-lens
  [likelyhood]
  (letfn [(now? [] (<= (rand) likelyhood))] 
    (l/lens
     (fn [s] (when (now?) s))
     (fn [s f] (if (now?) (f s) s)))))

(def each-weight-genome
  (comp (l/key ::network) (l/key ::layers) each-weight (each)))

(defonce tests
  (repeatedly 100  #(list (rand-int 2)  (rand-int 2))))

(defn score-genome
  [genome]
  (let [inputs tests
        correct (map #(apply bit-xor %) inputs)
        correct-bool (map #(> % .5) correct)
        guesses (map #(first (outputs  (compute (::network genome) %))) inputs)
        guesses-bool (map #(> % .5) guesses)
        results (into []  (map = guesses-bool correct-bool))]
    (assoc genome ::score  (get  (frequencies results ) 'true 0))))


(defn score-genome-analyize
  [genome]
  (let [inputs tests
        correct (map #(apply bit-xor %) inputs)
        correct-bool (map #(> % .5) correct)
        computed-networks (map  #(compute (::network genome) %) inputs)
        guesses (map #(first (outputs %)) computed-networks)
        guesses-bool (map #(> % .5) guesses)
        results (into []  (map = guesses-bool correct-bool))
        results-hash (map (fn
                            [input output-bool computed-network guesse result]
                            {:in input
                             :correct output-bool
                             :computed computed-network
                             :out guesse
                             :correct? result
                             }
                            inputs
                            correct-bool
                            computed-networks
                            guesses
                            results))]
    (-> genome
        (assoc ::analysis results-hash)
        (assoc ::score  (get  (frequencies results ) 'true 0)))))



(defn log
  [x]
  (print x)
  x)

(def scores
  (comp (l/key ::genomes) (each (l/key ::score))))


(defn score-generation
  [gen]
  (update gen ::genomes #(into (empty %) (map score-genome-analyize %))))

(defn find-first
  [f coll]
  (first (filter f coll)))

(s/fdef next-generation
        :args (s/cat :this-gen ::generation :evolver ::neural-evolver)
        :ret ::generation)


(defn next-generation
  [this-gen evolver]
  (let [survivers (js/Math.ceil (apply * ((juxt ::elitism ::population) evolver)))
        randos    (js/Math.ceil (apply * ((juxt ::random-behaviour ::population) evolver)))
        children  (- (::population evolver) (+ randos survivers))
        best      (first (::genomes this-gen))
        second-best (find-first #(not (= (::network %) (::network best))) (::genomes this-gen))]
    (-> this-gen
        (update ::genomes #(into (empty %) (take survivers %)))
        (update ::genomes #(apply conj % (repeatedly randos
                                                     (fn [] (l/over each-weight-genome
                                                            (fn [x] (if (> (::mutation-rate evolver)
                                                                          (rand)) (clamped-random) x)) best)))))
        (update ::genomes #(apply conj % (breed best second-best children evolver)))
        (update ::genomes #(into (empty %) (map score-genome) %)))))

(defn first-generation
  [network-spec evolver]
  (apply make-generation
         (repeatedly (::population evolver)
                     #(make-genome (apply make-network network-spec)))))

(defn generation-seq
  [first-gen evolver]
  (iterate #(next-generation % evolver) first-gen))

;(st/instrument)

(def test-gen  (score-generation  (first-generation [2 [3] 1] default-evolver)))

(comment
  (cljs.pprint/pprint (l/focus scores
                               (score-generation  (first-generation [2 [3] 1] default-evolver))))


  (am/go-loop [g (generation-seq
                  (score-generation  (first-generation [2 [3] 1] default-evolver))

                  default-evolver)
               left 100]
    (cljs.pprint/pprint
     (l/focus scores (first  g)))
    (cljs.pprint/pprint  (reduce + (l/focus scores (first g))))
    (when (< 0  left)
      (print left)
      (recur (rest g) (dec left))))

  (let [s (take 20 (generation-seq
                    (score-generation  (first-generation [2 [4] 1] default-evolver))
                    default-evolver))]
    (cljs.pprint/pprint  [  (map #(vector (l/focus scores %)) s)
                          (mapv #(reduce + (l/focus scores %)) s)
                          ])))

(comment

  (def keep-going (atom  true))


  @keep-going

  (def test-network (make-network 2 [5] 2))

  (def test-inputs [.3 .4])

  (outputs  (compute test-network test-inputs))

  )
