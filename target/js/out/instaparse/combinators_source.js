// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('instaparse.reduction');
goog.require('instaparse.reduction');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$44], null);
/**
* Optional, i.e., parser?
*/
instaparse.combinators_source.opt = (function opt(parser){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$46,cljs.core.constant$keyword$45,parser], null);
}
});
/**
* One or more, i.e., parser+
*/
instaparse.combinators_source.plus = (function plus(parser){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$47,cljs.core.constant$keyword$45,parser], null);
}
});
/**
* Zero or more, i.e., parser*
*/
instaparse.combinators_source.star = (function star(parser){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$48,cljs.core.constant$keyword$45,parser], null);
}
});
/**
* Between m and n repetitions
*/
instaparse.combinators_source.rep = (function rep(m,n,parser){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$51,cljs.core.constant$keyword$45,parser,cljs.core.constant$keyword$49,m,cljs.core.constant$keyword$50,n], null);
}
});
/**
* Alternation, i.e., parser1 | parser2 | parser3 | ...
* @param {...*} var_args
*/
instaparse.combinators_source.alt = (function() { 
var alt__delegate = function (parsers){if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers))
{return instaparse.combinators_source.Epsilon;
} else
{if(instaparse.reduction.singleton_QMARK_(parsers))
{return cljs.core.first(parsers);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$53,cljs.core.constant$keyword$52,parsers], null);

}
}
};
var alt = function (var_args){
var parsers = null;if (arguments.length > 0) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alt__delegate.call(this,parsers);};
alt.cljs$lang$maxFixedArity = 0;
alt.cljs$lang$applyTo = (function (arglist__14341){
var parsers = cljs.core.seq(arglist__14341);
return alt__delegate(parsers);
});
alt.cljs$core$IFn$_invoke$arity$variadic = alt__delegate;
return alt;
})()
;
instaparse.combinators_source.ord2 = (function ord2(parser1,parser2){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$56,cljs.core.constant$keyword$54,parser1,cljs.core.constant$keyword$55,parser2], null);
});
/**
* Ordered choice, i.e., parser1 / parser2
* @param {...*} var_args
*/
instaparse.combinators_source.ord = (function() {
var ord = null;
var ord__0 = (function (){return instaparse.combinators_source.Epsilon;
});
var ord__2 = (function() { 
var G__14342__delegate = function (parser1,parsers){var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers):parsers);if(cljs.core.seq(parsers__$1))
{return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ord,parsers__$1));
} else
{return parser1;
}
};
var G__14342 = function (parser1,var_args){
var parsers = null;if (arguments.length > 1) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14342__delegate.call(this,parser1,parsers);};
G__14342.cljs$lang$maxFixedArity = 1;
G__14342.cljs$lang$applyTo = (function (arglist__14343){
var parser1 = cljs.core.first(arglist__14343);
var parsers = cljs.core.rest(arglist__14343);
return G__14342__delegate(parser1,parsers);
});
G__14342.cljs$core$IFn$_invoke$arity$variadic = G__14342__delegate;
return G__14342;
})()
;
ord = function(parser1,var_args){
var parsers = var_args;
switch(arguments.length){
case 0:
return ord__0.call(this);
default:
return ord__2.cljs$core$IFn$_invoke$arity$variadic(parser1, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ord.cljs$lang$maxFixedArity = 1;
ord.cljs$lang$applyTo = ord__2.cljs$lang$applyTo;
ord.cljs$core$IFn$_invoke$arity$0 = ord__0;
ord.cljs$core$IFn$_invoke$arity$variadic = ord__2.cljs$core$IFn$_invoke$arity$variadic;
return ord;
})()
;
/**
* Concatenation, i.e., parser1 parser2 ...
* @param {...*} var_args
*/
instaparse.combinators_source.cat = (function() { 
var cat__delegate = function (parsers){if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers))
{return instaparse.combinators_source.Epsilon;
} else
{var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers);if(instaparse.reduction.singleton_QMARK_(parsers__$1))
{return cljs.core.first(parsers__$1);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,parsers__$1], null);
}
}
};
var cat = function (var_args){
var parsers = null;if (arguments.length > 0) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cat__delegate.call(this,parsers);};
cat.cljs$lang$maxFixedArity = 0;
cat.cljs$lang$applyTo = (function (arglist__14344){
var parsers = cljs.core.seq(arglist__14344);
return cat__delegate(parsers);
});
cat.cljs$core$IFn$_invoke$arity$variadic = cat__delegate;
return cat;
})()
;
/**
* Create a string terminal out of s
*/
instaparse.combinators_source.string = (function string(s){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,""))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$58,cljs.core.constant$keyword$58,s], null);
}
});
/**
* Create a case-insensitive string terminal out of s
*/
instaparse.combinators_source.string_ci = (function string_ci(s){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,""))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$59,cljs.core.constant$keyword$58,s], null);
}
});
/**
* (str regexp) in clojurescript puts slashes around the result, unlike
* in clojure. Work around that.
*/
instaparse.combinators_source.regexp__GT_str = (function regexp__GT_str(r){if(cljs.core.regexp_QMARK_(r))
{var s = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
} else
{return r;
}
});
/**
* Create a regexp terminal out of regular expression r
*/
instaparse.combinators_source.regexp = (function regexp(r){var s = ("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.combinators_source.regexp__GT_str(r)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"^"))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$60,cljs.core.constant$keyword$60,cljs.core.re_pattern(s)], null);
}
});
/**
* Refers to a non-terminal defined by the grammar map
*/
instaparse.combinators_source.nt = (function nt(s){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$62,cljs.core.constant$keyword$61,s], null);
});
/**
* Lookahead, i.e., &parser
*/
instaparse.combinators_source.look = (function look(parser){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$63,cljs.core.constant$keyword$45,parser], null);
});
/**
* Negative lookahead, i.e., !parser
*/
instaparse.combinators_source.neg = (function neg(parser){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$64,cljs.core.constant$keyword$45,parser], null);
});
/**
* Hide the result of parser, i.e., <parser>
*/
instaparse.combinators_source.hide = (function hide(parser){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$65,true);
});
/**
* Hide the tag associated with this rule.
* Wrap this combinator around the entire right-hand side.
*/
instaparse.combinators_source.hide_tag = (function hide_tag(parser){return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
* Tests whether parser was created with hide-tag combinator
*/
instaparse.combinators_source.hidden_tag_QMARK_ = (function hidden_tag_QMARK_(parser){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
* Recursively undoes the effect of hide on one parser
*/
instaparse.combinators_source.unhide_content = (function unhide_content(parser){var parser__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.constant$keyword$65):parser);if(cljs.core.truth_(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser__$1)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.constant$keyword$45,unhide_content(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{if(cljs.core.truth_(cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser__$1)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.constant$keyword$52,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unhide_content,cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser__$1),cljs.core.constant$keyword$56))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,cljs.core.constant$keyword$54,unhide_content(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(parser__$1)),cljs.core.array_seq([cljs.core.constant$keyword$55,unhide_content(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(parser__$1))], 0));
} else
{return parser__$1;

}
}
}
});
/**
* Recursively undoes the effect of hide on all parsers in the grammar
*/
instaparse.combinators_source.unhide_all_content = (function unhide_all_content(grammar){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__14358(s__14359){return (new cljs.core.LazySeq(null,(function (){var s__14359__$1 = s__14359;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14359__$1);if(temp__4126__auto__)
{var s__14359__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14359__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14359__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14361 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14360 = (0);while(true){
if((i__14360 < size__4163__auto__))
{var vec__14366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14360);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(1),null);cljs.core.chunk_append(b__14361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));
{
var G__14368 = (i__14360 + (1));
i__14360 = G__14368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14361),iter__14358(cljs.core.chunk_rest(s__14359__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14361),null);
}
} else
{var vec__14367 = cljs.core.first(s__14359__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),iter__14358(cljs.core.rest(s__14359__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4164__auto__(grammar);
})());
});
/**
* Recursively undoes the effect of hide-tag
*/
instaparse.combinators_source.unhide_tags = (function unhide_tags(reduction_type,grammar){var temp__4124__auto__ = (function (){var G__14384 = reduction_type;return (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(G__14384) : instaparse.reduction.reduction_types.call(null,G__14384));
})();if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__14385(s__14386){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__14386__$1 = s__14386;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14386__$1);if(temp__4126__auto__)
{var s__14386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14386__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14386__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14388 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14387 = (0);while(true){
if((i__14387 < size__4163__auto__))
{var vec__14395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14387);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(1),null);cljs.core.chunk_append(b__14388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$37,(function (){var G__14396 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14396) : reduction.call(null,G__14396));
})())], null));
{
var G__14399 = (i__14387 + (1));
i__14387 = G__14399;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14388),iter__14385(cljs.core.chunk_rest(s__14386__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14388),null);
}
} else
{var vec__14397 = cljs.core.first(s__14386__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$37,(function (){var G__14398 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14398) : reduction.call(null,G__14398));
})())], null),iter__14385(cljs.core.rest(s__14386__$2)));
}
} else
{return null;
}
break;
}
});})(reduction,temp__4124__auto__))
,null,null));
});})(reduction,temp__4124__auto__))
;return iter__4164__auto__(grammar);
})());
} else
{throw ("Invalid output format"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reduction_type)+". Use :enlive or :hiccup.");
}
});
/**
* Recursively undoes the effect of both hide and hide-tag
*/
instaparse.combinators_source.unhide_all = (function unhide_all(reduction_type,grammar){var temp__4124__auto__ = (function (){var G__14415 = reduction_type;return (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(G__14415) : instaparse.reduction.reduction_types.call(null,G__14415));
})();if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__14416(s__14417){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__14417__$1 = s__14417;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14417__$1);if(temp__4126__auto__)
{var s__14417__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14417__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14417__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14419 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14418 = (0);while(true){
if((i__14418 < size__4163__auto__))
{var vec__14426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14418);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(1),null);cljs.core.chunk_append(b__14419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.constant$keyword$37,(function (){var G__14427 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14427) : reduction.call(null,G__14427));
})())], null));
{
var G__14430 = (i__14418 + (1));
i__14418 = G__14430;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14419),iter__14416(cljs.core.chunk_rest(s__14417__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14419),null);
}
} else
{var vec__14428 = cljs.core.first(s__14417__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.constant$keyword$37,(function (){var G__14429 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14429) : reduction.call(null,G__14429));
})())], null),iter__14416(cljs.core.rest(s__14417__$2)));
}
} else
{return null;
}
break;
}
});})(reduction,temp__4124__auto__))
,null,null));
});})(reduction,temp__4124__auto__))
;return iter__4164__auto__(grammar);
})());
} else
{throw ("Invalid output format"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reduction_type)+". Use :enlive or :hiccup.");
}
});
instaparse.combinators_source.auto_whitespace_parser = (function auto_whitespace_parser(parser,ws_parser){var G__14441 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__14441) {
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$52,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14441){
return (function (p1__14431_SHARP_){return auto_whitespace_parser(p1__14431_SHARP_,ws_parser);
});})(G__14441))
,cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,cljs.core.constant$keyword$54,auto_whitespace_parser(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(parser),ws_parser),cljs.core.array_seq([cljs.core.constant$keyword$55,auto_whitespace_parser(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(parser),ws_parser)], 0));

