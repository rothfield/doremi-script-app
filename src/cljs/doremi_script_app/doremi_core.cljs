(ns doremi-script-app.doremi_core
  (:require 
    [goog.net.XhrIo :as xhr]
    [clojure.zip :as zip]
    [clojure.string :refer
     [split replace-first upper-case lower-case join] :as string]
    [clojure.walk :refer [postwalk]]
    [instaparse.core :as insta] 
    [instaparse.viz :as viz]
    ))

(.log js/console "loading doremi_core") 

(defn my-log[x]
  (.log js/console x)) 

(defn zlog[x]
  (.log js/console x)) 

(defn log[ my-arg]
  (my-log (.stringify js/JSON (clj->js my-arg))))


;(ns doremi_script.doremi_core
;  (:gen-class)
;  (:require
;    [instaparse.core :as insta]
;    [clojure.string :refer
;     [split replace-first upper-case lower-case join] :as string]
;    [clojure.zip :as zip]
;    [clojure.java.io :as io :refer [input-stream resource]]
;    [clojure.pprint :refer [pprint]]
;    [clojure.walk :refer [postwalk]]
;    ))

(declare doremi-text->parse-tree
         doremi-text->collapsed-parse-tree
         parse-failed?
         format-instaparse-errors)
(comment
  ;; to use in repl:
  ;; cpr runs current file in vim
  ;; cp% runs current form. vim-fireplace
  (set! *warn-on-reflection* true)
  (use 'doremi_script.doremi_core :reload) (ns doremi_script.doremi_core)
  (use 'clojure.stacktrace)
  (print-stack-trace *e)
  (use 'doremi_script.test-helper :reload)  ;; to reload the grammar
  (print-stack-trace *e)
  (pst)
  )

(defn pprint[x]
  ;; TODO
  )



(defonce parser (atom nil))


(defonce grammar (atom nil))

(defn load-grammar[]
  (log "load-grammar")
  ;;;Optional keyword arguments to insta/parser:
  ;;;   :start :keyword  (where :keyword is name of starting production rule)
  ;;;   :partial true    (parses that don't consume the whole string are okay)
  ;;;   :total true      (if parse fails, embed failure node in tree)
  ;;;   :unhide <:tags or :content or :all> (for this parse, disable hiding)
  ;;;   :optimize :memory   (when possible, employ strategy to use less memory)
  ;;;
  ;; http://www.myclojureadventure.com/2012/09/intro-to-clojurescript-part-2-getting.html

  (if (nil? @grammar)
    (.send goog.net.XhrIo 
           "ebnf/doremiscript.ebnf.txt"
           (fn load-grammar-callback[x]
             (let [data (js->clj (.getResponseText (.-target x))
                                 :keywordize-keys true)]
               (reset! grammar data) ;; for debugging
               (reset! parser (insta/parser data :total true))
               (log "parser initialized")
               )))
    (log "skipping reloading of grammar/parser") 
    ))

(load-grammar)



(defn ^:private parse[x kind]
  (if kind
    (insta/parse @parser x :start kind)
    (insta/parse @parser x)
    ))

(defn ^:private parse-for-testing[x]
  ;; Can't use for production because it doesn't produce the nice
  ;; error messages
  ;; Uses insta/parses which produces a lazy seq of results
  ;; assert should throw exception if there is more than one.
  (let [ results (insta/parses @parser x )
        _ (pprint results)
        result (first results)
        more (second results)
        ]
    (when more
      (println
        (str "amiguous parse: first 5 results are"
             (->> results (take 5) pprint with-out-str)
             )))
    result))

;; (test-all)

;; (def x "hiii\n\n\ndmG [Dm7b6II]\nSSSS")
;; (def x "hi there john")
(comment
  [:composition
   [:sargam-composition
    [:sargam-stave
     [:sargam-upper-line [:upper-line-dot]]
     [:sargam-upper-line [:upper-line-two-dots]]
     [:sargam-notes-line
      [:sargam-measure [:sargam-beat [:sargam-pitch "S"]]]]]]]
  )
;; (-> ".\n:\nS"  parse pprint)
;; (-> ".\n:\nS\n.\n:\nHi"  doremi-text->parsed pprint)


(defn ^:private is?[k x]
  (and (vector? x)
       (= k (first x))))





(defn ^:private is-notation-system-name?
  [x]
  (contains? #{"sargam"
               "number"
               "abc"
               "hindi"
               "doremi"
               :doremi
               :sargam
               :number
               :abc
               :hindi} x))

(def kind-set
  #{:doremi-composition
    :sargam-composition
    :number-composition
    :abc-composition
    :hindi-composition})

(defn ^:private is-kind?[x]
  (contains? kind-set x))

(defn ^:private unique-for-assigned
  "Make a unique key using meta-data"
  [x]
  { :pre [(vector? x)]
   :post [(vector? %)]
   }
  [ (meta x) (first x)])

(defn ^:private in-assigned?
  "Tests whether x is in set my-set. Uses metadata to distinguish "
  [my-set x]
  (contains? my-set (unique-for-assigned x)))


(defn ^:private sargam-pitch->normalized-pitch
  "Map sargam pitch to pitch in the key of 'C'.  M => F# "
  [x]
  (get {"S" "C"
        "r" "Db"
        "R" "D"
        "g" "Eb"
        "G" "E"
        "m" "F"
        "M" "F#"
        "P" "G"
        "d" "Ab"
        "D" "A"
        "n" "Bb"
        "N" "B"
        "Sb" "Cb"
        "S#" "C#"
        "R#" "D#"
        "G#" "E#"
        "mb" "Fb"
        "Pb" "Gb"
        "P#" "G#"
        "D#" "A#"
        "N#" "B#"
        } x "ERROR"))

(defn ^:private number-pitch->normalized-pitch[x]
  "Map from number pitch to pitch in the key of 'C'.  4# => F# "
  (get {"1" "C"
        "2b" "Db"
        "2" "D"
        "3b" "Eb"
        "3" "E"
        "4" "F"
        "4#" "F#"
        "5" "G"
        "6b" "Ab"
        "6" "A"
        "7b" "Bb"
        "7" "B"
        "1#" "C#"
        "2#" "D#"
        "3#" "E#"
        "4b" "Fb"
        "5b" "Gb"
        "5#" "G#"
        "6#" "A#"
        "7#" "B#"
        } x "ERROR"))

(defn ^:private doremi-pitch->normalized-pitch[x]
  "Map from solfege pitch to pitch in the key of 'C'.  4# => F# "
  (get {"d" "C"
        "rb" "Db"
        "r" "D"
        "mb" "Eb"
        "m" "E"
        "f" "F"
        "f#" "F#"
        "s" "G"
        "lb" "Ab"
        "l" "A"
        "tb" "Bb"
        "t" "B"
        "d#" "C#"
        "r#" "D#"
        "m#" "E#"
        "fb" "Fb"
        "sb" "Gb"
        "s#" "G#"
        "l#" "A#"
        "t#" "B#"
        } (lower-case x) "ERROR"))



(defn ^:private hindi-pitch->normalized-pitch[x]
  "Map from Hindi pitch to pitch in the key of 'C'."
  (get
    {
     "\u0938" "C"
     "\u0930" "D"
     "\u095A" "E"
     "\u092E" "F"
     "\u092a" "G"
     "\u0927" "A"
     "\u0929" "B"
     "\u0938#" "C#"
     "\u0930#" "D#"
     "\u095A#" "E#"
     "\u092E#" "F#"
     "\u092a#" "G#"
     "\u0927#" "A#"
     "\u0929#" "B#"
     "\u092E'" "F#"  ;; note the tick
     }
    x "ERROR"))


(defn ^:private remove-notation-system-prefix
  "Change keyword to remove notation prefixes. :sargam-pitch -> :pitch "
  [k]
  { :pre [(keyword? k)]
   :post [(keyword? %)]
   }
  (let [ary (split (name k) #"-")
        prefix (first ary)        
        ]
    (when false
      (log "remove-notation-system-prefix, ary,prefix")
      (log ary)
      (log prefix)
      )
    (if (is-notation-system-name? prefix)
      (keyword (join "-" (rest ary)))
      k)
    ))

(defn ^:private get-attribute[pitch my-key]
  (some #(if (when (vector? %) (= my-key(first %))) %)
        pitch))

(defn ^:private make-it-kommal[pitch]
  ;; Only flatten D E A and B !!!!! and should only be
  ;; done for hindi-composition (I think)
  ;; hackish
  { :pre [(is? :pitch pitch)]
   ;; :post [(is? :pitch %)]
   }
  (when false (println "make-it-kommal")
    (pprint pitch))
  (let [without-kommal (vec (remove #(is? :kommal-indicator %) pitch))]
    ;;    [:pitch "D" [:kommal-indicator "_"] [:octave 0]]]]
    ;;   (pprint without-kommal)
    (if (#{"D" "E" "A" "B"} (second pitch))
      (vec (update-in without-kommal [1] str "b"))
      pitch)
    ))
(comment
  (when false
    (-> (str "सर" "|\n" " _") (doremi-text->collapsed-parse-tree nil) pprint)
    )
  )


(defn ^:private apply-kommal-to-pitches
  [original-tree] ;; assigned]
  (when false
    (pprint "apply-kommal-to-pitches, tree is")
    (pprint original-tree))
  (loop [loc (zip/vector-zip original-tree)
         id 0 ]
    (if (zip/end? loc)
      (zip/root loc)
      ;; else
      (let [current (zip/node loc)
            ]
        (cond
          (and (is? :pitch current)
               (get-attribute current :kommal-indicator)
               )
          (recur
            (zip/next
              (zip/edit loc make-it-kommal)
              )
            id)
          :else
          (recur (zip/next loc) id))))))

(defn ^:private match-slurs
  "add id to begin and end slurs"
  [original-tree]
  {;; :pre [(map? original-tree)]
   ;;   :post [(map? %)]
   }
  ;;(pprint "matchslurs") (pprint original-tree)
  ;(assoc original-tree :parsed
  (loop [loc (zip/vector-zip original-tree)
         id 0 ]
    (if (zip/end? loc)
      (zip/root loc)
      ;; else
      (let [current (zip/node loc)
            ]
        (cond
          (and (is? :pitch current)
               (get-attribute current :begin-slur)
               )
          (recur
            (zip/next
              (zip/edit loc conj [:begin-slur-id id])
              )
            id)
          (and (is? :pitch current)
               (get-attribute current :end-slur)
               )
          (recur (zip/next
                   (zip/edit loc conj [:end-slur-id id])) (inc id))
          :else
          (recur (zip/next loc) id))))))

;; (pprint (-> "(SS) (RR)\n\n(GG) (mm)"  doremi-text->collapsed-parse-tree))


(defn ^:private remove-notation-system-prefixes
  "Removes notation system prefixes from the tree"
  [original-tree]
  { :pre [(vector? original-tree)]
   :post [(vector? %)]
   }
  (loop [loc (zip/vector-zip original-tree) ]
    (if (zip/end? loc)
      (zip/root loc)
      (recur
        (zip/next
          (cond  (and (vector? (zip/node loc))
                      (keyword? (first (zip/node loc))))
                (zip/edit loc
                          (fn[y]
                            (assoc y 0
                                   (remove-notation-system-prefix
                                     (first y)))))
                :else loc))))))

(defn ^:private normalize-pitches
  "Replace pitch names to CDEFGAB style from the style found in
  the parse tree (number,sargam,hindi)"
  [original-tree]
  { :pre [(vector? original-tree)]
   :post [(vector? %)]
   }
  (loop [loc (zip/vector-zip original-tree) ]
    (if (zip/end? loc)
      (zip/root loc)
      (recur
        (zip/next
          (cond
            (and (vector? (zip/node loc))
                 (#{:sargam-pitch :sargam-ornament-pitch }
                                  (first (zip/node loc))))
            (zip/edit loc
                      (fn[x]
                        (assoc x 1
                               (sargam-pitch->normalized-pitch
                                 (second x)))))
            (and (vector? (zip/node loc))
                 (#{:doremi-pitch :doremi-ornament-pitch }
                                  (first (zip/node loc))))
            (zip/edit loc  (fn[x]
                             (assoc x 1
                                    (doremi-pitch->normalized-pitch
                                      (second x)))))
            (and (vector? (zip/node loc))
                 (#{:hindi-pitch :hindi-ornament-pitch }
                                 (first (zip/node loc))))
            (zip/edit loc
                      (fn[x]
                        (assoc x 1
                               (hindi-pitch->normalized-pitch
                                 (second x)))))
            (and (vector? (zip/node loc))
                 (#{:number-pitch :number-ornament-pitch }
                                  (first (zip/node loc))))
            (zip/edit loc
                      (fn[x]
                        (assoc x 1
                               (number-pitch->normalized-pitch
                                 (second x)))))
            :else loc))))))
;; (-> "drm" (doremi-text->parse-tree :sargam-composition))

(defn ^:private add-kind[x kind]
  ;; Parsed data come in like this:
  ;;
  ;;[:composition [:sargam-composition
  ;;[:sargam-stave [:sargam-notes-line [:sargam-measure
  ;;[:sargam-beat [:sargam-pitch S]
  ;;[:sargam-pitch S] [:sargam-pitch S]]]]]]]
  ;;  OR
  ;;
  ;;[:composition [:abc-composition
  ;;[:attribute-section Title me]
  ;;[:abc-stave [:abc-notes-line
  ;;[:abc-measure [:abc-beat [:abc-pitch C]]] [:barline [:rig
  ;;ht-repeat]]]]
  ;;[:abc-stave [:abc-notes-line
  ;;[:abc-measure [:abc-beat [:abc-pitch D]]
  ;;[:abc-beat [:abc-pitch E]]
  ;;[:abc-beat [:abc-pitch F]]]]]]]
  ;;nil
  ;; or
  ;;  [:composition [:stave [:notes-line
  ;;  [:measure [:beat [:pitch "Ab"] [:pitch "Db"]
  ;;  [:pitch "F"]]]]]]
  ;;
  ;; Grab :sargam-composition and put it in :attributes-section as "kind".
  ;; Then return the rest... Basically remove the first keyword.
  ;; attribute section may be absent...
  (cond
    kind
    (let [ has-attributes (= :attribute-section (first (second x)))
          ]
      (if has-attributes
        (update-in x [1] conj "kind" kind)
        (vec (concat [ (first x)]
                     [ [:attribute-section "kind" kind]]
                     (subvec x 1)
                     ))))


    (= :attribute-section (first (second (second x))))
    (let [z (second x)
          attributes (first (second x))]
      (update-in z [1] conj "kind" (first z))
      )
    true
    (vec (concat [:composition
                  [:attribute-section
                   "kind"
                   (first (second x))]]
                 (rest (second x))))

    ))



;; (test-add-kind)
;; TODO: make test file
(comment
  (defn ^:private test-add-kind[]
    (do
      (pprint (doremi-text->parse-tree
                "Title:hi\n\ndrm"  :sargam-composition))
      (pprint (doremi-text->parse-tree
                "Title:hi\n\ndrm":sargam-composition))
      (pprint (doremi-text->parse-tree "drm" :sargam-composition))
      (pprint (doremi-text->parse-tree "drm\n___"
                                       :number-composition))
      )))






(defn ^:private items
  "Returns the items, which are always the rest of the vector. "
  ; IE (next [:beat [[:pitch "C"] [:pitch "D"]) =>  [[:pitch "C"] [:pitch "D"]]
  [x]
  (when false
    (log "entering items, x=")
    (log x)
    )
  ;; { :pre [
  ;;        (or (nil? x) (vector? x) (seq? x))]
  ;; :post [(seq? %)]
  ;; }
  (next x))



(defn ^:private start-index[x]
  (let [x (viz/span x)]
    (when x
      (first x))))


(defn ^:private line-column-map[my-map my-line]
  (when false (println "entering line-column-map, my-map=" my-map))
  (let [line-start (start-index my-line)
        ]
    (reduce (fn[accum obj]
              (when nil (println "line-column-map:, obj =" obj)
                (println "start-index obj=" (start-index obj))
                )
              (let [start-index (start-index obj)
                    column (if start-index
                             (- start-index line-start))
                    _ (when nil (println "obj" obj))
                    ]
                (cond (not start-index)
                      accum
                      (is? :ornament obj)
                      ;; Ornaments are not directly over notes.
                      ;; They are before or after
                      ;; Add the ornament twice in the column map.
                      ;; ;;  [:ornament [:G] [:m] [:P] [:D]]
                      (let [
                            span (viz/span obj)
                            ornament-string-length
                            (apply - (reverse span))
                            column-for-after-ornament (dec column)
                            column-for-before-ornament
                            (+ column  ornament-string-length)
                            ]
                        (assoc accum
                               column-for-after-ornament
                               (conj (get accum
                                          column-for-after-ornament [])
                                     (conj obj :after))
                               column-for-before-ornament
                               (conj (get accum
                                          column-for-before-ornament [])
                                     (conj obj :before))
                               )
                        )
                      true
                      (let [ column (- start-index line-start)
                            _ (when false
                                ( println
                                  "true case, column is" column
                                  " obj is" obj)) ]
                        (assoc accum
                               column
                               (conj (get accum column [])
                                     obj))
                        ))))
            my-map
            (tree-seq vector? identity my-line)
            )))



(defn ^:private takes-values-from-column?[x]
  (contains? #{:pitch :dash :barline  }
             x))
(comment
  [:composition
   [:sargam-composition
    [:sargam-stave
     [:sargam-upper-line [:upper-line-dot]]
     [:sargam-upper-line [:upper-line-two-dots]]
     [:sargam-notes-line
      [:sargam-measure [:sargam-beat [:sargam-pitch "S"]]]]]]]
  )

(defn ^:private is-upper-dot?[x]
  (and (vector? x) (contains? #{:upper-line-dot :upper-line-two-dots }
                              (first x))))

(defn ^:private is-dot?[x]
  (contains? #{:upper-line-dot :upper-line-two-dots
               :lower-line-dot :lower-line-two-dots}
             (first x)))


(defn ^:private is-lower-line?[x]
  (and (vector? x)
       (contains? #{:lower-octave-line :lyrics-line} (first x))))

(defn ^:private lines->column-map[lines]
  (reduce (fn[accum item]
            (line-column-map accum item)) {}
          (remove keyword?
                  (remove #(or (is? :notes-line %)
                               (is? :lyrics-line %)) lines))))

;;(println (-> ".\nS" doremi-text->parsed ))


(defn ^:private pitch->octave[pitch]
  {
   :pre [ (or (= :ornament-pitch (first pitch)) (is? :pitch pitch))]
   :post[ (integer? %)]
   }
  (->> pitch (filter vector?)
       (map first)
       (map {:upper-line-dot 1
             :upper-line-two-dots 2
             :lower-line-dot -1
             :lower-line-two-dots -2 }
            )
       (remove nil?)
       (apply +))
  )


(defn ^:private calculate-octave[x]
  (if (not (or (is? :pitch x)
               (is? :ornament-pitch x)
               ))
    x
    (let [without-dots (vec (remove #(and (vector? %) (is-dot? %)) x))
          octave (pitch->octave x)
          ]
      (vec (conj without-dots [:octave octave]))
      )))



(defn ^:private assign-ornament-octaves[assigned my-stave]
  {;; :pre [(is-stave? my-stave)]
   :post [(is? :stave %)] }
  (when false
    (pprint @assigned)
    (pprint my-stave)
    )
  (let [column-map (lines->column-map
                     (filter #(is? :upper-line %) (items my-stave)))
        ]
    (vec
      (map
        (fn map-fn[line]
          (cond (is? :upper-line line)
                (postwalk
                  (fn assign-dots-postwalk-fn[item]
                    (cond
                      (is? :ornament-pitch item)
                      ;; Look for dot in this column from lines above
                      ;; and below this one. But not in the lower lines
                      (let [column (- (start-index item) (start-index line))
                            dots-from-upper-lines
                            (remove (partial in-assigned? @assigned)
                                    (filter is-upper-dot?
                                            (column-map column [])))
                            ]
                        (if (empty? dots-from-upper-lines)
                          item
                          (let [
                                fixed-dots
                                (map
                                  (fn[x]
                                    {:pre [(is-upper-dot? x)]
                                     :post [(is-dot? x)] }
                                    (if (> (start-index x) (start-index item))
                                      ({[:upper-line-dot]
                                        [:lower-line-dot]
                                        [:upper-line-two-dots]
                                        [:lower-line-two-dots]}
                                       x "wtf")
                                      x))  dots-from-upper-lines)
                                ]
                            (reset!
                              assigned
                              (apply conj
                                     @assigned
                                     (map unique-for-assigned
                                          dots-from-upper-lines)))
                            (calculate-octave (apply conj item fixed-dots)))
                          )
                        )
                      true
                      item)) line)
                true
                line
                )) my-stave))))


(defn ^:private assign-syllables[assigned stave]
  (let [ syls-to-apply
        (atom (mapcat items (filter #(is? :lyrics-line %) stave)))
        in-slur (atom false)
        ]
    (map (fn[line] (if (not (is? :notes-line line)) line
                     ;; else
                     (postwalk
                       (fn walk-fn[item]
                         (cond  (empty? @syls-to-apply)
                               item
                               (is? :pitch item)
                               (let [syl
                                     (if (not @in-slur)
                                       (first @syls-to-apply))
                                     ret-val
                                     (if syl
                                       (conj item [:syl syl])
                                       item)
                                     has-begin-slur
                                     (some #(is? :begin-slur %) item)
                                     has-end-slur
                                     (some #(is? :end-slur %)  item)
                                     ]
                                 (if syl (swap! syls-to-apply rest))
                                 (cond (and has-begin-slur has-end-slur)
                                       nil
                                       has-begin-slur
                                       (reset! in-slur true)
                                       has-end-slur
                                       (reset! in-slur false))
                                 ret-val)
                               true
                               item
                               ))     line)
                     )) stave)
    ))


(defn ^:private handle-slurs[assigned stave ]
  (map (fn[line]
         (if-not (is? :notes-line line)
           line
           (let [
                 pitch-positions
                 (map start-index
                      (filter #(is? :pitch %) (tree-seq vector? identity line)))
                 end-slur-positions
                 (map start-index (filter #(is? :end-slur %)
                                          (tree-seq vector? identity line)))
                 begin-slur-positions
                 (map start-index (filter #(is? :begin-slur %)
                                          (tree-seq vector? identity line)))

                 pitches-needing-begin-slurs
                 (set  (map
                         (fn[slur-position]
                           (first (filter
                                    (partial < slur-position)
                                    pitch-positions)))
                         begin-slur-positions))
                 pitches-needing-end-slurs
                 (set  (map
                         (fn[slur-position]
                           (last (filter
                                   (partial > slur-position)
                                   pitch-positions)))
                         end-slur-positions))
                 ]
             (postwalk (fn walk-line[item]
                         (cond (is? :pitch item)
                               (let [ items-to-conj
                                     (remove nil?
                                             [
                                              (if
                                                (contains?
                                                  pitches-needing-end-slurs
                                                  (start-index item))
                                                [:end-slur])
                                              (if (contains?
                                                    pitches-needing-begin-slurs
                                                    (start-index item))
                                                [:begin-slur])
                                              ])]
                                 (if (not-empty items-to-conj)
                                   (apply conj item items-to-conj)
                                   item))
                               (is? :begin-slur item)
                               nil
                               (is? :end-slur item)
                               nil
                               (is? :beat item)
                               (vec (remove nil? item))
                               (is? :measure item)
                               (vec (remove nil? item))
                               true
                               item))
                       line
                       ))))
       stave)
  )

(defn ^:private assign-to-notes-line[assigned stave ]
  {
   :pre [(is? :stave stave)]
   :post [(is? :stave %)
          ]
   }
  (let [ column-map (lines->column-map (items stave))
        notes-line (first (filter #(is? :notes-line %) (items stave)))
        notes-line-start-index (start-index notes-line)
        line-starts (map start-index (items stave))
        line-start-for-position
        (fn line-start-for-position-fn[position]
          (last (filter (fn[x] (>= position x)) line-starts)))
        line-start-for-node
        (fn line-start-for-node[node]
          (line-start-for-position (start-index node)))
        column-for-node
        (fn[node] (let [my-start-index (start-index node)]
                    (- my-start-index
                       (line-start-for-position my-start-index))))
        ]
    (vec (map (fn[line]
                (if-not (is? :notes-line line)
                  line
                  (postwalk
                    (fn[item]
                      (when false
                        (println "postwalk in collapse item is"
                                 item "\n\n"))
                      (cond
                        (and (vector? item)
                             (is? :pitch item)
                             (< (start-index item)
                                notes-line-start-index))
                        item  ;; skips ornaments
                        (and (vector? item)
                             (takes-values-from-column? (first item)))
                        (let [column (column-for-node item)
                              start-index (start-index item)
                              nodes-in-this-column1
                              (filter
                                (fn[x] (#{:upper-line-dot
                                          :upper-line-two-dots
                                          :lower-line-dot
                                          :lower-line-two-dots
                                          :ornament
                                          :chord
                                          :kommal-indicator
                                          :tala
                                          :ending
                                          :mordent} (first x)))

                                (remove
                                  (partial in-assigned? @assigned)
                                  (column-map column [])))
                              ;; remove ornaments from
                              ;; nodes-in-this-column when item is
                              ;; not pitch
                              nodes-in-this-column
                              (if-not (is? :pitch item)
                                (remove #(is? :ornament %)
                                        nodes-in-this-column1)
                                nodes-in-this-column1)
                              ]

                          (calculate-octave
                            (if (not-empty nodes-in-this-column)
                              (do
                                (reset! assigned
                                        (apply conj
                                               @assigned
                                               (map unique-for-assigned
                                                    nodes-in-this-column)))
                                (apply conj item nodes-in-this-column)
                                )
                              item)))
                        true
                        item
                        )) line)))
              stave
              ))))

(defn ^:private collapse-stave
  "Assigns items based on indentation"
  [stave]
  ;; { :pre [;(vector? stave)
  ;;        ;(is? :stave stave)]
  ;;:post [(is? :stave %)]
  ;; }
  (when false
    (log "entering collapse-stave,stave=")
    (log stave)
    )
  (let [my-assigned (atom (hash-set))]
    (vec (->> stave
              (handle-slurs my-assigned)
              (assign-ornament-octaves my-assigned)
              (assign-to-notes-line my-assigned)
              (remove
                (fn[x] (and (vector? x)
                            (#{:upper-line :lower-octave-line} (first x)))))
              (vec)
              (assign-syllables my-assigned)
              (vec)
              apply-kommal-to-pitches
              ))))

(defn ^:private map-even-items [f coll]
  (map-indexed #(if (zero? (mod %1 2)) (f %2) %2) coll))

(defn ^:private handle-source[accum source]
  (assoc accum :source (last source))
  )

(def normalized-pitch->lilypond-pitch
  ;; includes dash (-) -> r "
  {
   "-" "r", "C" "c", "C#" "cs", "Cb" "cf", "Db" "df", "D" "d", "D#" "ds",
   "Eb" "ef", "E" "e", "E#" "es", "F" "f", "Fb" "ff", "F#" "fs", "Gb" "gf",
   "G" "g", "G#" "gs", "Ab" "af", "A" "a", "A#" "as", "Bb" "bf", "B" "b",
   "B#" "bs", })

(defn ^:private lilypond-escape[x]
  ;; (println "x is " x)
  ;;      # Anything that is enclosed in %{ and %} is ignored  by lilypond
  (when x (string/replace x #"\{%" "% {"))
  )
(def omit-time-signature-snippet
  "\\once \\override Staff.TimeSignature #'stencil = ##f"
  )

(defn ^:private time-signature-snippet[x]
  (if x
    (str "\\time " x)
    omit-time-signature-snippet))

(defn ^:private print-headers[accum]
  (let [
        composition (:composition accum)
        atts (first (filter #(is? :attribute-section %) composition))
        my-map (apply array-map
                      (map-even-items #(-> % lower-case keyword)
                                      (rest atts)))
        is-abc-composition (= :abc-composition (:kind my-map))
        source
        (second (first (filter #(= :source (first %)) (rest composition))))
        ;;  _ (pprint my-map)
        things-to-add
        (str
          "#(ly:set-option 'midi-extension \"mid\")"  "\n"
          "\\version \"2.12.3\""  "\n"
          "\\include \"english.ly\"" "\n"
          "\\header{ "
          "\n"
          (when-let [title (:title my-map)]
            (str "\n" "title = \"" title "\""))
          (when-let [author (:author my-map)]
            (str "\n" "composer = \"" author "\""))
          "}\n"
          "%{\n" (lilypond-escape (:source accum)) "\n%}"
          "\n"
          "melody = {"  "\n"
          (time-signature-snippet (:timesignature my-map))
          "\n"
          "\\clef treble"
          "\n"
          ;; Only in abc-compositions do we set the key
          (if is-abc-composition
            (str "\\key "
                 (normalized-pitch->lilypond-pitch (upper-case
                                                     (:key  my-map "c")))
                 " "
                 (str "\\" (lower-case (:mode my-map "major"))) "\n")
            ;; else
            (str "\\key c \n"
                 "\\" (lower-case (:mode my-map "major"))
                 "\n"
                 )
            )
          "\\cadenzaOn\n"
          )
        ]
    (-> (update-in accum
                   [:output] str  things-to-add)
        (assoc :my-map my-map))))



(def pitch->lilypond-pitch
  ;; includes dash (-) -> r "
  {
   "-" "r", "S" "c", "S#" "cs", "Sb" "cf", "r" "df", "R" "d", "R#" "ds",
   "g" "ef", "G" "e", "G#" "es", "m" "f", "mb" "ff", "M" "fs", "Pb" "gf",
   "P" "g", "P#" "gs", "d" "af", "D" "a", "D#" "as", "n" "bf", "N" "b",
   "N#" "bs", })


;;(pprint (-> "S- |\n.\nHi" doremi-text->collapsed-parse-tree))
;;(pprint (-> "S- |\nHi" doremi-text->collapsed-parse-tree))


(defn ^:private beat->beat-divisions[beat]
  {:pre [(is? :beat beat)]
   :post [ (integer? %)]
   }
  (->> beat (filter vector?) (map first) (filter #{:pitch :dash}) count)
  )

(defn ^:private start-beat[accum beat]
  (assoc accum
         :divisions (beat->beat-divisions beat)
         :beat-pitches []
         ))

(defn ^:private barline->lilypond-barline
  " maps barline-type field for barlines"
  [ [_ [barline-type] ]]
  (let [my-map
        {
         :reverse-final-barline "\\bar \".|\""
         :final-barline "\\bar \"|.\" "
         :double-barline "\\bar \"||\" "
         :single-barline "\\bar \"|\""
         :left-repeat "\\bar \"|:\""
         :right-repeat "\\bar \":|\""
         } ]
    (str (get my-map barline-type (:single-barline my-map)) " ")
    ))

(defn ^:private octave-number->lilypond-octave[num]
  (let [tick "'"
        comma ","]
    ;; Middle c is c'
    (cond (nil? num)
          tick
          (>= num 0)
          (clojure.string/join (take (inc num) (repeat tick)))
          true
          (clojure.string/join (take (dec (- num)) (repeat comma))))))

(defn ^:private start-pitch[accum pitch]
  (assoc accum
         :state :collecting-pitch-in-beat
         :current-pitch  { :obj pitch  :micro-beats 1}
         ))


(defn ^:private start-line[accum obj]
  accum
  )

(defn ^:private save-barline[accum barline]
  (assoc accum :last-barline
         (barline->lilypond-barline barline)
         )
  )

(defn ^:private lilypond-headers[accum composition]
  accum)

(defn ratio?[x]
  (zero? (mod x 1))
  )
(defn ^:private ratio->lilypond-durations
  "ratio->lilypond-durations(3 4) => ['8.']   Ratio is ratio of 1/4 note "
  [my-numerator subdivisions-in-beat]
  { :pre [ (integer? my-numerator)
          (integer? subdivisions-in-beat)]
   :post [ ;; (do (println %) true)
          (vector? %)]
   }

  (let [my-ratio (/ my-numerator subdivisions-in-beat)]
    ;; In the case of beats whose subdivisions aren't powers of 2, we will
    ;; use a tuplet, which displays, for example, ---3---  above the beat
    ;; if the beat has 3 microbeats.
    ;; Take the case of  S---R. beat is subdivided into 5.
    ;; Use sixteenth notes. 4 for S and 1 for R. 5/16 total.
    ;; For subdivision of 3, use 3 1/8 notes.
    ;; For subdivision of 5 use 5 1/16th notes.
    ;; For 6 use   16th notes
    ;; etc
    ;; For over 32 use 32nd notes, I guess.
    ;; confusing, but works
    ;; Things like S---r should map to quarter note
    ;; plus sixteenth note in a 5-tuple
    ;; Take the case of S----R--
    ;; S is 5 microbeats amounting to 5/32nds.
    ;; To get 5 we have to tie either
    ;; 4/8th of a beat plus 1/32nd  or there are other approaches.
    (if (not (ratio? my-ratio))
      ({ 1 ["4"]
        2 ["2"]
        3 ["2."]
        4 ["1"]  ;; review
        8 ["1" "1"]
        } my-ratio
       (vec (repeat my-numerator "4"))
       )
      ;; else
      (let [
            my-table
            { 1 ["4"] ;; a whole beat is a quarter note
             (/ 1 2) ["8"] ;; 1/4 of a beat is 16th
             (/ 1 4) ["16"] ;; 1/4 of a beat is 16th
             (/ 1 8) ["32"] ;; 1/8th of a beat is a 32nd.
             (/ 1 16) ["64"] ;; 1/16th of a beat is 64th. 16/64ths=beat
             (/ 1 32) ["128"] ;; 32nd of a beat is 128th note
             (/ 3 4) ["8."] ;; 3/4 of a beat is  dotted eighth
             (/ 3 8) ["16."] ;;
             (/ 3 16) ["32."] ;;  1/32 + 1/64 = 3/64
             ;; =3/16th of beat = 3/64 dotted 32nd
             (/ 3 32) ["64."]
             (/ 3 64) ["128."]
             (/ 5 4) ["4" "16"] ;; 1 1/4 beats= quarter tied to 16th
             (/ 5 8) ["8" "32"]
             (/ 5 16) ["16" "64"];;
             (/ 5 32) ["32" "128"];;
             (/ 5 64) ["64" "256"];;
             (/ 5 128) ["128" "512"];;
             (/ 7 4) ["4" "8."] ;;
             (/ 7 8) ["8.."] ;; 1/2 + 1/4 + 1/8
             (/ 7 16) ["16" "32."] ;; 1/4+ 3/16
             (/ 7 32) ["64" "128."] ;;
             (/ 11 16) ["8" "64."] ;; 1/2 +

             }
            ;;
            new-denominator
            (cond (#{1 2 4 8 16 32 64 128 256 512} subdivisions-in-beat)
                  subdivisions-in-beat
                  (= 3 subdivisions-in-beat)
                  2
                  (<  subdivisions-in-beat 8)
                  4
                  (< subdivisions-in-beat 16)
                  8
                  (< subdivisions-in-beat 32)
                  16
                  (< subdivisions-in-beat 64)
                  32
                  true
                  32
                  )
            new-ratio (/ my-numerator new-denominator)
            ]
        (get my-table new-ratio
             (vec (take my-numerator (cycle (str new-denominator))))
             )
        ))))

(defn ^:private tuplet-numerator-for-odd-subdivisions[subdivisions-in-beat]
  ;; fills in numerator for times. For example
  ;; \times ???/5 {d'16 e'8 d'16 e'16 }
  ;; The ??? should be such that 5/16 *  ???/5 =  1/4
  ;; So ??? = 4
  ;; TODO: dry with duration code
  (cond (= 3 subdivisions-in-beat)
        2
        (<  subdivisions-in-beat 8)
        4
        (< subdivisions-in-beat 16)
        8
        (< subdivisions-in-beat 32)
        16
        (< subdivisions-in-beat 64)
        32
        true
        32
        )
  )


;; It might be better if the pitches hadn't already
;; been turned to lilypond strings.
;;
(defn ^:private beam-beat-pitches[str-array]
  {
   :pre [(vector str-array)]
   :post [(vector? %)]
   }
  "beam a beat. Don't beam if beat contains rests."
  "Insert [ and ] after the duration. Use regex to do replacement"
  (let [last-idx (dec (count str-array))]
    (if (or (= 1 (count str-array))
            (some  (fn[^java.lang.String x] (.startsWith x "r")) str-array))
      str-array
      ;; else
      (do
        ;;(println "beam them")
        (assoc str-array
               0
               (replace-first
                 (first str-array)
                 #"(\d+\.*)" "$1[")

               last-idx
               (replace-first
                 (last str-array)
                 #"(\d+\.*)" "$1]")
               )
        ))))

(defn ^:private enclose-beat-in-times[subdivisions beat-str]
  {
   :pre [(string? beat-str)
         (integer? subdivisions)]
   :post [(string? %)]
   }
  (if (not (#{0 1 2 4 8 16 32 64 128} subdivisions))
    (str "\\times "
         (tuplet-numerator-for-odd-subdivisions
           subdivisions)
         "/"
         subdivisions
         "{ "
         beat-str " } ")
    beat-str))
(def obj  [:measure [:beat [:pitch "C"]]])

(defn ^:private finish-measure[accum]
  accum)

(defn ^:private start-measure[accum obj]
  (let [
        last-barline1 (or (get accum :last-barline)
                          "\\bar \"|\"")
        last-barline2 (if (:in-notes-line-beginning accum)
                        (do (println ":in-notes-line-beginning")
                            (println "omitting barline")
                            nil)
                        last-barline1)
        last-barline (get accum :last-barline)
        ]
    (-> accum (assoc :current-pitch nil :last-barline nil)
        (update-in [:output] #(str % " " last-barline))
        )))

(defn ^:private finish-beat[accum]
  ;; see also autoBeam... in printHeaders
  (assoc accum
         :output (str  (:output accum) " "
                      (->> accum :beat-pitches
                           beam-beat-pitches
                           (join " ")
                           (enclose-beat-in-times (:divisions accum))))
         :beat-pitches []
         :divisions 0))

(defn ^:private chord-snippet[obj]
  { :pre [ (vector? obj)   ] }
  (let [
        chord (last
                (first (filter #(and (vector? %) (= :chord (first %)))
                               obj)))
        ]
    (when chord (str "^\"" chord "\""))
    ))


(defn ^:private finish-dashes[accum]
  (let [dash (:current-dash accum)
        divisions (accum :divisions)
        micro-beats (get-in accum [:dash-microbeats])
        ary (ratio->lilypond-durations micro-beats divisions)
        first-duration (first ary)
        first-rest (str "r" first-duration (chord-snippet dash))
        rests (str first-rest (join " " (map (partial str "r") (rest ary))))
        ]
    (update-in accum [:beat-pitches] conj rests )
    ))


(defn ^:private start-dash[accum dash]
  (assoc accum :state :collecting-dashes-in-beat
         :dash-microbeats 1
         :current-dash dash
         ))


(defn ^:private get-ending[obj]
  (last (get-attribute obj :ending)))

(defn ^:private get-syl[pitch]
  (last (get-attribute pitch :syl)))

(defn ^:private ending-snippet[obj]
  (when-let [ending (get-ending obj)]
    (str "^\"" ending "\"")
    ))



(defn ^:private normalized-pitch->kommal[x]
  (get {"D" "Db"
        "E" "Eb"
        "A" "Ab"
        "B" "Bb"} x x))

(defn ^:private pitch-and-octave[pitch]
  (let [pitch2
        (if (get-attribute pitch :kommal-indicator)
          (normalized-pitch->kommal (second pitch))
          (second pitch))]
    (str  (normalized-pitch->lilypond-pitch pitch2)
         (-> pitch (get-attribute :octave)
             second
             octave-number->lilypond-octave))
    ))


(defn ^:private get-ornament-pitches[ornament]
  (-> ornament rest drop-last)
  )

(defn ^:private grace-note-pitches[ornament]
  ;; returns a string of grace note pitches.
  ;; Use 16 as duration and beam them if there is more than one.
  ;; Beamed notes look like this e'16[ d'16]
  (let [pitches (get-ornament-pitches ornament)
        my-count (count pitches)
        items (vec (map (fn[x] (str (pitch-and-octave x) "16")) pitches))
        ;; Update 1st and last items to add beams
        items2 (if (> my-count 1)
                 (assoc items 0 (str (get items 0) "[")
                        (dec my-count) (str (last items) "]"))
                 items)
        ]
    (join " " items2)))

(defn ^:private finish-pitch[accum]
  (when false (println "finish-pitch"))
  (when false (pprint (remove :output accum)))
  (let [pitch (:obj (:current-pitch accum))
        syl  (get-syl pitch)

        begin-slur (if (some #(and (vector? %) (= :begin-slur (first %)))
                             pitch)
                     "(")
        _ (when begin-slur
            (reset! (:in-slur accum) true))
        end-slur (if (some #(and (vector? %) (= :end-slur (first %)))
                           pitch)
                   ")")
        _ (when end-slur
            (reset! (:in-slur accum) false))
        my-pitch-and-octave  (pitch-and-octave pitch)
        divisions (accum :divisions)
        after-ornament  (->> pitch
                             (filter #(is? :ornament %))
                             (filter #(= :after (last %)))
                             first)
        before-ornament
        (->> pitch (filter #(is? :ornament %))
             (filter #(= :before (last %))) first)
        micro-beats (get-in accum [:current-pitch :micro-beats])
        durations (ratio->lilypond-durations micro-beats divisions)
        first-pitch
        (str
          (when before-ornament
            (str "\\grace {" (grace-note-pitches before-ornament) "}"))
          (when after-ornament "\\afterGrace ")
          my-pitch-and-octave
          (first durations)
          end-slur
          begin-slur
          (chord-snippet pitch)
          (ending-snippet pitch)
          (when (get-attribute pitch :mordent)
            "\\mordent")
          (when (and after-ornament  (not @(:in-slur accum)))
            "(")
          (when after-ornament ;; ornament
            (str  "{" (grace-note-pitches after-ornament)
                 (when (and after-ornament  (not @(:in-slur accum)))
                   ")")
                 "}"))
          ) ;; end str
        pitches  (if (= 1 (count durations))
                   first-pitch
                   (str first-pitch "~"
                        (join "~" (map (partial str my-pitch-and-octave)
                                       (rest durations)))))
        ]
    (-> accum  (update-in [:beat-pitches] conj pitches)
        (update-in [:syllables] str syl " ")
        )
    ))

(defn ^:private finish-line[accum]
  ;;  (update-in accum [:output] str " \\break\n"))

  (-> accum (update-in [:output] str
                       " " (accum :last-barline)
                       "\\break" ;; controversial
                       " \n")  (assoc :last-barline nil)))


(defn ^:private transpose-snippet[my-key]
  { :pre [(or (string? my-key) (nil? my-key))]
   :post [(or (string? %) (nil? %))]
   }

  "return transpose snippet for lilypond"
  "Don't transpose if notation is in abc(future)"
  (cond
    (nil? my-key)
    ""
    (= "c" (lower-case my-key))
    ""
    true
    (str "\\transpose c' "
         (normalized-pitch->lilypond-pitch (upper-case my-key))
         "'")
    ))

(defn ^:private lilypond-at-eof[accum]
  (let [
        is-abc-composition (= :abc-composition (:kind (:my-map accum)))
        ]
    (update-in accum [:output] str
               " " (:last-barline accum)
               (join "\n" [
                           "}"
                           "text = \\lyricmode {"
                           (:syllables accum)
                           "}"
                           "\\score{"
                           ;; ****
                           (if (not is-abc-composition)
                             (transpose-snippet (:key (:my-map accum)))
                             )
                           "<<"
                           "\\new Voice = \"one\" {"
                           "\\set midiInstrument = #\"flute\""
                           "\\melody"
                           "}"
                           "\\new Lyrics \\lyricsto \"one\" \\text"
                           ">>"
                           "\\layout {"
                           "\\context {"
                           "\\Score"
                           ;;   "\\remove \"Bar_number_engraver\""
                           "}"
                           "}"
                           "\\midi {"
                           "\\context {"
                           "\\Score"
                           "tempoWholesPerMinute = #(ly:make-moment 100 4)"
                           "}"
                           "}"
                           "}"
                           ]))))


(defn ^:private lilypond-transition[accum obj]
  { :pre [ (do (when false
                 (println "Entering lilypond-transition")
                 (if (vector? obj)
                   (println "first obj=" (first obj))))
               true)
          (map? accum)
          (#{:lyrics-section
             :lyrics-line
             :stave
             :pitch :barline
             :measure
             :notes-line
             :line-number :composition
             :beat
             :dash
             :output
             :eof :attribute-section :source} (first obj))
          (:output accum)
          (:state accum)
          (keyword? (:state accum))
          (vector obj)]}
  (let [token (first obj)
        cur-state (:state accum)
        _ (when false
            (println "Entering lilypond-transition\n" "state,token="
                     cur-state token))
        ]
    (case [cur-state token]
      [:start :composition]
      (-> accum
          (lilypond-headers obj)
          (assoc :state :looking-for-attribute-section))

      [:looking-for-source :source]
      (-> accum
          (handle-source obj)
          (assoc :state :looking-for-attribute-section))

      [:in-stave :notes-line]
      (-> accum (start-line obj)
          (assoc  :state :in-notes-line-beginning))

      [:looking-for-attribute-section :lyrics-section]
      accum

      [:looking-for-attribute-section :stave]
      (-> accum print-headers  (assoc
                                 :state :in-stave))

      [:looking-for-attribute-section :attribute-section]
      ;; support multiple attribute sections
      (assoc accum
             :state
             :looking-for-attribute-section)

      [:in-notes-line-beginning :measure]
      ;; maybe need to save current pitch
      (-> accum (start-measure obj)
          (assoc :current-pitch nil :state :in-notes-line))

      [:in-notes-line :measure]
      (-> accum (start-measure obj))

      [:in-notes-line :beat]
      (-> accum (start-beat obj) (assoc :state :in-beat))

      [:in-notes-line-beginning :barline]
      ;;  (-> accum (save-barline obj) (assoc :state :in-notes-line))
      ;;  omit barline at beginning of line if it is a regular barline????
      (if (= :single-barline (first (second obj)))
        (-> accum (assoc :state :in-notes-line))
        ;; else
        (-> accum
            (assoc :state
                   :in-notes-line
                   :last-barline
                   (barline->lilypond-barline obj))))

      [:in-notes-line :barline]
      (-> accum (save-barline obj) (assoc :state :in-notes-line))

      [:in-notes-line :line-number]
      accum
      [:in-notes-line-beginning :line-number]
      (-> accum (assoc :state :in-notes-line-beginning))

      [:in-notes-line :stave]
      (-> accum finish-line (assoc :state :in-stave))

      [:looking-for-stave :eof]
      (-> accum lilypond-at-eof  (assoc :state :eof))
      [:looking-for-stave :attribute-section]
      accum
      [:looking-for-stave :stave]
      (-> accum (assoc :state :in-stave))

      [:in-notes-line :lyrics-line]
      (-> accum finish-line
          (assoc :state :looking-for-stave))

      [:collecting-pitch-in-beat :lyrics-section] ;; needed?
      (-> accum finish-pitch finish-beat finish-line
          (assoc :state :looking-for-stave))
      [:collecting-pitch-in-beat :lyrics-line] ;; needed?
      (-> accum finish-pitch finish-beat finish-line
          (assoc :state :looking-for-stave))
      [:collecting-pitch-in-beat :stave] ;; needed?
      (-> accum finish-pitch finish-beat finish-line
          (assoc :state :in-stave))

      [:looking-for-attribute-section :eof]
      (-> accum (assoc :output "No music entered" :state :eof))

      [:collecting-pitch-in-beat :eof]
      (-> accum finish-pitch finish-beat finish-line lilypond-at-eof)
      [:in-notes-line :lyrics-section]
      (-> accum finish-line (assoc :state :looking-for-stave))
      [:in-notes-line :eof]
      (-> accum finish-line lilypond-at-eof (assoc :state :eof))

      [:in-beat :eof]
      (-> accum finish-beat  (assoc :state :eof))

      [:in-beat :pitch]
      (start-pitch accum obj)

      [:in-beat :dash]  ;; dash at beginning of beat
      (start-dash accum obj)

[:collecting-dashes-in-beat :lyrics-line]
(-> accum finish-dashes finish-beat finish-line
    (assoc :state :looking-for-stave))

[:collecting-dashes-in-beat :lyrics-section]
(-> accum
    finish-dashes
    finish-beat
    finish-line (assoc :state :looking-for-stave))
[:collecting-dashes-in-beat :eof]
(-> accum finish-dashes finish-beat lilypond-at-eof)

[:collecting-dashes-in-beat :beat]
(-> accum finish-dashes
    finish-beat (start-beat obj) (assoc :state :in-beat))

[:collecting-dashes-in-beat :dash]
(-> accum (update-in [:dash-microbeats] inc))

[:collecting-dashes-in-beat :pitch]
(-> accum finish-dashes (start-pitch obj)
    (assoc :state :collecting-pitch-in-beat))



[:collecting-dashes-in-beat :stave]
(-> accum
    finish-dashes
    finish-beat
    finish-line
    (assoc :state :in-stave))



[:collecting-dashes-in-beat :barline]
(-> accum finish-dashes finish-beat
    (save-barline obj) (assoc :state :in-notes-line))

[:collecting-pitch-in-beat :barline]
(-> accum
    finish-pitch
    finish-beat
    finish-measure
    (save-barline obj)
    (assoc :state :in-notes-line))

[:collecting-pitch-in-beat :pitch]
(-> accum finish-pitch (start-pitch obj)
    (assoc :state :collecting-pitch-in-beat))

[:collecting-pitch-in-beat :dash]
(-> accum (update-in [:current-pitch :micro-beats] inc))

[:collecting-pitch-in-beat :beat]
(-> accum
    finish-pitch
    finish-beat
    (start-beat obj)
    (assoc :state :in-beat))
;; tie previous note if new one is a dash!!!
)))



(defn ^:private to-lilypond[composition txt]
  (when false (println "entering to-lilypond") (pprint composition))
  (let [headers-printed? (atom false)
        started-pitch? (atom false)
        ]
    (->> (conj composition [:eof])
         (tree-seq  #(and (vector? %)
                          (#{:stave
                             :lyrics-line
                             :composition
                             :notes-line
                             :measure
                             :beat} (first %)))
                   identity)
         (filter vector?)
         (reduce lilypond-transition
                 {:state :start
                  :finished-first-line false
                  :in-slur (atom false)
                  :syllables ""
                  :source txt
                  :output ""
                  :composition composition}
                 ))))

(defn ^:private attribute-section->map[x]
  {
   :pre [(is? :attribute-section x)]
   :post [ (map? %)]
   }
  (apply array-map
         (map-even-items #(-> % lower-case keyword)
                         (rest x)))
  )
;; (pprint (-> "(SS) (RR)\n\n(GG) (mm)"  doremi-text->collapsed-parse-tree))
;;(println "collapse-stave")


;; (pprint (-> "4|123"  doremi-text->collapsed-parse-tree))
;; (pprint (-> "4\n|123"  parse))
;; (pprint (-> "Title: hi\n\n|SSS\nHi"  doremi-text->parsed))
;; (pprint (-> "Title: hi\n\n|123"  doremi-text->parsed))
;; (pprint (-> "SSS" doremi-text->parsed))
;; (pprint (-> "SSS" parse))
;; (pprint (-> "SSS" parse))

(def default-kind :sargam-composition)

(defn ^:private doremi-text->parsed-aux[txt kind]
  {
   :pre [(string? txt)

         ]
   :post [ ;;(do (pprint %) true)
          (map? %)
          (:src %)
          (or (:error %)
              (and (vector? (:parsed %))
                   (is? :composition (:parsed %))
                   (:lilypond %)
                   (:parsed %)))
          ]
   }
  (let [ parsed  (doremi-text->parse-tree txt kind) ]
    (if (parse-failed? parsed)  ;; error
      {:src txt
       :parsed nil
       :lilypond nil
       :error (-> parsed format-instaparse-errors)
       }
      (let [
            collapsed-parse-tree
            (vec (map (fn[z] (if (is? :stave z)
                               (collapse-stave z)
                               z))
                      parsed))
            _ (when false (println "**") (pprint collapsed-parse-tree))
            lilypond (to-lilypond collapsed-parse-tree txt)
            ]
        {:src txt
         :lilypond (:output lilypond)
         :parsed collapsed-parse-tree
         :attributes (:my-map lilypond)
         :error nil}
        ))))
;; (-> "S-R" doremi-text->parsed)
(defn doremi-text->parsed
  ([txt kind]
   (doremi-text->parsed-aux txt kind))
  ([txt]
   (doremi-text->parsed-aux txt default-kind)))


(defn doremi-text->lilypond[txt kind]
  {
   :pre [(string? txt)]
   :post [(or (map? %) (string? %))]
   }
  (when false
    (println "parsing")
    (println txt)
    )
  ;;  (pprint (doremi-text->lilypond "1234"))
  ;;(println "\n\n\n")
  (let [ parsed  (doremi-text->parse-tree txt kind) ]
    (if (parse-failed? parsed)  ;; error
      parsed
      (let [
            collapsed-parse-tree
            (vec (map (fn[z] (if (is? :stave z)
                               (collapse-stave z)
                               z))
                      parsed))
            _ (when nil;; (pprint )
                (println "****collapsed-parse-tree")
                (pprint collapsed-parse-tree) (println "\n\n"))
            ]
        nil
        (:output (to-lilypond collapsed-parse-tree txt))
        ))))


(defn test-dialect-normalization[]
  (let [abc-str (str "D\n" "|CDEF# GG#|")
        sargam-str (str "R.\n"" |SRGM PP#|")
        hindi-str (str "सर" "|\n" " _")
        doremi-str "drmf sltd"
        ]
    (println "hindi raw parse results")
    (-> hindi-str  (parse nil) pprint)
    (println "hindi normalized")
    (-> hindi-str  (doremi-text->parse-tree nil) pprint)
    (println "hindi to lilypond")
    (-> hindi-str  (doremi-text->lilypond nil) println)
    (println "hindi to collapsed")
    (when false
      (println abc-str)
      (println "abc raw parse results")
      (-> abc-str  (parse nil) pprint)
      (println "abc normalized")
      (-> abc-str  (doremi-text->parse-tree nil) pprint)
      (println "abc to-lilypond")
      (-> abc-str  (doremi-text->lilypond nil) println)
      (println "sargam raw parse results")
      (-> sargam-str  (parse nil) pprint)
      (println "sargam normalized")
      (-> sargam-str  (doremi-text->parse-tree nil) pprint)
      (println "sargam to-lilypond")
      (-> sargam-str  (doremi-text->lilypond nil) println)
      (println "doremi to-lilypond")
      (-> doremi-str  (doremi-text->lilypond nil) println)
      )
    ))
;; (test-dialect-normalization)
;;  (-> "123"  (doremi-text->parse-tree nil) pprint)

(when false
  (-> "+\n| S - - -" (doremi-text->collapsed-parse-tree nil) pprint)
  (-> (str "सर" "|\n" " _") (doremi-text->collapsed-parse-tree nil) pprint)
  )
(defn -doremi_text_to_lilypond[txt]
  (->> txt (doremi-text->lilypond nil)))


(defn doremi-text->lilypond2[txt]
  (doremi-text->lilypond txt nil))


(def x
  "C | A

  | CDbDEb EFF#G AbABbB C#D#E#F#F |

  | C#D#E#F# F :|

  F#")
(def y "Key: B\nMode:Lydian\n\nC :|\n\nD E F    ")
(def z "Title:me\n\nC :|\n\nD E F    ")
(def x "oh say can you see\n\nC :|\n\nD E F    ")
(def v "SSS")
(def j "Key:G\n\n123")
(comment
  ;; (println (-> bad doremi-text->parsed))
  ;;(println (-> ".\nS" doremi-text->parse-tree nil ))
  ;;;j(println (-> z parse)) ;doremi-text->parse-tree ))
  ;;(pprint (->> v doremi-text->parsed))
  ;;:sargam-composition)))
  ;(println (-> z doremi-text->parse-tree ))
  ;(println (-> "drmf slt-" doremi-text->parse-tree ))
  ;(println (-> x doremi-text->parse-tree ))
  ;;(println (-> y doremi-text->lilypond))
  ;;(println (-> "C:|\n\n D E |\nHi there john\n  \n " (doremi-text->lilypond)))
  ;;(pprint (-> "fixtures/do_not_assign_ornament_to_dash.txt"
  ;;resource slurp pprint) parse))
  ;;;doremi-text->lilypond))
  ;;
  ; (use 'clojure.stacktrace)
  ;;(println (-> ""  doremi-text->lilypond println))
  ;;(println (-> "fixtures/tabs_should_cause_parse_failure.txt"
  ;;resource slurp doremi-text->lilypond println))
  ;; (print-stack-trace *e)
  )

(defn testn[x]
  (let [s (apply str (repeat x "SRG")) ]
    (println (time (-> s doremi-text->collapsed-parse-tree)))))

(comment
  (testn 10000))

;;; PUBLIC INTERFACE FOLLOWS
;;;

(defn doremi-text->parse-tree
  "Parse doremi text into parse tree or failure. "
  [^java.lang.String txt kind]
  { :pre [(string? txt)
          (or (nil? kind) (is-kind? kind))]
   :post [
          ;;;   (do (pprint %) true)

          (or (vector? %)
              (insta/failure?  %) true)] }

  (cond (= "" txt)
        "Nothing entered"
        (not= -1 (.indexOf txt "\t"))
        "Tabs are not allowed"
        true
        (let [ parsed (parse txt kind)
              ]
          (if (insta/failure? parsed)
            parsed
            ;; else
            (-> (add-kind parsed kind)
                normalize-pitches
                remove-notation-system-prefixes)
            )
          )))

(defn doremi-text->collapsed-parse-tree[txt kind]
  {
   :pre [(string? txt)]
   :post [ ;;(do (pprint %) true)
          (map? %)
          (:src %)
          (or (:error %)
              (and (vector? (:parsed %))
                   (is? :composition (:parsed %))
                   (:parsed %)))
          ]
   }
  (let [ parsed  (doremi-text->parse-tree txt kind) ]
    (when false
      (log "parsed:")
      (log  parsed))

    (if (parse-failed? parsed)  ;; error
      {:src txt
       :parsed nil
       :lilypond nil
       :error (-> parsed format-instaparse-errors)
       }
      (let [
            collapsed-parse-tree
            (vec (map (fn[z] (if (is? :stave z)
                               (collapse-stave z)
                               z))
                      parsed))
            my-map
            (->> collapsed-parse-tree (filter #(is? :attribute-section %))
                 first
                 attribute-section->map)
            _ (when false (pprint my-map))
            _ (when false (println "**") (pprint collapsed-parse-tree))
            ]
        {:src txt
         :parsed (match-slurs collapsed-parse-tree)
         :attributes my-map  ;; TODO
         :error nil}
        ))))


(defn parse-failed?[x]
  (or (insta/failure? x) (string? x)))

(defn format-instaparse-errors
  "Tightens up instaparse error format by deleting newlines after 'of' "
  [z]
  { :pre [ (parse-failed? z)]
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
