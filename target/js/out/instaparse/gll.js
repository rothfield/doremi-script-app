// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.print');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
goog.require('instaparse.failure');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.auto_flatten_seq');
instaparse.gll.ISegment = (function (){var obj13398 = {};return obj13398;
})();
instaparse.gll.subsegment = (function subsegment(this$,start_index,end_index_minus_one){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.instaparse$gll$ISegment$subsegment$arity$3;
} else
{return and__3413__auto__;
}
})())
{return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.subsegment[(function (){var G__13402 = x__4062__auto__;return goog.typeOf(G__13402);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.gll.subsegment["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("ISegment.subsegment",this$);
}
}
})().call(null,this$,start_index,end_index_minus_one);
}
});
instaparse.gll.toString = (function toString(this$){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.instaparse$gll$ISegment$toString$arity$1;
} else
{return and__3413__auto__;
}
})())
{return this$.instaparse$gll$ISegment$toString$arity$1(this$);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.toString[(function (){var G__13406 = x__4062__auto__;return goog.typeOf(G__13406);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.gll.toString["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("ISegment.toString",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
instaparse.gll.Segment = (function (text,offset,count){
this.text = text;
this.offset = offset;
this.count = count;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
instaparse.gll.Segment.cljs$lang$type = true;
instaparse.gll.Segment.cljs$lang$ctorStr = "instaparse.gll/Segment";
instaparse.gll.Segment.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"instaparse.gll/Segment");
});
instaparse.gll.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.count;
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$ = true;
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$subsegment$arity$3 = (function (this$,start,end){var self__ = this;
var this$__$1 = this;return (new instaparse.gll.Segment(self__.text,(self__.offset + start),(end - start)));
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$toString$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(self__.text,self__.offset,(self__.offset + self__.count));
});
instaparse.gll.__GT_Segment = (function __GT_Segment(text,offset,count){return (new instaparse.gll.Segment(text,offset,count));
});
instaparse.gll.get_parser = (function get_parser(grammar,p){return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});
instaparse.gll._parse = (function _parse(parser,index,tramp){var G__13450 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__13450) {
case "neg":
var G__13451 = parser;var G__13452 = index;var G__13453 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13451,G__13452,G__13453) : instaparse.gll.negative_lookahead_parse.call(null,G__13451,G__13452,G__13453));

break;
case "cat":
var G__13454 = parser;var G__13455 = index;var G__13456 = tramp;return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(G__13454,G__13455,G__13456) : instaparse.gll.cat_parse.call(null,G__13454,G__13455,G__13456));

break;
case "ord":
var G__13457 = parser;var G__13458 = index;var G__13459 = tramp;return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(G__13457,G__13458,G__13459) : instaparse.gll.ordered_alt_parse.call(null,G__13457,G__13458,G__13459));

break;
case "alt":
var G__13460 = parser;var G__13461 = index;var G__13462 = tramp;return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(G__13460,G__13461,G__13462) : instaparse.gll.alt_parse.call(null,G__13460,G__13461,G__13462));

break;
case "look":
var G__13463 = parser;var G__13464 = index;var G__13465 = tramp;return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13463,G__13464,G__13465) : instaparse.gll.lookahead_parse.call(null,G__13463,G__13464,G__13465));

break;
case "nt":
var G__13466 = parser;var G__13467 = index;var G__13468 = tramp;return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(G__13466,G__13467,G__13468) : instaparse.gll.non_terminal_parse.call(null,G__13466,G__13467,G__13468));

break;
case "rep":
var G__13469 = parser;var G__13470 = index;var G__13471 = tramp;return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(G__13469,G__13470,G__13471) : instaparse.gll.rep_parse.call(null,G__13469,G__13470,G__13471));

break;
case "star":
var G__13472 = parser;var G__13473 = index;var G__13474 = tramp;return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(G__13472,G__13473,G__13474) : instaparse.gll.star_parse.call(null,G__13472,G__13473,G__13474));

break;
case "string":
var G__13475 = parser;var G__13476 = index;var G__13477 = tramp;return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(G__13475,G__13476,G__13477) : instaparse.gll.string_parse.call(null,G__13475,G__13476,G__13477));

break;
case "regexp":
var G__13478 = parser;var G__13479 = index;var G__13480 = tramp;return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(G__13478,G__13479,G__13480) : instaparse.gll.regexp_parse.call(null,G__13478,G__13479,G__13480));

break;
case "plus":
var G__13481 = parser;var G__13482 = index;var G__13483 = tramp;return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(G__13481,G__13482,G__13483) : instaparse.gll.plus_parse.call(null,G__13481,G__13482,G__13483));

break;
case "epsilon":
var G__13484 = parser;var G__13485 = index;var G__13486 = tramp;return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(G__13484,G__13485,G__13486) : instaparse.gll.epsilon_parse.call(null,G__13484,G__13485,G__13486));

break;
case "string-ci":
var G__13487 = parser;var G__13488 = index;var G__13489 = tramp;return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(G__13487,G__13488,G__13489) : instaparse.gll.string_case_insensitive_parse.call(null,G__13487,G__13488,G__13489));

break;
case "opt":
var G__13490 = parser;var G__13491 = index;var G__13492 = tramp;return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(G__13490,G__13491,G__13492) : instaparse.gll.opt_parse.call(null,G__13490,G__13491,G__13492));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.gll._full_parse = (function _full_parse(parser,index,tramp){var G__13537 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__13537) {
case "neg":
var G__13538 = parser;var G__13539 = index;var G__13540 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13538,G__13539,G__13540) : instaparse.gll.negative_lookahead_parse.call(null,G__13538,G__13539,G__13540));

break;
case "cat":
var G__13541 = parser;var G__13542 = index;var G__13543 = tramp;return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(G__13541,G__13542,G__13543) : instaparse.gll.cat_full_parse.call(null,G__13541,G__13542,G__13543));

break;
case "ord":
var G__13544 = parser;var G__13545 = index;var G__13546 = tramp;return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13544,G__13545,G__13546) : instaparse.gll.ordered_alt_full_parse.call(null,G__13544,G__13545,G__13546));

