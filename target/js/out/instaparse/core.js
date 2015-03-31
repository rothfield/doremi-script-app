// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.abnf');
goog.require('instaparse.gll');
goog.require('instaparse.print');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('instaparse.transform');
goog.require('instaparse.cfg');
goog.require('instaparse.abnf');
goog.require('instaparse.failure');
goog.require('instaparse.print');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.repeat');
goog.require('instaparse.repeat');
instaparse.core._STAR_default_output_format_STAR_ = cljs.core.constant$keyword$40;
/**
* Changes the default output format.  Input should be :hiccup or :enlive
*/
instaparse.core.set_default_output_format_BANG_ = (function set_default_output_format_BANG_(type){return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = cljs.core.constant$keyword$148;
/**
* Changes the default input format.  Input should be :abnf or :ebnf
*/
instaparse.core.set_default_input_format_BANG_ = (function set_default_input_format_BANG_(type){return instaparse.core._STAR_default_input_format_STAR_ = type;
});
instaparse.core.unhide_parser = (function unhide_parser(parser,unhide){var G__13222 = unhide;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,G__13222))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$66,instaparse.combinators_source.unhide_all(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$150,G__13222))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$66,instaparse.combinators_source.unhide_tags(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$43,G__13222))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$66,instaparse.combinators_source.unhide_all_content(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13222))
{return parser;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unhide))));

}
}
}
}
});
/**
* Use parser to parse the text.  Returns first parse tree found
* that completely parses the text.  If no parse tree is possible, returns
* a Failure object.
* 
* Optional keyword arguments:
* :start :keyword  (where :keyword is name of starting production rule)
* :partial true    (parses that don't consume the whole string are okay)
* :total true      (if parse fails, embed failure node in tree)
* :unhide <:tags or :content or :all> (for this parse, disable hiding)
* :optimize :memory   (when possible, employ strategy to use less memory)
* @param {...*} var_args
*/
instaparse.core.parse = (function() { 
var parse__delegate = function (parser,text,p__13223){var map__13227 = p__13223;var map__13227__$1 = ((cljs.core.seq_QMARK_(map__13227))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13227):map__13227);var options = map__13227__$1;var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$151,cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(parser));var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$152,false);var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$146,false);var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.constant$keyword$153);var parser__$1 = instaparse.core.unhide_parser(parser,unhide);if(cljs.core.truth_(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(options)))
{return instaparse.gll.parse_total(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__13228 = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(parser__$1);return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__13228) : instaparse.reduction.node_builders.call(null,G__13228));
})());
} else
{if(cljs.core.truth_((function (){var and__3413__auto__ = optimize_QMARK_;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not(partial_QMARK_);
} else
{return and__3413__auto__;
}
})()))
{var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);if(cljs.core.truth_((function (){var G__13229 = result;return (instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13229) : instaparse.core.failure_QMARK_.call(null,G__13229));
})()))
{return instaparse.gll.parse(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else
{return result;
}
} else
{return instaparse.gll.parse(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
};
var parse = function (parser,text,var_args){
var p__13223 = null;if (arguments.length > 2) {
  p__13223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return parse__delegate.call(this,parser,text,p__13223);};
parse.cljs$lang$maxFixedArity = 2;
parse.cljs$lang$applyTo = (function (arglist__13230){
var parser = cljs.core.first(arglist__13230);
arglist__13230 = cljs.core.next(arglist__13230);
var text = cljs.core.first(arglist__13230);
var p__13223 = cljs.core.rest(arglist__13230);
return parse__delegate(parser,text,p__13223);
});
parse.cljs$core$IFn$_invoke$arity$variadic = parse__delegate;
return parse;
})()
;
/**
* Use parser to parse the text.  Returns lazy seq of all parse trees
* that completely parse the text.  If no parse tree is possible, returns
* () with a Failure object attached as metadata.
* 
* Optional keyword arguments:
* :start :keyword  (where :keyword is name of starting production rule)
* :partial true    (parses that don't consume the whole string are okay)
* :total true      (if parse fails, embed failure node in tree)
* :unhide <:tags or :content or :all> (for this parse, disable hiding)
* @param {...*} var_args
*/
instaparse.core.parses = (function() { 
var parses__delegate = function (parser,text,p__13231){var map__13234 = p__13231;var map__13234__$1 = ((cljs.core.seq_QMARK_(map__13234))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13234):map__13234);var options = map__13234__$1;var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$151,cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(parser));var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$152,false);var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.constant$keyword$153);var parser__$1 = instaparse.core.unhide_parser(parser,unhide);if(cljs.core.truth_(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(options)))
{return instaparse.gll.parses_total(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__13235 = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(parser__$1);return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__13235) : instaparse.reduction.node_builders.call(null,G__13235));
})());
} else
{return instaparse.gll.parses(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
};
var parses = function (parser,text,var_args){
var p__13231 = null;if (arguments.length > 2) {
  p__13231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return parses__delegate.call(this,parser,text,p__13231);};
parses.cljs$lang$maxFixedArity = 2;
parses.cljs$lang$applyTo = (function (arglist__13236){
var parser = cljs.core.first(arglist__13236);
arglist__13236 = cljs.core.next(arglist__13236);
var text = cljs.core.first(arglist__13236);
var p__13231 = cljs.core.rest(arglist__13236);
return parses__delegate(parser,text,p__13231);
});
parses.cljs$core$IFn$_invoke$arity$variadic = parses__delegate;
return parses;
})()
;

