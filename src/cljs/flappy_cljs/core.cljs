(ns flappy-cljs.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [devtools.core]
              [flappy-cljs.events]
              [flappy-cljs.subs]
              [flappy-cljs.views :as views]
              [flappy-cljs.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root)
  (re-frame/dispatch [:warm-up]))
