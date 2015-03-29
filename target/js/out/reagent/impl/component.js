// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$["cljsState"]);if(!((sa == null)))
{return sa;
} else
{return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function as_element(x){var G__13374 = x;return reagent.impl.template.as_element(G__13374);
});
reagent.impl.component.do_render = (function do_render(c){var _STAR_current_component_STAR_13389 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = c;
var f = (c["cljsRender"]);var _ = null;var p = (c["props"]);var res = ((((c["reagentRender"]) == null))?(function (){var G__13390 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13390) : f.call(null,G__13390));
})():(function (){var argv = (p["argv"]);var n = cljs.core.count(argv);var G__13391 = n;switch (G__13391) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__13392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13392) : f.call(null,G__13392));

break;
case (3):
var G__13393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__13394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13393,G__13394) : f.call(null,G__13393,G__13394));

break;
case (4):
var G__13395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__13396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__13397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13395,G__13396,G__13397) : f.call(null,G__13395,G__13396,G__13397));

break;
case (5):
var G__13398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__13399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__13400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));var G__13401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13398,G__13399,G__13400,G__13401) : f.call(null,G__13398,G__13399,G__13400,G__13401));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());if(cljs.core.vector_QMARK_(res))
{return reagent.impl.component.as_element(res);
} else
{if(cljs.core.ifn_QMARK_(res))
{(c["cljsRender"] = res);
return do_render(c);
} else
{return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_13389;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$21,(function (){var c = this;if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_))
{return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){return reagent.impl.component.do_render(c);
});})(c))
);
} else
{return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__13418 = (((key instanceof cljs.core.Keyword))?key.fqn:null);switch (G__13418) {
case "componentWillUnmount":
return ((function (G__13418){
return (function (){var c = this;reagent.impl.batching.dispose(c);
if((f == null))
{return null;
} else
{var G__13419 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13419) : f.call(null,G__13419));
}
});
;})(G__13418))

break;
case "componentWillMount":
return ((function (G__13418){
return (function (){var c = this;(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());
if((f == null))
{return null;
} else
{var G__13420 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13420) : f.call(null,G__13420));
}
});
;})(G__13418))

