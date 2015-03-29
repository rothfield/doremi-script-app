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
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = (function (){var G__13732 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13732) : cljs.core.atom.call(null,G__13732));
})();return ((function (mem){
return (function (arg){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__13733 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13733) : cljs.core.deref.call(null,G__13733));
})(),arg);if(!((v == null)))
{return v;
} else
{var ret = (function (){var G__13734 = arg;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13734) : f.call(null,G__13734));
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
{var name_str = cljs.core.name(dashed);var vec__13737 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(0),null);var parts = cljs.core.nthnext(vec__13737,(1));if(cljs.core.truth_((function (){var G__13738 = start;return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__13738) : reagent.impl.util.dont_camel_case.call(null,G__13738));
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
var G__13740__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3425__auto___13741 = self__.p;if(cljs.core.truth_(or__3425__auto___13741))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__13740 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13740__delegate.call(this,self__,a);};
G__13740.cljs$lang$maxFixedArity = 1;
G__13740.cljs$lang$applyTo = (function (arglist__13742){
var self__ = cljs.core.first(arglist__13742);
var a = cljs.core.rest(arglist__13742);
return G__13740__delegate(self__,a);
});
G__13740.cljs$core$IFn$_invoke$arity$variadic = G__13740__delegate;
return G__13740;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args13739){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13739)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13743__delegate = function (a){var _ = this;var or__3425__auto___13744 = self__.p;if(cljs.core.truth_(or__3425__auto___13744))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__13743 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13743__delegate.call(this,a);};
G__13743.cljs$lang$maxFixedArity = 0;
G__13743.cljs$lang$applyTo = (function (arglist__13745){
var a = cljs.core.seq(arglist__13745);
return G__13743__delegate(a);
});
G__13743.cljs$core$IFn$_invoke$arity$variadic = G__13743__delegate;
return G__13743;
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
{reagent.impl.util.roots = (function (){var G__13746 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13746) : cljs.core.atom.call(null,G__13746));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){try{return (React["unmountComponentAtNode"])(node);
}catch (e13748){if((e13748 instanceof Object))
{var e = e13748;if(typeof console !== 'undefined')
{return console.log(e);
} else
{return null;
}
} else
{throw e13748;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){try{var _STAR_always_update_STAR_13753 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_13753){
return (function (){var _STAR_always_update_STAR_13754 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = false;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));
if(cljs.core.some_QMARK_(callback))
{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else
{return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13754;
}});})(_STAR_always_update_STAR_13753))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13753;
}}catch (e13752){if((e13752 instanceof Object))
{var e = e13752;reagent.impl.util.clear_container(container);
throw e;
} else
{throw e13752;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var seq__13760_13765 = cljs.core.seq(cljs.core.vals((function (){var G__13764 = reagent.impl.util.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13764) : cljs.core.deref.call(null,G__13764));
})()));var chunk__13761_13766 = null;var count__13762_13767 = (0);var i__13763_13768 = (0);while(true){
if((i__13763_13768 < count__13762_13767))
{var v_13769 = chunk__13761_13766.cljs$core$IIndexed$_nth$arity$2(null,i__13763_13768);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_13769);
{
var G__13770 = seq__13760_13765;
var G__13771 = chunk__13761_13766;
var G__13772 = count__13762_13767;
var G__13773 = (i__13763_13768 + (1));
seq__13760_13765 = G__13770;
chunk__13761_13766 = G__13771;
count__13762_13767 = G__13772;
i__13763_13768 = G__13773;
continue;
}
} else
{var temp__4126__auto___13774 = cljs.core.seq(seq__13760_13765);if(temp__4126__auto___13774)
{var seq__13760_13775__$1 = temp__4126__auto___13774;if(cljs.core.chunked_seq_QMARK_(seq__13760_13775__$1))
{var c__4195__auto___13776 = cljs.core.chunk_first(seq__13760_13775__$1);{
var G__13777 = cljs.core.chunk_rest(seq__13760_13775__$1);
var G__13778 = c__4195__auto___13776;
var G__13779 = cljs.core.count(c__4195__auto___13776);
var G__13780 = (0);
seq__13760_13765 = G__13777;
chunk__13761_13766 = G__13778;
count__13762_13767 = G__13779;
i__13763_13768 = G__13780;
continue;
}
} else
{var v_13781 = cljs.core.first(seq__13760_13775__$1);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_13781);
{
var G__13782 = cljs.core.next(seq__13760_13775__$1);
var G__13783 = null;
var G__13784 = (0);
var G__13785 = (0);
seq__13760_13765 = G__13782;
chunk__13761_13766 = G__13783;
count__13762_13767 = G__13784;
i__13763_13768 = G__13785;
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