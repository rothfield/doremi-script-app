// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function paren_for_tags(tag_set,hidden_QMARK_,parser){if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{var G__13134 = (function (){var G__13135 = cljs.core.constant$keyword$42;return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__13135) : parser.call(null,G__13135));
})();return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__13134) : tag_set.call(null,G__13134));
} else
{return and__3413__auto__;
}
})()))
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13136 = parser;var G__13137 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__13136,G__13137) : instaparse.print.combinators__GT_str.call(null,G__13136,G__13137));
})())+")");
} else
{var G__13138 = parser;var G__13139 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__13138,G__13139) : instaparse.print.combinators__GT_str.call(null,G__13138,G__13139));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$53,null], null), null));
/**
* Replaces whitespace characters with escape sequences for better printing
*/
instaparse.print.regexp_replace = (function regexp_replace(s){var G__13141 = s;switch (G__13141) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function regexp__GT_str(r){return clojure.string.replace(("#\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r.source,(1)))+"\""),/[\s]/,instaparse.print.regexp_replace);
});
/**
* Stringifies a parser built from combinators
*/
instaparse.print.combinators__GT_str = (function() {
var combinators__GT_str = null;
var combinators__GT_str__1 = (function (p){return combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,false);
});
var combinators__GT_str__2 = (function (p__13143,hidden_QMARK_){var map__13166 = p__13143;var map__13166__$1 = ((cljs.core.seq_QMARK_(map__13166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13166):map__13166);var p = map__13166__$1;var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,cljs.core.constant$keyword$42);var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,cljs.core.constant$keyword$52);var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,cljs.core.constant$keyword$55);var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,cljs.core.constant$keyword$54);var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13166__$1,cljs.core.constant$keyword$45);if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(p);
} else
{return and__3413__auto__;
}
})()))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true))+">");
} else
{var G__13167 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__13167) {
case "neg":
return ("!"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13168 = hidden_QMARK_;var G__13169 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13168,G__13169) : instaparse.print.paren_for_compound.call(null,G__13168,G__13169));
})()));

break;
case "cat":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$53,null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,null], null), null),hidden_QMARK_,parser1))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,null], null), null),hidden_QMARK_,parser2)));

break;
case "alt":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,null], null), null),hidden_QMARK_),parsers));

break;
case "look":
return ("&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13170 = hidden_QMARK_;var G__13171 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13170,G__13171) : instaparse.print.paren_for_compound.call(null,G__13170,G__13171));
})()));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(p))),(1));

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p),cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13172 = hidden_QMARK_;var G__13173 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13172,G__13173) : instaparse.print.paren_for_compound.call(null,G__13172,G__13173));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p))+"}");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13174 = hidden_QMARK_;var G__13175 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13174,G__13175) : instaparse.print.paren_for_compound.call(null,G__13174,G__13175));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+"}");
}

break;
case "star":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13176 = hidden_QMARK_;var G__13177 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13176,G__13177) : instaparse.print.paren_for_compound.call(null,G__13176,G__13177));
})())+"*");

break;
case "string":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13178_13185 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13178_13185,sb__4366__auto__,G__13167,map__13166,map__13166__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13178_13185,sb__4366__auto__,G__13167,map__13166,map__13166__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13178_13185;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p));

break;
case "plus":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13179 = hidden_QMARK_;var G__13180 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13179,G__13180) : instaparse.print.paren_for_compound.call(null,G__13179,G__13180));
})())+"+");

break;
case "epsilon":
return "\u03B5";

break;
case "string-ci":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13181_13186 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13181_13186,sb__4366__auto__,G__13167,map__13166,map__13166__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13181_13186,sb__4366__auto__,G__13167,map__13166,map__13166__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13181_13186;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "opt":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13182 = hidden_QMARK_;var G__13183 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13182,G__13183) : instaparse.print.paren_for_compound.call(null,G__13182,G__13183));
})())+"?");

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))));

}
}
});
combinators__GT_str = function(p__13143,hidden_QMARK_){
switch(arguments.length){
case 1:
return combinators__GT_str__1.call(this,p__13143);
case 2:
return combinators__GT_str__2.call(this,p__13143,hidden_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = combinators__GT_str__1;
combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = combinators__GT_str__2;
return combinators__GT_str;
})()
;
/**
* Takes a terminal symbol and a parser built from combinators,
* and returns a string for the rule.
*/
instaparse.print.rule__GT_str = (function rule__GT_str(terminal,parser){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser)),cljs.core.constant$keyword$39))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(terminal))+"> = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(terminal))+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)));
}
});
/**
* Takes a Parser object, i.e., something with a grammar map and a start
* production keyword, and stringifies it.
*/
instaparse.print.Parser__GT_str = (function Parser__GT_str(p__13187){var map__13200 = p__13187;var map__13200__$1 = ((cljs.core.seq_QMARK_(map__13200))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13200):map__13200);var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13200__$1,cljs.core.constant$keyword$66);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13200__$1,cljs.core.constant$keyword$67);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(function (){var G__13201 = start;return (grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(G__13201) : grammar.call(null,G__13201));
})()),(function (){var iter__4164__auto__ = ((function (map__13200,map__13200__$1,grammar,start){
return (function iter__13202(s__13203){return (new cljs.core.LazySeq(null,((function (map__13200,map__13200__$1,grammar,start){
return (function (){var s__13203__$1 = s__13203;while(true){
var temp__4126__auto__ = cljs.core.seq(s__13203__$1);if(temp__4126__auto__)
{var s__13203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__13203__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__13203__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__13205 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__13204 = (0);while(true){
if((i__13204 < size__4163__auto__))
{var vec__13210 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__13204);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13210,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{cljs.core.chunk_append(b__13205,instaparse.print.rule__GT_str(terminal,parser));
{
var G__13212 = (i__13204 + (1));
i__13204 = G__13212;
continue;
}
} else
{{
var G__13213 = (i__13204 + (1));
i__13204 = G__13213;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__13205),iter__13202(cljs.core.chunk_rest(s__13203__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__13205),null);
}
} else
{var vec__13211 = cljs.core.first(s__13203__$2);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13211,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13211,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{return cljs.core.cons(instaparse.print.rule__GT_str(terminal,parser),iter__13202(cljs.core.rest(s__13203__$2)));
} else
{{
var G__13214 = cljs.core.rest(s__13203__$2);
s__13203__$1 = G__13214;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__13200,map__13200__$1,grammar,start))
,null,null));
});})(map__13200,map__13200__$1,grammar,start))
;return iter__4164__auto__(grammar);
})()));
});
