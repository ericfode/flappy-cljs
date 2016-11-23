(ns flappy-cljs.db)

(def default-db
  {:fps 60
   :stop false
   :sprite-files {:bird "./img/bird.png"
                  :background "./img/background.png"
                  :pipetop "./img/pipetop.png"
                  :pipebottom "./img/pipebottom.png"}})
