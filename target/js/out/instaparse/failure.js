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
var G__5888 = (line + (1));
var G__5889 = (1);
var G__5890 = (counter + (1));
line = G__5888;
col = G__5889;
counter = G__5890;
continue;
}
} else
{{
var G__5891 = line;
var G__5892 = (col + (1));
var G__5893 = (counter + (1));
line = G__5891;
col = G__5892;
counter = G__5893;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__5894_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__5894_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__5895){var map__5905 = p__5895;var map__5905__$1 = ((cljs.core.seq_QMARK_.call(null,map__5905))?cljs.core.apply.call(null,cljs.core.hash_map,map__5905):map__5905);var reason = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__5905__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__5906_5914 = cljs.core.seq.call(null,full_reasons);var chunk__5907_5915 = null;var count__5908_5916 = (0);var i__5909_5917 = (0);while(true){
if((i__5909_5917 < count__5908_5916))
{var r_5918 = cljs.core._nth.call(null,chunk__5907_5915,i__5909_5917);cljs.core.pr.call(null,r_5918);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__5919 = seq__5906_5914;
var G__5920 = chunk__5907_5915;
var G__5921 = count__5908_5916;
var G__5922 = (i__5909_5917 + (1));
seq__5906_5914 = G__5919;
chunk__5907_5915 = G__5920;
count__5908_5916 = G__5921;
i__5909_5917 = G__5922;
continue;
}
} else
{var temp__4126__auto___5923 = cljs.core.seq.call(null,seq__5906_5914);if(temp__4126__auto___5923)
{var seq__5906_5924__$1 = temp__4126__auto___5923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5906_5924__$1))
{var c__4195__auto___5925 = cljs.core.chunk_first.call(null,seq__5906_5924__$1);{
var G__5926 = cljs.core.chunk_rest.call(null,seq__5906_5924__$1);
var G__5927 = c__4195__auto___5925;
var G__5928 = cljs.core.count.call(null,c__4195__auto___5925);
var G__5929 = (0);
seq__5906_5914 = G__5926;
chunk__5907_5915 = G__5927;
count__5908_5916 = G__5928;
i__5909_5917 = G__5929;
continue;
}
} else
{var r_5930 = cljs.core.first.call(null,seq__5906_5924__$1);cljs.core.pr.call(null,r_5930);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__5931 = cljs.core.next.call(null,seq__5906_5924__$1);
var G__5932 = null;
var G__5933 = (0);
var G__5934 = (0);
seq__5906_5914 = G__5931;
chunk__5907_5915 = G__5932;
count__5908_5916 = G__5933;
i__5909_5917 = G__5934;
continue;
}
}
} else
{}
}
break;
}
var seq__5910 = cljs.core.seq.call(null,partial_reasons);var chunk__5911 = null;var count__5912 = (0);var i__5913 = (0);while(true){
if((i__5913 < count__5912))
{var r = cljs.core._nth.call(null,chunk__5911,i__5913);instaparse.failure.print_reason.call(null,r);
{
var G__5935 = seq__5910;
var G__5936 = chunk__5911;
var G__5937 = count__5912;
var G__5938 = (i__5913 + (1));
seq__5910 = G__5935;
chunk__5911 = G__5936;
count__5912 = G__5937;
i__5913 = G__5938;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5910);if(temp__4126__auto__)
{var seq__5910__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5910__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__5910__$1);{
var G__5939 = cljs.core.chunk_rest.call(null,seq__5910__$1);
var G__5940 = c__4195__auto__;
var G__5941 = cljs.core.count.call(null,c__4195__auto__);
var G__5942 = (0);
seq__5910 = G__5939;
chunk__5911 = G__5940;
count__5912 = G__5941;
i__5913 = G__5942;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__5910__$1);instaparse.failure.print_reason.call(null,r);
{
var G__5943 = cljs.core.next.call(null,seq__5910__$1);
var G__5944 = null;
var G__5945 = (0);
var G__5946 = (0);
seq__5910 = G__5943;
chunk__5911 = G__5944;
count__5912 = G__5945;
i__5913 = G__5946;
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