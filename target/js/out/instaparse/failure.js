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
var G__7334 = (line + (1));
var G__7335 = (1);
var G__7336 = (counter + (1));
line = G__7334;
col = G__7335;
counter = G__7336;
continue;
}
} else
{{
var G__7337 = line;
var G__7338 = (col + (1));
var G__7339 = (counter + (1));
line = G__7337;
col = G__7338;
counter = G__7339;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__7340_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__7340_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__7341){var map__7351 = p__7341;var map__7351__$1 = ((cljs.core.seq_QMARK_.call(null,map__7351))?cljs.core.apply.call(null,cljs.core.hash_map,map__7351):map__7351);var reason = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__7352_7360 = cljs.core.seq.call(null,full_reasons);var chunk__7353_7361 = null;var count__7354_7362 = (0);var i__7355_7363 = (0);while(true){
if((i__7355_7363 < count__7354_7362))
{var r_7364 = cljs.core._nth.call(null,chunk__7353_7361,i__7355_7363);cljs.core.pr.call(null,r_7364);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__7365 = seq__7352_7360;
var G__7366 = chunk__7353_7361;
var G__7367 = count__7354_7362;
var G__7368 = (i__7355_7363 + (1));
seq__7352_7360 = G__7365;
chunk__7353_7361 = G__7366;
count__7354_7362 = G__7367;
i__7355_7363 = G__7368;
continue;
}
} else
{var temp__4126__auto___7369 = cljs.core.seq.call(null,seq__7352_7360);if(temp__4126__auto___7369)
{var seq__7352_7370__$1 = temp__4126__auto___7369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7352_7370__$1))
{var c__4195__auto___7371 = cljs.core.chunk_first.call(null,seq__7352_7370__$1);{
var G__7372 = cljs.core.chunk_rest.call(null,seq__7352_7370__$1);
var G__7373 = c__4195__auto___7371;
var G__7374 = cljs.core.count.call(null,c__4195__auto___7371);
var G__7375 = (0);
seq__7352_7360 = G__7372;
chunk__7353_7361 = G__7373;
count__7354_7362 = G__7374;
i__7355_7363 = G__7375;
continue;
}
} else
{var r_7376 = cljs.core.first.call(null,seq__7352_7370__$1);cljs.core.pr.call(null,r_7376);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__7377 = cljs.core.next.call(null,seq__7352_7370__$1);
var G__7378 = null;
var G__7379 = (0);
var G__7380 = (0);
seq__7352_7360 = G__7377;
chunk__7353_7361 = G__7378;
count__7354_7362 = G__7379;
i__7355_7363 = G__7380;
continue;
}
}
} else
{}
}
break;
}
var seq__7356 = cljs.core.seq.call(null,partial_reasons);var chunk__7357 = null;var count__7358 = (0);var i__7359 = (0);while(true){
if((i__7359 < count__7358))
{var r = cljs.core._nth.call(null,chunk__7357,i__7359);instaparse.failure.print_reason.call(null,r);
{
var G__7381 = seq__7356;
var G__7382 = chunk__7357;
var G__7383 = count__7358;
var G__7384 = (i__7359 + (1));
seq__7356 = G__7381;
chunk__7357 = G__7382;
count__7358 = G__7383;
i__7359 = G__7384;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7356);if(temp__4126__auto__)
{var seq__7356__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7356__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__7356__$1);{
var G__7385 = cljs.core.chunk_rest.call(null,seq__7356__$1);
var G__7386 = c__4195__auto__;
var G__7387 = cljs.core.count.call(null,c__4195__auto__);
var G__7388 = (0);
seq__7356 = G__7385;
chunk__7357 = G__7386;
count__7358 = G__7387;
i__7359 = G__7388;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__7356__$1);instaparse.failure.print_reason.call(null,r);
{
var G__7389 = cljs.core.next.call(null,seq__7356__$1);
var G__7390 = null;
var G__7391 = (0);
var G__7392 = (0);
seq__7356 = G__7389;
chunk__7357 = G__7390;
count__7358 = G__7391;
i__7359 = G__7392;
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