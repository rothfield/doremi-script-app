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
var G__6368 = (line + (1));
var G__6369 = (1);
var G__6370 = (counter + (1));
line = G__6368;
col = G__6369;
counter = G__6370;
continue;
}
} else
{{
var G__6371 = line;
var G__6372 = (col + (1));
var G__6373 = (counter + (1));
line = G__6371;
col = G__6372;
counter = G__6373;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__6374_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__6374_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__6375){var map__6385 = p__6375;var map__6385__$1 = ((cljs.core.seq_QMARK_.call(null,map__6385))?cljs.core.apply.call(null,cljs.core.hash_map,map__6385):map__6385);var reason = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__6386_6394 = cljs.core.seq.call(null,full_reasons);var chunk__6387_6395 = null;var count__6388_6396 = (0);var i__6389_6397 = (0);while(true){
if((i__6389_6397 < count__6388_6396))
{var r_6398 = cljs.core._nth.call(null,chunk__6387_6395,i__6389_6397);cljs.core.pr.call(null,r_6398);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__6399 = seq__6386_6394;
var G__6400 = chunk__6387_6395;
var G__6401 = count__6388_6396;
var G__6402 = (i__6389_6397 + (1));
seq__6386_6394 = G__6399;
chunk__6387_6395 = G__6400;
count__6388_6396 = G__6401;
i__6389_6397 = G__6402;
continue;
}
} else
{var temp__4126__auto___6403 = cljs.core.seq.call(null,seq__6386_6394);if(temp__4126__auto___6403)
{var seq__6386_6404__$1 = temp__4126__auto___6403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6386_6404__$1))
{var c__4195__auto___6405 = cljs.core.chunk_first.call(null,seq__6386_6404__$1);{
var G__6406 = cljs.core.chunk_rest.call(null,seq__6386_6404__$1);
var G__6407 = c__4195__auto___6405;
var G__6408 = cljs.core.count.call(null,c__4195__auto___6405);
var G__6409 = (0);
seq__6386_6394 = G__6406;
chunk__6387_6395 = G__6407;
count__6388_6396 = G__6408;
i__6389_6397 = G__6409;
continue;
}
} else
{var r_6410 = cljs.core.first.call(null,seq__6386_6404__$1);cljs.core.pr.call(null,r_6410);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__6411 = cljs.core.next.call(null,seq__6386_6404__$1);
var G__6412 = null;
var G__6413 = (0);
var G__6414 = (0);
seq__6386_6394 = G__6411;
chunk__6387_6395 = G__6412;
count__6388_6396 = G__6413;
i__6389_6397 = G__6414;
continue;
}
}
} else
{}
}
break;
}
var seq__6390 = cljs.core.seq.call(null,partial_reasons);var chunk__6391 = null;var count__6392 = (0);var i__6393 = (0);while(true){
if((i__6393 < count__6392))
{var r = cljs.core._nth.call(null,chunk__6391,i__6393);instaparse.failure.print_reason.call(null,r);
{
var G__6415 = seq__6390;
var G__6416 = chunk__6391;
var G__6417 = count__6392;
var G__6418 = (i__6393 + (1));
seq__6390 = G__6415;
chunk__6391 = G__6416;
count__6392 = G__6417;
i__6393 = G__6418;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6390);if(temp__4126__auto__)
{var seq__6390__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6390__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6390__$1);{
var G__6419 = cljs.core.chunk_rest.call(null,seq__6390__$1);
var G__6420 = c__4195__auto__;
var G__6421 = cljs.core.count.call(null,c__4195__auto__);
var G__6422 = (0);
seq__6390 = G__6419;
chunk__6391 = G__6420;
count__6392 = G__6421;
i__6393 = G__6422;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6390__$1);instaparse.failure.print_reason.call(null,r);
{
var G__6423 = cljs.core.next.call(null,seq__6390__$1);
var G__6424 = null;
var G__6425 = (0);
var G__6426 = (0);
seq__6390 = G__6423;
chunk__6391 = G__6424;
count__6392 = G__6425;
i__6393 = G__6426;
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