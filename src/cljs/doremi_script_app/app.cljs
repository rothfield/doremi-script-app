(ns doremi-script-app.app
  ;;(:require-macros 
  (:require-macros [cljs.core :refer [assert]]
                   ;;  [cljs.core.async.macros :refer [go]]
                   )
  (:require 
    [doremi-script-app.utils :refer [get-attributes keywordize-vector my-log2 my-log by-id log is-a] ]
   ;; [doremi-script-app.doremi_core :as doremi_core
    ;; :refer [doremi-text->collapsed-parse-tree]]
    [goog.Uri] 
    [goog.net.XhrIo]
    [goog.json]
    [clojure.set]
    [clojure.string :as string :refer [lower-case upper-case join]]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    ;;    [cljs.core.async :refer [<! chan close! timeout put!]]
    [reagent.core]
    [instaparse.core :as insta] 
    ))
(enable-console-print!)

(def production?
  ;; set the global in index.html
  (and (not= js/undefined js/DOREM_SCRIPT_APP_ENV)
       (= js/DOREM_SCRIPT_APP_ENV "production")
       ))
(log "production? = " production?)
;;(= "production" (get (System/getenv) "APP_ENV")))

(def development?
  (not production?))

(def mode->notes-used
  {
   :ionian "SRGmPDN"
   :dorian "SRgmPDn"
   :phyrgian "SrgmPdn"
   :lydian "SRGMPDN"
   :mixolydian "SRGmPDn"
   :aeolian "SRgmPdn"
   :locrian "SrgmPdn"

   :major "SRGmPDN"
   :minor "SRgmPdn"
   (keyword "harmonic minor") "SRgmPdN"

   :bilaval "SRGmPDN"
   :kafi "SRgmPDn"
   :bhairavi "SrgmPdn"
   :kalyan "SRGMPDN"
   :khammaj "SRGmPDn"
   :asavri "SRgmPdn"

   :marwa "SrGMPDN"
   :purvi "SrGMPdN"
   :lalit "SrGmMPdN"
   :hindol "SGMDN"
   :kirwani "SRgmPdN"
   (keyword "ahir bhairav") "SrGmPDn"
   }) 

;; TODO:  | S - - - |||  three barlines crashes the parser
;;
;;(log "(-> | S-  doremi-text->parsed))" (-> "| S- " doremi-text->parsed))


