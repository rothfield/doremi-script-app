(ns doremi-script-app.utils
  )

(defn is-a[s v]
  assert(= (name (first v)) (name s)))

(def log-off (atom true))

(defn by-id [id]
    (.getElementById js/document (name id)))

(defn my-log[arg]
  (.log js/console arg))

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