/**
* @constructor
* @param {*} grammar
* @param {*} start_production
* @param {*} output_format
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4021__auto__,k__4022__auto__){var self__ = this;
var this__4021__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k13238,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__13241 = (((k13238 instanceof cljs.core.Keyword))?k13238.fqn:null);switch (G__13241) {
case "output-format":
return self__.output_format;

break;
case "start-production":
return self__.start_production;

break;
case "grammar":
return self__.grammar;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13238,else__4024__auto__);

}
});
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer(writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.core.Parser{",", ","}",opts__4037__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$110,self__.output_format],null))], null),self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap(this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
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
instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4030__auto__,k__4031__auto__){var self__ = this;
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$110,null], null), null),k__4031__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__13237){var self__ = this;
var this__4028__auto____$1 = this;var pred__13242 = cljs.core.keyword_identical_QMARK_;var expr__13243 = k__4029__auto__;if(cljs.core.truth_((function (){var G__13245 = cljs.core.constant$keyword$66;var G__13246 = expr__13243;return (pred__13242.cljs$core$IFn$_invoke$arity$2 ? pred__13242.cljs$core$IFn$_invoke$arity$2(G__13245,G__13246) : pred__13242.call(null,G__13245,G__13246));
})()))
{return (new instaparse.core.Parser(G__13237,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13247 = cljs.core.constant$keyword$67;var G__13248 = expr__13243;return (pred__13242.cljs$core$IFn$_invoke$arity$2 ? pred__13242.cljs$core$IFn$_invoke$arity$2(G__13247,G__13248) : pred__13242.call(null,G__13247,G__13248));
})()))
{return (new instaparse.core.Parser(self__.grammar,G__13237,self__.output_format,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__13249 = cljs.core.constant$keyword$110;var G__13250 = expr__13243;return (pred__13242.cljs$core$IFn$_invoke$arity$2 ? pred__13242.cljs$core$IFn$_invoke$arity$2(G__13249,G__13250) : pred__13242.call(null,G__13249,G__13250));
})()))
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__13237,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4029__auto__,G__13237),null));
}
}
}
});
instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$110,self__.output_format],null))], null),self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__13237){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__13237,self__.__extmap,self__.__hash));
});
instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4027__auto__))
{return cljs.core._assoc(this__4026__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.core.Parser.prototype.call = (function() {
var G__13252 = null;
var G__13252__2 = (function (self__,text){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse(parser,text);
});
var G__13252__4 = (function (self__,text,key1,val1){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1], 0));
});
var G__13252__6 = (function (self__,text,key1,val1,key2,val2){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2], 0));
});
var G__13252__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2,key3,val3], 0));
});
G__13252 = function(self__,text,key1,val1,key2,val2,key3,val3){
switch(arguments.length){
case 2:
return G__13252__2.call(this,self__,text);
case 4:
return G__13252__4.call(this,self__,text,key1,val1);
case 6:
return G__13252__6.call(this,self__,text,key1,val1,key2,val2);
case 8:
return G__13252__8.call(this,self__,text,key1,val1,key2,val2,key3,val3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13252.cljs$core$IFn$_invoke$arity$2 = G__13252__2;
G__13252.cljs$core$IFn$_invoke$arity$4 = G__13252__4;
G__13252.cljs$core$IFn$_invoke$arity$6 = G__13252__6;
G__13252.cljs$core$IFn$_invoke$arity$8 = G__13252__8;
return G__13252;
})()
;
instaparse.core.Parser.prototype.apply = (function (self__,args13240){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13240)));
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){var self__ = this;
var parser = this;return instaparse.core.parse(parser,text);
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){var self__ = this;
var parser = this;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1], 0));
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){var self__ = this;
var parser = this;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2], 0));
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){var self__ = this;
var parser = this;return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.array_seq([key1,val1,key2,val2,key3,val3], 0));
});
instaparse.core.Parser.cljs$lang$type = true;
instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.core/Parser");
});
instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write(writer__4056__auto__,"instaparse.core/Parser");
});
instaparse.core.__GT_Parser = (function __GT_Parser(grammar,start_production,output_format){return (new instaparse.core.Parser(grammar,start_production,output_format));
});
instaparse.core.map__GT_Parser = (function map__GT_Parser(G__13239){return (new instaparse.core.Parser(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__13239),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__13239),cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__13239),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13239,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$67,cljs.core.constant$keyword$110], 0))));
});
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = true;
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){var parser__$1 = this;return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
});
/**
* Takes a string specification of a context-free grammar,
* or a URI for a text file containing such a specification,
* or a map of parser combinators and returns a parser for that grammar.
* 
* Optional keyword arguments:
* :input-format :ebnf
* or
* :input-format :abnf
* 
* :output-format :enlive
* or
* :output-format :hiccup
* 
* :start :keyword (where :keyword is name of starting production rule)
* 
* :string-ci true (treat all string literals as case insensitive)
* 
* :no-slurp (ignored in cljs as slurping is not supported)
* 
* :auto-whitespace (:standard or :comma)
* or
* :auto-whitespace custom-whitespace-parser
* @param {...*} var_args
*/
instaparse.core.parser = (function() { 
var parser__delegate = function (grammar_specification,p__13253){var map__13261 = p__13253;var map__13261__$1 = ((cljs.core.seq_QMARK_(map__13261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13261):map__13261);var options = map__13261__$1;var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$155,instaparse.core._STAR_default_input_format_STAR_);var build_parser = (function (){var G__13262 = (((input_format instanceof cljs.core.Keyword))?input_format.fqn:null);switch (G__13262) {
case "ebnf":
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.constant$keyword$59)))
{return ((function (G__13262,input_format,map__13261,map__13261__$1,options){
return (function (spec,output_format){var _STAR_case_insensitive_literals_STAR_13263 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;try{instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;
return instaparse.cfg.build_parser(spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_13263;
}});
;})(G__13262,input_format,map__13261,map__13261__$1,options))
} else
{return instaparse.cfg.build_parser;
}

break;
case "abnf":
return instaparse.abnf.build_parser;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_format))));

}
})();var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$110,instaparse.core._STAR_default_output_format_STAR_);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.constant$keyword$151,null);var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser__$1 = (function (){var G__13264 = grammar_specification;var G__13265 = output_format;return (build_parser.cljs$core$IFn$_invoke$arity$2 ? build_parser.cljs$core$IFn$_invoke$arity$2(G__13264,G__13265) : build_parser.call(null,G__13264,G__13265));
})();if(cljs.core.truth_(start))
{return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.constant$keyword$67,start));
} else
{return instaparse.core.map__GT_Parser(parser__$1);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser__$1 = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);return instaparse.core.map__GT_Parser(parser__$1);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(function (){var G__13266 = (0);return (grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1(G__13266) : grammar_specification.call(null,G__13266));
})());var parser__$1 = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);return instaparse.core.map__GT_Parser(parser__$1);
})():null)));var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.constant$keyword$156);var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);var temp__4124__auto__ = whitespace_parser;if(cljs.core.truth_(temp__4124__auto__))
{var map__13267 = temp__4124__auto__;var map__13267__$1 = ((cljs.core.seq_QMARK_(map__13267))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13267):map__13267);var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.constant$keyword$66);var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.constant$keyword$67);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,cljs.core.constant$keyword$66,instaparse.combinators_source.auto_whitespace(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(built_parser),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else
{return built_parser;
}
};
var parser = function (grammar_specification,var_args){
var p__13253 = null;if (arguments.length > 1) {
  p__13253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return parser__delegate.call(this,grammar_specification,p__13253);};
parser.cljs$lang$maxFixedArity = 1;
parser.cljs$lang$applyTo = (function (arglist__13269){
var grammar_specification = cljs.core.first(arglist__13269);
var p__13253 = cljs.core.rest(arglist__13269);
return parser__delegate(grammar_specification,p__13253);
});
parser.cljs$core$IFn$_invoke$arity$variadic = parser__delegate;
return parser;
})()
;
/**
* Tests whether a parse result is a failure.
*/
instaparse.core.failure_QMARK_ = (function failure_QMARK_(result){return ((result instanceof instaparse.gll.Failure)) || ((cljs.core.meta(result) instanceof instaparse.gll.Failure));
});
/**
* Extracts failure object from failed parse result.
*/
instaparse.core.get_failure = (function get_failure(result){if((result instanceof instaparse.gll.Failure))
{return result;
} else
{if((cljs.core.meta(result) instanceof instaparse.gll.Failure))
{return cljs.core.meta(result);
} else
{return null;

}
}
});
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,instaparse.core.parser("whitespace = #'\\s+'"),cljs.core.constant$keyword$158,instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
