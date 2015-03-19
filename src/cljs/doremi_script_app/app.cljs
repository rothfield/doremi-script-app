(ns doremi-script-app.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [goog.net.XhrIo :as xhr]
    [cljs.core.async :refer [<! chan close!]]
    [reagent.core :as reagent :refer [atom]]
    [instaparse.core :as insta] 
    ))


(defn GET [url]
  (let [ch (chan 1)]
    (xhr/send url
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (go (>! ch res)
                      (close! ch)))))
    ch))




(enable-console-print!)
(defn my-log[x]
  (.log js/console x)) 

(defn log[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))

(def url1
  "http://dimagog.github.io/sitemap.txt")

(def url2
  "ebnf/doremiscript.ebnf.txt.html"
  )



(def grammar-text (atom ""))
(defn to-s[x]
  (.stringify js/JSON (clj->js x)))



(def old-doremi-parser
  (insta/parser 
    "S = AB*
    AB = A B
    A = 'a'+
    B = 'b'+"))


(def the-parser (atom {}))

(defn my-callback[x]
   (let [data (js->clj (.getResponseText (.-target x))
                       :keywordize-keys true)]
    (reset! the-parser (insta/parser  data))
  )
 ) 


(defn load-xhr[]
;; http://www.myclojureadventure.com/2012/09/intro-to-clojurescript-part-2-getting.html
  (.send goog.net.XhrIo url2
         my-callback)) 

(load-xhr)
(log "after load-xhr")



(def zzz
  (insta/parser
    "S = AB*
    AB = A B
    A = 'a'+
    B = 'b'+"))


(defonce app-state 
  (atom 
    {}))

(defn parse-results[]
  [:div
   [:pre
    (:parse-results @app-state)]
   ])

(defn entry-area[]
  [:textarea#the_area.entryArea
   {:style
    {:overflow "hidden"  :word-wrap "break-word"  :resize "horizontal"  :height "120.106669072752px" }
    :placeholder
    "Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: सर ग़म म'प धऩ   Example:  | 1 -2 3- -1 | 3 1 3 - |   ",
    :name "src",
    :value (:doremi-text @app-state) 
    :on-change 
    (fn[x] 
      (let [new-val
            (-> x .-target .-value)
            parse-results (@the-parser new-val
                                         :start :sargam-composition)

            ]
        (log "new-val is" new-val)
        (log "parse-results" parse-results)
        (swap! app-state assoc-in
               [:doremi-text]
               new-val)
        (swap! app-state assoc-in
               [:parse-results]
               (to-s parse-results)
               )
        ) 
      )
    }])

(defn doremi-box[]
  [:div.doremiBox
   [:h3
    "Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: सर ग़म म'प धऩ\n\n"]
   [:div.controls
    [:div.selectNotationBox
     [:label
      "Enter Notation as: "]
     [:select#selectNotation
      [:option]
      [:option
       "ABC"]
      [:option
       "doremi"]
      [:option
       "hindi( स र ग़ म म' प ध ऩ )"]
      [:option
       "number"]
      [:option
       "sargam"]]]
    [:div.RenderAsBox
     [:label { :for "renderAs"} "Render as:"]
     [:select#renderAs
      [:option {:value ""}]
      [:option
       "ABC"]
      [:option
       "doremi"]
      [:option
       "hindi( स र ग़ म म' प ध ऩ )"]
      [:option
       "number"]
      [:option
       "sargam"]]]
    [:button
     {
      :title "Generates staff notation and MIDI file using Lilypond",
      :name "generateStaffNotation"}
     "Generate Staff Notation/ MIDI/ Lilypond"]
    [:button.toggleButton
     "Lilypond"]
    [:a.hidden
     "Play MIDI File(Turn Volume Up!)"]
    [:button.toggleButton
     "Staff Notation Hide/Show"]
    [:a
     {
      :href
      "https://rawgithub.com/rothfield/doremi-script/master/test/good_test_results/report.html",
      :target "_blank",
      :title "Opens in new window"}
     "Visual test suite"
     ]
    [:a
     {
      :href "https://github.com/rothfield/doremi-script#readme",
      :target "_blank",
      :title "Opens in new window"
      }
     "Help"]]
   [:div.entryAreaBox.doremiContent
    [entry-area]
    ]
   [parse-results]
   [:div.compositionParseFailed.hidden
    [:pre 
     [:div.lilypondDisplay.hidden 
      [:img#staff_notation
       :name "",
       :src "/images/blank.png?1426699590838"]
      [:div.composition.doremiContent ]]]]])

(defn calling-component []
  [doremi-box])

(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
