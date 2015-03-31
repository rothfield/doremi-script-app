// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.auto_flatten_seq');
instaparse.reduction.singleton_QMARK_ = (function singleton_QMARK_(s){return (cljs.core.seq(s)) && (cljs.core.not(cljs.core.next(s)));
});
instaparse.reduction.red = (function red(parser,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$37,f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$39], null);
instaparse.reduction.HiccupNonTerminalReduction = (function HiccupNonTerminalReduction(key){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$40,cljs.core.constant$keyword$36,key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function EnliveNonTerminalReduction(key){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$41,cljs.core.constant$keyword$36,key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,instaparse.reduction.HiccupNonTerminalReduction,cljs.core.constant$keyword$41,instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,(function (tag,item){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,tag,cljs.core.constant$keyword$43,cljs.core._conj(cljs.core.List.EMPTY,item)], null);
}),cljs.core.constant$keyword$40,(function (tag,item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = cljs.core.constant$keyword$40;
instaparse.reduction.apply_reduction = (function apply_reduction(f,result){var G__14214 = (((cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(f).fqn:null);switch (G__14214) {
case "enlive":
var content = instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,result);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(f),cljs.core.constant$keyword$43,(((cljs.core.count(content) === (0)))?null:content)], null);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(f)], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result));

break;
case "raw":
return instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,result);

break;
default:
var G__14215 = result;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14215) : f.call(null,G__14215));

}
});
instaparse.reduction.apply_standard_reductions = (function() {
var apply_standard_reductions = null;
var apply_standard_reductions__1 = (function (grammar){return apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(instaparse.reduction.standard_non_terminal_reduction,grammar);
});
var apply_standard_reductions__2 = (function (reduction_type,grammar){var temp__4124__auto__ = (function (){var G__14234 = reduction_type;return (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(G__14234) : instaparse.reduction.reduction_types.call(null,G__14234));
})();if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__14235(s__14236){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__14236__$1 = s__14236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14236__$1);if(temp__4126__auto__)
{var s__14236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14236__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14236__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14238 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14237 = (0);while(true){
if((i__14237 < size__4163__auto__))
{var vec__14245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14237);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14245,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14245,(1),null);cljs.core.chunk_append(b__14238,(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$37,(function (){var G__14246 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14246) : reduction.call(null,G__14246));
})())], null)));
{
var G__14249 = (i__14237 + (1));
i__14237 = G__14249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14238),iter__14235(cljs.core.chunk_rest(s__14236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14238),null);
}
} else
{var vec__14247 = cljs.core.first(s__14236__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(1),null);return cljs.core.cons((cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$37,(function (){var G__14248 = k;return (reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(G__14248) : reduction.call(null,G__14248));
})())], null)),iter__14235(cljs.core.rest(s__14236__$2)));
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
apply_standard_reductions = function(reduction_type,grammar){
switch(arguments.length){
case 1:
return apply_standard_reductions__1.call(this,reduction_type);
case 2:
return apply_standard_reductions__2.call(this,reduction_type,grammar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = apply_standard_reductions__1;
apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = apply_standard_reductions__2;
return apply_standard_reductions;
})()
;