break;
case "alt":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$52,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14441){
return (function (p1__14431_SHARP_){return auto_whitespace_parser(p1__14431_SHARP_,ws_parser);
});})(G__14441))
,cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "look":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
case "nt":
return parser;

break;
case "rep":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
case "star":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
case "string":
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.constant$keyword$37)], 0)),cljs.core.constant$keyword$37,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "regexp":
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.constant$keyword$37)], 0)),cljs.core.constant$keyword$37,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "plus":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
case "epsilon":
return parser;

break;
case "string-ci":
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.constant$keyword$37)], 0)),cljs.core.constant$keyword$37,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ws_parser,parser], 0));
}

break;
case "opt":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null),auto_whitespace_parser,ws_parser);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.combinators_source.auto_whitespace = (function auto_whitespace(grammar,start,grammar_ws,start_ws){var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((function (){var G__14456 = start_ws;return (grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(G__14456) : grammar_ws.call(null,G__14456));
})()));var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function iter__14457(s__14458){return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){var s__14458__$1 = s__14458;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14458__$1);if(temp__4126__auto__)
{var s__14458__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14458__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14458__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14460 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14459 = (0);while(true){
if((i__14459 < size__4163__auto__))
{var vec__14465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14459);var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(1),null);cljs.core.chunk_append(b__14460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));
{
var G__14469 = (i__14459 + (1));
i__14459 = G__14469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14460),iter__14457(cljs.core.chunk_rest(s__14458__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14460),null);
}
} else
{var vec__14466 = cljs.core.first(s__14458__$2);var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14466,(0),null);var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14466,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),iter__14457(cljs.core.rest(s__14458__$2)));
}
} else
{return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;return iter__4164__auto__(grammar);
})());var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__14467 = start;return (modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(G__14467) : modified_grammar.call(null,G__14467));
})(),cljs.core.constant$keyword$37),ws_parser], 0)),cljs.core.constant$keyword$37,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__14468 = start;return (modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(G__14468) : modified_grammar.call(null,G__14468));
})())));return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([final_grammar,grammar_ws__$1], 0));
});
