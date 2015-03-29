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
instaparse.gll.ISegment = (function (){var obj6137 = {};return obj6137;
})();
instaparse.gll.subsegment = (function subsegment(this$,start_index,end_index_minus_one){if((function (){var and__3413__auto__ = this$;if(and__3413__auto__)
{return this$.instaparse$gll$ISegment$subsegment$arity$3;
} else
{return and__3413__auto__;
}
})())
{return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.subsegment[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.gll.subsegment["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISegment.subsegment",this$);
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
{var x__4062__auto__ = (((this$ == null))?null:this$);return (function (){var or__3425__auto__ = (instaparse.gll.toString[goog.typeOf(x__4062__auto__)]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.gll.toString["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISegment.toString",this$);
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
instaparse.gll.Segment.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write.call(null,writer__4003__auto__,"instaparse.gll/Segment");
});
instaparse.gll.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.count;
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$ = true;
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$subsegment$arity$3 = (function (this$,start,end){var self__ = this;
var this$__$1 = this;return (new instaparse.gll.Segment(self__.text,(self__.offset + start),(end - start)));
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$toString$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.subs.call(null,self__.text,self__.offset,(self__.offset + self__.count));
});
instaparse.gll.__GT_Segment = (function __GT_Segment(text,offset,count){return (new instaparse.gll.Segment(text,offset,count));
});
instaparse.gll.get_parser = (function get_parser(grammar,p){return cljs.core.get.call(null,grammar,p,p);
});
instaparse.gll._parse = (function _parse(parser,index,tramp){var G__6139 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__6139) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.gll._full_parse = (function _full_parse(parser,index,tramp){var G__6142 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__6142) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_full_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_full_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_full_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_full_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_full_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_full_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_full_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_full_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser)))));

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
var this__4021__auto____$1 = this;return cljs.core._lookup.call(null,this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k6145,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__6147 = (((k6145 instanceof cljs.core.Keyword))?k6145.fqn:null);switch (G__6147) {
case "reason":
return self__.reason;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6145,else__4024__auto__);

}
});
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Failure{",", ","}",opts__4037__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap.call(null,this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4017__auto____$1,other__4018__auto__));
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
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__4031__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__6144){var self__ = this;
var this__4028__auto____$1 = this;var pred__6148 = cljs.core.keyword_identical_QMARK_;var expr__6149 = k__4029__auto__;if(cljs.core.truth_(pred__6148.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__6149)))
{return (new instaparse.gll.Failure(G__6144,self__.reason,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6148.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__6149)))
{return (new instaparse.gll.Failure(self__.index,G__6144,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4029__auto__,G__6144),null));
}
}
});
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__6144){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,G__6144,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4027__auto__))
{return cljs.core._assoc.call(null,this__4026__auto____$1,cljs.core._nth.call(null,entry__4027__auto__,(0)),cljs.core._nth.call(null,entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Failure.cljs$lang$type = true;
instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Failure");
});
instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write.call(null,writer__4056__auto__,"instaparse.gll/Failure");
});
instaparse.gll.__GT_Failure = (function __GT_Failure(index,reason){return (new instaparse.gll.Failure(index,reason));
});
instaparse.gll.map__GT_Failure = (function map__GT_Failure(G__6146){return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__6146),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__6146),null,cljs.core.dissoc.call(null,G__6146,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759))));
});
/**
* Converts a string to a Segment, which has fast subsequencing
*/
instaparse.gll.string__GT_segment = (function string__GT_segment(s){return (new instaparse.gll.Segment(s,(0),cljs.core.count.call(null,s)));
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
var this__4021__auto____$1 = this;return cljs.core._lookup.call(null,this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k6153,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__6155 = (((k6153 instanceof cljs.core.Keyword))?k6153.fqn:null);switch (G__6155) {
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
return cljs.core.get.call(null,self__.__extmap,k6153,else__4024__auto__);

}
});
instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4037__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (13 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap.call(null,this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4017__auto____$1,other__4018__auto__));
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
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4031__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__6152){var self__ = this;
var this__4028__auto____$1 = this;var pred__6156 = cljs.core.keyword_identical_QMARK_;var expr__6157 = k__4029__auto__;if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__6157)))
{return (new instaparse.gll.Tramp(G__6152,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,G__6152,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__6152,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__6152,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__6152,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__6152,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__6152,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__6152,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__6152,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__6152,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__6152,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__6152,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6156.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__6157)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__6152,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4029__auto__,G__6152),null));
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
var this__4033__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__6152){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__6152,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4027__auto__))
{return cljs.core._assoc.call(null,this__4026__auto____$1,cljs.core._nth.call(null,entry__4027__auto__,(0)),cljs.core._nth.call(null,entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Tramp.cljs$lang$type = true;
instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});
instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write.call(null,writer__4056__auto__,"instaparse.gll/Tramp");
});
instaparse.gll.__GT_Tramp = (function __GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure){return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure));
});
instaparse.gll.map__GT_Tramp = (function map__GT_Tramp(G__6154){return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__6154),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__6154),null,cljs.core.dissoc.call(null,G__6154,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879))));
});
instaparse.gll.make_tramp = (function() {
var make_tramp = null;
var make_tramp__2 = (function (grammar,text){return make_tramp.call(null,grammar,text,instaparse.gll.string__GT_segment.call(null,text),(-1),null);
});
var make_tramp__3 = (function (grammar,text,segment){return make_tramp.call(null,grammar,text,segment,(-1),null);
});
var make_tramp__4 = (function (grammar,text,fail_index,node_builder){return make_tramp.call(null,grammar,text,instaparse.gll.string__GT_segment.call(null,text),fail_index,node_builder);
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
instaparse.gll.make_success = (function make_success(result,index){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function total_success_QMARK_(tramp,s){return cljs.core._EQ_.call(null,cljs.core.count.call(null,tramp.text),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
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
var this__4021__auto____$1 = this;return cljs.core._lookup.call(null,this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k6161,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__6163 = (((k6161 instanceof cljs.core.Keyword))?k6161.fqn:null);switch (G__6163) {
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
return cljs.core.get.call(null,self__.__extmap,k6161,else__4024__auto__);

}
});
instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.gll.Node{",", ","}",opts__4037__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap.call(null,this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
var this__4017__auto____$1 = this;if(cljs.core.truth_((function (){var and__3413__auto__ = other__4018__auto__;if(cljs.core.truth_(and__3413__auto__))
{return ((this__4017__auto____$1.constructor === other__4018__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4017__auto____$1,other__4018__auto__));
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
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__4031__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__6160){var self__ = this;
var this__4028__auto____$1 = this;var pred__6164 = cljs.core.keyword_identical_QMARK_;var expr__6165 = k__4029__auto__;if(cljs.core.truth_(pred__6164.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__6165)))
{return (new instaparse.gll.Node(G__6160,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6164.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__6165)))
{return (new instaparse.gll.Node(self__.listeners,G__6160,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6164.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__6165)))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__6160,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6164.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__6165)))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__6160,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4029__auto__,G__6160),null));
}
}
}
}
});
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__6160){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__6160,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4027__auto__))
{return cljs.core._assoc.call(null,this__4026__auto____$1,cljs.core._nth.call(null,entry__4027__auto__,(0)),cljs.core._nth.call(null,entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.gll.Node.cljs$lang$type = true;
instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Node");
});
instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write.call(null,writer__4056__auto__,"instaparse.gll/Node");
});
instaparse.gll.__GT_Node = (function __GT_Node(listeners,full_listeners,results,full_results){return (new instaparse.gll.Node(listeners,full_listeners,results,full_results));
});
instaparse.gll.map__GT_Node = (function map__GT_Node(G__6162){return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__6162),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__6162),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__6162),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__6162),null,cljs.core.dissoc.call(null,G__6162,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407))));
});
instaparse.gll.make_node = (function make_node(){return (new instaparse.gll.Node(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
/**
* Pushes an item onto the trampoline's stack
*/
instaparse.gll.push_stack = (function push_stack(tramp,item){return tramp.stack = cljs.core.conj.call(null,tramp.stack,item);
});
/**
* Pushes onto stack a message to a given listener about a result
*/
instaparse.gll.push_message = (function push_message(tramp,listener,result){var cache = tramp.msg_cache;var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);var c = cljs.core.get.call(null,cache,k,(0));var f = ((function (cache,i,k,c){
return (function (){return listener.call(null,result);
});})(cache,i,k,c))
;if((c > tramp.generation))
{tramp.next_stack = cljs.core.conj.call(null,tramp.next_stack,f);
} else
{tramp.stack = cljs.core.conj.call(null,tramp.stack,f);
}
return tramp.msg_cache = cljs.core.assoc.call(null,tramp.msg_cache,k,(c + (1)));
});
/**
* Tests whether node already has a listener
*/
instaparse.gll.listener_exists_QMARK_ = (function listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count.call(null,node.listeners) > (0));
} else
{return null;
}
});
/**
* Tests whether node already has a listener or full-listener
*/
instaparse.gll.full_listener_exists_QMARK_ = (function full_listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count.call(null,node.full_listeners) > (0))) || ((cljs.core.count.call(null,node.listeners) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a result or full-result
*/
instaparse.gll.result_exists_QMARK_ = (function result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count.call(null,node.full_results) > (0))) || ((cljs.core.count.call(null,node.results) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a full-result
*/
instaparse.gll.full_result_exists_QMARK_ = (function full_result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count.call(null,node.full_results) > (0));
} else
{return null;
}
});
/**
* Gets node if already exists, otherwise creates one
*/
instaparse.gll.node_get = (function node_get(tramp,node_key){var nodes = tramp.nodes;var temp__4124__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;return node;
} else
{var node = instaparse.gll.make_node.call(null);tramp.nodes = cljs.core.assoc.call(null,tramp.nodes,node_key,node);
return node;
}
});
instaparse.gll.safe_with_meta = (function safe_with_meta(obj,metamap){if((function (){var G__6169 = obj;if(G__6169)
{var bit__4089__auto__ = (G__6169.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4089__auto__) || (G__6169.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__6169.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__6169);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__6169);
}
})())
{return cljs.core.with_meta.call(null,obj,metamap);
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
instaparse.gll.push_result = (function push_result(tramp,node_key,result){var node = instaparse.gll.node_get.call(null,tramp,node_key);var parser = node_key.call(null,(1));var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);var result__$2 = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);if(cljs.core.truth_(temp__4124__auto__))
{var reduction_function = temp__4124__auto__;return instaparse.gll.make_success.call(null,instaparse.gll.safe_with_meta.call(null,instaparse.reduction.apply_reduction.call(null,reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),node_key.call(null,(0)),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else
{return result__$1;
}
})();var total_QMARK_ = instaparse.gll.total_success_QMARK_.call(null,tramp,result__$2);var results = ((total_QMARK_)?node.full_results:node.results);if(cljs.core.not.call(null,results.call(null,result__$2)))
{if(total_QMARK_)
{node.full_results = cljs.core.conj.call(null,node.full_results,result__$2);
} else
{node.results = cljs.core.conj.call(null,node.results,result__$2);
}
var seq__6178_6186 = cljs.core.seq.call(null,node.listeners);var chunk__6179_6187 = null;var count__6180_6188 = (0);var i__6181_6189 = (0);while(true){
if((i__6181_6189 < count__6180_6188))
{var listener_6190 = cljs.core._nth.call(null,chunk__6179_6187,i__6181_6189);instaparse.gll.push_message.call(null,tramp,listener_6190,result__$2);
{
var G__6191 = seq__6178_6186;
var G__6192 = chunk__6179_6187;
var G__6193 = count__6180_6188;
var G__6194 = (i__6181_6189 + (1));
seq__6178_6186 = G__6191;
chunk__6179_6187 = G__6192;
count__6180_6188 = G__6193;
i__6181_6189 = G__6194;
continue;
}
} else
{var temp__4126__auto___6195 = cljs.core.seq.call(null,seq__6178_6186);if(temp__4126__auto___6195)
{var seq__6178_6196__$1 = temp__4126__auto___6195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6178_6196__$1))
{var c__4195__auto___6197 = cljs.core.chunk_first.call(null,seq__6178_6196__$1);{
var G__6198 = cljs.core.chunk_rest.call(null,seq__6178_6196__$1);
var G__6199 = c__4195__auto___6197;
var G__6200 = cljs.core.count.call(null,c__4195__auto___6197);
var G__6201 = (0);
seq__6178_6186 = G__6198;
chunk__6179_6187 = G__6199;
count__6180_6188 = G__6200;
i__6181_6189 = G__6201;
continue;
}
} else
{var listener_6202 = cljs.core.first.call(null,seq__6178_6196__$1);instaparse.gll.push_message.call(null,tramp,listener_6202,result__$2);
{
var G__6203 = cljs.core.next.call(null,seq__6178_6196__$1);
var G__6204 = null;
var G__6205 = (0);
var G__6206 = (0);
seq__6178_6186 = G__6203;
chunk__6179_6187 = G__6204;
count__6180_6188 = G__6205;
i__6181_6189 = G__6206;
continue;
}
}
} else
{}
}
break;
}
if(total_QMARK_)
{var seq__6182 = cljs.core.seq.call(null,node.full_listeners);var chunk__6183 = null;var count__6184 = (0);var i__6185 = (0);while(true){
if((i__6185 < count__6184))
{var listener = cljs.core._nth.call(null,chunk__6183,i__6185);instaparse.gll.push_message.call(null,tramp,listener,result__$2);
{
var G__6207 = seq__6182;
var G__6208 = chunk__6183;
var G__6209 = count__6184;
var G__6210 = (i__6185 + (1));
seq__6182 = G__6207;
chunk__6183 = G__6208;
count__6184 = G__6209;
i__6185 = G__6210;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6182);if(temp__4126__auto__)
{var seq__6182__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6182__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6182__$1);{
var G__6211 = cljs.core.chunk_rest.call(null,seq__6182__$1);
var G__6212 = c__4195__auto__;
var G__6213 = cljs.core.count.call(null,c__4195__auto__);
var G__6214 = (0);
seq__6182 = G__6211;
chunk__6183 = G__6212;
count__6184 = G__6213;
i__6185 = G__6214;
continue;
}
} else
{var listener = cljs.core.first.call(null,seq__6182__$1);instaparse.gll.push_message.call(null,tramp,listener,result__$2);
{
var G__6215 = cljs.core.next.call(null,seq__6182__$1);
var G__6216 = null;
var G__6217 = (0);
var G__6218 = (0);
seq__6182 = G__6215;
chunk__6183 = G__6216;
count__6184 = G__6217;
i__6185 = G__6218;
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
instaparse.gll.push_listener = (function push_listener(tramp,node_key,listener){var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_.call(null,tramp,node_key);var node = instaparse.gll.node_get.call(null,tramp,node_key);node.listeners = cljs.core.conj.call(null,node.listeners,listener);
var seq__6227_6235 = cljs.core.seq.call(null,node.results);var chunk__6228_6236 = null;var count__6229_6237 = (0);var i__6230_6238 = (0);while(true){
if((i__6230_6238 < count__6229_6237))
{var result_6239 = cljs.core._nth.call(null,chunk__6228_6236,i__6230_6238);instaparse.gll.push_message.call(null,tramp,listener,result_6239);
{
var G__6240 = seq__6227_6235;
var G__6241 = chunk__6228_6236;
var G__6242 = count__6229_6237;
var G__6243 = (i__6230_6238 + (1));
seq__6227_6235 = G__6240;
chunk__6228_6236 = G__6241;
count__6229_6237 = G__6242;
i__6230_6238 = G__6243;
continue;
}
} else
{var temp__4126__auto___6244 = cljs.core.seq.call(null,seq__6227_6235);if(temp__4126__auto___6244)
{var seq__6227_6245__$1 = temp__4126__auto___6244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6227_6245__$1))
{var c__4195__auto___6246 = cljs.core.chunk_first.call(null,seq__6227_6245__$1);{
var G__6247 = cljs.core.chunk_rest.call(null,seq__6227_6245__$1);
var G__6248 = c__4195__auto___6246;
var G__6249 = cljs.core.count.call(null,c__4195__auto___6246);
var G__6250 = (0);
seq__6227_6235 = G__6247;
chunk__6228_6236 = G__6248;
count__6229_6237 = G__6249;
i__6230_6238 = G__6250;
continue;
}
} else
{var result_6251 = cljs.core.first.call(null,seq__6227_6245__$1);instaparse.gll.push_message.call(null,tramp,listener,result_6251);
{
var G__6252 = cljs.core.next.call(null,seq__6227_6245__$1);
var G__6253 = null;
var G__6254 = (0);
var G__6255 = (0);
seq__6227_6235 = G__6252;
chunk__6228_6236 = G__6253;
count__6229_6237 = G__6254;
i__6230_6238 = G__6255;
continue;
}
}
} else
{}
}
break;
}
var seq__6231_6256 = cljs.core.seq.call(null,node.full_results);var chunk__6232_6257 = null;var count__6233_6258 = (0);var i__6234_6259 = (0);while(true){
if((i__6234_6259 < count__6233_6258))
{var result_6260 = cljs.core._nth.call(null,chunk__6232_6257,i__6234_6259);instaparse.gll.push_message.call(null,tramp,listener,result_6260);
{
var G__6261 = seq__6231_6256;
var G__6262 = chunk__6232_6257;
var G__6263 = count__6233_6258;
var G__6264 = (i__6234_6259 + (1));
seq__6231_6256 = G__6261;
chunk__6232_6257 = G__6262;
count__6233_6258 = G__6263;
i__6234_6259 = G__6264;
continue;
}
} else
{var temp__4126__auto___6265 = cljs.core.seq.call(null,seq__6231_6256);if(temp__4126__auto___6265)
{var seq__6231_6266__$1 = temp__4126__auto___6265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6231_6266__$1))
{var c__4195__auto___6267 = cljs.core.chunk_first.call(null,seq__6231_6266__$1);{
var G__6268 = cljs.core.chunk_rest.call(null,seq__6231_6266__$1);
var G__6269 = c__4195__auto___6267;
var G__6270 = cljs.core.count.call(null,c__4195__auto___6267);
var G__6271 = (0);
seq__6231_6256 = G__6268;
chunk__6232_6257 = G__6269;
count__6233_6258 = G__6270;
i__6234_6259 = G__6271;
continue;
}
} else
{var result_6272 = cljs.core.first.call(null,seq__6231_6266__$1);instaparse.gll.push_message.call(null,tramp,listener,result_6272);
{
var G__6273 = cljs.core.next.call(null,seq__6231_6266__$1);
var G__6274 = null;
var G__6275 = (0);
var G__6276 = (0);
seq__6231_6256 = G__6273;
chunk__6232_6257 = G__6274;
count__6233_6258 = G__6275;
i__6234_6259 = G__6276;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not.call(null,listener_already_exists_QMARK_))
{return instaparse.gll.push_stack.call(null,tramp,((function (listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
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
instaparse.gll.push_full_listener = (function push_full_listener(tramp,node_key,listener){var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_.call(null,tramp,node_key);var node = instaparse.gll.node_get.call(null,tramp,node_key);node.full_listeners = cljs.core.conj.call(null,node.full_listeners,listener);
var seq__6281_6285 = cljs.core.seq.call(null,node.full_results);var chunk__6282_6286 = null;var count__6283_6287 = (0);var i__6284_6288 = (0);while(true){
if((i__6284_6288 < count__6283_6287))
{var result_6289 = cljs.core._nth.call(null,chunk__6282_6286,i__6284_6288);instaparse.gll.push_message.call(null,tramp,listener,result_6289);
{
var G__6290 = seq__6281_6285;
var G__6291 = chunk__6282_6286;
var G__6292 = count__6283_6287;
var G__6293 = (i__6284_6288 + (1));
seq__6281_6285 = G__6290;
chunk__6282_6286 = G__6291;
count__6283_6287 = G__6292;
i__6284_6288 = G__6293;
continue;
}
} else
{var temp__4126__auto___6294 = cljs.core.seq.call(null,seq__6281_6285);if(temp__4126__auto___6294)
{var seq__6281_6295__$1 = temp__4126__auto___6294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6281_6295__$1))
{var c__4195__auto___6296 = cljs.core.chunk_first.call(null,seq__6281_6295__$1);{
var G__6297 = cljs.core.chunk_rest.call(null,seq__6281_6295__$1);
var G__6298 = c__4195__auto___6296;
var G__6299 = cljs.core.count.call(null,c__4195__auto___6296);
var G__6300 = (0);
seq__6281_6285 = G__6297;
chunk__6282_6286 = G__6298;
count__6283_6287 = G__6299;
i__6284_6288 = G__6300;
continue;
}
} else
{var result_6301 = cljs.core.first.call(null,seq__6281_6295__$1);instaparse.gll.push_message.call(null,tramp,listener,result_6301);
{
var G__6302 = cljs.core.next.call(null,seq__6281_6295__$1);
var G__6303 = null;
var G__6304 = (0);
var G__6305 = (0);
seq__6281_6285 = G__6302;
chunk__6282_6286 = G__6303;
count__6283_6287 = G__6304;
i__6284_6288 = G__6305;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not.call(null,full_listener_already_exists_QMARK_))
{return instaparse.gll.push_stack.call(null,tramp,((function (full_listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._full_parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(full_listener_already_exists_QMARK_,node))
);
} else
{return null;
}
});
/**
* Pushes a thunk onto the trampoline's negative-listener stack.
*/
instaparse.gll.push_negative_listener = (function push_negative_listener(tramp,negative_listener){return tramp.negative_listeners = cljs.core.conj.call(null,tramp.negative_listeners,negative_listener);
});
instaparse.gll.fail = (function fail(tramp,node_key,index,reason){tramp.failure = (function (failure){var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);var G__6307 = cljs.core.compare.call(null,index,current_index);switch (G__6307) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null)));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason)));

break;
case (-1):
return failure;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.compare.call(null,index,current_index)))));

}
}).call(null,tramp.failure);
if(cljs.core._EQ_.call(null,index,tramp.fail_index))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,instaparse.gll.build_node_with_meta.call(null,tramp.node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),cljs.core.subs.call(null,tramp.text,index),index,cljs.core.count.call(null,tramp.text)),cljs.core.count.call(null,tramp.text)));
} else
{return null;
}
});
/**
* Executes one thing on the stack (not threadsafe)
*/
instaparse.gll.step = (function step(tramp){var top = cljs.core.peek.call(null,tramp.stack);tramp.stack = cljs.core.pop.call(null,tramp.stack);
return top.call(null);
});
/**
* Executes the stack until exhausted
*/
instaparse.gll.run = (function() {
var run = null;
var run__1 = (function (tramp){return run.call(null,tramp,null);
});
var run__2 = (function (tramp,found_result_QMARK_){while(true){
var stack = tramp.stack;if(cljs.core.truth_(tramp.success))
{return (new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(tramp.success),(function (){tramp.success = null;
return run.call(null,tramp,true);
})());
});})(tramp,found_result_QMARK_,stack))
,null,null));
} else
{if((cljs.core.count.call(null,stack) > (0)))
{instaparse.gll.step.call(null,tramp);
{
var G__6309 = tramp;
var G__6310 = found_result_QMARK_;
tramp = G__6309;
found_result_QMARK_ = G__6310;
continue;
}
} else
{if((cljs.core.count.call(null,tramp.negative_listeners) > (0)))
{var listener = cljs.core.peek.call(null,tramp.negative_listeners);listener.call(null);
tramp.negative_listeners = cljs.core.pop.call(null,tramp.negative_listeners);
{
var G__6311 = tramp;
var G__6312 = found_result_QMARK_;
tramp = G__6311;
found_result_QMARK_ = G__6312;
continue;
}
} else
{if(cljs.core.truth_(found_result_QMARK_))
{var next_stack = tramp.next_stack;tramp.stack = next_stack;
tramp.next_stack = cljs.core.PersistentVector.EMPTY;
tramp.generation = (tramp.generation + (1));
{
var G__6313 = tramp;
var G__6314 = null;
tramp = G__6313;
found_result_QMARK_ = G__6314;
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
instaparse.gll.NodeListener = (function NodeListener(node_key,tramp){return (function (result){return instaparse.gll.push_result.call(null,tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function LookListener(node_key,tramp){return (function (result){return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,node_key.call(null,(0))));
});
});
instaparse.gll.CatListener = (function CatListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__6316 = result;var map__6316__$1 = ((cljs.core.seq_QMARK_.call(null,map__6316))?cljs.core.apply.call(null,cljs.core.hash_map,map__6316):map__6316);var parsed_result = cljs.core.get.call(null,map__6316__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6316__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core.seq.call(null,parser_sequence))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function CatFullListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__6318 = result;var map__6318__$1 = ((cljs.core.seq_QMARK_.call(null,map__6318))?cljs.core.apply.call(null,cljs.core.hash_map,map__6318):map__6318);var parsed_result = cljs.core.get.call(null,map__6318__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6318__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(instaparse.reduction.singleton_QMARK_.call(null,parser_sequence))
{return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{if(cljs.core.seq.call(null,parser_sequence))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function PlusListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__6320 = result;var map__6320__$1 = ((cljs.core.seq_QMARK_.call(null,map__6320))?cljs.core.apply.call(null,cljs.core.hash_map,map__6320):map__6320);var parsed_result = cljs.core.get.call(null,map__6320__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6320__$1,new cljs.core.Keyword(null,"index","index",-1531685915));if(cljs.core._EQ_.call(null,continue_index,prev_index))
{if((cljs.core.count.call(null,results_so_far) === (0)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__6322 = result;var map__6322__$1 = ((cljs.core.seq_QMARK_.call(null,map__6322))?cljs.core.apply.call(null,cljs.core.hash_map,map__6322):map__6322);var parsed_result = cljs.core.get.call(null,map__6322__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6322__$1,new cljs.core.Keyword(null,"index","index",-1531685915));if(cljs.core._EQ_.call(null,continue_index,prev_index))
{if((cljs.core.count.call(null,results_so_far) === (0)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__6324 = result;var map__6324__$1 = ((cljs.core.seq_QMARK_.call(null,map__6324))?cljs.core.apply.call(null,cljs.core.hash_map,map__6324):map__6324);var parsed_result = cljs.core.get.call(null,map__6324__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6324__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n)))
{instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{}
if((cljs.core.count.call(null,new_results_so_far) < n))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
});
});
instaparse.gll.RepFullListener = (function RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__6326 = result;var map__6326__$1 = ((cljs.core.seq_QMARK_.call(null,map__6326))?cljs.core.apply.call(null,cljs.core.hash_map,map__6326):map__6326);var parsed_result = cljs.core.get.call(null,map__6326__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__6326__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{return null;
}
} else
{if((cljs.core.count.call(null,new_results_so_far) < n))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepFullListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
}
});
});
instaparse.gll.TopListener = (function TopListener(tramp){return (function (result){return tramp.success = result;
});
});
instaparse.gll.string_parse = (function string_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count.call(null,text);var y__3740__auto__ = (index + cljs.core.count.call(null,string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if(cljs.core._EQ_.call(null,string,head))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function string_full_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count.call(null,text);var y__3740__auto__ = (index + cljs.core.count.call(null,string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (cljs.core._EQ_.call(null,string,head)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function equals_ignore_case(s1,s2){return cljs.core._EQ_.call(null,s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function string_case_insensitive_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count.call(null,text);var y__3740__auto__ = (index + cljs.core.count.call(null,string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if(instaparse.gll.equals_ignore_case.call(null,string,head))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function string_case_insensitive_full_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3739__auto__ = cljs.core.count.call(null,text);var y__3740__auto__ = (index + cljs.core.count.call(null,string));return ((x__3739__auto__ < y__3740__auto__) ? x__3739__auto__ : y__3740__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (instaparse.gll.equals_ignore_case.call(null,string,head)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.re_match_at_front = (function re_match_at_front(regexp,text){var re = (new RegExp(regexp.source,"g"));var m = re.exec(text);if(cljs.core.truth_((function (){var and__3413__auto__ = m;if(cljs.core.truth_(and__3413__auto__))
{return (m.index === (0));
} else
{return and__3413__auto__;
}
})()))
{return cljs.core.first.call(null,m);
} else
{return null;
}
});
instaparse.gll.regexp_parse = (function regexp_parse(this$,index,tramp){var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.segment;var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);if(cljs.core.truth_(match))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,(index + cljs.core.count.call(null,match))));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function regexp_full_parse(this$,index,tramp){var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);var desired_length = (cljs.core.count.call(null,text) - index);if(cljs.core.truth_((function (){var and__3413__auto__ = match;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else
{return and__3413__auto__;
}
})()))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,cljs.core.count.call(null,text)));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
var empty_cat_result_6327 = instaparse.auto_flatten_seq.EMPTY;instaparse.gll.cat_parse = ((function (empty_cat_result_6327){
return (function cat_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatListener.call(null,empty_cat_result_6327,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_6327))
;
instaparse.gll.cat_full_parse = ((function (empty_cat_result_6327){
return (function cat_full_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatFullListener.call(null,empty_cat_result_6327,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_6327))
;
instaparse.gll.plus_parse = ((function (empty_cat_result_6327){
return (function plus_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_6327,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_6327))
;
instaparse.gll.plus_full_parse = ((function (empty_cat_result_6327){
return (function plus_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_6327,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_6327))
;
instaparse.gll.rep_parse = ((function (empty_cat_result_6327){
return (function rep_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
if((n >= (1)))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_6327,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_6327,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_6327))
;
instaparse.gll.rep_full_parse = ((function (empty_cat_result_6327){
return (function rep_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
if((n >= (1)))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_6327,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_6327,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_6327))
;
instaparse.gll.star_parse = ((function (empty_cat_result_6327){
return (function star_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_6327,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});})(empty_cat_result_6327))
;
instaparse.gll.star_full_parse = ((function (empty_cat_result_6327){
return (function star_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_6327,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_6327))
;
instaparse.gll.alt_parse = (function alt_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);var seq__6332 = cljs.core.seq.call(null,parsers);var chunk__6333 = null;var count__6334 = (0);var i__6335 = (0);while(true){
if((i__6335 < count__6334))
{var parser = cljs.core._nth.call(null,chunk__6333,i__6335);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__6336 = seq__6332;
var G__6337 = chunk__6333;
var G__6338 = count__6334;
var G__6339 = (i__6335 + (1));
seq__6332 = G__6336;
chunk__6333 = G__6337;
count__6334 = G__6338;
i__6335 = G__6339;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6332);if(temp__4126__auto__)
{var seq__6332__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6332__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6332__$1);{
var G__6340 = cljs.core.chunk_rest.call(null,seq__6332__$1);
var G__6341 = c__4195__auto__;
var G__6342 = cljs.core.count.call(null,c__4195__auto__);
var G__6343 = (0);
seq__6332 = G__6340;
chunk__6333 = G__6341;
count__6334 = G__6342;
i__6335 = G__6343;
continue;
}
} else
{var parser = cljs.core.first.call(null,seq__6332__$1);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__6344 = cljs.core.next.call(null,seq__6332__$1);
var G__6345 = null;
var G__6346 = (0);
var G__6347 = (0);
seq__6332 = G__6344;
chunk__6333 = G__6345;
count__6334 = G__6346;
i__6335 = G__6347;
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
instaparse.gll.alt_full_parse = (function alt_full_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);var seq__6352 = cljs.core.seq.call(null,parsers);var chunk__6353 = null;var count__6354 = (0);var i__6355 = (0);while(true){
if((i__6355 < count__6354))
{var parser = cljs.core._nth.call(null,chunk__6353,i__6355);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__6356 = seq__6352;
var G__6357 = chunk__6353;
var G__6358 = count__6354;
var G__6359 = (i__6355 + (1));
seq__6352 = G__6356;
chunk__6353 = G__6357;
count__6354 = G__6358;
i__6355 = G__6359;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6352);if(temp__4126__auto__)
{var seq__6352__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6352__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6352__$1);{
var G__6360 = cljs.core.chunk_rest.call(null,seq__6352__$1);
var G__6361 = c__4195__auto__;
var G__6362 = cljs.core.count.call(null,c__4195__auto__);
var G__6363 = (0);
seq__6352 = G__6360;
chunk__6353 = G__6361;
count__6354 = G__6362;
i__6355 = G__6363;
continue;
}
} else
{var parser = cljs.core.first.call(null,seq__6352__$1);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__6364 = cljs.core.next.call(null,seq__6352__$1);
var G__6365 = null;
var G__6366 = (0);
var G__6367 = (0);
seq__6352 = G__6364;
chunk__6353 = G__6365;
count__6354 = G__6366;
i__6355 = G__6367;
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
instaparse.gll.ordered_alt_parse = (function ordered_alt_parse(this$,index,tramp){var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_listener.call(null,tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function ordered_alt_full_parse(this$,index,tramp){var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_full_listener.call(null,tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_full_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function opt_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.opt_full_parse = (function opt_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function non_terminal_parse(this$,index,tramp){var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function non_terminal_full_parse(this$,index,tramp){var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function lookahead_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function lookahead_full_parse(this$,index,tramp){if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.lookahead_parse.call(null,this$,index,tramp);
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function negative_lookahead_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key)))
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else
{instaparse.gll.push_listener.call(null,tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.call(null,parser)], null)], null));
});})(parser,node_key))
,null));return ((function (fail_send,parser,node_key){
return (function (result){return cljs.core.force.call(null,fail_send);
});
;})(fail_send,parser,node_key))
})());
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser,node_key){
return (function (){if(cljs.core.not.call(null,instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function epsilon_parse(this$,index,tramp){return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.epsilon_full_parse = (function epsilon_full_parse(this$,index,tramp){if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function start_parser(tramp,parser,partial_QMARK_){if(cljs.core.truth_(partial_QMARK_))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
} else
{return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
}
});
instaparse.gll.parses = (function parses(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.call(null,grammar,text);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,instaparse.failure.augment_failure.call(null,tramp.failure,text));
}
});
instaparse.gll.parse = (function parse(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.call(null,grammar,text);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first.call(null,all_parses);
} else
{return instaparse.failure.augment_failure.call(null,tramp.failure,text);
}
});
instaparse.gll.build_node_with_meta = (function build_node_with_meta(node_builder,tag,content,start,end){return cljs.core.with_meta.call(null,node_builder.call(null,tag,content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function build_total_failure_node(node_builder,start,text){var build_failure_node = instaparse.gll.build_node_with_meta.call(null,node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count.call(null,text));var build_start_node = instaparse.gll.build_node_with_meta.call(null,node_builder,start,build_failure_node,(0),cljs.core.count.call(null,text));return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,instaparse.gll.build_total_failure_node.call(null,node_builder,start,text));
}
});
/**
* A variation on with-meta that merges the existing metamap into the new metamap,
* rather than overwriting the metamap entirely.
*/
instaparse.gll.merge_meta = (function merge_meta(obj,metamap){return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,metamap,cljs.core.meta.call(null,obj)));
});
instaparse.gll.parses_total = (function parses_total(grammar,start,text,partial_QMARK_,node_builder){var all_parses = instaparse.gll.parses.call(null,grammar,start,text,partial_QMARK_);if(cljs.core.seq.call(null,all_parses))
{return all_parses;
} else
{return instaparse.gll.merge_meta.call(null,instaparse.gll.parses_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,all_parses)),partial_QMARK_,node_builder),cljs.core.meta.call(null,all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first.call(null,all_parses);
} else
{return instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
}
});
instaparse.gll.parse_total = (function parse_total(grammar,start,text,partial_QMARK_,node_builder){var result = instaparse.gll.parse.call(null,grammar,start,text,partial_QMARK_);if(!((result instanceof instaparse.gll.Failure)))
{return result;
} else
{return instaparse.gll.merge_meta.call(null,instaparse.gll.parse_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=gll.js.map