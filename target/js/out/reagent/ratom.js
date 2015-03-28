// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined')
{} else
{reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined')
{} else
{reagent.ratom._running = (function (){var G__13547 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13547) : cljs.core.atom.call(null,G__13547));
})();
}
reagent.ratom.running = (function running(){var G__13549 = reagent.ratom._running;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13549) : cljs.core.deref.call(null,G__13549));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_13551 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_13551;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});
reagent.ratom.IReactiveAtom = (function (){var obj13553 = {};return obj13553;
})();

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__13554 = this$__$1;return goog.getUid(G__13554);
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches(a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13555 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13555) : f.call(null,G__13555));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13556 = self__.state;var G__13557 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13556,G__13557) : f.call(null,G__13556,G__13557));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13558 = self__.state;var G__13559 = x;var G__13560 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13558,G__13559,G__13560) : f.call(null,G__13558,G__13559,G__13560));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__13561_13565 = key;var G__13562_13566 = this$__$1;var G__13563_13567 = oldval;var G__13564_13568 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13561_13565,G__13562_13566,G__13563_13567,G__13564_13568) : f.call(null,G__13561_13565,G__13562_13566,G__13563_13567,G__13564_13568));
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
return self__.state;
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13572__delegate = function (x,p__13569){var map__13571 = p__13569;var map__13571__$1 = ((cljs.core.seq_QMARK_(map__13571))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13571):map__13571);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13571__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13571__$1,cljs.core.constant$keyword$3);return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__13572 = function (x,var_args){
var p__13569 = null;if (arguments.length > 1) {
  p__13569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13572__delegate.call(this,x,p__13569);};
G__13572.cljs$lang$maxFixedArity = 1;
G__13572.cljs$lang$applyTo = (function (arglist__13573){
var x = cljs.core.first(arglist__13573);
var p__13569 = cljs.core.rest(arglist__13573);
return G__13572__delegate(x,p__13569);
});
G__13572.cljs$core$IFn$_invoke$arity$variadic = G__13572__delegate;
return G__13572;
})()
;
atom = function(x,var_args){
var p__13569 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype._reaction = (function (){var self__ = this;
var this$ = this;if((self__.reaction == null))
{return self__.reaction = (((function (){var G__13580 = self__.ratom;if(G__13580)
{var bit__4089__auto__ = (G__13580.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__13580.cljs$core$IDeref$))
{return true;
} else
{if((!G__13580.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13580);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13580);
}
})())?(function (){var G__13581 = ((function (this$){
return (function (){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13584 = self__.ratom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13584) : cljs.core.deref.call(null,G__13584));
})(),self__.path);
});})(this$))
;var G__13582 = cljs.core.constant$keyword$17;var G__13583 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__13581,G__13582,this$){
return (function (p1__13575_SHARP_,p2__13574_SHARP_){var G__13585 = self__.ratom;var G__13586 = p2__13574_SHARP_;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13585,G__13586) : cljs.core.reset_BANG_.call(null,G__13585,G__13586));
});})(G__13581,G__13582,this$))
:((function (G__13581,G__13582,this$){
return (function (p1__13577_SHARP_,p2__13576_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__13576_SHARP_);
});})(G__13581,G__13582,this$))
);return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__13581,G__13582,G__13583) : reagent.ratom.make_reaction.call(null,G__13581,G__13582,G__13583));
})():(function (){var G__13587 = ((function (this$){
return (function (){var G__13590 = self__.path;return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__13590) : self__.ratom.call(null,G__13590));
});})(this$))
;var G__13588 = cljs.core.constant$keyword$17;var G__13589 = ((function (G__13587,G__13588,this$){
return (function (p1__13579_SHARP_,p2__13578_SHARP_){var G__13591 = self__.path;var G__13592 = p2__13578_SHARP_;return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__13591,G__13592) : self__.ratom.call(null,G__13591,G__13592));
});})(G__13587,G__13588,this$))
;return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__13587,G__13588,G__13589) : reagent.ratom.make_reaction.call(null,G__13587,G__13588,G__13589));
})());
} else
{return self__.reaction;
}
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_13593 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_13593;
}});
reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,("#<Cursor: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)+" "));
cljs.core.pr_writer(a__$1._peek(),writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch(this$__$1._reaction(),key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch(this$__$1._reaction(),key);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._deref(this$__$1._reaction());
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){return (new reagent.ratom.RCursor(ratom,path,reaction));
});
reagent.ratom.cursor = (function cursor(src,path){if((function (){var G__13595 = path;if(G__13595)
{var bit__4089__auto__ = (G__13595.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__13595.cljs$core$IDeref$))
{return true;
} else
{if((!G__13595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13595);
}
})())
{return (new reagent.ratom.RCursor(path,src,null));
} else
{return (new reagent.ratom.RCursor(src,path,null));
}
});
reagent.ratom.IDisposable = (function (){var obj13597 = {};return obj13597;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__13601 = x__4062__auto__;return goog.typeOf(G__13601);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj13603 = {};return obj13603;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.run[(function (){var G__13607 = x__4062__auto__;return goog.typeOf(G__13607);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom.run["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj13609 = {};return obj13609;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom._update_watching[(function (){var G__13613 = x__4062__auto__;return goog.typeOf(G__13613);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3413__auto__ = k;if(and__3413__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3413__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4062__auto__ = (((k == null))?null:k);return (function (){var or__3425__auto__ = (reagent.ratom._handle_change[(function (){var G__13617 = x__4062__auto__;return goog.typeOf(G__13617);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3413__auto__))
{return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3413__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3425__auto__ = self__.auto_run;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__13618_13643 = cljs.core.seq(derefed);var chunk__13619_13644 = null;var count__13620_13645 = (0);var i__13621_13646 = (0);while(true){
if((i__13621_13646 < count__13620_13645))
{var w_13647 = chunk__13619_13644.cljs$core$IIndexed$_nth$arity$2(null,i__13621_13646);if(cljs.core.contains_QMARK_(self__.watching,w_13647))
{} else
{cljs.core.add_watch(w_13647,this$__$1,reagent.ratom._handle_change);
}
{
var G__13648 = seq__13618_13643;
var G__13649 = chunk__13619_13644;
var G__13650 = count__13620_13645;
var G__13651 = (i__13621_13646 + (1));
seq__13618_13643 = G__13648;
chunk__13619_13644 = G__13649;
count__13620_13645 = G__13650;
i__13621_13646 = G__13651;
continue;
}
} else
{var temp__4126__auto___13652 = cljs.core.seq(seq__13618_13643);if(temp__4126__auto___13652)
{var seq__13618_13653__$1 = temp__4126__auto___13652;if(cljs.core.chunked_seq_QMARK_(seq__13618_13653__$1))
{var c__4195__auto___13654 = cljs.core.chunk_first(seq__13618_13653__$1);{
var G__13655 = cljs.core.chunk_rest(seq__13618_13653__$1);
var G__13656 = c__4195__auto___13654;
var G__13657 = cljs.core.count(c__4195__auto___13654);
var G__13658 = (0);
seq__13618_13643 = G__13655;
chunk__13619_13644 = G__13656;
count__13620_13645 = G__13657;
i__13621_13646 = G__13658;
continue;
}
} else
{var w_13659 = cljs.core.first(seq__13618_13653__$1);if(cljs.core.contains_QMARK_(self__.watching,w_13659))
{} else
{cljs.core.add_watch(w_13659,this$__$1,reagent.ratom._handle_change);
}
{
var G__13660 = cljs.core.next(seq__13618_13653__$1);
var G__13661 = null;
var G__13662 = (0);
var G__13663 = (0);
seq__13618_13643 = G__13660;
chunk__13619_13644 = G__13661;
count__13620_13645 = G__13662;
i__13621_13646 = G__13663;
continue;
}
}
} else
{}
}
break;
}
var seq__13622_13664 = cljs.core.seq(self__.watching);var chunk__13623_13665 = null;var count__13624_13666 = (0);var i__13625_13667 = (0);while(true){
if((i__13625_13667 < count__13624_13666))
{var w_13668 = chunk__13623_13665.cljs$core$IIndexed$_nth$arity$2(null,i__13625_13667);if(cljs.core.contains_QMARK_(derefed,w_13668))
{} else
{cljs.core.remove_watch(w_13668,this$__$1);
}
{
var G__13669 = seq__13622_13664;
var G__13670 = chunk__13623_13665;
var G__13671 = count__13624_13666;
var G__13672 = (i__13625_13667 + (1));
seq__13622_13664 = G__13669;
chunk__13623_13665 = G__13670;
count__13624_13666 = G__13671;
i__13625_13667 = G__13672;
continue;
}
} else
{var temp__4126__auto___13673 = cljs.core.seq(seq__13622_13664);if(temp__4126__auto___13673)
{var seq__13622_13674__$1 = temp__4126__auto___13673;if(cljs.core.chunked_seq_QMARK_(seq__13622_13674__$1))
{var c__4195__auto___13675 = cljs.core.chunk_first(seq__13622_13674__$1);{
var G__13676 = cljs.core.chunk_rest(seq__13622_13674__$1);
var G__13677 = c__4195__auto___13675;
var G__13678 = cljs.core.count(c__4195__auto___13675);
var G__13679 = (0);
seq__13622_13664 = G__13676;
chunk__13623_13665 = G__13677;
count__13624_13666 = G__13678;
i__13625_13667 = G__13679;
continue;
}
} else
{var w_13680 = cljs.core.first(seq__13622_13674__$1);if(cljs.core.contains_QMARK_(derefed,w_13680))
{} else
{cljs.core.remove_watch(w_13680,this$__$1);
}
{
var G__13681 = cljs.core.next(seq__13622_13674__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__13622_13664 = G__13681;
chunk__13623_13665 = G__13682;
count__13624_13666 = G__13683;
i__13625_13667 = G__13684;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write(writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$__$1))+": "));
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__13626 = this$__$1;return goog.getUid(G__13626);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__13627_13685 = cljs.core.seq(self__.watching);var chunk__13628_13686 = null;var count__13629_13687 = (0);var i__13630_13688 = (0);while(true){
if((i__13630_13688 < count__13629_13687))
{var w_13689 = chunk__13628_13686.cljs$core$IIndexed$_nth$arity$2(null,i__13630_13688);cljs.core.remove_watch(w_13689,this$__$1);
{
var G__13690 = seq__13627_13685;
var G__13691 = chunk__13628_13686;
var G__13692 = count__13629_13687;
var G__13693 = (i__13630_13688 + (1));
seq__13627_13685 = G__13690;
chunk__13628_13686 = G__13691;
count__13629_13687 = G__13692;
i__13630_13688 = G__13693;
continue;
}
} else
{var temp__4126__auto___13694 = cljs.core.seq(seq__13627_13685);if(temp__4126__auto___13694)
{var seq__13627_13695__$1 = temp__4126__auto___13694;if(cljs.core.chunked_seq_QMARK_(seq__13627_13695__$1))
{var c__4195__auto___13696 = cljs.core.chunk_first(seq__13627_13695__$1);{
var G__13697 = cljs.core.chunk_rest(seq__13627_13695__$1);
var G__13698 = c__4195__auto___13696;
var G__13699 = cljs.core.count(c__4195__auto___13696);
var G__13700 = (0);
seq__13627_13685 = G__13697;
chunk__13628_13686 = G__13698;
count__13629_13687 = G__13699;
i__13630_13688 = G__13700;
continue;
}
} else
{var w_13701 = cljs.core.first(seq__13627_13695__$1);cljs.core.remove_watch(w_13701,this$__$1);
{
var G__13702 = cljs.core.next(seq__13627_13695__$1);
var G__13703 = null;
var G__13704 = (0);
var G__13705 = (0);
seq__13627_13685 = G__13702;
chunk__13628_13686 = G__13703;
count__13629_13687 = G__13704;
i__13630_13688 = G__13705;
continue;
}
}
} else
{}
}
break;
}
self__.watching = null;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){var self__ = this;
var a__$1 = this;var oldval = self__.state;self__.state = newval;
if(cljs.core.truth_(self__.on_set))
{self__.dirty_QMARK_ = true;
var G__13631_13706 = oldval;var G__13632_13707 = newval;(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__13631_13706,G__13632_13707) : self__.on_set.call(null,G__13631_13706,G__13632_13707));
} else
{}
cljs.core._notify_watches(a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13633 = self__.state;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13633) : f__$1.call(null,G__13633));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13634 = self__.state;var G__13635 = x;return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__13634,G__13635) : f__$1.call(null,G__13634,G__13635));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13636 = self__.state;var G__13637 = x;var G__13638 = y;return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__13636,G__13637,G__13638) : f__$1.call(null,G__13636,G__13637,G__13638));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed(self__.f,this$__$1);var derefed = reagent.ratom.captured(this$__$1);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching))
{reagent.ratom._update_watching(this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cljs.core._notify_watches(this$__$1,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){var G__13639_13708 = key;var G__13640_13709 = this$__$1;var G__13641_13710 = oldval;var G__13642_13711 = newval;(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__13639_13708,G__13640_13709,G__13641_13710,G__13642_13711) : f__$1.call(null,G__13639_13708,G__13640_13709,G__13641_13710,G__13642_13711));
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run)))
{return reagent.ratom.dispose_BANG_(this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not((function (){var or__3425__auto__ = self__.auto_run;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})()))
{if(cljs.core.truth_(self__.dirty_QMARK_))
{var oldstate_13712 = self__.state;self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
if((oldstate_13712 === self__.state))
{} else
{cljs.core._notify_watches(this$__$1,oldstate_13712,self__.state);
}
} else
{}
return self__.state;
} else
{reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run(this$__$1);
} else
{return self__.state;
}
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__13713){var map__13715 = p__13713;var map__13715__$1 = ((cljs.core.seq_QMARK_(map__13715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13715):map__13715);var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.constant$keyword$18);var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.constant$keyword$19);var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.constant$keyword$17);var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.constant$keyword$20);var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__13713 = null;if (arguments.length > 1) {
  p__13713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__13713);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__13716){
var f = cljs.core.first(arglist__13716);
var p__13713 = cljs.core.rest(arglist__13716);
return make_reaction__delegate(f,p__13713);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.cljs$lang$type = true;
reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";
reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.ratom/Wrapper");
});
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;cljs.core._write(writer,"#<wrap: ");
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__13717_13728 = key;var G__13718_13729 = this$__$1;var G__13719_13730 = oldval;var G__13720_13731 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13717_13728,G__13718_13729,G__13719_13730,G__13720_13731) : f.call(null,G__13717_13728,G__13718_13729,G__13719_13730,G__13720_13731));
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13721 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13721) : f.call(null,G__13721));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13722 = self__.state;var G__13723 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13722,G__13723) : f.call(null,G__13722,G__13723));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13724 = self__.state;var G__13725 = x;var G__13726 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13724,G__13725,G__13726) : f.call(null,G__13724,G__13725,G__13726));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){var self__ = this;
var this$__$1 = this;var oldval = self__.state;self__.changed = true;
self__.state = newval;
if((self__.watches == null))
{} else
{cljs.core._notify_watches(this$__$1,oldval,newval);
}
var G__13727_13732 = newval;(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__13727_13732) : self__.callback.call(null,G__13727_13732));
return newval;
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;
return self__.state;
});
reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});
reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
