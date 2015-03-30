// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.viz');
goog.require('cljs.core');
/**
* Takes a subtree of the parse tree and returns a [start-index end-index] pair
* indicating the span of text parsed by this subtree.
* start-index is inclusive and end-index is exclusive, as is customary
* with substrings.
* Returns nil if no span metadata is attached.
*/
instaparse.viz.span = (function span(tree){var m = cljs.core.meta(tree);var s = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(m);var e = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_((function (){var and__3413__auto__ = s;if(cljs.core.truth_(and__3413__auto__))
{return e;
} else
{return and__3413__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null);
} else
{return null;
}
});
