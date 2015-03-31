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
{doremi_script_app.doremi_core.parser = cljs.core.atom.call(null,null);
}
if(typeof doremi_script_app.doremi_core.grammar !== 'undefined')
{} else
{doremi_script_app.doremi_core.grammar = cljs.core.atom.call(null,null);
}
doremi_script_app.doremi_core.load_grammar = (function load_grammar(){doremi_script_app.utils.log.call(null,"load-grammar");
doremi_script_app.utils.log.call(null,"loading serialized-grammar from ebnf/grammar.txt");
if((cljs.core.deref.call(null,doremi_script_app.doremi_core.grammar) == null))
{return goog.net.XhrIo.send("ebnf/grammar.txt",(function load_grammar_callback(x){var data = cljs.core.js__GT_clj.call(null,x.target.getResponseText(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);cljs.core.reset_BANG_.call(null,doremi_script_app.doremi_core.grammar,cljs.reader.read_string.call(null,data));
cljs.core.reset_BANG_.call(null,doremi_script_app.doremi_core.parser,instaparse.core.parser.call(null,cljs.core.deref.call(null,doremi_script_app.doremi_core.grammar),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166),new cljs.core.Keyword(null,"total","total",1916810418),true));
return doremi_script_app.utils.log.call(null,"grammar initialized");
}));
} else
{return doremi_script_app.utils.log.call(null,"skipping reloading of grammar/parser");
}
});
doremi_script_app.doremi_core.load_grammar.call(null);
doremi_script_app.doremi_core.print_out_grammar = (function print_out_grammar(){var _STAR_print_dup_STAR_9336 = cljs.core._STAR_print_dup_STAR_;try{cljs.core._STAR_print_dup_STAR_ = true;
return doremi_script_app.utils.log.call(null,"using prn-str",(function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_9337_9338 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_9337_9338,sb__4366__auto__,_STAR_print_dup_STAR_9336){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_9337_9338,sb__4366__auto__,_STAR_print_dup_STAR_9336))
;
cljs.core.prn.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,doremi_script_app.doremi_core.parser)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9337_9338;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})());
}finally {cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_9336;
}});
doremi_script_app.doremi_core.parse = (function parse(x,kind){doremi_script_app.utils.log.call(null,"parse: kind is",kind);
if(cljs.core.truth_(kind))
{return instaparse.core.parse.call(null,cljs.core.deref.call(null,doremi_script_app.doremi_core.parser),x,new cljs.core.Keyword(null,"start","start",-355208981),kind);
} else
{return instaparse.core.parse.call(null,cljs.core.deref.call(null,doremi_script_app.doremi_core.parser),x);
}
});
doremi_script_app.doremi_core.parse_for_testing = (function parse_for_testing(x){var results = instaparse.core.parses.call(null,cljs.core.deref.call(null,doremi_script_app.doremi_core.parser),x);var _ = doremi_script_app.utils.log.call(null,results);var result = cljs.core.first.call(null,results);var more = cljs.core.second.call(null,results);if(cljs.core.truth_(more))
{cljs.core.println.call(null,("amiguous parse: first 5 results are"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.utils.log.call(null,cljs.core.take.call(null,(5),results)))));
} else
{}
return result;
});
doremi_script_app.doremi_core.is_QMARK_ = (function is_QMARK_(k,x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,k,cljs.core.first.call(null,x)));
});
doremi_script_app.doremi_core.is_notation_system_name_QMARK_ = (function is_notation_system_name_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["doremi",null,new cljs.core.Keyword(null,"abc","abc",-1232035677),null,new cljs.core.Keyword(null,"hindi","hindi",1404423907),null,new cljs.core.Keyword(null,"number","number",1570378438),null,"sargam",null,"number",null,"abc",null,new cljs.core.Keyword(null,"doremi","doremi",-1364976681),null,new cljs.core.Keyword(null,"sargam","sargam",1948058877),null,"hindi",null], null), null),x);
});
doremi_script_app.doremi_core.kind_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hindi-composition","hindi-composition",1352035361),null,new cljs.core.Keyword(null,"number-composition","number-composition",1582204584),null,new cljs.core.Keyword(null,"abc-composition","abc-composition",636048491),null,new cljs.core.Keyword(null,"doremi-composition","doremi-composition",470227660),null,new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166),null], null), null);
doremi_script_app.doremi_core.is_kind_QMARK_ = (function is_kind_QMARK_(x){return cljs.core.contains_QMARK_.call(null,doremi_script_app.doremi_core.kind_set,x);
});
/**
* Make a unique key using meta-data
*/
doremi_script_app.doremi_core.unique_for_assigned = (function unique_for_assigned(x){if(cljs.core.vector_QMARK_.call(null,x))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
var _PERCENT_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.meta.call(null,x),cljs.core.first.call(null,x)], null);if(cljs.core.vector_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
/**
* Tests whether x is in set my-set. Uses metadata to distinguish
*/
doremi_script_app.doremi_core.in_assigned_QMARK_ = (function in_assigned_QMARK_(my_set,x){return cljs.core.contains_QMARK_.call(null,my_set,doremi_script_app.doremi_core.unique_for_assigned.call(null,x));
});
/**
* Map sargam pitch to pitch in the key of 'C'.  M => F#
*/
doremi_script_app.doremi_core.sargam_pitch__GT_normalized_pitch = (function sargam_pitch__GT_normalized_pitch(x){return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["d","n","G#","R#","Pb","N#","G","M","S","mb","R","P","D#","S#","r","g","P#","N","Sb","m","D"],["Ab","Bb","E#","D#","Gb","B#","E","F#","C","Fb","D","G","A#","C#","Db","Eb","G#","B","Cb","F","A"]),x,"ERROR");
});
doremi_script_app.doremi_core.number_pitch__GT_normalized_pitch = (function number_pitch__GT_normalized_pitch(x){return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["3","4","5#","6#","6b","7b","7","2#","5","6","2b","3b","1","3#","5b","7#","2","4#","4b","1#"],["E","F","G#","A#","Ab","Bb","B","D#","G","A","Db","Eb","C","E#","Gb","B#","D","F#","Fb","C#"]),x,"ERROR");
});
doremi_script_app.doremi_core.doremi_pitch__GT_normalized_pitch = (function doremi_pitch__GT_normalized_pitch(x){return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["d","tb","s","f","fb","mb","sb","f#","t","d#","l#","lb","r","t#","l","m#","r#","m","rb","s#"],["C","Bb","G","F","Fb","Eb","Gb","F#","B","C#","A#","Ab","D","B#","A","E#","D#","E","Db","G#"]),clojure.string.lower_case.call(null,x),"ERROR");
});
doremi_script_app.doremi_core.hindi_pitch__GT_normalized_pitch = (function hindi_pitch__GT_normalized_pitch(x){return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["\u095A#","\u092E'","\u0938#","\u0930#","\u092E#","\u092E","\u092A","\u0927","\u0929","\u092A#","\u0938","\u0930","\u095A","\u0927#","\u0929#"],["E#","F#","C#","D#","F#","F","G","A","B","G#","C","D","E","A#","B#"]),x,"ERROR");
});
/**
* Change keyword to remove notation prefixes. :sargam-pitch -> :pitch
*/
doremi_script_app.doremi_core.remove_notation_system_prefix = (function remove_notation_system_prefix(k){if((k instanceof cljs.core.Keyword))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))))));
}
var _PERCENT_ = (function (){var ary = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);var prefix = cljs.core.first.call(null,ary);
if(doremi_script_app.doremi_core.is_notation_system_name_QMARK_.call(null,prefix))
{return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",cljs.core.rest.call(null,ary)));
} else
{return k;
}
})();if((_PERCENT_ instanceof cljs.core.Keyword))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.get_attribute = (function get_attribute(pitch,my_key){return cljs.core.some.call(null,(function (p1__9339_SHARP_){if(cljs.core.truth_(((cljs.core.vector_QMARK_.call(null,p1__9339_SHARP_))?cljs.core._EQ_.call(null,my_key,cljs.core.first.call(null,p1__9339_SHARP_)):null)))
{return p1__9339_SHARP_;
} else
{return null;
}
}),pitch);
});
doremi_script_app.doremi_core.make_it_kommal = (function make_it_kommal(pitch){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"pitch","pitch",1495126700),new cljs.core.Symbol(null,"pitch","pitch",-1159309069,null)))))));
}

