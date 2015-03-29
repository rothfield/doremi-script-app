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
instaparse.gll.ISegment = (function (){var obj12270 = {};return obj12270;
})();
instaparse.gll.subsegment = (function subsegment(this$,start_index,end_index_minus_one){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.instaparse$gll$ISegment$subsegment$arity$3;
} else
{return and__3413__auto__;
}
})())
{return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.subsegment[(function (){var G__12274 = x__4062__auto__;return goog.typeOf(G__12274);
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
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.toString[(function (){var G__12278 = x__4062__auto__;return goog.typeOf(G__12278);
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
instaparse.gll._parse = (function _parse(parser,index,tramp){var G__12322 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__12322) {
case "neg":
var G__12323 = parser;var G__12324 = index;var G__12325 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__12323,G__12324,G__12325) : instaparse.gll.negative_lookahead_parse.call(null,G__12323,G__12324,G__12325));

break;
case "cat":
var G__12326 = parser;var G__12327 = index;var G__12328 = tramp;return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(G__12326,G__12327,G__12328) : instaparse.gll.cat_parse.call(null,G__12326,G__12327,G__12328));

break;
case "ord":
var G__12329 = parser;var G__12330 = index;var G__12331 = tramp;return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(G__12329,G__12330,G__12331) : instaparse.gll.ordered_alt_parse.call(null,G__12329,G__12330,G__12331));

break;
case "alt":
var G__12332 = parser;var G__12333 = index;var G__12334 = tramp;return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(G__12332,G__12333,G__12334) : instaparse.gll.alt_parse.call(null,G__12332,G__12333,G__12334));

break;
case "look":
var G__12335 = parser;var G__12336 = index;var G__12337 = tramp;return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__12335,G__12336,G__12337) : instaparse.gll.lookahead_parse.call(null,G__12335,G__12336,G__12337));

break;
case "nt":
var G__12338 = parser;var G__12339 = index;var G__12340 = tramp;return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(G__12338,G__12339,G__12340) : instaparse.gll.non_terminal_parse.call(null,G__12338,G__12339,G__12340));

break;
case "rep":
var G__12341 = parser;var G__12342 = index;var G__12343 = tramp;return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(G__12341,G__12342,G__12343) : instaparse.gll.rep_parse.call(null,G__12341,G__12342,G__12343));

break;
case "star":
var G__12344 = parser;var G__12345 = index;var G__12346 = tramp;return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(G__12344,G__12345,G__12346) : instaparse.gll.star_parse.call(null,G__12344,G__12345,G__12346));

break;
case "string":
var G__12347 = parser;var G__12348 = index;var G__12349 = tramp;return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(G__12347,G__12348,G__12349) : instaparse.gll.string_parse.call(null,G__12347,G__12348,G__12349));

break;
case "regexp":
var G__12350 = parser;var G__12351 = index;var G__12352 = tramp;return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(G__12350,G__12351,G__12352) : instaparse.gll.regexp_parse.call(null,G__12350,G__12351,G__12352));

break;
case "plus":
var G__12353 = parser;var G__12354 = index;var G__12355 = tramp;return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(G__12353,G__12354,G__12355) : instaparse.gll.plus_parse.call(null,G__12353,G__12354,G__12355));

break;
case "epsilon":
var G__12356 = parser;var G__12357 = index;var G__12358 = tramp;return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(G__12356,G__12357,G__12358) : instaparse.gll.epsilon_parse.call(null,G__12356,G__12357,G__12358));

break;
case "string-ci":
var G__12359 = parser;var G__12360 = index;var G__12361 = tramp;return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(G__12359,G__12360,G__12361) : instaparse.gll.string_case_insensitive_parse.call(null,G__12359,G__12360,G__12361));

break;
case "opt":
var G__12362 = parser;var G__12363 = index;var G__12364 = tramp;return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(G__12362,G__12363,G__12364) : instaparse.gll.opt_parse.call(null,G__12362,G__12363,G__12364));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.gll._full_parse = (function _full_parse(parser,index,tramp){var G__12409 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__12409) {
case "neg":
var G__12410 = parser;var G__12411 = index;var G__12412 = tramp;return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(G__12410,G__12411,G__12412) : instaparse.gll.negative_lookahead_parse.call(null,G__12410,G__12411,G__12412));

break;
case "cat":
var G__12413 = parser;var G__12414 = index;var G__12415 = tramp;return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(G__12413,G__12414,G__12415) : instaparse.gll.cat_full_parse.call(null,G__12413,G__12414,G__12415));