break;
case "alt":
var G__13547 = parser;var G__13548 = index;var G__13549 = tramp;return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13547,G__13548,G__13549) : instaparse.gll.alt_full_parse.call(null,G__13547,G__13548,G__13549));

break;
case "look":
var G__13550 = parser;var G__13551 = index;var G__13552 = tramp;return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(G__13550,G__13551,G__13552) : instaparse.gll.lookahead_full_parse.call(null,G__13550,G__13551,G__13552));

break;
case "nt":
var G__13553 = parser;var G__13554 = index;var G__13555 = tramp;return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(G__13553,G__13554,G__13555) : instaparse.gll.non_terminal_full_parse.call(null,G__13553,G__13554,G__13555));

break;
case "rep":
var G__13556 = parser;var G__13557 = index;var G__13558 = tramp;return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(G__13556,G__13557,G__13558) : instaparse.gll.rep_full_parse.call(null,G__13556,G__13557,G__13558));

break;
case "star":
var G__13559 = parser;var G__13560 = index;var G__13561 = tramp;return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(G__13559,G__13560,G__13561) : instaparse.gll.star_full_parse.call(null,G__13559,G__13560,G__13561));

break;
case "string":
var G__13562 = parser;var G__13563 = index;var G__13564 = tramp;return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(G__13562,G__13563,G__13564) : instaparse.gll.string_full_parse.call(null,G__13562,G__13563,G__13564));

break;
case "regexp":
var G__13565 = parser;var G__13566 = index;var G__13567 = tramp;return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(G__13565,G__13566,G__13567) : instaparse.gll.regexp_full_parse.call(null,G__13565,G__13566,G__13567));

break;
case "plus":
var G__13568 = parser;var G__13569 = index;var G__13570 = tramp;return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(G__13568,G__13569,G__13570) : instaparse.gll.plus_full_parse.call(null,G__13568,G__13569,G__13570));

break;
case "epsilon":
var G__13571 = parser;var G__13572 = index;var G__13573 = tramp;return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(G__13571,G__13572,G__13573) : instaparse.gll.epsilon_full_parse.call(null,G__13571,G__13572,G__13573));

break;
case "string-ci":
var G__13574 = parser;var G__13575 = index;var G__13576 = tramp;return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(G__13574,G__13575,G__13576) : instaparse.gll.string_case_insensitive_full_parse.call(null,G__13574,G__13575,G__13576));

break;
case "opt":
var G__13577 = parser;var G__13578 = index;var G__13579 = tramp;return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13577,G__13578,G__13579) : instaparse.gll.opt_full_parse.call(null,G__13577,G__13578,G__13579));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
});

/**
* @constructor
* @param {*} index
* @param {*} reason
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4021__auto__,k__4022__auto__){var self__ = this;
var this__4021__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13582,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13584 = (((k13582 instanceof cljs.core.Keyword))?k13582.fqn:null);switch (G__13584) {
case "reason":
return self__.reason;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13582,else__4024__auto__);

}
});
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer(writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Failure{",", ","}",opts__4037__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap(this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map(this__4017__auto____$1,other__4018__auto__));
} else
{return and__3413__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4030__auto__,k__4031__auto__){var self__ = this;
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$73,null], null), null),k__4031__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13581){var self__ = this;
var this__4028__auto____$1 = this;var pred__13585 = cljs.core.keyword_identical_QMARK_;var expr__13586 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13588 = cljs.core.constant$keyword$70;var G__13589 = expr__13586;return (pred__13585.cljs$core$IFn$_invoke$arity$2 ? pred__13585.cljs$core$IFn$_invoke$arity$2(G__13588,G__13589) : pred__13585.call(null,G__13588,G__13589));
})()))
{return (new instaparse.gll.Failure(G__13581,self__.reason,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13590 = cljs.core.constant$keyword$73;var G__13591 = expr__13586;return (pred__13585.cljs$core$IFn$_invoke$arity$2 ? pred__13585.cljs$core$IFn$_invoke$arity$2(G__13590,G__13591) : pred__13585.call(null,G__13590,G__13591));
})()))
{return (new instaparse.gll.Failure(self__.index,G__13581,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13581),null));
}
}
});
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13581){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,G__13581,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4027__auto__))
{return cljs.core._assoc(this__4026__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Failure.cljs$lang$type = true;
instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Failure");
});
instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write(writer__4056__auto__,"instaparse.gll/Failure");
});
instaparse.gll.__GT_Failure = (function __GT_Failure(index,reason){return (new instaparse.gll.Failure(index,reason));
});
instaparse.gll.map__GT_Failure = (function map__GT_Failure(G__13583){return (new instaparse.gll.Failure(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__13583),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__13583),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13583,cljs.core.constant$keyword$70,cljs.core.array_seq([cljs.core.constant$keyword$73], 0))));
});
/**
* Converts a string to a Segment, which has fast subsequencing
*/
instaparse.gll.string__GT_segment = (function string__GT_segment(s){return (new instaparse.gll.Segment(s,(0),cljs.core.count(s)));
});

