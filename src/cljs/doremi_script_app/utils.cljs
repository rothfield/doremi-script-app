(ns doremi-script-app.utils
  (:require 
    [clojure.walk :refer [postwalk] ]
))

(defn keywordize-vector[my-vec]
 (postwalk (fn[x] (if (and (vector? x)
                           (string? (first x)))
                      (assoc x 0 (keyword (first x)))
                    x)) my-vec  ))


;; (prn "**********************" (keywordize-vector ["hi" 2 {"a" 1}  ["john" ["there" 1 2 3]]]))

(defn is-a[s v]
  assert(= (name (first v)) (name s)))

(defn by-id [id]
    (.getElementById js/document (name id)))

(def log-off (atom true))

(defn my-log[x]
  (.log js/console x) )

(defn my-log2[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))

(defn log[& my-args]
  (when-not @log-off
    (dorun (map 
             #(my-log (.stringify js/JSON (clj->js %)))
             my-args))))

(defn pprint[x]
  (log x))
