(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs      "0.0-2814-0" :scope "test"]
 [adzerk/boot-cljs-repl "0.1.9"      :scope "test"]
 [adzerk/boot-reload    "0.2.4"      :scope "test"]
 [pandeiro/boot-http    "0.6.1"      :scope "test"]
 [org.clojure/clojure "1.6.0"]
  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
 [com.lucasbradstreet/instaparse-cljs "1.3.5"]
 [reagent "0.5.0-alpha3"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

		(deftask build []
		 (comp (speak)

			(cljs)
		 ))

		(deftask run []
		 (comp (serve)
			(watch)
			(cljs-repl)
			(reload)
			(build)))

		(deftask production []
		 (task-options! cljs {:optimizations :advanced
			;; pseudo-names true is currently required
			;; https://github.com/martinklepsch/pseudo-names-error
			;; hopefully fixed soon
			:pseudo-names true})
		 identity)

		(deftask development []
		 (task-options! cljs {:optimizations :none
			:unified-mode true
			:source-map true}
			reload {:on-jsload 'doremi-script-app.app/init})
		 identity)

		(deftask dev
		 "Simple alias to run application in development mode"
		 []
		 (comp (development)
			(run)))