/**
* @constructor
* @param {*} grammar
* @param {*} text
* @param {*} segment
* @param {*} fail_index
* @param {*} node_builder
* @param {*} stack
* @param {*} next_stack
* @param {*} generation
* @param {*} negative_listeners
* @param {*} msg_cache
* @param {*} nodes
* @param {*} success
* @param {*} failure
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,__meta,__extmap){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>13){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4021__auto__,k__4022__auto__){var self__ = this;
var this__4021__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13594,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13596 = (((k13594 instanceof cljs.core.Keyword))?k13594.fqn:null);switch (G__13596) {
case "msg-cache":
return self__.msg_cache;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "generation":
return self__.generation;

break;
case "failure":
return self__.failure;

break;
case "fail-index":
return self__.fail_index;

break;
case "grammar":
return self__.grammar;

break;
case "success":
return self__.success;

break;
case "nodes":
return self__.nodes;

break;
case "node-builder":
return self__.node_builder;

break;
case "segment":
return self__.segment;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "text":
return self__.text;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13594,else__4024__auto__);

}
});
instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer(writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4037__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$82,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$83,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (13 + cljs.core.count(self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap(this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map(this__4017__auto____$1,other__4018__auto__));
} else
{return and__3413__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4030__auto__,k__4031__auto__){var self__ = this;
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$77,null,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$76,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$71,null], null), null),k__4031__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13593){var self__ = this;
var this__4028__auto____$1 = this;var pred__13597 = cljs.core.keyword_identical_QMARK_;var expr__13598 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13600 = cljs.core.constant$keyword$66;var G__13601 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13600,G__13601) : pred__13597.call(null,G__13600,G__13601));
})()))
{return (new instaparse.gll.Tramp(G__13593,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13602 = cljs.core.constant$keyword$71;var G__13603 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13602,G__13603) : pred__13597.call(null,G__13602,G__13603));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,G__13593,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13604 = cljs.core.constant$keyword$76;var G__13605 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13604,G__13605) : pred__13597.call(null,G__13604,G__13605));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__13593,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13606 = cljs.core.constant$keyword$77;var G__13607 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13606,G__13607) : pred__13597.call(null,G__13606,G__13607));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__13593,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13608 = cljs.core.constant$keyword$78;var G__13609 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13608,G__13609) : pred__13597.call(null,G__13608,G__13609));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__13593,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13610 = cljs.core.constant$keyword$79;var G__13611 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13610,G__13611) : pred__13597.call(null,G__13610,G__13611));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__13593,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13612 = cljs.core.constant$keyword$80;var G__13613 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13612,G__13613) : pred__13597.call(null,G__13612,G__13613));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__13593,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13614 = cljs.core.constant$keyword$81;var G__13615 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13614,G__13615) : pred__13597.call(null,G__13614,G__13615));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__13593,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13616 = cljs.core.constant$keyword$82;var G__13617 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13616,G__13617) : pred__13597.call(null,G__13616,G__13617));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__13593,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13618 = cljs.core.constant$keyword$83;var G__13619 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13618,G__13619) : pred__13597.call(null,G__13618,G__13619));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__13593,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13620 = cljs.core.constant$keyword$84;var G__13621 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : pred__13597.call(null,G__13620,G__13621));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__13593,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13622 = cljs.core.constant$keyword$85;var G__13623 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13622,G__13623) : pred__13597.call(null,G__13622,G__13623));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__13593,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13624 = cljs.core.constant$keyword$86;var G__13625 = expr__13598;return (pred__13597.cljs$core$IFn$_invoke$arity$2 ? pred__13597.cljs$core$IFn$_invoke$arity$2(G__13624,G__13625) : pred__13597.call(null,G__13624,G__13625));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__13593,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13593),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});
instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$82,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$83,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13593){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__13593,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4027__auto__))
{return cljs.core._assoc(this__4026__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Tramp.cljs$lang$type = true;
instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});
instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write(writer__4056__auto__,"instaparse.gll/Tramp");
});
instaparse.gll.__GT_Tramp = (function __GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure){return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure));
});
instaparse.gll.map__GT_Tramp = (function map__GT_Tramp(G__13595){return (new instaparse.gll.Tramp(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__13595),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__13595),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13595,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$71,cljs.core.constant$keyword$76,cljs.core.constant$keyword$77,cljs.core.constant$keyword$78,cljs.core.constant$keyword$79,cljs.core.constant$keyword$80,cljs.core.constant$keyword$81,cljs.core.constant$keyword$82,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$85,cljs.core.constant$keyword$86], 0))));
});
instaparse.gll.make_tramp = (function() {
var make_tramp = null;
var make_tramp__2 = (function (grammar,text){return make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.string__GT_segment(text),(-1),null);
});
var make_tramp__3 = (function (grammar,text,segment){return make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
});
var make_tramp__4 = (function (grammar,text,fail_index,node_builder){return make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.string__GT_segment(text),fail_index,node_builder);
});
var make_tramp__5 = (function (grammar,text,segment,fail_index,node_builder){return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY))));
});
make_tramp = function(grammar,text,segment,fail_index,node_builder){
switch(arguments.length){
case 2:
return make_tramp__2.call(this,grammar,text);
case 3:
return make_tramp__3.call(this,grammar,text,segment);
case 4:
return make_tramp__4.call(this,grammar,text,segment,fail_index);
case 5:
return make_tramp__5.call(this,grammar,text,segment,fail_index,node_builder);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_tramp.cljs$core$IFn$_invoke$arity$2 = make_tramp__2;
make_tramp.cljs$core$IFn$_invoke$arity$3 = make_tramp__3;
make_tramp.cljs$core$IFn$_invoke$arity$4 = make_tramp__4;
make_tramp.cljs$core$IFn$_invoke$arity$5 = make_tramp__5;
return make_tramp;
})()
;
instaparse.gll.make_success = (function make_success(result,index){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,result,cljs.core.constant$keyword$70,index], null);
});
instaparse.gll.total_success_QMARK_ = (function total_success_QMARK_(tramp,s){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tramp.text),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
* @param {*} listeners
* @param {*} full_listeners
* @param {*} results
* @param {*} full_results
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4021__auto__,k__4022__auto__){var self__ = this;
var this__4021__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13643,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13645 = (((k13643 instanceof cljs.core.Keyword))?k13643.fqn:null);switch (G__13645) {
case "full-results":
return self__.full_results;

break;
case "results":
return self__.results;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "listeners":
return self__.listeners;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13643,else__4024__auto__);

}
});
instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer(writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Node{",", ","}",opts__4037__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap(this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map(this__4017__auto____$1,other__4018__auto__));
} else
{return and__3413__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4030__auto__,k__4031__auto__){var self__ = this;
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$89,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$90,null], null), null),k__4031__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13642){var self__ = this;
var this__4028__auto____$1 = this;var pred__13646 = cljs.core.keyword_identical_QMARK_;var expr__13647 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13649 = cljs.core.constant$keyword$88;var G__13650 = expr__13647;return (pred__13646.cljs$core$IFn$_invoke$arity$2 ? pred__13646.cljs$core$IFn$_invoke$arity$2(G__13649,G__13650) : pred__13646.call(null,G__13649,G__13650));
})()))
{return (new instaparse.gll.Node(G__13642,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13651 = cljs.core.constant$keyword$89;var G__13652 = expr__13647;return (pred__13646.cljs$core$IFn$_invoke$arity$2 ? pred__13646.cljs$core$IFn$_invoke$arity$2(G__13651,G__13652) : pred__13646.call(null,G__13651,G__13652));
})()))
{return (new instaparse.gll.Node(self__.listeners,G__13642,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13653 = cljs.core.constant$keyword$90;var G__13654 = expr__13647;return (pred__13646.cljs$core$IFn$_invoke$arity$2 ? pred__13646.cljs$core$IFn$_invoke$arity$2(G__13653,G__13654) : pred__13646.call(null,G__13653,G__13654));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__13642,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13655 = cljs.core.constant$keyword$91;var G__13656 = expr__13647;return (pred__13646.cljs$core$IFn$_invoke$arity$2 ? pred__13646.cljs$core$IFn$_invoke$arity$2(G__13655,G__13656) : pred__13646.call(null,G__13655,G__13656));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__13642,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13642),null));
}
}
}
}
});
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13642){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__13642,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4027__auto__))
{return cljs.core._assoc(this__4026__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Node.cljs$lang$type = true;
instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Node");
});
instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write(writer__4056__auto__,"instaparse.gll/Node");
});
instaparse.gll.__GT_Node = (function __GT_Node(listeners,full_listeners,results,full_results){return (new instaparse.gll.Node(listeners,full_listeners,results,full_results));
});
instaparse.gll.map__GT_Node = (function map__GT_Node(G__13644){return (new instaparse.gll.Node(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__13644),cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__13644),cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__13644),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__13644),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13644,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91], 0))));
});
instaparse.gll.make_node = (function make_node(){return (new instaparse.gll.Node(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
/**
* Pushes an item onto the trampoline's stack
*/
instaparse.gll.push_stack = (function push_stack(tramp,item){return tramp.stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.stack,item);
});
/**
* Pushes onto stack a message to a given listener about a result
*/
instaparse.gll.push_message = (function push_message(tramp,listener,result){var cache = tramp.msg_cache;var i = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result);var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cache,k,(0));var f = ((function (cache,i,k,c){
return (function (){var G__13659 = result;return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(G__13659) : listener.call(null,G__13659));
});})(cache,i,k,c))
;if((c > tramp.generation))
{tramp.next_stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.next_stack,f);
} else
{tramp.stack = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.stack,f);
}
return tramp.msg_cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.msg_cache,k,(c + (1)));
});
/**
* Tests whether node already has a listener
*/
instaparse.gll.listener_exists_QMARK_ = (function listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13661 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13661) : nodes.call(null,G__13661));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.listeners) > (0));
} else
{return null;
}
});
/**
* Tests whether node already has a listener or full-listener
*/
instaparse.gll.full_listener_exists_QMARK_ = (function full_listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13663 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13663) : nodes.call(null,G__13663));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_listeners) > (0))) || ((cljs.core.count(node.listeners) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a result or full-result
*/
instaparse.gll.result_exists_QMARK_ = (function result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13665 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13665) : nodes.call(null,G__13665));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_results) > (0))) || ((cljs.core.count(node.results) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a full-result
*/
instaparse.gll.full_result_exists_QMARK_ = (function full_result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13667 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13667) : nodes.call(null,G__13667));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.full_results) > (0));
} else
{return null;
}
});
/**
* Gets node if already exists, otherwise creates one
*/
instaparse.gll.node_get = (function node_get(tramp,node_key){var nodes = tramp.nodes;var temp__4124__auto__ = (function (){var G__13669 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13669) : nodes.call(null,G__13669));
})();if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;return node;
} else
{var node = instaparse.gll.make_node();tramp.nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.nodes,node_key,node);
return node;
}
});
instaparse.gll.safe_with_meta = (function safe_with_meta(obj,metamap){if((function (){var G__13671 = obj;if(G__13671)
{var bit__4089__auto__ = (G__13671.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4089__auto__) || (G__13671.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__13671.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13671);
}
})())
{return cljs.core.with_meta(obj,metamap);
} else
{return obj;
}
});
/**
* Pushes a result into the trampoline's node.
* Categorizes as either result or full-result.
* Schedules notification to all existing listeners of result
* (Full listeners only get notified about full results)
*/
instaparse.gll.push_result = (function push_result(tramp,node_key,result){var node = instaparse.gll.node_get(tramp,node_key);var parser = (function (){var G__13683 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13683) : node_key.call(null,G__13683));
})();var result__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.constant$keyword$87,null):result);var result__$2 = (function (){var temp__4124__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser);if(cljs.core.truth_(temp__4124__auto__))
{var reduction_function = temp__4124__auto__;return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,(function (){var G__13684 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13684) : node_key.call(null,G__13684));
})(),cljs.core.constant$keyword$93,cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1));
} else
{return result__$1;
}
})();var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);var results = ((total_QMARK_)?node.full_results:node.results);if(cljs.core.not((function (){var G__13685 = result__$2;return (results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(G__13685) : results.call(null,G__13685));
})()))
{if(total_QMARK_)
{node.full_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_results,result__$2);
} else
{node.results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.results,result__$2);
}
var seq__13686_13694 = cljs.core.seq(node.listeners);var chunk__13687_13695 = null;var count__13688_13696 = (0);var i__13689_13697 = (0);while(true){
if((i__13689_13697 < count__13688_13696))
{var listener_13698 = chunk__13687_13695.cljs$core$IIndexed$_nth$arity$2(null,i__13689_13697);instaparse.gll.push_message(tramp,listener_13698,result__$2);
{
var G__13699 = seq__13686_13694;
var G__13700 = chunk__13687_13695;
var G__13701 = count__13688_13696;
var G__13702 = (i__13689_13697 + (1));
seq__13686_13694 = G__13699;
chunk__13687_13695 = G__13700;
count__13688_13696 = G__13701;
i__13689_13697 = G__13702;
continue;
}
} else
{var temp__4126__auto___13703 = cljs.core.seq(seq__13686_13694);if(temp__4126__auto___13703)
{var seq__13686_13704__$1 = temp__4126__auto___13703;if(cljs.core.chunked_seq_QMARK_(seq__13686_13704__$1))
{var c__4195__auto___13705 = cljs.core.chunk_first(seq__13686_13704__$1);{
var G__13706 = cljs.core.chunk_rest(seq__13686_13704__$1);
var G__13707 = c__4195__auto___13705;
var G__13708 = cljs.core.count(c__4195__auto___13705);
var G__13709 = (0);
seq__13686_13694 = G__13706;
chunk__13687_13695 = G__13707;
count__13688_13696 = G__13708;
i__13689_13697 = G__13709;
continue;
}
} else
{var listener_13710 = cljs.core.first(seq__13686_13704__$1);instaparse.gll.push_message(tramp,listener_13710,result__$2);
{
var G__13711 = cljs.core.next(seq__13686_13704__$1);
var G__13712 = null;
var G__13713 = (0);
var G__13714 = (0);
seq__13686_13694 = G__13711;
chunk__13687_13695 = G__13712;
count__13688_13696 = G__13713;
i__13689_13697 = G__13714;
continue;
}
}
} else
{}
}
break;
}
if(total_QMARK_)
{var seq__13690 = cljs.core.seq(node.full_listeners);var chunk__13691 = null;var count__13692 = (0);var i__13693 = (0);while(true){
if((i__13693 < count__13692))
{var listener = chunk__13691.cljs$core$IIndexed$_nth$arity$2(null,i__13693);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__13715 = seq__13690;
var G__13716 = chunk__13691;
var G__13717 = count__13692;
var G__13718 = (i__13693 + (1));
seq__13690 = G__13715;
chunk__13691 = G__13716;
count__13692 = G__13717;
i__13693 = G__13718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13690);if(temp__4126__auto__)
{var seq__13690__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13690__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13690__$1);{
var G__13719 = cljs.core.chunk_rest(seq__13690__$1);
var G__13720 = c__4195__auto__;
var G__13721 = cljs.core.count(c__4195__auto__);
var G__13722 = (0);
seq__13690 = G__13719;
chunk__13691 = G__13720;
count__13692 = G__13721;
i__13693 = G__13722;
continue;
}
} else
{var listener = cljs.core.first(seq__13690__$1);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__13723 = cljs.core.next(seq__13690__$1);
var G__13724 = null;
var G__13725 = (0);
var G__13726 = (0);
seq__13690 = G__13723;
chunk__13691 = G__13724;
count__13692 = G__13725;
i__13693 = G__13726;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* Pushes a listener into the trampoline's node.
* Schedules notification to listener of all existing results.
* Initiates parse if necessary
*/
instaparse.gll.push_listener = (function push_listener(tramp,node_key,listener){var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);var node = instaparse.gll.node_get(tramp,node_key);node.listeners = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.listeners,listener);
var seq__13737_13747 = cljs.core.seq(node.results);var chunk__13738_13748 = null;var count__13739_13749 = (0);var i__13740_13750 = (0);while(true){
if((i__13740_13750 < count__13739_13749))
{var result_13751 = chunk__13738_13748.cljs$core$IIndexed$_nth$arity$2(null,i__13740_13750);instaparse.gll.push_message(tramp,listener,result_13751);
{
var G__13752 = seq__13737_13747;
var G__13753 = chunk__13738_13748;
var G__13754 = count__13739_13749;
var G__13755 = (i__13740_13750 + (1));
seq__13737_13747 = G__13752;
chunk__13738_13748 = G__13753;
count__13739_13749 = G__13754;
i__13740_13750 = G__13755;
continue;
}
} else
{var temp__4126__auto___13756 = cljs.core.seq(seq__13737_13747);if(temp__4126__auto___13756)
{var seq__13737_13757__$1 = temp__4126__auto___13756;if(cljs.core.chunked_seq_QMARK_(seq__13737_13757__$1))
{var c__4195__auto___13758 = cljs.core.chunk_first(seq__13737_13757__$1);{
var G__13759 = cljs.core.chunk_rest(seq__13737_13757__$1);
var G__13760 = c__4195__auto___13758;
var G__13761 = cljs.core.count(c__4195__auto___13758);
var G__13762 = (0);
seq__13737_13747 = G__13759;
chunk__13738_13748 = G__13760;
count__13739_13749 = G__13761;
i__13740_13750 = G__13762;
continue;
}
} else
{var result_13763 = cljs.core.first(seq__13737_13757__$1);instaparse.gll.push_message(tramp,listener,result_13763);
{
var G__13764 = cljs.core.next(seq__13737_13757__$1);
var G__13765 = null;
var G__13766 = (0);
var G__13767 = (0);
seq__13737_13747 = G__13764;
chunk__13738_13748 = G__13765;
count__13739_13749 = G__13766;
i__13740_13750 = G__13767;
continue;
}
}
} else
{}
}
break;
}
var seq__13741_13768 = cljs.core.seq(node.full_results);var chunk__13742_13769 = null;var count__13743_13770 = (0);var i__13744_13771 = (0);while(true){
if((i__13744_13771 < count__13743_13770))
{var result_13772 = chunk__13742_13769.cljs$core$IIndexed$_nth$arity$2(null,i__13744_13771);instaparse.gll.push_message(tramp,listener,result_13772);
{
var G__13773 = seq__13741_13768;
var G__13774 = chunk__13742_13769;
var G__13775 = count__13743_13770;
var G__13776 = (i__13744_13771 + (1));
seq__13741_13768 = G__13773;
chunk__13742_13769 = G__13774;
count__13743_13770 = G__13775;
i__13744_13771 = G__13776;
continue;
}
} else
{var temp__4126__auto___13777 = cljs.core.seq(seq__13741_13768);if(temp__4126__auto___13777)
{var seq__13741_13778__$1 = temp__4126__auto___13777;if(cljs.core.chunked_seq_QMARK_(seq__13741_13778__$1))
{var c__4195__auto___13779 = cljs.core.chunk_first(seq__13741_13778__$1);{
var G__13780 = cljs.core.chunk_rest(seq__13741_13778__$1);
var G__13781 = c__4195__auto___13779;
var G__13782 = cljs.core.count(c__4195__auto___13779);
var G__13783 = (0);
seq__13741_13768 = G__13780;
chunk__13742_13769 = G__13781;
count__13743_13770 = G__13782;
i__13744_13771 = G__13783;
continue;
}
} else
{var result_13784 = cljs.core.first(seq__13741_13778__$1);instaparse.gll.push_message(tramp,listener,result_13784);
{
var G__13785 = cljs.core.next(seq__13741_13778__$1);
var G__13786 = null;
var G__13787 = (0);
var G__13788 = (0);
seq__13741_13768 = G__13785;
chunk__13742_13769 = G__13786;
count__13743_13770 = G__13787;
i__13744_13771 = G__13788;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not(listener_already_exists_QMARK_))
{return instaparse.gll.push_stack(tramp,((function (listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._parse((function (){var G__13745 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13745) : node_key.call(null,G__13745));
})(),(function (){var G__13746 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13746) : node_key.call(null,G__13746));
})(),tramp);
});})(listener_already_exists_QMARK_,node))
);
} else
{return null;
}
});
/**
* Pushes a listener into the trampoline's node.
* Schedules notification to listener of all existing full results.
*/
instaparse.gll.push_full_listener = (function push_full_listener(tramp,node_key,listener){var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);var node = instaparse.gll.node_get(tramp,node_key);node.full_listeners = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_listeners,listener);
var seq__13795_13801 = cljs.core.seq(node.full_results);var chunk__13796_13802 = null;var count__13797_13803 = (0);var i__13798_13804 = (0);while(true){
if((i__13798_13804 < count__13797_13803))
{var result_13805 = chunk__13796_13802.cljs$core$IIndexed$_nth$arity$2(null,i__13798_13804);instaparse.gll.push_message(tramp,listener,result_13805);
{
var G__13806 = seq__13795_13801;
var G__13807 = chunk__13796_13802;
var G__13808 = count__13797_13803;
var G__13809 = (i__13798_13804 + (1));
seq__13795_13801 = G__13806;
chunk__13796_13802 = G__13807;
count__13797_13803 = G__13808;
i__13798_13804 = G__13809;
continue;
}
} else
{var temp__4126__auto___13810 = cljs.core.seq(seq__13795_13801);if(temp__4126__auto___13810)
{var seq__13795_13811__$1 = temp__4126__auto___13810;if(cljs.core.chunked_seq_QMARK_(seq__13795_13811__$1))
{var c__4195__auto___13812 = cljs.core.chunk_first(seq__13795_13811__$1);{
var G__13813 = cljs.core.chunk_rest(seq__13795_13811__$1);
var G__13814 = c__4195__auto___13812;
var G__13815 = cljs.core.count(c__4195__auto___13812);
var G__13816 = (0);
seq__13795_13801 = G__13813;
chunk__13796_13802 = G__13814;
count__13797_13803 = G__13815;
i__13798_13804 = G__13816;
continue;
}
} else
{var result_13817 = cljs.core.first(seq__13795_13811__$1);instaparse.gll.push_message(tramp,listener,result_13817);
{
var G__13818 = cljs.core.next(seq__13795_13811__$1);
var G__13819 = null;
var G__13820 = (0);
var G__13821 = (0);
seq__13795_13801 = G__13818;
chunk__13796_13802 = G__13819;
count__13797_13803 = G__13820;
i__13798_13804 = G__13821;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not(full_listener_already_exists_QMARK_))
{return instaparse.gll.push_stack(tramp,((function (full_listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._full_parse((function (){var G__13799 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13799) : node_key.call(null,G__13799));
})(),(function (){var G__13800 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13800) : node_key.call(null,G__13800));
})(),tramp);
});})(full_listener_already_exists_QMARK_,node))
);
} else
{return null;
}
});
/**
* Pushes a thunk onto the trampoline's negative-listener stack.
*/
instaparse.gll.push_negative_listener = (function push_negative_listener(tramp,negative_listener){return tramp.negative_listeners = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tramp.negative_listeners,negative_listener);
});
instaparse.gll.fail = (function fail(tramp,node_key,index,reason){tramp.failure = (function (failure){var current_index = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(failure);var G__13828 = cljs.core.compare(index,current_index);switch (G__13828) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null)));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(failure),reason)));

