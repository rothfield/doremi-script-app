// Compiled by ClojureScript 0.0-2371
goog.provide('doremi_script_app.doremi_core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('doremi_script_app.utils');
goog.require('clojure.walk');
goog.require('instaparse.viz');
goog.require('clojure.zip');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('doremi_script_app.utils');
goog.require('instaparse.core');
goog.require('clojure.string');
goog.require('instaparse.core');
goog.require('clojure.zip');
goog.require('instaparse.viz');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.walk');
if(typeof doremi_script_app.doremi_core.parser !== 'undefined')
{} else
{doremi_script_app.doremi_core.parser = (function (){var G__11478 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11478) : cljs.core.atom.call(null,G__11478));
})();
}
if(typeof doremi_script_app.doremi_core.grammar !== 'undefined')
{} else
{doremi_script_app.doremi_core.grammar = (function (){var G__11479 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11479) : cljs.core.atom.call(null,G__11479));
})();
}
doremi_script_app.doremi_core.load_grammar = (function load_grammar(){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["load-grammar"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["loading serialized-grammar from ebnf/grammar.txt"], 0));
if(((function (){var G__11491 = doremi_script_app.doremi_core.grammar;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11491) : cljs.core.deref.call(null,G__11491));
})() == null))
{return goog.net.XhrIo.send("ebnf/grammar.txt",(function load_grammar_callback(x){var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x.target.getResponseText(),cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0));var G__11497_11502 = doremi_script_app.doremi_core.grammar;var G__11498_11503 = cljs.reader.read_string(data);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11497_11502,G__11498_11503) : cljs.core.reset_BANG_.call(null,G__11497_11502,G__11498_11503));
var G__11499_11504 = doremi_script_app.doremi_core.parser;var G__11500_11505 = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11501 = doremi_script_app.doremi_core.grammar;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11501) : cljs.core.deref.call(null,G__11501));
})(),cljs.core.array_seq([cljs.core.constant$keyword$151,cljs.core.constant$keyword$168,cljs.core.constant$keyword$154,true], 0));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11499_11504,G__11500_11505) : cljs.core.reset_BANG_.call(null,G__11499_11504,G__11500_11505));
return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["grammar initialized"], 0));
}));
} else
{return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["skipping reloading of grammar/parser"], 0));
}
});
doremi_script_app.doremi_core.load_grammar();
doremi_script_app.doremi_core.print_out_grammar = (function print_out_grammar(){var _STAR_print_dup_STAR_11509 = cljs.core._STAR_print_dup_STAR_;try{cljs.core._STAR_print_dup_STAR_ = true;
return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["using prn-str",(function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_11510_11512 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_11510_11512,sb__4366__auto__,_STAR_print_dup_STAR_11509){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_11510_11512,sb__4366__auto__,_STAR_print_dup_STAR_11509))
;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1((function (){var G__11511 = doremi_script_app.doremi_core.parser;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11511) : cljs.core.deref.call(null,G__11511));
})())], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11510_11512;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()], 0));
}finally {cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_11509;
}});
doremi_script_app.doremi_core.parse = (function parse(x,kind){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["parse: kind is",kind], 0));
if(cljs.core.truth_(kind))
{return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11515 = doremi_script_app.doremi_core.parser;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11515) : cljs.core.deref.call(null,G__11515));
})(),x,cljs.core.array_seq([cljs.core.constant$keyword$151,kind], 0));
} else
{return instaparse.core.parse((function (){var G__11516 = doremi_script_app.doremi_core.parser;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11516) : cljs.core.deref.call(null,G__11516));
})(),x);
}
});
doremi_script_app.doremi_core.parse_for_testing = (function parse_for_testing(x){var results = instaparse.core.parses((function (){var G__11518 = doremi_script_app.doremi_core.parser;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11518) : cljs.core.deref.call(null,G__11518));
})(),x);var _ = doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([results], 0));var result = cljs.core.first(results);var more = cljs.core.second(results);if(cljs.core.truth_(more))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([("amiguous parse: first 5 results are"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),results)], 0))))], 0));
} else
{}
return result;
});
doremi_script_app.doremi_core.is_QMARK_ = (function is_QMARK_(k,x){return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(x)));
});
doremi_script_app.doremi_core.is_notation_system_name_QMARK_ = (function is_notation_system_name_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["doremi",null,cljs.core.constant$keyword$169,null,cljs.core.constant$keyword$170,null,cljs.core.constant$keyword$171,null,"sargam",null,"number",null,"abc",null,cljs.core.constant$keyword$172,null,cljs.core.constant$keyword$173,null,"hindi",null], null), null),x);
});
doremi_script_app.doremi_core.kind_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$174,null,cljs.core.constant$keyword$175,null,cljs.core.constant$keyword$176,null,cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$168,null], null), null);
doremi_script_app.doremi_core.is_kind_QMARK_ = (function is_kind_QMARK_(x){return cljs.core.contains_QMARK_(doremi_script_app.doremi_core.kind_set,x);
});
/**
* Make a unique key using meta-data
*/
doremi_script_app.doremi_core.unique_for_assigned = (function unique_for_assigned(x){var _PERCENT_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.meta(x),cljs.core.first(x)], null);return _PERCENT_;
});
/**
* Tests whether x is in set my-set. Uses metadata to distinguish
*/
doremi_script_app.doremi_core.in_assigned_QMARK_ = (function in_assigned_QMARK_(my_set,x){return cljs.core.contains_QMARK_(my_set,doremi_script_app.doremi_core.unique_for_assigned(x));
});
/**
* Map sargam pitch to pitch in the key of 'C'.  M => F#
*/
doremi_script_app.doremi_core.sargam_pitch__GT_normalized_pitch = (function sargam_pitch__GT_normalized_pitch(x){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["d","n","G#","R#","Pb","N#","G","M","S","mb","R","P","D#","S#","r","g","P#","N","Sb","m","D"],["Ab","Bb","E#","D#","Gb","B#","E","F#","C","Fb","D","G","A#","C#","Db","Eb","G#","B","Cb","F","A"]),x,"ERROR");
});
doremi_script_app.doremi_core.number_pitch__GT_normalized_pitch = (function number_pitch__GT_normalized_pitch(x){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["3","4","5#","6#","6b","7b","7","2#","5","6","2b","3b","1","3#","5b","7#","2","4#","4b","1#"],["E","F","G#","A#","Ab","Bb","B","D#","G","A","Db","Eb","C","E#","Gb","B#","D","F#","Fb","C#"]),x,"ERROR");
});
doremi_script_app.doremi_core.doremi_pitch__GT_normalized_pitch = (function doremi_pitch__GT_normalized_pitch(x){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["d","tb","s","f","fb","mb","sb","f#","t","d#","l#","lb","r","t#","l","m#","r#","m","rb","s#"],["C","Bb","G","F","Fb","Eb","Gb","F#","B","C#","A#","Ab","D","B#","A","E#","D#","E","Db","G#"]),clojure.string.lower_case(x),"ERROR");
});
doremi_script_app.doremi_core.hindi_pitch__GT_normalized_pitch = (function hindi_pitch__GT_normalized_pitch(x){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["\u095A#","\u092E'","\u0938#","\u0930#","\u092E#","\u092E","\u092A","\u0927","\u0929","\u092A#","\u0938","\u0930","\u095A","\u0927#","\u0929#"],["E#","F#","C#","D#","F#","F","G","A","B","G#","C","D","E","A#","B#"]),x,"ERROR");
});
/**
* Change keyword to remove notation prefixes. :sargam-pitch -> :pitch
*/
doremi_script_app.doremi_core.remove_notation_system_prefix = (function remove_notation_system_prefix(k){var _PERCENT_ = (function (){var ary = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);var prefix = cljs.core.first(ary);
if(doremi_script_app.doremi_core.is_notation_system_name_QMARK_(prefix))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.rest(ary)));
} else
{return k;
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.get_attribute = (function get_attribute(pitch,my_key){return cljs.core.some((function (p1__11519_SHARP_){if(cljs.core.truth_(((cljs.core.vector_QMARK_(p1__11519_SHARP_))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_key,cljs.core.first(p1__11519_SHARP_)):null)))
{return p1__11519_SHARP_;
} else
{return null;
}
}),pitch);
});
doremi_script_app.doremi_core.make_it_kommal = (function make_it_kommal(pitch){
var without_kommal = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__11520_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$178,p1__11520_SHARP_);
}),pitch));if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["E",null,"B",null,"A",null,"D",null], null), null).call(null,cljs.core.second(pitch))))
{return cljs.core.vec(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(without_kommal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.str,"b"));
} else
{return pitch;
}
});
doremi_script_app.doremi_core.apply_kommal_to_pitches = (function apply_kommal_to_pitches(original_tree){
var loc = clojure.zip.vector_zip(original_tree);var id = (0);while(true){
if(clojure.zip.end_QMARK_(loc))
{return clojure.zip.root(loc);
} else
{var current = clojure.zip.node(loc);if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute(current,cljs.core.constant$keyword$178);
} else
{return and__3413__auto__;
}
})()))
{{
var G__11521 = clojure.zip.next(clojure.zip.edit(loc,doremi_script_app.doremi_core.make_it_kommal));
var G__11522 = id;
loc = G__11521;
id = G__11522;
continue;
}
} else
{{
var G__11523 = clojure.zip.next(loc);
var G__11524 = id;
loc = G__11523;
id = G__11524;
continue;
}

}
}
break;
}
});
/**
* add id to begin and end slurs
*/
doremi_script_app.doremi_core.match_slurs = (function match_slurs(original_tree){var loc = clojure.zip.vector_zip(original_tree);var id = (0);while(true){
if(clojure.zip.end_QMARK_(loc))
{return clojure.zip.root(loc);
} else
{var current = clojure.zip.node(loc);if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute(current,cljs.core.constant$keyword$180);
} else
{return and__3413__auto__;
}
})()))
{{
var G__11525 = clojure.zip.next(clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$181,id], null)], 0)));
var G__11526 = id;
loc = G__11525;
id = G__11526;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute(current,cljs.core.constant$keyword$182);
} else
{return and__3413__auto__;
}
})()))
{{
var G__11527 = clojure.zip.next(clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,id], null)], 0)));
var G__11528 = (id + (1));
loc = G__11527;
id = G__11528;
continue;
}
} else
{{
var G__11529 = clojure.zip.next(loc);
var G__11530 = id;
loc = G__11529;
id = G__11530;
continue;
}

}
}
}
break;
}
});
/**
* Removes notation system prefixes from the tree
*/
doremi_script_app.doremi_core.remove_notation_system_prefixes = (function remove_notation_system_prefixes(original_tree){var _PERCENT_ = (function (){var loc = clojure.zip.vector_zip(original_tree);while(true){
if(clojure.zip.end_QMARK_(loc))
{return clojure.zip.root(loc);
} else
{{
var G__11531 = clojure.zip.next((((cljs.core.vector_QMARK_(clojure.zip.node(loc))) && ((cljs.core.first(clojure.zip.node(loc)) instanceof cljs.core.Keyword)))?clojure.zip.edit(loc,((function (loc){
return (function (y){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(y,(0),doremi_script_app.doremi_core.remove_notation_system_prefix(cljs.core.first(y)));
});})(loc))
):loc
));
loc = G__11531;
continue;
}
}
break;
}
})();return _PERCENT_;
});
/**
* Replace pitch names to CDEFGAB style from the style found in
* the parse tree (number,sargam,hindi)
*/
doremi_script_app.doremi_core.normalize_pitches = (function normalize_pitches(original_tree){var _PERCENT_ = (function (){var loc = clojure.zip.vector_zip(original_tree);while(true){
if(clojure.zip.end_QMARK_(loc))
{return clojure.zip.root(loc);
} else
{{
var G__11532 = clojure.zip.next((cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_(clojure.zip.node(loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$184,null,cljs.core.constant$keyword$185,null], null), null).call(null,cljs.core.first(clojure.zip.node(loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit(loc,((function (loc){
return (function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),doremi_script_app.doremi_core.sargam_pitch__GT_normalized_pitch(cljs.core.second(x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_(clojure.zip.node(loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$186,null,cljs.core.constant$keyword$187,null], null), null).call(null,cljs.core.first(clojure.zip.node(loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit(loc,((function (loc){
return (function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),doremi_script_app.doremi_core.doremi_pitch__GT_normalized_pitch(cljs.core.second(x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_(clojure.zip.node(loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$188,null,cljs.core.constant$keyword$189,null], null), null).call(null,cljs.core.first(clojure.zip.node(loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit(loc,((function (loc){
return (function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),doremi_script_app.doremi_core.hindi_pitch__GT_normalized_pitch(cljs.core.second(x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_(clojure.zip.node(loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,null,cljs.core.constant$keyword$191,null], null), null).call(null,cljs.core.first(clojure.zip.node(loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit(loc,((function (loc){
return (function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),doremi_script_app.doremi_core.number_pitch__GT_normalized_pitch(cljs.core.second(x)));
});})(loc))
):loc
)))));
loc = G__11532;
continue;
}
}
break;
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.add_kind = (function add_kind(x,kind){if(cljs.core.truth_(kind))
{var has_attributes = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$192,cljs.core.first(cljs.core.second(x)));if(has_attributes)
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.conj,"kind",kind);
} else
{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,"kind",kind], null)], null),cljs.core.array_seq([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,(1))], 0)));
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$192,cljs.core.first(cljs.core.second(cljs.core.second(x)))))
{var z = cljs.core.second(x);var attributes = cljs.core.first(cljs.core.second(x));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(z,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.conj,"kind",cljs.core.first(z));
} else
{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,"kind",cljs.core.first(cljs.core.second(x))], null)], null),cljs.core.rest(cljs.core.second(x))));

}
}
});
/**
* Returns the items, which are always the rest of the vector.
*/
doremi_script_app.doremi_core.items = (function items(x){
return cljs.core.next(x);
});
doremi_script_app.doremi_core.start_index = (function start_index(x){var x__$1 = instaparse.viz.span(x);if(cljs.core.truth_(x__$1))
{return cljs.core.first(x__$1);
} else
{return null;
}
});
doremi_script_app.doremi_core.line_column_map = (function line_column_map(my_map,my_line){
var line_start = doremi_script_app.doremi_core.start_index(my_line);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (line_start){
return (function (accum,obj){
var start_index = doremi_script_app.doremi_core.start_index(obj);var column = (cljs.core.truth_(start_index)?(start_index - line_start):null);var _ = null
;if(cljs.core.not(start_index))
{return accum;
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$194,obj))
{var span = instaparse.viz.span(obj);var ornament_string_length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.reverse(span));var column_for_after_ornament = (column - (1));var column_for_before_ornament = (column + ornament_string_length);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,column_for_after_ornament,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(accum,column_for_after_ornament,cljs.core.PersistentVector.EMPTY),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.constant$keyword$195)),cljs.core.array_seq([column_for_before_ornament,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(accum,column_for_before_ornament,cljs.core.PersistentVector.EMPTY),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.constant$keyword$196))], 0));
} else
{var column__$1 = (start_index - line_start);var ___$1 = null
;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,column__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(accum,column__$1,cljs.core.PersistentVector.EMPTY),obj));

}
}
});})(line_start))
,my_map,cljs.core.tree_seq(cljs.core.vector_QMARK_,cljs.core.identity,my_line));
});
doremi_script_app.doremi_core.takes_values_from_column_QMARK_ = (function takes_values_from_column_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$197,null,cljs.core.constant$keyword$179,null,cljs.core.constant$keyword$198,null], null), null),x);
});
doremi_script_app.doremi_core.is_upper_dot_QMARK_ = (function is_upper_dot_QMARK_(x){return (cljs.core.vector_QMARK_(x)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,null,cljs.core.constant$keyword$200,null], null), null),cljs.core.first(x)));
});
doremi_script_app.doremi_core.is_dot_QMARK_ = (function is_dot_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$199,null,cljs.core.constant$keyword$201,null,cljs.core.constant$keyword$200,null,cljs.core.constant$keyword$202,null], null), null),cljs.core.first(x));
});
doremi_script_app.doremi_core.is_lower_line_QMARK_ = (function is_lower_line_QMARK_(x){return (cljs.core.vector_QMARK_(x)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,null,cljs.core.constant$keyword$204,null], null), null),cljs.core.first(x)));
});
doremi_script_app.doremi_core.lines__GT_column_map = (function lines__GT_column_map(lines){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,item){return doremi_script_app.doremi_core.line_column_map(accum,item);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__11533_SHARP_){return (doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$205,p1__11533_SHARP_)) || (doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$204,p1__11533_SHARP_));
}),lines)));
});
doremi_script_app.doremi_core.pitch__GT_octave = (function pitch__GT_octave(pitch){var _PERCENT_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$199,(1),cljs.core.constant$keyword$200,(2),cljs.core.constant$keyword$202,(-1),cljs.core.constant$keyword$201,(-2)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,pitch)))));return _PERCENT_;
});
doremi_script_app.doremi_core.calculate_octave = (function calculate_octave(x){if(!((doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,x)) || (doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$206,x))))
{return x;
} else
{var without_dots = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__11534_SHARP_){return (cljs.core.vector_QMARK_(p1__11534_SHARP_)) && (doremi_script_app.doremi_core.is_dot_QMARK_(p1__11534_SHARP_));
}),x));var octave = doremi_script_app.doremi_core.pitch__GT_octave(x);return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(without_dots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,octave], null)));
}
});
doremi_script_app.doremi_core.assign_ornament_octaves = (function assign_ornament_octaves(assigned,my_stave){var _PERCENT_ = (function (){
var column_map = doremi_script_app.doremi_core.lines__GT_column_map(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11535_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$208,p1__11535_SHARP_);
}),doremi_script_app.doremi_core.items(my_stave)));return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (column_map){
return (function map_fn(line){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$208,line))
{return clojure.walk.postwalk(((function (column_map){
return (function assign_dots_postwalk_fn(item){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$206,item))
{var column = (doremi_script_app.doremi_core.start_index(item) - doremi_script_app.doremi_core.start_index(line));var dots_from_upper_lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.in_assigned_QMARK_,(function (){var G__11580 = assigned;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11580) : cljs.core.deref.call(null,G__11580));
})()),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.is_upper_dot_QMARK_,(function (){var G__11581 = column;var G__11582 = cljs.core.PersistentVector.EMPTY;return (column_map.cljs$core$IFn$_invoke$arity$2 ? column_map.cljs$core$IFn$_invoke$arity$2(G__11581,G__11582) : column_map.call(null,G__11581,G__11582));
})()));if(cljs.core.empty_QMARK_(dots_from_upper_lines))
{return item;
} else
{var fixed_dots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (column,dots_from_upper_lines,column_map){
return (function (x){var _PERCENT_ = (((doremi_script_app.doremi_core.start_index(x) > doremi_script_app.doremi_core.start_index(item)))?new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201], null)], true, false).call(null,x,"wtf"):x);return _PERCENT_;
});})(column,dots_from_upper_lines,column_map))
,dots_from_upper_lines);var G__11583_11586 = assigned;var G__11584_11587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(function (){var G__11585 = assigned;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11585) : cljs.core.deref.call(null,G__11585));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.unique_for_assigned,dots_from_upper_lines));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11583_11586,G__11584_11587) : cljs.core.reset_BANG_.call(null,G__11583_11586,G__11584_11587));
return doremi_script_app.doremi_core.calculate_octave(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,item,fixed_dots));
}
} else
{return item;

}
});})(column_map))
,line);
} else
{return line;

}
});})(column_map))
,my_stave));
})();return _PERCENT_;
});
doremi_script_app.doremi_core.assign_syllables = (function assign_syllables(assigned,stave){var syls_to_apply = (function (){var G__11607 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(doremi_script_app.doremi_core.items,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11588_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$204,p1__11588_SHARP_);
}),stave)], 0));return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11607) : cljs.core.atom.call(null,G__11607));
})();var in_slur = (function (){var G__11608 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11608) : cljs.core.atom.call(null,G__11608));
})();return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (syls_to_apply,in_slur){
return (function (line){if(!(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$205,line)))
{return line;
} else
{return clojure.walk.postwalk(((function (syls_to_apply,in_slur){
return (function walk_fn(item){if(cljs.core.empty_QMARK_((function (){var G__11616 = syls_to_apply;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11616) : cljs.core.deref.call(null,G__11616));
})()))
{return item;
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,item))
{var syl = ((cljs.core.not((function (){var G__11617 = in_slur;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11617) : cljs.core.deref.call(null,G__11617));
})()))?cljs.core.first((function (){var G__11618 = syls_to_apply;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11618) : cljs.core.deref.call(null,G__11618));
})()):null);var ret_val = (cljs.core.truth_(syl)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,syl], null)):item);var has_begin_slur = cljs.core.some(((function (syl,ret_val,syls_to_apply,in_slur){
return (function (p1__11589_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$180,p1__11589_SHARP_);
});})(syl,ret_val,syls_to_apply,in_slur))
,item);var has_end_slur = cljs.core.some(((function (syl,ret_val,has_begin_slur,syls_to_apply,in_slur){
return (function (p1__11590_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$182,p1__11590_SHARP_);
});})(syl,ret_val,has_begin_slur,syls_to_apply,in_slur))
,item);if(cljs.core.truth_(syl))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(syls_to_apply,cljs.core.rest);
} else
{}
if(cljs.core.truth_((function (){var and__3413__auto__ = has_begin_slur;if(cljs.core.truth_(and__3413__auto__))
{return has_end_slur;
} else
{return and__3413__auto__;
}
})()))
{} else
{if(cljs.core.truth_(has_begin_slur))
{var G__11619_11623 = in_slur;var G__11620_11624 = true;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11619_11623,G__11620_11624) : cljs.core.reset_BANG_.call(null,G__11619_11623,G__11620_11624));
} else
{if(cljs.core.truth_(has_end_slur))
{var G__11621_11625 = in_slur;var G__11622_11626 = false;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11621_11625,G__11622_11626) : cljs.core.reset_BANG_.call(null,G__11621_11625,G__11622_11626));
} else
{}
}
}
return ret_val;
} else
{return item;

}
}
});})(syls_to_apply,in_slur))
,line);
}
});})(syls_to_apply,in_slur))
,stave);
});
doremi_script_app.doremi_core.handle_slurs = (function handle_slurs(assigned,stave){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){if(!(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$205,line)))
{return line;
} else
{var pitch_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.start_index,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11627_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,p1__11627_SHARP_);
}),cljs.core.tree_seq(cljs.core.vector_QMARK_,cljs.core.identity,line)));var end_slur_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.start_index,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch_positions){
return (function (p1__11628_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$182,p1__11628_SHARP_);
});})(pitch_positions))
,cljs.core.tree_seq(cljs.core.vector_QMARK_,cljs.core.identity,line)));var begin_slur_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.start_index,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch_positions,end_slur_positions){
return (function (p1__11629_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$180,p1__11629_SHARP_);
});})(pitch_positions,end_slur_positions))
,cljs.core.tree_seq(cljs.core.vector_QMARK_,cljs.core.identity,line)));var pitches_needing_begin_slurs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pitch_positions,end_slur_positions,begin_slur_positions){
return (function (slur_position){return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,slur_position),pitch_positions));
});})(pitch_positions,end_slur_positions,begin_slur_positions))
,begin_slur_positions));var pitches_needing_end_slurs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs){
return (function (slur_position){return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,slur_position),pitch_positions));
});})(pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs))
,end_slur_positions));return clojure.walk.postwalk(((function (pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs,pitches_needing_end_slurs){
return (function walk_line(item){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,item))
{var items_to_conj = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(pitches_needing_end_slurs,doremi_script_app.doremi_core.start_index(item)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182], null):null),((cljs.core.contains_QMARK_(pitches_needing_begin_slurs,doremi_script_app.doremi_core.start_index(item)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180], null):null)], null));if(cljs.core.truth_(cljs.core.not_empty(items_to_conj)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,item,items_to_conj);
} else
{return item;
}
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$180,item))
{return null;
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$182,item))
{return null;
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$210,item))
{return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,item));
} else
{if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$211,item))
{return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,item));
} else
{return item;

}
}
}
}
}
});})(pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs,pitches_needing_end_slurs))
,line);
}
}),stave);
});
doremi_script_app.doremi_core.assign_to_notes_line = (function assign_to_notes_line(assigned,stave){var _PERCENT_ = (function (){var column_map = doremi_script_app.doremi_core.lines__GT_column_map(doremi_script_app.doremi_core.items(stave));var notes_line = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (column_map){
return (function (p1__11630_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$205,p1__11630_SHARP_);
});})(column_map))
,doremi_script_app.doremi_core.items(stave)));var notes_line_start_index = doremi_script_app.doremi_core.start_index(notes_line);var line_starts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.start_index,doremi_script_app.doremi_core.items(stave));var line_start_for_position = ((function (column_map,notes_line,notes_line_start_index,line_starts){
return (function line_start_for_position_fn(position){return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (column_map,notes_line,notes_line_start_index,line_starts){
return (function (x){return (position >= x);
});})(column_map,notes_line,notes_line_start_index,line_starts))
,line_starts));
});})(column_map,notes_line,notes_line_start_index,line_starts))
;var line_start_for_node = ((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position){
return (function line_start_for_node(node){return line_start_for_position(doremi_script_app.doremi_core.start_index(node));
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position))
;var column_for_node = ((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node){
return (function (node){var my_start_index = doremi_script_app.doremi_core.start_index(node);return (my_start_index - line_start_for_position(my_start_index));
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node))
;return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (line){if(!(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$205,line)))
{return line;
} else
{return clojure.walk.postwalk(((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (item){
if((cljs.core.vector_QMARK_(item)) && (doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,item)) && ((doremi_script_app.doremi_core.start_index(item) < notes_line_start_index)))
{return item;
} else
{if((cljs.core.vector_QMARK_(item)) && (doremi_script_app.doremi_core.takes_values_from_column_QMARK_(cljs.core.first(item))))
{var column = column_for_node(item);var start_index = doremi_script_app.doremi_core.start_index(item);var nodes_in_this_column1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (column,start_index,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (x){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$199,null,cljs.core.constant$keyword$201,null,cljs.core.constant$keyword$212,null,cljs.core.constant$keyword$213,null,cljs.core.constant$keyword$200,null,cljs.core.constant$keyword$194,null,cljs.core.constant$keyword$202,null,cljs.core.constant$keyword$214,null,cljs.core.constant$keyword$215,null,cljs.core.constant$keyword$178,null], null), null).call(null,cljs.core.first(x));
});})(column,start_index,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.in_assigned_QMARK_,(function (){var G__11638 = assigned;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11638) : cljs.core.deref.call(null,G__11638));
})()),(function (){var G__11639 = column;var G__11640 = cljs.core.PersistentVector.EMPTY;return (column_map.cljs$core$IFn$_invoke$arity$2 ? column_map.cljs$core$IFn$_invoke$arity$2(G__11639,G__11640) : column_map.call(null,G__11639,G__11640));
})()));var nodes_in_this_column = ((!(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$179,item)))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (column,start_index,nodes_in_this_column1,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (p1__11631_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$194,p1__11631_SHARP_);
});})(column,start_index,nodes_in_this_column1,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,nodes_in_this_column1):nodes_in_this_column1);return doremi_script_app.doremi_core.calculate_octave((cljs.core.truth_(cljs.core.not_empty(nodes_in_this_column))?(function (){var G__11641_11644 = assigned;var G__11642_11645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(function (){var G__11643 = assigned;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11643) : cljs.core.deref.call(null,G__11643));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(doremi_script_app.doremi_core.unique_for_assigned,nodes_in_this_column));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11641_11644,G__11642_11645) : cljs.core.reset_BANG_.call(null,G__11641_11644,G__11642_11645));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,item,nodes_in_this_column);
})():item));
} else
{return item;

}
}
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,line);
}
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,stave));
})();return _PERCENT_;
});
/**
* Assigns items based on indentation
*/
doremi_script_app.doremi_core.collapse_stave = (function collapse_stave(stave){
var my_assigned = (function (){var G__11647 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11647) : cljs.core.atom.call(null,G__11647));
})();return cljs.core.vec(doremi_script_app.doremi_core.apply_kommal_to_pitches(cljs.core.vec(doremi_script_app.doremi_core.assign_syllables(my_assigned,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (my_assigned){
return (function (x){var and__3413__auto__ = cljs.core.vector_QMARK_(x);if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$203,null], null), null).call(null,cljs.core.first(x));
} else
{return and__3413__auto__;
}
});})(my_assigned))
,doremi_script_app.doremi_core.assign_to_notes_line(my_assigned,doremi_script_app.doremi_core.assign_ornament_octaves(my_assigned,doremi_script_app.doremi_core.handle_slurs(my_assigned,stave)))))))));
});
doremi_script_app.doremi_core.map_even_items = (function map_even_items(f,coll){return cljs.core.map_indexed((function (p1__11648_SHARP_,p2__11649_SHARP_){if((cljs.core.mod(p1__11648_SHARP_,(2)) === (0)))
{var G__11651 = p2__11649_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11651) : f.call(null,G__11651));
} else
{return p2__11649_SHARP_;
}
}),coll);
});
doremi_script_app.doremi_core.handle_source = (function handle_source(accum,source){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$216,cljs.core.last(source));
});
doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","-","G","E#","Fb","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],["gs","as","fs","r","g","es","ff","e","c","f","af","cf","b","bf","ef","cs","ds","df","a","gf","bs","d"]);
doremi_script_app.doremi_core.lilypond_escape = (function lilypond_escape(x){if(cljs.core.truth_(x))
{return clojure.string.replace(x,/\{%/,"% {");
} else
{return null;
}
});
doremi_script_app.doremi_core.omit_time_signature_snippet = "\\once \\override Staff.TimeSignature #'stencil = ##f";
doremi_script_app.doremi_core.time_signature_snippet = (function time_signature_snippet(x){if(cljs.core.truth_(x))
{return ("\\time "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{return doremi_script_app.doremi_core.omit_time_signature_snippet;
}
});
doremi_script_app.doremi_core.print_headers = (function print_headers(accum){var composition = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(accum);var atts = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (composition){
return (function (p1__11652_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$192,p1__11652_SHARP_);
});})(composition))
,composition));var my_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,doremi_script_app.doremi_core.map_even_items(((function (composition,atts){
return (function (p1__11653_SHARP_){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(p1__11653_SHARP_));
});})(composition,atts))
,cljs.core.rest(atts)));var is_abc_composition = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$176,cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(my_map));var source = cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (composition,atts,my_map,is_abc_composition){
return (function (p1__11654_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$216,cljs.core.first(p1__11654_SHARP_));
});})(composition,atts,my_map,is_abc_composition))
,cljs.core.rest(composition))));var things_to_add = ("#(ly:set-option 'midi-extension \"mid\")\n\\version \"2.12.3\"\n\\include \"english.ly\"\n\\header{ \n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4126__auto__ = cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(my_map);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return ("\ntitle = \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)+"\"");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4126__auto__ = cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(my_map);if(cljs.core.truth_(temp__4126__auto__))
{var author = temp__4126__auto__;return ("\ncomposer = \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)+"\"");
} else
{return null;
}
})())+"}\n%{\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.lilypond_escape(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(accum)))+"\n%}\nmelody = {\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.time_signature_snippet(cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1(my_map)))+"\n\\clef treble\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((is_abc_composition)?("\\key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11656 = clojure.string.upper_case(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$2(my_map,"c"));return (doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1(G__11656) : doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,G__11656));
})())+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$2(my_map,"major")))))+"\n"):("\\key c \n\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$2(my_map,"major")))+"\n")))+"\\cadenzaOn\n");return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222], null),cljs.core.str,things_to_add),cljs.core.constant$keyword$223,my_map);
});
doremi_script_app.doremi_core.pitch__GT_lilypond_pitch = cljs.core.PersistentHashMap.fromArrays(["d","n","G#","R#","Pb","N#","-","G","M","S","mb","R","P","D#","S#","r","g","P#","N","Sb","m","D"],["af","bf","es","ds","gf","bs","r","e","fs","c","ff","d","g","as","cs","df","ef","gs","b","cf","f","a"]);
doremi_script_app.doremi_core.beat__GT_beat_divisions = (function beat__GT_beat_divisions(beat){var _PERCENT_ = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,null,cljs.core.constant$keyword$179,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,beat))));return _PERCENT_;
});
doremi_script_app.doremi_core.start_beat = (function start_beat(accum,beat){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$224,doremi_script_app.doremi_core.beat__GT_beat_divisions(beat),cljs.core.array_seq([cljs.core.constant$keyword$225,cljs.core.PersistentVector.EMPTY], 0));
});
/**
* maps barline-type field for barlines
*/
doremi_script_app.doremi_core.barline__GT_lilypond_barline = (function barline__GT_lilypond_barline(p__11657){var vec__11660 = p__11657;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660,(0),null);var vec__11661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660,(1),null);var barline_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11661,(0),null);var my_map = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$226,"\\bar \".|\"",cljs.core.constant$keyword$227,"\\bar \"|.\" ",cljs.core.constant$keyword$228,"\\bar \"||\" ",cljs.core.constant$keyword$229,"\\bar \"|\"",cljs.core.constant$keyword$230,"\\bar \"|:\"",cljs.core.constant$keyword$231,"\\bar \":|\""], null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(my_map,barline_type,cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(my_map)))+" ");
});
doremi_script_app.doremi_core.octave_number__GT_lilypond_octave = (function octave_number__GT_lilypond_octave(num){var tick = "'";var comma = ",";if((num == null))
{return tick;
} else
{if((num >= (0)))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((num + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tick)));
} else
{return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(((- num) - (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(comma)));

}
}
});
doremi_script_app.doremi_core.start_pitch = (function start_pitch(accum,pitch){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$233,cljs.core.array_seq([cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,pitch,cljs.core.constant$keyword$236,(1)], null)], 0));
});
doremi_script_app.doremi_core.start_line = (function start_line(accum,obj){return accum;
});
doremi_script_app.doremi_core.save_barline = (function save_barline(accum,barline){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$237,doremi_script_app.doremi_core.barline__GT_lilypond_barline(barline));
});
doremi_script_app.doremi_core.lilypond_headers = (function lilypond_headers(accum,composition){return accum;
});
doremi_script_app.doremi_core.ratio_QMARK_ = (function ratio_QMARK_(x){return (cljs.core.mod(x,(1)) === (0));
});
/**
* ratio->lilypond-durations(3 4) => ['8.']   Ratio is ratio of 1/4 note
*/
doremi_script_app.doremi_core.ratio__GT_lilypond_durations = (function ratio__GT_lilypond_durations(my_numerator,subdivisions_in_beat){var _PERCENT_ = (function (){var my_ratio = (my_numerator / subdivisions_in_beat);if(!(doremi_script_app.doremi_core.ratio_QMARK_(my_ratio)))
{return new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2"], null),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2."], null),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","1"], null)], null).call(null,my_ratio,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(my_numerator,"4")));
} else
{var my_table = cljs.core.PersistentHashMap.fromArrays([((5) / (8)),((7) / (8)),((7) / (32)),((1) / (2)),(1),((1) / (8)),((3) / (32)),((5) / (16)),((1) / (32)),((7) / (16)),((11) / (16)),((1) / (4)),((3) / (8)),((3) / (64)),((7) / (4)),((1) / (16)),((3) / (16)),((5) / (32)),((5) / (64)),((5) / (128)),((5) / (4)),((3) / (4))],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8","32"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8.."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64","128."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","64"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","32."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8","64."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","8."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32","128"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64","256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128","512"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","16"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8."], null)]);var new_denominator = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [(128),null,(1),null,(4),null,(512),null,(32),null,(256),null,(64),null,(2),null,(16),null,(8),null], null), null).call(null,subdivisions_in_beat))?subdivisions_in_beat:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),subdivisions_in_beat))?(2):(((subdivisions_in_beat < (8)))?(4):(((subdivisions_in_beat < (16)))?(8):(((subdivisions_in_beat < (32)))?(16):(((subdivisions_in_beat < (64)))?(32):(32)
))))));var new_ratio = (my_numerator / new_denominator);return cljs.core.get.cljs$core$IFn$_invoke$arity$3(my_table,new_ratio,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(my_numerator,cljs.core.cycle((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_denominator))))));
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.tuplet_numerator_for_odd_subdivisions = (function tuplet_numerator_for_odd_subdivisions(subdivisions_in_beat){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),subdivisions_in_beat))
{return (2);
} else
{if((subdivisions_in_beat < (8)))
{return (4);
} else
{if((subdivisions_in_beat < (16)))
{return (8);
} else
{if((subdivisions_in_beat < (32)))
{return (16);
} else
{if((subdivisions_in_beat < (64)))
{return (32);
} else
{return (32);

}
}
}
}
}
});
doremi_script_app.doremi_core.beam_beat_pitches = (function beam_beat_pitches(str_array){var _PERCENT_ = (function (){var last_idx = (cljs.core.count(str_array) - (1));if(cljs.core.truth_((function (){var or__3425__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(str_array));if(or__3425__auto__)
{return or__3425__auto__;
} else
{return cljs.core.some(((function (or__3425__auto__,last_idx){
return (function (p1__11662_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("r",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__11662_SHARP_,(0),(1)));
});})(or__3425__auto__,last_idx))
,str_array);
}
})()))
{return str_array;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(str_array,(0),clojure.string.replace_first(cljs.core.first(str_array),/(\d+\.*)/,"$1["),cljs.core.array_seq([last_idx,clojure.string.replace_first(cljs.core.last(str_array),/(\d+\.*)/,"$1]")], 0));
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.enclose_beat_in_times = (function enclose_beat_in_times(subdivisions,beat_str){var _PERCENT_ = ((cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(0),null,(128),null,(1),null,(4),null,(32),null,(64),null,(2),null,(16),null,(8),null], null), null).call(null,subdivisions)))?("\\times "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.tuplet_numerator_for_odd_subdivisions(subdivisions))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subdivisions)+"{ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(beat_str)+" } "):beat_str);return _PERCENT_;
});
doremi_script_app.doremi_core.obj = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,"C"], null)], null)], null);
doremi_script_app.doremi_core.finish_measure = (function finish_measure(accum){return accum;
});
doremi_script_app.doremi_core.start_measure = (function start_measure(accum,obj){var last_barline1 = (function (){var or__3425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.constant$keyword$237);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return "\\bar \"|\"";
}
})();var last_barline2 = (cljs.core.truth_(cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(accum))?(function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":in-notes-line-beginning"], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["omitting barline"], 0));
return null;
})():last_barline1);var last_barline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.constant$keyword$237);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$234,null,cljs.core.array_seq([cljs.core.constant$keyword$237,null], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222], null),((function (last_barline1,last_barline2,last_barline){
return (function (p1__11663_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11663_SHARP_)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_barline));
});})(last_barline1,last_barline2,last_barline))
);
});
doremi_script_app.doremi_core.finish_beat = (function finish_beat(accum){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$222,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(accum))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.enclose_beat_in_times(cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(accum),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",doremi_script_app.doremi_core.beam_beat_pitches(cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(accum)))))),cljs.core.array_seq([cljs.core.constant$keyword$225,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$224,(0)], 0));
});
doremi_script_app.doremi_core.chord_snippet = (function chord_snippet(obj){var chord = cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11664_SHARP_){return (cljs.core.vector_QMARK_(p1__11664_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$213,cljs.core.first(p1__11664_SHARP_)));
}),obj)));if(cljs.core.truth_(chord))
{return ("^\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)+"\"");
} else
{return null;
}
});
doremi_script_app.doremi_core.finish_dashes = (function finish_dashes(accum){var dash = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(accum);var divisions = (function (){var G__11666 = cljs.core.constant$keyword$224;return (accum.cljs$core$IFn$_invoke$arity$1 ? accum.cljs$core$IFn$_invoke$arity$1(G__11666) : accum.call(null,G__11666));
})();var micro_beats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240], null));var ary = doremi_script_app.doremi_core.ratio__GT_lilypond_durations(micro_beats,divisions);var first_duration = cljs.core.first(ary);var first_rest = ("r"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_duration)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.chord_snippet(dash)));var rests = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_rest)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"r"),cljs.core.rest(ary)))));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225], null),cljs.core.conj,rests);
});
doremi_script_app.doremi_core.start_dash = (function start_dash(accum,dash){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$241,cljs.core.array_seq([cljs.core.constant$keyword$240,(1),cljs.core.constant$keyword$239,dash], 0));
});
doremi_script_app.doremi_core.get_ending = (function get_ending(obj){return cljs.core.last(doremi_script_app.doremi_core.get_attribute(obj,cljs.core.constant$keyword$215));
});
doremi_script_app.doremi_core.get_syl = (function get_syl(pitch){return cljs.core.last(doremi_script_app.doremi_core.get_attribute(pitch,cljs.core.constant$keyword$209));
});
doremi_script_app.doremi_core.ending_snippet = (function ending_snippet(obj){var temp__4126__auto__ = doremi_script_app.doremi_core.get_ending(obj);if(cljs.core.truth_(temp__4126__auto__))
{var ending = temp__4126__auto__;return ("^\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ending)+"\"");
} else
{return null;
}
});
doremi_script_app.doremi_core.normalized_pitch__GT_kommal = (function normalized_pitch__GT_kommal(x){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, ["D","Db","E","Eb","A","Ab","B","Bb"], null),x,x);
});
doremi_script_app.doremi_core.pitch_and_octave = (function pitch_and_octave(pitch){var pitch2 = (cljs.core.truth_(doremi_script_app.doremi_core.get_attribute(pitch,cljs.core.constant$keyword$178))?doremi_script_app.doremi_core.normalized_pitch__GT_kommal(cljs.core.second(pitch)):cljs.core.second(pitch));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11668 = pitch2;return (doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1(G__11668) : doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,G__11668));
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.octave_number__GT_lilypond_octave(cljs.core.second(doremi_script_app.doremi_core.get_attribute(pitch,cljs.core.constant$keyword$207)))));
});
doremi_script_app.doremi_core.get_ornament_pitches = (function get_ornament_pitches(ornament){return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(ornament));
});
doremi_script_app.doremi_core.grace_note_pitches = (function grace_note_pitches(ornament){var pitches = doremi_script_app.doremi_core.get_ornament_pitches(ornament);var my_count = cljs.core.count(pitches);var items = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pitches,my_count){
return (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.pitch_and_octave(x))+"16");
});})(pitches,my_count))
,pitches));var items2 = (((my_count > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(items,(0),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,(0)))+"["),cljs.core.array_seq([(my_count - (1)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(items))+"]")], 0)):items);return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",items2);
});
doremi_script_app.doremi_core.finish_pitch = (function finish_pitch(accum){

var pitch = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(accum));var syl = doremi_script_app.doremi_core.get_syl(pitch);var begin_slur = (cljs.core.truth_(cljs.core.some(((function (pitch,syl){
return (function (p1__11669_SHARP_){return (cljs.core.vector_QMARK_(p1__11669_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$180,cljs.core.first(p1__11669_SHARP_)));
});})(pitch,syl))
,pitch))?"(":null);var _ = (cljs.core.truth_(begin_slur)?(function (){var G__11682 = cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(accum);var G__11683 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11682,G__11683) : cljs.core.reset_BANG_.call(null,G__11682,G__11683));
})():null);var end_slur = (cljs.core.truth_(cljs.core.some(((function (pitch,syl,begin_slur,_){
return (function (p1__11670_SHARP_){return (cljs.core.vector_QMARK_(p1__11670_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$182,cljs.core.first(p1__11670_SHARP_)));
});})(pitch,syl,begin_slur,_))
,pitch))?")":null);var ___$1 = (cljs.core.truth_(end_slur)?(function (){var G__11684 = cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(accum);var G__11685 = false;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11684,G__11685) : cljs.core.reset_BANG_.call(null,G__11684,G__11685));
})():null);var my_pitch_and_octave = doremi_script_app.doremi_core.pitch_and_octave(pitch);var divisions = (function (){var G__11686 = cljs.core.constant$keyword$224;return (accum.cljs$core$IFn$_invoke$arity$1 ? accum.cljs$core$IFn$_invoke$arity$1(G__11686) : accum.call(null,G__11686));
})();var after_ornament = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions){
return (function (p1__11672_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$195,cljs.core.last(p1__11672_SHARP_));
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions){
return (function (p1__11671_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$194,p1__11671_SHARP_);
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions))
,pitch)));var before_ornament = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament){
return (function (p1__11674_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$196,cljs.core.last(p1__11674_SHARP_));
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament){
return (function (p1__11673_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$194,p1__11673_SHARP_);
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament))
,pitch)));var micro_beats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,cljs.core.constant$keyword$236], null));var durations = doremi_script_app.doremi_core.ratio__GT_lilypond_durations(micro_beats,divisions);var first_pitch = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(before_ornament)?("\\grace {"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.grace_note_pitches(before_ornament))+"}"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(after_ornament)?"\\afterGrace ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(my_pitch_and_octave)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(durations))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_slur)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(begin_slur)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.chord_snippet(pitch))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.ending_snippet(pitch))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(doremi_script_app.doremi_core.get_attribute(pitch,cljs.core.constant$keyword$214))?"\\mordent":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3413__auto__ = after_ornament;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not((function (){var G__11687 = cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(accum);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11687) : cljs.core.deref.call(null,G__11687));
})());
} else
{return and__3413__auto__;
}
})())?"(":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(after_ornament)?("{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.grace_note_pitches(after_ornament))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3413__auto__ = after_ornament;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not((function (){var G__11688 = cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(accum);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11688) : cljs.core.deref.call(null,G__11688));
})());
} else
{return and__3413__auto__;
}
})())?")":null))+"}"):null)));var pitches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(durations)))?first_pitch:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_pitch)+"~"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("~",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,my_pitch_and_octave),cljs.core.rest(durations))))));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225], null),cljs.core.conj,pitches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243], null),cljs.core.str,syl," ");
});
doremi_script_app.doremi_core.finish_line = (function finish_line(accum){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222], null),cljs.core.str," ",(function (){var G__11690 = cljs.core.constant$keyword$237;return (accum.cljs$core$IFn$_invoke$arity$1 ? accum.cljs$core$IFn$_invoke$arity$1(G__11690) : accum.call(null,G__11690));
})(),"\\break",cljs.core.array_seq([" \n"], 0)),cljs.core.constant$keyword$237,null);
});
doremi_script_app.doremi_core.transpose_snippet = (function transpose_snippet(my_key){var _PERCENT_ = (function (){if((my_key == null))
{return "";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("c",clojure.string.lower_case(my_key)))
{return "";
} else
{return ("\\transpose c' "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11692 = clojure.string.upper_case(my_key);return (doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.cljs$core$IFn$_invoke$arity$1(G__11692) : doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,G__11692));
})())+"'");

}
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.lilypond_at_eof = (function lilypond_at_eof(accum){var is_abc_composition = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$176,cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(accum)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222], null),cljs.core.str," ",cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(accum),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}","text = \\lyricmode {",cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(accum),"}","\\score{",((!(is_abc_composition))?doremi_script_app.doremi_core.transpose_snippet(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(accum))):null),"<<","\\new Voice = \"one\" {","\\set midiInstrument = #\"flute\"","\\melody","}","\\new Lyrics \\lyricsto \"one\" \\text",">>","\\layout {","\\context {","\\Score","}","}","\\midi {","\\context {","\\Score","tempoWholesPerMinute = #(ly:make-moment 100 4)","}","}","}"], null)));
});
doremi_script_app.doremi_core.lilypond_transition = (function lilypond_transition(accum,obj){var token = cljs.core.first(obj);var cur_state = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(accum);var _ = null
;var G__11694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,token], null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$244], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$247], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$222,"No music entered",cljs.core.array_seq([cljs.core.constant$keyword$232,cljs.core.constant$keyword$247], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$247], null),G__11694))
{return doremi_script_app.doremi_core.lilypond_at_eof(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$248], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$249);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$248], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$249);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,cljs.core.constant$keyword$179], null),G__11694))
{return doremi_script_app.doremi_core.start_pitch(accum,obj);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$248], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.print_headers(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$249);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$248], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$249);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,cljs.core.constant$keyword$205], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_line(accum,obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$238);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$204], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$247], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.lilypond_at_eof(doremi_script_app.doremi_core.finish_line(accum)),cljs.core.constant$keyword$232,cljs.core.constant$keyword$247);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$211], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doremi_script_app.doremi_core.start_measure(accum,obj),cljs.core.constant$keyword$234,null,cljs.core.array_seq([cljs.core.constant$keyword$232,cljs.core.constant$keyword$250], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$248], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$249);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$179], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_pitch(doremi_script_app.doremi_core.finish_dashes(accum),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$233);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$179], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_pitch(doremi_script_app.doremi_core.finish_pitch(accum),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$233);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$192], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$246);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$210], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_beat(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum)),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$251);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,cljs.core.constant$keyword$197], null),G__11694))
{return doremi_script_app.doremi_core.start_dash(accum,obj);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$198], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.save_barline(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum)),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$250);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$211], null),G__11694))
{return doremi_script_app.doremi_core.start_measure(accum,obj);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$198], null),G__11694))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,cljs.core.first(cljs.core.second(obj))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$250);
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$250,cljs.core.array_seq([cljs.core.constant$keyword$237,doremi_script_app.doremi_core.barline__GT_lilypond_barline(obj)], 0));
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,cljs.core.constant$keyword$247], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_beat(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$247);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$197], null),G__11694))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240], null),cljs.core.inc);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$198], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.save_barline(doremi_script_app.doremi_core.finish_measure(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum))),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$250);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$247], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.lilypond_at_eof(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$247);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$210], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_beat(accum,obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$251);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$204], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$198], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.save_barline(accum,obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$250);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,cljs.core.constant$keyword$193], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.lilypond_headers(accum,obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$246);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$244], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(accum),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$244], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$204], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum))),cljs.core.constant$keyword$232,cljs.core.constant$keyword$245);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,cljs.core.constant$keyword$210], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.start_beat(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_dashes(accum)),obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$251);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,cljs.core.constant$keyword$216], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.handle_source(accum,obj),cljs.core.constant$keyword$232,cljs.core.constant$keyword$246);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$247], null),G__11694))
{return doremi_script_app.doremi_core.lilypond_at_eof(doremi_script_app.doremi_core.finish_line(doremi_script_app.doremi_core.finish_beat(doremi_script_app.doremi_core.finish_pitch(accum))));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$253], null),G__11694))
{return accum;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$197], null),G__11694))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,cljs.core.constant$keyword$236], null),cljs.core.inc);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$192], null),G__11694))
{return accum;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$244], null),G__11694))
{return accum;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$253], null),G__11694))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.constant$keyword$232,cljs.core.constant$keyword$238);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,token], null)))));

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
doremi_script_app.doremi_core.to_lilypond = (function to_lilypond(composition,txt){
var headers_printed_QMARK_ = (function (){var G__11699 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11699) : cljs.core.atom.call(null,G__11699));
})();var started_pitch_QMARK_ = (function (){var G__11700 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11700) : cljs.core.atom.call(null,G__11700));
})();return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(doremi_script_app.doremi_core.lilypond_transition,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$232,cljs.core.constant$keyword$151,cljs.core.constant$keyword$254,false,cljs.core.constant$keyword$242,(function (){var G__11701 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11701) : cljs.core.atom.call(null,G__11701));
})(),cljs.core.constant$keyword$243,"",cljs.core.constant$keyword$216,txt,cljs.core.constant$keyword$222,"",cljs.core.constant$keyword$193,composition], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.tree_seq(((function (headers_printed_QMARK_,started_pitch_QMARK_){
return (function (p1__11695_SHARP_){var and__3413__auto__ = cljs.core.vector_QMARK_(p1__11695_SHARP_);if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$193,null,cljs.core.constant$keyword$204,null,cljs.core.constant$keyword$205,null,cljs.core.constant$keyword$248,null], null), null).call(null,cljs.core.first(p1__11695_SHARP_));
} else
{return and__3413__auto__;
}
});})(headers_printed_QMARK_,started_pitch_QMARK_))
,cljs.core.identity,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(composition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247], null)))));
});
doremi_script_app.doremi_core.attribute_section__GT_map = (function attribute_section__GT_map(x){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,doremi_script_app.doremi_core.map_even_items((function (p1__11702_SHARP_){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(p1__11702_SHARP_));
}),cljs.core.rest(x)));
});
doremi_script_app.doremi_core.default_kind = cljs.core.constant$keyword$168;
doremi_script_app.doremi_core.doremi_text__GT_parsed_aux = (function doremi_text__GT_parsed_aux(txt,kind){var _PERCENT_ = (function (){var parsed = (function (){var G__11707 = txt;var G__11708 = kind;return (doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2 ? doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2(G__11707,G__11708) : doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,G__11707,G__11708));
})();if(cljs.core.truth_((function (){var G__11709 = parsed;return (doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11709) : doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,G__11709));
})()))
{return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$255,txt,cljs.core.constant$keyword$256,null,cljs.core.constant$keyword$257,null,cljs.core.constant$keyword$258,(function (){var G__11710 = parsed;return (doremi_script_app.doremi_core.format_instaparse_errors.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.format_instaparse_errors.cljs$core$IFn$_invoke$arity$1(G__11710) : doremi_script_app.doremi_core.format_instaparse_errors.call(null,G__11710));
})()], null);
} else
{var collapsed_parse_tree = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$248,z))
{return doremi_script_app.doremi_core.collapse_stave(z);
} else
{return z;
}
});})(parsed))
,parsed));var _ = null
;var lilypond = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$222,"lilypond here"], null);return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$255,txt,cljs.core.constant$keyword$257,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(lilypond),cljs.core.constant$keyword$256,collapsed_parse_tree,cljs.core.constant$keyword$259,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(lilypond),cljs.core.constant$keyword$258,null], null);
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.doremi_text__GT_parsed = (function() {
var doremi_text__GT_parsed = null;
var doremi_text__GT_parsed__1 = (function (txt){return doremi_script_app.doremi_core.doremi_text__GT_parsed_aux(txt,doremi_script_app.doremi_core.default_kind);
});
var doremi_text__GT_parsed__2 = (function (txt,kind){return doremi_script_app.doremi_core.doremi_text__GT_parsed_aux(txt,kind);
});
doremi_text__GT_parsed = function(txt,kind){
switch(arguments.length){
case 1:
return doremi_text__GT_parsed__1.call(this,txt);
case 2:
return doremi_text__GT_parsed__2.call(this,txt,kind);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doremi_text__GT_parsed.cljs$core$IFn$_invoke$arity$1 = doremi_text__GT_parsed__1;
doremi_text__GT_parsed.cljs$core$IFn$_invoke$arity$2 = doremi_text__GT_parsed__2;
return doremi_text__GT_parsed;
})()
;
doremi_script_app.doremi_core.doremi_text__GT_lilypond = (function doremi_text__GT_lilypond(txt,kind){var _PERCENT_ = (function (){
var parsed = (function (){var G__11714 = txt;var G__11715 = kind;return (doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2 ? doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2(G__11714,G__11715) : doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,G__11714,G__11715));
})();if(cljs.core.truth_((function (){var G__11716 = parsed;return (doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11716) : doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,G__11716));
})()))
{return parsed;
} else
{var collapsed_parse_tree = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$248,z))
{return doremi_script_app.doremi_core.collapse_stave(z);
} else
{return z;
}
});})(parsed))
,parsed));var _ = null
;return cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.to_lilypond(collapsed_parse_tree,txt));
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.test_dialect_normalization = (function test_dialect_normalization(){var abc_str = ("D\n|CDEF# GG#|");var sargam_str = ("R.\n |SRGM PP#|");var hindi_str = ("\u0938\u0930|\n _");var doremi_str = "drmf sltd";cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hindi raw parse results"], 0));
doremi_script_app.utils.pprint(doremi_script_app.doremi_core.parse(hindi_str,null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hindi normalized"], 0));
doremi_script_app.utils.pprint((function (){var G__11723 = hindi_str;var G__11724 = null;return (doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2 ? doremi_script_app.doremi_core.doremi_text__GT_parse_tree.cljs$core$IFn$_invoke$arity$2(G__11723,G__11724) : doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,G__11723,G__11724));
})());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hindi to lilypond"], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([doremi_script_app.doremi_core.doremi_text__GT_lilypond(hindi_str,null)], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hindi to collapsed"], 0));
return null;

});

