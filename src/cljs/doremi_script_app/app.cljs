(ns doremi-script-app.app
  ;;(:require-macros 
  (:require-macros [cljs.core :refer [assert]]
                   ;;  [cljs.core.async.macros :refer [go]]
                   )
  (:require 
    [doremi-script-app.doremi_core :as doremi_core
     :refer [doremi-text->collapsed-parse-tree]]
    ;;  [goog.string :as gstring]
    [goog.net.XhrIo :as xhr]
    ;;  [cljs.core.async :refer [<! chan close!]]
    [reagent.core :as reagent :refer [atom]]
    [instaparse.core :as insta] 
    ))

(declare draw-item)

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



;;;;     
;;;;     . The Unicode character ♭(U+266D) is the flat sign. Its HTML entity is &#9837;.
;;;;    In Unicode, the sharp symbol (♯) is at code point U+266F. Its HTML entity is &#9839;. The symbol for double sharp (double sharp) is at U+1D12A (so &#119082;). These characters may not display correctly in all fonts.
;;;;    */
(def sharp-symbol "&#9839;")
(def flat-symbol  "&#9837;")
(def lookup_simple {
                    "b" "b"
                    "#" "#"
                    "." "&bull;"
                    "*" "&bull;"
                    "|:" "|:"
                    "~" "~"
                    ":|" ":|"
                    "|" "|"
                    "||" "||"
                    "%" "%"
                    "|]" "|"
                    "[|" "|"
                    })
;;;;        return LOOKUP[str];
;;;;      };
;;;;      if (false) {
;;;;        console.log(lookup_simple)
;;;;      }
(def lookup_html_entity {
                         "b" "&#9837;"
                         "#" "&#9839;"
                         "." "&bull;"
                         "*" "&bull;"
                         "|:" "&#x1d106"
                         "~" "&#x1D19D&#x1D19D"
                         ":|" "&#x1d107"
                         "|" "&#x1d100"
                         "||" "&#x1d101"
                         "%" "&#x1d10E"
                         "|]" "&#x1d102"
                         "[|" "&#x1d103"
                         })
(def lookup1 {
              "Cb" ["S", flat-symbol]
              "C" ["S"]
              "C#" ["S", sharp-symbol]
              "Db" ["r"]
              "D" ["R"]
              "D#" ["R", sharp-symbol]
              "Eb" ["g"]
              "E" ["G"]
              "E#" ["G", sharp-symbol]
              "F" ["m"]
              "F#" ["M"]
              "Gb" ["P", flat-symbol]
              "G" ["P"]
              "G#" ["P", sharp-symbol]
              "Ab" ["d"]
              "A" ["D"]
              "A#" ["D", sharp-symbol]
              "Bb" ["n"]
              "B" ["N"]
              "B#" ["N", sharp-symbol]
              })
(def lookup-number  {
                     "Cb" ["1", flat-symbol]
                     "C" ["1"]
                     "C#" ["1", sharp-symbol]
                     "Db" ["2", flat-symbol]
                     "D" ["2"]
                     "D#" ["2", sharp-symbol]
                     "Eb" ["3", flat-symbol]
                     "E" ["3"]
                     "E#" ["3", sharp-symbol]
                     "F" ["4"]
                     "F#" ["4", sharp-symbol]
                     "Gb" ["5", flat-symbol]
                     "G" ["5"]
                     "G#" ["5", sharp-symbol]
                     "Ab" ["6", flat-symbol]
                     "A" ["6"]
                     "A#" ["6", sharp-symbol]
                     "Bb" ["7", flat-symbol]
                     "B" ["7"]
                     "B#" ["7", sharp-symbol]
                     })
(def lookup-hindi 
  ;; TODO
  (let [ s  "&#x0938" ;;,"&#x1d100"u+938" "र"
        r "r"
        g "g";; "ग़"
        m  "m" ;; "म"
        p  "p" ;; "प"
        d  "d" ;;"ध"
        n  "n" ;; "ऩ"
        tick  "'"]
    {
     "Cb"(str s  flat-symbol)
     "C" s
     "C#"(str s  sharp-symbol)
     "Db" r
     "D" r
     "D#" (str r sharp-symbol)
     "Eb" g
     "E" g
     "E#" (str g  sharp-symbol)
     "F" m
     "F#" (str m  tick)
     "Gb" (str p  flat-symbol)
     "G" p
     "G#" (str p sharp-symbol)
     "Ab" d
     "A" d
     "A#" (str d  sharp-symbol)
     "Bb" n
     "B" n
     "B#" (str n  sharp-symbol)
     }))
(def lookup-ABC {
                 "Cb" ["C", flat-symbol]
                 "C" ["C"]
                 "C#" ["C", sharp-symbol]
                 "Db" ["D", flat-symbol]
                 "D" ["D"]
                 "D#" ["D", sharp-symbol]
                 "Eb" ["E", flat-symbol]
                 "E" ["E"]
                 "E#" ["E", sharp-symbol]
                 "F" ["F"]
                 "F#" ["F", sharp-symbol]
                 "Gb" ["G", flat-symbol]
                 "G" ["G"]
                 "G#" ["G", sharp-symbol]
                 "Ab" ["A", flat-symbol]
                 "A" ["A"]
                 "A#" ["A", sharp-symbol]
                 "Bb" ["B", flat-symbol]
                 "B" ["B"]
                 "B#" ["B", sharp-symbol]
                 })

