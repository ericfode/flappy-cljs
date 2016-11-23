(ns flappy-cljs.neural
  (:require [cljs.spec :as s]
            [clojure.test.check.generators :as gen]
            [cljs.spec.test :as st]
            [cljs.core :as c]))


(s/def ::activation
  (s/fspec :args (s/cat :a number?) :ret number?))


(s/def ::random-clamped
  (s/fspec :args (s/cat :a number?) :ret number?))

(s/def ::random-population number?)
(s/def ::elitism number?)
(s/def ::random-behaviour number?)
(s/def ::mutation-range number?)
(s/def ::network (s/cat :percepterons int?
                        :hidden-layer (s/spec (s/coll-of number?))
                        :output-layer int?))
(s/def ::historic int?)
(s/def ::low-historic boolean?)
(s/def ::score-sort int?)
(s/def ::child-count int?)

(s/def ::neural-evolver
  (s/keys :req [::activation
                ::random-clamped
                ::population
                ::elitism
                ::random-behaviour
                ::mutation-range
                ::mutation-rate
                ::network
                ::historic
                ::low-historic
                ::score-sort
                ::child-count]))


(s/def ::value number?)


(s/def ::scaler
  (s/with-gen
    (s/and #(< % 1)
           #(> % -1)
           number?)
    #(gen/double* {:min -0.99 :max 0.99 :infinite? false :NaN? false})))


(s/def ::weights (s/coll-of ::scaler  :into []))

(defn clamped-random [] (- (* 2 (js.Math.random)) 1))

(defn activation [a]
  (let [ap (/ (- a) 1)]
        (/ 1 (+ 1 (js.Math.exp ap)))))

(s/def ::neuron
  (s/keys
   :req [::vaule
         ::weights]))

(s/def ::id int?)
(s/def ::neurons (s/coll-of ::neuron :into []))
(s/def ::layer
  (s/keys
   :req [::id
         ::neurons]))


(s/def ::input-dim (s/and  integer?
                           #(<= 0 %)))

(s/def ::layer-cnt (s/and integer?
                          #(< 0 %)))

(s/def ::network
  (s/keys :req [::layers]))

(s/def ::id integer?)

(s/fdef make-neuron
        :args (s/cat :neuron-params  (s/keys :opt [::input-dim]))
        :ret ::neuron)

(defn make-neuron
  [{cnt ::input-dim :or {cnt 1} :as opts}]
  {::input-dim cnt
   ::weights (into [] (take cnt (rest (iterate clamped-random nil))))})



(s/fdef make-layer
        :args (s/cat :layer-params (s/keys :opt [::layer-cnt ::id ::input-dim]))
        :ret ::layer)

(defn make-layer
  [{layer-cnt ::layer-cnt id ::id input-dim ::input-dim :or {layer-cnt 1  input-dim 1 id 0}}]
  {::id id
   ::neurons (into [] (take layer-cnt (rest (iterate #(make-neuron  {::input-dim input-dim} ) 0))))})

(s/fdef make-network
 :args (s/cat :input integer? :hiddens (s/spec (s/coll-of   integer?)) :outputs integer?)
 :ret ::network
 :fn (s/and (fn [{:keys [ret]}]
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
    {::layers (conj most-layers output-layer)}))

(st/instrument)
