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
{reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_7733 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_7733;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});
reagent.ratom.IReactiveAtom = (function (){var obj7735 = {};return obj7735;
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
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write.call(null,writer__4003__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
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
var G__7739__delegate = function (x,p__7736){var map__7738 = p__7736;var map__7738__$1 = ((cljs.core.seq_QMARK_.call(null,map__7738))?cljs.core.apply.call(null,cljs.core.hash_map,map__7738):map__7738);var validator = cljs.core.get.call(null,map__7738__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__7738__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__7739 = function (x,var_args){
var p__7736 = null;if (arguments.length > 1) {
  p__7736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__7739__delegate.call(this,x,p__7736);};
G__7739.cljs$lang$maxFixedArity = 1;
G__7739.cljs$lang$applyTo = (function (arglist__7740){
var x = cljs.core.first(arglist__7740);
var p__7736 = cljs.core.rest(arglist__7740);
return G__7739__delegate(x,p__7736);
});
G__7739.cljs$core$IFn$_invoke$arity$variadic = G__7739__delegate;
return G__7739;
})()
;
atom = function(x,var_args){
var p__7736 = var_args;
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
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write.call(null,writer__4003__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype._reaction = (function (){var self__ = this;
var this$ = this;if((self__.reaction == null))
{return self__.reaction = (((function (){var G__7747 = self__.ratom;if(G__7747)
{var bit__4089__auto__ = (G__7747.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__7747.cljs$core$IDeref$))
{return true;
} else
{if((!G__7747.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7747);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__7742_SHARP_,p2__7741_SHARP_){return cljs.core.reset_BANG_.call(null,self__.ratom,p2__7741_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__7744_SHARP_,p2__7743_SHARP_){return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__7743_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__7746_SHARP_,p2__7745_SHARP_){return self__.ratom.call(null,self__.path,p2__7745_SHARP_);
});})(this$))
));
} else
{return self__.reaction;
}
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_7748 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_7748;
}});
reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,("#<Cursor: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)+" "));
cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._deref.call(null,this$__$1._reaction());
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){return (new reagent.ratom.RCursor(ratom,path,reaction));
});
reagent.ratom.cursor = (function cursor(src,path){if((function (){var G__7753 = path;if(G__7753)
{var bit__4089__auto__ = (G__7753.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4089__auto__) || (G__7753.cljs$core$IDeref$))
{return true;
} else
{if((!G__7753.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7753);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7753);
}
})())
{if(typeof console !== 'undefined')
{console.warn(("Warning: Calling cursor with an atom as the second arg is deprecated, in (cursor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path))+")"));
} else
{}
if((function (){var G__7754 = path;if(G__7754)
{var bit__4089__auto__ = null;if(cljs.core.truth_((function (){var or__3425__auto__ = bit__4089__auto__;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return G__7754.reagent$ratom$IReactiveAtom$;
}
})()))
{return true;
} else
{if((!G__7754.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7754);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7754);
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("src must be a reactive atom, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null)))))));
}
return (new reagent.ratom.RCursor(path,src,null));
} else
{if((function (){var or__3425__auto__ = (function (){var G__7756 = src;if(G__7756)
{var bit__4089__auto__ = null;if(cljs.core.truth_((function (){var or__3425__auto__ = bit__4089__auto__;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return G__7756.reagent$ratom$IReactiveAtom$;
}
})()))
{return true;
} else
{if((!G__7756.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7756);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__7756);
}
})();if(or__3425__auto__)
{return or__3425__auto__;
} else
{return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("src must be a reactive atom or a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null))))))))));
}
return (new reagent.ratom.RCursor(src,path,null));
}
});
reagent.ratom.IDisposable = (function (){var obj7758 = {};return obj7758;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj7760 = {};return obj7760;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom.run[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom.run["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj7762 = {};return obj7762;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3413__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
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
{var x__4062__auto__ = (((k == null))?null:k);return (function (){var or__3425__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
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
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write.call(null,writer__4003__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3413__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
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
var this$__$1 = this;var seq__7763_7775 = cljs.core.seq.call(null,derefed);var chunk__7764_7776 = null;var count__7765_7777 = (0);var i__7766_7778 = (0);while(true){
if((i__7766_7778 < count__7765_7777))
{var w_7779 = cljs.core._nth.call(null,chunk__7764_7776,i__7766_7778);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_7779))
{} else
{cljs.core.add_watch.call(null,w_7779,this$__$1,reagent.ratom._handle_change);
}
{
var G__7780 = seq__7763_7775;
var G__7781 = chunk__7764_7776;
var G__7782 = count__7765_7777;
var G__7783 = (i__7766_7778 + (1));
seq__7763_7775 = G__7780;
chunk__7764_7776 = G__7781;
count__7765_7777 = G__7782;
i__7766_7778 = G__7783;
continue;
}
} else
{var temp__4126__auto___7784 = cljs.core.seq.call(null,seq__7763_7775);if(temp__4126__auto___7784)
{var seq__7763_7785__$1 = temp__4126__auto___7784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7763_7785__$1))
{var c__4195__auto___7786 = cljs.core.chunk_first.call(null,seq__7763_7785__$1);{
var G__7787 = cljs.core.chunk_rest.call(null,seq__7763_7785__$1);
var G__7788 = c__4195__auto___7786;
var G__7789 = cljs.core.count.call(null,c__4195__auto___7786);
var G__7790 = (0);
seq__7763_7775 = G__7787;
chunk__7764_7776 = G__7788;
count__7765_7777 = G__7789;
i__7766_7778 = G__7790;
continue;
}
} else
{var w_7791 = cljs.core.first.call(null,seq__7763_7785__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_7791))
{} else
{cljs.core.add_watch.call(null,w_7791,this$__$1,reagent.ratom._handle_change);
}
{
var G__7792 = cljs.core.next.call(null,seq__7763_7785__$1);
var G__7793 = null;
var G__7794 = (0);
var G__7795 = (0);
seq__7763_7775 = G__7792;
chunk__7764_7776 = G__7793;
count__7765_7777 = G__7794;
i__7766_7778 = G__7795;
continue;
}
}
} else
{}
}
break;
}
var seq__7767_7796 = cljs.core.seq.call(null,self__.watching);var chunk__7768_7797 = null;var count__7769_7798 = (0);var i__7770_7799 = (0);while(true){
if((i__7770_7799 < count__7769_7798))
{var w_7800 = cljs.core._nth.call(null,chunk__7768_7797,i__7770_7799);if(cljs.core.contains_QMARK_.call(null,derefed,w_7800))
{} else
{cljs.core.remove_watch.call(null,w_7800,this$__$1);
}
{
var G__7801 = seq__7767_7796;
var G__7802 = chunk__7768_7797;
var G__7803 = count__7769_7798;
var G__7804 = (i__7770_7799 + (1));
seq__7767_7796 = G__7801;
chunk__7768_7797 = G__7802;
count__7769_7798 = G__7803;
i__7770_7799 = G__7804;
continue;
}
} else
{var temp__4126__auto___7805 = cljs.core.seq.call(null,seq__7767_7796);if(temp__4126__auto___7805)
{var seq__7767_7806__$1 = temp__4126__auto___7805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7767_7806__$1))
{var c__4195__auto___7807 = cljs.core.chunk_first.call(null,seq__7767_7806__$1);{
var G__7808 = cljs.core.chunk_rest.call(null,seq__7767_7806__$1);
var G__7809 = c__4195__auto___7807;
var G__7810 = cljs.core.count.call(null,c__4195__auto___7807);
var G__7811 = (0);
seq__7767_7796 = G__7808;
chunk__7768_7797 = G__7809;
count__7769_7798 = G__7810;
i__7770_7799 = G__7811;
continue;
}
} else
{var w_7812 = cljs.core.first.call(null,seq__7767_7806__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_7812))
{} else
{cljs.core.remove_watch.call(null,w_7812,this$__$1);
}
{
var G__7813 = cljs.core.next.call(null,seq__7767_7806__$1);
var G__7814 = null;
var G__7815 = (0);
var G__7816 = (0);
seq__7767_7796 = G__7813;
chunk__7768_7797 = G__7814;
count__7769_7798 = G__7815;
i__7770_7799 = G__7816;
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
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__7771_7817 = cljs.core.seq.call(null,self__.watching);var chunk__7772_7818 = null;var count__7773_7819 = (0);var i__7774_7820 = (0);while(true){
if((i__7774_7820 < count__7773_7819))
{var w_7821 = cljs.core._nth.call(null,chunk__7772_7818,i__7774_7820);cljs.core.remove_watch.call(null,w_7821,this$__$1);
{
var G__7822 = seq__7771_7817;
var G__7823 = chunk__7772_7818;
var G__7824 = count__7773_7819;
var G__7825 = (i__7774_7820 + (1));
seq__7771_7817 = G__7822;
chunk__7772_7818 = G__7823;
count__7773_7819 = G__7824;
i__7774_7820 = G__7825;
continue;
}
} else
{var temp__4126__auto___7826 = cljs.core.seq.call(null,seq__7771_7817);if(temp__4126__auto___7826)
{var seq__7771_7827__$1 = temp__4126__auto___7826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771_7827__$1))
{var c__4195__auto___7828 = cljs.core.chunk_first.call(null,seq__7771_7827__$1);{
var G__7829 = cljs.core.chunk_rest.call(null,seq__7771_7827__$1);
var G__7830 = c__4195__auto___7828;
var G__7831 = cljs.core.count.call(null,c__4195__auto___7828);
var G__7832 = (0);
seq__7771_7817 = G__7829;
chunk__7772_7818 = G__7830;
count__7773_7819 = G__7831;
i__7774_7820 = G__7832;
continue;
}
} else
{var w_7833 = cljs.core.first.call(null,seq__7771_7827__$1);cljs.core.remove_watch.call(null,w_7833,this$__$1);
{
var G__7834 = cljs.core.next.call(null,seq__7771_7827__$1);
var G__7835 = null;
var G__7836 = (0);
var G__7837 = (0);
seq__7771_7817 = G__7834;
chunk__7772_7818 = G__7835;
count__7773_7819 = G__7836;
i__7774_7820 = G__7837;
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
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){var self__ = this;
var a__$1 = this;var oldval = self__.state;self__.state = newval;
if(cljs.core.truth_(self__.on_set))
{self__.dirty_QMARK_ = true;
self__.on_set.call(null,oldval,newval);
} else
{}
cljs.core._notify_watches.call(null,a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){f__$1.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run)))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3425__auto__ = self__.auto_run;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})()))
{if(cljs.core.truth_(self__.dirty_QMARK_))
{var oldstate_7838 = self__.state;self__.state = self__.f.call(null);
if((oldstate_7838 === self__.state))
{} else
{cljs.core._notify_watches.call(null,this$__$1,oldstate_7838,self__.state);
}
} else
{}
return self__.state;
} else
{reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
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
var make_reaction__delegate = function (f,p__7839){var map__7841 = p__7839;var map__7841__$1 = ((cljs.core.seq_QMARK_.call(null,map__7841))?cljs.core.apply.call(null,cljs.core.hash_map,map__7841):map__7841);var derefed = cljs.core.get.call(null,map__7841__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__7841__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__7841__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__7841__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__7839 = null;if (arguments.length > 1) {
  p__7839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__7839);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__7842){
var f = cljs.core.first(arglist__7842);
var p__7839 = cljs.core.rest(arglist__7842);
return make_reaction__delegate(f,p__7839);
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
reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write.call(null,writer__4003__auto__,"reagent.ratom/Wrapper");
});
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;cljs.core._write.call(null,writer,"#<wrap: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){var self__ = this;
var this$__$1 = this;var oldval = self__.state;self__.changed = true;
self__.state = newval;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}
self__.callback.call(null,newval);
return newval;
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = self__.changed;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else
{return and__3413__auto__;
}
})()))
{if(typeof console !== 'undefined')
{console.warn(("Warning: derefing stale wrap: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))));
} else
{}
} else
{}

return self__.state;
});
reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});
reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map