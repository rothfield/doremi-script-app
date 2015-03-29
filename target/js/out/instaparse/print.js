// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function paren_for_tags(tag_set,hidden_QMARK_,parser){if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{var G__13130 = (function (){var G__13131 = cljs.core.constant$keyword$42;return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__13131) : parser.call(null,G__13131));
})();return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__13130) : tag_set.call(null,G__13130));
} else
{return and__3413__auto__;
}
})()))
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13132 = parser;var G__13133 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__13132,G__13133) : instaparse.print.combinators__GT_str.call(null,G__13132,G__13133));
})())+")");
} else
{var G__13134 = parser;var G__13135 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__13134,G__13135) : instaparse.print.combinators__GT_str.call(null,G__13134,G__13135));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$53,null], null), null));
/**
* Replaces whitespace characters with escape sequences for better printing
*/
instaparse.print.regexp_replace = (function regexp_replace(s){var G__13137 = s;switch (G__13137) {
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
var combinators__GT_str__2 = (function (p__13139,hidden_QMARK_){var map__13162 = p__13139;var map__13162__$1 = ((cljs.core.seq_QMARK_(map__13162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13162):map__13162);var p = map__13162__$1;var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.constant$keyword$42);var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.constant$keyword$52);var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.constant$keyword$55);var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.constant$keyword$54);var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.constant$keyword$45);if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(p);
} else
{return and__3413__auto__;
}
})()))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true))+">");
} else
{var G__13163 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__13163) {
case "neg":
return ("!"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13164 = hidden_QMARK_;var G__13165 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13164,G__13165) : instaparse.print.paren_for_compound.call(null,G__13164,G__13165));
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
return ("&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13166 = hidden_QMARK_;var G__13167 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13166,G__13167) : instaparse.print.paren_for_compound.call(null,G__13166,G__13167));
})()));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(p))),(1));

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p),cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13168 = hidden_QMARK_;var G__13169 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13168,G__13169) : instaparse.print.paren_for_compound.call(null,G__13168,G__13169));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p))+"}");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13170 = hidden_QMARK_;var G__13171 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13170,G__13171) : instaparse.print.paren_for_compound.call(null,G__13170,G__13171));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+"}");
}

break;
case "star":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13172 = hidden_QMARK_;var G__13173 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13172,G__13173) : instaparse.print.paren_for_compound.call(null,G__13172,G__13173));
})())+"*");

break;
case "string":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13174_13181 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13174_13181,sb__4366__auto__,G__13163,map__13162,map__13162__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13174_13181,sb__4366__auto__,G__13163,map__13162,map__13162__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13174_13181;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p));

break;
case "plus":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13175 = hidden_QMARK_;var G__13176 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13175,G__13176) : instaparse.print.paren_for_compound.call(null,G__13175,G__13176));
})())+"+");

break;
case "epsilon":
return "\u03B5";

break;
case "string-ci":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13177_13182 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13177_13182,sb__4366__auto__,G__13163,map__13162,map__13162__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13177_13182,sb__4366__auto__,G__13163,map__13162,map__13162__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13177_13182;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "opt":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13178 = hidden_QMARK_;var G__13179 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__13178,G__13179) : instaparse.print.paren_for_compound.call(null,G__13178,G__13179));
})())+"?");

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))));

}
}
});
combinators__GT_str = function(p__13139,hidden_QMARK_){
switch(arguments.length){
case 1:
return combinators__GT_str__1.call(this,p__13139);
case 2:
return combinators__GT_str__2.call(this,p__13139,hidden_QMARK_);
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
instaparse.print.Parser__GT_str = (function Parser__GT_str(p__13183){var map__13196 = p__13183;var map__13196__$1 = ((cljs.core.seq_QMARK_(map__13196))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13196):map__13196);var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13196__$1,cljs.core.constant$keyword$66);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13196__$1,cljs.core.constant$keyword$67);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(function (){var G__13197 = start;return (grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(G__13197) : grammar.call(null,G__13197));
})()),(function (){var iter__4164__auto__ = ((function (map__13196,map__13196__$1,grammar,start){
return (function iter__13198(s__13199){return (new cljs.core.LazySeq(null,((function (map__13196,map__13196__$1,grammar,start){
return (function (){var s__13199__$1 = s__13199;while(true){
var temp__4126__auto__ = cljs.core.seq(s__13199__$1);if(temp__4126__auto__)
{var s__13199__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__13199__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__13199__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__13201 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__13200 = (0);while(true){
if((i__13200 < size__4163__auto__))
{var vec__13206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__13200);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13206,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13206,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{cljs.core.chunk_append(b__13201,instaparse.print.rule__GT_str(terminal,parser));
{
var G__13208 = (i__13200 + (1));
i__13200 = G__13208;
continue;
}
} else
{{
var G__13209 = (i__13200 + (1));
i__13200 = G__13209;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__13201),iter__13198(cljs.core.chunk_rest(s__13199__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__13201),null);
}
} else
{var vec__13207 = cljs.core.first(s__13199__$2);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13207,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13207,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{return cljs.core.cons(instaparse.print.rule__GT_str(terminal,parser),iter__13198(cljs.core.rest(s__13199__$2)));
} else
{{
var G__13210 = cljs.core.rest(s__13199__$2);
s__13199__$1 = G__13210;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__13196,map__13196__$1,grammar,start))
,null,null));
});})(map__13196,map__13196__$1,grammar,start))
;return iter__4164__auto__(grammar);
})()));
});
