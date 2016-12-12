(ns flappy-cljs.db
  (:require [flappy-cljs.neural :as n]))

(def default-db
  {:fps 60
   :stop false
   :flappy-clj
   :flappy-cljs.neural/evolver {:flappy-cljs.neural/activation activation
                                :flappy-cljs.neural/random-clamped clamped-random
                                :flappy-cljs.neural/population 10
                                :flappy-cljs.neural/elitism .1
                                :flappy-cljs.neural/random-behaviour .5
                                :flappy-cljs.neural/mutation-range .5
                                :flappy-cljs.neural/mutation-rate .4
                                :flappy-cljs.neural/historic 4
                                :flappy-cljs.neural/low-historic false?
                                :flappy-cljs.neural/score-sort 0
                                :flappy-cljs.neural/child-count 2}
   :sprite-files {:bird "./img/bird.png"
                  :background "./img/background.png"
                  :pipetop "./img/pipetop.png"
                  :pipebottom "./img/pipebottom.png"}})
