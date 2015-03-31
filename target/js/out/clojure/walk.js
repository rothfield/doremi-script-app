// Compiled by ClojureScript 0.0-2371
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_(form))
{var G__12878 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__12878) : outer.call(null,G__12878));
} else
{if(cljs.core.coll_QMARK_(form))
{var G__12879 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__12879) : outer.call(null,G__12879));
} else
{var G__12880 = form;return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__12880) : outer.call(null,G__12880));

}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(prewalk,f),cljs.core.identity,(function (){var G__12882 = form;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12882) : f.call(null,G__12882));
})());
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__12885){var vec__12886 = p__12885;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12886,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12886,(1),null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk(((function (f){
return (function (x){if(cljs.core.map_QMARK_(x))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__12889){var vec__12890 = p__12889;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(1),null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk(((function (f){
return (function (x){if(cljs.core.map_QMARK_(x))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk((function (x){if(cljs.core.contains_QMARK_(smap,x))
{var G__12892 = x;return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(G__12892) : smap.call(null,G__12892));
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk((function (x){if(cljs.core.contains_QMARK_(smap,x))
{var G__12894 = x;return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(G__12894) : smap.call(null,G__12894));
} else
{return x;
}
}),form);
});
