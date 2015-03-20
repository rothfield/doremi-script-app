(ns doremi-script-app.app

  ;;(:require-macros [cljs.core.async.macros :refer [go]])
  (:require-macros [cljs.core :refer [assert]])
  (:require 
    [doremi-script-app.doremi_core :as doremi_core :refer [doremi-text->collapsed-parse-tree]]
    [goog.string :as gstring]
    [goog.net.XhrIo :as xhr]
    [cljs.core.async :refer [<! chan close!]]
    [reagent.core :as reagent :refer [atom]]
    [instaparse.core :as insta] 
    ))

(declare draw-item)
(def lookup-barline
  {
   "single-barline" "&#x1d100",
   "double-barline" "&#x1d101",
   "left-repeat" "&#x1d106",
   "mordent" "&#x1D19D&#x1D19D",
   "right-repeat" "&#x1d107",
   "final-barline" "&#x1d102",
   "reverse-final-barline" "&#x1d103"
   }
  )
(defn is-a[s v]
  assert(and (vector? v) (= (first v) s))
  )
(defn to-s[x]
  (.stringify js/JSON (clj->js x)))

(enable-console-print!)
(defn my-log[x]
  (.log js/console x)) 

(defn log[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))


(defonce app-state 
  (atom 
    {}))


(defn parse-results[]
  (log "in parse-results, @app-state")
  (log @app-state)
  [:div.form-group
   [:label {:for "parse-results"} "Parse Results:"]
   [:textarea#parse-results.form-control 
    {:rows "3" 
     :readOnly true
     :value 
     (.stringify js/JSON (clj->js (:parse-results @app-state)))
     }
    ]])

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
            parse-results (doremi-text->collapsed-parse-tree new-val nil)
            ]
        (swap! app-state assoc-in
               [:doremi-text]
               new-val)
        (swap! app-state assoc-in
               [:parse-results]
               parse-results)

        ) 
      )
    }])

(defn composition[parsed]
  (let [items [1 2 3]]
    ;;(log "entering composition, parsed=")
    ;;(log parsed)
    [:div.composition.doremiContent
     (map-indexed (fn composition-aux[idx item]
                    [:stave {:key idx} nil]
                    ) items)
     ]
    ))

(defn notes-line[item]
  (log "notes-line, item is")
  (log item)
  (assert (is-a "notes-line" item))
  [:div.stave.sargam_line
   (map-indexed
     (fn notes-line-aux[idx item]
       ^{:key idx }(draw-item item))
     (rest item))

   ])
;;; componentDidMount: function () { window.dom_fixes($(this.getDOMNode())); },
;;   componentDidUpdate: function () { window.dom_fixes($(this.getDOMNode())); },
;; var items = rest(item);


(defn line-item[h]
  (log "entering line-item, h is")
  (log h)
  (assert (:src h))
  (assert (:kind h))
  ;; className = item[0].replace(/-/g, '_');
  ;;src = "S" ;;; this.props.src;
  [:span {:class "note_wrapper"
          } 
   [:span.note {:class (:kind h)}
    "-"]])

(defn barline-aux[x idx]
  [:span.barline.note
   {:dangerouslySetInnerHTML {:key idx
                              :__html 
                              (get lookup-barline "double-barline")
                              }
    }
   ] 
  )



(defn beat[item]
  (assert (is-a "beat" item))
  (log "beat, item is")
  (log item)
  [:span.beat.looped
   (map-indexed
     (fn beat-aux[idx item]
       ^{:key idx }(draw-item item)
       )
     (rest item))
   ]
  )

;;   [:span.note_wrapper
;;       [:span.note.pitch 
;;       "S"]]
;; [:span.note_wrapper
;;     [:span.note.dash 
;;     "-"]]]






