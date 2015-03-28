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
var G__12816 = (line + (1));
var G__12817 = (1);
var G__12818 = (counter + (1));
line = G__12816;
col = G__12817;
counter = G__12818;
continue;
}
} else
{{
var G__12819 = line;
var G__12820 = (col + (1));
var G__12821 = (counter + (1));
line = G__12819;
col = G__12820;
counter = G__12821;
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
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12822_SHARP_){return cljs.core.not((function (){var G__12824 = cljs.core.first(p1__12822_SHARP_);return (instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1 ? instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1(G__12824) : instaparse.failure.newline_chars.call(null,G__12824));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__12825){var map__12835 = p__12825;var map__12835__$1 = ((cljs.core.seq_QMARK_(map__12835))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12835):map__12835);var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.constant$keyword$73);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.constant$keyword$71);var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.constant$keyword$69);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12835__$1,cljs.core.constant$keyword$68);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parse error at line",line,", column",column,":\n"], 0));
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
var seq__12836_12844 = cljs.core.seq(full_reasons);var chunk__12837_12845 = null;var count__12838_12846 = (0);var i__12839_12847 = (0);while(true){
if((i__12839_12847 < count__12838_12846))
{var r_12848 = chunk__12837_12845.cljs$core$IIndexed$_nth$arity$2(null,i__12839_12847);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_12848], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__12849 = seq__12836_12844;
var G__12850 = chunk__12837_12845;
var G__12851 = count__12838_12846;
var G__12852 = (i__12839_12847 + (1));
seq__12836_12844 = G__12849;
chunk__12837_12845 = G__12850;
count__12838_12846 = G__12851;
i__12839_12847 = G__12852;
continue;
}
} else
{var temp__4126__auto___12853 = cljs.core.seq(seq__12836_12844);if(temp__4126__auto___12853)
{var seq__12836_12854__$1 = temp__4126__auto___12853;if(cljs.core.chunked_seq_QMARK_(seq__12836_12854__$1))
{var c__4195__auto___12855 = cljs.core.chunk_first(seq__12836_12854__$1);{
var G__12856 = cljs.core.chunk_rest(seq__12836_12854__$1);
var G__12857 = c__4195__auto___12855;
var G__12858 = cljs.core.count(c__4195__auto___12855);
var G__12859 = (0);
seq__12836_12844 = G__12856;
chunk__12837_12845 = G__12857;
count__12838_12846 = G__12858;
i__12839_12847 = G__12859;
continue;
}
} else
{var r_12860 = cljs.core.first(seq__12836_12854__$1);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_12860], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__12861 = cljs.core.next(seq__12836_12854__$1);
var G__12862 = null;
var G__12863 = (0);
var G__12864 = (0);
seq__12836_12844 = G__12861;
chunk__12837_12845 = G__12862;
count__12838_12846 = G__12863;
i__12839_12847 = G__12864;
continue;
}
}
} else
{}
}
break;
}
var seq__12840 = cljs.core.seq(partial_reasons);var chunk__12841 = null;var count__12842 = (0);var i__12843 = (0);while(true){
if((i__12843 < count__12842))
{var r = chunk__12841.cljs$core$IIndexed$_nth$arity$2(null,i__12843);instaparse.failure.print_reason(r);
{
var G__12865 = seq__12840;
var G__12866 = chunk__12841;
var G__12867 = count__12842;
var G__12868 = (i__12843 + (1));
seq__12840 = G__12865;
chunk__12841 = G__12866;
count__12842 = G__12867;
i__12843 = G__12868;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12840);if(temp__4126__auto__)
{var seq__12840__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12840__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12840__$1);{
var G__12869 = cljs.core.chunk_rest(seq__12840__$1);
var G__12870 = c__4195__auto__;
var G__12871 = cljs.core.count(c__4195__auto__);
var G__12872 = (0);
seq__12840 = G__12869;
chunk__12841 = G__12870;
count__12842 = G__12871;
i__12843 = G__12872;
continue;
}
} else
{var r = cljs.core.first(seq__12840__$1);instaparse.failure.print_reason(r);
{
var G__12873 = cljs.core.next(seq__12840__$1);
var G__12874 = null;
var G__12875 = (0);
var G__12876 = (0);
seq__12840 = G__12873;
chunk__12841 = G__12874;
count__12842 = G__12875;
i__12843 = G__12876;
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