break;
case "ord":
var G__12416 = parser;var G__12417 = index;var G__12418 = tramp;return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__12416,G__12417,G__12418) : instaparse.gll.ordered_alt_full_parse.call(null,G__12416,G__12417,G__12418));

break;
case "alt":
var G__12419 = parser;var G__12420 = index;var G__12421 = tramp;return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(G__12419,G__12420,G__12421) : instaparse.gll.alt_full_parse.call(null,G__12419,G__12420,G__12421));

break;
case "look":
var G__12422 = parser;var G__12423 = index;var G__12424 = tramp;return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(G__12422,G__12423,G__12424) : instaparse.gll.lookahead_full_parse.call(null,G__12422,G__12423,G__12424));

break;
case "nt":
var G__12425 = parser;var G__12426 = index;var G__12427 = tramp;return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(G__12425,G__12426,G__12427) : instaparse.gll.non_terminal_full_parse.call(null,G__12425,G__12426,G__12427));

break;
case "rep":
var G__12428 = parser;var G__12429 = index;var G__12430 = tramp;return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(G__12428,G__12429,G__12430) : instaparse.gll.rep_full_parse.call(null,G__12428,G__12429,G__12430));

break;
case "star":
var G__12431 = parser;var G__12432 = index;var G__12433 = tramp;return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(G__12431,G__12432,G__12433) : instaparse.gll.star_full_parse.call(null,G__12431,G__12432,G__12433));

break;
case "string":
var G__12434 = parser;var G__12435 = index;var G__12436 = tramp;return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(G__12434,G__12435,G__12436) : instaparse.gll.string_full_parse.call(null,G__12434,G__12435,G__12436));

break;
case "regexp":
var G__12437 = parser;var G__12438 = index;var G__12439 = tramp;return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(G__12437,G__12438,G__12439) : instaparse.gll.regexp_full_parse.call(null,G__12437,G__12438,G__12439));

break;
case "plus":
var G__12440 = parser;var G__12441 = index;var G__12442 = tramp;return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(G__12440,G__12441,G__12442) : instaparse.gll.plus_full_parse.call(null,G__12440,G__12441,G__12442));

break;
case "epsilon":
var G__12443 = parser;var G__12444 = index;var G__12445 = tramp;return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(G__12443,G__12444,G__12445) : instaparse.gll.epsilon_full_parse.call(null,G__12443,G__12444,G__12445));

break;
case "string-ci":
var G__12446 = parser;var G__12447 = index;var G__12448 = tramp;return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(G__12446,G__12447,G__12448) : instaparse.gll.string_case_insensitive_full_parse.call(null,G__12446,G__12447,G__12448));

