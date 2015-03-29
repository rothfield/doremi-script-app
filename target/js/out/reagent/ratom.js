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
{reagent.ratom._running = (function (){var G__13543 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13543) : cljs.core.atom.call(null,G__13543));
})();
}
reagent.ratom.running = (function running(){var G__13545 = reagent.ratom._running;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13545) : cljs.core.deref.call(null,G__13545));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_13547 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_13547;
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
reagent.ratom.IReactiveAtom = (function (){var obj13549 = {};return obj13549;
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
var this$__$1 = this;var G__13550 = this$__$1;return goog.getUid(G__13550);
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
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13551 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13551) : f.call(null,G__13551));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13552 = self__.state;var G__13553 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13552,G__13553) : f.call(null,G__13552,G__13553));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13554 = self__.state;var G__13555 = x;var G__13556 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13554,G__13555,G__13556) : f.call(null,G__13554,G__13555,G__13556));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__13557_13561 = key;var G__13558_13562 = this$__$1;var G__13559_13563 = oldval;var G__13560_13564 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13557_13561,G__13558_13562,G__13559_13563,G__13560_13564) : f.call(null,G__13557_13561,G__13558_13562,G__13559_13563,G__13560_13564));
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
var G__13568__delegate = function (x,p__13565){var map__13567 = p__13565;var map__13567__$1 = ((cljs.core.seq_QMARK_(map__13567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13567):map__13567);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,cljs.core.constant$keyword$3);return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__13568 = function (x,var_args){
var p__13565 = null;if (arguments.length > 1) {
  p__13565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13568__delegate.call(this,x,p__13565);};
G__13568.cljs$lang$maxFixedArity = 1;
G__13568.cljs$lang$applyTo = (function (arglist__13569){
var x = cljs.core.first(arglist__13569);
var p__13565 = cljs.core.rest(arglist__13569);
return G__13568__delegate(x,p__13565);
});
G__13568.cljs$core$IFn$_invoke$arity$variadic = G__13568__delegate;
return G__13568;
})()
;
atom = function(x,var_args){
var p__13565 = var_args;
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
{return self__.reaction = (((function (){var G__13576 = self__.ratom;if(G__13576)
{var bit__4089__auto__ = (G__13576.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__13576.cljs$core$IDeref$))
{return true;
} else
{if((!G__13576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13576);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13576);
}
})())?(function (){var G__13577 = ((function (this$){
return (function (){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13580 = self__.ratom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13580) : cljs.core.deref.call(null,G__13580));
})(),self__.path);
});})(this$))
;var G__13578 = cljs.core.constant$keyword$17;var G__13579 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__13577,G__13578,this$){
return (function (p1__13571_SHARP_,p2__13570_SHARP_){var G__13581 = self__.ratom;var G__13582 = p2__13570_SHARP_;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13581,G__13582) : cljs.core.reset_BANG_.call(null,G__13581,G__13582));
});})(G__13577,G__13578,this$))
:((function (G__13577,G__13578,this$){
return (function (p1__13573_SHARP_,p2__13572_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__13572_SHARP_);
});})(G__13577,G__13578,this$))
);return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__13577,G__13578,G__13579) : reagent.ratom.make_reaction.call(null,G__13577,G__13578,G__13579));
})():(function (){var G__13583 = ((function (this$){
return (function (){var G__13586 = self__.path;return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__13586) : self__.ratom.call(null,G__13586));
});})(this$))
;var G__13584 = cljs.core.constant$keyword$17;var G__13585 = ((function (G__13583,G__13584,this$){
return (function (p1__13575_SHARP_,p2__13574_SHARP_){var G__13587 = self__.path;var G__13588 = p2__13574_SHARP_;return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__13587,G__13588) : self__.ratom.call(null,G__13587,G__13588));
});})(G__13583,G__13584,this$))
;return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__13583,G__13584,G__13585) : reagent.ratom.make_reaction.call(null,G__13583,G__13584,G__13585));
})());
} else
{return self__.reaction;
}
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_13589 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_13589;
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
reagent.ratom.cursor = (function cursor(src,path){if((function (){var G__13591 = path;if(G__13591)
{var bit__4089__auto__ = (G__13591.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__13591.cljs$core$IDeref$))
{return true;
} else
{if((!G__13591.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13591);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__13591);
}
})())
{return (new reagent.ratom.RCursor(path,src,null));
} else
{return (new reagent.ratom.RCursor(src,path,null));
}
});
reagent.ratom.IDisposable = (function (){var obj13593 = {};return obj13593;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__13597 = x__4062__auto__;return goog.typeOf(G__13597);
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
reagent.ratom.IRunnable = (function (){var obj13599 = {};return obj13599;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.run[(function (){var G__13603 = x__4062__auto__;return goog.typeOf(G__13603);
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
reagent.ratom.IComputedImpl = (function (){var obj13605 = {};return obj13605;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom._update_watching[(function (){var G__13609 = x__4062__auto__;return goog.typeOf(G__13609);
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
{var x__4062__auto__ = (((k == null))?null:k);return (function (){var or__3425__auto__ = (reagent.ratom._handle_change[(function (){var G__13613 = x__4062__auto__;return goog.typeOf(G__13613);
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
var this$__$1 = this;var seq__13614_13639 = cljs.core.seq(derefed);var chunk__13615_13640 = null;var count__13616_13641 = (0);var i__13617_13642 = (0);while(true){
if((i__13617_13642 < count__13616_13641))
{var w_13643 = chunk__13615_13640.cljs$core$IIndexed$_nth$arity$2(null,i__13617_13642);if(cljs.core.contains_QMARK_(self__.watching,w_13643))
{} else
{cljs.core.add_watch(w_13643,this$__$1,reagent.ratom._handle_change);
}
{
var G__13644 = seq__13614_13639;
var G__13645 = chunk__13615_13640;
var G__13646 = count__13616_13641;
var G__13647 = (i__13617_13642 + (1));
seq__13614_13639 = G__13644;
chunk__13615_13640 = G__13645;
count__13616_13641 = G__13646;
i__13617_13642 = G__13647;
continue;
}
} else
{var temp__4126__auto___13648 = cljs.core.seq(seq__13614_13639);if(temp__4126__auto___13648)
{var seq__13614_13649__$1 = temp__4126__auto___13648;if(cljs.core.chunked_seq_QMARK_(seq__13614_13649__$1))
{var c__4195__auto___13650 = cljs.core.chunk_first(seq__13614_13649__$1);{
var G__13651 = cljs.core.chunk_rest(seq__13614_13649__$1);
var G__13652 = c__4195__auto___13650;
var G__13653 = cljs.core.count(c__4195__auto___13650);
var G__13654 = (0);
seq__13614_13639 = G__13651;
chunk__13615_13640 = G__13652;
count__13616_13641 = G__13653;
i__13617_13642 = G__13654;
continue;
}
} else
{var w_13655 = cljs.core.first(seq__13614_13649__$1);if(cljs.core.contains_QMARK_(self__.watching,w_13655))
{} else
{cljs.core.add_watch(w_13655,this$__$1,reagent.ratom._handle_change);
}
{
var G__13656 = cljs.core.next(seq__13614_13649__$1);
var G__13657 = null;
var G__13658 = (0);
var G__13659 = (0);
seq__13614_13639 = G__13656;
chunk__13615_13640 = G__13657;
count__13616_13641 = G__13658;
i__13617_13642 = G__13659;
continue;
}
}
} else
{}
}
break;
}
var seq__13618_13660 = cljs.core.seq(self__.watching);var chunk__13619_13661 = null;var count__13620_13662 = (0);var i__13621_13663 = (0);while(true){
if((i__13621_13663 < count__13620_13662))
{var w_13664 = chunk__13619_13661.cljs$core$IIndexed$_nth$arity$2(null,i__13621_13663);if(cljs.core.contains_QMARK_(derefed,w_13664))
{} else
{cljs.core.remove_watch(w_13664,this$__$1);
}
{
var G__13665 = seq__13618_13660;
var G__13666 = chunk__13619_13661;
var G__13667 = count__13620_13662;
var G__13668 = (i__13621_13663 + (1));
seq__13618_13660 = G__13665;
chunk__13619_13661 = G__13666;
count__13620_13662 = G__13667;
i__13621_13663 = G__13668;
continue;
}
} else
{var temp__4126__auto___13669 = cljs.core.seq(seq__13618_13660);if(temp__4126__auto___13669)
{var seq__13618_13670__$1 = temp__4126__auto___13669;if(cljs.core.chunked_seq_QMARK_(seq__13618_13670__$1))
{var c__4195__auto___13671 = cljs.core.chunk_first(seq__13618_13670__$1);{
var G__13672 = cljs.core.chunk_rest(seq__13618_13670__$1);
var G__13673 = c__4195__auto___13671;
var G__13674 = cljs.core.count(c__4195__auto___13671);
var G__13675 = (0);
seq__13618_13660 = G__13672;
chunk__13619_13661 = G__13673;
count__13620_13662 = G__13674;
i__13621_13663 = G__13675;
continue;
}
} else
{var w_13676 = cljs.core.first(seq__13618_13670__$1);if(cljs.core.contains_QMARK_(derefed,w_13676))
{} else
{cljs.core.remove_watch(w_13676,this$__$1);
}
{
var G__13677 = cljs.core.next(seq__13618_13670__$1);
var G__13678 = null;
var G__13679 = (0);
var G__13680 = (0);
seq__13618_13660 = G__13677;
chunk__13619_13661 = G__13678;
count__13620_13662 = G__13679;
i__13621_13663 = G__13680;
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
var this$__$1 = this;var G__13622 = this$__$1;return goog.getUid(G__13622);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__13623_13681 = cljs.core.seq(self__.watching);var chunk__13624_13682 = null;var count__13625_13683 = (0);var i__13626_13684 = (0);while(true){
if((i__13626_13684 < count__13625_13683))
{var w_13685 = chunk__13624_13682.cljs$core$IIndexed$_nth$arity$2(null,i__13626_13684);cljs.core.remove_watch(w_13685,this$__$1);
{
var G__13686 = seq__13623_13681;
var G__13687 = chunk__13624_13682;
var G__13688 = count__13625_13683;
var G__13689 = (i__13626_13684 + (1));
seq__13623_13681 = G__13686;
chunk__13624_13682 = G__13687;
count__13625_13683 = G__13688;
i__13626_13684 = G__13689;
continue;
}
} else
{var temp__4126__auto___13690 = cljs.core.seq(seq__13623_13681);if(temp__4126__auto___13690)
{var seq__13623_13691__$1 = temp__4126__auto___13690;if(cljs.core.chunked_seq_QMARK_(seq__13623_13691__$1))
{var c__4195__auto___13692 = cljs.core.chunk_first(seq__13623_13691__$1);{
var G__13693 = cljs.core.chunk_rest(seq__13623_13691__$1);
var G__13694 = c__4195__auto___13692;
var G__13695 = cljs.core.count(c__4195__auto___13692);
var G__13696 = (0);
seq__13623_13681 = G__13693;
chunk__13624_13682 = G__13694;
count__13625_13683 = G__13695;
i__13626_13684 = G__13696;
continue;
}
} else
{var w_13697 = cljs.core.first(seq__13623_13691__$1);cljs.core.remove_watch(w_13697,this$__$1);
{
var G__13698 = cljs.core.next(seq__13623_13691__$1);
var G__13699 = null;
var G__13700 = (0);
var G__13701 = (0);
seq__13623_13681 = G__13698;
chunk__13624_13682 = G__13699;
count__13625_13683 = G__13700;
i__13626_13684 = G__13701;
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
var G__13627_13702 = oldval;var G__13628_13703 = newval;(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__13627_13702,G__13628_13703) : self__.on_set.call(null,G__13627_13702,G__13628_13703));
} else
{}
cljs.core._notify_watches(a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13629 = self__.state;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13629) : f__$1.call(null,G__13629));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13630 = self__.state;var G__13631 = x;return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__13630,G__13631) : f__$1.call(null,G__13630,G__13631));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13632 = self__.state;var G__13633 = x;var G__13634 = y;return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__13632,G__13633,G__13634) : f__$1.call(null,G__13632,G__13633,G__13634));
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
return (function (_,key,f__$1){var G__13635_13704 = key;var G__13636_13705 = this$__$1;var G__13637_13706 = oldval;var G__13638_13707 = newval;(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__13635_13704,G__13636_13705,G__13637_13706,G__13638_13707) : f__$1.call(null,G__13635_13704,G__13636_13705,G__13637_13706,G__13638_13707));
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
{var oldstate_13708 = self__.state;self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
if((oldstate_13708 === self__.state))
{} else
{cljs.core._notify_watches(this$__$1,oldstate_13708,self__.state);
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
var make_reaction__delegate = function (f,p__13709){var map__13711 = p__13709;var map__13711__$1 = ((cljs.core.seq_QMARK_(map__13711))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13711):map__13711);var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13711__$1,cljs.core.constant$keyword$18);var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13711__$1,cljs.core.constant$keyword$19);var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13711__$1,cljs.core.constant$keyword$17);var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13711__$1,cljs.core.constant$keyword$20);var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));if((derefed == null))
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
var p__13709 = null;if (arguments.length > 1) {
  p__13709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__13709);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__13712){
var f = cljs.core.first(arglist__13712);
var p__13709 = cljs.core.rest(arglist__13712);
return make_reaction__delegate(f,p__13709);
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
return (function (_,key,f){var G__13713_13724 = key;var G__13714_13725 = this$__$1;var G__13715_13726 = oldval;var G__13716_13727 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13713_13724,G__13714_13725,G__13715_13726,G__13716_13727) : f.call(null,G__13713_13724,G__13714_13725,G__13715_13726,G__13716_13727));
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
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13717 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13717) : f.call(null,G__13717));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13718 = self__.state;var G__13719 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13718,G__13719) : f.call(null,G__13718,G__13719));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__13720 = self__.state;var G__13721 = x;var G__13722 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13720,G__13721,G__13722) : f.call(null,G__13720,G__13721,G__13722));
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
var G__13723_13728 = newval;(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__13723_13728) : self__.callback.call(null,G__13723_13728));
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
