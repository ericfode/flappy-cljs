(ns flappy-cljs.events
  (:require [re-frame.core :as re-frame]
            [cljs.pprint :as pp]
            [flappy-cljs.flappy :as flap]
            [flappy-cljs.db :as db]
            [cljs.spec :as s]))


(defn log [& v]
  (.log js/console v))


(defn debug [& v]
  (.debug js/console v))


(defonce cvs (atom))
(defonce ctx  (atom))


(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :canvas/load-sprite
 (fn [db [_ sprite-key]]
   (let [sprite-path (get-in db [:sprite-files sprite-key])
         sprite (js/Image.)]
     (doto sprite
         (aset "src" sprite-path)
         (aset "onload" (fn image-loaded []
                          (re-frame/dispatch
                           [:canvas/sprite-loaded sprite-key sprite]))))
     (-> db
         (assoc-in [:sprites sprite-key :loading?] true)
         (assoc-in [:sprites sprite-key :image] sprite)))))

(re-frame/reg-event-fx
 :warm-up
 [re-frame/debug]
 (fn [{:keys [db]} _]
   (log "warming up")
   {:db (->  (merge db  {:game flap/empty-game}))
    :dispatch-n [[:canvas/load-sprite :bird]
                 [:canvas/load-sprite :background]
                 [:canvas/load-sprite :pipetop]
                 [:canvas/load-sprite :pipebottom]]
    :canvas/load nil
    :dispatch-later [{:ms 500 :dispatch [:start]}]}))