break;
case "opt":
var G__12449 = parser;var G__12450 = index;var G__12451 = tramp;return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(G__12449,G__12450,G__12451) : instaparse.gll.opt_full_parse.call(null,G__12449,G__12450,G__12451));

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
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k12454,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__12456 = (((k12454 instanceof cljs.core.Keyword))?k12454.fqn:null);switch (G__12456) {
case "reason":
return self__.reason;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12454,else__4024__auto__);

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
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__12453){var self__ = this;
var this__4028__auto____$1 = this;var pred__12457 = cljs.core.keyword_identical_QMARK_;var expr__12458 = k__4029__auto__;if(cljs.core.truth_((function (){var G__12460 = cljs.core.constant$keyword$70;var G__12461 = expr__12458;return (pred__12457.cljs$core$IFn$_invoke$arity$2 ? pred__12457.cljs$core$IFn$_invoke$arity$2(G__12460,G__12461) : pred__12457.call(null,G__12460,G__12461));
})()))
{return (new instaparse.gll.Failure(G__12453,self__.reason,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12462 = cljs.core.constant$keyword$73;var G__12463 = expr__12458;return (pred__12457.cljs$core$IFn$_invoke$arity$2 ? pred__12457.cljs$core$IFn$_invoke$arity$2(G__12462,G__12463) : pred__12457.call(null,G__12462,G__12463));
})()))
{return (new instaparse.gll.Failure(self__.index,G__12453,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__12453),null));
}
}
});
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__12453){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,G__12453,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Failure = (function map__GT_Failure(G__12455){return (new instaparse.gll.Failure(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__12455),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__12455),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12455,cljs.core.constant$keyword$70,cljs.core.array_seq([cljs.core.constant$keyword$73], 0))));
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
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k12466,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__12468 = (((k12466 instanceof cljs.core.Keyword))?k12466.fqn:null);switch (G__12468) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12466,else__4024__auto__);

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
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__12465){var self__ = this;
var this__4028__auto____$1 = this;var pred__12469 = cljs.core.keyword_identical_QMARK_;var expr__12470 = k__4029__auto__;if(cljs.core.truth_((function (){var G__12472 = cljs.core.constant$keyword$66;var G__12473 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12472,G__12473) : pred__12469.call(null,G__12472,G__12473));
})()))
{return (new instaparse.gll.Tramp(G__12465,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12474 = cljs.core.constant$keyword$71;var G__12475 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12474,G__12475) : pred__12469.call(null,G__12474,G__12475));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,G__12465,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12476 = cljs.core.constant$keyword$76;var G__12477 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12476,G__12477) : pred__12469.call(null,G__12476,G__12477));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__12465,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12478 = cljs.core.constant$keyword$77;var G__12479 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12478,G__12479) : pred__12469.call(null,G__12478,G__12479));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__12465,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12480 = cljs.core.constant$keyword$78;var G__12481 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12480,G__12481) : pred__12469.call(null,G__12480,G__12481));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__12465,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12482 = cljs.core.constant$keyword$79;var G__12483 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12482,G__12483) : pred__12469.call(null,G__12482,G__12483));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__12465,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12484 = cljs.core.constant$keyword$80;var G__12485 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12484,G__12485) : pred__12469.call(null,G__12484,G__12485));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__12465,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12486 = cljs.core.constant$keyword$81;var G__12487 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12486,G__12487) : pred__12469.call(null,G__12486,G__12487));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__12465,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12488 = cljs.core.constant$keyword$82;var G__12489 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12488,G__12489) : pred__12469.call(null,G__12488,G__12489));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__12465,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12490 = cljs.core.constant$keyword$83;var G__12491 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12490,G__12491) : pred__12469.call(null,G__12490,G__12491));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__12465,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12492 = cljs.core.constant$keyword$84;var G__12493 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12492,G__12493) : pred__12469.call(null,G__12492,G__12493));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__12465,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12494 = cljs.core.constant$keyword$85;var G__12495 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12494,G__12495) : pred__12469.call(null,G__12494,G__12495));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__12465,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12496 = cljs.core.constant$keyword$86;var G__12497 = expr__12470;return (pred__12469.cljs$core$IFn$_invoke$arity$2 ? pred__12469.cljs$core$IFn$_invoke$arity$2(G__12496,G__12497) : pred__12469.call(null,G__12496,G__12497));
})()))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__12465,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__12465),null));
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
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__12465){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__12465,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Tramp = (function map__GT_Tramp(G__12467){return (new instaparse.gll.Tramp(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__12467),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__12467),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12467,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$71,cljs.core.constant$keyword$76,cljs.core.constant$keyword$77,cljs.core.constant$keyword$78,cljs.core.constant$keyword$79,cljs.core.constant$keyword$80,cljs.core.constant$keyword$81,cljs.core.constant$keyword$82,cljs.core.constant$keyword$83,cljs.core.constant$keyword$84,cljs.core.constant$keyword$85,cljs.core.constant$keyword$86], 0))));
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
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k12515,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__12517 = (((k12515 instanceof cljs.core.Keyword))?k12515.fqn:null);switch (G__12517) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12515,else__4024__auto__);

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
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__12514){var self__ = this;
var this__4028__auto____$1 = this;var pred__12518 = cljs.core.keyword_identical_QMARK_;var expr__12519 = k__4029__auto__;if(cljs.core.truth_((function (){var G__12521 = cljs.core.constant$keyword$88;var G__12522 = expr__12519;return (pred__12518.cljs$core$IFn$_invoke$arity$2 ? pred__12518.cljs$core$IFn$_invoke$arity$2(G__12521,G__12522) : pred__12518.call(null,G__12521,G__12522));
})()))
{return (new instaparse.gll.Node(G__12514,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12523 = cljs.core.constant$keyword$89;var G__12524 = expr__12519;return (pred__12518.cljs$core$IFn$_invoke$arity$2 ? pred__12518.cljs$core$IFn$_invoke$arity$2(G__12523,G__12524) : pred__12518.call(null,G__12523,G__12524));
})()))
{return (new instaparse.gll.Node(self__.listeners,G__12514,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12525 = cljs.core.constant$keyword$90;var G__12526 = expr__12519;return (pred__12518.cljs$core$IFn$_invoke$arity$2 ? pred__12518.cljs$core$IFn$_invoke$arity$2(G__12525,G__12526) : pred__12518.call(null,G__12525,G__12526));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__12514,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__12527 = cljs.core.constant$keyword$91;var G__12528 = expr__12519;return (pred__12518.cljs$core$IFn$_invoke$arity$2 ? pred__12518.cljs$core$IFn$_invoke$arity$2(G__12527,G__12528) : pred__12518.call(null,G__12527,G__12528));
})()))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__12514,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__12514),null));
}
}
}
}
});
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__12514){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__12514,self__.__extmap,self__.__hash));
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
instaparse.gll.map__GT_Node = (function map__GT_Node(G__12516){return (new instaparse.gll.Node(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__12516),cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__12516),cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__12516),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__12516),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12516,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91], 0))));
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
return (function (){var G__12531 = result;return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(G__12531) : listener.call(null,G__12531));
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
instaparse.gll.listener_exists_QMARK_ = (function listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__12533 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__12533) : nodes.call(null,G__12533));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.listeners) > (0));
} else
{return null;
}
});
/**
* Tests whether node already has a listener or full-listener
*/
instaparse.gll.full_listener_exists_QMARK_ = (function full_listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__12535 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__12535) : nodes.call(null,G__12535));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_listeners) > (0))) || ((cljs.core.count(node.listeners) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a result or full-result
*/
instaparse.gll.result_exists_QMARK_ = (function result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__12537 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__12537) : nodes.call(null,G__12537));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count(node.full_results) > (0))) || ((cljs.core.count(node.results) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a full-result
*/
instaparse.gll.full_result_exists_QMARK_ = (function full_result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = (function (){var G__12539 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__12539) : nodes.call(null,G__12539));
})();if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count(node.full_results) > (0));
} else
{return null;
}
});
/**
* Gets node if already exists, otherwise creates one
*/
instaparse.gll.node_get = (function node_get(tramp,node_key){var nodes = tramp.nodes;var temp__4124__auto__ = (function (){var G__12541 = node_key;return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__12541) : nodes.call(null,G__12541));
})();if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;return node;
} else
{var node = instaparse.gll.make_node();tramp.nodes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tramp.nodes,node_key,node);
return node;
}
});
instaparse.gll.safe_with_meta = (function safe_with_meta(obj,metamap){if((function (){var G__12543 = obj;if(G__12543)
{var bit__4089__auto__ = (G__12543.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4089__auto__) || (G__12543.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__12543.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12543);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12543);
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
instaparse.gll.push_result = (function push_result(tramp,node_key,result){var node = instaparse.gll.node_get(tramp,node_key);var parser = (function (){var G__12555 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12555) : node_key.call(null,G__12555));
})();var result__$1 = (cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.constant$keyword$87,null):result);var result__$2 = (function (){var temp__4124__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(parser);if(cljs.core.truth_(temp__4124__auto__))
{var reduction_function = temp__4124__auto__;return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,(function (){var G__12556 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12556) : node_key.call(null,G__12556));
})(),cljs.core.constant$keyword$93,cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(result__$1));
} else
{return result__$1;
}
})();var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);var results = ((total_QMARK_)?node.full_results:node.results);if(cljs.core.not((function (){var G__12557 = result__$2;return (results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(G__12557) : results.call(null,G__12557));
})()))
{if(total_QMARK_)
{node.full_results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.full_results,result__$2);
} else
{node.results = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node.results,result__$2);
}
var seq__12558_12566 = cljs.core.seq(node.listeners);var chunk__12559_12567 = null;var count__12560_12568 = (0);var i__12561_12569 = (0);while(true){
if((i__12561_12569 < count__12560_12568))
{var listener_12570 = chunk__12559_12567.cljs$core$IIndexed$_nth$arity$2(null,i__12561_12569);instaparse.gll.push_message(tramp,listener_12570,result__$2);
{
var G__12571 = seq__12558_12566;
var G__12572 = chunk__12559_12567;
var G__12573 = count__12560_12568;
var G__12574 = (i__12561_12569 + (1));
seq__12558_12566 = G__12571;
chunk__12559_12567 = G__12572;
count__12560_12568 = G__12573;
i__12561_12569 = G__12574;
continue;
}
} else
{var temp__4126__auto___12575 = cljs.core.seq(seq__12558_12566);if(temp__4126__auto___12575)
{var seq__12558_12576__$1 = temp__4126__auto___12575;if(cljs.core.chunked_seq_QMARK_(seq__12558_12576__$1))
{var c__4195__auto___12577 = cljs.core.chunk_first(seq__12558_12576__$1);{
var G__12578 = cljs.core.chunk_rest(seq__12558_12576__$1);
var G__12579 = c__4195__auto___12577;
var G__12580 = cljs.core.count(c__4195__auto___12577);
var G__12581 = (0);
seq__12558_12566 = G__12578;
chunk__12559_12567 = G__12579;
count__12560_12568 = G__12580;
i__12561_12569 = G__12581;
continue;
}
} else
{var listener_12582 = cljs.core.first(seq__12558_12576__$1);instaparse.gll.push_message(tramp,listener_12582,result__$2);
{
var G__12583 = cljs.core.next(seq__12558_12576__$1);
var G__12584 = null;
var G__12585 = (0);
var G__12586 = (0);
seq__12558_12566 = G__12583;
chunk__12559_12567 = G__12584;
count__12560_12568 = G__12585;
i__12561_12569 = G__12586;
continue;
}
}
} else
{}
}
break;
}
if(total_QMARK_)
{var seq__12562 = cljs.core.seq(node.full_listeners);var chunk__12563 = null;var count__12564 = (0);var i__12565 = (0);while(true){
if((i__12565 < count__12564))
{var listener = chunk__12563.cljs$core$IIndexed$_nth$arity$2(null,i__12565);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__12587 = seq__12562;
var G__12588 = chunk__12563;
var G__12589 = count__12564;
var G__12590 = (i__12565 + (1));
seq__12562 = G__12587;
chunk__12563 = G__12588;
count__12564 = G__12589;
i__12565 = G__12590;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12562);if(temp__4126__auto__)
{var seq__12562__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12562__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12562__$1);{
var G__12591 = cljs.core.chunk_rest(seq__12562__$1);
var G__12592 = c__4195__auto__;
var G__12593 = cljs.core.count(c__4195__auto__);
var G__12594 = (0);
seq__12562 = G__12591;
chunk__12563 = G__12592;
count__12564 = G__12593;
i__12565 = G__12594;
continue;
}
} else
{var listener = cljs.core.first(seq__12562__$1);instaparse.gll.push_message(tramp,listener,result__$2);
{
var G__12595 = cljs.core.next(seq__12562__$1);
var G__12596 = null;
var G__12597 = (0);
var G__12598 = (0);
seq__12562 = G__12595;
chunk__12563 = G__12596;
count__12564 = G__12597;
i__12565 = G__12598;
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
var seq__12609_12619 = cljs.core.seq(node.results);var chunk__12610_12620 = null;var count__12611_12621 = (0);var i__12612_12622 = (0);while(true){
if((i__12612_12622 < count__12611_12621))
{var result_12623 = chunk__12610_12620.cljs$core$IIndexed$_nth$arity$2(null,i__12612_12622);instaparse.gll.push_message(tramp,listener,result_12623);
{
var G__12624 = seq__12609_12619;
var G__12625 = chunk__12610_12620;
var G__12626 = count__12611_12621;
var G__12627 = (i__12612_12622 + (1));
seq__12609_12619 = G__12624;
chunk__12610_12620 = G__12625;
count__12611_12621 = G__12626;
i__12612_12622 = G__12627;
continue;
}
} else
{var temp__4126__auto___12628 = cljs.core.seq(seq__12609_12619);if(temp__4126__auto___12628)
{var seq__12609_12629__$1 = temp__4126__auto___12628;if(cljs.core.chunked_seq_QMARK_(seq__12609_12629__$1))
{var c__4195__auto___12630 = cljs.core.chunk_first(seq__12609_12629__$1);{
var G__12631 = cljs.core.chunk_rest(seq__12609_12629__$1);
var G__12632 = c__4195__auto___12630;
var G__12633 = cljs.core.count(c__4195__auto___12630);
var G__12634 = (0);
seq__12609_12619 = G__12631;
chunk__12610_12620 = G__12632;
count__12611_12621 = G__12633;
i__12612_12622 = G__12634;
continue;
}
} else
{var result_12635 = cljs.core.first(seq__12609_12629__$1);instaparse.gll.push_message(tramp,listener,result_12635);
{
var G__12636 = cljs.core.next(seq__12609_12629__$1);
var G__12637 = null;
var G__12638 = (0);
var G__12639 = (0);
seq__12609_12619 = G__12636;
chunk__12610_12620 = G__12637;
count__12611_12621 = G__12638;
i__12612_12622 = G__12639;
continue;
}
}
} else
{}
}
break;
}
var seq__12613_12640 = cljs.core.seq(node.full_results);var chunk__12614_12641 = null;var count__12615_12642 = (0);var i__12616_12643 = (0);while(true){
if((i__12616_12643 < count__12615_12642))
{var result_12644 = chunk__12614_12641.cljs$core$IIndexed$_nth$arity$2(null,i__12616_12643);instaparse.gll.push_message(tramp,listener,result_12644);
{
var G__12645 = seq__12613_12640;
var G__12646 = chunk__12614_12641;
var G__12647 = count__12615_12642;
var G__12648 = (i__12616_12643 + (1));
seq__12613_12640 = G__12645;
chunk__12614_12641 = G__12646;
count__12615_12642 = G__12647;
i__12616_12643 = G__12648;
continue;
}
} else
{var temp__4126__auto___12649 = cljs.core.seq(seq__12613_12640);if(temp__4126__auto___12649)
{var seq__12613_12650__$1 = temp__4126__auto___12649;if(cljs.core.chunked_seq_QMARK_(seq__12613_12650__$1))
{var c__4195__auto___12651 = cljs.core.chunk_first(seq__12613_12650__$1);{
var G__12652 = cljs.core.chunk_rest(seq__12613_12650__$1);
var G__12653 = c__4195__auto___12651;
var G__12654 = cljs.core.count(c__4195__auto___12651);
var G__12655 = (0);
seq__12613_12640 = G__12652;
chunk__12614_12641 = G__12653;
count__12615_12642 = G__12654;
i__12616_12643 = G__12655;
continue;
}
} else
{var result_12656 = cljs.core.first(seq__12613_12650__$1);instaparse.gll.push_message(tramp,listener,result_12656);
{
var G__12657 = cljs.core.next(seq__12613_12650__$1);
var G__12658 = null;
var G__12659 = (0);
var G__12660 = (0);
seq__12613_12640 = G__12657;
chunk__12614_12641 = G__12658;
count__12615_12642 = G__12659;
i__12616_12643 = G__12660;
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
return (function (){return instaparse.gll._parse((function (){var G__12617 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12617) : node_key.call(null,G__12617));
})(),(function (){var G__12618 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12618) : node_key.call(null,G__12618));
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
var seq__12667_12673 = cljs.core.seq(node.full_results);var chunk__12668_12674 = null;var count__12669_12675 = (0);var i__12670_12676 = (0);while(true){
if((i__12670_12676 < count__12669_12675))
{var result_12677 = chunk__12668_12674.cljs$core$IIndexed$_nth$arity$2(null,i__12670_12676);instaparse.gll.push_message(tramp,listener,result_12677);
{
var G__12678 = seq__12667_12673;
var G__12679 = chunk__12668_12674;
var G__12680 = count__12669_12675;
var G__12681 = (i__12670_12676 + (1));
seq__12667_12673 = G__12678;
chunk__12668_12674 = G__12679;
count__12669_12675 = G__12680;
i__12670_12676 = G__12681;
continue;
}
} else
{var temp__4126__auto___12682 = cljs.core.seq(seq__12667_12673);if(temp__4126__auto___12682)
{var seq__12667_12683__$1 = temp__4126__auto___12682;if(cljs.core.chunked_seq_QMARK_(seq__12667_12683__$1))
{var c__4195__auto___12684 = cljs.core.chunk_first(seq__12667_12683__$1);{
var G__12685 = cljs.core.chunk_rest(seq__12667_12683__$1);
var G__12686 = c__4195__auto___12684;
var G__12687 = cljs.core.count(c__4195__auto___12684);
var G__12688 = (0);
seq__12667_12673 = G__12685;
chunk__12668_12674 = G__12686;
count__12669_12675 = G__12687;
i__12670_12676 = G__12688;
continue;
}
} else
{var result_12689 = cljs.core.first(seq__12667_12683__$1);instaparse.gll.push_message(tramp,listener,result_12689);
{
var G__12690 = cljs.core.next(seq__12667_12683__$1);
var G__12691 = null;
var G__12692 = (0);
var G__12693 = (0);
seq__12667_12673 = G__12690;
chunk__12668_12674 = G__12691;
count__12669_12675 = G__12692;
i__12670_12676 = G__12693;
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
return (function (){return instaparse.gll._full_parse((function (){var G__12671 = (1);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12671) : node_key.call(null,G__12671));
})(),(function (){var G__12672 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12672) : node_key.call(null,G__12672));
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
instaparse.gll.fail = (function fail(tramp,node_key,index,reason){tramp.failure = (function (failure){var current_index = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(failure);var G__12700 = cljs.core.compare(index,current_index);switch (G__12700) {
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
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__12701 = tramp.node_builder;var G__12702 = cljs.core.constant$keyword$94;var G__12703 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tramp.text,index);var G__12704 = index;var G__12705 = cljs.core.count(tramp.text);return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__12701,G__12702,G__12703,G__12704,G__12705) : instaparse.gll.build_node_with_meta.call(null,G__12701,G__12702,G__12703,G__12704,G__12705));
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
var G__12711 = tramp;
var G__12712 = found_result_QMARK_;
tramp = G__12711;
found_result_QMARK_ = G__12712;
continue;
}
} else
{if((cljs.core.count(tramp.negative_listeners) > (0)))
{var listener = cljs.core.peek(tramp.negative_listeners);(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));
tramp.negative_listeners = cljs.core.pop(tramp.negative_listeners);
{
var G__12713 = tramp;
var G__12714 = found_result_QMARK_;
tramp = G__12713;
found_result_QMARK_ = G__12714;
continue;
}
} else
{if(cljs.core.truth_(found_result_QMARK_))
{var next_stack = tramp.next_stack;tramp.stack = next_stack;
tramp.next_stack = cljs.core.PersistentVector.EMPTY;
tramp.generation = (tramp.generation + (1));
{
var G__12715 = tramp;
var G__12716 = null;
tramp = G__12715;
found_result_QMARK_ = G__12716;
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
instaparse.gll.LookListener = (function LookListener(node_key,tramp){return (function (result){return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(function (){var G__12718 = (0);return (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1(G__12718) : node_key.call(null,G__12718));
})()));
});
});
instaparse.gll.CatListener = (function CatListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__12724 = result;var map__12724__$1 = ((cljs.core.seq_QMARK_(map__12724))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12724):map__12724);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core.seq(parser_sequence))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),CatListener(new_results_so_far,cljs.core.next(parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function CatFullListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__12734 = result;var map__12734__$1 = ((cljs.core.seq_QMARK_(map__12734))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12734):map__12734);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12734__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12734__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(instaparse.reduction.singleton_QMARK_(parser_sequence))
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
instaparse.gll.PlusListener = (function PlusListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__12741 = result;var map__12741__$1 = ((cljs.core.seq_QMARK_(map__12741))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12741):map__12741);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12741__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12741__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
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
instaparse.gll.PlusFullListener = (function PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__12748 = result;var map__12748__$1 = ((cljs.core.seq_QMARK_(map__12748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12748):map__12748);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.constant$keyword$70);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index))
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
instaparse.gll.RepListener = (function RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__12757 = result;var map__12757__$1 = ((cljs.core.seq_QMARK_(map__12757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12757):map__12757);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12757__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12757__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(((m <= cljs.core.count(new_results_so_far))) && ((cljs.core.count(new_results_so_far) <= n)))
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
instaparse.gll.RepFullListener = (function RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__12766 = result;var map__12766__$1 = ((cljs.core.seq_QMARK_(map__12766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12766):map__12766);var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12766__$1,cljs.core.constant$keyword$87);var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12766__$1,cljs.core.constant$keyword$70);var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
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
var empty_cat_result_12767 = instaparse.auto_flatten_seq.EMPTY;instaparse.gll.cat_parse = ((function (empty_cat_result_12767){
return (function cat_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(empty_cat_result_12767,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_12767))
;
instaparse.gll.cat_full_parse = ((function (empty_cat_result_12767){
return (function cat_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(empty_cat_result_12767,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_12767))
;
instaparse.gll.plus_parse = ((function (empty_cat_result_12767){
return (function plus_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_12767,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_12767))
;
instaparse.gll.plus_full_parse = ((function (empty_cat_result_12767){
return (function plus_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_12767,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_12767))
;
instaparse.gll.rep_parse = ((function (empty_cat_result_12767){
return (function rep_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_12767,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(empty_cat_result_12767,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_12767))
;
instaparse.gll.rep_full_parse = ((function (empty_cat_result_12767){
return (function rep_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);var m = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(this$);var n = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
if((n >= (1)))
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_12767,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(empty_cat_result_12767,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_12767))
;
instaparse.gll.star_parse = ((function (empty_cat_result_12767){
return (function star_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(empty_cat_result_12767,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});})(empty_cat_result_12767))
;
instaparse.gll.star_full_parse = ((function (empty_cat_result_12767){
return (function star_full_parse(this$,index,tramp){var parser = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else
{return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(empty_cat_result_12767,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_12767))
;
instaparse.gll.alt_parse = (function alt_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__12772 = cljs.core.seq(parsers);var chunk__12773 = null;var count__12774 = (0);var i__12775 = (0);while(true){
if((i__12775 < count__12774))
{var parser = chunk__12773.cljs$core$IIndexed$_nth$arity$2(null,i__12775);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__12776 = seq__12772;
var G__12777 = chunk__12773;
var G__12778 = count__12774;
var G__12779 = (i__12775 + (1));
seq__12772 = G__12776;
chunk__12773 = G__12777;
count__12774 = G__12778;
i__12775 = G__12779;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12772);if(temp__4126__auto__)
{var seq__12772__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12772__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12772__$1);{
var G__12780 = cljs.core.chunk_rest(seq__12772__$1);
var G__12781 = c__4195__auto__;
var G__12782 = cljs.core.count(c__4195__auto__);
var G__12783 = (0);
seq__12772 = G__12780;
chunk__12773 = G__12781;
count__12774 = G__12782;
i__12775 = G__12783;
continue;
}
} else
{var parser = cljs.core.first(seq__12772__$1);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__12784 = cljs.core.next(seq__12772__$1);
var G__12785 = null;
var G__12786 = (0);
var G__12787 = (0);
seq__12772 = G__12784;
chunk__12773 = G__12785;
count__12774 = G__12786;
i__12775 = G__12787;
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
instaparse.gll.alt_full_parse = (function alt_full_parse(this$,index,tramp){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(this$);var seq__12792 = cljs.core.seq(parsers);var chunk__12793 = null;var count__12794 = (0);var i__12795 = (0);while(true){
if((i__12795 < count__12794))
{var parser = chunk__12793.cljs$core$IIndexed$_nth$arity$2(null,i__12795);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__12796 = seq__12792;
var G__12797 = chunk__12793;
var G__12798 = count__12794;
var G__12799 = (i__12795 + (1));
seq__12792 = G__12796;
chunk__12793 = G__12797;
count__12794 = G__12798;
i__12795 = G__12799;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12792);if(temp__4126__auto__)
{var seq__12792__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12792__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12792__$1);{
var G__12800 = cljs.core.chunk_rest(seq__12792__$1);
var G__12801 = c__4195__auto__;
var G__12802 = cljs.core.count(c__4195__auto__);
var G__12803 = (0);
seq__12792 = G__12800;
chunk__12793 = G__12801;
count__12794 = G__12802;
i__12795 = G__12803;
continue;
}
} else
{var parser = cljs.core.first(seq__12792__$1);instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__12804 = cljs.core.next(seq__12792__$1);
var G__12805 = null;
var G__12806 = (0);
var G__12807 = (0);
seq__12792 = G__12804;
chunk__12793 = G__12805;
count__12794 = G__12806;
i__12795 = G__12807;
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
instaparse.gll.build_node_with_meta = (function build_node_with_meta(node_builder,tag,content,start,end){return cljs.core.with_meta((function (){var G__12810 = tag;var G__12811 = content;return (node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(G__12810,G__12811) : node_builder.call(null,G__12810,G__12811));
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
