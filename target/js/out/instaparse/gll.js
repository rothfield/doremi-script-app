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
instaparse.gll.ISegment = (function (){var obj13400 = {};return obj13400;
})();
instaparse.gll.subsegment = (function subsegment(this$,start_index,end_index_minus_one){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.instaparse$gll$ISegment$subsegment$arity$3;
} else
{return and__3413__auto__;
}
})())
{return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.subsegment[(function (){var G__13404 = x__4062__auto__;return goog.typeOf(G__13404);
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
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.toString[(function (){var G__13408 = x__4062__auto__;return goog.typeOf(G__13408);
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
instaparse.gll._parse = (function _parse(parser,index,tramp){var G__13452 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__13452) {
case "neg":
var G__13453 = parser;var G__13454 = index;var G__13455 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13453,G__13454,G__13455) : instaparse.gll.negative_lookahead_parse.call(null,G__13453,G__13454,G__13455));

break;
case "cat":
var G__13456 = parser;var G__13457 = index;var G__13458 = tramp;return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(G__13456,G__13457,G__13458) : instaparse.gll.cat_parse.call(null,G__13456,G__13457,G__13458));

break;
case "ord":
var G__13459 = parser;var G__13460 = index;var G__13461 = tramp;return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(G__13459,G__13460,G__13461) : instaparse.gll.ordered_alt_parse.call(null,G__13459,G__13460,G__13461));

break;
case "alt":
var G__13462 = parser;var G__13463 = index;var G__13464 = tramp;return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(G__13462,G__13463,G__13464) : instaparse.gll.alt_parse.call(null,G__13462,G__13463,G__13464));

break;
case "look":
var G__13465 = parser;var G__13466 = index;var G__13467 = tramp;return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13465,G__13466,G__13467) : instaparse.gll.lookahead_parse.call(null,G__13465,G__13466,G__13467));

break;
case "nt":
var G__13468 = parser;var G__13469 = index;var G__13470 = tramp;return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(G__13468,G__13469,G__13470) : instaparse.gll.non_terminal_parse.call(null,G__13468,G__13469,G__13470));

break;
case "rep":
var G__13471 = parser;var G__13472 = index;var G__13473 = tramp;return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(G__13471,G__13472,G__13473) : instaparse.gll.rep_parse.call(null,G__13471,G__13472,G__13473));

break;
case "star":
var G__13474 = parser;var G__13475 = index;var G__13476 = tramp;return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(G__13474,G__13475,G__13476) : instaparse.gll.star_parse.call(null,G__13474,G__13475,G__13476));

break;
case "string":
var G__13477 = parser;var G__13478 = index;var G__13479 = tramp;return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(G__13477,G__13478,G__13479) : instaparse.gll.string_parse.call(null,G__13477,G__13478,G__13479));

break;
case "regexp":
var G__13480 = parser;var G__13481 = index;var G__13482 = tramp;return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(G__13480,G__13481,G__13482) : instaparse.gll.regexp_parse.call(null,G__13480,G__13481,G__13482));

break;
case "plus":
var G__13483 = parser;var G__13484 = index;var G__13485 = tramp;return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(G__13483,G__13484,G__13485) : instaparse.gll.plus_parse.call(null,G__13483,G__13484,G__13485));

break;
case "epsilon":
var G__13486 = parser;var G__13487 = index;var G__13488 = tramp;return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(G__13486,G__13487,G__13488) : instaparse.gll.epsilon_parse.call(null,G__13486,G__13487,G__13488));

break;
case "string-ci":
var G__13489 = parser;var G__13490 = index;var G__13491 = tramp;return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(G__13489,G__13490,G__13491) : instaparse.gll.string_case_insensitive_parse.call(null,G__13489,G__13490,G__13491));

break;
case "opt":
var G__13492 = parser;var G__13493 = index;var G__13494 = tramp;return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(G__13492,G__13493,G__13494) : instaparse.gll.opt_parse.call(null,G__13492,G__13493,G__13494));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.gll._full_parse = (function _full_parse(parser,index,tramp){var G__13539 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__13539) {
case "neg":
var G__13540 = parser;var G__13541 = index;var G__13542 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__13540,G__13541,G__13542) : instaparse.gll.negative_lookahead_parse.call(null,G__13540,G__13541,G__13542));

