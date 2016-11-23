(ns flappy-cljs.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [flappy-cljs.core-test]))

(doo-tests 'flappy-cljs.core-test)
