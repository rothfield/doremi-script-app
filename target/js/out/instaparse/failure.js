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
var G__13942 = (line + (1));
var G__13943 = (1);
var G__13944 = (counter + (1));
line = G__13942;
col = G__13943;
counter = G__13944;
continue;
}
} else
{{
var G__13945 = line;
var G__13946 = (col + (1));
var G__13947 = (counter + (1));
line = G__13945;
col = G__13946;
counter = G__13947;
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
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13948_SHARP_){return cljs.core.not((function (){var G__13950 = cljs.core.first(p1__13948_SHARP_);return (instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1 ? instaparse.failure.newline_chars.cljs$core$IFn$_invoke$arity$1(G__13950) : instaparse.failure.newline_chars.call(null,G__13950));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__13951){var map__13961 = p__13951;var map__13961__$1 = ((cljs.core.seq_QMARK_(map__13961))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13961):map__13961);var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,cljs.core.constant$keyword$73);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,cljs.core.constant$keyword$71);var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,cljs.core.constant$keyword$69);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,cljs.core.constant$keyword$68);cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parse error at line",line,", column",column,":\n"], 0));
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
var seq__13962_13970 = cljs.core.seq(full_reasons);var chunk__13963_13971 = null;var count__13964_13972 = (0);var i__13965_13973 = (0);while(true){
if((i__13965_13973 < count__13964_13972))
{var r_13974 = chunk__13963_13971.cljs$core$IIndexed$_nth$arity$2(null,i__13965_13973);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_13974], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__13975 = seq__13962_13970;
var G__13976 = chunk__13963_13971;
var G__13977 = count__13964_13972;
var G__13978 = (i__13965_13973 + (1));
seq__13962_13970 = G__13975;
chunk__13963_13971 = G__13976;
count__13964_13972 = G__13977;
i__13965_13973 = G__13978;
continue;
}
} else
{var temp__4126__auto___13979 = cljs.core.seq(seq__13962_13970);if(temp__4126__auto___13979)
{var seq__13962_13980__$1 = temp__4126__auto___13979;if(cljs.core.chunked_seq_QMARK_(seq__13962_13980__$1))
{var c__4195__auto___13981 = cljs.core.chunk_first(seq__13962_13980__$1);{
var G__13982 = cljs.core.chunk_rest(seq__13962_13980__$1);
var G__13983 = c__4195__auto___13981;
var G__13984 = cljs.core.count(c__4195__auto___13981);
var G__13985 = (0);
seq__13962_13970 = G__13982;
chunk__13963_13971 = G__13983;
count__13964_13972 = G__13984;
i__13965_13973 = G__13985;
continue;
}
} else
{var r_13986 = cljs.core.first(seq__13962_13980__$1);cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r_13986], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (followed by end-of-string)"], 0));
{
var G__13987 = cljs.core.next(seq__13962_13980__$1);
var G__13988 = null;
var G__13989 = (0);
var G__13990 = (0);
seq__13962_13970 = G__13987;
chunk__13963_13971 = G__13988;
count__13964_13972 = G__13989;
i__13965_13973 = G__13990;
continue;
}
}
} else
{}
}
break;
}
var seq__13966 = cljs.core.seq(partial_reasons);var chunk__13967 = null;var count__13968 = (0);var i__13969 = (0);while(true){
if((i__13969 < count__13968))
{var r = chunk__13967.cljs$core$IIndexed$_nth$arity$2(null,i__13969);instaparse.failure.print_reason(r);
{
var G__13991 = seq__13966;
var G__13992 = chunk__13967;
var G__13993 = count__13968;
var G__13994 = (i__13969 + (1));
seq__13966 = G__13991;
chunk__13967 = G__13992;
count__13968 = G__13993;
i__13969 = G__13994;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13966);if(temp__4126__auto__)
{var seq__13966__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13966__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13966__$1);{
var G__13995 = cljs.core.chunk_rest(seq__13966__$1);
var G__13996 = c__4195__auto__;
var G__13997 = cljs.core.count(c__4195__auto__);
var G__13998 = (0);
seq__13966 = G__13995;
chunk__13967 = G__13996;
count__13968 = G__13997;
i__13969 = G__13998;
continue;
}
} else
{var r = cljs.core.first(seq__13966__$1);instaparse.failure.print_reason(r);
{
var G__13999 = cljs.core.next(seq__13966__$1);
var G__14000 = null;
var G__14001 = (0);
var G__14002 = (0);
seq__13966 = G__13999;
chunk__13967 = G__14000;
count__13968 = G__14001;
i__13969 = G__14002;
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
