// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
if(typeof reagent.impl.batching.mount_count !== 'undefined')
{} else
{reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function next_mount_count(){return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
});
reagent.impl.batching.fake_raf = (function fake_raf(f){var G__13471 = f;var G__13472 = (16);return setTimeout(G__13471,G__13472);
});
reagent.impl.batching.next_tick = ((cljs.core.not(reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;var or__3425__auto__ = (w["requestAnimationFrame"]);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (w["webkitRequestAnimationFrame"]);if(cljs.core.truth_(or__3425__auto____$1))
{return or__3425__auto____$1;
} else
{var or__3425__auto____$2 = (w["mozRequestAnimationFrame"]);if(cljs.core.truth_(or__3425__auto____$2))
{return or__3425__auto____$2;
} else
{var or__3425__auto____$3 = (w["msRequestAnimationFrame"]);if(cljs.core.truth_(or__3425__auto____$3))
{return or__3425__auto____$3;
} else
{return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_mount_order = (function compare_mount_order(c1,c2){return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
reagent.impl.batching.run_queue = (function run_queue(a){a.sort(reagent.impl.batching.compare_mount_order);
var n__4295__auto__ = a.length;var i = (0);while(true){
if((i < n__4295__auto__))
{var c_13473 = (a[i]);if(cljs.core.truth_((c_13473["cljsIsDirty"])))
{(c_13473["forceUpdate"])();
} else
{}
{
var G__13474 = (i + (1));
i = G__13474;
continue;
}
} else
{return null;
}
break;
}
});
reagent.impl.batching.run_funs = (function run_funs(a){var n__4295__auto__ = a.length;var i = (0);while(true){
if((i < n__4295__auto__))
{(a[i]).call(null);
{
var G__13475 = (i + (1));
i = G__13475;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_,after_render){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
this.after_render = after_render;
})
reagent.impl.batching.RenderQueue.cljs$lang$type = true;
reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";
reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"reagent.impl.batching/RenderQueue");
});
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){var self__ = this;
var this$ = this;self__.queue.push(c);
return this$.schedule();
});
reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){var self__ = this;
var _ = this;return self__.after_render.push(f);
});
reagent.impl.batching.RenderQueue.prototype.schedule = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_(self__.scheduled_QMARK_))
{return null;
} else
{self__.scheduled_QMARK_ = true;
var G__13476 = ((function (this$){
return (function (){return this$.run_queue();
});})(this$))
;return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__13476) : reagent.impl.batching.next_tick.call(null,G__13476));
}
});
reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){var self__ = this;
var _ = this;var q = self__.queue;var aq = self__.after_render;self__.queue = [];
self__.after_render = [];
self__.scheduled_QMARK_ = false;
reagent.impl.batching.run_queue(q);
return reagent.impl.batching.run_funs(aq);
});
reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_,after_render){return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_,after_render));
});
reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false,[]));
reagent.impl.batching.flush = (function flush(){return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function queue_render(c){(c["cljsIsDirty"] = true);
return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(c){return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.do_after_flush = (function do_after_flush(f){return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.do_later = (function do_later(f){reagent.impl.batching.do_after_flush(f);
return reagent.impl.batching.render_queue.schedule();
});
reagent.impl.batching.is_reagent_component = (function is_reagent_component(c){var G__13478 = c;var G__13478__$1 = (((G__13478 == null))?null:(G__13478["props"]));var G__13478__$2 = (((G__13478__$1 == null))?null:(G__13478__$1["argv"]));return G__13478__$2;
});
reagent.impl.batching.run_reactively = (function run_reactively(c,run){reagent.impl.batching.mark_rendered(c);
var rat = (c["cljsRatom"]);if((rat == null))
{var res = reagent.ratom.capture_derefed(run,c);var derefed = reagent.ratom.captured(c);if(!((derefed == null)))
{(c["cljsRatom"] = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(run,cljs.core.array_seq([cljs.core.constant$keyword$20,((function (res,derefed,rat){
return (function (){return reagent.impl.batching.queue_render(c);
});})(res,derefed,rat))
,cljs.core.constant$keyword$18,derefed], 0)));
} else
{}
return res;
} else
{return reagent.ratom.run(rat);
}
});
reagent.impl.batching.dispose = (function dispose(c){var G__13480_13481 = (c["cljsRatom"]);var G__13480_13482__$1 = (((G__13480_13481 == null))?null:reagent.ratom.dispose_BANG_(G__13480_13481));return reagent.impl.batching.mark_rendered(c);
});
