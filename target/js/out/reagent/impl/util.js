// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);if(cljs.core.map_QMARK_(p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));if((cljs.core.count(v) > first_child))
{return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = (function (){var G__14862 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14862) : cljs.core.atom.call(null,G__14862));
})();return ((function (mem){
return (function (arg){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__14863 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14863) : cljs.core.deref.call(null,G__14863));
})(),arg);if(!((v == null)))
{return v;
} else
{var ret = (function (){var G__14864 = arg;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14864) : f.call(null,G__14864));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count(s) < (2)))
{return clojure.string.upper_case(s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))));
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name(dashed);var vec__14867 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);var parts = cljs.core.nthnext(vec__14867,(1));if(cljs.core.truth_((function (){var G__14868 = start;return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__14868) : reagent.impl.util.dont_camel_case.call(null,G__14868));
})()))
{return name_str;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__14870__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3425__auto___14871 = self__.p;if(cljs.core.truth_(or__3425__auto___14871))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14870 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14870__delegate.call(this,self__,a);};
G__14870.cljs$lang$maxFixedArity = 1;
G__14870.cljs$lang$applyTo = (function (arglist__14872){
var self__ = cljs.core.first(arglist__14872);
var a = cljs.core.rest(arglist__14872);
return G__14870__delegate(self__,a);
});
G__14870.cljs$core$IFn$_invoke$arity$variadic = G__14870__delegate;
return G__14870;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args14869){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14869)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14873__delegate = function (a){var _ = this;var or__3425__auto___14874 = self__.p;if(cljs.core.truth_(or__3425__auto___14874))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__14873 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14873__delegate.call(this,a);};
G__14873.cljs$lang$maxFixedArity = 0;
G__14873.cljs$lang$applyTo = (function (arglist__14875){
var a = cljs.core.seq(arglist__14875);
return G__14873__delegate(a);
});
G__14873.cljs$core$IFn$_invoke$arity$variadic = G__14873__delegate;
return G__14873;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var c1 = temp__4126__auto__;var temp__4126__auto____$1 = cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var c2 = temp__4126__auto____$1;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2));
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$15,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var s1 = temp__4126__auto__;var temp__4126__auto____$1 = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var s2 = temp__4126__auto____$1;return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$16,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined')
{} else
{reagent.impl.util.roots = (function (){var G__14876 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14876) : cljs.core.atom.call(null,G__14876));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){try{return (React["unmountComponentAtNode"])(node);
}catch (e14878){if((e14878 instanceof Object))
{var e = e14878;if(typeof console !== 'undefined')
{return console.log(e);
} else
{return null;
}
} else
{throw e14878;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){try{var _STAR_always_update_STAR_14883 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_14883){
return (function (){var _STAR_always_update_STAR_14884 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = false;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));
if(cljs.core.some_QMARK_(callback))
{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else
{return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14884;
}});})(_STAR_always_update_STAR_14883))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14883;
}}catch (e14882){if((e14882 instanceof Object))
{var e = e14882;reagent.impl.util.clear_container(container);
throw e;
} else
{throw e14882;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var seq__14890_14895 = cljs.core.seq(cljs.core.vals((function (){var G__14894 = reagent.impl.util.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14894) : cljs.core.deref.call(null,G__14894));
})()));var chunk__14891_14896 = null;var count__14892_14897 = (0);var i__14893_14898 = (0);while(true){
if((i__14893_14898 < count__14892_14897))
{var v_14899 = chunk__14891_14896.cljs$core$IIndexed$_nth$arity$2(null,i__14893_14898);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_14899);
{
var G__14900 = seq__14890_14895;
var G__14901 = chunk__14891_14896;
var G__14902 = count__14892_14897;
var G__14903 = (i__14893_14898 + (1));
seq__14890_14895 = G__14900;
chunk__14891_14896 = G__14901;
count__14892_14897 = G__14902;
i__14893_14898 = G__14903;
continue;
}
} else
{var temp__4126__auto___14904 = cljs.core.seq(seq__14890_14895);if(temp__4126__auto___14904)
{var seq__14890_14905__$1 = temp__4126__auto___14904;if(cljs.core.chunked_seq_QMARK_(seq__14890_14905__$1))
{var c__4195__auto___14906 = cljs.core.chunk_first(seq__14890_14905__$1);{
var G__14907 = cljs.core.chunk_rest(seq__14890_14905__$1);
var G__14908 = c__4195__auto___14906;
var G__14909 = cljs.core.count(c__4195__auto___14906);
var G__14910 = (0);
seq__14890_14895 = G__14907;
chunk__14891_14896 = G__14908;
count__14892_14897 = G__14909;
i__14893_14898 = G__14910;
continue;
}
} else
{var v_14911 = cljs.core.first(seq__14890_14905__$1);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_14911);
{
var G__14912 = cljs.core.next(seq__14890_14905__$1);
var G__14913 = null;
var G__14914 = (0);
var G__14915 = (0);
seq__14890_14895 = G__14912;
chunk__14891_14896 = G__14913;
count__14892_14897 = G__14914;
i__14893_14898 = G__14915;
continue;
}
}
} else
{}
}
break;
}
return "Updated";
});
