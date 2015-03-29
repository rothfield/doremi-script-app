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
return (function (p1__6964_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6964_SHARP_,path);
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
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){var sheets = document.styleSheets;var seq__6969 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));var chunk__6970 = null;var count__6971 = (0);var i__6972 = (0);while(true){
if((i__6972 < count__6971))
{var s = cljs.core._nth.call(null,chunk__6970,i__6972);var temp__4126__auto___6973 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6973))
{var sheet_6974 = temp__4126__auto___6973;var temp__4126__auto___6975__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6974.href,changed);if(cljs.core.truth_(temp__4126__auto___6975__$1))
{var href_uri_6976 = temp__4126__auto___6975__$1;sheet_6974.ownerNode.href = href_uri_6976.makeUnique().toString();
} else
{}
} else
{}
{
var G__6977 = seq__6969;
var G__6978 = chunk__6970;
var G__6979 = count__6971;
var G__6980 = (i__6972 + (1));
seq__6969 = G__6977;
chunk__6970 = G__6978;
count__6971 = G__6979;
i__6972 = G__6980;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6969);if(temp__4126__auto__)
{var seq__6969__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6969__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6969__$1);{
var G__6981 = cljs.core.chunk_rest.call(null,seq__6969__$1);
var G__6982 = c__4195__auto__;
var G__6983 = cljs.core.count.call(null,c__4195__auto__);
var G__6984 = (0);
seq__6969 = G__6981;
chunk__6970 = G__6982;
count__6971 = G__6983;
i__6972 = G__6984;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6969__$1);var temp__4126__auto___6985__$1 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6985__$1))
{var sheet_6986 = temp__4126__auto___6985__$1;var temp__4126__auto___6987__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6986.href,changed);if(cljs.core.truth_(temp__4126__auto___6987__$2))
{var href_uri_6988 = temp__4126__auto___6987__$2;sheet_6986.ownerNode.href = href_uri_6988.makeUnique().toString();
} else
{}
} else
{}
{
var G__6989 = cljs.core.next.call(null,seq__6969__$1);
var G__6990 = null;
var G__6991 = (0);
var G__6992 = (0);
seq__6969 = G__6989;
chunk__6970 = G__6990;
count__6971 = G__6991;
i__6972 = G__6992;
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
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){var images = document.images;var seq__6997 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));var chunk__6998 = null;var count__6999 = (0);var i__7000 = (0);while(true){
if((i__7000 < count__6999))
{var s = cljs.core._nth.call(null,chunk__6998,i__7000);var temp__4126__auto___7001 = (images[s]);if(cljs.core.truth_(temp__4126__auto___7001))
{var image_7002 = temp__4126__auto___7001;var temp__4126__auto___7003__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7002.src,changed);if(cljs.core.truth_(temp__4126__auto___7003__$1))
{var href_uri_7004 = temp__4126__auto___7003__$1;image_7002.src = href_uri_7004.makeUnique().toString();
} else
{}
} else
{}
{
var G__7005 = seq__6997;
var G__7006 = chunk__6998;
var G__7007 = count__6999;
var G__7008 = (i__7000 + (1));
seq__6997 = G__7005;
chunk__6998 = G__7006;
count__6999 = G__7007;
i__7000 = G__7008;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6997);if(temp__4126__auto__)
{var seq__6997__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6997__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6997__$1);{
var G__7009 = cljs.core.chunk_rest.call(null,seq__6997__$1);
var G__7010 = c__4195__auto__;
var G__7011 = cljs.core.count.call(null,c__4195__auto__);
var G__7012 = (0);
seq__6997 = G__7009;
chunk__6998 = G__7010;
count__6999 = G__7011;
i__7000 = G__7012;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6997__$1);var temp__4126__auto___7013__$1 = (images[s]);if(cljs.core.truth_(temp__4126__auto___7013__$1))
{var image_7014 = temp__4126__auto___7013__$1;var temp__4126__auto___7015__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7014.src,changed);if(cljs.core.truth_(temp__4126__auto___7015__$2))
{var href_uri_7016 = temp__4126__auto___7015__$2;image_7014.src = href_uri_7016.makeUnique().toString();
} else
{}
} else
{}
{
var G__7017 = cljs.core.next.call(null,seq__6997__$1);
var G__7018 = null;
var G__7019 = (0);
var G__7020 = (0);
seq__6997 = G__7017;
chunk__6998 = G__7018;
count__6999 = G__7019;
i__7000 = G__7020;
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
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__7023){var map__7025 = p__7023;var map__7025__$1 = ((cljs.core.seq_QMARK_.call(null,map__7025))?cljs.core.apply.call(null,cljs.core.hash_map,map__7025):map__7025);var on_jsload = cljs.core.get.call(null,map__7025__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);var js_files = cljs.core.filter.call(null,((function (map__7025,map__7025__$1,on_jsload){
return (function (p1__7021_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7021_SHARP_,".js");
});})(map__7025,map__7025__$1,on_jsload))
,changed);if(cljs.core.seq.call(null,js_files))
{return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7025,map__7025__$1,on_jsload){
return (function (p1__7022_SHARP_){return goog.net.jsloader.load(goog.Uri.parse(p1__7022_SHARP_).makeUnique());
});})(js_files,map__7025,map__7025__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7025,map__7025__$1,on_jsload){
return (function() { 
var G__7026__delegate = function (_){return on_jsload.call(null);
};
var G__7026 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7026__delegate.call(this,_);};
G__7026.cljs$lang$maxFixedArity = 0;
G__7026.cljs$lang$applyTo = (function (arglist__7027){
var _ = cljs.core.seq(arglist__7027);
return G__7026__delegate(_);
});
G__7026.cljs$core$IFn$_invoke$arity$variadic = G__7026__delegate;
return G__7026;
})()
;})(js_files,map__7025,map__7025__$1,on_jsload))
,((function (js_files,map__7025,map__7025__$1,on_jsload){
return (function (e){return console.error("Load failed:",e.message);
});})(js_files,map__7025,map__7025__$1,on_jsload))
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
var seq__7032_7036 = cljs.core.seq.call(null,things_to_log);var chunk__7033_7037 = null;var count__7034_7038 = (0);var i__7035_7039 = (0);while(true){
if((i__7035_7039 < count__7034_7038))
{var t_7040 = cljs.core._nth.call(null,chunk__7033_7037,i__7035_7039);console.log(t_7040);
{
var G__7041 = seq__7032_7036;
var G__7042 = chunk__7033_7037;
var G__7043 = count__7034_7038;
var G__7044 = (i__7035_7039 + (1));
seq__7032_7036 = G__7041;
chunk__7033_7037 = G__7042;
count__7034_7038 = G__7043;
i__7035_7039 = G__7044;
continue;
}
} else
{var temp__4126__auto___7045 = cljs.core.seq.call(null,seq__7032_7036);if(temp__4126__auto___7045)
{var seq__7032_7046__$1 = temp__4126__auto___7045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7032_7046__$1))
{var c__4195__auto___7047 = cljs.core.chunk_first.call(null,seq__7032_7046__$1);{
var G__7048 = cljs.core.chunk_rest.call(null,seq__7032_7046__$1);
var G__7049 = c__4195__auto___7047;
var G__7050 = cljs.core.count.call(null,c__4195__auto___7047);
var G__7051 = (0);
seq__7032_7036 = G__7048;
chunk__7033_7037 = G__7049;
count__7034_7038 = G__7050;
i__7035_7039 = G__7051;
continue;
}
} else
{var t_7052 = cljs.core.first.call(null,seq__7032_7046__$1);console.log(t_7052);
{
var G__7053 = cljs.core.next.call(null,seq__7032_7046__$1);
var G__7054 = null;
var G__7055 = (0);
var G__7056 = (0);
seq__7032_7036 = G__7053;
chunk__7033_7037 = G__7054;
count__7034_7038 = G__7055;
i__7035_7039 = G__7056;
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
var G__7058 = changed;adzerk.boot_reload.reload.reload_js.call(null,G__7058,opts);
adzerk.boot_reload.reload.reload_html.call(null,G__7058);
adzerk.boot_reload.reload.reload_css.call(null,G__7058);
adzerk.boot_reload.reload.reload_img.call(null,G__7058);
return G__7058;
});

//# sourceMappingURL=reload.js.map