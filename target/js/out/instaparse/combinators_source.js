// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('instaparse.reduction');
goog.require('instaparse.reduction');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)], null);
/**
* Optional, i.e., parser?
*/
instaparse.combinators_source.opt = (function opt(parser){if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
* One or more, i.e., parser+
*/
instaparse.combinators_source.plus = (function plus(parser){if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
* Zero or more, i.e., parser*
*/
instaparse.combinators_source.star = (function star(parser){if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
* Between m and n repetitions
*/
instaparse.combinators_source.rep = (function rep(m,n,parser){if((m <= n))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"min","min",444991522),m,new cljs.core.Keyword(null,"max","max",61366548),n], null);
}
});
/**
* Alternation, i.e., parser1 | parser2 | parser3 | ...
* @param {...*} var_args
*/
instaparse.combinators_source.alt = (function() { 
var alt__delegate = function (parsers){if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers))
{return instaparse.combinators_source.Epsilon;
} else
{if(instaparse.reduction.singleton_QMARK_.call(null,parsers))
{return cljs.core.first.call(null,parsers);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers], null);

}
}
};
var alt = function (var_args){
var parsers = null;if (arguments.length > 0) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alt__delegate.call(this,parsers);};
alt.cljs$lang$maxFixedArity = 0;
alt.cljs$lang$applyTo = (function (arglist__7569){
var parsers = cljs.core.seq(arglist__7569);
return alt__delegate(parsers);
});
alt.cljs$core$IFn$_invoke$arity$variadic = alt__delegate;
return alt;
})()
;
instaparse.combinators_source.ord2 = (function ord2(parser1,parser2){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
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
var G__7570__delegate = function (parser1,parsers){var parsers__$1 = ((cljs.core._EQ_.call(null,parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers):parsers);if(cljs.core.seq.call(null,parsers__$1))
{return instaparse.combinators_source.ord2.call(null,parser1,cljs.core.apply.call(null,ord,parsers__$1));
} else
{return parser1;
}
};
var G__7570 = function (parser1,var_args){
var parsers = null;if (arguments.length > 1) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__7570__delegate.call(this,parser1,parsers);};
G__7570.cljs$lang$maxFixedArity = 1;
G__7570.cljs$lang$applyTo = (function (arglist__7571){
var parser1 = cljs.core.first(arglist__7571);
var parsers = cljs.core.rest(arglist__7571);
return G__7570__delegate(parser1,parsers);
});
G__7570.cljs$core$IFn$_invoke$arity$variadic = G__7570__delegate;
return G__7570;
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
var cat__delegate = function (parsers){if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers))
{return instaparse.combinators_source.Epsilon;
} else
{var parsers__$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([instaparse.combinators_source.Epsilon], true),parsers);if(instaparse.reduction.singleton_QMARK_.call(null,parsers__$1))
{return cljs.core.first.call(null,parsers__$1);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers__$1], null);
}
}
};
var cat = function (var_args){
var parsers = null;if (arguments.length > 0) {
  parsers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cat__delegate.call(this,parsers);};
cat.cljs$lang$maxFixedArity = 0;
cat.cljs$lang$applyTo = (function (arglist__7572){
var parsers = cljs.core.seq(arglist__7572);
return cat__delegate(parsers);
});
cat.cljs$core$IFn$_invoke$arity$variadic = cat__delegate;
return cat;
})()
;
/**
* Create a string terminal out of s
*/
instaparse.combinators_source.string = (function string(s){if(cljs.core._EQ_.call(null,s,""))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
* Create a case-insensitive string terminal out of s
*/
instaparse.combinators_source.string_ci = (function string_ci(s){if(cljs.core._EQ_.call(null,s,""))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string-ci","string-ci",374631805),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
* (str regexp) in clojurescript puts slashes around the result, unlike
* in clojure. Work around that.
*/
instaparse.combinators_source.regexp__GT_str = (function regexp__GT_str(r){if(cljs.core.regexp_QMARK_.call(null,r))
{var s = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));return cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
} else
{return r;
}
});
/**
* Create a regexp terminal out of regular expression r
*/
instaparse.combinators_source.regexp = (function regexp(r){var s = ("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.combinators_source.regexp__GT_str.call(null,r)));if(cljs.core._EQ_.call(null,s,"^"))
{return instaparse.combinators_source.Epsilon;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"regexp","regexp",-541372782),cljs.core.re_pattern.call(null,s)], null);
}
});
/**
* Refers to a non-terminal defined by the grammar map
*/
instaparse.combinators_source.nt = (function nt(s){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),s], null);
});
/**
* Lookahead, i.e., &parser
*/
instaparse.combinators_source.look = (function look(parser){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
* Negative lookahead, i.e., !parser
*/
instaparse.combinators_source.neg = (function neg(parser){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
* Hide the result of parser, i.e., <parser>
*/
instaparse.combinators_source.hide = (function hide(parser){return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"hide","hide",-596913169),true);
});
/**
* Hide the tag associated with this rule.
* Wrap this combinator around the entire right-hand side.
*/
instaparse.combinators_source.hide_tag = (function hide_tag(parser){return instaparse.reduction.red.call(null,parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
* Tests whether parser was created with hide-tag combinator
*/
instaparse.combinators_source.hidden_tag_QMARK_ = (function hidden_tag_QMARK_(parser){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
* Recursively undoes the effect of hide on one parser
*/
instaparse.combinators_source.unhide_content = (function unhide_content(parser){var parser__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"hide","hide",-596913169)):parser);if(cljs.core.truth_(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1)))
{return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),unhide_content.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)))
{return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,unhide_content,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser__$1),new cljs.core.Keyword(null,"ord","ord",1142548323)))
{return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422),unhide_content.call(null,new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser__$1)),new cljs.core.Keyword(null,"parser2","parser2",1013754688),unhide_content.call(null,new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{return parser__$1;

}
}
}
});
/**
* Recursively undoes the effect of hide on all parsers in the grammar
*/
instaparse.combinators_source.unhide_all_content = (function unhide_all_content(grammar){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__7581(s__7582){return (new cljs.core.LazySeq(null,(function (){var s__7582__$1 = s__7582;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7582__$1);if(temp__4126__auto__)
{var s__7582__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7582__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7582__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7584 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7583 = (0);while(true){
if((i__7583 < size__4163__auto__))
{var vec__7587 = cljs.core._nth.call(null,c__4162__auto__,i__7583);var k = cljs.core.nth.call(null,vec__7587,(0),null);var v = cljs.core.nth.call(null,vec__7587,(1),null);cljs.core.chunk_append.call(null,b__7584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null));
{
var G__7589 = (i__7583 + (1));
i__7583 = G__7589;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7584),iter__7581.call(null,cljs.core.chunk_rest.call(null,s__7582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7584),null);
}
} else
{var vec__7588 = cljs.core.first.call(null,s__7582__$2);var k = cljs.core.nth.call(null,vec__7588,(0),null);var v = cljs.core.nth.call(null,vec__7588,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null),iter__7581.call(null,cljs.core.rest.call(null,s__7582__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4164__auto__.call(null,grammar);
})());
});
/**
* Recursively undoes the effect of hide-tag
*/
instaparse.combinators_source.unhide_tags = (function unhide_tags(reduction_type,grammar){var temp__4124__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__7598(s__7599){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__7599__$1 = s__7599;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7599__$1);if(temp__4126__auto__)
{var s__7599__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7599__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7599__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7601 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7600 = (0);while(true){
if((i__7600 < size__4163__auto__))
{var vec__7604 = cljs.core._nth.call(null,c__4162__auto__,i__7600);var k = cljs.core.nth.call(null,vec__7604,(0),null);var v = cljs.core.nth.call(null,vec__7604,(1),null);cljs.core.chunk_append.call(null,b__7601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));
{
var G__7606 = (i__7600 + (1));
i__7600 = G__7606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7601),iter__7598.call(null,cljs.core.chunk_rest.call(null,s__7599__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7601),null);
}
} else
{var vec__7605 = cljs.core.first.call(null,s__7599__$2);var k = cljs.core.nth.call(null,vec__7605,(0),null);var v = cljs.core.nth.call(null,vec__7605,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),iter__7598.call(null,cljs.core.rest.call(null,s__7599__$2)));
}
} else
{return null;
}
break;
}
});})(reduction,temp__4124__auto__))
,null,null));
});})(reduction,temp__4124__auto__))
;return iter__4164__auto__.call(null,grammar);
})());
} else
{throw ("Invalid output format"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reduction_type)+". Use :enlive or :hiccup.");
}
});
/**
* Recursively undoes the effect of both hide and hide-tag
*/
instaparse.combinators_source.unhide_all = (function unhide_all(reduction_type,grammar){var temp__4124__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__7615(s__7616){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__7616__$1 = s__7616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7616__$1);if(temp__4126__auto__)
{var s__7616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7616__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7616__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7618 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7617 = (0);while(true){
if((i__7617 < size__4163__auto__))
{var vec__7621 = cljs.core._nth.call(null,c__4162__auto__,i__7617);var k = cljs.core.nth.call(null,vec__7621,(0),null);var v = cljs.core.nth.call(null,vec__7621,(1),null);cljs.core.chunk_append.call(null,b__7618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));
{
var G__7623 = (i__7617 + (1));
i__7617 = G__7623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7618),iter__7615.call(null,cljs.core.chunk_rest.call(null,s__7616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7618),null);
}
} else
{var vec__7622 = cljs.core.first.call(null,s__7616__$2);var k = cljs.core.nth.call(null,vec__7622,(0),null);var v = cljs.core.nth.call(null,vec__7622,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),iter__7615.call(null,cljs.core.rest.call(null,s__7616__$2)));
}
} else
{return null;
}
break;
}
});})(reduction,temp__4124__auto__))
,null,null));
});})(reduction,temp__4124__auto__))
;return iter__4164__auto__.call(null,grammar);
})());
} else
{throw ("Invalid output format"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reduction_type)+". Use :enlive or :hiccup.");
}
});
instaparse.combinators_source.auto_whitespace_parser = (function auto_whitespace_parser(parser,ws_parser){var G__7626 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__7626) {
case "neg":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
case "cat":
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,((function (G__7626){
return (function (p1__7624_SHARP_){return auto_whitespace_parser.call(null,p1__7624_SHARP_,ws_parser);
});})(G__7626))
,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parser1","parser1",-439601422),auto_whitespace_parser.call(null,new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser),ws_parser),new cljs.core.Keyword(null,"parser2","parser2",1013754688),auto_whitespace_parser.call(null,new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser),ws_parser));

break;
case "alt":
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,((function (G__7626){
return (function (p1__7624_SHARP_){return auto_whitespace_parser.call(null,p1__7624_SHARP_,ws_parser);
});})(G__7626))
,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "look":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
case "nt":
return parser;

break;
case "rep":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
case "star":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
case "string":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,ws_parser,cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204))),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.call(null,ws_parser,parser);
}

