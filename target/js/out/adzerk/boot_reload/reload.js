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
return (function (p1__7925_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7925_SHARP_,path);
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
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){var sheets = document.styleSheets;var seq__7930 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));var chunk__7931 = null;var count__7932 = (0);var i__7933 = (0);while(true){
if((i__7933 < count__7932))
{var s = cljs.core._nth.call(null,chunk__7931,i__7933);var temp__4126__auto___7934 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___7934))
{var sheet_7935 = temp__4126__auto___7934;var temp__4126__auto___7936__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7935.href,changed);if(cljs.core.truth_(temp__4126__auto___7936__$1))
{var href_uri_7937 = temp__4126__auto___7936__$1;sheet_7935.ownerNode.href = href_uri_7937.makeUnique().toString();
} else
{}
} else
{}
{
var G__7938 = seq__7930;
var G__7939 = chunk__7931;
var G__7940 = count__7932;
var G__7941 = (i__7933 + (1));
seq__7930 = G__7938;
chunk__7931 = G__7939;
count__7932 = G__7940;
i__7933 = G__7941;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7930);if(temp__4126__auto__)
{var seq__7930__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__7930__$1);{
var G__7942 = cljs.core.chunk_rest.call(null,seq__7930__$1);
var G__7943 = c__4195__auto__;
var G__7944 = cljs.core.count.call(null,c__4195__auto__);
var G__7945 = (0);
seq__7930 = G__7942;
chunk__7931 = G__7943;
count__7932 = G__7944;
i__7933 = G__7945;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__7930__$1);var temp__4126__auto___7946__$1 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___7946__$1))
{var sheet_7947 = temp__4126__auto___7946__$1;var temp__4126__auto___7948__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7947.href,changed);if(cljs.core.truth_(temp__4126__auto___7948__$2))
{var href_uri_7949 = temp__4126__auto___7948__$2;sheet_7947.ownerNode.href = href_uri_7949.makeUnique().toString();
} else
{}
} else
{}
{
var G__7950 = cljs.core.next.call(null,seq__7930__$1);
var G__7951 = null;
var G__7952 = (0);
var G__7953 = (0);
seq__7930 = G__7950;
chunk__7931 = G__7951;
count__7932 = G__7952;
i__7933 = G__7953;
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
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){var images = document.images;var seq__7958 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));var chunk__7959 = null;var count__7960 = (0);var i__7961 = (0);while(true){
if((i__7961 < count__7960))
{var s = cljs.core._nth.call(null,chunk__7959,i__7961);var temp__4126__auto___7962 = (images[s]);if(cljs.core.truth_(temp__4126__auto___7962))
{var image_7963 = temp__4126__auto___7962;var temp__4126__auto___7964__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7963.src,changed);if(cljs.core.truth_(temp__4126__auto___7964__$1))
{var href_uri_7965 = temp__4126__auto___7964__$1;image_7963.src = href_uri_7965.makeUnique().toString();
} else
{}
} else
{}
{
var G__7966 = seq__7958;
var G__7967 = chunk__7959;
var G__7968 = count__7960;
var G__7969 = (i__7961 + (1));
seq__7958 = G__7966;
chunk__7959 = G__7967;
count__7960 = G__7968;
i__7961 = G__7969;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7958);if(temp__4126__auto__)
{var seq__7958__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7958__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__7958__$1);{
var G__7970 = cljs.core.chunk_rest.call(null,seq__7958__$1);
var G__7971 = c__4195__auto__;
var G__7972 = cljs.core.count.call(null,c__4195__auto__);
var G__7973 = (0);
seq__7958 = G__7970;
chunk__7959 = G__7971;
count__7960 = G__7972;
i__7961 = G__7973;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__7958__$1);var temp__4126__auto___7974__$1 = (images[s]);if(cljs.core.truth_(temp__4126__auto___7974__$1))
{var image_7975 = temp__4126__auto___7974__$1;var temp__4126__auto___7976__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7975.src,changed);if(cljs.core.truth_(temp__4126__auto___7976__$2))
{var href_uri_7977 = temp__4126__auto___7976__$2;image_7975.src = href_uri_7977.makeUnique().toString();
} else
{}
} else
{}
{
var G__7978 = cljs.core.next.call(null,seq__7958__$1);
var G__7979 = null;
var G__7980 = (0);
var G__7981 = (0);
seq__7958 = G__7978;
chunk__7959 = G__7979;
count__7960 = G__7980;
i__7961 = G__7981;
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
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__7984){var map__7986 = p__7984;var map__7986__$1 = ((cljs.core.seq_QMARK_.call(null,map__7986))?cljs.core.apply.call(null,cljs.core.hash_map,map__7986):map__7986);var on_jsload = cljs.core.get.call(null,map__7986__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);var js_files = cljs.core.filter.call(null,((function (map__7986,map__7986__$1,on_jsload){
return (function (p1__7982_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7982_SHARP_,".js");
});})(map__7986,map__7986__$1,on_jsload))
,changed);if(cljs.core.seq.call(null,js_files))
{return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7986,map__7986__$1,on_jsload){
return (function (p1__7983_SHARP_){return goog.net.jsloader.load(goog.Uri.parse(p1__7983_SHARP_).makeUnique());
});})(js_files,map__7986,map__7986__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7986,map__7986__$1,on_jsload){
return (function() { 
var G__7987__delegate = function (_){return on_jsload.call(null);
};
var G__7987 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7987__delegate.call(this,_);};
G__7987.cljs$lang$maxFixedArity = 0;
G__7987.cljs$lang$applyTo = (function (arglist__7988){
var _ = cljs.core.seq(arglist__7988);
return G__7987__delegate(_);
});
G__7987.cljs$core$IFn$_invoke$arity$variadic = G__7987__delegate;
return G__7987;
})()
;})(js_files,map__7986,map__7986__$1,on_jsload))
,((function (js_files,map__7986,map__7986__$1,on_jsload){
return (function (e){return console.error("Load failed:",e.message);
});})(js_files,map__7986,map__7986__$1,on_jsload))
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
var seq__7993_7997 = cljs.core.seq.call(null,things_to_log);var chunk__7994_7998 = null;var count__7995_7999 = (0);var i__7996_8000 = (0);while(true){
if((i__7996_8000 < count__7995_7999))
{var t_8001 = cljs.core._nth.call(null,chunk__7994_7998,i__7996_8000);console.log(t_8001);
{
var G__8002 = seq__7993_7997;
var G__8003 = chunk__7994_7998;
var G__8004 = count__7995_7999;
var G__8005 = (i__7996_8000 + (1));
seq__7993_7997 = G__8002;
chunk__7994_7998 = G__8003;
count__7995_7999 = G__8004;
i__7996_8000 = G__8005;
continue;
}
} else
{var temp__4126__auto___8006 = cljs.core.seq.call(null,seq__7993_7997);if(temp__4126__auto___8006)
{var seq__7993_8007__$1 = temp__4126__auto___8006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7993_8007__$1))
{var c__4195__auto___8008 = cljs.core.chunk_first.call(null,seq__7993_8007__$1);{
var G__8009 = cljs.core.chunk_rest.call(null,seq__7993_8007__$1);
var G__8010 = c__4195__auto___8008;
var G__8011 = cljs.core.count.call(null,c__4195__auto___8008);
var G__8012 = (0);
seq__7993_7997 = G__8009;
chunk__7994_7998 = G__8010;
count__7995_7999 = G__8011;
i__7996_8000 = G__8012;
continue;
}
} else
{var t_8013 = cljs.core.first.call(null,seq__7993_8007__$1);console.log(t_8013);
{
var G__8014 = cljs.core.next.call(null,seq__7993_8007__$1);
var G__8015 = null;
var G__8016 = (0);
var G__8017 = (0);
seq__7993_7997 = G__8014;
chunk__7994_7998 = G__8015;
count__7995_7999 = G__8016;
i__7996_8000 = G__8017;
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
var G__8019 = changed;adzerk.boot_reload.reload.reload_js.call(null,G__8019,opts);
adzerk.boot_reload.reload.reload_html.call(null,G__8019);
adzerk.boot_reload.reload.reload_css.call(null,G__8019);
adzerk.boot_reload.reload.reload_img.call(null,G__8019);
return G__8019;
});

//# sourceMappingURL=reload.js.map