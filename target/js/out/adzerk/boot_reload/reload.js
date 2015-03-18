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
return (function (p1__6602_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6602_SHARP_,path);
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
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){var sheets = document.styleSheets;var seq__6607 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));var chunk__6608 = null;var count__6609 = (0);var i__6610 = (0);while(true){
if((i__6610 < count__6609))
{var s = cljs.core._nth.call(null,chunk__6608,i__6610);var temp__4126__auto___6611 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6611))
{var sheet_6612 = temp__4126__auto___6611;var temp__4126__auto___6613__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6612.href,changed);if(cljs.core.truth_(temp__4126__auto___6613__$1))
{var href_uri_6614 = temp__4126__auto___6613__$1;sheet_6612.ownerNode.href = href_uri_6614.makeUnique().toString();
} else
{}
} else
{}
{
var G__6615 = seq__6607;
var G__6616 = chunk__6608;
var G__6617 = count__6609;
var G__6618 = (i__6610 + (1));
seq__6607 = G__6615;
chunk__6608 = G__6616;
count__6609 = G__6617;
i__6610 = G__6618;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6607);if(temp__4126__auto__)
{var seq__6607__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6607__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6607__$1);{
var G__6619 = cljs.core.chunk_rest.call(null,seq__6607__$1);
var G__6620 = c__4195__auto__;
var G__6621 = cljs.core.count.call(null,c__4195__auto__);
var G__6622 = (0);
seq__6607 = G__6619;
chunk__6608 = G__6620;
count__6609 = G__6621;
i__6610 = G__6622;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6607__$1);var temp__4126__auto___6623__$1 = (sheets[s]);if(cljs.core.truth_(temp__4126__auto___6623__$1))
{var sheet_6624 = temp__4126__auto___6623__$1;var temp__4126__auto___6625__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6624.href,changed);if(cljs.core.truth_(temp__4126__auto___6625__$2))
{var href_uri_6626 = temp__4126__auto___6625__$2;sheet_6624.ownerNode.href = href_uri_6626.makeUnique().toString();
} else
{}
} else
{}
{
var G__6627 = cljs.core.next.call(null,seq__6607__$1);
var G__6628 = null;
var G__6629 = (0);
var G__6630 = (0);
seq__6607 = G__6627;
chunk__6608 = G__6628;
count__6609 = G__6629;
i__6610 = G__6630;
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
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){var images = document.images;var seq__6635 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));var chunk__6636 = null;var count__6637 = (0);var i__6638 = (0);while(true){
if((i__6638 < count__6637))
{var s = cljs.core._nth.call(null,chunk__6636,i__6638);var temp__4126__auto___6639 = (images[s]);if(cljs.core.truth_(temp__4126__auto___6639))
{var image_6640 = temp__4126__auto___6639;var temp__4126__auto___6641__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6640.src,changed);if(cljs.core.truth_(temp__4126__auto___6641__$1))
{var href_uri_6642 = temp__4126__auto___6641__$1;image_6640.src = href_uri_6642.makeUnique().toString();
} else
{}
} else
{}
{
var G__6643 = seq__6635;
var G__6644 = chunk__6636;
var G__6645 = count__6637;
var G__6646 = (i__6638 + (1));
seq__6635 = G__6643;
chunk__6636 = G__6644;
count__6637 = G__6645;
i__6638 = G__6646;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6635);if(temp__4126__auto__)
{var seq__6635__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6635__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6635__$1);{
var G__6647 = cljs.core.chunk_rest.call(null,seq__6635__$1);
var G__6648 = c__4195__auto__;
var G__6649 = cljs.core.count.call(null,c__4195__auto__);
var G__6650 = (0);
seq__6635 = G__6647;
chunk__6636 = G__6648;
count__6637 = G__6649;
i__6638 = G__6650;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__6635__$1);var temp__4126__auto___6651__$1 = (images[s]);if(cljs.core.truth_(temp__4126__auto___6651__$1))
{var image_6652 = temp__4126__auto___6651__$1;var temp__4126__auto___6653__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6652.src,changed);if(cljs.core.truth_(temp__4126__auto___6653__$2))
{var href_uri_6654 = temp__4126__auto___6653__$2;image_6652.src = href_uri_6654.makeUnique().toString();
} else
{}
} else
{}
{
var G__6655 = cljs.core.next.call(null,seq__6635__$1);
var G__6656 = null;
var G__6657 = (0);
var G__6658 = (0);
seq__6635 = G__6655;
chunk__6636 = G__6656;
count__6637 = G__6657;
i__6638 = G__6658;
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
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__6661){var map__6663 = p__6661;var map__6663__$1 = ((cljs.core.seq_QMARK_.call(null,map__6663))?cljs.core.apply.call(null,cljs.core.hash_map,map__6663):map__6663);var on_jsload = cljs.core.get.call(null,map__6663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);var js_files = cljs.core.filter.call(null,((function (map__6663,map__6663__$1,on_jsload){
return (function (p1__6659_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6659_SHARP_,".js");
});})(map__6663,map__6663__$1,on_jsload))
,changed);if(cljs.core.seq.call(null,js_files))
{return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6663,map__6663__$1,on_jsload){
return (function (p1__6660_SHARP_){return goog.net.jsloader.load(goog.Uri.parse(p1__6660_SHARP_).makeUnique());
});})(js_files,map__6663,map__6663__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6663,map__6663__$1,on_jsload){
return (function() { 
var G__6664__delegate = function (_){return on_jsload.call(null);
};
var G__6664 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6664__delegate.call(this,_);};
G__6664.cljs$lang$maxFixedArity = 0;
G__6664.cljs$lang$applyTo = (function (arglist__6665){
var _ = cljs.core.seq(arglist__6665);
return G__6664__delegate(_);
});
G__6664.cljs$core$IFn$_invoke$arity$variadic = G__6664__delegate;
return G__6664;
})()
;})(js_files,map__6663,map__6663__$1,on_jsload))
,((function (js_files,map__6663,map__6663__$1,on_jsload){
return (function (e){return console.error("Load failed:",e.message);
});})(js_files,map__6663,map__6663__$1,on_jsload))
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
var seq__6670_6674 = cljs.core.seq.call(null,things_to_log);var chunk__6671_6675 = null;var count__6672_6676 = (0);var i__6673_6677 = (0);while(true){
if((i__6673_6677 < count__6672_6676))
{var t_6678 = cljs.core._nth.call(null,chunk__6671_6675,i__6673_6677);console.log(t_6678);
{
var G__6679 = seq__6670_6674;
var G__6680 = chunk__6671_6675;
var G__6681 = count__6672_6676;
var G__6682 = (i__6673_6677 + (1));
seq__6670_6674 = G__6679;
chunk__6671_6675 = G__6680;
count__6672_6676 = G__6681;
i__6673_6677 = G__6682;
continue;
}
} else
{var temp__4126__auto___6683 = cljs.core.seq.call(null,seq__6670_6674);if(temp__4126__auto___6683)
{var seq__6670_6684__$1 = temp__4126__auto___6683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6670_6684__$1))
{var c__4195__auto___6685 = cljs.core.chunk_first.call(null,seq__6670_6684__$1);{
var G__6686 = cljs.core.chunk_rest.call(null,seq__6670_6684__$1);
var G__6687 = c__4195__auto___6685;
var G__6688 = cljs.core.count.call(null,c__4195__auto___6685);
var G__6689 = (0);
seq__6670_6674 = G__6686;
chunk__6671_6675 = G__6687;
count__6672_6676 = G__6688;
i__6673_6677 = G__6689;
continue;
}
} else
{var t_6690 = cljs.core.first.call(null,seq__6670_6684__$1);console.log(t_6690);
{
var G__6691 = cljs.core.next.call(null,seq__6670_6684__$1);
var G__6692 = null;
var G__6693 = (0);
var G__6694 = (0);
seq__6670_6674 = G__6691;
chunk__6671_6675 = G__6692;
count__6672_6676 = G__6693;
i__6673_6677 = G__6694;
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
var G__6696 = changed;adzerk.boot_reload.reload.reload_js.call(null,G__6696,opts);
adzerk.boot_reload.reload.reload_html.call(null,G__6696);
adzerk.boot_reload.reload.reload_css.call(null,G__6696);
adzerk.boot_reload.reload.reload_img.call(null,G__6696);
return G__6696;
});

//# sourceMappingURL=reload.js.map