(def lower-sargam? #{"s" "r" "g" "m" "p" "d" "n"})
(def upper-sargam? #{"S" "R" "G" "M" "P" "D" "N"})

(defn remove-if-both-cases[my-set ch]
  ;;(log "remove-if-both-cases, " my-set ch)
  (let [lower-ch (lower-case ch)
        upper-ch (upper-case ch)]
    (if (and (get my-set lower-ch)
             (get my-set upper-ch)
             )
      (clojure.set/difference my-set #{ lower-ch upper-ch })
      my-set
      )))

;;(log "remove-if-both-cases test:" (remove-if-both-cases #{"N" "n" "S"} "n"))

(defn notes-used-set-for[{mode :mode notes-used :notes-used}]
  (log "entering notes-used-set-for, mode,notes-used" mode notes-used)
  (let [
        mode-notes-used (when mode
                          (get mode->notes-used  (keyword (lower-case mode)) ""))
        _ (log "mode-notes-used=*************" mode-notes-used)
        notes-used2 (or  notes-used
                        mode-notes-used
                        "SP")
        _ (log "notes-used2=*************" notes-used2)

        ]
    (assert (string? notes-used2))
    (set (reduce (fn[accum item] (remove-if-both-cases accum item))
                 notes-used2
                 "rgmdn"))
    ))

(defn sargam-set->key-map[sargam-set]
  ;; Returns a keymap: ie {"s" "S" }. Saves typing
  (assert (set? sargam-set))
  (log "entering sargam-set->key-map sargam-set is" sargam-set)
  (reduce (fn[accum item]
            (if (upper-sargam? item)
              (assoc (assoc accum item (lower-case item))
                     (lower-case item) item)
              ;; else
              accum
              )) 
          {"s" "S" "p" "P"}  sargam-set)
  )

(comment
  (sargam-set->key-map #{"S" "R" "G" "m" "P" "D" "N"})
  (comment "test:  @key-map is" @key-map)
  )

(defonce key-map (reagent.core/atom {}))

(defonce app-state
  (reagent.core/atom 
    {
     :ajax-is-running false 
     :composition-kind :sargam-composition
     :mp3-url nil
     ;;"http://ragapedia.com/compositions/yesterday.mp3"
     :render-as :sargam-composition
     :staff-notation-path nil 
     :composition nil 
     }))


(declare draw-item) ;; need forward reference since it is recursive

(enable-console-print!)

(defn css-class-name-for[x]
  (string/replace (name x) "-" "_")
  )


(def GENERATE-STAFF-NOTATION-URL
  (if production?
    "http://ragapedia.com/doremi-server/run-lilypond-on-doremi-text"
    "http://localhost:4000/doremi-server/run-lilypond-on-doremi-text")
  )


(defn load-doremi-url-xhr[url]
  (swap! app-state assoc :ajax-is-running true)
  (log "load-doremi-url-xhr")
  (log "load-doremi-url-xhr: url is" url)
  (goog.net.XhrIo/send url
                       (fn [event]
                         (swap! app-state assoc :ajax-is-running false)
                         (log "in callback")
                         (let [raw-response (.-target event)
                               response-text (.getResponseText raw-response)
                               ]
                           (set! (.-value (sel1 :#the_area)) response-text)
                           ))
                       "GET"))


(defn generate-staff-notation-xhr-callback[event]
  ;; response looks somthing like
  ;; {
  ;;
  ;; :links [xxx]
  ;; :composition [:composition...
  ;; :error "fadfadf"
  ;;   }
  (swap! app-state assoc :ajax-is-running false)
  (log "in generate-staff-notation-xhr callback")
  (let [raw-response (.-target event)
        response-text (.getResponseText raw-response)
        my-map (-> response-text
                   goog.json/parse
                   (js->clj :keywordize-keys true)
                   )
        composition (keywordize-vector (:composition my-map))
        _ (when false (prn "composition is " composition))
        links (:links my-map)
        attributes (if composition (get-attributes composition) {})
        notes-used (:notesused attributes)
        mode (:mode attributes)
        ]
    (log "in callback my-map" my-map)
    (log "in callback mode=********" mode)
    (log "in callback, links=" links)
    (log "*****in callback, notes-used,mode" notes-used mode)
    ;;; TODO: have :links key in app-state or separate atom
    ;;; for links
    (log "(:error my-map)=" (:error my-map))
    (when (not (:error my-map))
      (reset! key-map
              (->
                {:mode mode :notes-used notes-used}
                notes-used-set-for
                sargam-set->key-map ))) 

    (reset!  app-state
            ;; TODO: use merge
            (assoc @app-state
                   :composition
                   composition
                   :error
                   (:error my-map)
                   :browse-url
                   (:browse-url links)
                   :pdf-url
                   (:pdf-url links)
                   :mp3-url
                   (:mp3-url links)
                   :staff-notation-url
                   (:staff-notation-url links)
                   :midi-url
                   (:midi-url links)
                   :lilypond-url
                   (:lilypond-url links)
                   :doremi-text-url
                   (:doremi-text-url links)))
    (log "after xhr callback-app-state is" @app-state)
    ))

(defn generate-staff-notation-xhr [url content]
  (when (not (:ajax-is-running @app-state))
    (log "entering GENERATE-STAFF-NOTATION-URL" url content)
    (swap! app-state assoc :staff-notation-url nil)
    (swap! app-state assoc :ajax-is-running true)
    (swap! app-state assoc :composition nil)

    (let [ query-data (new goog.Uri/QueryData) ]
      ;; TODO: try sending json
      (.set query-data "src"  (:src content))
      (.set query-data "kind"  (name (:kind content)))
      (.set query-data "mp3"  true)
      (goog.net.XhrIo/send url
                           generate-staff-notation-xhr-callback
                           "POST"
                           query-data))))

(def class-for-octave
  {nil "octave0"
   0 "octave0"
   -1 "lower_octave_1"
   -2 "lower_octave_2"
   -3 "lower_octave_3"
   -4 "lower_octave_4"
   1 "upper_octave_1 upper_octave_indicator"
   2 "upper_octave_2 upper_octave_indicator"
   3 "upper_octave_3 upper_octave_indicator"
   4 "upper_octave_4 upper_octave_indicator"
   5 "upper_octave_5 upper_octave_indicator"
   }
  )
(def class-for-ornament-octave
  {nil "octave0"
   0 "octave0"
   -1 "lower_octave_1"
   -2 "lower_octave_2"
   -3 "lower_octave_3"
   -4 "lower_octave_4"
   1 "upper_octave_1"
   2 "upper_octave_2"
   3 "upper_octave_3"
   4 "upper_octave_4"
   5 "upper_octave_5"
   }
  )



;;     . The Unicode character ♭(U+266D) is the flat sign. Its HTML entity is &#9837;.
;;    In Unicode, the sharp symbol (♯) is at code point U+266F. Its HTML entity is &#9839;. The symbol for double sharp (double sharp) is at U+1D12A (so &#119082;). These characters may not display correctly in all fonts.

(def bullet "&bull;")
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
  (log "deconstruct-pitch-string-by-kind" " kind is:" kind) 
  (log "pitch is")
  (log pitch)
  (case kind
    :sargam-composition
    (get lookup1 pitch)
    :number-composition
    (get lookup-number pitch)
    :abc-composition
    (get lookup-ABC pitch)
    :doremi-composition
    (get lookup-DoReMi pitch)
    :hindi-composition
    (get lookup-hindi pitch)
    ;;default:
    (get lookup1 pitch)
    )
  )

(def mordent-entity "&#x1D19D&#x1D19D")

(def lookup-barline
  {
   :single-barline "&#x1d100"
   :double-barline "&#x1d101"
   :left-repeat "&#x1d106"
   :mordent "&#x1D19D&#x1D19D"
   :right-repeat "&#x1d107"
   :final-barline "&#x1d102"
   :reverse-final-barline "&#x1d103"
   }
  )

(defn downloads[]
  [:div.dropdown.downloads
   [:button#dropdownMenu1.btn.btn-default.dropdown-toggle
    {:aria-expanded "true", :data-toggle "dropdown", :type "button"}
    "Links"
    [:span.caret]]
   [:ul.dropdown-menu
    {:aria-labelledby "dropdownMenu1", :role "menu"}
    [:li [:a {:href "browse" ;; TODO: have server provide list of links ALA rest
              :target "_blank"
              :tabIndex "-1", :role "menuitem"}
          ]]
    (if (:staff-notation-url @app-state)
      (doall (map-indexed
               (fn[idx z] 
                 [:li
                  {:role "presentation"
                   :key idx}
                  [:a
                   {:href (or (z @app-state) "#") 
                    :target "_blank"
                    :tabIndex "-1", :role "menuitem"}
                   (string/replace (name z) #"-url$"   "")]])
               [:browse-url :pdf-url :mp3-url :midi-url :doremi-text-url :lilypond-url :staff-notation-url]))) 
    ]]      
  )

(defn display-parse-to-user-box []
  (let [error (get-in @app-state [:error])
        _ (log "in display-parse-to-user-box, error=" error)
        parse-results (:composition @app-state)
        _ (log "in display-parse-to-user-box, parsed" parse-results)
        ]
    [:div.form-group
     {
      :class (if error "has-error" "") 
      }
     [:label.control-label {:for "parse-results"
                            } "Parse Results:"]
     [:textarea#parse-results.form-control 
      {:rows "3" 
       :spellCheck false
       :readOnly true
       :value 
       (if error
         (print-str error)
         (print-str parse-results))
       }
      ]]))


;;;;     parse: function () {
;;;;       var current = $('#the_area')
;;;;         .val()
;;;;       if (debug) {
;;;;         console.log("parse")
;;;;       }
;;;;       if (this.state.data.ajaxIsRunning) {
;;;;         return
;;;;       }
;;;;       if (this.state.data.lastTxtParsed === current) {
;;;;         return
;;;;       }
;;;;       if (current === "") {
;;;;         return
;;;;       }
;;;;       this.setState({
;;;;         data: merge(this.state.data, {
;;;;           lastTxtParsed: current
;;;;         })
;;;;       })
;;;;       this.ajaxCall($('#the_area')
;;;;         .val(), false, this.state.data.kind);
;;;;     },

(def text-area-placeholder
  "Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: सर ग़म म'प धऩ   Example:  | 1 -2 3- -1 | 3 1 3 - |   ",
  )

(defn get-selection[dom-node]
  {:start (.-selectionStart dom-node)
   :end (.-selectionEnd dom-node)
   })

(defn my-contains?[x y]
  (not= -1 (.indexOf x y))
  )

(defn within-sargam-line?[txt idx]
  (comment "within-sargam-line?, txt,idx,class(text)" txt idx )
  (let [ left (.substring txt 0 idx) 
        right (.substring txt idx)
        x (.indexOf right "\n")
        index-of-right-newline (if (not= -1 x)
                                 (+ idx x)
                                 (.-length txt)
                                 )
        y (.lastIndexOf left "\n")
        index-of-left-newline (if (not= -1 y)
                                (inc y)
                                0) 
        _ (comment "index-of-left-newline=" index-of-left-newline)
        line (.substring txt index-of-left-newline 
                         index-of-right-newline)
        _ (comment "line is" line)
        ]
    (comment "left right index-of-right-newline" left right index-of-right-newline)
    (comment "line is" line)
    (my-contains? line "|")))


(def my-val (reagent.core/atom ""))

(defn on-key-press[evt] 
  (if (not= :sargam-composition (get @app-state :composition-kind))
     true 
    (do
  (log "entering on-key-press")
  (let [
        my-key-map @key-map
        target (.-target evt)
        key-code (.-keyCode evt)
        ctrl-key? (or (.-ctrlKey evt)
                      (.-altKey evt)
                      (.-metaKey evt))
        from-char-code-fn (.-fromCharCode js/String)
        ch (from-char-code-fn key-code)
        ; _ (log "evt is" evt) 
        ; _ (comment "ch is ****" ch)
        ; _ (comment "my-key-map is" my-key-map)
        new-char (if-not ctrl-key?  (get my-key-map ch ))
        ; _ (comment "new-char ****" new-char " *********")
        caret-pos (.-selectionStart target)
        ; _ (comment "caret-pos" caret-pos)
        ;; var caretPos = document.getElementById("txt").selectionStart;
        text-area-text (.-value target)
        ; _ (comment "text-area-text=" text-area-text) 
        selection (get-selection target)
        ; _ (comment "selection is" selection)
        my-within-sargam-line (within-sargam-line? text-area-text (:start selection))
        ; _ (comment "my-within-sargam-line=" my-within-sargam-line)
        ]
    ;;; nativeEvent looks like  {which: 189, keyCode: 189, charCode: 0, repeat: false, metaKey: false…}
    (comment "app-state is" @app-state)
    ;;  jQuery("#txt").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
    (if (and my-within-sargam-line
             new-char)
      (do
        ;; (.preventDefault evt)
        (set! (.-value target)
              (str (.substring text-area-text 0 caret-pos) 
                   new-char 
                   (.substring text-area-text caret-pos)))
        (set! (.-selectionStart target)
              (inc (:start selection)))
        (set! (.-selectionEnd target)
              (inc (:end selection)))
        false)
      ;; else
      true )
    ))))

(def stored-selection (reagent.core/atom nil))
;;{:start nil :end nil})



(defn entry-area-box[]
  [:div.form-group
   [:label {:for "entryArea"} "Enter Letter Notation Source:"]
   [:textarea#the_area.entryArea.form-control
    {
     :autofocus true
     :placeholder text-area-placeholder
     :name "src",
     :spellCheck false
     } 
    ]])


(defn draw-children[items]
  (doall (map-indexed
           (fn notes-line-aux[idx item]
             (draw-item item idx))
           items)))

(defn staff-notation[]
  [:img#staff_notation
   {:src (get @app-state :staff-notation-url)}])

(defn html-rendered-composition[]
  (let [composition (:composition @app-state)] 

    (if (not composition)
      [:div.composition.doremiContent ]
      ;; else
      [:div.composition.doremiContent
       (draw-children (rest composition))]
      )))


(defn zzzparse[]
  (when (by-id "the_area")
    (let [;; current (get @app-state :doremi-text)
          elem (by-id "the_area")
          current (.-value elem)
          last-text-parsed (get @app-state :last-text-parsed)
          ajax-is-running (get @app-state :ajax-is-running)
          kind  (get @app-state :composition-kind)
          ]
      ;;(log "current="  current)
      (cond 
        (= nil current)
        nil
        (= "" current)
        nil
        (= current last-text-parsed)
        nil
        :else 
        (let
          [ ;;_ (log "should parse")
           my-parse-results {} ;;;;(doremi-text->collapsed-parse-tree current kind)
           _ (comment "my-parse-results" my-parse-results)
           ;;notes-used (get-in my-parse-results [:attributes :notesused])
           attributes (get my-parse-results :attributes {})
           _ (comment "attributes=")
           _ (comment attributes)
           my-mode (-> (get attributes :mode "unknown")
                       lower-case 
                       keyword)
           _ (comment "my-mode" my-mode)
           mode-notes-used (set 
                             (get mode->notes-used  my-mode ""))
           _ (comment "mode-notes-used" mode-notes-used)
           notes-used1 (-> (get attributes :notesused "")
                           set
                           )
           notes-used2 (cond 
                         (not (empty? notes-used1))
                         notes-used1
                         mode-notes-used
                         mode-notes-used
                         :else 
                         "SP")
           _ (comment "notes-used2" notes-used2)
           notes-used
           (set (reduce (fn[accum item] (remove-if-both-cases accum item))
                        notes-used2
                        "rgmdn"))
           _ (comment "app/parse: notes-used=" notes-used)
           ]
          (log "****in parse, parse-results are")
          (log  my-parse-results)
          (log "in parse, app-state=")
          (log @app-state)
          (sargam-set->key-map  notes-used)
      ;    (swap! app-state assoc [:parse-results] my-parse-results)
          (swap! app-state assoc-in [:last-text-parsed] current)
          )
        ))))

(defn parse-button[]
  [:button.btn.btn-primary
   {
    :title "Redraw Letter Notation",
    :name "redraw_letter_notation"
    :on-click 
    (fn [e]
      (.preventDefault e)
     ;; TODO (parse)
      )
    }
   "Redraw"
   ] 
  )



(defn attribute-section[{item :item}]
  nil
  )



(defn notes-line [{item :item}]
  (log "notes-line, item is")
  (log item)
  (assert (is-a "notes-line" item))
  [:div.stave.sargam_line
   (draw-children (rest item))])
;; TODO
;;; componentDidMount: function () { window.dom_fixes($(this.getDOMNode())); },
;;   componentDidUpdate: function () { window.dom_fixes($(this.getDOMNode())); },
;; var items = rest(item);
;;

(defn zzextract-notes-used[s]
  ;; s is like "SrgMPDn"
  (let [notes-used nil]

    ))
(defn start-parse-timer[]
 ;; (js/setInterval zzzparse 60000)
  )


;;;;  add-right-margin-to-notes-with-pitch-signs = function(context) {
;;;;    if (context == null) {
;;;;      context = null;
;;;;    }
;;;;    return $('span.note_wrapper *.pitch_sign', context).each(function(index) {
;;;;      var current_margin_right, parent;
;;;;      parent = $(this).parent();
;;;;      current_margin_right = parseInt($(parent).css('margin-right').replace('px', ''));
;;;;      return $(parent).css('margin-right', $(this).width());
;;;;    });
;;;;  };


(defn add-right-margin-to-notes-with-pitch-signs[context] 
  (let [items (sel "span.note_wrapper *.pitch_sign")
        ]
    (dorun (map (fn[item]
                  (let
                    [parent (dommy/parent item)]
                    (dommy/set-style! (dommy/parent item) 
                                      :margin-right
                                      (str (dommy/px item :width) "px")
                                      )
                    )) items))))


(defn add-left-margin-to-notes-with-left-superscripts[]
  ;; TODO: Raise height of ornament if it is over a barline!!!
  (let [items (sel "span.note_wrapper *.ornament.placement_before")
        ]
    (dorun (map
             (fn[item]
               (let
                 [parent (dommy/parent item)]
                 (dommy/set-style! item 
                                   :margin-left
                                   (str (* -1 
                                           (dommy/px item :width)) "px"))
                 (dommy/set-style! parent 
                                   :margin-left
                                   (str (*  
                                          (dommy/px item :width)) "px"))
                 )) items))
    ))

(defn add-right-margin-to-notes-with-right-superscripts[]
  ;; Not sure why it adjusts note_wrapper and not pitch??
  (log "add-right-margin-to-notes-with-right-superscripts")
  (let [items (sel "span.note_wrapper *.ornament.placement_after") ]
    (dorun (map
             (fn[item]
               (let [parent (dommy/parent item)
                     width (dommy/px item :width)
                     ]            
                 (dommy/set-style! (dommy/parent item)
                                   :margin-right
                                   (str width "px"))
                 )) items))
    ))



;;;;        return $('span.note-wrapper *.ornament.placement-after', context).each(function(index) {
;;;;          var current-margin-right, parent;
;;;;          parent = $(this).parent();
;;;;          current-margin-right = parseInt($(parent).css('margin-right').replace('px', ''));
;;;;          return $(parent).css('margin-right', $(this).width());
;;;;        });
;;;;      };


(defn adjust-slurs-in-dom[context]
  (comment "html looks like"
           [:span.measure
            [:span.beat.looped
             [:span.note_wrapper ]]
            [:span#0.slur
             ]
            [:span.note.pitch "S"]
            [:span.note_wrapper
             {:data-begin-slur-id "0"}]
            [:span.note.pitch "R"]])
  (let [items (sel "span[data-begin-slur-id]")]
    (dorun 
      (map (fn[item]
             (let
               [ dom-id (dommy/attr item :data-begin-slur-id)
                slur (.getElementById js/document dom-id)
                rect1 (dommy/bounding-client-rect item)
                rect2 (when slur (dommy/bounding-client-rect slur))
                width (when slur (- (:right rect1) (:left rect2)))
                ]
               (log "adjust-slurs-in-dom" dom-id slur rect1 rect2 width)
               (when slur
                 (dommy/set-style! slur :width
                                   (str width "px"))
                 ))) items))))

(defn fallback-if-utf8-characters-not-supported[context]
  ;;; TODO
  )
;;;;      var tag, width1, width2;
;;;;      if (context == null) {
;;;;        context = null;
;;;;      }
;;;;      if (!(window.ok_to_use_utf8_music_characters != null)) {
;;;;        width1 = $('#utf_left_repeat').show().width();
;;;;        width2 = $('#utf_single_barline').show().width();
;;;;        $('#utf_left_repeat').hide();
;;;;        $('#utf_single_barline').hide();
;;;;        window.ok_to_use_utf8_music_characters = width1 !== width2;
;;;;      }
;;;;      if (!window.ok_to_use_utf8_music_characters) {
;;;;        tag = "data-fallback-if-no-utf8-chars";
;;;;        $("span[" + tag + "]", context).addClass('dont_use_utf8_chars');
;;;;        return $("span[" + tag + "]", context).each(function(index) {
;;;;          var attr, obj;
;;;;          obj = $(this);
;;;;          attr = obj.attr(tag);
;;;;          return obj.html(attr);
;;;;        });

(defn expand-note-widths-to-accomodate-syllables[context]
  (let [ items  (sel :.syl)]
    (dorun (map-indexed 
             (fn[idx item]
               (when-not (= idx (dec (count items))) ;; omit last syllable on line
                 (let
                   [
                    syl (dommy/text item)  ;; Move to react component css. hyphen
                    ends-word (not= (last syl) "-")
                    extra (if ends-word 5 0)
                    next-item (get items (inc idx)) 
                    pitch (some (fn[x] (when (not= -1 (.indexOf (dommy/class x) "pitch")) x))
                                (-> item dommy/parent dommy/children array-seq) )
                    rect1 (dommy/bounding-client-rect item)
                    rect2 (dommy/bounding-client-rect next-item)
                    ] 
                   (when false  (comment "pitch" pitch) (comment "next-item" next-item) (comment "rect1" rect1) (comment "rect2" rect2))
                   (when 
                     (and (= (:top rect1) (:top rect2))
                          (> (+ extra (:right rect1))
                             (:left rect2)))
                     ;;($note.css("margin-right", "" + (existing_margin_right     + syl_right - next_left + extra + extra2) + "px"));
                     (dommy/set-style! pitch :margin-right 
                                       (str (+ extra
                                               (- (:right rect1)
                                                  (:left rect2)
                                                  )) "px")) 
                     ))))
             items
             ))))

(defn dom-fixes[this]
  ;;; TODO: review if this is necessary
  ;;; $('.sargam_line .note',context).removeAttr("style");  
  ;;;  new code 2015
  ;;;
  (expand-note-widths-to-accomodate-syllables this)
  (add-right-margin-to-notes-with-right-superscripts)
  (add-left-margin-to-notes-with-left-superscripts)
  (add-right-margin-to-notes-with-pitch-signs this)
  (adjust-slurs-in-dom this)
  (fallback-if-utf8-characters-not-supported this)
  ;;145 dubois
  )
(def composition-wrapper 
  (with-meta html-rendered-composition
             {:component-did-mount
              (fn[this]
                (log "component-did-mount composition to call dom_fixes")
                (dom-fixes this)
                ;;  (js/dom_fixes (js/$ (reagent.core/dom-node this)))

                )

              :component-did-update
              (fn[this]
                (log "component-did-update composition-about to call dom_fixes")
                (dom-fixes this)
                ) 
              }
             ))

(defn composition-box[]
  [:div.form-group
   [:label {:for "entryArea"} "Rendered Letter Notation: "]
   ;; [parse-button]  TODO: put back in or NOT ???!!!
   [composition-wrapper]
   ] 
  )

(defn ornament-pitch[{item :item
                      render-as :render-as}]
  ;; item looks like:
  ;; ;; ["ornament",["ornament-pitch","B",["octave",1]]
  ;; [:span.ornament_item.upper_octave_1 "g"]
  (log "entering ornament-pitch") 
  (log item)
  (let [
        deconstructed-pitch ;; C#,sargam -> ["S" "#"] 
        (deconstruct-pitch-string-by-kind (second item)
                                          render-as
                                          ) 
        octave (some #(when (and (vector %)
                                 (= :octave (first %)))
                        (second %)) 
                     (rest item))
        alteration-string (second deconstructed-pitch)
        pitch-src (join deconstructed-pitch)
        octave_class (get class-for-ornament-octave octave)
        ]
    [:span.ornament_item 
     {:class octave_class
      :dangerouslySetInnerHTML {
                                :__html pitch-src
                                } 
      }
     ]
    ))

(defn ornament[{item :item}]
  ;; should generate something like this:
  (comment
    [:span.upper_attribute.ornament.placement_after
     [:span.ornament_item.upper_octave_1
      "g"]])
  (let [items (rest item)
        filtered (filter #(and (vector? %)
                               (= :ornament-pitch (first %))) items)
        _ (log "filtered " filtered)  

        placement (last item)
        placement-class (str "placement_" (name placement))
        ]
    [:span.upper_attribute.ornament {:class placement-class}
     (doall (map-indexed
              (fn notes-line-aux[idx item]
                [ornament-pitch {:item item
                                 :render-as (get @app-state :render-as)
                                 :key idx
                                 }
                 ]) filtered)) 
     ] 
    ))




(defn mordent[{item :item}]
  [:span.mordent
   {:dangerouslySetInnerHTML 
    { :__html mordent-entity }
    }]) 
(defn ending[{item :item}]
  [:span.ending
   (second item)
   ])

(defn line-number[{item :item}]
  [:span.note_wrapper 
   [:span.note.line_number 
    (str (second item) ")")
    ]
   ])


(defn line-item 
  [{src :src kind :kind item :item}]
  (log "entering line-item, item")
  (log item)
  ;; className = item[0].replace(/-/g, '_');
  ;;src = "S" ;;; this.props.src;
  [:span {:class "note_wrapper" } 
   [:span.note {:class kind}
    src]])

(defn barline[{src :src item :item}]
  (let [barline-name (first (second item))]
    (log "barline-name is" barline-name)
    [:span.note_wrapper
     [:span.note.barline 
      {:dangerouslySetInnerHTML 
       { :__html 
        (get lookup-barline (keyword (first (second item))))
        }
       }
      ]]))


(defn beat[{item :item}]
  (log "entering beat")
  (assert (is-a "beat" item))
  (log "beat, item is")
  (log item)
  (let [beat-count 
        (reduce (fn count-beats[accum cur]
                  (log "cur is" cur) 
                  (if (and (vector? cur)
                           (get #{:pitch :dash} (first cur)))
                    (inc accum)
                    accum))
                0 (rest item))
        _ (log "beat-count is" beat-count) 
        looped (if (> beat-count 1) "looped" "")
        ]
    ;; TODO
    [:span.beat {:class looped}
     (draw-children (rest item))
     ]))


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


(defn pitch-name[{item :item}]
  ;; (assert (is-a "pitch-name" item))
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

(defn pitch-alteration[{item :item}]
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

(defn begin-slur-id[{item :item}]
  [:span.slur {:id (second item)}]
  )

(defn pitch[{item :item
             render-as :render-as}]

  (log "pitch, (first (last item))=" (first (last item))) 

  ;; In the following case
  ;; ["pitch","C",["begin-slur"],["octave",0],["begin-slur-id",0]]
  ;; if there is "begin-slur-id, add
  ;; <span class="slur" id="0"></span>
  ;;  before the note span.
  ;;
  ;; for end slur, add data-begin-slur-id to the note-wrapper
  ;; confusing
  ;;
  ;;
  ;;; ["pitch","C#",["octave",1],["syl","syl"]]
  ;;;  ["pitch","E",["end-slur"],["octave",0],["end-slur-id",0]]
  (log "entring pitch, item is" item) 
  ;;  (assert (is-a "pitch" item))
  (log item)
  ;; need to sort attributes in order:
  ;; ornament octave syl note alteration
  (let [
        ;; Looks like ["end-slur-id",0]
        begin-slur-id (some (fn[x] 
                              (if
                                (and (vector? x)
                                     (= :begin-slur-id (first x)))
                                x))
                            item)
        end-slur-id (some (fn[x] 
                            (if
                              (and (vector? x)
                                   (= :end-slur-id (first x)))
                              x))
                          item)
        _ (log "end-slur-id=" end-slur-id)
        h (if end-slur-id
            {:data-begin-slur-id (second end-slur-id) }
            {}
            :class (css-class-name-for (first item)) 
            )
        deconstructed-pitch ;; C#,sargam -> ["S" "#"] 
        (deconstruct-pitch-string-by-kind (second item)
                                          render-as
                                          ) 
        sort-table 
        {:ornament 1 
         :octave 2 
         :syl 3 
         :begin-slur-id 4
         :slur 5
         :pitch-name 6
         :pitch 7
         :pitch-alteration 8}
        item1
        (into[] (cons [:pitch-name (first deconstructed-pitch)]
                      (rest (rest item))))
        item2 (if begin-slur-id
                (into[] (cons [:slur (second begin-slur-id)] item1))
                item1)

        alteration-string (second deconstructed-pitch)
        my-pitch-alteration (when alteration-string
                              [:pitch-alteration alteration-string])

        item4 
        (remove nil? (into[] (cons my-pitch-alteration item2)))
        item5
        (remove (fn[x] (get #{:end-slur-id :slur} (first x))) item4)
        item6 (sort-by #(get sort-table (first %)) item5)
        ]
    (log "item6 is")
    ;;[["pitch-name","D#"],["octave",1],["syl","syl"]] 
    (log item6)
    [:span.note_wrapper h  ;; This indicates slur is ending and gives the id of where the slur starts. NOTE.
     (draw-children item6)
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
(defn lyrics-section [{item :item}]
  ;; ["lyrics-section",["lyrics-line","first","line","of","ly-","rics"],["lyrics-line","se-","cond","line","of","ly-","rics"]]
  ;; assert(isA("lyrics-section", lyricsSection))
  ;; return rest(x) .join(" ");
  ;;
  (let [line-strings (map (fn[x] (join " " (rest x))) (rest item))
        s (join "\n" line-strings)    
        ]

    [:div.stave.lyrics_section.unhyphenated
     {:title "Lyrics Section"}
     s]))


(defn stave[{item :item}]
  (log "entering stave")
  (log item)
  ;;  (assert (is-a "stave" item))
  [notes-line {:item (second item)}]
  )



(defn measure[{item :item}]
  (assert (is-a "measure" item))
  (log "measure, item is")
  (log item)
  (log "rest item=")
  (log (rest item))
  [:span {:class "measure"} 
   (draw-children (rest item))])


(defn tala[{item :item}]
  (assert (is-a "tala" item))
  [:span.tala (second item)]
  )

(defn chord[{item :item}]
  (assert (is-a "chord" item))
  (log "chord- item is")
  (log item)
  [:span.chord (second item)]
  )

(def EMPTY-SYLLABLE "\" \"") ;; " " which quotes

(defn syl[{item :item}]
  (assert (is-a "syl" item))
  (log "in syl, item is" item)
  (log "syl- item is")
  (log item)
  (when (not= (second item) EMPTY-SYLLABLE)
    [:span.syl (second item)]
    ))

;;;;  
;;;;      var Octave = createClass({
;;;;        class_for_octave: function (octave_num) {
;;;;          if (octave_num === null) {
;;;;            return "octave0";
;;;;          }
;;;;          if (octave_num < 0) {
;;;;            return "lower_octave_" + (octave_num * -1);
;;;;          }
;;;;          if (octave_num > 0) {
;;;;            return "upper_octave_" + octave_num +
;;;;              " upper_octave_indicator";
;;;;          }
;;;;          return "octave0";
;;;;        },
;;;;        bullet: "&bull;",
;;;;        displayName: 'Octave',
;;;;        render: function () {
;;;;          var item = this.props.item;
;;;;          if (debug) {
;;;;            console.log(item);
;;;;          }
;;;;          //assert(isA("octave", item));
;;;;          var src = this.bullet;
;;;;          return span({
;;;;            className: this.class_for_octave(second(item)),
;;;;            dangerouslySetInnerHTML: {
;;;;              __html: src
;;;;            }
;;;;          });
;;;;        }
;;;;      });
;;;;


(defn abs [n] (max n (- n)))

(defn octave[{item :item}]

  ;; TODO: support upper-upper and lower-lower
  (log "octave- item is")
  (log item)
  (assert (is-a "octave" item))
  (let [octave-num (second item)] 
    (if (or (nil? octave-num)
            (zero? octave-num))
      nil
      ;; else
      [:span {:class (class-for-octave (second item))
              :dangerouslySetInnerHTML {
                                        :__html 
                                        (clojure.string/join (repeat (abs octave-num) bullet))
                                        }
              } ]
      )))

(defn default-draw-item[{item :item}]
  [:span {:class  (first item)}
   (second item)
   ]
  )

(defn draw-item[item idx]
  (log "entering draw-item, kind is" 
       (get @app-state :render-as))
  (log "*************entering draw-item, item is" item)
  (let [my-key  (first item)]
    (log "draw-item, item is")
    (log item)
    (log "key is")
    (log my-key)
    (cond 
      (= my-key :begin-slur)
      nil
      (= my-key :end-slur)
      nil
      (= my-key :ornament)
      [ornament {:key idx :item item}]
      (= my-key :mordent)
      [mordent {:key idx :item item}]
      (= my-key :ending)
      [ending {:key idx :item item}]
      (= my-key :barline)
      [barline {:key idx :item item}]
      (= my-key :lyrics-section)
      [lyrics-section {:key idx :item item}]
      (= my-key :tala)
      [tala {:key idx :item item}]
      (= my-key :chord)
      [chord {:key idx :item item}]
      (= my-key :syl)
      [syl {:key idx :item item}]
      (= my-key :beat)
      [beat {:key idx :item item}]
      (= my-key :stave)
      [stave {:key idx :item item}]
      (= my-key :measure)
      [measure {:key idx :item item}]
      (= my-key :end-slur-id)
      nil
      (= my-key :begin-slur-id)
      [begin-slur-id {:key idx :item item}]
      (= my-key :attribute-section)
      [attribute-section {:key idx :item item}]
      (= my-key :pitch-alteration)
      [pitch-alteration {:key idx :item item}]
      (= my-key :ornament-pitch)
      [ornament-pitch {:key idx :item item
                       :render-as (get @app-state :render-as)}]
      (= my-key :pitch)
      [pitch {:key idx :item item
              :render-as (get @app-state :render-as)}]
      (= my-key "syl")
      [syl {:key idx :item item}]
      (= my-key :octave)
      [octave {:key idx :item item}]
      (= my-key :pitch-name)
      [pitch-name {:key idx :item item}]
      (= my-key :notes-line)
      [notes-line {:key idx :item item}]
      (= my-key :line-number)
      [line-number {:key idx :item item}]

      (= my-key :dash)
      [line-item {:src "-" :key idx :item item}]
      true
      [:span {:key idx :item item}
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
(defn select-notation-box[kind]
  [:div.form-group ;;selectNotationBox
   [:label {:for "selectNotation"}
    "Enter Notation as: "]
   [:select#selectNotation.selectNotation.form-control
    {:value (get @app-state :composition-kind)
     :on-change 
     #(let
        [kind-str (-> % .-target .-value)
         my-kind (if (= "" kind-str)
                   nil
                   ;; else
                   (keyword kind-str))
         ]
        (swap! app-state assoc :composition-kind my-kind)
        )
     } 
    [:option]
    [:option {:value :abc-composition}
     "ABC"]
    [:option {:value :doremi-composition}
     "doremi"]
    [:option {:value :hindi-composition}
     "hindi( स र ग़ म म' प ध ऩ )"]
    [:option {:value :number-composition}
     "number"]
    [:option {:value :sargam-composition}
     "sargam"]]]
  )
(defn render-as-box[]
  [:div.form-group ;;selectNotationBox
   ;;[:div.RenderAsBox
   [:label { :for "renderAs"} "Render as:"]
   [:select#renderAs.renderAs.form-control
    {:value (name (get @app-state :render-as))
     :on-change 
     #(swap! app-state 
             assoc
             :render-as
             (keyword (-> % .-target .-value))
             )
     }
    [:option {:value nil}]
    [:option {:value :abc-composition}
     "ABC"]
    [:option {:value :doremi-composition}
     "doremi"]
    [:option {:value :hindi-composition}
     "hindi( स र ग़ म म' प ध ऩ )"]
    [:option {:value :number-composition}
     "number"]
    [:option {:value :sargam-composition}
     "sargam"]]]
  )

(defn generate-staff-notation-button[]
  [:button.btn.btn-primary
   {
    :title "Redraws rendered letter notation and Generates staff notation and MIDI file using Lilypond",
    :name "generateStaffNotation"
    :disabled (:ajax-is-running @app-state)
    :on-click 
    (fn [e]
      (.preventDefault e)
      (when (not (:ajax-is-running @app-state))
        (log "in generate-staff-notation-button callback")
        (generate-staff-notation-xhr 
          GENERATE-STAFF-NOTATION-URL
          {:src (.-value (sel1 :#the_area))
           :kind (get-in @app-state [:composition-kind])
           })
        ))
    }
   (if (:ajax-is-running @app-state)
     "Redrawing..."
     "Redraw" ;; "Generate Staff Notation and audio"
     )
   ] 
  )

(defn header[]
  ;; currently unused
  [:h3
   "Enter letter music notation using 1234567CDEFGABC DoReMi (using drmfslt or DRMFSLT) SRGmPDN or devanagri: सर ग़म म'प धऩ\n\n"]
  )

(defn toggle-lilypond-button[]
  ;; currently unused
  [:button.toggleButton
   "Lilypond"]
  )
(defn play-midi-file[]
  ;; currently unused
  [:a.hidden
   "Play MIDI File(Turn Volume Up!)"]
  )
(defn toggle-staff-notation-button[]
  ;; currently unused
  [:button.toggleButton
   "Staff Notation Hide/Show"]
  )
(defn other-unused[]
  [:div
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
    "Help"]
   ])

(defn mp3-url[] 
  [:a.btn.btn-info 
   { :href (:mp3-url @app-state)
    :target "_blank",
    :title "Opens in new window"}
   "Play mp3"]
  )

(defn audio-div[]
  [:audio#audio
   {
    :controls "controls"
    :preload "auto",
    :src (:mp3-url @app-state)}]
  )

(defn controls[]
  [:form.form-inline
   [select-notation-box (get @app-state :kind)]
   [render-as-box (get @app-state :render-as)]
   [generate-staff-notation-button]
   [downloads]
   (if (:mp3-url @app-state)
     [audio-div])
   ]
  )

(defn parse-failed[]
  ;;; unused
  [:div.compositionParseFailed.hidden
   [:pre 
    [:div.lilypondDisplay.hidden 
     [:img#staff_notation
      :name "",
      :src "/images/blank.png?1426699590838"]]]]
  )

(defn doremi-box[]
  [:div.doremiBox
   [controls]
   [entry-area-box]
   [composition-box]
   [staff-notation]
   [display-parse-to-user-box]
   ]
  )


(defn calling-component []
  [doremi-box])

(def generate-initial-page true)

(defn init []

  (let [old-val (.-value (.getElementById js/document "the_area"))
        url-to-load (.getParameterValue
                      (new goog/Uri (.-href (.-location js/window)))
                      "url")
        _ (log "url-to-load is" url-to-load)
        ]
    (when url-to-load
      (load-doremi-url-xhr url-to-load))

    (reagent.core/render-component 
      [calling-component]
      (.getElementById js/document "container"))
    (log "starting timer")
    (.focus (.getElementById js/document "the_area"))
    (set! (.-onkeypress (by-id "the_area"))
          on-key-press
          )
    (if old-val
      (set! (.-value (sel1 :#the_area)) old-val))
    ;;(start-parse-timer)
    ))


(when false ;;;generate-initial-page
  (comment 
    (comment 
      (reagent.core/render-component-to-string 
        [calling-component]
        (.getElementById js/document "container"))))
  )



