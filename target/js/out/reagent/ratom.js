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
{reagent.ratom._running = (function (){var G__14673 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14673) : cljs.core.atom.call(null,G__14673));
})();
}
reagent.ratom.running = (function running(){var G__14675 = reagent.ratom._running;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14675) : cljs.core.deref.call(null,G__14675));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_14677 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14677;
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
reagent.ratom.IReactiveAtom = (function (){var obj14679 = {};return obj14679;
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
var this$__$1 = this;var G__14680 = this$__$1;return goog.getUid(G__14680);
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
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14681 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14681) : f.call(null,G__14681));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14682 = self__.state;var G__14683 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14682,G__14683) : f.call(null,G__14682,G__14683));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14684 = self__.state;var G__14685 = x;var G__14686 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14684,G__14685,G__14686) : f.call(null,G__14684,G__14685,G__14686));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__14687_14691 = key;var G__14688_14692 = this$__$1;var G__14689_14693 = oldval;var G__14690_14694 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14687_14691,G__14688_14692,G__14689_14693,G__14690_14694) : f.call(null,G__14687_14691,G__14688_14692,G__14689_14693,G__14690_14694));
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
var G__14698__delegate = function (x,p__14695){var map__14697 = p__14695;var map__14697__$1 = ((cljs.core.seq_QMARK_(map__14697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14697):map__14697);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,cljs.core.constant$keyword$3);return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__14698 = function (x,var_args){
var p__14695 = null;if (arguments.length > 1) {
  p__14695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14698__delegate.call(this,x,p__14695);};
G__14698.cljs$lang$maxFixedArity = 1;
G__14698.cljs$lang$applyTo = (function (arglist__14699){
var x = cljs.core.first(arglist__14699);
var p__14695 = cljs.core.rest(arglist__14699);
return G__14698__delegate(x,p__14695);
});
G__14698.cljs$core$IFn$_invoke$arity$variadic = G__14698__delegate;
return G__14698;
})()
;
atom = function(x,var_args){
var p__14695 = var_args;
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
{return self__.reaction = (((function (){var G__14706 = self__.ratom;if(G__14706)
{var bit__4089__auto__ = (G__14706.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__14706.cljs$core$IDeref$))
{return true;
} else
{if((!G__14706.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14706);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14706);
}
})())?(function (){var G__14707 = ((function (this$){
return (function (){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__14710 = self__.ratom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14710) : cljs.core.deref.call(null,G__14710));
})(),self__.path);
});})(this$))
;var G__14708 = cljs.core.constant$keyword$17;var G__14709 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__14707,G__14708,this$){
return (function (p1__14701_SHARP_,p2__14700_SHARP_){var G__14711 = self__.ratom;var G__14712 = p2__14700_SHARP_;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14711,G__14712) : cljs.core.reset_BANG_.call(null,G__14711,G__14712));
});})(G__14707,G__14708,this$))
:((function (G__14707,G__14708,this$){
return (function (p1__14703_SHARP_,p2__14702_SHARP_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__14702_SHARP_);
});})(G__14707,G__14708,this$))
);return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14707,G__14708,G__14709) : reagent.ratom.make_reaction.call(null,G__14707,G__14708,G__14709));
})():(function (){var G__14713 = ((function (this$){
return (function (){var G__14716 = self__.path;return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__14716) : self__.ratom.call(null,G__14716));
});})(this$))
;var G__14714 = cljs.core.constant$keyword$17;var G__14715 = ((function (G__14713,G__14714,this$){
return (function (p1__14705_SHARP_,p2__14704_SHARP_){var G__14717 = self__.path;var G__14718 = p2__14704_SHARP_;return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__14717,G__14718) : self__.ratom.call(null,G__14717,G__14718));
});})(G__14713,G__14714,this$))
;return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14713,G__14714,G__14715) : reagent.ratom.make_reaction.call(null,G__14713,G__14714,G__14715));
})());
} else
{return self__.reaction;
}
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_14719 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14719;
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
reagent.ratom.cursor = (function cursor(src,path){if((function (){var G__14721 = path;if(G__14721)
{var bit__4089__auto__ = (G__14721.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__14721.cljs$core$IDeref$))
{return true;
} else
{if((!G__14721.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14721);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__14721);
}
})())
{return (new reagent.ratom.RCursor(path,src,null));
} else
{return (new reagent.ratom.RCursor(src,path,null));
}
});
reagent.ratom.IDisposable = (function (){var obj14723 = {};return obj14723;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__14727 = x__4062__auto__;return goog.typeOf(G__14727);
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
reagent.ratom.IRunnable = (function (){var obj14729 = {};return obj14729;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.run[(function (){var G__14733 = x__4062__auto__;return goog.typeOf(G__14733);
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
reagent.ratom.IComputedImpl = (function (){var obj14735 = {};return obj14735;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom._update_watching[(function (){var G__14739 = x__4062__auto__;return goog.typeOf(G__14739);
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
{var x__4062__auto__ = (((k == null))?null:k);return (function (){var or__3425__auto__ = (reagent.ratom._handle_change[(function (){var G__14743 = x__4062__auto__;return goog.typeOf(G__14743);
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
var this$__$1 = this;var seq__14744_14769 = cljs.core.seq(derefed);var chunk__14745_14770 = null;var count__14746_14771 = (0);var i__14747_14772 = (0);while(true){
if((i__14747_14772 < count__14746_14771))
{var w_14773 = chunk__14745_14770.cljs$core$IIndexed$_nth$arity$2(null,i__14747_14772);if(cljs.core.contains_QMARK_(self__.watching,w_14773))
{} else
{cljs.core.add_watch(w_14773,this$__$1,reagent.ratom._handle_change);
}
{
var G__14774 = seq__14744_14769;
var G__14775 = chunk__14745_14770;
var G__14776 = count__14746_14771;
var G__14777 = (i__14747_14772 + (1));
seq__14744_14769 = G__14774;
chunk__14745_14770 = G__14775;
count__14746_14771 = G__14776;
i__14747_14772 = G__14777;
continue;
}
} else
{var temp__4126__auto___14778 = cljs.core.seq(seq__14744_14769);if(temp__4126__auto___14778)
{var seq__14744_14779__$1 = temp__4126__auto___14778;if(cljs.core.chunked_seq_QMARK_(seq__14744_14779__$1))
{var c__4195__auto___14780 = cljs.core.chunk_first(seq__14744_14779__$1);{
var G__14781 = cljs.core.chunk_rest(seq__14744_14779__$1);
var G__14782 = c__4195__auto___14780;
var G__14783 = cljs.core.count(c__4195__auto___14780);
var G__14784 = (0);
seq__14744_14769 = G__14781;
chunk__14745_14770 = G__14782;
count__14746_14771 = G__14783;
i__14747_14772 = G__14784;
continue;
}
} else
{var w_14785 = cljs.core.first(seq__14744_14779__$1);if(cljs.core.contains_QMARK_(self__.watching,w_14785))
{} else
{cljs.core.add_watch(w_14785,this$__$1,reagent.ratom._handle_change);
}
{
var G__14786 = cljs.core.next(seq__14744_14779__$1);
var G__14787 = null;
var G__14788 = (0);
var G__14789 = (0);
seq__14744_14769 = G__14786;
chunk__14745_14770 = G__14787;
count__14746_14771 = G__14788;
i__14747_14772 = G__14789;
continue;
}
}
} else
{}
}
break;
}
var seq__14748_14790 = cljs.core.seq(self__.watching);var chunk__14749_14791 = null;var count__14750_14792 = (0);var i__14751_14793 = (0);while(true){
if((i__14751_14793 < count__14750_14792))
{var w_14794 = chunk__14749_14791.cljs$core$IIndexed$_nth$arity$2(null,i__14751_14793);if(cljs.core.contains_QMARK_(derefed,w_14794))
{} else
{cljs.core.remove_watch(w_14794,this$__$1);
}
{
var G__14795 = seq__14748_14790;
var G__14796 = chunk__14749_14791;
var G__14797 = count__14750_14792;
var G__14798 = (i__14751_14793 + (1));
seq__14748_14790 = G__14795;
chunk__14749_14791 = G__14796;
count__14750_14792 = G__14797;
i__14751_14793 = G__14798;
continue;
}
} else
{var temp__4126__auto___14799 = cljs.core.seq(seq__14748_14790);if(temp__4126__auto___14799)
{var seq__14748_14800__$1 = temp__4126__auto___14799;if(cljs.core.chunked_seq_QMARK_(seq__14748_14800__$1))
{var c__4195__auto___14801 = cljs.core.chunk_first(seq__14748_14800__$1);{
var G__14802 = cljs.core.chunk_rest(seq__14748_14800__$1);
var G__14803 = c__4195__auto___14801;
var G__14804 = cljs.core.count(c__4195__auto___14801);
var G__14805 = (0);
seq__14748_14790 = G__14802;
chunk__14749_14791 = G__14803;
count__14750_14792 = G__14804;
i__14751_14793 = G__14805;
continue;
}
} else
{var w_14806 = cljs.core.first(seq__14748_14800__$1);if(cljs.core.contains_QMARK_(derefed,w_14806))
{} else
{cljs.core.remove_watch(w_14806,this$__$1);
}
{
var G__14807 = cljs.core.next(seq__14748_14800__$1);
var G__14808 = null;
var G__14809 = (0);
var G__14810 = (0);
seq__14748_14790 = G__14807;
chunk__14749_14791 = G__14808;
count__14750_14792 = G__14809;
i__14751_14793 = G__14810;
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
var this$__$1 = this;var G__14752 = this$__$1;return goog.getUid(G__14752);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__14753_14811 = cljs.core.seq(self__.watching);var chunk__14754_14812 = null;var count__14755_14813 = (0);var i__14756_14814 = (0);while(true){
if((i__14756_14814 < count__14755_14813))
{var w_14815 = chunk__14754_14812.cljs$core$IIndexed$_nth$arity$2(null,i__14756_14814);cljs.core.remove_watch(w_14815,this$__$1);
{
var G__14816 = seq__14753_14811;
var G__14817 = chunk__14754_14812;
var G__14818 = count__14755_14813;
var G__14819 = (i__14756_14814 + (1));
seq__14753_14811 = G__14816;
chunk__14754_14812 = G__14817;
count__14755_14813 = G__14818;
i__14756_14814 = G__14819;
continue;
}
} else
{var temp__4126__auto___14820 = cljs.core.seq(seq__14753_14811);if(temp__4126__auto___14820)
{var seq__14753_14821__$1 = temp__4126__auto___14820;if(cljs.core.chunked_seq_QMARK_(seq__14753_14821__$1))
{var c__4195__auto___14822 = cljs.core.chunk_first(seq__14753_14821__$1);{
var G__14823 = cljs.core.chunk_rest(seq__14753_14821__$1);
var G__14824 = c__4195__auto___14822;
var G__14825 = cljs.core.count(c__4195__auto___14822);
var G__14826 = (0);
seq__14753_14811 = G__14823;
chunk__14754_14812 = G__14824;
count__14755_14813 = G__14825;
i__14756_14814 = G__14826;
continue;
}
} else
{var w_14827 = cljs.core.first(seq__14753_14821__$1);cljs.core.remove_watch(w_14827,this$__$1);
{
var G__14828 = cljs.core.next(seq__14753_14821__$1);
var G__14829 = null;
var G__14830 = (0);
var G__14831 = (0);
seq__14753_14811 = G__14828;
chunk__14754_14812 = G__14829;
count__14755_14813 = G__14830;
i__14756_14814 = G__14831;
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
var G__14757_14832 = oldval;var G__14758_14833 = newval;(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__14757_14832,G__14758_14833) : self__.on_set.call(null,G__14757_14832,G__14758_14833));
} else
{}
cljs.core._notify_watches(a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14759 = self__.state;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14759) : f__$1.call(null,G__14759));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14760 = self__.state;var G__14761 = x;return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__14760,G__14761) : f__$1.call(null,G__14760,G__14761));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14762 = self__.state;var G__14763 = x;var G__14764 = y;return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__14762,G__14763,G__14764) : f__$1.call(null,G__14762,G__14763,G__14764));
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
return (function (_,key,f__$1){var G__14765_14834 = key;var G__14766_14835 = this$__$1;var G__14767_14836 = oldval;var G__14768_14837 = newval;(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__14765_14834,G__14766_14835,G__14767_14836,G__14768_14837) : f__$1.call(null,G__14765_14834,G__14766_14835,G__14767_14836,G__14768_14837));
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
{var oldstate_14838 = self__.state;self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
if((oldstate_14838 === self__.state))
{} else
{cljs.core._notify_watches(this$__$1,oldstate_14838,self__.state);
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
var make_reaction__delegate = function (f,p__14839){var map__14841 = p__14839;var map__14841__$1 = ((cljs.core.seq_QMARK_(map__14841))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14841):map__14841);var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.constant$keyword$18);var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.constant$keyword$19);var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.constant$keyword$17);var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.constant$keyword$20);var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));if((derefed == null))
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
var p__14839 = null;if (arguments.length > 1) {
  p__14839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__14839);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__14842){
var f = cljs.core.first(arglist__14842);
var p__14839 = cljs.core.rest(arglist__14842);
return make_reaction__delegate(f,p__14839);
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
return (function (_,key,f){var G__14843_14854 = key;var G__14844_14855 = this$__$1;var G__14845_14856 = oldval;var G__14846_14857 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14843_14854,G__14844_14855,G__14845_14856,G__14846_14857) : f.call(null,G__14843_14854,G__14844_14855,G__14845_14856,G__14846_14857));
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
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14847 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14847) : f.call(null,G__14847));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14848 = self__.state;var G__14849 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14848,G__14849) : f.call(null,G__14848,G__14849));
})());
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__14850 = self__.state;var G__14851 = x;var G__14852 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14850,G__14851,G__14852) : f.call(null,G__14850,G__14851,G__14852));
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
var G__14853_14858 = newval;(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__14853_14858) : self__.callback.call(null,G__14853_14858));
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
