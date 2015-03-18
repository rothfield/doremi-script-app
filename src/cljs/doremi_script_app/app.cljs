(ns doremi-script-app.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [reagent.core :as reagent :refer [atom]]
    [instaparse.core :as insta] 
    ))

(defn to-s[x]
  (.stringify js/JSON (clj->js x)))

(defn my-log[x]
  (.log js/console x)) 

(defn log[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))


(def doremi-parser
  (insta/parser 
    "S = AB*
    AB = A B
    A = 'a'+
    B = 'b'+"))


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
    #(do (let [new-val
               (-> % .-target .-value)
               ]
           (swap! app-state assoc-in
                  [:doremi-text]
                  new-val)
           (log (doremi-parser new-val))
           (swap! app-state assoc-in
                  [:parse-results]
                  (to-s (doremi-parser new-val))
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
