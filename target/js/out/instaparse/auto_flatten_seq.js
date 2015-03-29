// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.auto_flatten_seq');
goog.require('cljs.core');
instaparse.auto_flatten_seq.threshold = (32);
/**
* Returns the partially calculated hash code, still requires a call to mix-collection-hash
*/
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix = (function() {
var hash_ordered_coll_without_mix = null;
var hash_ordered_coll_without_mix__1 = (function (coll){return hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2((1),coll);
});
var hash_ordered_coll_without_mix__2 = (function (existing_unmixed_hash,coll){var unmixed_hash = existing_unmixed_hash;var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__12202 = ((cljs.core.imul((31),unmixed_hash) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__12203 = cljs.core.next(coll__$1);
unmixed_hash = G__12202;
coll__$1 = G__12203;
continue;
}
} else
{return unmixed_hash;
}
break;
}
});
hash_ordered_coll_without_mix = function(existing_unmixed_hash,coll){
switch(arguments.length){
case 1:
return hash_ordered_coll_without_mix__1.call(this,existing_unmixed_hash);
case 2:
return hash_ordered_coll_without_mix__2.call(this,existing_unmixed_hash,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1 = hash_ordered_coll_without_mix__1;
hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2 = hash_ordered_coll_without_mix__2;
return hash_ordered_coll_without_mix;
})()
;
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
instaparse.auto_flatten_seq.hash_conj = (function hash_conj(unmixed_hash,item){return ((cljs.core.imul((31),unmixed_hash) + cljs.core.hash(item)) | (0));
});
instaparse.auto_flatten_seq.expt = (function expt(base,pow){if((pow === (0)))
{return (1);
} else
{var n = (pow | (0));var y = ((1) | (0));var z = (base | (0));while(true){
var t = cljs.core.even_QMARK_(n);var n__$1 = cljs.core.quot(n,(2));if(t)
{{
var G__12204 = n__$1;
var G__12205 = y;
var G__12206 = cljs.core.imul(z,z);
n = G__12204;
y = G__12205;
z = G__12206;
continue;
}
} else
{if((n__$1 === (0)))
{return cljs.core.imul(z,y);
} else
{{
var G__12207 = n__$1;
var G__12208 = cljs.core.imul(z,y);
var G__12209 = cljs.core.imul(z,z);
n = G__12207;
y = G__12208;
z = G__12209;
continue;
}

}
}
break;
}
}
});
instaparse.auto_flatten_seq.hash_cat = (function hash_cat(v1,v2){var c = cljs.core.count(v2);var e = (instaparse.auto_flatten_seq.expt((31),c) | (0));return ((cljs.core.imul(e,v1.premix_hashcode) | (0)) + (v2.premix_hashcode - e));
});
instaparse.auto_flatten_seq.delve = (function delve(v,index){var v__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,index);var index__$1 = index;while(true){
if(cljs.core.truth_((function (){var G__12211 = v__$1;return (instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1(G__12211) : instaparse.auto_flatten_seq.afs_QMARK_.call(null,G__12211));
})()))
{{
var G__12212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
var G__12213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(index__$1,(0));
v__$1 = G__12212;
index__$1 = G__12213;
continue;
}
} else
{return index__$1;
}
break;
}
});
instaparse.auto_flatten_seq.advance = (function advance(v,index){while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(index),(1)))
{if((cljs.core.peek(index) < ((function (){var G__12216 = v;return (instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1(G__12216) : instaparse.auto_flatten_seq.true_count.call(null,G__12216));
})() - (1))))
{return instaparse.auto_flatten_seq.delve(v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.peek(index) + (1))], null));
} else
{return null;
}
} else
{if((cljs.core.peek(index) < ((function (){var G__12217 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,cljs.core.pop(index));return (instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1(G__12217) : instaparse.auto_flatten_seq.true_count.call(null,G__12217));
})() - (1))))
{return instaparse.auto_flatten_seq.delve(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(index),(cljs.core.peek(index) + (1))));
} else
{{
var G__12218 = v;
var G__12219 = cljs.core.pop(index);
v = G__12218;
index = G__12219;
continue;
}

}
}
break;
}
});
instaparse.auto_flatten_seq.flat_seq = (function() {
var flat_seq = null;
var flat_seq__1 = (function (v){if((cljs.core.count(v) > (0)))
{return flat_seq.cljs$core$IFn$_invoke$arity$2(v,instaparse.auto_flatten_seq.delve(v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else
{return null;
}
});
var flat_seq__2 = (function (v,index){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,index),(function (){var temp__4126__auto__ = instaparse.auto_flatten_seq.advance(v,index);if(cljs.core.truth_(temp__4126__auto__))
{var next_index = temp__4126__auto__;return flat_seq.cljs$core$IFn$_invoke$arity$2(v,next_index);
} else
{return null;
}
})());
}),null,null));
});
flat_seq = function(v,index){
switch(arguments.length){
case 1:
return flat_seq__1.call(this,v);
case 2:
return flat_seq__2.call(this,v,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flat_seq.cljs$core$IFn$_invoke$arity$1 = flat_seq__1;
flat_seq.cljs$core$IFn$_invoke$arity$2 = flat_seq__2;
return flat_seq;
})()
;
instaparse.auto_flatten_seq.ConjFlat = (function (){var obj12225 = {};return obj12225;
})();
instaparse.auto_flatten_seq.conj_flat = (function conj_flat(self,obj){if((function (){var and__3413__auto__ = self;if(and__3413__auto__)
{return self.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2;
} else
{return and__3413__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(self,obj);
} else
{var x__4062__auto__ = (((self == null))?null:self);return (function (){var or__3425__auto__ = (instaparse.auto_flatten_seq.conj_flat[(function (){var G__12229 = x__4062__auto__;return goog.typeOf(G__12229);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.auto_flatten_seq.conj_flat["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("ConjFlat.conj-flat",self);
}
}
})().call(null,self,obj);
}
});
instaparse.auto_flatten_seq.cached_QMARK_ = (function cached_QMARK_(self){if((function (){var and__3413__auto__ = self;if(and__3413__auto__)
{return self.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1;
} else
{return and__3413__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1(self);
} else
{var x__4062__auto__ = (((self == null))?null:self);return (function (){var or__3425__auto__ = (instaparse.auto_flatten_seq.cached_QMARK_[(function (){var G__12233 = x__4062__auto__;return goog.typeOf(G__12233);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.auto_flatten_seq.cached_QMARK_["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("ConjFlat.cached?",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
*/
instaparse.auto_flatten_seq.AutoFlattenSeq = (function (v,premix_hashcode,hashcode,cnt,dirty,cached_seq){
this.v = v;
this.premix_hashcode = premix_hashcode;
this.hashcode = hashcode;
this.cnt = cnt;
this.dirty = dirty;
this.cached_seq = cached_seq;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850950;
})
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$type = true;
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/AutoFlattenSeq";
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"instaparse.auto-flatten-seq/AutoFlattenSeq");
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (self,key){var self__ = this;
var self__$1 = this;return self__.v.cljs$core$ILookup$_lookup$arity$2(null,key);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (self,key,not_found){var self__ = this;
var self__$1 = this;return self__.v.cljs$core$ILookup$_lookup$arity$3(null,key,not_found);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.meta(self__.v);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$INext$_next$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.next(cljs.core.seq(self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cnt;
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.hashcode;
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (self,other){var self__ = this;
var self__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.hashcode,cljs.core.hash(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.cnt,cljs.core.count(other))) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.cnt,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(self__$1),other)));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.with_meta(instaparse.auto_flatten_seq.EMPTY,cljs.core.meta(self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.first(cljs.core.seq(self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.rest(cljs.core.seq(self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(self__.cached_seq))
{return self__.cached_seq;
} else
{self__.cached_seq = ((self__.dirty)?instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$1(self__.v):cljs.core.seq(self__.v));
return self__.cached_seq;
}
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (self,metamap){var self__ = this;
var self__$1 = this;return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.with_meta(self__.v,metamap),self__.premix_hashcode,self__.hashcode,self__.cnt,self__.dirty,null));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$ = true;
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2 = (function (self,obj){var self__ = this;
var self__$1 = this;if((obj == null))
{return self__$1;
} else
{if(cljs.core.truth_((function (){var G__12234 = obj;return (instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1(G__12234) : instaparse.auto_flatten_seq.afs_QMARK_.call(null,G__12234));
})()))
{if((self__.cnt === (0)))
{return obj;
} else
{if((cljs.core.count(obj) <= instaparse.auto_flatten_seq.threshold))
{var phc = instaparse.auto_flatten_seq.hash_cat(self__$1,obj);var new_cnt = (self__.cnt + cljs.core.count(obj));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.v,obj),phc,cljs.core.mix_collection_hash(phc,new_cnt),new_cnt,(function (){var or__3425__auto__ = self__.dirty;if(or__3425__auto__)
{return or__3425__auto__;
} else
{return obj.dirty;
}
})(),null));
} else
{var phc = instaparse.auto_flatten_seq.hash_cat(self__$1,obj);var new_cnt = (self__.cnt + cljs.core.count(obj));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.v,obj),phc,cljs.core.mix_collection_hash(phc,new_cnt),new_cnt,true,null));

}
}
} else
{var phc = instaparse.auto_flatten_seq.hash_conj(self__.premix_hashcode,obj);var new_cnt = (self__.cnt + (1));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.v,obj),phc,cljs.core.mix_collection_hash(phc,new_cnt),new_cnt,self__.dirty,null));

}
}
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cached_seq;
});
instaparse.auto_flatten_seq.__GT_AutoFlattenSeq = (function __GT_AutoFlattenSeq(v,premix_hashcode,hashcode,cnt,dirty,cached_seq){return (new instaparse.auto_flatten_seq.AutoFlattenSeq(v,premix_hashcode,hashcode,cnt,dirty,cached_seq));
});
instaparse.auto_flatten_seq.auto_flatten_seq = (function auto_flatten_seq(v){var v__$1 = cljs.core.vec(v);var c = cljs.core.count(v__$1);var unmixed_hash = instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1(v__$1);return (new instaparse.auto_flatten_seq.AutoFlattenSeq(v__$1,unmixed_hash,cljs.core.mix_collection_hash(unmixed_hash,c),c,false,null));
});
instaparse.auto_flatten_seq.EMPTY = instaparse.auto_flatten_seq.auto_flatten_seq(cljs.core.PersistentVector.EMPTY);
instaparse.auto_flatten_seq.afs_QMARK_ = (function afs_QMARK_(s){return (s instanceof instaparse.auto_flatten_seq.AutoFlattenSeq);
});
instaparse.auto_flatten_seq.true_count = (function true_count(v){if(instaparse.auto_flatten_seq.afs_QMARK_(v))
{return cljs.core.count(v.v);
} else
{return cljs.core.count(v);
}
});
instaparse.auto_flatten_seq.flat_vec_helper = (function flat_vec_helper(acc,v){while(true){
var temp__4124__auto__ = cljs.core.seq(v);if(temp__4124__auto__)
{var s = temp__4124__auto__;var fst = cljs.core.first(v);if(instaparse.auto_flatten_seq.afs_QMARK_(fst))
{{
var G__12237 = flat_vec_helper(acc,fst);
var G__12238 = cljs.core.next(v);
acc = G__12237;
v = G__12238;
continue;
}
} else
{{
var G__12239 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,fst);
var G__12240 = cljs.core.next(v);
acc = G__12239;
v = G__12240;
continue;
}
}
} else
{return acc;
}
break;
}
});
/**
* Turns deep vector (like the vector inside of FlattenOnDemandVector) into a flat vec
*/
instaparse.auto_flatten_seq.flat_vec = (function flat_vec(v){return cljs.core.persistent_BANG_(instaparse.auto_flatten_seq.flat_vec_helper(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),v));
});
instaparse.auto_flatten_seq.GetVec = (function (){var obj12242 = {};return obj12242;
})();
instaparse.auto_flatten_seq.get_vec = (function get_vec(self){if((function (){var and__3413__auto__ = self;if(and__3413__auto__)
{return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1;
} else
{return and__3413__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(self);
} else
{var x__4062__auto__ = (((self == null))?null:self);return (function (){var or__3425__auto__ = (instaparse.auto_flatten_seq.get_vec[(function (){var G__12246 = x__4062__auto__;return goog.typeOf(G__12246);
})()]);if(or__3425__auto__)
{return or__3425__auto__;
} else
{var or__3425__auto____$1 = (instaparse.auto_flatten_seq.get_vec["_"]);if(or__3425__auto____$1)
{return or__3425__auto____$1;
} else
{throw cljs.core.missing_protocol("GetVec.get-vec",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
*/
instaparse.auto_flatten_seq.FlattenOnDemandVector = (function (v,hashcode,cnt,flat){
this.v = v;
this.hashcode = hashcode;
this.cnt = cnt;
this.flat = flat;
this.cljs$lang$protocol_mask$partition0$ = 150364959;
this.cljs$lang$protocol_mask$partition1$ = 2048;
})
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$type = true;
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/FlattenOnDemandVector";
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorPrWriter = (function (this__4002__auto__,writer__4003__auto__,opt__4004__auto__){return cljs.core._write(writer__4003__auto__,"instaparse.auto-flatten-seq/FlattenOnDemandVector");
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.toString = (function (){var self__ = this;
var self = this;return cljs.core.pr_str_STAR_(self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (self,key){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$ILookup$_lookup$arity$2(null,key);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (self,key,not_found){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$ILookup$_lookup$arity$3(null,key,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$ = true;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.not((function (){var G__12248 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12248) : cljs.core.deref.call(null,G__12248));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flat,((function (self__$1){
return (function (_){return cljs.core.with_meta(instaparse.auto_flatten_seq.flat_vec((function (){var G__12249 = self__.v;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12249) : cljs.core.deref.call(null,G__12249));
})()),cljs.core.meta((function (){var G__12250 = self__.v;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12250) : cljs.core.deref.call(null,G__12250));
})()));
});})(self__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.v,((function (self__$1){
return (function (_){return null;
});})(self__$1))
);
} else
{}
var G__12251 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12251) : cljs.core.deref.call(null,G__12251));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (self,f,init){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IKVReduce$_kv_reduce$arity$3(null,f,init);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (self,i){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IIndexed$_nth$arity$2(null,i);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (self,i,not_found){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IIndexed$_nth$arity$3(null,i,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (self,i,val){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IVector$_assoc_n$arity$3(null,i,val);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_((function (){var G__12252 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12252) : cljs.core.deref.call(null,G__12252));
})()))
{return cljs.core.meta((function (){var G__12253 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12253) : cljs.core.deref.call(null,G__12253));
})());
} else
{return cljs.core.meta((function (){var G__12254 = self__.v;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12254) : cljs.core.deref.call(null,G__12254));
})());
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cnt;
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IStack$_peek$arity$1(null);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IStack$_pop$arity$1(null);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if((self__.cnt > (0)))
{return cljs.core.rseq(instaparse.auto_flatten_seq.get_vec(self__$1));
} else
{return null;
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.hashcode;
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (self,other){var self__ = this;
var self__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.hashcode,cljs.core.hash(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.cnt,cljs.core.count(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(instaparse.auto_flatten_seq.get_vec(self__$1),other));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.with_meta(instaparse.auto_flatten_seq.EMPTY,cljs.core.meta(self__$1));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (self,i,val){var self__ = this;
var self__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.auto_flatten_seq.get_vec(self__$1),i,val);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (self,k){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec(self__$1).cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,k);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.seq(instaparse.auto_flatten_seq.get_vec(self__$1));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (self,metamap){var self__ = this;
var self__$1 = this;if(cljs.core.truth_((function (){var G__12255 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12255) : cljs.core.deref.call(null,G__12255));
})()))
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector((function (){var G__12256 = (function (){var G__12257 = self__.v;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12257) : cljs.core.deref.call(null,G__12257));
})();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12256) : cljs.core.atom.call(null,G__12256));
})(),self__.hashcode,self__.cnt,(function (){var G__12258 = cljs.core.with_meta((function (){var G__12259 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12259) : cljs.core.deref.call(null,G__12259));
})(),metamap);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12258) : cljs.core.atom.call(null,G__12258));
})()));
} else
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector((function (){var G__12260 = cljs.core.with_meta((function (){var G__12261 = self__.v;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12261) : cljs.core.deref.call(null,G__12261));
})(),metamap);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12260) : cljs.core.atom.call(null,G__12260));
})(),self__.hashcode,self__.cnt,(function (){var G__12262 = (function (){var G__12263 = self__.flat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12263) : cljs.core.deref.call(null,G__12263));
})();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12262) : cljs.core.atom.call(null,G__12262));
})()));
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (self,obj){var self__ = this;
var self__$1 = this;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(instaparse.auto_flatten_seq.get_vec(self__$1),obj);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.call = (function() {
var G__12264 = null;
var G__12264__2 = (function (self__,arg){var self__ = this;
var self____$1 = this;var self = self____$1;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$2(null,arg);
});
var G__12264__3 = (function (self__,arg,not_found){var self__ = this;
var self____$1 = this;var self = self____$1;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$3(null,arg,not_found);
});
G__12264 = function(self__,arg,not_found){
switch(arguments.length){
case 2:
return G__12264__2.call(this,self__,arg);
case 3:
return G__12264__3.call(this,self__,arg,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12264.cljs$core$IFn$_invoke$arity$2 = G__12264__2;
G__12264.cljs$core$IFn$_invoke$arity$3 = G__12264__3;
return G__12264;
})()
;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.apply = (function (self__,args12247){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12247)));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (arg){var self__ = this;
var self = this;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$2(null,arg);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (arg,not_found){var self__ = this;
var self = this;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$3(null,arg,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (self,that){var self__ = this;
var self__$1 = this;return cljs.core._compare(instaparse.auto_flatten_seq.get_vec(self__$1),that);
});
instaparse.auto_flatten_seq.__GT_FlattenOnDemandVector = (function __GT_FlattenOnDemandVector(v,hashcode,cnt,flat){return (new instaparse.auto_flatten_seq.FlattenOnDemandVector(v,hashcode,cnt,flat));
});
instaparse.auto_flatten_seq.convert_afs_to_vec = (function convert_afs_to_vec(afs){if(cljs.core.truth_(afs.dirty))
{if(cljs.core.truth_(afs.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1(null)))
{return cljs.core.vec(cljs.core.seq(afs));
} else
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector((function (){var G__12267 = afs.v;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12267) : cljs.core.atom.call(null,G__12267));
})(),afs.hashcode,afs.cnt,(function (){var G__12268 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12268) : cljs.core.atom.call(null,G__12268));
})()));
}
} else
{return afs.v;

}
});