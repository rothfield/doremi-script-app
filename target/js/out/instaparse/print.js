// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function paren_for_tags(tag_set,hidden_QMARK_,parser){if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{var G__14258 = (function (){var G__14259 = cljs.core.constant$keyword$42;return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__14259) : parser.call(null,G__14259));
})();return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__14258) : tag_set.call(null,G__14258));
} else
{return and__3413__auto__;
}
})()))
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14260 = parser;var G__14261 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__14260,G__14261) : instaparse.print.combinators__GT_str.call(null,G__14260,G__14261));
})())+")");
} else
{var G__14262 = parser;var G__14263 = false;return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(G__14262,G__14263) : instaparse.print.combinators__GT_str.call(null,G__14262,G__14263));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$53,null], null), null));
/**
* Replaces whitespace characters with escape sequences for better printing
*/
instaparse.print.regexp_replace = (function regexp_replace(s){var G__14265 = s;switch (G__14265) {
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
var combinators__GT_str__2 = (function (p__14267,hidden_QMARK_){var map__14290 = p__14267;var map__14290__$1 = ((cljs.core.seq_QMARK_(map__14290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14290):map__14290);var p = map__14290__$1;var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14290__$1,cljs.core.constant$keyword$42);var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14290__$1,cljs.core.constant$keyword$52);var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14290__$1,cljs.core.constant$keyword$55);var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14290__$1,cljs.core.constant$keyword$54);var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14290__$1,cljs.core.constant$keyword$45);if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.not(hidden_QMARK_);if(and__3413__auto__)
{return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(p);
} else
{return and__3413__auto__;
}
})()))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true))+">");
} else
{var G__14291 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__14291) {
case "neg":
return ("!"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14292 = hidden_QMARK_;var G__14293 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14292,G__14293) : instaparse.print.paren_for_compound.call(null,G__14292,G__14293));
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
return ("&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14294 = hidden_QMARK_;var G__14295 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14294,G__14295) : instaparse.print.paren_for_compound.call(null,G__14294,G__14295));
})()));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(p))),(1));

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p),cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14296 = hidden_QMARK_;var G__14297 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14296,G__14297) : instaparse.print.paren_for_compound.call(null,G__14296,G__14297));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p))+"}");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14298 = hidden_QMARK_;var G__14299 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14298,G__14299) : instaparse.print.paren_for_compound.call(null,G__14298,G__14299));
})())+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(p))+"}");
}

break;
case "star":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14300 = hidden_QMARK_;var G__14301 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14300,G__14301) : instaparse.print.paren_for_compound.call(null,G__14300,G__14301));
})())+"*");

break;
case "string":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14302_14309 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14302_14309,sb__4366__auto__,G__14291,map__14290,map__14290__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14302_14309,sb__4366__auto__,G__14291,map__14290,map__14290__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14302_14309;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p));

break;
case "plus":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14303 = hidden_QMARK_;var G__14304 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14303,G__14304) : instaparse.print.paren_for_compound.call(null,G__14303,G__14304));
})())+"+");

break;
case "epsilon":
return "\u03B5";

break;
case "string-ci":
var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14305_14310 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14305_14310,sb__4366__auto__,G__14291,map__14290,map__14290__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14305_14310,sb__4366__auto__,G__14291,map__14290,map__14290__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14305_14310;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));

break;
case "opt":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14306 = hidden_QMARK_;var G__14307 = parser;return (instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(G__14306,G__14307) : instaparse.print.paren_for_compound.call(null,G__14306,G__14307));
})())+"?");

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))));

}
}
});
combinators__GT_str = function(p__14267,hidden_QMARK_){
switch(arguments.length){
case 1:
return combinators__GT_str__1.call(this,p__14267);
case 2:
return combinators__GT_str__2.call(this,p__14267,hidden_QMARK_);
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
instaparse.print.Parser__GT_str = (function Parser__GT_str(p__14311){var map__14324 = p__14311;var map__14324__$1 = ((cljs.core.seq_QMARK_(map__14324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14324):map__14324);var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14324__$1,cljs.core.constant$keyword$66);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14324__$1,cljs.core.constant$keyword$67);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(function (){var G__14325 = start;return (grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(G__14325) : grammar.call(null,G__14325));
})()),(function (){var iter__4164__auto__ = ((function (map__14324,map__14324__$1,grammar,start){
return (function iter__14326(s__14327){return (new cljs.core.LazySeq(null,((function (map__14324,map__14324__$1,grammar,start){
return (function (){var s__14327__$1 = s__14327;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14327__$1);if(temp__4126__auto__)
{var s__14327__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14327__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14327__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14329 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14328 = (0);while(true){
if((i__14328 < size__4163__auto__))
{var vec__14334 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14328);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14334,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14334,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{cljs.core.chunk_append(b__14329,instaparse.print.rule__GT_str(terminal,parser));
{
var G__14336 = (i__14328 + (1));
i__14328 = G__14336;
continue;
}
} else
{{
var G__14337 = (i__14328 + (1));
i__14328 = G__14337;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14329),iter__14326(cljs.core.chunk_rest(s__14327__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14329),null);
}
} else
{var vec__14335 = cljs.core.first(s__14327__$2);var terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(terminal,start))
{return cljs.core.cons(instaparse.print.rule__GT_str(terminal,parser),iter__14326(cljs.core.rest(s__14327__$2)));
} else
{{
var G__14338 = cljs.core.rest(s__14327__$2);
s__14327__$1 = G__14338;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__14324,map__14324__$1,grammar,start))
,null,null));
});})(map__14324,map__14324__$1,grammar,start))
;return iter__4164__auto__(grammar);
})()));
});