break;
case "componentDidUpdate":
return ((function (G__13418){
return (function (oldprops){var c = this;var G__13421 = c;var G__13422 = (oldprops["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13421,G__13422) : f.call(null,G__13421,G__13422));
});
;})(G__13418))

break;
case "componentWillUpdate":
return ((function (G__13418){
return (function (nextprops){var c = this;var G__13423 = c;var G__13424 = (nextprops["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13423,G__13424) : f.call(null,G__13423,G__13424));
});
;})(G__13418))

break;
case "shouldComponentUpdate":
return ((function (G__13418){
return (function (nextprops,nextstate){var or__3425__auto__ = reagent.impl.util._STAR_always_update_STAR_;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{var c = this;var old_argv = (c["props"]["argv"]);var new_argv = (nextprops["argv"]);if((f == null))
{return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else
{var G__13425 = c;var G__13426 = old_argv;var G__13427 = new_argv;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13425,G__13426,G__13427) : f.call(null,G__13425,G__13426,G__13427));
}
}
});
;})(G__13418))

break;
case "componentWillReceiveProps":
return ((function (G__13418){
return (function (props){var c = this;var G__13428 = c;var G__13429 = (props["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13428,G__13429) : f.call(null,G__13428,G__13429));
});
;})(G__13418))

break;
case "getInitialState":
return ((function (G__13418){
return (function (){var c = this;var G__13430 = reagent.impl.component.state_atom(c);var G__13431 = (function (){var G__13432 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13432) : f.call(null,G__13432));
})();return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13430,G__13431) : cljs.core.reset_BANG_.call(null,G__13430,G__13431));
});
;})(G__13418))

break;
case "getDefaultProps":
return null;

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.ifn_QMARK_(f))
{return (function() { 
var G__13434__delegate = function (args){var c = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__13434 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13434__delegate.call(this,args);};
G__13434.cljs$lang$maxFixedArity = 0;
G__13434.cljs$lang$applyTo = (function (arglist__13435){
var args = cljs.core.seq(arglist__13435);
return G__13434__delegate(args);
});
G__13434.cljs$core$IFn$_invoke$arity$variadic = G__13434__delegate;
return G__13434;
})()
;
} else
{return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$24,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){if(cljs.core.fn_QMARK_(f))
{var G__13437 = f;(G__13437["__reactDontBind"] = true);
return G__13437;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){if(cljs.core.truth_((function (){var G__13439 = key;return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__13439) : reagent.impl.component.dont_wrap.call(null,G__13439));
})()))
{return reagent.impl.component.dont_bind(f);
} else
{var wrap = reagent.impl.component.custom_wrapper(key,f);if(cljs.core.truth_((function (){var and__3413__auto__ = wrap;if(cljs.core.truth_(and__3413__auto__))
{return f;
} else
{return and__3413__auto__;
}
})()))
{} else
{}
var or__3425__auto__ = wrap;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$27,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv((function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__13441 = k;return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__13441) : reagent.impl.component.dash_to_camel.call(null,G__13441));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$22,render_f,cljs.core.array_seq([cljs.core.constant$keyword$21,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));return fm;

});
reagent.impl.component.fun_name = (function fun_name(f){var or__3425__auto__ = (function (){var and__3413__auto__ = cljs.core.fn_QMARK_(f);if(and__3413__auto__)
{var or__3425__auto__ = (f["displayName"]);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return (f["name"]);
}
} else
{return and__3413__auto__;
}
})();if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (function (){var and__3413__auto__ = (function (){var G__13449 = f;if(G__13449)
{var bit__4082__auto__ = (G__13449.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4082__auto__) || (G__13449.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})();if(and__3413__auto__)
{return cljs.core.name(f);
} else
{return and__3413__auto__;
}
})();if(cljs.core.truth_(or__3425__auto____$1))
{return or__3425__auto____$1;
} else
{var m = cljs.core.meta(f);if(cljs.core.map_QMARK_(m))
{return cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(fmap);if((temp__4128__auto__ == null))
{return fmap;
} else
{var cf = temp__4128__auto__;return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$23,cf),cljs.core.constant$keyword$29);
}
})();var render_fun = (function (){var or__3425__auto__ = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();var _ = null;var name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3425__auto__ = cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return reagent.impl.component.fun_name(render_fun);
}
})()));var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))):name);var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$30,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv((function (o,k,v){var G__13451 = o;(G__13451[cljs.core.name(k)] = v);
return G__13451;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){var spec = reagent.impl.component.cljsify(body);var res = (React["createClass"])(spec);var f = ((function (spec,res){
return (function() { 
var G__13452__delegate = function (args){return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__13452 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13452__delegate.call(this,args);};
G__13452.cljs$lang$maxFixedArity = 0;
G__13452.cljs$lang$applyTo = (function (arglist__13453){
var args = cljs.core.seq(arglist__13453);
return G__13452__delegate(args);
});
G__13452.cljs$core$IFn$_invoke$arity$variadic = G__13452__delegate;
return G__13452;
})()
;})(spec,res))
;reagent.impl.util.cache_react_class(f,res);
reagent.impl.util.cache_react_class(res,res);
return f;
});
reagent.impl.component.comp_name = (function comp_name(){return "";

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__13462(s__13463){return (new cljs.core.LazySeq(null,(function (){var s__13463__$1 = s__13463;while(true){
var temp__4126__auto__ = cljs.core.seq(s__13463__$1);if(temp__4126__auto__)
{var s__13463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__13463__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__13463__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__13465 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__13464 = (0);while(true){
if((i__13464 < size__4163__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__13464);cljs.core.chunk_append(b__13465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));
{
var G__13468 = (i__13464 + (1));
i__13464 = G__13468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__13465),iter__13462(cljs.core.chunk_rest(s__13463__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__13465),null);
}
} else
{var k = cljs.core.first(s__13463__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__13462(cljs.core.rest(s__13463__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4164__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){return (React["createClass"])({"render": (function (){var this$ = this;return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$31,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
