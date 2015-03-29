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
var G__6370 = (line + (1));
var G__6371 = (1);
var G__6372 = (counter + (1));
line = G__6370;
col = G__6371;
counter = G__6372;
continue;
}
} else
{{
var G__6373 = line;
var G__6374 = (col + (1));
var G__6375 = (counter + (1));
line = G__6373;
col = G__6374;
counter = G__6375;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__6376_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__6376_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__6377){var map__6387 = p__6377;var map__6387__$1 = ((cljs.core.seq_QMARK_.call(null,map__6387))?cljs.core.apply.call(null,cljs.core.hash_map,map__6387):map__6387);var reason = cljs.core.get.call(null,map__6387__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__6387__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__6387__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__6387__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__6388_6396 = cljs.core.seq.call(null,full_reasons);var chunk__6389_6397 = null;var count__6390_6398 = (0);var i__6391_6399 = (0);while(true){
if((i__6391_6399 < count__6390_6398))
{var r_6400 = cljs.core._nth.call(null,chunk__6389_6397,i__6391_6399);cljs.core.pr.call(null,r_6400);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__6401 = seq__6388_6396;
var G__6402 = chunk__6389_6397;
var G__6403 = count__6390_6398;
var G__6404 = (i__6391_6399 + (1));
seq__6388_6396 = G__6401;
chunk__6389_6397 = G__6402;
count__6390_6398 = G__6403;
i__6391_6399 = G__6404;
continue;
}
} else
{var temp__4126__auto___6405 = cljs.core.seq.call(null,seq__6388_6396);if(temp__4126__auto___6405)
{var seq__6388_6406__$1 = temp__4126__auto___6405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6388_6406__$1))
{var c__4195__auto___6407 = cljs.core.chunk_first.call(null,seq__6388_6406__$1);{
var G__6408 = cljs.core.chunk_rest.call(null,seq__6388_6406__$1);
var G__6409 = c__4195__auto___6407;
var G__6410 = cljs.core.count.call(null,c__4195__auto___6407);
var G__6411 = (0);
seq__6388_6396 = G__6408;
chunk__6389_6397 = G__6409;
count__6390_6398 = G__6410;
i__6391_6399 = G__6411;
continue;
}
} else
{var r_6412 = cljs.core.first.call(null,seq__6388_6406__$1);cljs.core.pr.call(null,r_6412);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__6413 = cljs.core.next.call(null,seq__6388_6406__$1);
var G__6414 = null;
var G__6415 = (0);
var G__6416 = (0);
seq__6388_6396 = G__6413;
chunk__6389_6397 = G__6414;
count__6390_6398 = G__6415;
i__6391_6399 = G__6416;
continue;
}
}
} else
{}
}
break;
}
var seq__6392 = cljs.core.seq.call(null,partial_reasons);var chunk__6393 = null;var count__6394 = (0);var i__6395 = (0);while(true){
if((i__6395 < count__6394))
{var r = cljs.core._nth.call(null,chunk__6393,i__6395);instaparse.failure.print_reason.call(null,r);
{
var G__6417 = seq__6392;
var G__6418 = chunk__6393;
var G__6419 = count__6394;
var G__6420 = (i__6395 + (1));
seq__6392 = G__6417;
chunk__6393 = G__6418;
count__6394 = G__6419;
i__6395 = G__6420;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6392);if(temp__4126__auto__)
{var seq__6392__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6392__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6392__$1);{
var G__6421 = cljs.core.chunk_rest.call(null,seq__6392__$1);
var G__6422 = c__4195__auto__;
var G__6423 = cljs.core.count.call(null,c__4195__auto__);
var G__6424 = (0);
seq__6392 = G__6421;
chunk__6393 = G__6422;
count__6394 = G__6423;
i__6395 = G__6424;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6392__$1);instaparse.failure.print_reason.call(null,r);
{
var G__6425 = cljs.core.next.call(null,seq__6392__$1);
var G__6426 = null;
var G__6427 = (0);
var G__6428 = (0);
seq__6392 = G__6425;
chunk__6393 = G__6426;
count__6394 = G__6427;
i__6395 = G__6428;
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