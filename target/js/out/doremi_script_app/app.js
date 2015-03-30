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
{doremi_script_app.app.last_text_value = reagent.core.atom.call(null,"");
}
if(typeof doremi_script_app.app.app_state !== 'undefined')
{} else
{doremi_script_app.app.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"composition-kind","composition-kind",-1097615438),new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166),new cljs.core.Keyword(null,"render-as","render-as",-1497012239),new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166),new cljs.core.Keyword(null,"staff-notation-path","staff-notation-path",1137365107),null], null));
}
doremi_script_app.app.log_off = true;
doremi_script_app.app.to_s = (function to_s(x){return JSON.stringify(cljs.core.clj__GT_js.call(null,x));
});
cljs.core.enable_console_print_BANG_.call(null);
doremi_script_app.app.class_name_for = (function class_name_for(x){return clojure.string.replace.call(null,cljs.core.name.call(null,x),"-","_");
});
doremi_script_app.app.generate_staff_notation_URL = "http://ragapedia.com:3000/generate_staff_notation";
doremi_script_app.app.generate_staff_notation_xhr = (function generate_staff_notation_xhr(url,content){doremi_script_app.utils.log.call(null,"entering generate-staff-notation-URL",url,content);
var query_data = (new goog.Uri.QueryData());query_data.set("src",new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(content));
query_data.set("kind",cljs.core.name.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(content)));
return goog.net.XhrIo.send(url,((function (query_data){
return (function (event){doremi_script_app.utils.log.call(null,"in callback");
var raw_response = event.target;var response_text = raw_response.getResponseText();var my_map = cljs.core.js__GT_clj.call(null,goog.json.parse(response_text),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);doremi_script_app.utils.log.call(null,"in callback my-map",my_map);
cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"staff-notation-url","staff-notation-url",529789186),("http://ragapedia.com:3000"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"staffNotationPath","staffNotationPath",-53664074).cljs$core$IFn$_invoke$arity$1(my_map))));
return doremi_script_app.utils.log.call(null,"app-state is",cljs.core.deref.call(null,doremi_script_app.app.app_state));
});})(query_data))
,"POST",query_data);
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
doremi_script_app.app.deconstruct_pitch_string_by_kind = (function deconstruct_pitch_string_by_kind(pitch,kind){doremi_script_app.utils.log.call(null,"deconstruct-pitch-string-by-kind"," kind is:",kind);
doremi_script_app.utils.log.call(null,"pitch is");
doremi_script_app.utils.log.call(null,pitch);
var G__9716 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);switch (G__9716) {
case "hindi-composition":
return cljs.core.get.call(null,doremi_script_app.app.lookup_hindi,pitch);

break;
case "doremi-composition":
return cljs.core.get.call(null,doremi_script_app.app.lookup_DoReMi,pitch);

break;
case "abc-composition":
return cljs.core.get.call(null,doremi_script_app.app.lookup_ABC,pitch);

break;
case "number-composition":
return cljs.core.get.call(null,doremi_script_app.app.lookup_number,pitch);

break;
case "sargam-composition":
return cljs.core.get.call(null,doremi_script_app.app.lookup1,pitch);

break;
default:
return cljs.core.get.call(null,doremi_script_app.app.lookup1,pitch);

}
});
doremi_script_app.app.mordent_entity = "&#x1D19D&#x1D19D";
doremi_script_app.app.lookup_barline = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"single-barline","single-barline",2092234142),"&#x1d100",new cljs.core.Keyword(null,"double-barline","double-barline",-1712290539),"&#x1d101",new cljs.core.Keyword(null,"left-repeat","left-repeat",1255093286),"&#x1d106",new cljs.core.Keyword(null,"mordent","mordent",254330457),"&#x1D19D&#x1D19D",new cljs.core.Keyword(null,"right-repeat","right-repeat",-1353752104),"&#x1d107",new cljs.core.Keyword(null,"final-barline","final-barline",-116438594),"&#x1d102",new cljs.core.Keyword(null,"reverse-final-barline","reverse-final-barline",261297166),"&#x1d103"], null);
doremi_script_app.app.parse_results_box = (function parse_results_box(p__9718){var map__9720 = p__9718;var map__9720__$1 = ((cljs.core.seq_QMARK_.call(null,map__9720))?cljs.core.apply.call(null,cljs.core.hash_map,map__9720):map__9720);var parsed = cljs.core.get.call(null,map__9720__$1,new cljs.core.Keyword(null,"parsed","parsed",-819589156));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"parse-results"], null),"Parse Results:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#parse-results.form-control","textarea#parse-results.form-control",-573714347),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),"3",new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),JSON.stringify(cljs.core.clj__GT_js.call(null,parsed))], null)], null)], null);
});
doremi_script_app.app.text_area_placeholder = "Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929   Example:  | 1 -2 3- -1 | 3 1 3 - |   ";
doremi_script_app.app.entry_area = (function entry_area(){var _ = console.log("initing entry-area,last-text-value=",cljs.core.deref.call(null,doremi_script_app.app.last_text_value));var last_val = cljs.core.deref.call(null,doremi_script_app.app.last_text_value);var my_val = reagent.core.atom.call(null,last_val);return ((function (_,last_val,my_val){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"entryArea"], null),"Enter Letter Notation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#the_area.entryArea.form-control","textarea#the_area.entryArea.form-control",1176460871),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),doremi_script_app.app.text_area_placeholder,new cljs.core.Keyword(null,"name","name",1843675177),"src",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,my_val),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,last_val,my_val){
return (function (x){cljs.core.reset_BANG_.call(null,my_val,x.target.value);
return cljs.core.reset_BANG_.call(null,doremi_script_app.app.last_text_value,cljs.core.deref.call(null,my_val));
});})(_,last_val,my_val))
], null)], null)], null);
});
;})(_,last_val,my_val))
});
doremi_script_app.app.zentry_area = (function zentry_area(p__9721){var map__9723 = p__9721;var map__9723__$1 = ((cljs.core.seq_QMARK_.call(null,map__9723))?cljs.core.apply.call(null,cljs.core.hash_map,map__9723):map__9723);var doremi_text = cljs.core.get.call(null,map__9723__$1,new cljs.core.Keyword(null,"doremi-text","doremi-text",564491547));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"entryArea"], null),"Enter Letter Notation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#the_area.entryArea.form-control","textarea#the_area.entryArea.form-control",1176460871),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter letter music notation using 1234567,CDEFGABC, DoReMi (using drmfslt or DRMFSLT), SRGmPDN, or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929   Example:  | 1 -2 3- -1 | 3 1 3 - |   ",new cljs.core.Keyword(null,"name","name",1843675177),"src",new cljs.core.Keyword(null,"value","value",305978217),doremi_text,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__9723,map__9723__$1,doremi_text){
return (function (x){var new_val = x.target.value;return cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doremi-text","doremi-text",564491547)], null),new_val);
});})(map__9723,map__9723__$1,doremi_text))
], null)], null)], null);
});
doremi_script_app.app.draw_children = (function draw_children(items){return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function notes_line_aux(idx,item){return doremi_script_app.app.draw_item.call(null,item,idx);
}),items));
});
doremi_script_app.app.staff_notation = (function staff_notation(){var src = cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"staff-notation-url","staff-notation-url",529789186));if(cljs.core.truth_(src))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#staff_notation","img#staff_notation",-1475983367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);
} else
{return null;
}
});
doremi_script_app.app.composition = (function composition(p__9724){var map__9726 = p__9724;var map__9726__$1 = ((cljs.core.seq_QMARK_.call(null,map__9726))?cljs.core.apply.call(null,cljs.core.hash_map,map__9726):map__9726);var parsed = cljs.core.get.call(null,map__9726__$1,new cljs.core.Keyword(null,"parsed","parsed",-819589156));var render_as = cljs.core.get.call(null,map__9726__$1,new cljs.core.Keyword(null,"render-as","render-as",-1497012239));if((parsed == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composition.doremiContent","div.composition.doremiContent",-363149090)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composition.doremiContent","div.composition.doremiContent",-363149090),doremi_script_app.app.draw_children.call(null,cljs.core.rest.call(null,parsed))], null);
}
});
doremi_script_app.app.attribute_section = (function attribute_section(p__9727){var map__9729 = p__9727;var map__9729__$1 = ((cljs.core.seq_QMARK_.call(null,map__9729))?cljs.core.apply.call(null,cljs.core.hash_map,map__9729):map__9729);var item = cljs.core.get.call(null,map__9729__$1,new cljs.core.Keyword(null,"item","item",249373802));return null;
});
doremi_script_app.app.notes_line = (function notes_line(p__9730){var map__9732 = p__9730;var map__9732__$1 = ((cljs.core.seq_QMARK_.call(null,map__9732))?cljs.core.apply.call(null,cljs.core.hash_map,map__9732):map__9732);var item = cljs.core.get.call(null,map__9732__$1,new cljs.core.Keyword(null,"item","item",249373802));console.log("notes-line, item is");
doremi_script_app.utils.my_log2.call(null,item);
if(doremi_script_app.utils.is_a.call(null,"notes-line",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"notes-line",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.sargam_line","div.stave.sargam_line",-1895963428),doremi_script_app.app.draw_children.call(null,cljs.core.rest.call(null,item))], null);
});
doremi_script_app.app.parse = (function parse(){if(cljs.core.truth_(doremi_script_app.utils.by_id.call(null,"the_area")))
{var elem = doremi_script_app.utils.by_id.call(null,"the_area");var current = elem.value;var last_text_parsed = cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"last-text-parsed","last-text-parsed",-1351957679));var ajax_is_running = cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"ajax-is-running","ajax-is-running",-1639683775));var kind = cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"composition-kind","composition-kind",-1097615438));if(cljs.core._EQ_.call(null,null,current))
{return null;
} else
{if(cljs.core._EQ_.call(null,"",current))
{return null;
} else
{if(cljs.core._EQ_.call(null,current,last_text_parsed))
{return null;
} else
{var my_parse_results = doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree.call(null,current,kind);doremi_script_app.utils.log.call(null,"****in parse, parse-results are",my_parse_results);
doremi_script_app.utils.log.call(null,"in parse, app-state=",cljs.core.deref.call(null,doremi_script_app.app.app_state));
cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-results","parse-results",2109607024)], null),my_parse_results);
return cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-text-parsed","last-text-parsed",-1351957679)], null),current);

}
}
}
} else
{return null;
}
});
doremi_script_app.app.start_parse_timer = (function start_parse_timer(){return setInterval(doremi_script_app.app.parse,(2000));
});
doremi_script_app.app.expand_note_widths_to_accomodate_syllables = (function expand_note_widths_to_accomodate_syllables(context){cljs.core.prn.call(null,"expand_note_widths_to_accomodate_syllables");
var items = dommy.utils.__GT_Array.call(null,document.getElementsByClassName("syl"));return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (items){
return (function (idx,item){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,items) - (1))))
{return null;
} else
{var syl = dommy.core.text.call(null,item);var ends_word = cljs.core._EQ_.call(null,cljs.core.last.call(null,syl),"-");var extra = ((ends_word)?(5):(0));var next_syl = cljs.core.get.call(null,items,(idx + (1)));var width = dommy.core.px.call(null,item,new cljs.core.Keyword(null,"width","width",-384071477));var bounding_rect = dommy.core.bounding_client_rect.call(null,item);var next_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,next_syl));var left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(bounding_rect);var syl_right = (dommy.core.px.call(null,item,new cljs.core.Keyword(null,"width","width",-384071477)) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,item)));var par = dommy.core.parent.call(null,item);var children = dommy.core.children.call(null,par);var pitch = cljs.core.filter.call(null,((function (syl,ends_word,extra,next_syl,width,bounding_rect,next_left,left,syl_right,par,children,items){
return (function (x){return cljs.core.not_EQ_.call(null,(-1),dommy.core.class$.call(null,x).indexOf("pitch"));
});})(syl,ends_word,extra,next_syl,width,bounding_rect,next_left,left,syl_right,par,children,items))
,cljs.core.array_seq.call(null,dommy.core.children.call(null,dommy.core.parent.call(null,item))));cljs.core.prn.call(null,"pitch",pitch);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,item)),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,next_syl))))
{dommy.core.set_style_BANG_.call(null,par,new cljs.core.Keyword(null,"background-color","background-color",570434026),"red");
cljs.core.prn.call(null,"parent class",dommy.core.class$.call(null,par));
cljs.core.prn.call(null,"bounding-rect",bounding_rect);
cljs.core.prn.call(null,"idx item syl ends-word extra next-syl width",idx,item,syl,ends_word,extra,next_syl,width);
return cljs.core.prn.call(null,cljs.core.get.call(null,items,(0)));
} else
{return null;
}
}
});})(items))
,items));
});
doremi_script_app.app.composition_wrapper = cljs.core.with_meta.call(null,doremi_script_app.app.composition,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){console.log("component-did-mount composition to call dom_fixes");
return doremi_script_app.app.expand_note_widths_to_accomodate_syllables.call(null,reagent.core.dom_node.call(null,this$));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){console.log("component-did-update composition-about to call dom_fixes");
dom_fixes($(reagent.core.dom_node.call(null,this$)));
return doremi_script_app.app.expand_note_widths_to_accomodate_syllables.call(null,reagent.core.dom_node.call(null,this$));
})], null));
doremi_script_app.app.ornament_pitch = (function ornament_pitch(p__9734){var map__9736 = p__9734;var map__9736__$1 = ((cljs.core.seq_QMARK_.call(null,map__9736))?cljs.core.apply.call(null,cljs.core.hash_map,map__9736):map__9736);var item = cljs.core.get.call(null,map__9736__$1,new cljs.core.Keyword(null,"item","item",249373802));var render_as = cljs.core.get.call(null,map__9736__$1,new cljs.core.Keyword(null,"render-as","render-as",-1497012239));doremi_script_app.utils.log.call(null,"entering ornament-pitch");
doremi_script_app.utils.log.call(null,item);
var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind.call(null,cljs.core.second.call(null,item),render_as);var octave = cljs.core.some.call(null,((function (deconstructed_pitch,map__9736,map__9736__$1,item,render_as){
return (function (p1__9733_SHARP_){if(cljs.core.truth_((function (){var and__3413__auto__ = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__9733_SHARP_],null));if(cljs.core.truth_(and__3413__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"octave","octave",1066197953),cljs.core.first.call(null,p1__9733_SHARP_));
} else
{return and__3413__auto__;
}
})()))
{return cljs.core.second.call(null,p1__9733_SHARP_);
} else
{return null;
}
});})(deconstructed_pitch,map__9736,map__9736__$1,item,render_as))
,cljs.core.rest.call(null,item));var alteration_string = cljs.core.second.call(null,deconstructed_pitch);var pitch_src = clojure.string.join.call(null,deconstructed_pitch);var octave_class = cljs.core.get.call(null,doremi_script_app.app.class_for_ornament_octave,octave);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ornament_item","span.ornament_item",-420007184),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),octave_class,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),pitch_src], null)], null)], null);
});
doremi_script_app.app.ornament = (function ornament(p__9738){var map__9740 = p__9738;var map__9740__$1 = ((cljs.core.seq_QMARK_.call(null,map__9740))?cljs.core.apply.call(null,cljs.core.hash_map,map__9740):map__9740);var item = cljs.core.get.call(null,map__9740__$1,new cljs.core.Keyword(null,"item","item",249373802));var items = cljs.core.rest.call(null,item);var filtered = cljs.core.filter.call(null,((function (items,map__9740,map__9740__$1,item){
return (function (p1__9737_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__9737_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145),cljs.core.first.call(null,p1__9737_SHARP_)));
});})(items,map__9740,map__9740__$1,item))
,items);var _ = doremi_script_app.utils.log.call(null,"filtered ",filtered);var placement = cljs.core.last.call(null,item);var placement_class = ("placement_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,placement)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upper_attribute.ornament","span.upper_attribute.ornament",-1055038193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),placement_class], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (items,filtered,_,placement,placement_class,map__9740,map__9740__$1,item){
return (function notes_line_aux(idx,item__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),item__$1,new cljs.core.Keyword(null,"render-as","render-as",-1497012239),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239)),new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)], null);
});})(items,filtered,_,placement,placement_class,map__9740,map__9740__$1,item))
,filtered))], null);
});
doremi_script_app.app.mordent = (function mordent(p__9741){var map__9743 = p__9741;var map__9743__$1 = ((cljs.core.seq_QMARK_.call(null,map__9743))?cljs.core.apply.call(null,cljs.core.hash_map,map__9743):map__9743);var item = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"item","item",249373802));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mordent","span.mordent",616436363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),doremi_script_app.app.mordent_entity], null)], null)], null);
});
doremi_script_app.app.ending = (function ending(p__9744){var map__9746 = p__9744;var map__9746__$1 = ((cljs.core.seq_QMARK_.call(null,map__9746))?cljs.core.apply.call(null,cljs.core.hash_map,map__9746):map__9746);var item = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"item","item",249373802));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),cljs.core.second.call(null,item)], null);
});
doremi_script_app.app.line_number = (function line_number(p__9747){var map__9749 = p__9747;var map__9749__$1 = ((cljs.core.seq_QMARK_.call(null,map__9749))?cljs.core.apply.call(null,cljs.core.hash_map,map__9749):map__9749);var item = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"item","item",249373802));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.line_number","span.note.line_number",-751998039),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item))+")")], null)], null);
});
doremi_script_app.app.line_item = (function line_item(p__9750){var map__9752 = p__9750;var map__9752__$1 = ((cljs.core.seq_QMARK_.call(null,map__9752))?cljs.core.apply.call(null,cljs.core.hash_map,map__9752):map__9752);var src = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"src","src",-1651076051));var kind = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));var item = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"entering line-item, item");
doremi_script_app.utils.log.call(null,item);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"note_wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note","span.note",299048618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kind], null),src], null)], null);
});
doremi_script_app.app.barline = (function barline(p__9753){var map__9755 = p__9753;var map__9755__$1 = ((cljs.core.seq_QMARK_.call(null,map__9755))?cljs.core.apply.call(null,cljs.core.hash_map,map__9755):map__9755);var src = cljs.core.get.call(null,map__9755__$1,new cljs.core.Keyword(null,"src","src",-1651076051));var item = cljs.core.get.call(null,map__9755__$1,new cljs.core.Keyword(null,"item","item",249373802));var barline_name = cljs.core.first.call(null,cljs.core.second.call(null,item));doremi_script_app.utils.log.call(null,"barline-name is",barline_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.barline","span.note.barline",1112048460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.get.call(null,doremi_script_app.app.lookup_barline,cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.second.call(null,item))))], null)], null)], null)], null);
});
doremi_script_app.app.beat = (function beat(p__9756){var map__9758 = p__9756;var map__9758__$1 = ((cljs.core.seq_QMARK_.call(null,map__9758))?cljs.core.apply.call(null,cljs.core.hash_map,map__9758):map__9758);var item = cljs.core.get.call(null,map__9758__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"entering beat");
if(doremi_script_app.utils.is_a.call(null,"beat",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"beat",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
doremi_script_app.utils.log.call(null,"beat, item is");
doremi_script_app.utils.log.call(null,item);
var beat_count = cljs.core.reduce.call(null,((function (map__9758,map__9758__$1,item){
return (function count_beats(accum,cur){doremi_script_app.utils.log.call(null,"cur is",cur);
if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,cur);if(and__3413__auto__)
{return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dash","dash",23821356),null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),null], null), null),cljs.core.first.call(null,cur));
} else
{return and__3413__auto__;
}
})()))
{return (accum + (1));
} else
{return accum;
}
});})(map__9758,map__9758__$1,item))
,(0),cljs.core.rest.call(null,item));var _ = doremi_script_app.utils.log.call(null,"beat-count is",beat_count);var looped = (((beat_count > (1)))?"looped":"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.beat","span.beat",1814460555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),looped], null),doremi_script_app.app.draw_children.call(null,cljs.core.rest.call(null,item))], null);
});
doremi_script_app.app.pitch_name = (function pitch_name(p__9759){var map__9761 = p__9759;var map__9761__$1 = ((cljs.core.seq_QMARK_.call(null,map__9761))?cljs.core.apply.call(null,cljs.core.hash_map,map__9761):map__9761);var item = cljs.core.get.call(null,map__9761__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"pitch-name, item is");
doremi_script_app.utils.log.call(null,item);
doremi_script_app.utils.log.call(null,cljs.core.second.call(null,item));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch","span.note.pitch",-352842833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.second.call(null,item)], null)], null)], null);
});
doremi_script_app.app.pitch_alteration = (function pitch_alteration(p__9762){var map__9764 = p__9762;var map__9764__$1 = ((cljs.core.seq_QMARK_.call(null,map__9764))?cljs.core.apply.call(null,cljs.core.hash_map,map__9764):map__9764);var item = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"pitch-alteration");
if(doremi_script_app.utils.is_a.call(null,"pitch-alteration",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"pitch-alteration",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch.alteration","span.note.pitch.alteration",-1551391242),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.second.call(null,item)], null)], null)], null);
});
doremi_script_app.app.begin_slur_id = (function begin_slur_id(p__9765){var map__9767 = p__9765;var map__9767__$1 = ((cljs.core.seq_QMARK_.call(null,map__9767))?cljs.core.apply.call(null,cljs.core.hash_map,map__9767):map__9767);var item = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"item","item",249373802));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slur","span.slur",-1362831278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second.call(null,item)], null)], null);
});
doremi_script_app.app.pitch = (function pitch(p__9769){var map__9771 = p__9769;var map__9771__$1 = ((cljs.core.seq_QMARK_.call(null,map__9771))?cljs.core.apply.call(null,cljs.core.hash_map,map__9771):map__9771);var item = cljs.core.get.call(null,map__9771__$1,new cljs.core.Keyword(null,"item","item",249373802));var render_as = cljs.core.get.call(null,map__9771__$1,new cljs.core.Keyword(null,"render-as","render-as",-1497012239));doremi_script_app.utils.log.call(null,"pitch, (first (last item))=",cljs.core.first.call(null,cljs.core.last.call(null,item)));
doremi_script_app.utils.log.call(null,"entring pitch");
doremi_script_app.utils.log.call(null,item);
var begin_slur_id = cljs.core.some.call(null,((function (map__9771,map__9771__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"begin-slur-id","begin-slur-id",1138259461),cljs.core.first.call(null,x))))
{return x;
} else
{return null;
}
});})(map__9771,map__9771__$1,item,render_as))
,item);var end_slur_id = cljs.core.some.call(null,((function (begin_slur_id,map__9771,map__9771__$1,item,render_as){
return (function (x){if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end-slur-id","end-slur-id",-1084931359),cljs.core.first.call(null,x))))
{return x;
} else
{return null;
}
});})(begin_slur_id,map__9771,map__9771__$1,item,render_as))
,item);var h = (cljs.core.truth_(end_slur_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-begin-slur-id","data-begin-slur-id",1868670015),cljs.core.second.call(null,end_slur_id)], null):cljs.core.PersistentArrayMap.EMPTY);var deconstructed_pitch = doremi_script_app.app.deconstruct_pitch_string_by_kind.call(null,cljs.core.second.call(null,item),render_as);var sort_table = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ornament","ornament",839474961),(1),new cljs.core.Keyword(null,"octave","octave",1066197953),(2),new cljs.core.Keyword(null,"syl","syl",1647686075),(3),new cljs.core.Keyword(null,"begin-slur-id","begin-slur-id",1138259461),(4),new cljs.core.Keyword(null,"slur","slur",-1931297758),(5),new cljs.core.Keyword(null,"pitch-name","pitch-name",-1239574554),(6),new cljs.core.Keyword(null,"pitch-alteration","pitch-alteration",-1678536115),(7)], null);var item1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitch-name","pitch-name",-1239574554),cljs.core.first.call(null,deconstructed_pitch)], null),cljs.core.rest.call(null,cljs.core.rest.call(null,item))));var item2 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slur","slur",-1931297758),cljs.core.second.call(null,begin_slur_id)], null),item1)):item1);var item3 = (cljs.core.truth_(begin_slur_id)?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slur","slur",-1931297758),cljs.core.second.call(null,begin_slur_id)], null),item2)):item2);var alteration_string = cljs.core.second.call(null,deconstructed_pitch);var my_pitch_alteration = (cljs.core.truth_(alteration_string)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pitch-alteration",alteration_string], null):null);var item4 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,my_pitch_alteration,item3)));var item5 = cljs.core.remove.call(null,((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__9771,map__9771__$1,item,render_as){
return (function (x){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-slur-id","end-slur-id",-1084931359),null,new cljs.core.Keyword(null,"slur","slur",-1931297758),null], null), null),cljs.core.first.call(null,x));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,map__9771,map__9771__$1,item,render_as))
,item4);var item6 = cljs.core.sort_by.call(null,((function (begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__9771,map__9771__$1,item,render_as){
return (function (p1__9768_SHARP_){return cljs.core.get.call(null,sort_table,cljs.core.first.call(null,p1__9768_SHARP_));
});})(begin_slur_id,end_slur_id,h,deconstructed_pitch,sort_table,item1,item2,item3,alteration_string,my_pitch_alteration,item4,item5,map__9771,map__9771__$1,item,render_as))
,item5);doremi_script_app.utils.log.call(null,"item6 is");
doremi_script_app.utils.log.call(null,item6);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),h,doremi_script_app.app.draw_children.call(null,item6)], null);
});
doremi_script_app.app.lyrics_section = (function lyrics_section(p__9772){var map__9774 = p__9772;var map__9774__$1 = ((cljs.core.seq_QMARK_.call(null,map__9774))?cljs.core.apply.call(null,cljs.core.hash_map,map__9774):map__9774);var item = cljs.core.get.call(null,map__9774__$1,new cljs.core.Keyword(null,"item","item",249373802));var line_strings = cljs.core.map.call(null,((function (map__9774,map__9774__$1,item){
return (function (x){return clojure.string.join.call(null," ",cljs.core.rest.call(null,x));
});})(map__9774,map__9774__$1,item))
,cljs.core.rest.call(null,item));var s = clojure.string.join.call(null,"\n",line_strings);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.lyrics_section.unhyphenated","div.stave.lyrics_section.unhyphenated",-1783710937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Lyrics Section"], null),s], null);
});
doremi_script_app.app.stave = (function stave(p__9775){var map__9777 = p__9775;var map__9777__$1 = ((cljs.core.seq_QMARK_.call(null,map__9777))?cljs.core.apply.call(null,cljs.core.hash_map,map__9777):map__9777);var item = cljs.core.get.call(null,map__9777__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"entering stave");
doremi_script_app.utils.log.call(null,item);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),cljs.core.second.call(null,item)], null)], null);
});
doremi_script_app.app.measure = (function measure(p__9778){var map__9780 = p__9778;var map__9780__$1 = ((cljs.core.seq_QMARK_.call(null,map__9780))?cljs.core.apply.call(null,cljs.core.hash_map,map__9780):map__9780);var item = cljs.core.get.call(null,map__9780__$1,new cljs.core.Keyword(null,"item","item",249373802));if(doremi_script_app.utils.is_a.call(null,"measure",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"measure",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
doremi_script_app.utils.log.call(null,"measure, item is");
doremi_script_app.utils.log.call(null,item);
doremi_script_app.utils.log.call(null,"rest item=");
doremi_script_app.utils.log.call(null,cljs.core.rest.call(null,item));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"measure"], null),doremi_script_app.app.draw_children.call(null,cljs.core.rest.call(null,item))], null);
});
doremi_script_app.app.chord = (function chord(p__9781){var map__9783 = p__9781;var map__9783__$1 = ((cljs.core.seq_QMARK_.call(null,map__9783))?cljs.core.apply.call(null,cljs.core.hash_map,map__9783):map__9783);var item = cljs.core.get.call(null,map__9783__$1,new cljs.core.Keyword(null,"item","item",249373802));if(doremi_script_app.utils.is_a.call(null,"chord",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"chord",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
doremi_script_app.utils.log.call(null,"chord- item is");
doremi_script_app.utils.log.call(null,item);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.chord","span.chord",-638866621),cljs.core.second.call(null,item)], null);
});
doremi_script_app.app.syl = (function syl(p__9784){var map__9786 = p__9784;var map__9786__$1 = ((cljs.core.seq_QMARK_.call(null,map__9786))?cljs.core.apply.call(null,cljs.core.hash_map,map__9786):map__9786);var item = cljs.core.get.call(null,map__9786__$1,new cljs.core.Keyword(null,"item","item",249373802));if(doremi_script_app.utils.is_a.call(null,"syl",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"syl",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
doremi_script_app.utils.log.call(null,"syl- item is");
doremi_script_app.utils.log.call(null,item);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.syl","span.syl",866894295),cljs.core.second.call(null,item)], null);
});
doremi_script_app.app.abs = (function abs(n){var x__3732__auto__ = n;var y__3733__auto__ = (- n);return ((x__3732__auto__ > y__3733__auto__) ? x__3732__auto__ : y__3733__auto__);
});
doremi_script_app.app.octave = (function octave(p__9787){var map__9789 = p__9787;var map__9789__$1 = ((cljs.core.seq_QMARK_.call(null,map__9789))?cljs.core.apply.call(null,cljs.core.hash_map,map__9789):map__9789);var item = cljs.core.get.call(null,map__9789__$1,new cljs.core.Keyword(null,"item","item",249373802));doremi_script_app.utils.log.call(null,"octave- item is");
doremi_script_app.utils.log.call(null,item);
if(doremi_script_app.utils.is_a.call(null,"octave",item))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-a","is-a",231008255,null),"octave",new cljs.core.Symbol(null,"item","item",1889905329,null)))))));
}
var octave_num = cljs.core.second.call(null,item);if(((octave_num == null)) || ((octave_num === (0))))
{return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),doremi_script_app.app.class_for_octave.call(null,cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),clojure.string.join.call(null,cljs.core.repeat.call(null,doremi_script_app.app.abs.call(null,octave_num),doremi_script_app.app.bullet))], null)], null)], null);
}
});
doremi_script_app.app.default_draw_item = (function default_draw_item(p__9790){var map__9792 = p__9790;var map__9792__$1 = ((cljs.core.seq_QMARK_.call(null,map__9792))?cljs.core.apply.call(null,cljs.core.hash_map,map__9792):map__9792);var item = cljs.core.get.call(null,map__9792__$1,new cljs.core.Keyword(null,"item","item",249373802));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.first.call(null,item)], null),cljs.core.second.call(null,item)], null);
});
doremi_script_app.app.draw_item = (function draw_item(item,idx){doremi_script_app.utils.log.call(null,"entering draw-item, kind is",cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239)));
doremi_script_app.utils.log.call(null,"entering draw-item, item is");
doremi_script_app.utils.log.call(null,item);
var my_key = cljs.core.keyword.call(null,cljs.core.first.call(null,item));doremi_script_app.utils.log.call(null,"draw-item, item is");
doremi_script_app.utils.log.call(null,item);
doremi_script_app.utils.log.call(null,"key is");
doremi_script_app.utils.log.call(null,my_key);
if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214)))
{return null;
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219)))
{return null;
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"ornament","ornament",839474961)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"mordent","mordent",254330457)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.mordent,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"ending","ending",1236735934)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ending,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"barline","barline",-1705261636)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.barline,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.lyrics_section,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"chord","chord",-696248342)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.chord,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"syl","syl",1647686075)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"beat","beat",-817854366)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.beat,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"stave","stave",-1205874017)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.stave,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"measure","measure",-1857519826)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.measure,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"begin-slur-id","begin-slur-id",1138259461)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.begin_slur_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.attribute_section,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"pitch-alteration","pitch-alteration",-1678536115)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_alteration,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.ornament_pitch,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"render-as","render-as",-1497012239),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239))], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"pitch","pitch",1495126700)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"render-as","render-as",-1497012239),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239))], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,"syl"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.syl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"octave","octave",1066197953)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.octave,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"pitch-name","pitch-name",-1239574554)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.pitch_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.notes_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"line-number","line-number",-133688931)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_number,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{if(cljs.core._EQ_.call(null,my_key,new cljs.core.Keyword(null,"dash","dash",23821356)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.line_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"-",new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"item","item",249373802),item], null),("todo-draw-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,item))))], null);

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
doremi_script_app.app.sample = (function sample(){new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composition.doremiContent","div.composition.doremiContent",-363149090),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.lyrics_section.unhyphenated","div.stave.lyrics_section.unhyphenated",-1783710937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.sargam_line","div.stave.sargam_line",-1895963428),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.line_number","span.note.line_number",-751998039),cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.barline","span.note.barline",1112048460),cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.measure","span.measure",-1744814645),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.beat.looped","span.beat.looped",-675343805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upper_attribute.ornament.placement_after","span.upper_attribute.ornament.placement_after",-955647950),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ornament_item.lower_octave_1","span.ornament_item.lower_octave_1",-1609660596),cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ornament_item.octave0","span.ornament_item.octave0",1408259640),cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upper_octave_1.upper_octave_indicator","span.upper_octave_1.upper_octave_indicator",340241344),cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.syl","span.syl",866894295),cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch","span.note.pitch",-352842833),cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch.alteration","span.note.pitch.alteration",-1551391242),cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.dash","span.note.dash",-1310880853),cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.dash","span.note.dash",-1310880853),cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch","span.note.pitch",-352842833),cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composition.doremiContent","div.composition.doremiContent",-363149090),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.lyrics_section.unhyphenated","div.stave.lyrics_section.unhyphenated",-1783710937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Lyrics Section"], null),"he- llo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stave.sargam_line","div.stave.sargam_line",-1895963428),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.line_number","span.note.line_number",-751998039),cljs.core.PersistentArrayMap.EMPTY,"1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.barline","span.note.barline",1112048460),cljs.core.PersistentArrayMap.EMPTY,"\uD834\uDD06"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.measure","span.measure",-1744814645),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.beat.looped","span.beat.looped",-675343805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"margin-right: 28px;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upper_attribute.ornament.placement_after","span.upper_attribute.ornament.placement_after",-955647950),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ornament_item.lower_octave_1","span.ornament_item.lower_octave_1",-1609660596),cljs.core.PersistentArrayMap.EMPTY,"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ornament_item.octave0","span.ornament_item.octave0",1408259640),cljs.core.PersistentArrayMap.EMPTY,"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upper_octave_1.upper_octave_indicator","span.upper_octave_1.upper_octave_indicator",340241344),cljs.core.PersistentArrayMap.EMPTY,"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.syl","span.syl",866894295),cljs.core.PersistentArrayMap.EMPTY,"syl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch","span.note.pitch",-352842833),cljs.core.PersistentArrayMap.EMPTY,"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch.alteration","span.note.pitch.alteration",-1551391242),cljs.core.PersistentArrayMap.EMPTY,"\u266D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.dash","span.note.dash",-1310880853),cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.dash","span.note.dash",-1310880853),cljs.core.PersistentArrayMap.EMPTY,"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note_wrapper","span.note_wrapper",-1715667480),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.pitch","span.note.pitch",-352842833),cljs.core.PersistentArrayMap.EMPTY,"g"], null)], null)], null)], null)], null)], null);
});
doremi_script_app.app.select_notation_box = (function select_notation_box(kind){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"selectNotation"], null),"Enter Notation as: "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#selectNotation.selectNotation.form-control","select#selectNotation.selectNotation.form-control",2084454205),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"composition-kind","composition-kind",-1097615438)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9793_SHARP_){var kind_str = p1__9793_SHARP_.target.value;var my_kind = ((cljs.core._EQ_.call(null,"",kind_str))?null:cljs.core.keyword.call(null,kind_str));return cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"composition-kind","composition-kind",-1097615438),my_kind);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"abc-composition","abc-composition",636048491)], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"doremi-composition","doremi-composition",470227660)], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hindi-composition","hindi-composition",1352035361)], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"number-composition","number-composition",1582204584)], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166)], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.render_as_box = (function render_as_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"renderAs"], null),"Render as:"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#renderAs.renderAs.form-control","select#renderAs.renderAs.form-control",-670108125),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9794_SHARP_){return cljs.core.swap_BANG_.call(null,doremi_script_app.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"render-as","render-as",-1497012239),cljs.core.keyword.call(null,p1__9794_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"abc-composition","abc-composition",636048491)], null),"ABC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"doremi-composition","doremi-composition",470227660)], null),"doremi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hindi-composition","hindi-composition",1352035361)], null),"hindi( \u0938 \u0930 \u095A \u092E \u092E' \u092A \u0927 \u0929 )"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"number-composition","number-composition",1582204584)], null),"number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166)], null),"sargam"], null)], null)], null);
});
doremi_script_app.app.generate_staff_notation_button = (function generate_staff_notation_button(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Generates staff notation and MIDI file using Lilypond",new cljs.core.Keyword(null,"name","name",1843675177),"generateStaffNotation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){e.preventDefault();
return doremi_script_app.app.generate_staff_notation_xhr.call(null,doremi_script_app.app.generate_staff_notation_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,doremi_script_app.app.last_text_value),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.get_in.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composition-kind","composition-kind",-1097615438)], null))], null));
})], null),"Generate Staff Notation"], null);
});
doremi_script_app.app.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter letter music notation using 1234567CDEFGABC DoReMi (using drmfslt or DRMFSLT) SRGmPDN or devanagri: \u0938\u0930 \u095A\u092E \u092E'\u092A \u0927\u0929\n\n"], null);
});
doremi_script_app.app.toggle_lilypond_button = (function toggle_lilypond_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggleButton","button.toggleButton",-1478050954),"Lilypond"], null);
});
doremi_script_app.app.play_midi_file = (function play_midi_file(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hidden","a.hidden",2123657139),"Play MIDI File(Turn Volume Up!)"], null);
});
doremi_script_app.app.toggle_staff_notation_button = (function toggle_staff_notation_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggleButton","button.toggleButton",-1478050954),"Staff Notation Hide/Show"], null);
});
doremi_script_app.app.other_unused = (function other_unused(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://rawgithub.com/rothfield/doremi-script/master/test/good_test_results/report.html",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"title","title",636505583),"Opens in new window"], null),"Visual test suite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/rothfield/doremi-script#readme",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"title","title",636505583),"Opens in new window"], null),"Help"], null)], null);
});
doremi_script_app.app.controls = (function controls(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-inline","form.form-inline",1823626904),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.select_notation_box,cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"kind","kind",-717265803))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.render_as_box,cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.generate_staff_notation_button], null)], null);
});
doremi_script_app.app.parse_failed = (function parse_failed(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.compositionParseFailed.hidden","div.compositionParseFailed.hidden",1861674912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lilypondDisplay.hidden","div.lilypondDisplay.hidden",235618251),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#staff_notation","img#staff_notation",-1475983367),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/blank.png?1426699590838"], null)], null)], null)], null);
});
doremi_script_app.app.doremi_box = (function doremi_box(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.doremiBox","div.doremiBox",2050232865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.controls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.entry_area,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doremi-text","doremi-text",564491547),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"doremi-text","doremi-text",564491547))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.composition_wrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),cljs.core.get_in.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-results","parse-results",2109607024),new cljs.core.Keyword(null,"parsed","parsed",-819589156)], null)),new cljs.core.Keyword(null,"render-as","render-as",-1497012239),cljs.core.get.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.Keyword(null,"render-as","render-as",-1497012239))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.staff_notation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.parse_results_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),cljs.core.get_in.call(null,cljs.core.deref.call(null,doremi_script_app.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-results","parse-results",2109607024),new cljs.core.Keyword(null,"parsed","parsed",-819589156)], null))], null)], null)], null);
});
doremi_script_app.app.calling_component = (function calling_component(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.doremi_box], null);
});
doremi_script_app.app.init = (function init(){reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doremi_script_app.app.calling_component], null),document.getElementById("container"));
console.log("starting timer");
return doremi_script_app.app.start_parse_timer.call(null);
});

//# sourceMappingURL=app.js.map