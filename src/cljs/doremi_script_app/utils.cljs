(ns doremi-script-app.utils
  (:require 
    [clojure.walk :refer [postwalk] ]
    [clojure.string :refer [lower-case split join] :as string] 
))

(defn keywordize-vector[my-vec]
 (postwalk (fn[x] (if (and (vector? x)
                           (string? (first x)))
                      (assoc x 0 (keyword (first x)))
                    x)) my-vec  ))


;; (prn "**********************" (keywordize-vector ["hi" 2 {"a" 1}  ["john" ["there" 1 2 3]]]))
;;
(defn is?[s v]
  assert(= (name (first v)) (name s)))

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



    ;[clojure.string :refer [lower-case split join] :as string] 

(defn format-instaparse-errors
  "Tightens up instaparse error format by deleting newlines after 'of' "
  [z]
  { :pre [string? z]
   :post [(string? %)]
   }
  (if (string? z)
    z
    (let [a (with-out-str (println z))
          ;;_ (println "a is" a)
          [left,right] (split a #"of")
          ]
      (str left "of\n"
           (if right
             (string/replace right #"\n" " "))))))


(defn map-even-items [f coll]
  (map-indexed #(if (zero? (mod %1 2)) (f %2) %2) coll))


(defn ^:private attribute-section->map[x]
  {
   ;;  :pre [(is-a? :attribute-section x)]
   ;; :post [ (map? %)]
   }
  (assert (= :attribute-section (first x)))
  (apply array-map
         (map-even-items #(-> % lower-case keyword)
                         (rest x)))
  )

(defn get-attributes[composition]
  (when false
    (prn "entering get-attributes, composition=")
  (prn composition))
  (assert (= :composition (first composition)))
  (->> (rest composition)
       (filter #(= :attribute-section (first %)))
       first
       attribute-section->map))