(re-frame/reg-fx
 :canvas/load
 (fn [_]
   (swap! cvs  #(js.document.querySelector "#flappy"))
   (swap! ctx  #(.getContext @cvs "2d"))))

(re-frame/reg-cofx
 :rand
 (fn [cofx]
   (assoc cofx :rand (js.Math.random))))

(re-frame/reg-event-db
 :stop
 (fn [db _]
   (assoc db :stop (not (:stop db)))))

(re-frame/reg-event-db
 :set-speed
 (fn [db [_ speed]]
   (assoc db :fps speed)))


(re-frame/reg-event-fx
 :loop
 [(re-frame/inject-cofx :rand)]
 (fn [{:keys [db rand]} _]
   (let [fps (:fps db)
         new-db (-> db
                    (update :frames inc)
                    (update :game (fn [gm]
                                    (flap/update-game gm rand))))]
     (if (not  (:stop db))
       {:db new-db
        :dispatch-n [[:draw-frame]]
        :dispatch-later [{:ms (/ 1000 fps) :dispatch [:loop]}]}
       {}))))

(re-frame/reg-event-db
 :spawn-bird
 [(re-frame/path :game) re-frame/debug]
 (fn [game _]
   (flap/add-bird game flap/empty-bird)))

(re-frame/reg-event-db
 :flap-bird
 [re-frame/debug (re-frame/path :game ::flap/world ::flap/birds)]
 (fn [birds]
   (mapv flap/flap birds)))


(re-frame/reg-event-fx
 :draw-frame
 (fn [_ _]
   {:dispatch-n [[:canvas/clear]
                 [:canvas/draw-background]
                 [:canvas/draw-pipes]
                 [:canvas/draw-birds]
                 [:canvas/draw-info]]}))

(re-frame/reg-event-fx
 :start
 (fn [_ _]
   (log "starting")
   {:dispatch [:loop]}))

(re-frame/reg-event-fx
 :restart
 (fn [{:keys [db]} _]
   (log "restarting")
   {:db (-> db
         (assoc :stop false)
         (assoc-in [:game] flap/empty-game))}))

(re-frame/reg-cofx
 :canvas/canvas
 (fn [coeffects _]
     (-> coeffects
         (assoc :canvas @cvs)
         (assoc :context @ctx))))

(re-frame/reg-event-fx
 :canvas/clear
 [(re-frame/inject-cofx :canvas/canvas)]
 (fn [{:keys [canvas context]}]
   (let [width  (aget canvas "width")
         height (aget canvas "height")]
     (.clearRect context 0 0 width height))
   {}))

(re-frame/reg-event-fx
 :canvas/draw-background
 [(re-frame/inject-cofx :canvas/canvas)
  (re-frame/inject-cofx :db)]
 (fn [{:keys [canvas context db]}]
   (let [width            (aget canvas "width")
         height           (aget canvas "height")
         background       (get-in db [:sprites :background :image])
         background-width (aget background "width")
         backgroundx      (get-in db [:game ::flap/backgroundx])
         copies           (inc (js.Math.ceil (/ width  background-width)))]
     (doall
      (for [x (range copies)]
        (.drawImage context
                    background
                    (- (* x background-width) (js.Math.floor (mod backgroundx background-width)))
                    0)))
     {})))

(re-frame/reg-event-fx
 :canvas/draw-pipes
 [(re-frame/inject-cofx :canvas/canvas)
  (re-frame/inject-cofx :db)]
 (fn [{:keys [canvas context db]}]
   (let [pipes            (get-in db [:game ::flap/world ::flap/pipes])
         pipetop          (get-in db [:sprites :pipetop :image])
         pipebottom       (get-in db [:sprites :pipebottom :image])]
     (doall
      (for [{[x y] ::flap/location [width height] ::flap/size} pipes]
          (if (= y 0)
            (.drawImage context pipetop
                        x (-  (+ y height) (aget pipetop "height"))
                        (aget pipetop "width")
                        (aget pipetop "height"))
            (.drawImage context pipebottom
                        x y
                        (aget pipebottom "width")
                        height
                        ))))
     {})))

(re-frame/reg-event-fx
 :canvas/draw-birds
 [(re-frame/inject-cofx :canvas/canvas)
  (re-frame/inject-cofx :db)]
 (fn [{:keys [canvas context db]}]
   (let [birds (get-in db [:game ::flap/world ::flap/birds])
         bird-image (get-in db [:sprites :bird :image])]
      (aset context "fillStyle" "#FFC600")
      (aset context "strokeStyle" "#CE0E00")
     (doall
      (for [{[x y]          ::flap/location
             [width height] ::flap/size
             gravity        ::flap/gravity} birds]
        (doto context
          (.save)
          (.translate x y)
          (.translate (/ width 2) (/ height 2))
          (.rotate (* (/ gravity 20) (/ js.Math.PI 2)))
          (.drawImage bird-image
                      (- width) (- (/  height 2))
                      width height)
          (.restore))))
     {})))

(s/def ::draw-spec
  (s/* (s/cat :text string? :key keyword?)))

(defn dispatch-for [db & keys]
  (let [pairs  (s/conform ::draw-spec keys)
        y-gen  (iterate #(+ % 25) 25)]
    {:dispatch-n
     (mapv
      (fn [p y]
        [:canvas/draw-text
            (str (:text p) (get db (:key p)))
            [10 y]])
      pairs y-gen)}))


(re-frame/reg-event-fx
 :canvas/draw-info
 [(re-frame/inject-cofx :canvas/canvas)
  (re-frame/inject-cofx :db)
  (re-frame/path :game)]
 (fn [{:keys [canvas context db]}]
   (let [e  (dispatch-for db
                          "Score: " ::flap/score
                          "Max Score: " ::flap/max-score
                          "Generation: " ::flap/generation
                          "Interval: " ::flap/interval
                          "Alive: "   ::flap/alives)]
     e)))


(re-frame/reg-event-fx
 :canvas/draw-text
 [(re-frame/inject-cofx :canvas/canvas)]
 (fn [{:keys [context]} [_ text [x y]]]
   (doto context
     (aset "fillStyle" "white")
     (aset "font"  "20px Oswald, sans-serif")
     (.fillText text x y))
   {}))


(re-frame/reg-event-db
 :canvas/sprite-loaded
 []
 (fn [db [_ sprite-key sprite-value]]
   (debug "loaded " sprite-key)
   (-> db
       (assoc-in [:sprites sprite-key :loading?] false))))