var without_kommal = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9340_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"kommal-indicator","kommal-indicator",1108982591),p1__9340_SHARP_);
}),pitch));if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["E",null,"B",null,"A",null,"D",null], null), null).call(null,cljs.core.second.call(null,pitch))))
{return cljs.core.vec.call(null,cljs.core.update_in.call(null,without_kommal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.str,"b"));
} else
{return pitch;
}
});
doremi_script_app.doremi_core.apply_kommal_to_pitches = (function apply_kommal_to_pitches(original_tree){
var loc = clojure.zip.vector_zip.call(null,original_tree);var id = (0);while(true){
if(clojure.zip.end_QMARK_.call(null,loc))
{return clojure.zip.root.call(null,loc);
} else
{var current = clojure.zip.node.call(null,loc);if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute.call(null,current,new cljs.core.Keyword(null,"kommal-indicator","kommal-indicator",1108982591));
} else
{return and__3413__auto__;
}
})()))
{{
var G__9341 = clojure.zip.next.call(null,clojure.zip.edit.call(null,loc,doremi_script_app.doremi_core.make_it_kommal));
var G__9342 = id;
loc = G__9341;
id = G__9342;
continue;
}
} else
{{
var G__9343 = clojure.zip.next.call(null,loc);
var G__9344 = id;
loc = G__9343;
id = G__9344;
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
doremi_script_app.doremi_core.match_slurs = (function match_slurs(original_tree){var loc = clojure.zip.vector_zip.call(null,original_tree);var id = (0);while(true){
if(clojure.zip.end_QMARK_.call(null,loc))
{return clojure.zip.root.call(null,loc);
} else
{var current = clojure.zip.node.call(null,loc);if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute.call(null,current,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214));
} else
{return and__3413__auto__;
}
})()))
{{
var G__9345 = clojure.zip.next.call(null,clojure.zip.edit.call(null,loc,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"begin-slur-id","begin-slur-id",1138259461),id], null)));
var G__9346 = id;
loc = G__9345;
id = G__9346;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3413__auto__ = doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),current);if(and__3413__auto__)
{return doremi_script_app.doremi_core.get_attribute.call(null,current,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219));
} else
{return and__3413__auto__;
}
})()))
{{
var G__9347 = clojure.zip.next.call(null,clojure.zip.edit.call(null,loc,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-slur-id","end-slur-id",-1084931359),id], null)));
var G__9348 = (id + (1));
loc = G__9347;
id = G__9348;
continue;
}
} else
{{
var G__9349 = clojure.zip.next.call(null,loc);
var G__9350 = id;
loc = G__9349;
id = G__9350;
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
doremi_script_app.doremi_core.remove_notation_system_prefixes = (function remove_notation_system_prefixes(original_tree){if(cljs.core.vector_QMARK_.call(null,original_tree))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"original-tree","original-tree",-770745408,null)))))));
}
var _PERCENT_ = (function (){var loc = clojure.zip.vector_zip.call(null,original_tree);while(true){
if(clojure.zip.end_QMARK_.call(null,loc))
{return clojure.zip.root.call(null,loc);
} else
{{
var G__9351 = clojure.zip.next.call(null,(((cljs.core.vector_QMARK_.call(null,clojure.zip.node.call(null,loc))) && ((cljs.core.first.call(null,clojure.zip.node.call(null,loc)) instanceof cljs.core.Keyword)))?clojure.zip.edit.call(null,loc,((function (loc){
return (function (y){return cljs.core.assoc.call(null,y,(0),doremi_script_app.doremi_core.remove_notation_system_prefix.call(null,cljs.core.first.call(null,y)));
});})(loc))
):loc
));
loc = G__9351;
continue;
}
}
break;
}
})();if(cljs.core.vector_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
/**
* Replace pitch names to CDEFGAB style from the style found in
* the parse tree (number,sargam,hindi)
*/
doremi_script_app.doremi_core.normalize_pitches = (function normalize_pitches(original_tree){if(cljs.core.vector_QMARK_.call(null,original_tree))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"original-tree","original-tree",-770745408,null)))))));
}
var _PERCENT_ = (function (){var loc = clojure.zip.vector_zip.call(null,original_tree);while(true){
if(clojure.zip.end_QMARK_.call(null,loc))
{return clojure.zip.root.call(null,loc);
} else
{{
var G__9352 = clojure.zip.next.call(null,(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,clojure.zip.node.call(null,loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sargam-pitch","sargam-pitch",-2107598254),null,new cljs.core.Keyword(null,"sargam-ornament-pitch","sargam-ornament-pitch",-1767067014),null], null), null).call(null,cljs.core.first.call(null,clojure.zip.node.call(null,loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit.call(null,loc,((function (loc){
return (function (x){return cljs.core.assoc.call(null,x,(1),doremi_script_app.doremi_core.sargam_pitch__GT_normalized_pitch.call(null,cljs.core.second.call(null,x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,clojure.zip.node.call(null,loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doremi-pitch","doremi-pitch",-365316250),null,new cljs.core.Keyword(null,"doremi-ornament-pitch","doremi-ornament-pitch",623740191),null], null), null).call(null,cljs.core.first.call(null,clojure.zip.node.call(null,loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit.call(null,loc,((function (loc){
return (function (x){return cljs.core.assoc.call(null,x,(1),doremi_script_app.doremi_core.doremi_pitch__GT_normalized_pitch.call(null,cljs.core.second.call(null,x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,clojure.zip.node.call(null,loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hindi-ornament-pitch","hindi-ornament-pitch",284613895),null,new cljs.core.Keyword(null,"hindi-pitch","hindi-pitch",1693629831),null], null), null).call(null,cljs.core.first.call(null,clojure.zip.node.call(null,loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit.call(null,loc,((function (loc){
return (function (x){return cljs.core.assoc.call(null,x,(1),doremi_script_app.doremi_core.hindi_pitch__GT_normalized_pitch.call(null,cljs.core.second.call(null,x)));
});})(loc))
):(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,clojure.zip.node.call(null,loc));if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number-pitch","number-pitch",1882995717),null,new cljs.core.Keyword(null,"number-ornament-pitch","number-ornament-pitch",963060254),null], null), null).call(null,cljs.core.first.call(null,clojure.zip.node.call(null,loc)));
} else
{return and__3413__auto__;
}
})())?clojure.zip.edit.call(null,loc,((function (loc){
return (function (x){return cljs.core.assoc.call(null,x,(1),doremi_script_app.doremi_core.number_pitch__GT_normalized_pitch.call(null,cljs.core.second.call(null,x)));
});})(loc))
):loc
)))));
loc = G__9352;
continue;
}
}
break;
}
})();if(cljs.core.vector_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.add_kind = (function add_kind(x,kind){if(cljs.core.truth_(kind))
{var has_attributes = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),cljs.core.first.call(null,cljs.core.second.call(null,x)));if(has_attributes)
{return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.conj,"kind",kind);
} else
{return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),"kind",kind], null)], null),cljs.core.subvec.call(null,x,(1))));
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),cljs.core.first.call(null,cljs.core.second.call(null,cljs.core.second.call(null,x)))))
{var z = cljs.core.second.call(null,x);var attributes = cljs.core.first.call(null,cljs.core.second.call(null,x));return cljs.core.update_in.call(null,z,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.conj,"kind",cljs.core.first.call(null,z));
} else
{return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composition","composition",1834198617),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),"kind",cljs.core.first.call(null,cljs.core.second.call(null,x))], null)], null),cljs.core.rest.call(null,cljs.core.second.call(null,x))));

}
}
});
/**
* Returns the items, which are always the rest of the vector.
*/
doremi_script_app.doremi_core.items = (function items(x){
return cljs.core.next.call(null,x);
});
doremi_script_app.doremi_core.start_index = (function start_index(x){var x__$1 = instaparse.viz.span.call(null,x);if(cljs.core.truth_(x__$1))
{return cljs.core.first.call(null,x__$1);
} else
{return null;
}
});
doremi_script_app.doremi_core.line_column_map = (function line_column_map(my_map,my_line){
var line_start = doremi_script_app.doremi_core.start_index.call(null,my_line);return cljs.core.reduce.call(null,((function (line_start){
return (function (accum,obj){
var start_index = doremi_script_app.doremi_core.start_index.call(null,obj);var column = (cljs.core.truth_(start_index)?(start_index - line_start):null);var _ = null
;if(cljs.core.not.call(null,start_index))
{return accum;
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament","ornament",839474961),obj))
{var span = instaparse.viz.span.call(null,obj);var ornament_string_length = cljs.core.apply.call(null,cljs.core._,cljs.core.reverse.call(null,span));var column_for_after_ornament = (column - (1));var column_for_before_ornament = (column + ornament_string_length);return cljs.core.assoc.call(null,accum,column_for_after_ornament,cljs.core.conj.call(null,cljs.core.get.call(null,accum,column_for_after_ornament,cljs.core.PersistentVector.EMPTY),cljs.core.conj.call(null,obj,new cljs.core.Keyword(null,"after","after",594996914))),column_for_before_ornament,cljs.core.conj.call(null,cljs.core.get.call(null,accum,column_for_before_ornament,cljs.core.PersistentVector.EMPTY),cljs.core.conj.call(null,obj,new cljs.core.Keyword(null,"before","before",-1633692388))));
} else
{var column__$1 = (start_index - line_start);var ___$1 = null
;return cljs.core.assoc.call(null,accum,column__$1,cljs.core.conj.call(null,cljs.core.get.call(null,accum,column__$1,cljs.core.PersistentVector.EMPTY),obj));

}
}
});})(line_start))
,my_map,cljs.core.tree_seq.call(null,cljs.core.vector_QMARK_,cljs.core.identity,my_line));
});
doremi_script_app.doremi_core.takes_values_from_column_QMARK_ = (function takes_values_from_column_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dash","dash",23821356),null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),null,new cljs.core.Keyword(null,"barline","barline",-1705261636),null], null), null),x);
});
doremi_script_app.doremi_core.is_upper_dot_QMARK_ = (function is_upper_dot_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-line-dot","upper-line-dot",-722592126),null,new cljs.core.Keyword(null,"upper-line-two-dots","upper-line-two-dots",1064866352),null], null), null),cljs.core.first.call(null,x)));
});
doremi_script_app.doremi_core.is_dot_QMARK_ = (function is_dot_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"upper-line-dot","upper-line-dot",-722592126),null,new cljs.core.Keyword(null,"lower-line-two-dots","lower-line-two-dots",1757385828),null,new cljs.core.Keyword(null,"upper-line-two-dots","upper-line-two-dots",1064866352),null,new cljs.core.Keyword(null,"lower-line-dot","lower-line-dot",824568755),null], null), null),cljs.core.first.call(null,x));
});
doremi_script_app.doremi_core.is_lower_line_QMARK_ = (function is_lower_line_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lower-octave-line","lower-octave-line",-1995047883),null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),null], null), null),cljs.core.first.call(null,x)));
});
doremi_script_app.doremi_core.lines__GT_column_map = (function lines__GT_column_map(lines){return cljs.core.reduce.call(null,(function (accum,item){return doremi_script_app.doremi_core.line_column_map.call(null,accum,item);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,(function (p1__9353_SHARP_){return (doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),p1__9353_SHARP_)) || (doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),p1__9353_SHARP_));
}),lines)));
});
doremi_script_app.doremi_core.pitch__GT_octave = (function pitch__GT_octave(pitch){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145),cljs.core.first.call(null,pitch))) || (doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"pitch","pitch",-1159309069,null))),cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"pitch","pitch",1495126700),new cljs.core.Symbol(null,"pitch","pitch",-1159309069,null))))))));
}
var _PERCENT_ = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"upper-line-dot","upper-line-dot",-722592126),(1),new cljs.core.Keyword(null,"upper-line-two-dots","upper-line-two-dots",1064866352),(2),new cljs.core.Keyword(null,"lower-line-dot","lower-line-dot",824568755),(-1),new cljs.core.Keyword(null,"lower-line-two-dots","lower-line-two-dots",1757385828),(-2)], null),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.vector_QMARK_,pitch)))));if(cljs.core.integer_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.calculate_octave = (function calculate_octave(x){if(!((doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),x)) || (doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145),x))))
{return x;
} else
{var without_dots = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9354_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__9354_SHARP_)) && (doremi_script_app.doremi_core.is_dot_QMARK_.call(null,p1__9354_SHARP_));
}),x));var octave = doremi_script_app.doremi_core.pitch__GT_octave.call(null,x);return cljs.core.vec.call(null,cljs.core.conj.call(null,without_dots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953),octave], null)));
}
});
doremi_script_app.doremi_core.assign_ornament_octaves = (function assign_ornament_octaves(assigned,my_stave){var _PERCENT_ = (function (){
var column_map = doremi_script_app.doremi_core.lines__GT_column_map.call(null,cljs.core.filter.call(null,(function (p1__9355_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"upper-line","upper-line",-2145994610),p1__9355_SHARP_);
}),doremi_script_app.doremi_core.items.call(null,my_stave)));return cljs.core.vec.call(null,cljs.core.map.call(null,((function (column_map){
return (function map_fn(line){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"upper-line","upper-line",-2145994610),line))
{return clojure.walk.postwalk.call(null,((function (column_map){
return (function assign_dots_postwalk_fn(item){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament-pitch","ornament-pitch",-368279145),item))
{var column = (doremi_script_app.doremi_core.start_index.call(null,item) - doremi_script_app.doremi_core.start_index.call(null,line));var dots_from_upper_lines = cljs.core.remove.call(null,cljs.core.partial.call(null,doremi_script_app.doremi_core.in_assigned_QMARK_,cljs.core.deref.call(null,assigned)),cljs.core.filter.call(null,doremi_script_app.doremi_core.is_upper_dot_QMARK_,column_map.call(null,column,cljs.core.PersistentVector.EMPTY)));if(cljs.core.empty_QMARK_.call(null,dots_from_upper_lines))
{return item;
} else
{var fixed_dots = cljs.core.map.call(null,((function (column,dots_from_upper_lines,column_map){
return (function (x){if(doremi_script_app.doremi_core.is_upper_dot_QMARK_.call(null,x))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-upper-dot?","is-upper-dot?",2136147509,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
var _PERCENT_ = (((doremi_script_app.doremi_core.start_index.call(null,x) > doremi_script_app.doremi_core.start_index.call(null,item)))?new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upper-line-dot","upper-line-dot",-722592126)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lower-line-dot","lower-line-dot",824568755)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upper-line-two-dots","upper-line-two-dots",1064866352)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lower-line-two-dots","lower-line-two-dots",1757385828)], null)], true, false).call(null,x,"wtf"):x);if(doremi_script_app.doremi_core.is_dot_QMARK_.call(null,x))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-dot?","is-dot?",1883776031,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
return _PERCENT_;
});})(column,dots_from_upper_lines,column_map))
,dots_from_upper_lines);cljs.core.reset_BANG_.call(null,assigned,cljs.core.apply.call(null,cljs.core.conj,cljs.core.deref.call(null,assigned),cljs.core.map.call(null,doremi_script_app.doremi_core.unique_for_assigned,dots_from_upper_lines)));
return doremi_script_app.doremi_core.calculate_octave.call(null,cljs.core.apply.call(null,cljs.core.conj,item,fixed_dots));
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
})();if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"stave","stave",-1205874017),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.assign_syllables = (function assign_syllables(assigned,stave){var syls_to_apply = cljs.core.atom.call(null,cljs.core.mapcat.call(null,doremi_script_app.doremi_core.items,cljs.core.filter.call(null,(function (p1__9356_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),p1__9356_SHARP_);
}),stave)));var in_slur = cljs.core.atom.call(null,false);return cljs.core.map.call(null,((function (syls_to_apply,in_slur){
return (function (line){if(!(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),line)))
{return line;
} else
{return clojure.walk.postwalk.call(null,((function (syls_to_apply,in_slur){
return (function walk_fn(item){if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,syls_to_apply)))
{return item;
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),item))
{var syl = ((cljs.core.not.call(null,cljs.core.deref.call(null,in_slur)))?cljs.core.first.call(null,cljs.core.deref.call(null,syls_to_apply)):null);var ret_val = (cljs.core.truth_(syl)?cljs.core.conj.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syl","syl",1647686075),syl], null)):item);var has_begin_slur = cljs.core.some.call(null,((function (syl,ret_val,syls_to_apply,in_slur){
return (function (p1__9357_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214),p1__9357_SHARP_);
});})(syl,ret_val,syls_to_apply,in_slur))
,item);var has_end_slur = cljs.core.some.call(null,((function (syl,ret_val,has_begin_slur,syls_to_apply,in_slur){
return (function (p1__9358_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219),p1__9358_SHARP_);
});})(syl,ret_val,has_begin_slur,syls_to_apply,in_slur))
,item);if(cljs.core.truth_(syl))
{cljs.core.swap_BANG_.call(null,syls_to_apply,cljs.core.rest);
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
{cljs.core.reset_BANG_.call(null,in_slur,true);
} else
{if(cljs.core.truth_(has_end_slur))
{cljs.core.reset_BANG_.call(null,in_slur,false);
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
doremi_script_app.doremi_core.handle_slurs = (function handle_slurs(assigned,stave){return cljs.core.map.call(null,(function (line){if(!(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),line)))
{return line;
} else
{var pitch_positions = cljs.core.map.call(null,doremi_script_app.doremi_core.start_index,cljs.core.filter.call(null,(function (p1__9359_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),p1__9359_SHARP_);
}),cljs.core.tree_seq.call(null,cljs.core.vector_QMARK_,cljs.core.identity,line)));var end_slur_positions = cljs.core.map.call(null,doremi_script_app.doremi_core.start_index,cljs.core.filter.call(null,((function (pitch_positions){
return (function (p1__9360_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219),p1__9360_SHARP_);
});})(pitch_positions))
,cljs.core.tree_seq.call(null,cljs.core.vector_QMARK_,cljs.core.identity,line)));var begin_slur_positions = cljs.core.map.call(null,doremi_script_app.doremi_core.start_index,cljs.core.filter.call(null,((function (pitch_positions,end_slur_positions){
return (function (p1__9361_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214),p1__9361_SHARP_);
});})(pitch_positions,end_slur_positions))
,cljs.core.tree_seq.call(null,cljs.core.vector_QMARK_,cljs.core.identity,line)));var pitches_needing_begin_slurs = cljs.core.set.call(null,cljs.core.map.call(null,((function (pitch_positions,end_slur_positions,begin_slur_positions){
return (function (slur_position){return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._LT_,slur_position),pitch_positions));
});})(pitch_positions,end_slur_positions,begin_slur_positions))
,begin_slur_positions));var pitches_needing_end_slurs = cljs.core.set.call(null,cljs.core.map.call(null,((function (pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs){
return (function (slur_position){return cljs.core.last.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._GT_,slur_position),pitch_positions));
});})(pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs))
,end_slur_positions));return clojure.walk.postwalk.call(null,((function (pitch_positions,end_slur_positions,begin_slur_positions,pitches_needing_begin_slurs,pitches_needing_end_slurs){
return (function walk_line(item){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),item))
{var items_to_conj = cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_.call(null,pitches_needing_end_slurs,doremi_script_app.doremi_core.start_index.call(null,item)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-slur","end-slur",-980422219)], null):null),((cljs.core.contains_QMARK_.call(null,pitches_needing_begin_slurs,doremi_script_app.doremi_core.start_index.call(null,item)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214)], null):null)], null));if(cljs.core.truth_(cljs.core.not_empty.call(null,items_to_conj)))
{return cljs.core.apply.call(null,cljs.core.conj,item,items_to_conj);
} else
{return item;
}
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214),item))
{return null;
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219),item))
{return null;
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"beat","beat",-817854366),item))
{return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,item));
} else
{if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"measure","measure",-1857519826),item))
{return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,item));
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
doremi_script_app.doremi_core.assign_to_notes_line = (function assign_to_notes_line(assigned,stave){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),stave))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"stave","stave",-1205874017),new cljs.core.Symbol(null,"stave","stave",434657510,null)))))));
}
var _PERCENT_ = (function (){var column_map = doremi_script_app.doremi_core.lines__GT_column_map.call(null,doremi_script_app.doremi_core.items.call(null,stave));var notes_line = cljs.core.first.call(null,cljs.core.filter.call(null,((function (column_map){
return (function (p1__9362_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),p1__9362_SHARP_);
});})(column_map))
,doremi_script_app.doremi_core.items.call(null,stave)));var notes_line_start_index = doremi_script_app.doremi_core.start_index.call(null,notes_line);var line_starts = cljs.core.map.call(null,doremi_script_app.doremi_core.start_index,doremi_script_app.doremi_core.items.call(null,stave));var line_start_for_position = ((function (column_map,notes_line,notes_line_start_index,line_starts){
return (function line_start_for_position_fn(position){return cljs.core.last.call(null,cljs.core.filter.call(null,((function (column_map,notes_line,notes_line_start_index,line_starts){
return (function (x){return (position >= x);
});})(column_map,notes_line,notes_line_start_index,line_starts))
,line_starts));
});})(column_map,notes_line,notes_line_start_index,line_starts))
;var line_start_for_node = ((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position){
return (function line_start_for_node(node){return line_start_for_position.call(null,doremi_script_app.doremi_core.start_index.call(null,node));
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position))
;var column_for_node = ((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node){
return (function (node){var my_start_index = doremi_script_app.doremi_core.start_index.call(null,node);return (my_start_index - line_start_for_position.call(null,my_start_index));
});})(column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node))
;return cljs.core.vec.call(null,cljs.core.map.call(null,((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (line){if(!(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),line)))
{return line;
} else
{return clojure.walk.postwalk.call(null,((function (column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (item){
if((cljs.core.vector_QMARK_.call(null,item)) && (doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),item)) && ((doremi_script_app.doremi_core.start_index.call(null,item) < notes_line_start_index)))
{return item;
} else
{if((cljs.core.vector_QMARK_.call(null,item)) && (doremi_script_app.doremi_core.takes_values_from_column_QMARK_.call(null,cljs.core.first.call(null,item))))
{var column = column_for_node.call(null,item);var start_index = doremi_script_app.doremi_core.start_index.call(null,item);var nodes_in_this_column1 = cljs.core.filter.call(null,((function (column,start_index,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (x){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"upper-line-dot","upper-line-dot",-722592126),null,new cljs.core.Keyword(null,"lower-line-two-dots","lower-line-two-dots",1757385828),null,new cljs.core.Keyword(null,"tala","tala",-418845878),null,new cljs.core.Keyword(null,"chord","chord",-696248342),null,new cljs.core.Keyword(null,"upper-line-two-dots","upper-line-two-dots",1064866352),null,new cljs.core.Keyword(null,"ornament","ornament",839474961),null,new cljs.core.Keyword(null,"lower-line-dot","lower-line-dot",824568755),null,new cljs.core.Keyword(null,"mordent","mordent",254330457),null,new cljs.core.Keyword(null,"ending","ending",1236735934),null,new cljs.core.Keyword(null,"kommal-indicator","kommal-indicator",1108982591),null], null), null).call(null,cljs.core.first.call(null,x));
});})(column,start_index,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,cljs.core.remove.call(null,cljs.core.partial.call(null,doremi_script_app.doremi_core.in_assigned_QMARK_,cljs.core.deref.call(null,assigned)),column_map.call(null,column,cljs.core.PersistentVector.EMPTY)));var nodes_in_this_column = ((!(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),item)))?cljs.core.remove.call(null,((function (column,start_index,nodes_in_this_column1,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node){
return (function (p1__9363_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament","ornament",839474961),p1__9363_SHARP_);
});})(column,start_index,nodes_in_this_column1,column_map,notes_line,notes_line_start_index,line_starts,line_start_for_position,line_start_for_node,column_for_node))
,nodes_in_this_column1):nodes_in_this_column1);return doremi_script_app.doremi_core.calculate_octave.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,nodes_in_this_column))?(function (){cljs.core.reset_BANG_.call(null,assigned,cljs.core.apply.call(null,cljs.core.conj,cljs.core.deref.call(null,assigned),cljs.core.map.call(null,doremi_script_app.doremi_core.unique_for_assigned,nodes_in_this_column)));
return cljs.core.apply.call(null,cljs.core.conj,item,nodes_in_this_column);
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
})();if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"stave","stave",-1205874017),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
/**
* Assigns items based on indentation
*/
doremi_script_app.doremi_core.collapse_stave = (function collapse_stave(stave){
var my_assigned = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);return cljs.core.vec.call(null,doremi_script_app.doremi_core.apply_kommal_to_pitches.call(null,cljs.core.vec.call(null,doremi_script_app.doremi_core.assign_syllables.call(null,my_assigned,cljs.core.vec.call(null,cljs.core.remove.call(null,((function (my_assigned){
return (function (x){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,x);if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-line","upper-line",-2145994610),null,new cljs.core.Keyword(null,"lower-octave-line","lower-octave-line",-1995047883),null], null), null).call(null,cljs.core.first.call(null,x));
} else
{return and__3413__auto__;
}
});})(my_assigned))
,doremi_script_app.doremi_core.assign_to_notes_line.call(null,my_assigned,doremi_script_app.doremi_core.assign_ornament_octaves.call(null,my_assigned,doremi_script_app.doremi_core.handle_slurs.call(null,my_assigned,stave)))))))));
});
doremi_script_app.doremi_core.map_even_items = (function map_even_items(f,coll){return cljs.core.map_indexed.call(null,(function (p1__9364_SHARP_,p2__9365_SHARP_){if((cljs.core.mod.call(null,p1__9364_SHARP_,(2)) === (0)))
{return f.call(null,p2__9365_SHARP_);
} else
{return p2__9365_SHARP_;
}
}),coll);
});
doremi_script_app.doremi_core.handle_source = (function handle_source(accum,source){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.last.call(null,source));
});
doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","-","G","E#","Fb","E","C","F","Ab","Cb","B","Bb","Eb","C#","D#","Db","A","Gb","B#","D"],["gs","as","fs","r","g","es","ff","e","c","f","af","cf","b","bf","ef","cs","ds","df","a","gf","bs","d"]);
doremi_script_app.doremi_core.lilypond_escape = (function lilypond_escape(x){if(cljs.core.truth_(x))
{return clojure.string.replace.call(null,x,/\{%/,"% {");
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
doremi_script_app.doremi_core.print_headers = (function print_headers(accum){var composition = new cljs.core.Keyword(null,"composition","composition",1834198617).cljs$core$IFn$_invoke$arity$1(accum);var atts = cljs.core.first.call(null,cljs.core.filter.call(null,((function (composition){
return (function (p1__9366_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),p1__9366_SHARP_);
});})(composition))
,composition));var my_map = cljs.core.apply.call(null,cljs.core.array_map,doremi_script_app.doremi_core.map_even_items.call(null,((function (composition,atts){
return (function (p1__9367_SHARP_){return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,p1__9367_SHARP_));
});})(composition,atts))
,cljs.core.rest.call(null,atts)));var is_abc_composition = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"abc-composition","abc-composition",636048491),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(my_map));var source = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (composition,atts,my_map,is_abc_composition){
return (function (p1__9368_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.first.call(null,p1__9368_SHARP_));
});})(composition,atts,my_map,is_abc_composition))
,cljs.core.rest.call(null,composition))));var things_to_add = ("#(ly:set-option 'midi-extension \"mid\")\n\\version \"2.12.3\"\n\\include \"english.ly\"\n\\header{ \n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(my_map);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return ("\ntitle = \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)+"\"");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(my_map);if(cljs.core.truth_(temp__4126__auto__))
{var author = temp__4126__auto__;return ("\ncomposer = \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)+"\"");
} else
{return null;
}
})())+"}\n%{\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.lilypond_escape.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(accum)))+"\n%}\nmelody = {\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.time_signature_snippet.call(null,new cljs.core.Keyword(null,"timesignature","timesignature",-1238288068).cljs$core$IFn$_invoke$arity$1(my_map)))+"\n\\clef treble\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((is_abc_composition)?("\\key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$2(my_map,"c"))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$2(my_map,"major")))))+"\n"):("\\key c \n\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$2(my_map,"major")))+"\n")))+"\\cadenzaOn\n");return cljs.core.assoc.call(null,cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null),cljs.core.str,things_to_add),new cljs.core.Keyword(null,"my-map","my-map",889953183),my_map);
});
doremi_script_app.doremi_core.pitch__GT_lilypond_pitch = cljs.core.PersistentHashMap.fromArrays(["d","n","G#","R#","Pb","N#","-","G","M","S","mb","R","P","D#","S#","r","g","P#","N","Sb","m","D"],["af","bf","es","ds","gf","bs","r","e","fs","c","ff","d","g","as","cs","df","ef","gs","b","cf","f","a"]);
doremi_script_app.doremi_core.beat__GT_beat_divisions = (function beat__GT_beat_divisions(beat){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"beat","beat",-817854366),beat))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"beat","beat",-817854366),new cljs.core.Symbol(null,"beat","beat",822677161,null)))))));
}
var _PERCENT_ = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dash","dash",23821356),null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.vector_QMARK_,beat))));if(cljs.core.integer_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.start_beat = (function start_beat(accum,beat){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"divisions","divisions",-1442532790),doremi_script_app.doremi_core.beat__GT_beat_divisions.call(null,beat),new cljs.core.Keyword(null,"beat-pitches","beat-pitches",-1210809456),cljs.core.PersistentVector.EMPTY);
});
/**
* maps barline-type field for barlines
*/
doremi_script_app.doremi_core.barline__GT_lilypond_barline = (function barline__GT_lilypond_barline(p__9369){var vec__9372 = p__9369;var _ = cljs.core.nth.call(null,vec__9372,(0),null);var vec__9373 = cljs.core.nth.call(null,vec__9372,(1),null);var barline_type = cljs.core.nth.call(null,vec__9373,(0),null);var my_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reverse-final-barline","reverse-final-barline",261297166),"\\bar \".|\"",new cljs.core.Keyword(null,"final-barline","final-barline",-116438594),"\\bar \"|.\" ",new cljs.core.Keyword(null,"double-barline","double-barline",-1712290539),"\\bar \"||\" ",new cljs.core.Keyword(null,"single-barline","single-barline",2092234142),"\\bar \"|\"",new cljs.core.Keyword(null,"left-repeat","left-repeat",1255093286),"\\bar \"|:\"",new cljs.core.Keyword(null,"right-repeat","right-repeat",-1353752104),"\\bar \":|\""], null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,my_map,barline_type,new cljs.core.Keyword(null,"single-barline","single-barline",2092234142).cljs$core$IFn$_invoke$arity$1(my_map)))+" ");
});
doremi_script_app.doremi_core.octave_number__GT_lilypond_octave = (function octave_number__GT_lilypond_octave(num){var tick = "'";var comma = ",";if((num == null))
{return tick;
} else
{if((num >= (0)))
{return clojure.string.join.call(null,cljs.core.take.call(null,(num + (1)),cljs.core.repeat.call(null,tick)));
} else
{return clojure.string.join.call(null,cljs.core.take.call(null,((- num) - (1)),cljs.core.repeat.call(null,comma)));

}
}
});
doremi_script_app.doremi_core.start_pitch = (function start_pitch(accum,pitch){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),pitch,new cljs.core.Keyword(null,"micro-beats","micro-beats",125892548),(1)], null));
});
doremi_script_app.doremi_core.start_line = (function start_line(accum,obj){return accum;
});
doremi_script_app.doremi_core.save_barline = (function save_barline(accum,barline){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233),doremi_script_app.doremi_core.barline__GT_lilypond_barline.call(null,barline));
});
doremi_script_app.doremi_core.lilypond_headers = (function lilypond_headers(accum,composition){return accum;
});
doremi_script_app.doremi_core.ratio_QMARK_ = (function ratio_QMARK_(x){return (cljs.core.mod.call(null,x,(1)) === (0));
});
/**
* ratio->lilypond-durations(3 4) => ['8.']   Ratio is ratio of 1/4 note
*/
doremi_script_app.doremi_core.ratio__GT_lilypond_durations = (function ratio__GT_lilypond_durations(my_numerator,subdivisions_in_beat){if(cljs.core.integer_QMARK_.call(null,my_numerator))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"my-numerator","my-numerator",19515672,null)))))));
}
if(cljs.core.integer_QMARK_.call(null,subdivisions_in_beat))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"subdivisions-in-beat","subdivisions-in-beat",-454034185,null)))))));
}
var _PERCENT_ = (function (){var my_ratio = (my_numerator / subdivisions_in_beat);if(!(doremi_script_app.doremi_core.ratio_QMARK_.call(null,my_ratio)))
{return new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2"], null),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2."], null),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","1"], null)], null).call(null,my_ratio,cljs.core.vec.call(null,cljs.core.repeat.call(null,my_numerator,"4")));
} else
{var my_table = cljs.core.PersistentHashMap.fromArrays([((5) / (8)),((7) / (8)),((7) / (32)),((1) / (2)),(1),((1) / (8)),((3) / (32)),((5) / (16)),((1) / (32)),((7) / (16)),((11) / (16)),((1) / (4)),((3) / (8)),((3) / (64)),((7) / (4)),((1) / (16)),((3) / (16)),((5) / (32)),((5) / (64)),((5) / (128)),((5) / (4)),((3) / (4))],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8","32"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8.."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64","128."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","64"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","32."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8","64."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","8."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["32","128"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["64","256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["128","512"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","16"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8."], null)]);var new_denominator = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [(128),null,(1),null,(4),null,(512),null,(32),null,(256),null,(64),null,(2),null,(16),null,(8),null], null), null).call(null,subdivisions_in_beat))?subdivisions_in_beat:((cljs.core._EQ_.call(null,(3),subdivisions_in_beat))?(2):(((subdivisions_in_beat < (8)))?(4):(((subdivisions_in_beat < (16)))?(8):(((subdivisions_in_beat < (32)))?(16):(((subdivisions_in_beat < (64)))?(32):(32)
))))));var new_ratio = (my_numerator / new_denominator);return cljs.core.get.call(null,my_table,new_ratio,cljs.core.vec.call(null,cljs.core.take.call(null,my_numerator,cljs.core.cycle.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_denominator))))));
}
})();if(cljs.core.vector_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.tuplet_numerator_for_odd_subdivisions = (function tuplet_numerator_for_odd_subdivisions(subdivisions_in_beat){if(cljs.core._EQ_.call(null,(3),subdivisions_in_beat))
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
doremi_script_app.doremi_core.beam_beat_pitches = (function beam_beat_pitches(str_array){if(cljs.core.truth_((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[str_array],null))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"str-array","str-array",904380335,null)))))));
}
var _PERCENT_ = (function (){var last_idx = (cljs.core.count.call(null,str_array) - (1));if(cljs.core.truth_((function (){var or__3425__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,str_array));if(or__3425__auto__)
{return or__3425__auto__;
} else
{return cljs.core.some.call(null,((function (or__3425__auto__,last_idx){
return (function (p1__9374_SHARP_){return cljs.core._EQ_.call(null,"r",cljs.core.subs.call(null,p1__9374_SHARP_,(0),(1)));
});})(or__3425__auto__,last_idx))
,str_array);
}
})()))
{return str_array;
} else
{return cljs.core.assoc.call(null,str_array,(0),clojure.string.replace_first.call(null,cljs.core.first.call(null,str_array),/(\d+\.*)/,"$1["),last_idx,clojure.string.replace_first.call(null,cljs.core.last.call(null,str_array),/(\d+\.*)/,"$1]"));
}
})();if(cljs.core.vector_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.enclose_beat_in_times = (function enclose_beat_in_times(subdivisions,beat_str){if(typeof beat_str === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"beat-str","beat-str",-1182621605,null)))))));
}
if(cljs.core.integer_QMARK_.call(null,subdivisions))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"subdivisions","subdivisions",713992991,null)))))));
}
var _PERCENT_ = ((cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(0),null,(128),null,(1),null,(4),null,(32),null,(64),null,(2),null,(16),null,(8),null], null), null).call(null,subdivisions)))?("\\times "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.tuplet_numerator_for_odd_subdivisions.call(null,subdivisions))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subdivisions)+"{ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(beat_str)+" } "):beat_str);if(typeof _PERCENT_ === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.obj = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),"C"], null)], null)], null);
doremi_script_app.doremi_core.finish_measure = (function finish_measure(accum){return accum;
});
doremi_script_app.doremi_core.start_measure = (function start_measure(accum,obj){var last_barline1 = (function (){var or__3425__auto__ = cljs.core.get.call(null,accum,new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233));if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return "\\bar \"|\"";
}
})();var last_barline2 = (cljs.core.truth_(new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351).cljs$core$IFn$_invoke$arity$1(accum))?(function (){cljs.core.println.call(null,":in-notes-line-beginning");
cljs.core.println.call(null,"omitting barline");
return null;
})():last_barline1);var last_barline = cljs.core.get.call(null,accum,new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233));return cljs.core.update_in.call(null,cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457),null,new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null),((function (last_barline1,last_barline2,last_barline){
return (function (p1__9375_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9375_SHARP_)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_barline));
});})(last_barline1,last_barline2,last_barline))
);
});
doremi_script_app.doremi_core.finish_beat = (function finish_beat(accum){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"output","output",-1105869043),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(accum))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.enclose_beat_in_times.call(null,new cljs.core.Keyword(null,"divisions","divisions",-1442532790).cljs$core$IFn$_invoke$arity$1(accum),clojure.string.join.call(null," ",doremi_script_app.doremi_core.beam_beat_pitches.call(null,new cljs.core.Keyword(null,"beat-pitches","beat-pitches",-1210809456).cljs$core$IFn$_invoke$arity$1(accum)))))),new cljs.core.Keyword(null,"beat-pitches","beat-pitches",-1210809456),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"divisions","divisions",-1442532790),(0));
});
doremi_script_app.doremi_core.chord_snippet = (function chord_snippet(obj){if(cljs.core.vector_QMARK_.call(null,obj))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)))))));
}
var chord = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9376_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__9376_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"chord","chord",-696248342),cljs.core.first.call(null,p1__9376_SHARP_)));
}),obj)));if(cljs.core.truth_(chord))
{return ("^\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)+"\"");
} else
{return null;
}
});
doremi_script_app.doremi_core.finish_dashes = (function finish_dashes(accum){var dash = new cljs.core.Keyword(null,"current-dash","current-dash",-641449210).cljs$core$IFn$_invoke$arity$1(accum);var divisions = accum.call(null,new cljs.core.Keyword(null,"divisions","divisions",-1442532790));var micro_beats = cljs.core.get_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dash-microbeats","dash-microbeats",593262957)], null));var ary = doremi_script_app.doremi_core.ratio__GT_lilypond_durations.call(null,micro_beats,divisions);var first_duration = cljs.core.first.call(null,ary);var first_rest = ("r"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_duration)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.chord_snippet.call(null,dash)));var rests = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_rest)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,"r"),cljs.core.rest.call(null,ary)))));return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat-pitches","beat-pitches",-1210809456)], null),cljs.core.conj,rests);
});
doremi_script_app.doremi_core.start_dash = (function start_dash(accum,dash){return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"dash-microbeats","dash-microbeats",593262957),(1),new cljs.core.Keyword(null,"current-dash","current-dash",-641449210),dash);
});
doremi_script_app.doremi_core.get_ending = (function get_ending(obj){return cljs.core.last.call(null,doremi_script_app.doremi_core.get_attribute.call(null,obj,new cljs.core.Keyword(null,"ending","ending",1236735934)));
});
doremi_script_app.doremi_core.get_syl = (function get_syl(pitch){return cljs.core.last.call(null,doremi_script_app.doremi_core.get_attribute.call(null,pitch,new cljs.core.Keyword(null,"syl","syl",1647686075)));
});
doremi_script_app.doremi_core.ending_snippet = (function ending_snippet(obj){var temp__4126__auto__ = doremi_script_app.doremi_core.get_ending.call(null,obj);if(cljs.core.truth_(temp__4126__auto__))
{var ending = temp__4126__auto__;return ("^\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ending)+"\"");
} else
{return null;
}
});
doremi_script_app.doremi_core.normalized_pitch__GT_kommal = (function normalized_pitch__GT_kommal(x){return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, ["D","Db","E","Eb","A","Ab","B","Bb"], null),x,x);
});
doremi_script_app.doremi_core.pitch_and_octave = (function pitch_and_octave(pitch){var pitch2 = (cljs.core.truth_(doremi_script_app.doremi_core.get_attribute.call(null,pitch,new cljs.core.Keyword(null,"kommal-indicator","kommal-indicator",1108982591)))?doremi_script_app.doremi_core.normalized_pitch__GT_kommal.call(null,cljs.core.second.call(null,pitch)):cljs.core.second.call(null,pitch));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,pitch2))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.octave_number__GT_lilypond_octave.call(null,cljs.core.second.call(null,doremi_script_app.doremi_core.get_attribute.call(null,pitch,new cljs.core.Keyword(null,"octave","octave",1066197953))))));
});
doremi_script_app.doremi_core.get_ornament_pitches = (function get_ornament_pitches(ornament){return cljs.core.drop_last.call(null,cljs.core.rest.call(null,ornament));
});
doremi_script_app.doremi_core.grace_note_pitches = (function grace_note_pitches(ornament){var pitches = doremi_script_app.doremi_core.get_ornament_pitches.call(null,ornament);var my_count = cljs.core.count.call(null,pitches);var items = cljs.core.vec.call(null,cljs.core.map.call(null,((function (pitches,my_count){
return (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.pitch_and_octave.call(null,x))+"16");
});})(pitches,my_count))
,pitches));var items2 = (((my_count > (1)))?cljs.core.assoc.call(null,items,(0),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,items,(0)))+"["),(my_count - (1)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,items))+"]")):items);return clojure.string.join.call(null," ",items2);
});
doremi_script_app.doremi_core.finish_pitch = (function finish_pitch(accum){

var pitch = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457).cljs$core$IFn$_invoke$arity$1(accum));var syl = doremi_script_app.doremi_core.get_syl.call(null,pitch);var begin_slur = (cljs.core.truth_(cljs.core.some.call(null,((function (pitch,syl){
return (function (p1__9377_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__9377_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"begin-slur","begin-slur",272469214),cljs.core.first.call(null,p1__9377_SHARP_)));
});})(pitch,syl))
,pitch))?"(":null);var _ = (cljs.core.truth_(begin_slur)?cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"in-slur","in-slur",-879342390).cljs$core$IFn$_invoke$arity$1(accum),true):null);var end_slur = (cljs.core.truth_(cljs.core.some.call(null,((function (pitch,syl,begin_slur,_){
return (function (p1__9378_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__9378_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end-slur","end-slur",-980422219),cljs.core.first.call(null,p1__9378_SHARP_)));
});})(pitch,syl,begin_slur,_))
,pitch))?")":null);var ___$1 = (cljs.core.truth_(end_slur)?cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"in-slur","in-slur",-879342390).cljs$core$IFn$_invoke$arity$1(accum),false):null);var my_pitch_and_octave = doremi_script_app.doremi_core.pitch_and_octave.call(null,pitch);var divisions = accum.call(null,new cljs.core.Keyword(null,"divisions","divisions",-1442532790));var after_ornament = cljs.core.first.call(null,cljs.core.filter.call(null,((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions){
return (function (p1__9380_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"after","after",594996914),cljs.core.last.call(null,p1__9380_SHARP_));
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions))
,cljs.core.filter.call(null,((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions){
return (function (p1__9379_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament","ornament",839474961),p1__9379_SHARP_);
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions))
,pitch)));var before_ornament = cljs.core.first.call(null,cljs.core.filter.call(null,((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament){
return (function (p1__9382_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"before","before",-1633692388),cljs.core.last.call(null,p1__9382_SHARP_));
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament))
,cljs.core.filter.call(null,((function (pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament){
return (function (p1__9381_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"ornament","ornament",839474961),p1__9381_SHARP_);
});})(pitch,syl,begin_slur,_,end_slur,___$1,my_pitch_and_octave,divisions,after_ornament))
,pitch)));var micro_beats = cljs.core.get_in.call(null,accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457),new cljs.core.Keyword(null,"micro-beats","micro-beats",125892548)], null));var durations = doremi_script_app.doremi_core.ratio__GT_lilypond_durations.call(null,micro_beats,divisions);var first_pitch = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(before_ornament)?("\\grace {"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.grace_note_pitches.call(null,before_ornament))+"}"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(after_ornament)?"\\afterGrace ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(my_pitch_and_octave)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,durations))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_slur)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(begin_slur)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.chord_snippet.call(null,pitch))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.ending_snippet.call(null,pitch))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(doremi_script_app.doremi_core.get_attribute.call(null,pitch,new cljs.core.Keyword(null,"mordent","mordent",254330457)))?"\\mordent":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3413__auto__ = after_ornament;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"in-slur","in-slur",-879342390).cljs$core$IFn$_invoke$arity$1(accum)));
} else
{return and__3413__auto__;
}
})())?"(":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(after_ornament)?("{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.grace_note_pitches.call(null,after_ornament))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3413__auto__ = after_ornament;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"in-slur","in-slur",-879342390).cljs$core$IFn$_invoke$arity$1(accum)));
} else
{return and__3413__auto__;
}
})())?")":null))+"}"):null)));var pitches = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,durations)))?first_pitch:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_pitch)+"~"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"~",cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,my_pitch_and_octave),cljs.core.rest.call(null,durations))))));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat-pitches","beat-pitches",-1210809456)], null),cljs.core.conj,pitches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syllables","syllables",-983080047)], null),cljs.core.str,syl," ");
});
doremi_script_app.doremi_core.finish_line = (function finish_line(accum){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null),cljs.core.str," ",accum.call(null,new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233)),"\\break"," \n"),new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233),null);
});
doremi_script_app.doremi_core.transpose_snippet = (function transpose_snippet(my_key){if((typeof my_key === 'string') || ((my_key == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"my-key","my-key",1444684811,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"my-key","my-key",1444684811,null))))))));
}
var _PERCENT_ = (function (){if((my_key == null))
{return "";
} else
{if(cljs.core._EQ_.call(null,"c",clojure.string.lower_case.call(null,my_key)))
{return "";
} else
{return ("\\transpose c' "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.normalized_pitch__GT_lilypond_pitch.call(null,clojure.string.upper_case.call(null,my_key)))+"'");

}
}
})();if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.lilypond_at_eof = (function lilypond_at_eof(accum){var is_abc_composition = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"abc-composition","abc-composition",636048491),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"my-map","my-map",889953183).cljs$core$IFn$_invoke$arity$1(accum)));return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null),cljs.core.str," ",new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233).cljs$core$IFn$_invoke$arity$1(accum),clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}","text = \\lyricmode {",new cljs.core.Keyword(null,"syllables","syllables",-983080047).cljs$core$IFn$_invoke$arity$1(accum),"}","\\score{",((!(is_abc_composition))?doremi_script_app.doremi_core.transpose_snippet.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"my-map","my-map",889953183).cljs$core$IFn$_invoke$arity$1(accum))):null),"<<","\\new Voice = \"one\" {","\\set midiInstrument = #\"flute\"","\\melody","}","\\new Lyrics \\lyricsto \"one\" \\text",">>","\\layout {","\\context {","\\Score","}","}","\\midi {","\\context {","\\Score","tempoWholesPerMinute = #(ly:make-moment 100 4)","}","}","}"], null)));
});
doremi_script_app.doremi_core.lilypond_transition = (function lilypond_transition(accum,obj){if((function (){
return true;
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),false,cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"Entering lilypond-transition"),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"first obj=",cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null))))),true))))));
}
if(cljs.core.map_QMARK_.call(null,accum))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"accum","accum",-251895723,null)))))));
}
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"beat","beat",-817854366),null,new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225),null,new cljs.core.Keyword(null,"dash","dash",23821356),null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"measure","measure",-1857519826),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),null,new cljs.core.Keyword(null,"eof","eof",-489063237),null,new cljs.core.Keyword(null,"barline","barline",-1705261636),null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),null,new cljs.core.Keyword(null,"line-number","line-number",-133688931),null,new cljs.core.Keyword(null,"stave","stave",-1205874017),null], null), null).call(null,cljs.core.first.call(null,obj))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"beat","beat",-817854366),null,new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225),null,new cljs.core.Keyword(null,"dash","dash",23821356),null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"measure","measure",-1857519826),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),null,new cljs.core.Keyword(null,"eof","eof",-489063237),null,new cljs.core.Keyword(null,"barline","barline",-1705261636),null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),null,new cljs.core.Keyword(null,"line-number","line-number",-133688931),null,new cljs.core.Keyword(null,"stave","stave",-1205874017),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null))))))));
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(accum)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Symbol(null,"accum","accum",-251895723,null)))))));
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(accum)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"accum","accum",-251895723,null)))))));
}
if((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(accum) instanceof cljs.core.Keyword))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"accum","accum",-251895723,null))))))));
}
if(cljs.core.truth_((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[obj],null))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)))))));
}
var token = cljs.core.first.call(null,obj);var cur_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(accum);var _ = null
;var G__9384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,token], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"output","output",-1105869043),"No music entered",new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"eof","eof",-489063237));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return doremi_script_app.doremi_core.lilypond_at_eof.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"stave","stave",-1205874017)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-stave","in-stave",715306109));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"stave","stave",-1205874017)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-stave","in-stave",715306109));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528),new cljs.core.Keyword(null,"pitch","pitch",1495126700)], null),G__9384))
{return doremi_script_app.doremi_core.start_pitch.call(null,accum,obj);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241),new cljs.core.Keyword(null,"stave","stave",-1205874017)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.print_headers.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-stave","in-stave",715306109));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488),new cljs.core.Keyword(null,"stave","stave",-1205874017)], null),G__9384))
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-stave","in-stave",715306109));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-stave","in-stave",715306109),new cljs.core.Keyword(null,"notes-line","notes-line",-828350564)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_line.call(null,accum,obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.lilypond_at_eof.call(null,doremi_script_app.doremi_core.finish_line.call(null,accum)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"eof","eof",-489063237));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351),new cljs.core.Keyword(null,"measure","measure",-1857519826)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_measure.call(null,accum,obj),new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"stave","stave",-1205874017)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-stave","in-stave",715306109));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"pitch","pitch",1495126700)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_pitch.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"pitch","pitch",1495126700)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_pitch.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241),new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333)], null),G__9384))
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"beat","beat",-817854366)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_beat.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum)),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528),new cljs.core.Keyword(null,"dash","dash",23821356)], null),G__9384))
{return doremi_script_app.doremi_core.start_dash.call(null,accum,obj);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"barline","barline",-1705261636)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.save_barline.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum)),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"measure","measure",-1857519826)], null),G__9384))
{return doremi_script_app.doremi_core.start_measure.call(null,accum,obj);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351),new cljs.core.Keyword(null,"barline","barline",-1705261636)], null),G__9384))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single-barline","single-barline",2092234142),cljs.core.first.call(null,cljs.core.second.call(null,obj))))
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379));
} else
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"last-barline","last-barline",-2124602233),doremi_script_app.doremi_core.barline__GT_lilypond_barline.call(null,obj));
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_beat.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"eof","eof",-489063237));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"dash","dash",23821356)], null),G__9384))
{return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dash-microbeats","dash-microbeats",593262957)], null),cljs.core.inc);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"barline","barline",-1705261636)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.save_barline.call(null,doremi_script_app.doremi_core.finish_measure.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum))),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.lilypond_at_eof.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"eof","eof",-489063237));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"beat","beat",-817854366)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_beat.call(null,accum,obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"barline","barline",-1705261636)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.save_barline.call(null,accum,obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"composition","composition",1834198617)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.lilypond_headers.call(null,accum,obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,accum),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum))),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-dashes-in-beat","collecting-dashes-in-beat",1138174474),new cljs.core.Keyword(null,"beat","beat",-817854366)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.start_beat.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_dashes.call(null,accum)),obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-beat","in-beat",-1556845528));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-source","looking-for-source",840341546),new cljs.core.Keyword(null,"source","source",-433931539)], null),G__9384))
{return cljs.core.assoc.call(null,doremi_script_app.doremi_core.handle_source.call(null,accum,obj),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"eof","eof",-489063237)], null),G__9384))
{return doremi_script_app.doremi_core.lilypond_at_eof.call(null,doremi_script_app.doremi_core.finish_line.call(null,doremi_script_app.doremi_core.finish_beat.call(null,doremi_script_app.doremi_core.finish_pitch.call(null,accum))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line","in-notes-line",1537890379),new cljs.core.Keyword(null,"line-number","line-number",-133688931)], null),G__9384))
{return accum;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collecting-pitch-in-beat","collecting-pitch-in-beat",693647011),new cljs.core.Keyword(null,"dash","dash",23821356)], null),G__9384))
{return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-pitch","current-pitch",202433457),new cljs.core.Keyword(null,"micro-beats","micro-beats",125892548)], null),cljs.core.inc);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-stave","looking-for-stave",1055611488),new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333)], null),G__9384))
{return accum;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looking-for-attribute-section","looking-for-attribute-section",-507074241),new cljs.core.Keyword(null,"lyrics-section","lyrics-section",-599751225)], null),G__9384))
{return accum;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351),new cljs.core.Keyword(null,"line-number","line-number",-133688931)], null),G__9384))
{return cljs.core.assoc.call(null,accum,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-notes-line-beginning","in-notes-line-beginning",-1269662351));
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
var headers_printed_QMARK_ = cljs.core.atom.call(null,false);var started_pitch_QMARK_ = cljs.core.atom.call(null,false);return cljs.core.reduce.call(null,doremi_script_app.doremi_core.lilypond_transition,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"finished-first-line","finished-first-line",-2116262503),false,new cljs.core.Keyword(null,"in-slur","in-slur",-879342390),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"syllables","syllables",-983080047),"",new cljs.core.Keyword(null,"source","source",-433931539),txt,new cljs.core.Keyword(null,"output","output",-1105869043),"",new cljs.core.Keyword(null,"composition","composition",1834198617),composition], null),cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.tree_seq.call(null,((function (headers_printed_QMARK_,started_pitch_QMARK_){
return (function (p1__9385_SHARP_){var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,p1__9385_SHARP_);if(and__3413__auto__)
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"beat","beat",-817854366),null,new cljs.core.Keyword(null,"measure","measure",-1857519826),null,new cljs.core.Keyword(null,"composition","composition",1834198617),null,new cljs.core.Keyword(null,"lyrics-line","lyrics-line",1045244730),null,new cljs.core.Keyword(null,"notes-line","notes-line",-828350564),null,new cljs.core.Keyword(null,"stave","stave",-1205874017),null], null), null).call(null,cljs.core.first.call(null,p1__9385_SHARP_));
} else
{return and__3413__auto__;
}
});})(headers_printed_QMARK_,started_pitch_QMARK_))
,cljs.core.identity,cljs.core.conj.call(null,composition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eof","eof",-489063237)], null)))));
});
doremi_script_app.doremi_core.attribute_section__GT_map = (function attribute_section__GT_map(x){return cljs.core.apply.call(null,cljs.core.array_map,doremi_script_app.doremi_core.map_even_items.call(null,(function (p1__9386_SHARP_){return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,p1__9386_SHARP_));
}),cljs.core.rest.call(null,x)));
});
doremi_script_app.doremi_core.default_kind = new cljs.core.Keyword(null,"sargam-composition","sargam-composition",-1109504166);
doremi_script_app.doremi_core.doremi_text__GT_parsed_aux = (function doremi_text__GT_parsed_aux(txt,kind){if(typeof txt === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null)))))));
}
var _PERCENT_ = (function (){var parsed = doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,txt,kind);if(cljs.core.truth_(doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,parsed)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),txt,new cljs.core.Keyword(null,"parsed","parsed",-819589156),null,new cljs.core.Keyword(null,"lilypond","lilypond",-1275651000),null,new cljs.core.Keyword(null,"error","error",-978969032),doremi_script_app.doremi_core.format_instaparse_errors.call(null,parsed)], null);
} else
{var collapsed_parse_tree = cljs.core.vec.call(null,cljs.core.map.call(null,((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),z))
{return doremi_script_app.doremi_core.collapse_stave.call(null,z);
} else
{return z;
}
});})(parsed))
,parsed));var _ = null
;var lilypond = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"output","output",-1105869043),"lilypond here"], null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),txt,new cljs.core.Keyword(null,"lilypond","lilypond",-1275651000),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(lilypond),new cljs.core.Keyword(null,"parsed","parsed",-819589156),collapsed_parse_tree,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"my-map","my-map",889953183).cljs$core$IFn$_invoke$arity$1(lilypond),new cljs.core.Keyword(null,"error","error",-978969032),null], null);
}
})();if(cljs.core.map_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(_PERCENT_)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
if(cljs.core.truth_((function (){var or__3425__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(_PERCENT_);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{var and__3413__auto__ = cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"parsed","parsed",-819589156).cljs$core$IFn$_invoke$arity$1(_PERCENT_));if(and__3413__auto__)
{var and__3413__auto____$1 = doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"composition","composition",1834198617),new cljs.core.Keyword(null,"parsed","parsed",-819589156).cljs$core$IFn$_invoke$arity$1(_PERCENT_));if(and__3413__auto____$1)
{return new cljs.core.Keyword(null,"parsed","parsed",-819589156).cljs$core$IFn$_invoke$arity$1(_PERCENT_);
} else
{return and__3413__auto____$1;
}
} else
{return and__3413__auto__;
}
}
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),cljs.core.list(new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol(null,"is?","is?",252217315,null),new cljs.core.Keyword(null,"composition","composition",1834198617),cljs.core.list(new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Symbol(null,"%","%",-950237169,null)))))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.doremi_text__GT_parsed = (function() {
var doremi_text__GT_parsed = null;
var doremi_text__GT_parsed__1 = (function (txt){return doremi_script_app.doremi_core.doremi_text__GT_parsed_aux.call(null,txt,doremi_script_app.doremi_core.default_kind);
});
var doremi_text__GT_parsed__2 = (function (txt,kind){return doremi_script_app.doremi_core.doremi_text__GT_parsed_aux.call(null,txt,kind);
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
doremi_script_app.doremi_core.doremi_text__GT_lilypond = (function doremi_text__GT_lilypond(txt,kind){if(typeof txt === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null)))))));
}
var _PERCENT_ = (function (){
var parsed = doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,txt,kind);if(cljs.core.truth_(doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,parsed)))
{return parsed;
} else
{var collapsed_parse_tree = cljs.core.vec.call(null,cljs.core.map.call(null,((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),z))
{return doremi_script_app.doremi_core.collapse_stave.call(null,z);
} else
{return z;
}
});})(parsed))
,parsed));var _ = null
;return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(doremi_script_app.doremi_core.to_lilypond.call(null,collapsed_parse_tree,txt));
}
})();if((cljs.core.map_QMARK_.call(null,_PERCENT_)) || (typeof _PERCENT_ === 'string'))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.test_dialect_normalization = (function test_dialect_normalization(){var abc_str = ("D\n|CDEF# GG#|");var sargam_str = ("R.\n |SRGM PP#|");var hindi_str = ("\u0938\u0930|\n _");var doremi_str = "drmf sltd";cljs.core.println.call(null,"hindi raw parse results");
doremi_script_app.utils.pprint.call(null,doremi_script_app.doremi_core.parse.call(null,hindi_str,null));
cljs.core.println.call(null,"hindi normalized");
doremi_script_app.utils.pprint.call(null,doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,hindi_str,null));
cljs.core.println.call(null,"hindi to lilypond");
cljs.core.println.call(null,doremi_script_app.doremi_core.doremi_text__GT_lilypond.call(null,hindi_str,null));
cljs.core.println.call(null,"hindi to collapsed");
return null;

});

