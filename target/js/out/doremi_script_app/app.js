// Compiled by ClojureScript 0.0-2371
goog.provide('doremi_script_app.app');
goog.require('cljs.core');
goog.require('doremi_script_app.doremi_core');
goog.require('clojure.string');
goog.require('doremi_script_app.utils');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('doremi_script_app.utils');
goog.require('goog.json');
goog.require('reagent.core');
goog.require('goog.json');
goog.require('instaparse.core');
goog.require('doremi_script_app.doremi_core');
goog.require('doremi_script_app.doremi_core');
goog.require('clojure.string');
goog.require('instaparse.core');
goog.require('clojure.string');
if(typeof doremi_script_app.app.app_state !== 'undefined')
{} else
{doremi_script_app.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$168,cljs.core.constant$keyword$261,cljs.core.constant$keyword$168,cljs.core.constant$keyword$262,null], null));
}
doremi_script_app.app.log_off = true;
doremi_script_app.app.to_s = (function to_s(x){return JSON.stringify(cljs.core.clj__GT_js(x));
});
cljs.core.enable_console_print_BANG_();
doremi_script_app.app.class_name_for = (function class_name_for(x){return clojure.string.replace(cljs.core.name(x),"-","_");
});
doremi_script_app.app.my_url_encode = (function my_url_encode(s){if(cljs.core.truth_(s))
{return clojure.string.replace((function (){var G__11290 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));return encodeURIComponent(G__11290);
})(),"*","%2A");
} else
{return null;
}
});
doremi_script_app.app.generate_staff_notation_URL = "http://ragapedia.com:3000/generate_staff_notation";
doremi_script_app.app.generate_staff_notation_xhr = (function generate_staff_notation_xhr(url,content){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering generate-staff-notation-URL",url,content], 0));
var query_data = (new goog.Uri.QueryData());query_data.set("src",cljs.core.constant$keyword$255.cljs$core$IFn$_invoke$arity$1(content));
query_data.set("kind",cljs.core.name(cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(content)));
var G__11297 = url;var G__11298 = ((function (G__11297,query_data){
return (function (event){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in callback"], 0));
var raw_response = event.target;var response_text = raw_response.getResponseText();var my_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11301 = response_text;return goog.json.parse(G__11301);
})(),cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0));doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in callback my-map",my_map], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$263,("http://ragapedia.com:3000"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(my_map))));
return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["app-state is",(function (){var G__11302 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11302) : cljs.core.deref.call(null,G__11302));
})()], 0));
});})(G__11297,query_data))
;var G__11299 = "POST";var G__11300 = query_data;return goog.net.XhrIo.send(G__11297,G__11298,G__11299,G__11300);
});
doremi_script_app.app.class_for_octave = cljs.core.PersistentHashMap.fromArrays([null,(0),(-4),(1),(-2),(4),(-1),(-3),(3),(2),(5)],["octave0","octave0","lower_octave_4","upper_octave_1 upper_octave_indicator","lower_octave_2","upper_octave_4 upper_octave_indicator","lower_octave_1","lower_octave_3","upper_octave_3 upper_octave_indicator","upper_octave_2 upper_octave_indicator","upper_octave_5 upper_octave_indicator"]);
doremi_script_app.app.class_for_ornament_octave = cljs.core.PersistentHashMap.fromArrays([null,(0),(-4),(1),(-2),(4),(-1),(-3),(3),(2),(5)],["octave0","octave0","lower_octave_4","upper_octave_1","lower_octave_2","upper_octave_4","lower_octave_1","lower_octave_3","upper_octave_3","upper_octave_2","upper_octave_5"]);
doremi_script_app.app.bullet = "&bull;";
doremi_script_app.app.sharp_symbol = "&#9839;";
doremi_script_app.app.flat_symbol = "&#9837;";
doremi_script_app.app.lookup_simple = cljs.core.PersistentHashMap.fromArrays(["|]","*","%","|","~","[|","b",".",":|","#","||","|:"],["|","&bull;","%","|","~","|","b","&bull;",":|","#","||","|:"]);
doremi_script_app.app.lookup_html_entity = cljs.core.PersistentHashMap.fromArrays(["|]","*","%","|","~","[|","b",".",":|","#","||","|:"],["&#x1d102","&bull;","&#x1d10E","&#x1d100","&#x1D19D&#x1D19D","&#x1d103","&#9837;","&bull;","&#x1d107","&#9839;","&#x1d101","&#x1d106"]);
doremi_script_app.app.lookup1 = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E#","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["P",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["P"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["P",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R"], null)]);
doremi_script_app.app.lookup_number = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E#","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["6",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["6",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2"], null)]);
doremi_script_app.app.lookup_hindi = (function (){var s = "&#x0938";var r = "r";var g = "g";var m = "m";var p = "p";var d = "d";var n = "n";var tick = "'";return cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E#","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick)),p,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),g,s,m,d,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.flat_symbol)),n,n,g,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),r,d,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.flat_symbol)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.app.sharp_symbol)),r]);
})();
doremi_script_app.app.lookup_ABC = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E#","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D"], null)]);
doremi_script_app.app.lookup_DoReMi = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E#","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S",doremi_script_app.app.flat_symbol], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T",doremi_script_app.app.sharp_symbol], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R"], null)]);
doremi_script_app.app.deconstruct_pitch_string_by_kind = (function deconstruct_pitch_string_by_kind(pitch,kind){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["deconstruct-pitch-string-by-kind"," kind is:",kind], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pitch], 0));
var G__11304 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);switch (G__11304) {
case "hindi-composition":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_hindi,pitch);