break;
case "cat":
var G__13543 = parser;var G__13544 = index;var G__13545 = tramp;return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(G__13543,G__13544,G__13545) : instaparse.gll.cat_full_parse.call(null,G__13543,G__13544,G__13545));

break;
case "ord":
var G__13546 = parser;var G__13547 = index;var G__13548 = tramp;return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13546,G__13547,G__13548) : instaparse.gll.ordered_alt_full_parse.call(null,G__13546,G__13547,G__13548));

break;
case "alt":
var G__13549 = parser;var G__13550 = index;var G__13551 = tramp;return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13549,G__13550,G__13551) : instaparse.gll.alt_full_parse.call(null,G__13549,G__13550,G__13551));

break;
case "look":
var G__13552 = parser;var G__13553 = index;var G__13554 = tramp;return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(G__13552,G__13553,G__13554) : instaparse.gll.lookahead_full_parse.call(null,G__13552,G__13553,G__13554));

break;
case "nt":
var G__13555 = parser;var G__13556 = index;var G__13557 = tramp;return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(G__13555,G__13556,G__13557) : instaparse.gll.non_terminal_full_parse.call(null,G__13555,G__13556,G__13557));

break;
case "rep":
var G__13558 = parser;var G__13559 = index;var G__13560 = tramp;return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(G__13558,G__13559,G__13560) : instaparse.gll.rep_full_parse.call(null,G__13558,G__13559,G__13560));

break;
case "star":
var G__13561 = parser;var G__13562 = index;var G__13563 = tramp;return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(G__13561,G__13562,G__13563) : instaparse.gll.star_full_parse.call(null,G__13561,G__13562,G__13563));

break;
case "string":
var G__13564 = parser;var G__13565 = index;var G__13566 = tramp;return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(G__13564,G__13565,G__13566) : instaparse.gll.string_full_parse.call(null,G__13564,G__13565,G__13566));

break;
case "regexp":
var G__13567 = parser;var G__13568 = index;var G__13569 = tramp;return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(G__13567,G__13568,G__13569) : instaparse.gll.regexp_full_parse.call(null,G__13567,G__13568,G__13569));

break;
case "plus":
var G__13570 = parser;var G__13571 = index;var G__13572 = tramp;return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(G__13570,G__13571,G__13572) : instaparse.gll.plus_full_parse.call(null,G__13570,G__13571,G__13572));

break;
case "epsilon":
var G__13573 = parser;var G__13574 = index;var G__13575 = tramp;return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(G__13573,G__13574,G__13575) : instaparse.gll.epsilon_full_parse.call(null,G__13573,G__13574,G__13575));

break;
case "string-ci":
var G__13576 = parser;var G__13577 = index;var G__13578 = tramp;return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(G__13576,G__13577,G__13578) : instaparse.gll.string_case_insensitive_full_parse.call(null,G__13576,G__13577,G__13578));