doremi_script_app.doremi_core._doremi_text_to_lilypond = (function _doremi_text_to_lilypond(txt){return doremi_script_app.doremi_core.doremi_text__GT_lilypond.call(null,null,txt);
});
doremi_script_app.doremi_core.doremi_text__GT_lilypond2 = (function doremi_text__GT_lilypond2(txt){return doremi_script_app.doremi_core.doremi_text__GT_lilypond.call(null,txt,null);
});
doremi_script_app.doremi_core.x = "C | A\n\n  | CDbDEb EFF#G AbABbB C#D#E#F#F |\n\n  | C#D#E#F# F :|\n\n  F#";
doremi_script_app.doremi_core.y = "Key: B\nMode:Lydian\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.z = "Title:me\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.x = "oh say can you see\n\nC :|\n\nD E F    ";
doremi_script_app.doremi_core.v = "SSS";
doremi_script_app.doremi_core.j = "Key:G\n\n123";
doremi_script_app.doremi_core.testn = (function testn(x){var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,x,"SRG"));return cljs.core.println.call(null,(function (){var start__4320__auto__ = (new Date()).getTime();var ret__4321__auto__ = doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree.call(null,s);cljs.core.prn.call(null,("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__4320__auto__))+" msecs"));
return ret__4321__auto__;
})());
});
/**
* Parse doremi text into parse tree or failure.
*/
doremi_script_app.doremi_core.doremi_text__GT_parse_tree = (function doremi_text__GT_parse_tree(txt,kind){if(typeof txt === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null)))))));
}
if(((kind == null)) || (doremi_script_app.doremi_core.is_kind_QMARK_.call(null,kind)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"kind","kind",923265724,null)),cljs.core.list(new cljs.core.Symbol(null,"is-kind?","is-kind?",-161025494,null),new cljs.core.Symbol(null,"kind","kind",923265724,null))))))));
}
var _PERCENT_ = ((cljs.core._EQ_.call(null,"",txt))?"Nothing entered":((cljs.core.not_EQ_.call(null,(-1),txt.indexOf("\t")))?"Tabs are not allowed":(function (){var parsed = doremi_script_app.doremi_core.parse.call(null,txt,kind);if(instaparse.core.failure_QMARK_.call(null,parsed))
{return parsed;
} else
{return doremi_script_app.doremi_core.remove_notation_system_prefixes.call(null,doremi_script_app.doremi_core.normalize_pitches.call(null,doremi_script_app.doremi_core.add_kind.call(null,parsed,kind)));
}
})()
));if((cljs.core.vector_QMARK_.call(null,_PERCENT_)) || (instaparse.core.failure_QMARK_.call(null,_PERCENT_)) || (true))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("insta","failure?","insta/failure?",-2040860547,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),true))))));
}
return _PERCENT_;
});
doremi_script_app.doremi_core.doremi_text__GT_collapsed_parse_tree = (function doremi_text__GT_collapsed_parse_tree(txt,kind){if(typeof txt === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null)))))));
}
var _PERCENT_ = (function (){doremi_script_app.utils.log.call(null,"doremi-text->collapsed-parse-tree kind is",kind);
doremi_script_app.utils.log.call(null,"doremi-text->collapsed-parse-tree txt is",txt);
var parsed = doremi_script_app.doremi_core.doremi_text__GT_parse_tree.call(null,txt,kind);doremi_script_app.utils.log.call(null,"parsed:");
doremi_script_app.utils.log.call(null,parsed);
if(cljs.core.truth_(doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,parsed)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),txt,new cljs.core.Keyword(null,"parsed","parsed",-819589156),null,new cljs.core.Keyword(null,"lilypond","lilypond",-1275651000),null,new cljs.core.Keyword(null,"error","error",-978969032),doremi_script_app.doremi_core.format_instaparse_errors.call(null,parsed)], null);
} else
{var collapsed_parse_tree = cljs.core.vec.call(null,cljs.core.map.call(null,((function (parsed){
return (function (z){if(doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"stave","stave",-1205874017),z))
{return doremi_script_app.doremi_core.collapse_stave.call(null,z);
} else
{return z;
}
});})(parsed))
,parsed));var my_map = doremi_script_app.doremi_core.attribute_section__GT_map.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (collapsed_parse_tree,parsed){
return (function (p1__9387_SHARP_){return doremi_script_app.doremi_core.is_QMARK_.call(null,new cljs.core.Keyword(null,"attribute-section","attribute-section",778608333),p1__9387_SHARP_);
});})(collapsed_parse_tree,parsed))
,collapsed_parse_tree)));var _ = null
;var ___$1 = null
;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),txt,new cljs.core.Keyword(null,"parsed","parsed",-819589156),doremi_script_app.doremi_core.match_slurs.call(null,collapsed_parse_tree),new cljs.core.Keyword(null,"attributes","attributes",-74013604),my_map,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
}
})();return _PERCENT_;
});
doremi_script_app.doremi_core.parse_failed_QMARK_ = (function parse_failed_QMARK_(x){return (instaparse.core.failure_QMARK_.call(null,x)) || (typeof x === 'string');
});
/**
* Tightens up instaparse error format by deleting newlines after 'of'
*/
doremi_script_app.doremi_core.format_instaparse_errors = (function format_instaparse_errors(z){if(doremi_script_app.doremi_core.parse_failed_QMARK_.call(null,z))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"parse-failed?","parse-failed?",-1903331139,null),new cljs.core.Symbol(null,"z","z",851004344,null)))))));
}
var _PERCENT_ = ((typeof z === 'string')?z:(function (){var a = (function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_9391_9392 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_9391_9392,sb__4366__auto__){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_9391_9392,sb__4366__auto__))
;
cljs.core.println.call(null,z);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9391_9392;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})();var vec__9390 = clojure.string.split.call(null,a,/of/);var left = cljs.core.nth.call(null,vec__9390,(0),null);var right = cljs.core.nth.call(null,vec__9390,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left)+"of\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(right)?clojure.string.replace.call(null,right,/\n/," "):null)));
})());if(typeof _PERCENT_ === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))));
}
return _PERCENT_;
});

//# sourceMappingURL=doremi_core.js.map