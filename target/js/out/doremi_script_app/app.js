// Compiled by ClojureScript 0.0-2371
goog.provide('doremi_script_app.app');
goog.require('cljs.core');
goog.require('doremi_script_app.doremi_core');
goog.require('clojure.string');
goog.require('doremi_script_app.utils');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri');
goog.require('doremi_script_app.utils');
goog.require('goog.json');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('instaparse.core');
goog.require('doremi_script_app.doremi_core');
goog.require('doremi_script_app.doremi_core');
goog.require('clojure.string');
goog.require('instaparse.core');
goog.require('dommy.core');
goog.require('clojure.string');
if(typeof doremi_script_app.app.last_text_value !== 'undefined')
{} else
{doremi_script_app.app.last_text_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if(typeof doremi_script_app.app.app_state !== 'undefined')
{} else
{doremi_script_app.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$272,cljs.core.constant$keyword$168,cljs.core.constant$keyword$273,cljs.core.constant$keyword$168,cljs.core.constant$keyword$274,null], null));
}
doremi_script_app.app.log_off = true;
doremi_script_app.app.to_s = (function to_s(x){return JSON.stringify(cljs.core.clj__GT_js(x));
});
cljs.core.enable_console_print_BANG_();
doremi_script_app.app.class_name_for = (function class_name_for(x){return clojure.string.replace(cljs.core.name(x),"-","_");
});
doremi_script_app.app.generate_staff_notation_URL = "http://ragapedia.com:3000/generate_staff_notation";
doremi_script_app.app.generate_staff_notation_xhr = (function generate_staff_notation_xhr(url,content){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering generate-staff-notation-URL",url,content], 0));
var query_data = (new goog.Uri.QueryData());query_data.set("src",cljs.core.constant$keyword$255.cljs$core$IFn$_invoke$arity$1(content));
query_data.set("kind",cljs.core.name(cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(content)));
var G__11677 = url;var G__11678 = ((function (G__11677,query_data){
return (function (event){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in callback"], 0));
var raw_response = event.target;var response_text = raw_response.getResponseText();var my_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11681 = response_text;return goog.json.parse(G__11681);
})(),cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0));doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in callback my-map",my_map], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$275,("http://ragapedia.com:3000"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(my_map))));
return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["app-state is",(function (){var G__11682 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11682) : cljs.core.deref.call(null,G__11682));
})()], 0));
});})(G__11677,query_data))
;var G__11679 = "POST";var G__11680 = query_data;return goog.net.XhrIo.send(G__11677,G__11678,G__11679,G__11680);
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
var G__11684 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);switch (G__11684) {
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
doremi_script_app.app.parse_results_box = (function parse_results_box(p__11686){var map__11688 = p__11686;var map__11688__$1 = ((cljs.core.seq_QMARK_(map__11688))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11688):map__11688);var parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11688__$1,cljs.core.constant$keyword$256);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,"parse-results"], null),"Parse Results:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$281,"3",cljs.core.constant$keyword$282,false,cljs.core.constant$keyword$283,true,cljs.core.constant$keyword$284,JSON.stringify(cljs.core.clj__GT_js(parsed))], null)], null)], null);
});
doremi_script_app.app.text_area_placeholder = "Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929   Example:  | 1 -2 3- -1 | 3 1 3 - |   ";
doremi_script_app.app.entry_area = (function entry_area(){var _ = console.log("initing entry-area,last-text-value=",(function (){var G__11697 = doremi_script_app.app.last_text_value;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11697) : cljs.core.deref.call(null,G__11697));
})());var last_val = (function (){var G__11698 = doremi_script_app.app.last_text_value;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11698) : cljs.core.deref.call(null,G__11698));
})();var my_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(last_val);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,doremi_script_app.app.text_area_placeholder,cljs.core.constant$keyword$28,"src",cljs.core.constant$keyword$284,(function (){var G__11699 = my_val;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11699) : cljs.core.deref.call(null,G__11699));
})(),cljs.core.constant$keyword$282,false,cljs.core.constant$keyword$287,((function (_,last_val,my_val){
return (function (x){cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["on-change"], 0));
var G__11700_11705 = my_val;var G__11701_11706 = x.target.value;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11700_11705,G__11701_11706) : cljs.core.reset_BANG_.call(null,G__11700_11705,G__11701_11706));
var G__11702 = doremi_script_app.app.last_text_value;var G__11703 = (function (){var G__11704 = my_val;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11704) : cljs.core.deref.call(null,G__11704));
})();return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11702,G__11703) : cljs.core.reset_BANG_.call(null,G__11702,G__11703));
});})(_,last_val,my_val))
], null)], null);
});
doremi_script_app.app.entry_area_wrapper = (function entry_area_wrapper(){return cljs.core.with_meta(doremi_script_app.app.entry_area,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$288,(function (p1__11707_SHARP_){return console.log("component-did-mount entry-area").call(null,cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["about to focus"], 0)),reagent.core.dom_node(p1__11707_SHARP_).focus());
})], null));
});
doremi_script_app.app.entry_area_box = (function entry_area_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,"entryArea"], null),"Enter Letter Notation:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.entry_area_wrapper], null)], null);
});
doremi_script_app.app.zentry_area = (function zentry_area(p__11708){var map__11710 = p__11708;var map__11710__$1 = ((cljs.core.seq_QMARK_(map__11710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11710):map__11710);var doremi_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11710__$1,cljs.core.constant$keyword$289);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,"entryArea"], null),"Enter Letter Notation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,"Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929   Example:  | 1 -2 3- -1 | 3 1 3 - |   ",cljs.core.constant$keyword$28,"src",cljs.core.constant$keyword$284,doremi_text,cljs.core.constant$keyword$282,false,cljs.core.constant$keyword$287,((function (map__11710,map__11710__$1,doremi_text){
return (function (x){var new_val = x.target.value;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289], null),new_val);
});})(map__11710,map__11710__$1,doremi_text))
], null)], null)], null);
});
doremi_script_app.app.draw_children = (function draw_children(items){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed((function notes_line_aux(idx,item){var G__11717 = item;var G__11718 = idx;return (doremi_script_app.app.draw_item.cljs$core$IFn$_invoke$arity$2 ? doremi_script_app.app.draw_item.cljs$core$IFn$_invoke$arity$2(G__11717,G__11718) : doremi_script_app.app.draw_item.call(null,G__11717,G__11718));
}),items));
});
doremi_script_app.app.staff_notation = (function staff_notation(){var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11720 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11720) : cljs.core.deref.call(null,G__11720));
})(),cljs.core.constant$keyword$275);if(cljs.core.truth_(src))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,src], null)], null);
} else
{return null;
}
});
doremi_script_app.app.composition = (function composition(p__11721){var map__11723 = p__11721;var map__11723__$1 = ((cljs.core.seq_QMARK_(map__11723))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11723):map__11723);var parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11723__$1,cljs.core.constant$keyword$256);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11723__$1,cljs.core.constant$keyword$273);if((parsed == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,doremi_script_app.app.draw_children(cljs.core.rest(parsed))], null);
}
});
doremi_script_app.app.attribute_section = (function attribute_section(p__11724){var map__11726 = p__11724;var map__11726__$1 = ((cljs.core.seq_QMARK_(map__11726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11726):map__11726);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11726__$1,cljs.core.constant$keyword$292);return null;
});
doremi_script_app.app.notes_line = (function notes_line(p__11727){var map__11729 = p__11727;var map__11729__$1 = ((cljs.core.seq_QMARK_(map__11729))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11729):map__11729);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11729__$1,cljs.core.constant$keyword$292);console.log("notes-line, item is");
doremi_script_app.utils.my_log2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.parse = (function parse(){if(cljs.core.truth_(doremi_script_app.utils.by_id("the_area")))
{var elem = doremi_script_app.utils.by_id("the_area");var current = elem.value;var last_text_parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11734 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11734) : cljs.core.deref.call(null,G__11734));
})(),cljs.core.constant$keyword$294);var ajax_is_running = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11735 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11735) : cljs.core.deref.call(null,G__11735));
})(),cljs.core.constant$keyword$295);var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11736 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11736) : cljs.core.deref.call(null,G__11736));
})(),cljs.core.constant$keyword$272);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,current))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,last_text_parsed))
{return null;
} else
{var my_parse_results = doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree(current,kind);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["****in parse, parse-results are",my_parse_results], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["in parse, app-state=",(function (){var G__11737 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11737) : cljs.core.deref.call(null,G__11737));
})()], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296], null),my_parse_results);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294], null),current);

}
}
}
} else
{return null;
}
});
doremi_script_app.app.start_parse_timer = (function start_parse_timer(){var G__11740 = doremi_script_app.app.parse;var G__11741 = (2000);return setInterval(G__11740,G__11741);
});
doremi_script_app.app.add_right_margin_to_notes_with_pitch_signs = (function add_right_margin_to_notes_with_pitch_signs(context){var items = dommy.utils.__GT_Array(document.querySelectorAll("span.note_wrapper *.pitch_sign"));return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (item){var parent = dommy.core.parent(item);return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(dommy.core.parent(item),cljs.core.array_seq([cljs.core.constant$keyword$297,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.core.px(item,cljs.core.constant$keyword$265))+"px")], 0));
});})(items))
,items));
});
doremi_script_app.app.add_left_margin_to_notes_with_left_superscripts = (function add_left_margin_to_notes_with_left_superscripts(){var items = dommy.utils.__GT_Array(document.querySelectorAll("span.note_wrapper *.ornament.placement_before"));return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (item){var parent = dommy.core.parent(item);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.array_seq([cljs.core.constant$keyword$298,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((-1) * dommy.core.px(item,cljs.core.constant$keyword$265)))+"px")], 0));
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.array_seq([cljs.core.constant$keyword$298,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.core.px(item,cljs.core.constant$keyword$265))+"px")], 0));
});})(items))
,items));
});
doremi_script_app.app.add_right_margin_to_notes_with_right_superscripts = (function add_right_margin_to_notes_with_right_superscripts(){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["add-right-margin-to-notes-with-right-superscripts"], 0));
var items = dommy.utils.__GT_Array(document.querySelectorAll("span.note_wrapper *.ornament.placement_after"));return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (item){var parent = dommy.core.parent(item);var width = dommy.core.px(item,cljs.core.constant$keyword$265);return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(dommy.core.parent(item),cljs.core.array_seq([cljs.core.constant$keyword$297,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px")], 0));
});})(items))
,items));
});
doremi_script_app.app.adjust_slurs_in_dom = (function adjust_slurs_in_dom(context){var items = dommy.utils.__GT_Array(document.querySelectorAll("span[data-begin-slur-id]"));return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (item){var dom_id = dommy.core.attr(item,cljs.core.constant$keyword$299);var slur = document.getElementById(dom_id);var rect1 = dommy.core.bounding_client_rect(item);var rect2 = (cljs.core.truth_(slur)?dommy.core.bounding_client_rect(slur):null);var width = (cljs.core.truth_(slur)?(cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(rect1) - cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(rect2)):null);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["adjust-slurs-in-dom",dom_id,slur,rect1,rect2,width], 0));
if(cljs.core.truth_(slur))
{return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(slur,cljs.core.array_seq([cljs.core.constant$keyword$265,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px")], 0));
} else
{return null;
}
});})(items))
,items));
});
doremi_script_app.app.fallback_if_utf8_characters_not_supported = (function fallback_if_utf8_characters_not_supported(context){return null;
});
doremi_script_app.app.expand_note_widths_to_accomodate_syllables = (function expand_note_widths_to_accomodate_syllables(context){var items = dommy.utils.__GT_Array(document.getElementsByClassName("syl"));return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed(((function (items){
return (function (idx,item){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(cljs.core.count(items) - (1))))
{return null;
} else
{var syl = dommy.core.text(item);var ends_word = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(syl),"-");var extra = ((ends_word)?(5):(0));var next_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,(idx + (1)));var pitch = cljs.core.some(((function (syl,ends_word,extra,next_item,items){
return (function (x){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),dommy.core.class$(x).indexOf("pitch")))
{return x;
} else
{return null;
}
});})(syl,ends_word,extra,next_item,items))
,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(dommy.core.children(dommy.core.parent(item))));var rect1 = dommy.core.bounding_client_rect(item);var rect2 = dommy.core.bounding_client_rect(next_item);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(rect1),cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(rect2))) && (((extra + cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(rect1)) > cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(rect2))))
{return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(pitch,cljs.core.array_seq([cljs.core.constant$keyword$297,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((extra + (cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(rect1) - cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(rect2))))+"px")], 0));
} else
{return null;
}
}
});})(items))
,items));
});
doremi_script_app.app.dom_fixes = (function dom_fixes(this$){doremi_script_app.app.expand_note_widths_to_accomodate_syllables(this$);
doremi_script_app.app.add_right_margin_to_notes_with_right_superscripts();
doremi_script_app.app.add_left_margin_to_notes_with_left_superscripts();
doremi_script_app.app.add_right_margin_to_notes_with_pitch_signs(this$);
doremi_script_app.app.adjust_slurs_in_dom(this$);
return doremi_script_app.app.fallback_if_utf8_characters_not_supported(this$);
});
doremi_script_app.app.composition_wrapper = cljs.core.with_meta(doremi_script_app.app.composition,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$288,(function (this$){console.log("component-did-mount composition to call dom_fixes");
return doremi_script_app.app.dom_fixes(this$);
}),cljs.core.constant$keyword$33,(function (this$){console.log("component-did-update composition-about to call dom_fixes");
return doremi_script_app.app.dom_fixes(this$);
})], null));
doremi_script_app.app.ornament_pitch = (function ornament_pitch(p__11743){var map__11745 = p__11743;var map__11745__$1 = ((cljs.core.seq_QMARK_(map__11745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11745):map__11745);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$292);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$273);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering ornament-pitch"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind(cljs.core.second(item),render_as);var octave = cljs.core.some(((function (deconstructed_pitch,map__11745,map__11745__$1,item,render_as){
return (function (p1__11742_SHARP_){if(cljs.core.truth_((function (){var and__3413__auto__ = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__11742_SHARP_],null));if(cljs.core.truth_(and__3413__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$207,cljs.core.first(p1__11742_SHARP_));
} else
{return and__3413__auto__;
}
})()))
{return cljs.core.second(p1__11742_SHARP_);
} else
{return null;
}
});})(deconstructed_pitch,map__11745,map__11745__$1,item,render_as))
,cljs.core.rest(item));var alteration_string = cljs.core.second(deconstructed_pitch);var pitch_src = clojure.string.join.cljs$core$IFn$_invoke$arity$1(deconstructed_pitch);var octave_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.class_for_ornament_octave,octave);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$15,octave_class,cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,pitch_src], null)], null)], null);
});
doremi_script_app.app.ornament = (function ornament(p__11747){var map__11751 = p__11747;var map__11751__$1 = ((cljs.core.seq_QMARK_(map__11751))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11751):map__11751);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11751__$1,cljs.core.constant$keyword$292);var items = cljs.core.rest(item);var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (items,map__11751,map__11751__$1,item){
return (function (p1__11746_SHARP_){return (cljs.core.vector_QMARK_(p1__11746_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,cljs.core.first(p1__11746_SHARP_)));
});})(items,map__11751,map__11751__$1,item))
,items);var _ = doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["filtered ",filtered], 0));var placement = cljs.core.last(item);var placement_class = ("placement_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(placement)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,placement_class], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed(((function (items,filtered,_,placement,placement_class,map__11751,map__11751__$1,item){
return (function notes_line_aux(idx,item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$292,item__$1,cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11753 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11753) : cljs.core.deref.call(null,G__11753));
})(),cljs.core.constant$keyword$273),cljs.core.constant$keyword$36,idx], null)], null);
});})(items,filtered,_,placement,placement_class,map__11751,map__11751__$1,item))
,filtered))], null);
});
doremi_script_app.app.mordent = (function mordent(p__11754){var map__11756 = p__11754;var map__11756__$1 = ((cljs.core.seq_QMARK_(map__11756))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11756):map__11756);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11756__$1,cljs.core.constant$keyword$292);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,doremi_script_app.app.mordent_entity], null)], null)], null);
});
doremi_script_app.app.ending = (function ending(p__11757){var map__11759 = p__11757;var map__11759__$1 = ((cljs.core.seq_QMARK_(map__11759))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11759):map__11759);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11759__$1,cljs.core.constant$keyword$292);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.second(item)], null);
});
doremi_script_app.app.line_number = (function line_number(p__11760){var map__11762 = p__11760;var map__11762__$1 = ((cljs.core.seq_QMARK_(map__11762))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11762):map__11762);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11762__$1,cljs.core.constant$keyword$292);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item))+")")], null)], null);
});
doremi_script_app.app.line_item = (function line_item(p__11763){var map__11765 = p__11763;var map__11765__$1 = ((cljs.core.seq_QMARK_(map__11765))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11765):map__11765);var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11765__$1,cljs.core.constant$keyword$255);var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11765__$1,cljs.core.constant$keyword$217);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11765__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering line-item, item"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,"note_wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,kind], null),src], null)], null);
});
doremi_script_app.app.barline = (function barline(p__11766){var map__11768 = p__11766;var map__11768__$1 = ((cljs.core.seq_QMARK_(map__11768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11768):map__11768);var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11768__$1,cljs.core.constant$keyword$255);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11768__$1,cljs.core.constant$keyword$292);var barline_name = cljs.core.first(cljs.core.second(item));doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["barline-name is",barline_name], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,cljs.core.get.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.lookup_barline,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(item))))], null)], null)], null)], null);
});
doremi_script_app.app.beat = (function beat(p__11769){var map__11771 = p__11769;var map__11771__$1 = ((cljs.core.seq_QMARK_(map__11771))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11771):map__11771);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11771__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering beat"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["beat, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var beat_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__11771,map__11771__$1,item){
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
});})(map__11771,map__11771__$1,item))
,(0),cljs.core.rest(item));var _ = doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["beat-count is",beat_count], 0));var looped = (((beat_count > (1)))?"looped":"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,looped], null),doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.pitch_name = (function pitch_name(p__11772){var map__11774 = p__11772;var map__11774__$1 = ((cljs.core.seq_QMARK_(map__11774))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11774):map__11774);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11774__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch-name, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.second(item)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,cljs.core.second(item)], null)], null)], null);
});
doremi_script_app.app.pitch_alteration = (function pitch_alteration(p__11775){var map__11777 = p__11775;var map__11777__$1 = ((cljs.core.seq_QMARK_(map__11777))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11777):map__11777);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11777__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch-alteration"], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,cljs.core.second(item)], null)], null)], null);
});
doremi_script_app.app.begin_slur_id = (function begin_slur_id(p__11778){var map__11780 = p__11778;var map__11780__$1 = ((cljs.core.seq_QMARK_(map__11780))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11780):map__11780);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11780__$1,cljs.core.constant$keyword$292);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$314,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$315,cljs.core.second(item)], null)], null);
});
doremi_script_app.app.pitch = (function pitch(p__11782){var map__11784 = p__11782;var map__11784__$1 = ((cljs.core.seq_QMARK_(map__11784))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11784):map__11784);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11784__$1,cljs.core.constant$keyword$292);var render_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11784__$1,cljs.core.constant$keyword$273);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pitch, (first (last item))=",cljs.core.first(cljs.core.last(item))], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entring pitch"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var begin_slur_id = cljs.core.some(((function (map__11784,map__11784__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$181,cljs.core.first(x))))
{return x;
} else
{return null;
}
});})(map__11784,map__11784__$1,item,render_as))
,item);var end_slur_id = cljs.core.some(((function (begin_slur_id,map__11784,map__11784__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,cljs.core.first(x))))
{return x;
} else
{return null;
}
});})(begin_slur_id,map__11784,map__11784__$1,item,render_as))
,item);var h = (cljs.core.truth_(end_slur_id)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$299,cljs.core.second(end_slur_id)], null):cljs.core.PersistentArrayMap.EMPTY);var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind(cljs.core.second(item),render_as);var sort_table = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$194,(1),cljs.core.constant$keyword$207,(2),cljs.core.constant$keyword$209,(3),cljs.core.constant$keyword$181,(4),cljs.core.constant$keyword$316,(5),cljs.core.constant$keyword$317,(6),cljs.core.constant$keyword$179,(7),cljs.core.constant$keyword$318,(8)], null);var item1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,cljs.core.first(deconstructed_pitch)], null),cljs.core.rest(cljs.core.rest(item))));var item2 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,cljs.core.second(begin_slur_id)], null),item1)):item1);var item3 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,cljs.core.second(begin_slur_id)], null),item2)):item2);var alteration_string = cljs.core.second(deconstructed_pitch);var my_pitch_alteration = (cljs.core.truth_(alteration_string)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,alteration_string], null):null);var item4 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(my_pitch_alteration,item3)));var item5 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__11784,map__11784__$1,item,render_as){
return (function (x){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,null,cljs.core.constant$keyword$316,null], null), null),cljs.core.first(x));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__11784,map__11784__$1,item,render_as))
,item4);var item6 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__11784,map__11784__$1,item,render_as){
return (function (p1__11781_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(sort_table,cljs.core.first(p1__11781_SHARP_));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__11784,map__11784__$1,item,render_as))
,item5);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["item6 is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item6], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,h,doremi_script_app.app.draw_children(item6)], null);
});
doremi_script_app.app.lyrics_section = (function lyrics_section(p__11785){var map__11787 = p__11785;var map__11787__$1 = ((cljs.core.seq_QMARK_(map__11787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11787):map__11787);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11787__$1,cljs.core.constant$keyword$292);var line_strings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__11787,map__11787__$1,item){
return (function (x){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(x));
});})(map__11787,map__11787__$1,item))
,cljs.core.rest(item));var s = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",line_strings);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),s], null);
});
doremi_script_app.app.stave = (function stave(p__11788){var map__11790 = p__11788;var map__11790__$1 = ((cljs.core.seq_QMARK_(map__11790))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11790):map__11790);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11790__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering stave"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core.second(item)], null)], null);
});
doremi_script_app.app.measure = (function measure(p__11791){var map__11793 = p__11791;var map__11793__$1 = ((cljs.core.seq_QMARK_(map__11793))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11793):map__11793);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11793__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["measure, item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["rest item="], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.rest(item)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,"measure"], null),doremi_script_app.app.draw_children(cljs.core.rest(item))], null);
});
doremi_script_app.app.chord = (function chord(p__11794){var map__11796 = p__11794;var map__11796__$1 = ((cljs.core.seq_QMARK_(map__11796))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11796):map__11796);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11796__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["chord- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,cljs.core.second(item)], null);
});
doremi_script_app.app.syl = (function syl(p__11797){var map__11799 = p__11797;var map__11799__$1 = ((cljs.core.seq_QMARK_(map__11799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11799):map__11799);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11799__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["syl- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,cljs.core.second(item)], null);
});
doremi_script_app.app.abs = (function abs(n){var x__3732__auto__ = n;var y__3733__auto__ = (- n);return ((x__3732__auto__ > y__3733__auto__) ? x__3732__auto__ : y__3733__auto__);
});
doremi_script_app.app.octave = (function octave(p__11800){var map__11803 = p__11800;var map__11803__$1 = ((cljs.core.seq_QMARK_(map__11803))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11803):map__11803);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11803__$1,cljs.core.constant$keyword$292);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["octave- item is"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item], 0));
var octave_num = cljs.core.second(item);if(((octave_num == null)) || ((octave_num === (0))))
{return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$15,(function (){var G__11804 = cljs.core.second(item);return (doremi_script_app.app.class_for_octave.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.app.class_for_octave.cljs$core$IFn$_invoke$arity$1(G__11804) : doremi_script_app.app.class_for_octave.call(null,G__11804));
})(),cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$302,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doremi_script_app.app.abs(octave_num),doremi_script_app.app.bullet))], null)], null)], null);
}
});
doremi_script_app.app.default_draw_item = (function default_draw_item(p__11805){var map__11807 = p__11805;var map__11807__$1 = ((cljs.core.seq_QMARK_(map__11807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11807):map__11807);var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11807__$1,cljs.core.constant$keyword$292);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$15,cljs.core.first(item)], null),cljs.core.second(item)], null);
});
doremi_script_app.app.draw_item = (function draw_item(item,idx){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entering draw-item, kind is",cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11811 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11811) : cljs.core.deref.call(null,G__11811));
})(),cljs.core.constant$keyword$273)], 0));
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$214))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.mordent,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$215))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ending,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$198))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.barline,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$244))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.lyrics_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$213))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.chord,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$209))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$210))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.beat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$248))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.stave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$211))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.measure,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$181))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.begin_slur_id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$192))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.attribute_section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$318))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_alteration,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$206))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item,cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11812 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11812) : cljs.core.deref.call(null,G__11812));
})(),cljs.core.constant$keyword$273)], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$179))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item,cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11813 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11813) : cljs.core.deref.call(null,G__11813));
})(),cljs.core.constant$keyword$273)], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,"syl"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$207))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.octave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$317))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$205))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$253))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_number,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.constant$keyword$197))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$255,"-",cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,idx,cljs.core.constant$keyword$292,item], null),("todo-draw-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(item))))], null);

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
doremi_script_app.app.sample = (function sample(){new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$327,cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$313,cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$327,cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$313,cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
});
doremi_script_app.app.select_notation_box = (function select_notation_box(kind){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,"selectNotation"], null),"Enter Notation as: "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$284,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11816 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11816) : cljs.core.deref.call(null,G__11816));
})(),cljs.core.constant$keyword$272),cljs.core.constant$keyword$287,(function (p1__11814_SHARP_){var kind_str = p1__11814_SHARP_.target.value;var my_kind = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",kind_str))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kind_str));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$272,my_kind);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$176], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$177], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$174], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$175], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$168], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.render_as_box = (function render_as_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,"renderAs"], null),"Render as:"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$330,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$284,cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11819 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11819) : cljs.core.deref.call(null,G__11819));
})(),cljs.core.constant$keyword$273)),cljs.core.constant$keyword$287,(function (p1__11817_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doremi_script_app.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$273,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__11817_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$176], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$177], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$174], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$175], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$168], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.generate_staff_notation_button = (function generate_staff_notation_button(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$331,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$218,"Generates staff notation and MIDI file using Lilypond",cljs.core.constant$keyword$28,"generateStaffNotation",cljs.core.constant$keyword$332,(function (e){e.preventDefault();
return doremi_script_app.app.generate_staff_notation_xhr(doremi_script_app.app.generate_staff_notation_URL,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,(function (){var G__11822 = doremi_script_app.app.last_text_value;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11822) : cljs.core.deref.call(null,G__11822));
})(),cljs.core.constant$keyword$217,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11823 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11823) : cljs.core.deref.call(null,G__11823));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272], null))], null));
})], null),"Generate Staff Notation"], null);
});
doremi_script_app.app.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$333,"Enter letter music notation using 1234567CDEFGABC DoReMi (using drmfslt or DRMFSLT) SRGmPDN or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929\n\n"], null);
});
doremi_script_app.app.toggle_lilypond_button = (function toggle_lilypond_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$334,"Lilypond"], null);
});
doremi_script_app.app.play_midi_file = (function play_midi_file(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$335,"Play MIDI File(Turn Volume Up!)"], null);
});
doremi_script_app.app.toggle_staff_notation_button = (function toggle_staff_notation_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$334,"Staff Notation Hide/Show"], null);
});
doremi_script_app.app.other_unused = (function other_unused(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$337,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$338,"https://rawgithub.com/rothfield/doremi-script/master/test/good_test_results/report.html",cljs.core.constant$keyword$339,"_blank",cljs.core.constant$keyword$218,"Opens in new window"], null),"Visual test suite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$337,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$338,"https://github.com/rothfield/doremi-script#readme",cljs.core.constant$keyword$339,"_blank",cljs.core.constant$keyword$218,"Opens in new window"], null),"Help"], null)], null);
});
doremi_script_app.app.controls = (function controls(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.select_notation_box,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11826 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11826) : cljs.core.deref.call(null,G__11826));
})(),cljs.core.constant$keyword$217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.render_as_box,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11827 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11827) : cljs.core.deref.call(null,G__11827));
})(),cljs.core.constant$keyword$273)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.generate_staff_notation_button], null)], null);
});
doremi_script_app.app.parse_failed = (function parse_failed(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$343,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,cljs.core.constant$keyword$28,"",cljs.core.constant$keyword$255,"/images/blank.png?1426699590838"], null)], null)], null)], null);
});
doremi_script_app.app.doremi_box = (function doremi_box(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.entry_area_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.composition_wrapper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11831 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11831) : cljs.core.deref.call(null,G__11831));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,cljs.core.constant$keyword$256], null)),cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11832 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11832) : cljs.core.deref.call(null,G__11832));
})(),cljs.core.constant$keyword$273)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.staff_notation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.parse_results_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11833 = doremi_script_app.app.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11833) : cljs.core.deref.call(null,G__11833));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,cljs.core.constant$keyword$256], null))], null)], null)], null);
});
doremi_script_app.app.calling_component = (function calling_component(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.doremi_box], null);
});
doremi_script_app.app.generate_initial_page = true;
doremi_script_app.app.init = (function init(){var G__11836_11838 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.calling_component], null);var G__11837_11839 = document.getElementById("container");(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11836_11838,G__11837_11839) : reagent.core.render_component.call(null,G__11836_11838,G__11837_11839));
console.log("starting timer");
return doremi_script_app.app.start_parse_timer();
});

