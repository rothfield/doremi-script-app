// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
goog.require('instaparse.print');
/**
* Takes an index into text, and determines the line and column info
*/
instaparse.failure.index__GT_line_column = (function index__GT_line_column(index,text){var line = (1);var col = (1);var counter = (0);while(true){
if(cljs.core._EQ_.call(null,index,counter))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else
{if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter)))
{{
var G__7332 = (line + (1));
var G__7333 = (1);
var G__7334 = (counter + (1));
line = G__7332;
col = G__7333;
counter = G__7334;
continue;
}
} else
{{
var G__7335 = line;
var G__7336 = (col + (1));
var G__7337 = (counter + (1));
line = G__7335;
col = G__7336;
counter = G__7337;
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
instaparse.failure.line_seq = (function line_seq(s){if(cljs.core.empty_QMARK_.call(null,s))
{return null;
} else
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__7338_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__7338_SHARP_)));
}),cljs.core.partition_by.call(null,instaparse.failure.newline_chars,s)));
}
});
/**
* Returns nth line of text, 1-based
*/
instaparse.failure.get_line = (function get_line(n,text){return cljs.core.nth.call(null,instaparse.failure.line_seq.call(null,text),(n - (1)));
});
/**
* Creates string with caret at nth position, 1-based
*/
instaparse.failure.marker = (function marker(n){if(cljs.core.integer_QMARK_.call(null,n))
{if((n <= (1)))
{return "^";
} else
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else
{return null;
}
});
/**
* Adds text, line, and column info to failure object.
*/
instaparse.failure.augment_failure = (function augment_failure(failure,text){var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
* Provides special case for printing negative lookahead reasons
*/
instaparse.failure.print_reason = (function print_reason(r){if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)))
{cljs.core.print.call(null,"NOT ");
return cljs.core.println.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else
{if((r instanceof java.util.regex.Pattern))
{return cljs.core.println.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else
{return cljs.core.prn.call(null,r);

}
}
});
/**
* Takes an augmented failure object and prints the error message
*/
instaparse.failure.pprint_failure = (function pprint_failure(p__7339){var map__7349 = p__7339;var map__7349__$1 = ((cljs.core.seq_QMARK_.call(null,map__7349))?cljs.core.apply.call(null,cljs.core.hash_map,map__7349):map__7349);var reason = cljs.core.get.call(null,map__7349__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__7349__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__7349__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__7349__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
cljs.core.println.call(null,text);
cljs.core.println.call(null,instaparse.failure.marker.call(null,column));
var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));if((total === (0)))
{} else
{if(cljs.core._EQ_.call(null,(1),total))
{cljs.core.println.call(null,"Expected:");
} else
{cljs.core.println.call(null,"Expected one of:");

}
}
var seq__7350_7358 = cljs.core.seq.call(null,full_reasons);var chunk__7351_7359 = null;var count__7352_7360 = (0);var i__7353_7361 = (0);while(true){
if((i__7353_7361 < count__7352_7360))
{var r_7362 = cljs.core._nth.call(null,chunk__7351_7359,i__7353_7361);cljs.core.pr.call(null,r_7362);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__7363 = seq__7350_7358;
var G__7364 = chunk__7351_7359;
var G__7365 = count__7352_7360;
var G__7366 = (i__7353_7361 + (1));
seq__7350_7358 = G__7363;
chunk__7351_7359 = G__7364;
count__7352_7360 = G__7365;
i__7353_7361 = G__7366;
continue;
}
} else
{var temp__4126__auto___7367 = cljs.core.seq.call(null,seq__7350_7358);if(temp__4126__auto___7367)
{var seq__7350_7368__$1 = temp__4126__auto___7367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7350_7368__$1))
{var c__4195__auto___7369 = cljs.core.chunk_first.call(null,seq__7350_7368__$1);{
var G__7370 = cljs.core.chunk_rest.call(null,seq__7350_7368__$1);
var G__7371 = c__4195__auto___7369;
var G__7372 = cljs.core.count.call(null,c__4195__auto___7369);
var G__7373 = (0);
seq__7350_7358 = G__7370;
chunk__7351_7359 = G__7371;
count__7352_7360 = G__7372;
i__7353_7361 = G__7373;
continue;
}
} else
{var r_7374 = cljs.core.first.call(null,seq__7350_7368__$1);cljs.core.pr.call(null,r_7374);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__7375 = cljs.core.next.call(null,seq__7350_7368__$1);
var G__7376 = null;
var G__7377 = (0);
var G__7378 = (0);
seq__7350_7358 = G__7375;
chunk__7351_7359 = G__7376;
count__7352_7360 = G__7377;
i__7353_7361 = G__7378;
continue;
}
}
} else
{}
}
break;
}
var seq__7354 = cljs.core.seq.call(null,partial_reasons);var chunk__7355 = null;var count__7356 = (0);var i__7357 = (0);while(true){
if((i__7357 < count__7356))
{var r = cljs.core._nth.call(null,chunk__7355,i__7357);instaparse.failure.print_reason.call(null,r);
{
var G__7379 = seq__7354;
var G__7380 = chunk__7355;
var G__7381 = count__7356;
var G__7382 = (i__7357 + (1));
seq__7354 = G__7379;
chunk__7355 = G__7380;
count__7356 = G__7381;
i__7357 = G__7382;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7354);if(temp__4126__auto__)
{var seq__7354__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7354__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__7354__$1);{
var G__7383 = cljs.core.chunk_rest.call(null,seq__7354__$1);
var G__7384 = c__4195__auto__;
var G__7385 = cljs.core.count.call(null,c__4195__auto__);
var G__7386 = (0);
seq__7354 = G__7383;
chunk__7355 = G__7384;
count__7356 = G__7385;
i__7357 = G__7386;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__7354__$1);instaparse.failure.print_reason.call(null,r);
{
var G__7387 = cljs.core.next.call(null,seq__7354__$1);
var G__7388 = null;
var G__7389 = (0);
var G__7390 = (0);
seq__7354 = G__7387;
chunk__7355 = G__7388;
count__7356 = G__7389;
i__7357 = G__7390;
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

//# sourceMappingURL=failure.js.map