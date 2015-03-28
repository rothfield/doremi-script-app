// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.transform');
goog.require('cljs.core');
goog.require('instaparse.gll');
instaparse.transform.map_preserving_meta = (function map_preserving_meta(f,l){return cljs.core.with_meta(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,l),cljs.core.meta(l));
});
/**
* This variation of the merge-meta in gll does nothing if obj is not
* something that can have a metamap attached.
*/
instaparse.transform.merge_meta = (function merge_meta(obj,metamap){if((function (){var G__13081 = obj;if(G__13081)
{var bit__4089__auto__ = (G__13081.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4089__auto__) || (G__13081.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__13081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13081);
}
})())
{return instaparse.gll.merge_meta(obj,metamap);
} else
{return obj;
}
});
instaparse.transform.enlive_transform = (function enlive_transform(transform_map,parse_tree){var transform = (function (){var G__13083 = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parse_tree);return (transform_map.cljs$core$IFn$_invoke$arity$1 ? transform_map.cljs$core$IFn$_invoke$arity$1(G__13083) : transform_map.call(null,G__13083));
})();if(cljs.core.truth_(transform))
{return instaparse.transform.merge_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(enlive_transform,transform_map),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(parse_tree))),cljs.core.meta(parse_tree));
} else
{if(cljs.core.truth_(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parse_tree)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_tree,cljs.core.constant$keyword$43,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(enlive_transform,transform_map),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(parse_tree)));
} else
{return parse_tree;

}
}
});
instaparse.transform.hiccup_transform = (function hiccup_transform(transform_map,parse_tree){if((cljs.core.sequential_QMARK_(parse_tree)) && (cljs.core.seq(parse_tree)))
{var temp__4124__auto__ = (function (){var G__13085 = cljs.core.first(parse_tree);return (transform_map.cljs$core$IFn$_invoke$arity$1 ? transform_map.cljs$core$IFn$_invoke$arity$1(G__13085) : transform_map.call(null,G__13085));
})();if(cljs.core.truth_(temp__4124__auto__))
{var transform = temp__4124__auto__;return instaparse.transform.merge_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hiccup_transform,transform_map),cljs.core.next(parse_tree))),cljs.core.meta(parse_tree));
} else
{return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parse_tree)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hiccup_transform,transform_map),cljs.core.next(parse_tree))),cljs.core.meta(parse_tree));
}
} else
{return parse_tree;
}
});
/**
* Takes a transform map and a parse tree (or seq of parse-trees).
* A transform map is a mapping from tags to
* functions that take a node's contents and return
* a replacement for the node, i.e.,
* {:node-tag (fn [child1 child2 ...] node-replacement),
* :another-node-tag (fn [child1 child2 ...] node-replacement)}
*/
instaparse.transform.transform = (function transform(transform_map,parse_tree){if(cljs.core.truth_((function (){var and__3413__auto__ = cljs.core.map_QMARK_(parse_tree);if(and__3413__auto__)
{return cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parse_tree);
} else
{return and__3413__auto__;
}
})()))
{return instaparse.transform.enlive_transform(transform_map,parse_tree);
} else
{if((cljs.core.vector_QMARK_(parse_tree)) && ((cljs.core.first(parse_tree) instanceof cljs.core.Keyword)))
{return instaparse.transform.hiccup_transform(transform_map,parse_tree);
} else
{if(cljs.core.sequential_QMARK_(parse_tree))
{return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(transform,transform_map),parse_tree);
} else
{if((parse_tree instanceof instaparse.gll.Failure))
{return parse_tree;
} else
{throw "Invalid parse-tree, not recognized as either enlive or hiccup format.";

}
}
}
}
});