break;
case "opt":
var G__13579 = parser;var G__13580 = index;var G__13581 = tramp;return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(G__13579,G__13580,G__13581) : instaparse.gll.opt_full_parse.call(null,G__13579,G__13580,G__13581));

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
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13584,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13586 = (((k13584 instanceof cljs.core.Keyword))?k13584.fqn:null);switch (G__13586) {
case "reason":
return self__.reason;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13584,else__4024__auto__);

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
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13583){var self__ = this;
var this__4028__auto____$1 = this;var pred__13587 = cljs.core.keyword_identical_QMARK_;var expr__13588 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13590 = cljs.core.constant$keyword$70;var G__13591 = expr__13588;return (pred__13587.cljs$core$IFn$_invoke$arity$2 ? pred__13587.cljs$core$IFn$_invoke$arity$2(G__13590,G__13591) : pred__13587.call(null,G__13590,G__13591));
})()))
{return (new instaparse.gll.Failure(G__13583,self__.reason,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13592 = cljs.core.constant$keyword$73;var G__13593 = expr__13588;return (pred__13587.cljs$core$IFn$_invoke$arity$2 ? pred__13587.cljs$core$IFn$_invoke$arity$2(G__13592,G__13593) : pred__13587.call(null,G__13592,G__13593));
})()))
{return (new instaparse.gll.Failure(self__.index,G__13583,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13583),null));
}
}
});
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13583){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,G__13583,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Failure = (function map__GT_Failure(G__13585){return (new instaparse.gll.Failure(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__13585),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__13585),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13585,cljs.core.constant$keyword$70,cljs.core.array_seq([cljs.core.constant$keyword$73], 0))));
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
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13596,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13598 = (((k13596 instanceof cljs.core.Keyword))?k13596.fqn:null);switch (G__13598) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13596,else__4024__auto__);

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
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13595){var self__ = this;
var this__4028__auto____$1 = this;var pred__13599 = cljs.core.keyword_identical_QMARK_;var expr__13600 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13602 = cljs.core.constant$keyword$66;var G__13603 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13602,G__13603) : pred__13599.call(null,G__13602,G__13603));
})()))
{return (new instaparse.gll.Tramp(G__13595,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13604 = cljs.core.constant$keyword$71;var G__13605 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13604,G__13605) : pred__13599.call(null,G__13604,G__13605));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,G__13595,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13606 = cljs.core.constant$keyword$76;var G__13607 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13606,G__13607) : pred__13599.call(null,G__13606,G__13607));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__13595,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13608 = cljs.core.constant$keyword$77;var G__13609 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13608,G__13609) : pred__13599.call(null,G__13608,G__13609));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__13595,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13610 = cljs.core.constant$keyword$78;var G__13611 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13610,G__13611) : pred__13599.call(null,G__13610,G__13611));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__13595,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13612 = cljs.core.constant$keyword$79;var G__13613 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13612,G__13613) : pred__13599.call(null,G__13612,G__13613));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__13595,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13614 = cljs.core.constant$keyword$80;var G__13615 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13614,G__13615) : pred__13599.call(null,G__13614,G__13615));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__13595,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13616 = cljs.core.constant$keyword$81;var G__13617 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13616,G__13617) : pred__13599.call(null,G__13616,G__13617));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__13595,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13618 = cljs.core.constant$keyword$82;var G__13619 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13618,G__13619) : pred__13599.call(null,G__13618,G__13619));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__13595,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13620 = cljs.core.constant$keyword$83;var G__13621 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : pred__13599.call(null,G__13620,G__13621));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__13595,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13622 = cljs.core.constant$keyword$84;var G__13623 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13622,G__13623) : pred__13599.call(null,G__13622,G__13623));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__13595,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13624 = cljs.core.constant$keyword$85;var G__13625 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13624,G__13625) : pred__13599.call(null,G__13624,G__13625));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__13595,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13626 = cljs.core.constant$keyword$86;var G__13627 = expr__13600;return (pred__13599.cljs$core$IFn$_invoke$arity$2 ? pred__13599.cljs$core$IFn$_invoke$arity$2(G__13626,G__13627) : pred__13599.call(null,G__13626,G__13627));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__13595,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13595),null));
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
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13595){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__13595,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Tramp = (function map__GT_Tramp(G__13597){return (new instaparse.gll.Tramp(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__13597),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__13597),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13597,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$71,cljs.core.constant$keyword$76,cljs.core.constant$keyword$77,cljs.core.constant$keyword$78,cljs.core.constant$keyword$79,cljs.core.constant$keyword$80,cljs.core.constant$keyword$81,cljs.core.constant$keyword$82,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$85,cljs.core.constant$keyword$86], 0))));
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
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13645,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13647 = (((k13645 instanceof cljs.core.Keyword))?k13645.fqn:null);switch (G__13647) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13645,else__4024__auto__);

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
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13644){var self__ = this;
var this__4028__auto____$1 = this;var pred__13648 = cljs.core.keyword_identical_QMARK_;var expr__13649 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13651 = cljs.core.constant$keyword$88;var G__13652 = expr__13649;return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13651,G__13652) : pred__13648.call(null,G__13651,G__13652));
})()))
{return (new instaparse.gll.Node(G__13644,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13653 = cljs.core.constant$keyword$89;var G__13654 = expr__13649;return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13653,G__13654) : pred__13648.call(null,G__13653,G__13654));
})()))
{return (new instaparse.gll.Node(self__.listeners,G__13644,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13655 = cljs.core.constant$keyword$90;var G__13656 = expr__13649;return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13655,G__13656) : pred__13648.call(null,G__13655,G__13656));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__13644,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13657 = cljs.core.constant$keyword$91;var G__13658 = expr__13649;return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13657,G__13658) : pred__13648.call(null,G__13657,G__13658));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__13644,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13644),null));
}
}
}
}
});
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13644){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__13644,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Node = (function map__GT_Node(G__13646){return (new instaparse.gll.Node(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__13646),cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__13646),cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__13646),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__13646),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13646,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91], 0))));
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
return (function (){var G__13661 = result;return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(G__13661) : listener.call(null,G__13661));
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
instaparse.gll.listener_exists_QMARK_ = (function listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13663 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13663) : nodes.call(null,G__13663));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.listeners) > (0));
} else
{return null;
}
});
/**
* Tests whether node already has a listener or full-listener
*/
instaparse.gll.full_listener_exists_QMARK_ = (function full_listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13665 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13665) : nodes.call(null,G__13665));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_listeners) > (0))) || ((cljs.core.count(node.listeners) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a result or full-result
*/
instaparse.gll.result_exists_QMARK_ = (function result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13667 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13667) : nodes.call(null,G__13667));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_results) > (0))) || ((cljs.core.count(node.results) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a full-result
*/
instaparse.gll.full_result_exists_QMARK_ = (function full_result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__13669 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13669) : nodes.call(null,G__13669));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.full_results) > (0));
} else
{return null;
}
});
/**
* Gets node if already exists, otherwise creates one
*/
instaparse.gll.node_get = (function node_get(tramp,node_key){var nodes = tramp.nodes;var temp__4124__auto__ = (function (){var G__13671 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__13671) : nodes.call(null,G__13671));
})();if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;return node;
} else
{var node = instaparse.gll.make_node();tramp.nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.nodes,node_key,node);
return node;
}
});
instaparse.gll.safe_with_meta = (function safe_with_meta(obj,metamap){if((function (){var G__13673 = obj;if(G__13673)
{var bit__4089__auto__ = (G__13673.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4089__auto__) || (G__13673.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__13673.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__13673);
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
instaparse.gll.push_result = (function push_result(tramp,node_key,result){var node = instaparse.gll.node_get(tramp,node_key);var parser = (function (){var G__13685 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13685) : node_key.call(null,G__13685));
})();var result__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.constant$keyword$87,null):result);var result__$2 = (function (){var temp__4124__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser);if(cljs.core.truth_(temp__4124__auto__))
{var reduction_function = temp__4124__auto__;return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,(function (){var G__13686 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13686) : node_key.call(null,G__13686));
})(),cljs.core.constant$keyword$93,cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1));
} else
{return result__$1;
}
})();var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);var results = ((total_QMARK_)?node.full_results:node.results);if(cljs.core.not((function (){var G__13687 = result__$2;return (results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(G__13687) : results.call(null,G__13687));
})()))
{if(total_QMARK_)
{node.full_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_results,result__$2);
} else
{node.results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.results,result__$2);
}
var seq__13688_13696 = cljs.core.seq(node.listeners);var chunk__13689_13697 = null;var count__13690_13698 = (0);var i__13691_13699 = (0);while(true){
if((i__13691_13699 < count__13690_13698))
{var listener_13700 = chunk__13689_13697.cljs$core$IIndexed$_nth$arity$2(null,i__13691_13699);instaparse.gll.push_message(tramp,listener_13700,result__$2);
{
var G__13701 = seq__13688_13696;
var G__13702 = chunk__13689_13697;
var G__13703 = count__13690_13698;
var G__13704 = (i__13691_13699 + (1));
seq__13688_13696 = G__13701;
chunk__13689_13697 = G__13702;
count__13690_13698 = G__13703;
i__13691_13699 = G__13704;
continue;
}
} else
{var temp__4126__auto___13705 = cljs.core.seq(seq__13688_13696);if(temp__4126__auto___13705)
{var seq__13688_13706__$1 = temp__4126__auto___13705;if(cljs.core.chunked_seq_QMARK_(seq__13688_13706__$1))
{var c__4195__auto___13707 = cljs.core.chunk_first(seq__13688_13706__$1);{
var G__13708 = cljs.core.chunk_rest(seq__13688_13706__$1);
var G__13709 = c__4195__auto___13707;
var G__13710 = cljs.core.count(c__4195__auto___13707);
var G__13711 = (0);
seq__13688_13696 = G__13708;
chunk__13689_13697 = G__13709;
count__13690_13698 = G__13710;
i__13691_13699 = G__13711;
continue;
}
} else
{var listener_13712 = cljs.core.first(seq__13688_13706__$1);instaparse.gll.push_message(tramp,listener_13712,result__$2);
{
var G__13713 = cljs.core.next(seq__13688_13706__$1);
var G__13714 = null;
var G__13715 = (0);
var G__13716 = (0);
seq__13688_13696 = G__13713;
chunk__13689_13697 = G__13714;
count__13690_13698 = G__13715;
i__13691_13699 = G__13716;
continue;
}
}
} else
{}
}
break;
}
if(total_QMARK_)
{var seq__13692 = cljs.core.seq(node.full_listeners);var chunk__13693 = null;var count__13694 = (0);var i__13695 = (0);while(true){
if((i__13695 < count__13694))
{var listener = chunk__13693.cljs$core$IIndexed$_nth$arity$2(null,i__13695);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__13717 = seq__13692;
var G__13718 = chunk__13693;
var G__13719 = count__13694;
var G__13720 = (i__13695 + (1));
seq__13692 = G__13717;
chunk__13693 = G__13718;
count__13694 = G__13719;
i__13695 = G__13720;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13692);if(temp__4126__auto__)
{var seq__13692__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13692__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13692__$1);{
var G__13721 = cljs.core.chunk_rest(seq__13692__$1);
var G__13722 = c__4195__auto__;
var G__13723 = cljs.core.count(c__4195__auto__);
var G__13724 = (0);
seq__13692 = G__13721;
chunk__13693 = G__13722;
count__13694 = G__13723;
i__13695 = G__13724;
continue;
}
} else
{var listener = cljs.core.first(seq__13692__$1);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__13725 = cljs.core.next(seq__13692__$1);
var G__13726 = null;
var G__13727 = (0);
var G__13728 = (0);
seq__13692 = G__13725;
chunk__13693 = G__13726;
count__13694 = G__13727;
i__13695 = G__13728;
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
var seq__13739_13749 = cljs.core.seq(node.results);var chunk__13740_13750 = null;var count__13741_13751 = (0);var i__13742_13752 = (0);while(true){
if((i__13742_13752 < count__13741_13751))
{var result_13753 = chunk__13740_13750.cljs$core$IIndexed$_nth$arity$2(null,i__13742_13752);instaparse.gll.push_message(tramp,listener,result_13753);
{
var G__13754 = seq__13739_13749;
var G__13755 = chunk__13740_13750;
var G__13756 = count__13741_13751;
var G__13757 = (i__13742_13752 + (1));
seq__13739_13749 = G__13754;
chunk__13740_13750 = G__13755;
count__13741_13751 = G__13756;
i__13742_13752 = G__13757;
continue;
}
} else
{var temp__4126__auto___13758 = cljs.core.seq(seq__13739_13749);if(temp__4126__auto___13758)
{var seq__13739_13759__$1 = temp__4126__auto___13758;if(cljs.core.chunked_seq_QMARK_(seq__13739_13759__$1))
{var c__4195__auto___13760 = cljs.core.chunk_first(seq__13739_13759__$1);{
var G__13761 = cljs.core.chunk_rest(seq__13739_13759__$1);
var G__13762 = c__4195__auto___13760;
var G__13763 = cljs.core.count(c__4195__auto___13760);
var G__13764 = (0);
seq__13739_13749 = G__13761;
chunk__13740_13750 = G__13762;
count__13741_13751 = G__13763;
i__13742_13752 = G__13764;
continue;
}
} else
{var result_13765 = cljs.core.first(seq__13739_13759__$1);instaparse.gll.push_message(tramp,listener,result_13765);
{
var G__13766 = cljs.core.next(seq__13739_13759__$1);
var G__13767 = null;
var G__13768 = (0);
var G__13769 = (0);
seq__13739_13749 = G__13766;
chunk__13740_13750 = G__13767;
count__13741_13751 = G__13768;
i__13742_13752 = G__13769;
continue;
}
}
} else
{}
}
break;
}
var seq__13743_13770 = cljs.core.seq(node.full_results);var chunk__13744_13771 = null;var count__13745_13772 = (0);var i__13746_13773 = (0);while(true){
if((i__13746_13773 < count__13745_13772))
{var result_13774 = chunk__13744_13771.cljs$core$IIndexed$_nth$arity$2(null,i__13746_13773);instaparse.gll.push_message(tramp,listener,result_13774);
{
var G__13775 = seq__13743_13770;
var G__13776 = chunk__13744_13771;
var G__13777 = count__13745_13772;
var G__13778 = (i__13746_13773 + (1));
seq__13743_13770 = G__13775;
chunk__13744_13771 = G__13776;
count__13745_13772 = G__13777;
i__13746_13773 = G__13778;
continue;
}
} else
{var temp__4126__auto___13779 = cljs.core.seq(seq__13743_13770);if(temp__4126__auto___13779)
{var seq__13743_13780__$1 = temp__4126__auto___13779;if(cljs.core.chunked_seq_QMARK_(seq__13743_13780__$1))
{var c__4195__auto___13781 = cljs.core.chunk_first(seq__13743_13780__$1);{
var G__13782 = cljs.core.chunk_rest(seq__13743_13780__$1);
var G__13783 = c__4195__auto___13781;
var G__13784 = cljs.core.count(c__4195__auto___13781);
var G__13785 = (0);
seq__13743_13770 = G__13782;
chunk__13744_13771 = G__13783;
count__13745_13772 = G__13784;
i__13746_13773 = G__13785;
continue;
}
} else
{var result_13786 = cljs.core.first(seq__13743_13780__$1);instaparse.gll.push_message(tramp,listener,result_13786);
{
var G__13787 = cljs.core.next(seq__13743_13780__$1);
var G__13788 = null;
var G__13789 = (0);
var G__13790 = (0);
seq__13743_13770 = G__13787;
chunk__13744_13771 = G__13788;
count__13745_13772 = G__13789;
i__13746_13773 = G__13790;
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
return (function (){return instaparse.gll._parse((function (){var G__13747 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13747) : node_key.call(null,G__13747));
})(),(function (){var G__13748 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13748) : node_key.call(null,G__13748));
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
var seq__13797_13803 = cljs.core.seq(node.full_results);var chunk__13798_13804 = null;var count__13799_13805 = (0);var i__13800_13806 = (0);while(true){
if((i__13800_13806 < count__13799_13805))
{var result_13807 = chunk__13798_13804.cljs$core$IIndexed$_nth$arity$2(null,i__13800_13806);instaparse.gll.push_message(tramp,listener,result_13807);
{
var G__13808 = seq__13797_13803;
var G__13809 = chunk__13798_13804;
var G__13810 = count__13799_13805;
var G__13811 = (i__13800_13806 + (1));
seq__13797_13803 = G__13808;
chunk__13798_13804 = G__13809;
count__13799_13805 = G__13810;
i__13800_13806 = G__13811;
continue;
}
} else
{var temp__4126__auto___13812 = cljs.core.seq(seq__13797_13803);if(temp__4126__auto___13812)
{var seq__13797_13813__$1 = temp__4126__auto___13812;if(cljs.core.chunked_seq_QMARK_(seq__13797_13813__$1))
{var c__4195__auto___13814 = cljs.core.chunk_first(seq__13797_13813__$1);{
var G__13815 = cljs.core.chunk_rest(seq__13797_13813__$1);
var G__13816 = c__4195__auto___13814;
var G__13817 = cljs.core.count(c__4195__auto___13814);
var G__13818 = (0);
seq__13797_13803 = G__13815;
chunk__13798_13804 = G__13816;
count__13799_13805 = G__13817;
i__13800_13806 = G__13818;
continue;
}
} else
{var result_13819 = cljs.core.first(seq__13797_13813__$1);instaparse.gll.push_message(tramp,listener,result_13819);
{
var G__13820 = cljs.core.next(seq__13797_13813__$1);
var G__13821 = null;
var G__13822 = (0);
var G__13823 = (0);
seq__13797_13803 = G__13820;
chunk__13798_13804 = G__13821;
count__13799_13805 = G__13822;
i__13800_13806 = G__13823;
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
return (function (){return instaparse.gll._full_parse((function (){var G__13801 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13801) : node_key.call(null,G__13801));
})(),(function (){var G__13802 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13802) : node_key.call(null,G__13802));
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
instaparse.gll.fail = (function fail(tramp,node_key,index,reason){tramp.failure = (function (failure){var current_index = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(failure);var G__13830 = cljs.core.compare(index,current_index);switch (G__13830) {
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
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__13831 = tramp.node_builder;var G__13832 = cljs.core.constant$keyword$94;var G__13833 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tramp.text,index);var G__13834 = index;var G__13835 = cljs.core.count(tramp.text);return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__13831,G__13832,G__13833,G__13834,G__13835) : instaparse.gll.build_node_with_meta.call(null,G__13831,G__13832,G__13833,G__13834,G__13835));
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
var G__13841 = tramp;
var G__13842 = found_result_QMARK_;
tramp = G__13841;
found_result_QMARK_ = G__13842;
continue;
}
} else
{if((cljs.core.count(tramp.negative_listeners) > (0)))
{var listener = cljs.core.peek(tramp.negative_listeners);(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));
tramp.negative_listeners = cljs.core.pop(tramp.negative_listeners);
{
var G__13843 = tramp;
var G__13844 = found_result_QMARK_;
tramp = G__13843;
found_result_QMARK_ = G__13844;
continue;
}
} else
{if(cljs.core.truth_(found_result_QMARK_))
{var next_stack = tramp.next_stack;tramp.stack = next_stack;
tramp.next_stack = cljs.core.PersistentVector.EMPTY;
tramp.generation = (tramp.generation + (1));
{
var G__13845 = tramp;
var G__13846 = null;
tramp = G__13845;
found_result_QMARK_ = G__13846;
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
instaparse.gll.LookListener = (function LookListener(node_key,tramp){return (function (result){return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(function (){var G__13848 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__13848) : node_key.call(null,G__13848));
})()));
});
});
instaparse.gll.CatListener = (function CatListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__13854 = result;var map__13854__$1 = ((cljs.core.seq_QMARK_(map__13854))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13854):map__13854);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core.seq(parser_sequence))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),CatListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function CatFullListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__13864 = result;var map__13864__$1 = ((cljs.core.seq_QMARK_(map__13864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13864):map__13864);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(instaparse.reduction.singleton_QMARK_(parser_sequence))
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
instaparse.gll.PlusListener = (function PlusListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__13871 = result;var map__13871__$1 = ((cljs.core.seq_QMARK_(map__13871))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13871):map__13871);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13871__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13871__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
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
instaparse.gll.PlusFullListener = (function PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__13878 = result;var map__13878__$1 = ((cljs.core.seq_QMARK_(map__13878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13878):map__13878);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
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
instaparse.gll.RepListener = (function RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__13887 = result;var map__13887__$1 = ((cljs.core.seq_QMARK_(map__13887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13887):map__13887);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n)))
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
instaparse.gll.RepFullListener = (function RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__13896 = result;var map__13896__$1 = ((cljs.core.seq_QMARK_(map__13896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13896):map__13896);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13896__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13896__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
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
var empty_cat_result_13897 = instaparse.auto_flatten_seq.EMPTY;instaparse.gll.cat_parse = ((function (empty_cat_result_13897){
return (function cat_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(empty_cat_result_13897,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13897))
;
instaparse.gll.cat_full_parse = ((function (empty_cat_result_13897){
return (function cat_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(empty_cat_result_13897,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13897))
;
instaparse.gll.plus_parse = ((function (empty_cat_result_13897){
return (function plus_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13897,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13897))
;
instaparse.gll.plus_full_parse = ((function (empty_cat_result_13897){
return (function plus_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13897,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_13897))
;
instaparse.gll.rep_parse = ((function (empty_cat_result_13897){
return (function rep_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13897,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_13897,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13897))
;
instaparse.gll.rep_full_parse = ((function (empty_cat_result_13897){
return (function rep_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13897,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_13897,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13897))
;
instaparse.gll.star_parse = ((function (empty_cat_result_13897){
return (function star_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_13897,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});})(empty_cat_result_13897))
;
instaparse.gll.star_full_parse = ((function (empty_cat_result_13897){
return (function star_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_13897,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_13897))
;
instaparse.gll.alt_parse = (function alt_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__13902 = cljs.core.seq(parsers);var chunk__13903 = null;var count__13904 = (0);var i__13905 = (0);while(true){
if((i__13905 < count__13904))
{var parser = chunk__13903.cljs$core$IIndexed$_nth$arity$2(null,i__13905);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13906 = seq__13902;
var G__13907 = chunk__13903;
var G__13908 = count__13904;
var G__13909 = (i__13905 + (1));
seq__13902 = G__13906;
chunk__13903 = G__13907;
count__13904 = G__13908;
i__13905 = G__13909;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13902);if(temp__4126__auto__)
{var seq__13902__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13902__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13902__$1);{
var G__13910 = cljs.core.chunk_rest(seq__13902__$1);
var G__13911 = c__4195__auto__;
var G__13912 = cljs.core.count(c__4195__auto__);
var G__13913 = (0);
seq__13902 = G__13910;
chunk__13903 = G__13911;
count__13904 = G__13912;
i__13905 = G__13913;
continue;
}
} else
{var parser = cljs.core.first(seq__13902__$1);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13914 = cljs.core.next(seq__13902__$1);
var G__13915 = null;
var G__13916 = (0);
var G__13917 = (0);
seq__13902 = G__13914;
chunk__13903 = G__13915;
count__13904 = G__13916;
i__13905 = G__13917;
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
instaparse.gll.alt_full_parse = (function alt_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__13922 = cljs.core.seq(parsers);var chunk__13923 = null;var count__13924 = (0);var i__13925 = (0);while(true){
if((i__13925 < count__13924))
{var parser = chunk__13923.cljs$core$IIndexed$_nth$arity$2(null,i__13925);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13926 = seq__13922;
var G__13927 = chunk__13923;
var G__13928 = count__13924;
var G__13929 = (i__13925 + (1));
seq__13922 = G__13926;
chunk__13923 = G__13927;
count__13924 = G__13928;
i__13925 = G__13929;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13922);if(temp__4126__auto__)
{var seq__13922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13922__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__13922__$1);{
var G__13930 = cljs.core.chunk_rest(seq__13922__$1);
var G__13931 = c__4195__auto__;
var G__13932 = cljs.core.count(c__4195__auto__);
var G__13933 = (0);
seq__13922 = G__13930;
chunk__13923 = G__13931;
count__13924 = G__13932;
i__13925 = G__13933;
continue;
}
} else
{var parser = cljs.core.first(seq__13922__$1);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__13934 = cljs.core.next(seq__13922__$1);
var G__13935 = null;
var G__13936 = (0);
var G__13937 = (0);
seq__13922 = G__13934;
chunk__13923 = G__13935;
count__13924 = G__13936;
i__13925 = G__13937;
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
instaparse.gll.build_node_with_meta = (function build_node_with_meta(node_builder,tag,content,start,end){return cljs.core.with_meta((function (){var G__13940 = tag;var G__13941 = content;return (node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(G__13940,G__13941) : node_builder.call(null,G__13940,G__13941));
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