(def lookup-DoReMi {
                    "Cb" ["D", flat-symbol]
                    "C" ["D"]
                    "C#" ["D", sharp-symbol]
                    "Db" ["R", flat-symbol]
                    "D" ["R"]
                    "D#" ["R", sharp-symbol]
                    "Eb" ["M", flat-symbol]
                    "E" ["M"]
                    "E#" ["M", sharp-symbol]
                    "F" ["F"]
                    "F#" ["F", sharp-symbol]
                    "Gb" ["S", flat-symbol]
                    "G" ["S"]
                    "G#" ["S", sharp-symbol]
                    "Ab" ["L", flat-symbol]
                    "A" ["L"]
                    "A#" ["L", sharp-symbol]
                    "Bb" ["T", flat-symbol]
                    "B" ["T"]
                    "B#" ["T", sharp-symbol]
                    })

(defn deconstruct-pitch-string-by-kind[pitch kind]
  (log "render-pitch-in-kind")
  (log "pitch is")
  (log pitch)
  (case kind
    "sargam-composition"
    (get lookup1 pitch)
    "number-composition"
    (get lookup-number pitch)
    "abc-composition"
    (get lookup-ABC pitch)
    "doremi-composition"
    (get lookup-DoReMi pitch)
    "hindi-composition"
    (get lookup-hindi pitch)
    ;;default:
    (get lookup1 pitch)
    )
  )


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
       (draw-item item idx))
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
       (draw-item item idx)
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
  (assert (is-a "pitch-name" item))
  (log "pitch-name, item is")
  (log item)
  (log (second item))
  [:span.note.pitch {:dangerouslySetInnerHTML  
                     {
                      :__html 
                      (second item)
                      }
                     }
   ]
  )

(defn pitch-alteration[item]
  (log "pitch-alteration") 
  (assert (is-a "pitch-alteration" item))
  [:span.note.pitch.alteration 
   {:dangerouslySetInnerHTML
    {
     :__html 
     (second item)
     }
    }
   ]
  ) 

(defn pitch[item]
  ;;; ["pitch","C#",["octave",1],["syl","syl"]]
  (log "pitch") 
  (assert (is-a "pitch" item))
  (log item)
  ;; need to sort attributes in order:
  ;; ornament octave syl note alteration
  (let [
        deconstructed-pitch ;; C#,sargam -> ["S" "#"] 
        (deconstruct-pitch-string-by-kind (second item)
                                          "sargam-composition" 
                                          ) 
        sort-table 
        {"ornament" 1 
         "octave" 2 
         "syl" 3 
         "pitch-name" 4 
         "pitch-alteration" 5}
        item-a
        (into[] (cons ["pitch-name" (first deconstructed-pitch)]
                      (rest (rest item))))
        alteration-string (second deconstructed-pitch)
        my-pitch-alteration (when alteration-string
                              ["pitch-alteration" alteration-string])

        item-b 
        (into[] (cons my-pitch-alteration item-a))
        item2 (sort-by #(get sort-table (first %)) item-b)
        ]
    (log "item2 is")
    ;;[["pitch-name","D#"],["octave",1],["syl","syl"]] 
    (log item2)
    [:span.note_wrapper
     (map-indexed
       (fn pitch-aux[idx item]
         (draw-item item idx)
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
       (draw-item item idx)
       )
     (rest item))
   ]
  )

(defn syl[item]
  (assert (is-a "syl" item))
  (log "syl- item is")
  (log item)
  [:span.syl (second item)]
  )


(defn octave[item]
  (log "octave- item is")
  (log item)
  (assert (is-a "octave" item))
  [:span.upper_octave_1.upper_octave_indicator
   "•"]
  )


(defn draw-item[item idx]
  (let [my-key (first item)]
    (log "draw-item, item is")
    (log item)
    (case my-key
      "pitch-alteration"
      ^{:key idx} [pitch-alteration  item]
      "syl"
      ^{:key idx} [syl  item]
      "octave"
     ^{:key idx}  [octave  item]
      "pitch-name"
      ^{:key idx} [pitch-name  item]
      "measure"
      ^{:key idx} [measure  item]
      "notes-line"
      ^{:key idx} [notes-line  item]
      "stave"
      ^{:key idx} [stave  item]
      "beat"
      ^{:key idx} [beat  item]
      "pitch"
      ^{:key idx} [pitch  item]
      "dash"
      ^{:key idx} [line-item { :kind "dash" :src "-"}]
      ^{:key idx} [:span 
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
   ;; [composition (get-in @app-state [:parse-results :parsed])
   ;; ]
   [:h3 "unit4
        tests"]
   [:div.sargam_line [pitch ["pitch","D#",["octave" 2]["syl""syl"]]]]
   ;;;;    [:h4 "stave"]
   ;;;;    [stave ["stave",["notes-line",["measure",["beat",["pitch","C",["octave",0]]]]]]]
   ;;;;    [:div.sargam_line
   ;;;;     [beat ["beat",["pitch","C",["octave",0]],["dash"],["dash"]]]]
   ;;;;    [lyrics-section ["lyrics-line","he-","llo","john"]] 
   ;;;;    [:div.sargam_line [pitch ["pitch","C",["octave",0]]]]
   ;;;;    [:div [:br]]
   ;;;;    [:div.sargam_line [pitch ["pitch","C#",["octave",1],["syl","syl"]]]]
   ;;;;    [:span "barline follows"]
   ;;;;    [:div
   ;;;;     {:dangerouslySetInnerHTML {:__html 
   ;;;;                                (str "barline here?" (get lookup-barline "double-barline"))
   ;;;;                                }
   ;;;;      }
   ;;;;     ] 
   ]
  )

(defn calling-component []
  [doremi-box])

(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))

