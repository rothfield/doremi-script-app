// Compiled by ClojureScript 0.0-2371
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){if(cljs.core.truth_(href_or_uri))
{var uri = (new goog.Uri(href_or_uri));var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__6961_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6961_SHARP_,path);
});})(uri,path))
,changed))))
{return uri;
} else
{return null;
}
} else
{return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){var sheets = document.styleSheets;var seq__6966 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));var chunk__6967 = null;var count__6968 = (0);var i__6969 = (0);while(true){
if((i__6969 < count__6968))
{var s = cljs.core._nth.call(null,chunk__6967,i__6969);var temp__4126__auto___6970 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6970))
{var sheet_6971 = temp__4126__auto___6970;var temp__4126__auto___6972__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6971.href,changed);if(cljs.core.truth_(temp__4126__auto___6972__$1))
{var href_uri_6973 = temp__4126__auto___6972__$1;sheet_6971.ownerNode.href = href_uri_6973.makeUnique().toString();
} else
{}
} else
{}
{
var G__6974 = seq__6966;
var G__6975 = chunk__6967;
var G__6976 = count__6968;
var G__6977 = (i__6969 + (1));
seq__6966 = G__6974;
chunk__6967 = G__6975;
count__6968 = G__6976;
i__6969 = G__6977;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6966);if(temp__4126__auto__)
{var seq__6966__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6966__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6966__$1);{
var G__6978 = cljs.core.chunk_rest.call(null,seq__6966__$1);
var G__6979 = c__4195__auto__;
var G__6980 = cljs.core.count.call(null,c__4195__auto__);
var G__6981 = (0);
seq__6966 = G__6978;
chunk__6967 = G__6979;
count__6968 = G__6980;
i__6969 = G__6981;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6966__$1);var temp__4126__auto___6982__$1 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6982__$1))
{var sheet_6983 = temp__4126__auto___6982__$1;var temp__4126__auto___6984__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6983.href,changed);if(cljs.core.truth_(temp__4126__auto___6984__$2))
{var href_uri_6985 = temp__4126__auto___6984__$2;sheet_6983.ownerNode.href = href_uri_6985.makeUnique().toString();
} else
{}
} else
{}
{
var G__6986 = cljs.core.next.call(null,seq__6966__$1);
var G__6987 = null;
var G__6988 = (0);
var G__6989 = (0);
seq__6966 = G__6986;
chunk__6967 = G__6987;
count__6968 = G__6988;
i__6969 = G__6989;
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
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){var images = document.images;var seq__6994 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));var chunk__6995 = null;var count__6996 = (0);var i__6997 = (0);while(true){
if((i__6997 < count__6996))
{var s = cljs.core._nth.call(null,chunk__6995,i__6997);var temp__4126__auto___6998 = (images[s]);if(cljs.core.truth_(temp__4126__auto___6998))
{var image_6999 = temp__4126__auto___6998;var temp__4126__auto___7000__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6999.src,changed);if(cljs.core.truth_(temp__4126__auto___7000__$1))
{var href_uri_7001 = temp__4126__auto___7000__$1;image_6999.src = href_uri_7001.makeUnique().toString();
} else
{}
} else
{}
{
var G__7002 = seq__6994;
var G__7003 = chunk__6995;
var G__7004 = count__6996;
var G__7005 = (i__6997 + (1));
seq__6994 = G__7002;
chunk__6995 = G__7003;
count__6996 = G__7004;
i__6997 = G__7005;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6994);if(temp__4126__auto__)
{var seq__6994__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6994__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6994__$1);{
var G__7006 = cljs.core.chunk_rest.call(null,seq__6994__$1);
var G__7007 = c__4195__auto__;
var G__7008 = cljs.core.count.call(null,c__4195__auto__);
var G__7009 = (0);
seq__6994 = G__7006;
chunk__6995 = G__7007;
count__6996 = G__7008;
i__6997 = G__7009;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6994__$1);var temp__4126__auto___7010__$1 = (images[s]);if(cljs.core.truth_(temp__4126__auto___7010__$1))
{var image_7011 = temp__4126__auto___7010__$1;var temp__4126__auto___7012__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7011.src,changed);if(cljs.core.truth_(temp__4126__auto___7012__$2))
{var href_uri_7013 = temp__4126__auto___7012__$2;image_7011.src = href_uri_7013.makeUnique().toString();
} else
{}
} else
{}
{
var G__7014 = cljs.core.next.call(null,seq__6994__$1);
var G__7015 = null;
var G__7016 = (0);
var G__7017 = (0);
seq__6994 = G__7014;
chunk__6995 = G__7015;
count__6996 = G__7016;
i__6997 = G__7017;
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
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__7020){var map__7022 = p__7020;var map__7022__$1 = ((cljs.core.seq_QMARK_.call(null,map__7022))?cljs.core.apply.call(null,cljs.core.hash_map,map__7022):map__7022);var on_jsload = cljs.core.get.call(null,map__7022__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);var js_files = cljs.core.filter.call(null,((function (map__7022,map__7022__$1,on_jsload){
return (function (p1__7018_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7018_SHARP_,".js");
});})(map__7022,map__7022__$1,on_jsload))
,changed);if(cljs.core.seq.call(null,js_files))
{return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7022,map__7022__$1,on_jsload){
return (function (p1__7019_SHARP_){return goog.net.jsloader.load(goog.Uri.parse(p1__7019_SHARP_).makeUnique());
});})(js_files,map__7022,map__7022__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7022,map__7022__$1,on_jsload){
return (function() { 
var G__7023__delegate = function (_){return on_jsload.call(null);
};
var G__7023 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7023__delegate.call(this,_);};
G__7023.cljs$lang$maxFixedArity = 0;
G__7023.cljs$lang$applyTo = (function (arglist__7024){
var _ = cljs.core.seq(arglist__7024);
return G__7023__delegate(_);
});
G__7023.cljs$core$IFn$_invoke$arity$variadic = G__7023__delegate;
return G__7023;
})()
;})(js_files,map__7022,map__7022__$1,on_jsload))
,((function (js_files,map__7022,map__7022__$1,on_jsload){
return (function (e){return console.error("Load failed:",e.message);
});})(js_files,map__7022,map__7022__$1,on_jsload))
);
} else
{return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){var page_path = adzerk.boot_reload.reload.page_uri.getPath();var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path)+"index.html"):page_path);if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed)))
{return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else
{return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){console.groupCollapsed(title);
var seq__7029_7033 = cljs.core.seq.call(null,things_to_log);var chunk__7030_7034 = null;var count__7031_7035 = (0);var i__7032_7036 = (0);while(true){
if((i__7032_7036 < count__7031_7035))
{var t_7037 = cljs.core._nth.call(null,chunk__7030_7034,i__7032_7036);console.log(t_7037);
{
var G__7038 = seq__7029_7033;
var G__7039 = chunk__7030_7034;
var G__7040 = count__7031_7035;
var G__7041 = (i__7032_7036 + (1));
seq__7029_7033 = G__7038;
chunk__7030_7034 = G__7039;
count__7031_7035 = G__7040;
i__7032_7036 = G__7041;
continue;
}
} else
{var temp__4126__auto___7042 = cljs.core.seq.call(null,seq__7029_7033);if(temp__4126__auto___7042)
{var seq__7029_7043__$1 = temp__4126__auto___7042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7029_7043__$1))
{var c__4195__auto___7044 = cljs.core.chunk_first.call(null,seq__7029_7043__$1);{
var G__7045 = cljs.core.chunk_rest.call(null,seq__7029_7043__$1);
var G__7046 = c__4195__auto___7044;
var G__7047 = cljs.core.count.call(null,c__4195__auto___7044);
var G__7048 = (0);
seq__7029_7033 = G__7045;
chunk__7030_7034 = G__7046;
count__7031_7035 = G__7047;
i__7032_7036 = G__7048;
continue;
}
} else
{var t_7049 = cljs.core.first.call(null,seq__7029_7043__$1);console.log(t_7049);
{
var G__7050 = cljs.core.next.call(null,seq__7029_7043__$1);
var G__7051 = null;
var G__7052 = (0);
var G__7053 = (0);
seq__7029_7033 = G__7050;
chunk__7030_7034 = G__7051;
count__7031_7035 = G__7052;
i__7032_7036 = G__7053;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);
var G__7055 = changed;adzerk.boot_reload.reload.reload_js.call(null,G__7055,opts);
adzerk.boot_reload.reload.reload_html.call(null,G__7055);
adzerk.boot_reload.reload.reload_css.call(null,G__7055);
adzerk.boot_reload.reload.reload_img.call(null,G__7055);
return G__7055;
});

//# sourceMappingURL=reload.js.map