(ns async-test.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.Uri] 
            [goog.net.XhrIo]
            [goog.json]
            [goog.events :as events]
            [cljs.core.async :refer [close! timeout put! chan <!]])
  (:import [goog.net Jsonp]
           [goog Uri])
  )

(def server-url
  "http://ragapedia.local:4000/doremi-server/parse"
  ;;   "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
  ;;  "http://ragapedia.com/doremi-server/parse"
  )

(def wiki-url "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
  )


(defn jsonp [uri]
  (let [out (chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (put! out res)))
    out))


;;(go (.log js/console (<! (jsonp (str  wiki-url "cats")))))

(defn parse-xhr[url src  kind]
  ;; make xhr call, return channel
  (let [ out (chan)
        query-data (new goog.Uri/QueryData) ]
    (.set query-data "src"  src)
    (.set query-data "kind" (name  kind))
    (goog.net.XhrIo/send 
      url
      (fn[event]
        ;; (println "in callback")
        (let [raw-response (.-target event)
              response-text (.getResponseText raw-response)
              my-map (-> response-text
                         goog.json/parse
                         (js->clj :keywordize-keys true)
                         )]
          ;;  (println "my-map=" my-map)
          (put! out my-map)
          ))
      "POST"
      query-data)
    out 
    ))

(enable-console-print!)


(defn listen [el type]
  (let [out (chan 1)]
    (events/listen el type
                   (fn [e] (put! out e)))
    out))

(defn user-letter-notation []
  (.-value (dom/getElement "letter_notation")))

(defn user-kind[]
  :number-composition
  )

(def seconds 1000)

(defn render-results[x]
  x)



(defn init []
  (let [ parse-output (dom/getElement "parse_output")
        last-value (atom "") 
        keypresses (listen (dom/getElement "letter_notation") "keypress")]
    (go (while true
          (<! keypresses)
          (let [cur-value (user-letter-notation)]
            (when (not= cur-value @last-value) 
              (reset! last-value cur-value)
              (let [
                    _ (when false results (<! (parse-xhr 
                                                server-url
                                                (user-letter-notation)
                                                (user-kind)
                                                )))
                    results (<! (jsonp (str  wiki-url cur-value)))
                    ]
                ; (.log js/console "results are" results)
                (set! (.-innerHTML parse-output) (render-results results))
                )
              (<! (timeout (* 6 seconds))) 
              ))
          ))))