break;
case "doremi-composition":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_DoReMi,pitch);

break;
case "abc-composition":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_ABC,pitch);

break;
case "number-composition":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_number,pitch);

break;
case "sargam-composition":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup1,pitch);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup1,pitch);

}
});
doremi_script_app.app.mordent_entity = "&#x1D19D&#x1D19D";
doremi_script_app.app.lookup_barline = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$229,"&#x1d100",cljs.core.constant$keyword$228,"&#x1d101",cljs.core.constant$keyword$230,"&#x1d106",cljs.core.constant$keyword$214,"&#x1D19D&#x1D19D",cljs.core.constant$keyword$231,"&#x1d107",cljs.core.constant$keyword$227,"&#x1d102",cljs.core.constant$keyword$226,"&#x1d103"], null);
doremi_script_app.app.parse_results_box = (function parse_results_box(p__11306){var map__11308 = p__11306;var map__11308__$1 = ((cljs.core.seq_QMARK_(map__11308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11308):map__11308);var parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11308__$1,cljs.core.constant$keyword$256);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"parse-results"], null),"Parse Results:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,"3",cljs.core.constant$keyword$270,false,cljs.core.constant$keyword$271,true,cljs.core.constant$keyword$272,JSON.stringify(cljs.core.clj__GT_js(parsed))], null)], null)], null);
});
doremi_script_app.app.entry_area = (function entry_area(p__11309){var map__11311 = p__11309;var map__11311__$1 = ((cljs.core.seq_QMARK_(map__11311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11311):map__11311);var doremi_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11311__$1,cljs.core.constant$keyword$273);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"entryArea"], null),"Enter Letter Notation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$275,"Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929   Example:  | 1 -2 3- -1 | 3 1 3 - |   ",cljs.core.constant$keyword$28,"src",cljs.core.constant$keyword$272,doremi_text,cljs.core.constant$keyword$270,false,cljs.core.constant$keyword$276,((function (map__11311,map__11311__$1,doremi_text){
return (function (x){var new_val = x.target.value;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273], null),new_val);
});})(map__11311,map__11311__$1,doremi_text))
], null)], null)], null);
});
doremi_script_app.app.draw_children = (function draw_children(items){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed((function notes_line_aux(idx,item){var G__11318 = item;var G__11319 = idx;return (doremi_script_app.app.draw_item.cljs$core$IFn$_invoke$arity$2 ? doremi_script_app.app.draw_item.cljs$core$IFn$_invoke$arity$2(G__11318,G__11319) : doremi_script_app.app.draw_item.call(null,G__11318,G__11319));
}),items));
});
doremi_script_app.app.staff_notation = (function staff_notation(){var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11321 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11321) : cljs.core.deref.call(null,G__11321));
})(),cljs.core.constant$keyword$263);if(cljs.core.truth_(src))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,src], null)], null);
} else
{return null;
}
});
doremi_script_app.app.composition = (function composition(p__11322){var map__11324 = p__11322;var map__11324__$1 = ((cljs.core.seq_QMARK_(map__11324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11324):map__11324);var parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.constant$keyword$256);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.constant$keyword$261);if((parsed == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,doremi_script_app.app.draw_children(cljs.core.rest(parsed))], null);
}
});
doremi_script_app.app.attribute_section = (function attribute_section(p__11325){var map__11327 = p__11325;var map__11327__$1 = ((cljs.core.seq_QMARK_(map__11327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11327):map__11327);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11327__$1,cljs.core.constant$keyword$279);return null;
});
doremi_script_app.app.notes_line = (function notes_line(p__11328){var map__11330 = p__11328;var map__11330__$1 = ((cljs.core.seq_QMARK_(map__11330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11330):map__11330);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11330__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["notes-line, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.notes_line_wrapper = cljs.core.with_meta(doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$281,(function (this$){var G__11331 = (function (){var G__11332 = reagent.core.dom_node(this$);return $(G__11332);
})();return dom_fixes(G__11331);
}),cljs.core.constant$keyword$33,(function (this$){var G__11333 = (function (){var G__11334 = reagent.core.dom_node(this$);return $(G__11334);
})();return dom_fixes(G__11333);
})], null));
doremi_script_app.app.ornament_pitch = (function ornament_pitch(p__11336){var map__11338 = p__11336;var map__11338__$1 = ((cljs.core.seq_QMARK_(map__11338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11338):map__11338);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11338__$1,cljs.core.constant$keyword$279);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11338__$1,cljs.core.constant$keyword$261);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering ornament-pitch"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind(cljs.core.second(item),render_as);var octave = cljs.core.some(((function (deconstructed_pitch,map__11338,map__11338__$1,item,render_as){
return (function (p1__11335_SHARP_){if(cljs.core.truth_((function (){var and__3413__auto__ = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__11335_SHARP_],null));if(cljs.core.truth_(and__3413__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$207,cljs.core.first(p1__11335_SHARP_));
} else
{return and__3413__auto__;
}
})()))
{return cljs.core.second(p1__11335_SHARP_);
} else
{return null;
}
});})(deconstructed_pitch,map__11338,map__11338__$1,item,render_as))
,cljs.core.rest(item));var alteration_string = cljs.core.second(deconstructed_pitch);var pitch_src = clojure.string.join.cljs$core$IFn$_invoke$arity$1(deconstructed_pitch);var octave_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.class_for_ornament_octave,octave);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$15,octave_class,cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,pitch_src], null)], null)], null);
});
doremi_script_app.app.ornament = (function ornament(p__11340){var map__11344 = p__11340;var map__11344__$1 = ((cljs.core.seq_QMARK_(map__11344))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11344):map__11344);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,cljs.core.constant$keyword$279);var items = cljs.core.rest(item);var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (items,map__11344,map__11344__$1,item){
return (function (p1__11339_SHARP_){return (cljs.core.vector_QMARK_(p1__11339_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,cljs.core.first(p1__11339_SHARP_)));
});})(items,map__11344,map__11344__$1,item))
,items);var _ = doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["filtered ",filtered], 0));var placement = cljs.core.last(item);var placement_class = ("placement_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(placement)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,placement_class], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed(((function (items,filtered,_,placement,placement_class,map__11344,map__11344__$1,item){
return (function notes_line_aux(idx,item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$279,item__$1,cljs.core.constant$keyword$261,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11346 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11346) : cljs.core.deref.call(null,G__11346));
})(),cljs.core.constant$keyword$261),cljs.core.constant$keyword$36,idx], null)], null);
});})(items,filtered,_,placement,placement_class,map__11344,map__11344__$1,item))
,filtered))], null);
});
doremi_script_app.app.mordent = (function mordent(p__11347){var map__11349 = p__11347;var map__11349__$1 = ((cljs.core.seq_QMARK_(map__11349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11349):map__11349);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11349__$1,cljs.core.constant$keyword$279);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,doremi_script_app.app.mordent_entity], null)], null)], null);
});
doremi_script_app.app.ending = (function ending(p__11350){var map__11352 = p__11350;var map__11352__$1 = ((cljs.core.seq_QMARK_(map__11352))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11352):map__11352);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11352__$1,cljs.core.constant$keyword$279);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,cljs.core.second(item)], null);
});
doremi_script_app.app.line_number = (function line_number(p__11353){var map__11355 = p__11353;var map__11355__$1 = ((cljs.core.seq_QMARK_(map__11355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11355):map__11355);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11355__$1,cljs.core.constant$keyword$279);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item))+")")], null)], null);
});
doremi_script_app.app.line_item = (function line_item(p__11356){var map__11358 = p__11356;var map__11358__$1 = ((cljs.core.seq_QMARK_(map__11358))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11358):map__11358);var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11358__$1,cljs.core.constant$keyword$255);var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11358__$1,cljs.core.constant$keyword$217);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11358__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering line-item, item"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,"note_wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,kind], null),src], null)], null);
});
doremi_script_app.app.barline = (function barline(p__11359){var map__11361 = p__11359;var map__11361__$1 = ((cljs.core.seq_QMARK_(map__11361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11361):map__11361);var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11361__$1,cljs.core.constant$keyword$255);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11361__$1,cljs.core.constant$keyword$279);var barline_name = cljs.core.first(cljs.core.second(item));doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["barline-name is",barline_name], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_barline,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(item))))], null)], null)], null)], null);
});
doremi_script_app.app.beat = (function beat(p__11362){var map__11364 = p__11362;var map__11364__$1 = ((cljs.core.seq_QMARK_(map__11364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11364):map__11364);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11364__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering beat"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["beat, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var beat_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__11364,map__11364__$1,item){
return (function count_beats(accum,cur){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cur is",cur], 0));
if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_(cur);if(and__3413__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,null,cljs.core.constant$keyword$179,null], null), null),cljs.core.first(cur));
} else
{return and__3413__auto__;
}
})()))
{return (accum + (1));
} else
{return accum;
}
});})(map__11364,map__11364__$1,item))
,(0),cljs.core.rest(item));var _ = doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["beat-count is",beat_count], 0));var looped = (((beat_count > (1)))?"looped":"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,looped], null),doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.pitch_name = (function pitch_name(p__11365){var map__11367 = p__11365;var map__11367__$1 = ((cljs.core.seq_QMARK_(map__11367))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11367):map__11367);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11367__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch-name, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.second(item)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.second(item)], null)], null)], null);
});
doremi_script_app.app.pitch_alteration = (function pitch_alteration(p__11368){var map__11370 = p__11368;var map__11370__$1 = ((cljs.core.seq_QMARK_(map__11370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11370):map__11370);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11370__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch-alteration"], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.second(item)], null)], null)], null);
});
doremi_script_app.app.begin_slur_id = (function begin_slur_id(p__11371){var map__11373 = p__11371;var map__11373__$1 = ((cljs.core.seq_QMARK_(map__11373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11373):map__11373);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11373__$1,cljs.core.constant$keyword$279);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$297,cljs.core.second(item)], null)], null);
});
doremi_script_app.app.pitch = (function pitch(p__11375){var map__11377 = p__11375;var map__11377__$1 = ((cljs.core.seq_QMARK_(map__11377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11377):map__11377);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11377__$1,cljs.core.constant$keyword$279);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11377__$1,cljs.core.constant$keyword$261);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch, (first (last item))=",cljs.core.first(cljs.core.last(item))], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entring pitch"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var begin_slur_id = cljs.core.some(((function (map__11377,map__11377__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$181,cljs.core.first(x))))
{return x;
} else
{return null;
}
});})(map__11377,map__11377__$1,item,render_as))
,item);var end_slur_id = cljs.core.some(((function (begin_slur_id,map__11377,map__11377__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,cljs.core.first(x))))
{return x;
} else
{return null;
}
});})(begin_slur_id,map__11377,map__11377__$1,item,render_as))
,item);var h = (cljs.core.truth_(end_slur_id)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$298,cljs.core.second(end_slur_id)], null):cljs.core.PersistentArrayMap.EMPTY);var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind(cljs.core.second(item),render_as);var sort_table = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$194,(1),cljs.core.constant$keyword$207,(2),cljs.core.constant$keyword$209,(3),cljs.core.constant$keyword$181,(4),cljs.core.constant$keyword$299,(5),cljs.core.constant$keyword$300,(6),cljs.core.constant$keyword$301,(7)], null);var item1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,cljs.core.first(deconstructed_pitch)], null),cljs.core.rest(cljs.core.rest(item))));var item2 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,cljs.core.second(begin_slur_id)], null),item1)):item1);var item3 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,cljs.core.second(begin_slur_id)], null),item2)):item2);var alteration_string = cljs.core.second(deconstructed_pitch);var my_pitch_alteration = (cljs.core.truth_(alteration_string)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pitch-alteration",alteration_string], null):null);var item4 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(my_pitch_alteration,item3)));var item5 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__11377,map__11377__$1,item,render_as){
return (function (x){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,null,cljs.core.constant$keyword$299,null], null), null),cljs.core.first(x));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__11377,map__11377__$1,item,render_as))
,item4);var item6 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__11377,map__11377__$1,item,render_as){
return (function (p1__11374_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(sort_table,cljs.core.first(p1__11374_SHARP_));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__11377,map__11377__$1,item,render_as))
,item5);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["item6 is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item6], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,h,doremi_script_app.app.draw_children(item6)], null);
});
doremi_script_app.app.lyrics_section = (function lyrics_section(p__11378){var map__11380 = p__11378;var map__11380__$1 = ((cljs.core.seq_QMARK_(map__11380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11380):map__11380);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11380__$1,cljs.core.constant$keyword$279);var line_strings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__11380,map__11380__$1,item){
return (function (x){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(x));
});})(map__11380,map__11380__$1,item))
,cljs.core.rest(item));var s = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",line_strings);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),s], null);
});
doremi_script_app.app.stave = (function stave(p__11381){var map__11383 = p__11381;var map__11383__$1 = ((cljs.core.seq_QMARK_(map__11383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11383):map__11383);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11383__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering stave"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core.second(item)], null)], null);
});
doremi_script_app.app.measure = (function measure(p__11384){var map__11386 = p__11384;var map__11386__$1 = ((cljs.core.seq_QMARK_(map__11386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11386):map__11386);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11386__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["measure, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["rest item="], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.rest(item)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,"measure"], null),doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.chord = (function chord(p__11387){var map__11389 = p__11387;var map__11389__$1 = ((cljs.core.seq_QMARK_(map__11389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11389):map__11389);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11389__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["chord- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.second(item)], null);
});
doremi_script_app.app.syl = (function syl(p__11390){var map__11392 = p__11390;var map__11392__$1 = ((cljs.core.seq_QMARK_(map__11392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11392):map__11392);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11392__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["syl- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.second(item)], null);
});
doremi_script_app.app.abs = (function abs(n){var x__3732__auto__ = n;var y__3733__auto__ = (- n);return ((x__3732__auto__ > y__3733__auto__) ? x__3732__auto__ : y__3733__auto__);
});
doremi_script_app.app.octave = (function octave(p__11393){var map__11396 = p__11393;var map__11396__$1 = ((cljs.core.seq_QMARK_(map__11396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11396):map__11396);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11396__$1,cljs.core.constant$keyword$279);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["octave- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var octave_num = cljs.core.second(item);if(((octave_num == null)) || ((octave_num === (0))))
{return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$15,(function (){var G__11397 = cljs.core.second(item);return (doremi_script_app.app.class_for_octave.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.app.class_for_octave.cljs$core$IFn$_invoke$arity$1(G__11397) : doremi_script_app.app.class_for_octave.call(null,G__11397));
})(),cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.abs(octave_num),doremi_script_app.app.bullet))], null)], null)], null);
}
});
doremi_script_app.app.default_draw_item = (function default_draw_item(p__11398){var map__11400 = p__11398;var map__11400__$1 = ((cljs.core.seq_QMARK_(map__11400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11400):map__11400);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11400__$1,cljs.core.constant$keyword$279);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,cljs.core.first(item)], null),cljs.core.second(item)], null);
});
doremi_script_app.app.draw_item = (function draw_item(item,idx){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering draw-item, kind is",cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11404 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11404) : cljs.core.deref.call(null,G__11404));
})(),cljs.core.constant$keyword$261)], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering draw-item, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var my_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(item));doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["draw-item, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["key is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([my_key], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$180))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$182))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$194))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$214))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.mordent,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$215))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ending,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$198))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.barline,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$244))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.lyrics_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$213))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.chord,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$209))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$210))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.beat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$248))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.stave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$211))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.measure,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$181))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.begin_slur_id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$192))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.attribute_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$301))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_alteration,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$206))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item,cljs.core.constant$keyword$261,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11405 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11405) : cljs.core.deref.call(null,G__11405));
})(),cljs.core.constant$keyword$261)], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$179))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item,cljs.core.constant$keyword$261,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11406 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11406) : cljs.core.deref.call(null,G__11406));
})(),cljs.core.constant$keyword$261)], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,"syl"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$207))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.octave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$300))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$205))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$253))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_number,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$197))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$255,"-",cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$279,item], null),("todo-draw-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(item))))], null);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
doremi_script_app.app.sample = (function sample(){new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295,cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295,cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
});
doremi_script_app.app.select_notation_box = (function select_notation_box(kind){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"selectNotation"], null),"Enter Notation as: "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11409 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11409) : cljs.core.deref.call(null,G__11409));
})(),cljs.core.constant$keyword$260),cljs.core.constant$keyword$276,(function (p1__11407_SHARP_){var kind_str = p1__11407_SHARP_.target.value;var my_kind = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",kind_str))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kind_str));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$260,my_kind);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$176], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$177], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$174], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$175], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$168], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.render_as_box = (function render_as_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"renderAs"], null),"Render as:"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11412 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11412) : cljs.core.deref.call(null,G__11412));
})(),cljs.core.constant$keyword$261)),cljs.core.constant$keyword$276,(function (p1__11410_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$261,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__11410_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$176], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$177], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$174], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$175], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$168], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.generate_staff_notation_button = (function generate_staff_notation_button(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$314,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$218,"Generates staff notation and MIDI file using Lilypond",cljs.core.constant$keyword$28,"generateStaffNotation",cljs.core.constant$keyword$315,(function (e){e.preventDefault();
return doremi_script_app.app.generate_staff_notation_xhr(doremi_script_app.app.generate_staff_notation_URL,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11415 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11415) : cljs.core.deref.call(null,G__11415));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273], null)),cljs.core.constant$keyword$217,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11416 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11416) : cljs.core.deref.call(null,G__11416));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260], null))], null));
})], null),"Generate Staff Notation"], null);
});
doremi_script_app.app.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,"Enter letter music notation using 1234567CDEFGABC DoReMi (using drmfslt or DRMFSLT) SRGmPDN or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929\n\n"], null);
});
doremi_script_app.app.toggle_lilypond_button = (function toggle_lilypond_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,"Lilypond"], null);
});
doremi_script_app.app.play_midi_file = (function play_midi_file(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,"Play MIDI File(Turn Volume Up!)"], null);
});
doremi_script_app.app.toggle_staff_notation_button = (function toggle_staff_notation_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,"Staff Notation Hide/Show"], null);
});
doremi_script_app.app.other_unused = (function other_unused(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$321,"https://rawgithub.com/rothfield/doremi-script/master/test/good_test_results/report.html",cljs.core.constant$keyword$322,"_blank",cljs.core.constant$keyword$218,"Opens in new window"], null),"Visual test suite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$321,"https://github.com/rothfield/doremi-script#readme",cljs.core.constant$keyword$322,"_blank",cljs.core.constant$keyword$218,"Opens in new window"], null),"Help"], null)], null);
});
doremi_script_app.app.controls = (function controls(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.select_notation_box,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11419 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11419) : cljs.core.deref.call(null,G__11419));
})(),cljs.core.constant$keyword$217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.render_as_box,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11420 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11420) : cljs.core.deref.call(null,G__11420));
})(),cljs.core.constant$keyword$261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.generate_staff_notation_button], null)], null);
});
doremi_script_app.app.parse_failed = (function parse_failed(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$28,"",cljs.core.constant$keyword$255,"/images/blank.png?1426699590838"], null)], null)], null)], null);
});
doremi_script_app.app.doremi_box = (function doremi_box(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$327,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.controls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.entry_area,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11425 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11425) : cljs.core.deref.call(null,G__11425));
})(),cljs.core.constant$keyword$273)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.composition,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11426 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11426) : cljs.core.deref.call(null,G__11426));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.constant$keyword$256], null)),cljs.core.constant$keyword$261,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11427 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11427) : cljs.core.deref.call(null,G__11427));
})(),cljs.core.constant$keyword$261)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.staff_notation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.parse_results_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11428 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11428) : cljs.core.deref.call(null,G__11428));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.constant$keyword$256], null))], null)], null)], null);
});
doremi_script_app.app.calling_component = (function calling_component(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.doremi_box], null);
});
doremi_script_app.app.init = (function init(){var G__11431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.calling_component], null);var G__11432 = document.getElementById("container");return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11431,G__11432) : reagent.core.render_component.call(null,G__11431,G__11432));
});
doremi_script_app.app.parse = (function parse(){var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11438 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11438) : cljs.core.deref.call(null,G__11438));
})(),cljs.core.constant$keyword$273);var last_text_parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11439 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11439) : cljs.core.deref.call(null,G__11439));
})(),cljs.core.constant$keyword$329);var ajax_is_running = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11440 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11440) : cljs.core.deref.call(null,G__11440));
})(),cljs.core.constant$keyword$330);var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11441 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11441) : cljs.core.deref.call(null,G__11441));
})(),cljs.core.constant$keyword$260);if(cljs.core.truth_(ajax_is_running))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,current))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,last_text_parsed))
{return null;
} else
{var my_parse_results = doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree(current,kind);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["****in parse, parse-results are",my_parse_results], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in parse, app-state=",(function (){var G__11442 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11442) : cljs.core.deref.call(null,G__11442));
})()], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328], null),my_parse_results);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329], null),current);

}
}
}
}
});
doremi_script_app.app.start_parse_timer = (function start_parse_timer(){var G__11445 = doremi_script_app.app.parse;var G__11446 = (2000);return setInterval(G__11445,G__11446);
});
doremi_script_app.app.start_parse_timer();