;;;;      var Pitch = createClass({
;;;;        displayName: 'Pitch',
;;;;        render: function () {
;;;;          //  if rendering in devanagri, add underline for flat
;;;;          // notes Db Eb Ab Bb
;;;;          var pitch = this.props.item;
;;;;          // TODO: move this into PitchSpan and style sharp and flat
;;;;          assert(isA("pitch", pitch));
;;;;          var items = rest(rest(pitch));
;;;;          var kommalIndicator = []
;;;;          if ((this.props.kind === "hindi-composition") &&
;;;;            (needs_underline[second(pitch)])
;;;;          ) {
;;;;            kommalIndicator = span({
;;;;              key: 99,
;;;;              className: "kommalIndicator"
;;;;            }, "_");
;;;;          }
;;;;    
;;;;          var beginSlurId = items.filter(function (x) {
;;;;            return ("begin-slur-id" === first(x));
;;;;          });
;;;;          var endSlurId = items.filter(function (x) {
;;;;            return ("end-slur-id" === first(x));
;;;;          });
;;;;          if (beginSlurId.length > 0) {
;;;;            this.props.slurId = beginSlurId[0][1];
;;;;          }
;;;;          if (endSlurId.length > 0) {
;;;;            this.props.endSlurId = endSlurId[0][1];
;;;;          }
;;;;          var ary = items.map(drawItem.bind(this));
;;;;          var pitchAry = renderPitchInKind(second(pitch),
;;;;            this.props.kind)
;;;;          var pitch1 = pitchAry[0]
;;;;          var alteration = pitchAry[1]
;;;;          var pitchSpan = PitchSpan({
;;;;            key: items.length + 1,
;;;;            src: pitch1,
;;;;          });
;;;;          var ary2 = ary.concat([pitchSpan]);
;;;;          var ary3
;;;;          if (alteration) {
;;;;            var alterationSpan = span({
;;;;              key: items.length + 2,
;;;;              className: "note pitch alteration",
;;;;              dangerouslySetInnerHTML: {
;;;;                __html: alteration
;;;;              }
;;;;            })
;;;;            ary3 = ary2.concat([alterationSpan])
;;;;          } else {
;;;;            ary3 = ary2
;;;;          }
;;;;          var noteWrapperProps = {
;;;;            className: "note_wrapper",
;;;;            key: this.props.key
;;;;          }
;;;;          if (endSlurId.length > 0) {
;;;;            merge(noteWrapperProps, {
;;;;              'data-begin-slur-id': endSlurId[0][1]
;;;;            })


(defn pitch-name[item]
  [:span.note.pitch 
   (second item)
   ]
  )

(defn pitch[item]
  ;;; ["pitch","C#",["octave",1],["syl","syl"]]
  (log "pitch") 
  (assert (is-a "pitch" item))
  (log item)
  (let [item2
        (into[] (cons ["pitch-name" (second item)] (rest (rest item))))
        ]
    (log "item2 is")
    (log item2)
    [:span.note_wrapper
     (map-indexed
       (fn pitch-aux[idx item]
         {:key idx } (draw-item item)
         )
       item2)
     ]
    ))
;;;;    [:span.note_wrapper
;;;;        [:span.upper_octave_1.upper_octave_indicator
;;;;             "•"]
;;;;        [:span.syl
;;;;         "syl"]
;;;;        [:span.note.pitch 
;;;;         "S"]
;;;;        [:span.note.pitch.alteration
;;;;             "♯"]]
(defn lyrics-section[lyrics-section-data]
  ;; assert(isA("lyrics-section", lyricsSection))
  ;; return rest(x) .join(" ");
  ;;
  (let [app-state @app-state]
    [:div.stave.lyrics_section.unhyphenated
     {:title "Lyrics Section"}
     "he- llo there john"]))


(defn stave[item]
  (log "stave")
  (log item)
  (assert (is-a "stave" item))
  [notes-line (first (rest item))]
  )



(defn measure[item]
  (assert (is-a "measure" item))
  (log "measure, item is")
  (log item)
  [:span {:class "measure"} 
   (map-indexed
     (fn measure-aux[idx item]
       {:key idx } (draw-item item)
       )
     (rest item))
   ]
  )

(defn syl[item]
  (assert (is-a "syl" item))
  (log "syl- item is")
  (log item)
  [:span.upper_octave_1.upper_octave_indicator
   "•"]
  )


(defn octave[item]
  (assert (is-a "octave" item))
  (log "octave- item is")
  (log "TODO")
  (log item)
  [:span.upper_octave_1.upper_octave_indicator
   "•"]
  )


(defn draw-item[item]
  (let [my-key (first item)]
    (log "draw-item, item is")
    (log item)
    (case my-key
      "syl"
      [syl item]
      "octave"
      [octave item]
      "pitch-name"
      [pitch-name item]
      "measure"
      [measure item]
      "notes-line"
      [notes-line item]
      "stave"
      [stave item]
      "beat"
      [beat item]
      "pitch"
      [pitch item]
      "dash"
      [line-item { :kind "dash" :src "-"}]
      [:span 
       (str "todo-draw-item" (.stringify js/JSON (clj->js item)))
       ]
      )))


(defn sample[]
  [:div.composition.doremiContent
   {}
   [:div.stave.lyrics_section.unhyphenated
    {, :title "Lyrics Section"}
    "he- llo"]
   [:div.stave.sargam_line
    {}
    [:span.note_wrapper
     {}
     [:span.note.line_number {} "1)"]]
    [:span.note_wrapper
     {}
     [:span.note.barline {} "𝄆"]]
    [:span.measure
     {}
     [:span.beat.looped
      {}
      [:span.note_wrapper
       {:style "margin-right: 28px;", }
       [:span.upper_attribute.ornament.placement_after
        {}
        [:span.ornament_item.lower_octave_1
         {}
         "N"]
        [:span.ornament_item.octave0
         {}
         "S"]]
       [:span.upper_octave_1.upper_octave_indicator
        {}
        "•"]
       [:span.syl {} "syl"]
       [:span.note.pitch {} "S"]
       [:span.note.pitch.alteration
        {}
        "♭"]]
      [:span.note_wrapper
       {}
       [:span.note.dash {} "-"]]
      [:span.note_wrapper
       {}
       [:span.note.dash {} "-"]]
      [:span.note_wrapper
       {}
       [:span.note.pitch
        {}
        "g"]]]]]][:div.composition.doremiContent
                  {}
                  [:div.stave.lyrics_section.unhyphenated
                   {, :title "Lyrics Section"}
                   "he- llo"]
                  [:div.stave.sargam_line
                   {}
                   [:span.note_wrapper
                    {}
                    [:span.note.line_number {} "1)"]]
                   [:span.note_wrapper
                    {}
                    [:span.note.barline {} "𝄆"]]
                   [:span.measure
                    {}
                    [:span.beat.looped
                     {}
                     [:span.note_wrapper
                      {:style "margin-right: 28px;", }
                      [:span.upper_attribute.ornament.placement_after
                       {}
                       [:span.ornament_item.lower_octave_1
                        {}
                        "N"]
                       [:span.ornament_item.octave0
                        {}
                        "S"]]
                      [:span.upper_octave_1.upper_octave_indicator
                       {}
                       "•"]
                      [:span.syl {} "syl"]
                      [:span.note.pitch {} "S"]
                      [:span.note.pitch.alteration
                       {}
                       "♭"]]
                     [:span.note_wrapper
                      {}
                      [:span.note.dash {} "-"]]
                     [:span.note_wrapper
                      {}
                      [:span.note.dash {} "-"]]
                     [:span.note_wrapper
                      {}
                      [:span.note.pitch
                       {}
                       "g"]]]]]]
  )


(defn doremi-box[]
  [:div.doremiBox
   [:h3
    "Enter letter music notation using 1234567CDEFGABC DoReMi (using drmfslt or DRMFSLT) SRGmPDN or devanagri: सर ग़म म'प धऩ\n\n"]
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
       :src "/images/blank.png?1426699590838"]]]]
   [composition (get-in @app-state [:parse-results :parsed])
    ]
   [:h3 "unit tests"]
   [:h4 "stave"]
   [stave ["stave",["notes-line",["measure",["beat",["pitch","C",["octave",0]]]]]]]
   [:div.sargam_line
    [beat ["beat",["pitch","C",["octave",0]],["dash"],["dash"]]]]
   [lyrics-section ["lyrics-line","he-","llo","john"]] 
   [:div.sargam_line [pitch ["pitch","C",["octave",0]]]]
   [:div [:br]]
   [:div.sargam_line [pitch ["pitch","C#",["octave",1],["syl","syl"]]]]
   [:span "barline follows"]
   [:div
    {:dangerouslySetInnerHTML {:__html 
                               (str "barline here?" (get lookup-barline "double-barline"))
                               }
     }
    ] 
   ]
  )

(defn calling-component []
  [doremi-box])

(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))

