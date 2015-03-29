// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
goog.require('instaparse.print');
/**
* Takes an index into text, and determines the line and column info
*/
instaparse.failure.index__GT_line_column = (function index__GT_line_column(index,text){var line = (1);var col = (1);var counter = (0);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,line,cljs.core.constant$keyword$69,col], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter)))
{{
var G__12812 = (line + (1));
var G__12813 = (1);
var G__12814 = (counter + (1));
line = G__12812;
col = G__12813;
counter = G__12814;
continue;
}
} else
{{
var G__12815 = line;
var G__12816 = (col + (1));
var G__12817 = (counter + (1));
line = G__12815;
col = G__12816;
counter = G__12817;
continue;
}

}
}
break;
}
});
instaparse.failure.newline_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null);
/**
* Like the line-seq that comes with clojure, but operates directly on
* a string instead of a BufferedReader. Probably slow.
*/
instaparse.failure.line_seq = (function line_seq(s){if(cljs.core.empty_QMARK_(s))
{return null;
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12818_SHARP_){return cljs.core.not((function (){var G__12820 = cljs.core.first(p1__12818_SHARP_);return (instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1 ? instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1(G__12820) : instaparse.failure.newline_chars.call(null,G__12820));
})());
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(instaparse.failure.newline_chars,s)));
}
});
/**
* Returns nth line of text, 1-based
*/
instaparse.failure.get_line = (function get_line(n,text){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instaparse.failure.line_seq(text),(n - (1)));
});
/**
* Creates string with caret at nth position, 1-based
*/
instaparse.failure.marker = (function marker(n){if(cljs.core.integer_QMARK_(n))
{if((n <= (1)))
{return "^";
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else
{return null;
}
});
/**
* Adds text, line, and column info to failure object.
*/
instaparse.failure.augment_failure = (function augment_failure(failure,text){var lc = instaparse.failure.index__GT_line_column(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(failure),text);return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,instaparse.failure.get_line(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
* Provides special case for printing negative lookahead reasons
*/
instaparse.failure.print_reason = (function print_reason(r){if(cljs.core.truth_(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(r)))
{cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["NOT "], 0));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(r)], 0));
} else
{if((r instanceof java.util.regex.Pattern))
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.print.regexp__GT_str(r)], 0));
} else
{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r], 0));

}
}
});
/**
* Takes an augmented failure object and prints the error message
*/
instaparse.failure.pprint_failure = (function pprint_failure(p__12821){var map__12831 = p__12821;var map__12831__$1 = ((cljs.core.seq_QMARK_(map__12831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12831):map__12831);var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12831__$1,cljs.core.constant$keyword$73);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12831__$1,cljs.core.constant$keyword$71);var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12831__$1,cljs.core.constant$keyword$69);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12831__$1,cljs.core.constant$keyword$68);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parse error at line",line,", column",column,":\n"], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([text], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.failure.marker(column)], 0));
var full_reasons = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75,reason)));var partial_reasons = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.constant$keyword$75),reason)));var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));if((total === (0)))
{} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected:"], 0));
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected one of:"], 0));

}
}
var seq__12832_12840 = cljs.core.seq(full_reasons);var chunk__12833_12841 = null;var count__12834_12842 = (0);var i__12835_12843 = (0);while(true){
if((i__12835_12843 < count__12834_12842))
{var r_12844 = chunk__12833_12841.cljs$core$IIndexed$_nth$arity$2(null,i__12835_12843);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_12844], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__12845 = seq__12832_12840;
var G__12846 = chunk__12833_12841;
var G__12847 = count__12834_12842;
var G__12848 = (i__12835_12843 + (1));
seq__12832_12840 = G__12845;
chunk__12833_12841 = G__12846;
count__12834_12842 = G__12847;
i__12835_12843 = G__12848;
continue;
}
} else
{var temp__4126__auto___12849 = cljs.core.seq(seq__12832_12840);if(temp__4126__auto___12849)
{var seq__12832_12850__$1 = temp__4126__auto___12849;if(cljs.core.chunked_seq_QMARK_(seq__12832_12850__$1))
{var c__4195__auto___12851 = cljs.core.chunk_first(seq__12832_12850__$1);{
var G__12852 = cljs.core.chunk_rest(seq__12832_12850__$1);
var G__12853 = c__4195__auto___12851;
var G__12854 = cljs.core.count(c__4195__auto___12851);
var G__12855 = (0);
seq__12832_12840 = G__12852;
chunk__12833_12841 = G__12853;
count__12834_12842 = G__12854;
i__12835_12843 = G__12855;
continue;
}
} else
{var r_12856 = cljs.core.first(seq__12832_12850__$1);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_12856], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__12857 = cljs.core.next(seq__12832_12850__$1);
var G__12858 = null;
var G__12859 = (0);
var G__12860 = (0);
seq__12832_12840 = G__12857;
chunk__12833_12841 = G__12858;
count__12834_12842 = G__12859;
i__12835_12843 = G__12860;
continue;
}
}
} else
{}
}
break;
}
var seq__12836 = cljs.core.seq(partial_reasons);var chunk__12837 = null;var count__12838 = (0);var i__12839 = (0);while(true){
if((i__12839 < count__12838))
{var r = chunk__12837.cljs$core$IIndexed$_nth$arity$2(null,i__12839);instaparse.failure.print_reason(r);
{
var G__12861 = seq__12836;
var G__12862 = chunk__12837;
var G__12863 = count__12838;
var G__12864 = (i__12839 + (1));
seq__12836 = G__12861;
chunk__12837 = G__12862;
count__12838 = G__12863;
i__12839 = G__12864;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12836);if(temp__4126__auto__)
{var seq__12836__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12836__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12836__$1);{
var G__12865 = cljs.core.chunk_rest(seq__12836__$1);
var G__12866 = c__4195__auto__;
var G__12867 = cljs.core.count(c__4195__auto__);
var G__12868 = (0);
seq__12836 = G__12865;
chunk__12837 = G__12866;
count__12838 = G__12867;
i__12839 = G__12868;
continue;
}
} else
{var r = cljs.core.first(seq__12836__$1);instaparse.failure.print_reason(r);
{
var G__12869 = cljs.core.next(seq__12836__$1);
var G__12870 = null;
var G__12871 = (0);
var G__12872 = (0);
seq__12836 = G__12869;
chunk__12837 = G__12870;
count__12838 = G__12871;
i__12839 = G__12872;
continue;
}
}
} else
{return null;
}
}
break;
}
});