break;
case "regexp":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,ws_parser,cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204))),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.call(null,ws_parser,parser);
}

break;
case "plus":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
case "epsilon":
return parser;

break;
case "string-ci":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser)))
{return cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,ws_parser,cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204))),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else
{return instaparse.combinators_source.cat.call(null,ws_parser,parser);
}

break;
case "opt":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),auto_whitespace_parser,ws_parser);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.combinators_source.auto_whitespace = (function auto_whitespace(grammar,start,grammar_ws,start_ws){var ws_parser = instaparse.combinators_source.hide.call(null,instaparse.combinators_source.opt.call(null,instaparse.combinators_source.nt.call(null,start_ws)));var grammar_ws__$1 = cljs.core.assoc.call(null,grammar_ws,start_ws,instaparse.combinators_source.hide_tag.call(null,grammar_ws.call(null,start_ws)));var modified_grammar = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function iter__7636(s__7637){return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){var s__7637__$1 = s__7637;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7637__$1);if(temp__4126__auto__)
{var s__7637__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7637__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7637__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7639 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7638 = (0);while(true){
if((i__7638 < size__4163__auto__))
{var vec__7642 = cljs.core._nth.call(null,c__4162__auto__,i__7638);var nt = cljs.core.nth.call(null,vec__7642,(0),null);var parser = cljs.core.nth.call(null,vec__7642,(1),null);cljs.core.chunk_append.call(null,b__7639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null));
{
var G__7644 = (i__7638 + (1));
i__7638 = G__7644;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7639),iter__7636.call(null,cljs.core.chunk_rest.call(null,s__7637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7639),null);
}
} else
{var vec__7643 = cljs.core.first.call(null,s__7637__$2);var nt = cljs.core.nth.call(null,vec__7643,(0),null);var parser = cljs.core.nth.call(null,vec__7643,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null),iter__7636.call(null,cljs.core.rest.call(null,s__7637__$2)));
}
} else
{return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;return iter__4164__auto__.call(null,grammar);
})());var final_grammar = cljs.core.assoc.call(null,modified_grammar,start,cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,cljs.core.dissoc.call(null,modified_grammar.call(null,start),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(modified_grammar.call(null,start))));return cljs.core.merge.call(null,final_grammar,grammar_ws__$1);
});

//# sourceMappingURL=combinators_source.js.map