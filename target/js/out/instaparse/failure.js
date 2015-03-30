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
var G__13940 = (line + (1));
var G__13941 = (1);
var G__13942 = (counter + (1));
line = G__13940;
col = G__13941;
counter = G__13942;
continue;
}
} else
{{
var G__13943 = line;
var G__13944 = (col + (1));
var G__13945 = (counter + (1));
line = G__13943;
col = G__13944;
counter = G__13945;
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
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13946_SHARP_){return cljs.core.not((function (){var G__13948 = cljs.core.first(p1__13946_SHARP_);return (instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1 ? instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1(G__13948) : instaparse.failure.newline_chars.call(null,G__13948));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__13949){var map__13959 = p__13949;var map__13959__$1 = ((cljs.core.seq_QMARK_(map__13959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13959):map__13959);var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,cljs.core.constant$keyword$73);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,cljs.core.constant$keyword$71);var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,cljs.core.constant$keyword$69);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,cljs.core.constant$keyword$68);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parse error at line",line,", column",column,":\n"], 0));
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
var seq__13960_13968 = cljs.core.seq(full_reasons);var chunk__13961_13969 = null;var count__13962_13970 = (0);var i__13963_13971 = (0);while(true){
if((i__13963_13971 < count__13962_13970))
{var r_13972 = chunk__13961_13969.cljs$core$IIndexed$_nth$arity$2(null,i__13963_13971);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_13972], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__13973 = seq__13960_13968;
var G__13974 = chunk__13961_13969;
var G__13975 = count__13962_13970;
var G__13976 = (i__13963_13971 + (1));
seq__13960_13968 = G__13973;
chunk__13961_13969 = G__13974;
count__13962_13970 = G__13975;
i__13963_13971 = G__13976;
continue;
}
} else
{var temp__4126__auto___13977 = cljs.core.seq(seq__13960_13968);if(temp__4126__auto___13977)
{var seq__13960_13978__$1 = temp__4126__auto___13977;if(cljs.core.chunked_seq_QMARK_(seq__13960_13978__$1))
{var c__4195__auto___13979 = cljs.core.chunk_first(seq__13960_13978__$1);{
var G__13980 = cljs.core.chunk_rest(seq__13960_13978__$1);
var G__13981 = c__4195__auto___13979;
var G__13982 = cljs.core.count(c__4195__auto___13979);
var G__13983 = (0);
seq__13960_13968 = G__13980;
chunk__13961_13969 = G__13981;
count__13962_13970 = G__13982;
i__13963_13971 = G__13983;
continue;
}
} else
{var r_13984 = cljs.core.first(seq__13960_13978__$1);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_13984], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__13985 = cljs.core.next(seq__13960_13978__$1);
var G__13986 = null;
var G__13987 = (0);
var G__13988 = (0);
seq__13960_13968 = G__13985;
chunk__13961_13969 = G__13986;
count__13962_13970 = G__13987;
i__13963_13971 = G__13988;
continue;
}
}
} else
{}
}
break;
}
var seq__13964 = cljs.core.seq(partial_reasons);var chunk__13965 = null;var count__13966 = (0);var i__13967 = (0);while(true){
if((i__13967 < count__13966))
{var r = chunk__13965.cljs$core$IIndexed$_nth$arity$2(null,i__13967);instaparse.failure.print_reason(r);
{
var G__13989 = seq__13964;
var G__13990 = chunk__13965;
var G__13991 = count__13966;
var G__13992 = (i__13967 + (1));
seq__13964 = G__13989;
chunk__13965 = G__13990;
count__13966 = G__13991;
i__13967 = G__13992;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13964);if(temp__4126__auto__)
{var seq__13964__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13964__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13964__$1);{
var G__13993 = cljs.core.chunk_rest(seq__13964__$1);
var G__13994 = c__4195__auto__;
var G__13995 = cljs.core.count(c__4195__auto__);
var G__13996 = (0);
seq__13964 = G__13993;
chunk__13965 = G__13994;
count__13966 = G__13995;
i__13967 = G__13996;
continue;
}
} else
{var r = cljs.core.first(seq__13964__$1);instaparse.failure.print_reason(r);
{
var G__13997 = cljs.core.next(seq__13964__$1);
var G__13998 = null;
var G__13999 = (0);
var G__14000 = (0);
seq__13964 = G__13997;
chunk__13965 = G__13998;
count__13966 = G__13999;
i__13967 = G__14000;
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