doremi_script_app.doremi_core._doremi_text_to_lilypond = (function _doremi_text_to_lilypond(txt){return doremi_script_app.doremi_core.doremi_text__GT_lilypond(null,txt);
});
doremi_script_app.doremi_core.doremi_text__GT_lilypond2 = (function doremi_text__GT_lilypond2(txt){return doremi_script_app.doremi_core.doremi_text__GT_lilypond(txt,null);
});
doremi_script_app.doremi_core.x = "C | A\n\n  | CDbDEb EFF#G AbABbB C#D#E#F#F |\n\n  | C#D#E#F# F :|\n\n  F#";
doremi_script_app.doremi_core.y = "Key: B\nMode:Lydian\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.z = "Title:me\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.x = "oh say can you see\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.v = "SSS";
doremi_script_app.doremi_core.j = "Key:G\n\n123";
doremi_script_app.doremi_core.testn = (function testn(x){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(x,"SRG"));return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var start__4320__auto__ = (new Date()).getTime();var ret__4321__auto__ = (function (){var G__11734 = s;return (doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree.cljs$core$IFn$_invoke$arity$1(G__11734) : doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree.call(null,G__11734));
})();cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__4320__auto__))+" msecs")], 0));
return ret__4321__auto__;
})()], 0));
});
/**
* Parse doremi text into parse tree or failure.
*/
doremi_script_app.doremi_core.doremi_text__GT_parse_tree = (function doremi_text__GT_parse_tree(txt,kind){var _PERCENT_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",txt))?"Nothing entered":((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),txt.indexOf("\t")))?"Tabs are not allowed":(function (){var parsed = doremi_script_app.doremi_core.parse(txt,kind);if(instaparse.core.failure_QMARK_(parsed))
{return parsed;
} else
{return doremi_script_app.doremi_core.remove_notation_system_prefixes(doremi_script_app.doremi_core.normalize_pitches(doremi_script_app.doremi_core.add_kind(parsed,kind)));
}
})()
));return _PERCENT_;
});
doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree = (function doremi_text__GT_collapsed_parse_tree(txt,kind){var _PERCENT_ = (function (){doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["doremi-text->collapsed-parse-tree kind is",kind], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["doremi-text->collapsed-parse-tree txt is",txt], 0));
var parsed = doremi_script_app.doremi_core.doremi_text__GT_parse_tree(txt,kind);doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["parsed:"], 0));
doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parsed], 0));
if(cljs.core.truth_((function (){var G__11738 = parsed;return (doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.parse_failed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11738) : doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,G__11738));
})()))
{return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$255,txt,cljs.core.constant$keyword$256,null,cljs.core.constant$keyword$257,null,cljs.core.constant$keyword$258,(function (){var G__11739 = parsed;return (doremi_script_app.doremi_core.format_instaparse_errors.cljs$core$IFn$_invoke$arity$1 ? doremi_script_app.doremi_core.format_instaparse_errors.cljs$core$IFn$_invoke$arity$1(G__11739) : doremi_script_app.doremi_core.format_instaparse_errors.call(null,G__11739));
})()], null);
} else
{var collapsed_parse_tree = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$248,z))
{return doremi_script_app.doremi_core.collapse_stave(z);
} else
{return z;
}
});})(parsed))
,parsed));var my_map = doremi_script_app.doremi_core.attribute_section__GT_map(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (collapsed_parse_tree,parsed){
return (function (p1__11735_SHARP_){return doremi_script_app.doremi_core.is_QMARK_(cljs.core.constant$keyword$192,p1__11735_SHARP_);
});})(collapsed_parse_tree,parsed))
,collapsed_parse_tree)));var _ = null
;var ___$1 = null
;return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$255,txt,cljs.core.constant$keyword$256,doremi_script_app.doremi_core.match_slurs(collapsed_parse_tree),cljs.core.constant$keyword$259,my_map,cljs.core.constant$keyword$258,null], null);
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.parse_failed_QMARK_ = (function parse_failed_QMARK_(x){return (instaparse.core.failure_QMARK_(x)) || (typeof x === 'string');
});
/**
* Tightens up instaparse error format by deleting newlines after 'of'
*/
doremi_script_app.doremi_core.format_instaparse_errors = (function format_instaparse_errors(z){var _PERCENT_ = ((typeof z === 'string')?z:(function (){var a = (function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_11743_11744 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_11743_11744,sb__4366__auto__){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_11743_11744,sb__4366__auto__))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([z], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11743_11744;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})();var vec__11742 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(a,/of/);var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11742,(0),null);var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11742,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left)+"of\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(right)?clojure.string.replace(right,/\n/," "):null)));
})());return _PERCENT_;
});