break;
case (-1):
return failure;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.compare(index,current_index)))));

}
}).call(null,tramp.failure);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,tramp.fail_index))
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__13829 = tramp.node_builder;var G__13830 = cljs.core.constant$keyword$94;var G__13831 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tramp.text,index);var G__13832 = index;var G__13833 = cljs.core.count(tramp.text);return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__13829,G__13830,G__13831,G__13832,G__13833) : instaparse.gll.build_node_with_meta.call(null,G__13829,G__13830,G__13831,G__13832,G__13833));
})(),cljs.core.count(tramp.text)));
} else
{return null;
}
});
/**
* Executes one thing on the stack (not threadsafe)
*/
instaparse.gll.step = (function step(tramp){var top = cljs.core.peek(tramp.stack);tramp.stack = cljs.core.pop(tramp.stack);
return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
* Executes the stack until exhausted
*/
instaparse.gll.run = (function() {
var run = null;
var run__1 = (function (tramp){return run.cljs$core$IFn$_invoke$arity$2(tramp,null);
});
var run__2 = (function (tramp,found_result_QMARK_){while(true){
var stack = tramp.stack;if(cljs.core.truth_(tramp.success))
{return (new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){return cljs.core.cons(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(tramp.success),(function (){tramp.success = null;
return run.cljs$core$IFn$_invoke$arity$2(tramp,true);
})());
});})(tramp,found_result_QMARK_,stack))
,null,null));
} else
{if((cljs.core.count(stack) > (0)))
{instaparse.gll.step(tramp);
{
var G__13839 = tramp;
var G__13840 = found_result_QMARK_;
tramp = G__13839;
found_result_QMARK_ = G__13840;
continue;
}
} else
{if((cljs.core.count(tramp.negative_listeners) > (0)))
{var listener = cljs.core.peek(tramp.negative_listeners);(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));
tramp.negative_listeners = cljs.core.pop(tramp.negative_listeners);
{
var G__13841 = tramp;
var G__13842 = found_result_QMARK_;
tramp = G__13841;
found_result_QMARK_ = G__13842;
continue;
}
} else
{if(cljs.core.truth_(found_result_QMARK_))
{var next_stack = tramp.next_stack;tramp.stack = next_stack;
tramp.next_stack = cljs.core.PersistentVector.EMPTY;
tramp.generation = (tramp.generation + (1));
{
var G__13843 = tramp;
var G__13844 = null;
tramp = G__13843;
found_result_QMARK_ = G__13844;
continue;
}
} else
{return null;

}
}
}
}
break;
}
});
run = function(tramp,found_result_QMARK_){
switch(arguments.length){
case 1:
return run__1.call(this,tramp);
case 2:
return run__2.call(this,tramp,found_result_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run.cljs$core$IFn$_invoke$arity$1 = run__1;
run.cljs$core$IFn$_invoke$arity$2 = run__2;
return run;
})()
;
instaparse.gll.NodeListener = (function NodeListener(node_key,tramp){return (function (result){return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function LookListener(node_key,tramp){return (function (result){return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(function (){var G__13846 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13846) : node_key.call(null,G__13846));
})()));
});
});
instaparse.gll.CatListener = (function CatListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__13852 = result;var map__13852__$1 = ((cljs.core.seq_QMARK_(map__13852))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13852):map__13852);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13852__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13852__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core.seq(parser_sequence))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),CatListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function CatFullListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__13862 = result;var map__13862__$1 = ((cljs.core.seq_QMARK_(map__13862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13862):map__13862);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13862__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13862__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(instaparse.reduction.singleton_QMARK_(parser_sequence))
{return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),CatFullListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else
{if(cljs.core.seq(parser_sequence))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),CatFullListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function PlusListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__13869 = result;var map__13869__$1 = ((cljs.core.seq_QMARK_(map__13869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13869):map__13869);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13869__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13869__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
{if((cljs.core.count(results_so_far) === (0)))
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusListener(new_results_so_far,parser,continue_index,node_key,tramp));
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__13876 = result;var map__13876__$1 = ((cljs.core.seq_QMARK_(map__13876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13876):map__13876);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
{if((cljs.core.count(results_so_far) === (0)))
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusFullListener(new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__13885 = result;var map__13885__$1 = ((cljs.core.seq_QMARK_(map__13885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13885):map__13885);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n)))
{instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else
{}
if((cljs.core.count(new_results_so_far) < n))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepListener(new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
});
});
instaparse.gll.RepFullListener = (function RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__13894 = result;var map__13894__$1 = ((cljs.core.seq_QMARK_(map__13894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13894):map__13894);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n)))
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else
{return null;
}
} else
{if((cljs.core.count(new_results_so_far) < n))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepFullListener(new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
}
});
});
instaparse.gll.TopListener = (function TopListener(tramp){return (function (result){return tramp.success = result;
});
});
instaparse.gll.string_parse = (function string_parse(this$,index,tramp){var string = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count(text);var y__3740__auto__ = (index + cljs.core.count(string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$58,cljs.core.constant$keyword$74,string], null));
}
});
instaparse.gll.string_full_parse = (function string_full_parse(this$,index,tramp){var string = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count(text);var y__3740__auto__ = (index + cljs.core.count(string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$58,cljs.core.constant$keyword$74,string,cljs.core.constant$keyword$75,true], null));
}
});
instaparse.gll.equals_ignore_case = (function equals_ignore_case(s1,s2){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function string_case_insensitive_parse(this$,index,tramp){var string = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count(text);var y__3740__auto__ = (index + cljs.core.count(string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);if(instaparse.gll.equals_ignore_case(string,head))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$58,cljs.core.constant$keyword$74,string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function string_case_insensitive_full_parse(this$,index,tramp){var string = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count(text);var y__3740__auto__ = (index + cljs.core.count(string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,index,end);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (instaparse.gll.equals_ignore_case(string,head)))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$58,cljs.core.constant$keyword$74,string,cljs.core.constant$keyword$75,true], null));
}
});
instaparse.gll.re_match_at_front = (function re_match_at_front(regexp,text){var re = (new RegExp(regexp.source,"g"));var m = re.exec(text);if(cljs.core.truth_((function (){var and__3413__auto__ = m;if(cljs.core.truth_(and__3413__auto__))
{return (m.index === (0));
} else
{return and__3413__auto__;
}
})()))
{return cljs.core.first(m);
} else
{return null;
}
});
instaparse.gll.regexp_parse = (function regexp_parse(this$,index,tramp){var regexp = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.segment;var substring = instaparse.gll.toString(text.instaparse$gll$ISegment$subsegment$arity$3(null,index,cljs.core.count(text)));var match = instaparse.gll.re_match_at_front(regexp,substring);if(cljs.core.truth_(match))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$60,cljs.core.constant$keyword$74,regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function regexp_full_parse(this$,index,tramp){var regexp = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(this$);var text = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(tramp);var substring = instaparse.gll.toString(text.instaparse$gll$ISegment$subsegment$arity$3(null,index,cljs.core.count(text)));var match = instaparse.gll.re_match_at_front(regexp,substring);var desired_length = (cljs.core.count(text) - index);if(cljs.core.truth_((function (){var and__3413__auto__ = match;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else
{return and__3413__auto__;
}
})()))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$60,cljs.core.constant$keyword$74,regexp,cljs.core.constant$keyword$75,true], null));
}
});
var empty_cat_result_13895 = instaparse.auto_flatten_seq.EMPTY;instaparse.gll.cat_parse = ((function (empty_cat_result_13895){
return (function cat_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(empty_cat_result_13895,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13895))
;
instaparse.gll.cat_full_parse = ((function (empty_cat_result_13895){
return (function cat_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(empty_cat_result_13895,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13895))
;
instaparse.gll.plus_parse = ((function (empty_cat_result_13895){
return (function plus_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13895,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13895))
;
instaparse.gll.plus_full_parse = ((function (empty_cat_result_13895){
return (function plus_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13895,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13895))
;
instaparse.gll.rep_parse = ((function (empty_cat_result_13895){
return (function rep_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13895,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13895,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13895))
;
instaparse.gll.rep_full_parse = ((function (empty_cat_result_13895){
return (function rep_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13895,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13895,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13895))
;
instaparse.gll.star_parse = ((function (empty_cat_result_13895){
return (function star_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13895,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});})(empty_cat_result_13895))
;
instaparse.gll.star_full_parse = ((function (empty_cat_result_13895){
return (function star_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13895,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13895))
;
instaparse.gll.alt_parse = (function alt_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__13900 = cljs.core.seq(parsers);var chunk__13901 = null;var count__13902 = (0);var i__13903 = (0);while(true){
if((i__13903 < count__13902))
{var parser = chunk__13901.cljs$core$IIndexed$_nth$arity$2(null,i__13903);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13904 = seq__13900;
var G__13905 = chunk__13901;
var G__13906 = count__13902;
var G__13907 = (i__13903 + (1));
seq__13900 = G__13904;
chunk__13901 = G__13905;
count__13902 = G__13906;
i__13903 = G__13907;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13900);if(temp__4126__auto__)
{var seq__13900__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13900__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13900__$1);{
var G__13908 = cljs.core.chunk_rest(seq__13900__$1);
var G__13909 = c__4195__auto__;
var G__13910 = cljs.core.count(c__4195__auto__);
var G__13911 = (0);
seq__13900 = G__13908;
chunk__13901 = G__13909;
count__13902 = G__13910;
i__13903 = G__13911;
continue;
}
} else
{var parser = cljs.core.first(seq__13900__$1);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13912 = cljs.core.next(seq__13900__$1);
var G__13913 = null;
var G__13914 = (0);
var G__13915 = (0);
seq__13900 = G__13912;
chunk__13901 = G__13913;
count__13902 = G__13914;
i__13903 = G__13915;
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
instaparse.gll.alt_full_parse = (function alt_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__13920 = cljs.core.seq(parsers);var chunk__13921 = null;var count__13922 = (0);var i__13923 = (0);while(true){
if((i__13923 < count__13922))
{var parser = chunk__13921.cljs$core$IIndexed$_nth$arity$2(null,i__13923);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13924 = seq__13920;
var G__13925 = chunk__13921;
var G__13926 = count__13922;
var G__13927 = (i__13923 + (1));
seq__13920 = G__13924;
chunk__13921 = G__13925;
count__13922 = G__13926;
i__13923 = G__13927;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13920);if(temp__4126__auto__)
{var seq__13920__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13920__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13920__$1);{
var G__13928 = cljs.core.chunk_rest(seq__13920__$1);
var G__13929 = c__4195__auto__;
var G__13930 = cljs.core.count(c__4195__auto__);
var G__13931 = (0);
seq__13920 = G__13928;
chunk__13921 = G__13929;
count__13922 = G__13930;
i__13923 = G__13931;
continue;
}
} else
{var parser = cljs.core.first(seq__13920__$1);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13932 = cljs.core.next(seq__13920__$1);
var G__13933 = null;
var G__13934 = (0);
var G__13935 = (0);
seq__13920 = G__13932;
chunk__13921 = G__13933;
count__13922 = G__13934;
i__13923 = G__13935;
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
instaparse.gll.ordered_alt_parse = (function ordered_alt_parse(this$,index,tramp){var parser1 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(this$);var parser2 = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_listener(tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener(tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function ordered_alt_full_parse(this$,index,tramp){var parser1 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(this$);var parser2 = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener(tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function opt_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function opt_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$95,cljs.core.constant$keyword$74,cljs.core.constant$keyword$96], null));
}
});
instaparse.gll.non_terminal_parse = (function non_terminal_parse(this$,index,tramp){var parser = instaparse.gll.get_parser(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function non_terminal_full_parse(this$,index,tramp){var parser = instaparse.gll.get_parser(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function lookahead_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function lookahead_full_parse(this$,index,tramp){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.lookahead_parse(this$,index,tramp);
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$97,cljs.core.constant$keyword$74,cljs.core.constant$keyword$96], null));
}
});
instaparse.gll.negative_lookahead_parse = (function negative_lookahead_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key)))
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$98], null));
} else
{instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$98,cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
});})(parser,node_key))
,null));return ((function (fail_send,parser,node_key){
return (function (result){return cljs.core.force(fail_send);
});
;})(fail_send,parser,node_key))
})());
return instaparse.gll.push_negative_listener(tramp,((function (parser,node_key){
return (function (){if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key)))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function epsilon_parse(this$,index,tramp){return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function epsilon_full_parse(this$,index,tramp){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,cljs.core.constant$keyword$99,cljs.core.constant$keyword$74,cljs.core.constant$keyword$96], null));
}
});
instaparse.gll.start_parser = (function start_parser(tramp,parser,partial_QMARK_){if(cljs.core.truth_(partial_QMARK_))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else
{return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function parses(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);var parser = instaparse.combinators_source.nt(start);instaparse.gll.start_parser(tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(tramp.failure,text));
}
});
instaparse.gll.parse = (function parse(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);var parser = instaparse.combinators_source.nt(start);instaparse.gll.start_parser(tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first(all_parses);
} else
{return instaparse.failure.augment_failure(tramp.failure,text);
}
});
instaparse.gll.build_node_with_meta = (function build_node_with_meta(node_builder,tag,content,start,end){return cljs.core.with_meta((function (){var G__13938 = tag;var G__13939 = content;return (node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(G__13938,G__13939) : node_builder.call(null,G__13938,G__13939));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,start,cljs.core.constant$keyword$93,end], null));
});
instaparse.gll.build_total_failure_node = (function build_total_failure_node(node_builder,start,text){var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,cljs.core.constant$keyword$94,text,(0),cljs.core.count(text));var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt(start);instaparse.gll.start_parser(tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core._conj(cljs.core.List.EMPTY,instaparse.gll.build_total_failure_node(node_builder,start,text));
}
});
/**
* A variation on with-meta that merges the existing metamap into the new metamap,
* rather than overwriting the metamap entirely.
*/
instaparse.gll.merge_meta = (function merge_meta(obj,metamap){return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function parses_total(grammar,start,text,partial_QMARK_,node_builder){var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);if(cljs.core.seq(all_parses))
{return all_parses;
} else
{return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt(start);instaparse.gll.start_parser(tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first(all_parses);
} else
{return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function parse_total(grammar,start,text,partial_QMARK_,node_builder){var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);if(!((result instanceof instaparse.gll.Failure)))
{return result;
} else
{return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
