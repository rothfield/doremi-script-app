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
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
* Changes the default output format.  Input should be :hiccup or :enlive
*/
instaparse.core.set_default_output_format_BANG_ = (function set_default_output_format_BANG_(type){if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,type)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),new cljs.core.Symbol(null,"type","type",-1480165421,null)))))));
}
return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
* Changes the default input format.  Input should be :abnf or :ebnf
*/
instaparse.core.set_default_input_format_BANG_ = (function set_default_input_format_BANG_(type){if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null).call(null,type)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),new cljs.core.Symbol(null,"type","type",-1480165421,null)))))));
}
return instaparse.core._STAR_default_input_format_STAR_ = type;
});
instaparse.core.unhide_parser = (function unhide_parser(parser,unhide){var G__6043 = unhide;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),G__6043))
{return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),G__6043))
{return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224),G__6043))
{return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else
{if(cljs.core._EQ_.call(null,null,G__6043))
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
var parse__delegate = function (parser,text,p__6044){var map__6046 = p__6044;var map__6046__$1 = ((cljs.core.seq_QMARK_.call(null,map__6046))?cljs.core.apply.call(null,cljs.core.hash_map,map__6046):map__6046);var options = map__6046__$1;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"unhide","unhide",-413983695))))))));
}
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"optimize","optimize",-1912349448))))))));
}
var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);var optimize_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options)))
{return instaparse.gll.parse_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{if(cljs.core.truth_((function (){var and__3413__auto__ = optimize_QMARK_;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not.call(null,partial_QMARK_);
} else
{return and__3413__auto__;
}
})()))
{var result = instaparse.repeat.try_repeating_parse_strategy.call(null,parser__$1,text,start_production);if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,result)))
{return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else
{return result;
}
} else
{return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
};
var parse = function (parser,text,var_args){
var p__6044 = null;if (arguments.length > 2) {
  p__6044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return parse__delegate.call(this,parser,text,p__6044);};
parse.cljs$lang$maxFixedArity = 2;
parse.cljs$lang$applyTo = (function (arglist__6047){
var parser = cljs.core.first(arglist__6047);
arglist__6047 = cljs.core.next(arglist__6047);
var text = cljs.core.first(arglist__6047);
var p__6044 = cljs.core.rest(arglist__6047);
return parse__delegate(parser,text,p__6044);
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
var parses__delegate = function (parser,text,p__6048){var map__6050 = p__6048;var map__6050__$1 = ((cljs.core.seq_QMARK_.call(null,map__6050))?cljs.core.apply.call(null,cljs.core.hash_map,map__6050):map__6050);var options = map__6050__$1;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"unhide","unhide",-413983695))))))));
}
var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options)))
{return instaparse.gll.parses_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else
{return instaparse.gll.parses.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
};
var parses = function (parser,text,var_args){
var p__6048 = null;if (arguments.length > 2) {
  p__6048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return parses__delegate.call(this,parser,text,p__6048);};
parses.cljs$lang$maxFixedArity = 2;
parses.cljs$lang$applyTo = (function (arglist__6051){
var parser = cljs.core.first(arglist__6051);
arglist__6051 = cljs.core.next(arglist__6051);
var text = cljs.core.first(arglist__6051);
var p__6048 = cljs.core.rest(arglist__6051);
return parses__delegate(parser,text,p__6048);
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
var this__4021__auto____$1 = this;return cljs.core._lookup.call(null,this__4021__auto____$1,k__4022__auto__,null);
});
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4023__auto__,k6053,else__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;var G__6056 = (((k6053 instanceof cljs.core.Keyword))?k6053.fqn:null);switch (G__6056) {
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
return cljs.core.get.call(null,self__.__extmap,k6053,else__4024__auto__);

}
});
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4035__auto__,writer__4036__auto__,opts__4037__auto__){var self__ = this;
var this__4035__auto____$1 = this;var pr_pair__4038__auto__ = ((function (this__4035__auto____$1){
return (function (keyval__4039__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,cljs.core.pr_writer,""," ","",opts__4037__auto__,keyval__4039__auto__);
});})(this__4035__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4036__auto__,pr_pair__4038__auto__,"#instaparse.core.Parser{",", ","}",opts__4037__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4019__auto__){var self__ = this;
var this__4019__auto____$1 = this;return self__.__meta;
});
instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4016__auto__){var self__ = this;
var this__4016__auto____$1 = this;var h__3836__auto__ = self__.__hash;if(!((h__3836__auto__ == null)))
{return h__3836__auto__;
} else
{var h__3836__auto____$1 = cljs.core.hash_imap.call(null,this__4016__auto____$1);self__.__hash = h__3836__auto____$1;
return h__3836__auto____$1;
}
});
instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4017__auto__,other__4018__auto__){var self__ = this;
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
instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4030__auto__,k__4031__auto__){var self__ = this;
var this__4030__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__4031__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4030__auto____$1),self__.__meta),k__4031__auto__);
} else
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4031__auto__)),null));
}
});
instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4028__auto__,k__4029__auto__,G__6052){var self__ = this;
var this__4028__auto____$1 = this;var pred__6057 = cljs.core.keyword_identical_QMARK_;var expr__6058 = k__4029__auto__;if(cljs.core.truth_(pred__6057.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__6058)))
{return (new instaparse.core.Parser(G__6052,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6057.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__6058)))
{return (new instaparse.core.Parser(self__.grammar,G__6052,self__.output_format,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6057.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__6058)))
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__6052,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4029__auto__,G__6052),null));
}
}
}
});
instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});
instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4020__auto__,G__6052){var self__ = this;
var this__4020__auto____$1 = this;return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__6052,self__.__extmap,self__.__hash));
});
instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4026__auto__,entry__4027__auto__){var self__ = this;
var this__4026__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4027__auto__))
{return cljs.core._assoc.call(null,this__4026__auto____$1,cljs.core._nth.call(null,entry__4027__auto__,(0)),cljs.core._nth.call(null,entry__4027__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4026__auto____$1,entry__4027__auto__);
}
});
instaparse.core.Parser.prototype.call = (function() {
var G__6061 = null;
var G__6061__2 = (function (self__,text){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.call(null,parser,text);
});
var G__6061__4 = (function (self__,text,key1,val1){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.call(null,parser,text,key1,val1);
});
var G__6061__6 = (function (self__,text,key1,val1,key2,val2){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});
var G__6061__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){var self__ = this;
var self____$1 = this;var parser = self____$1;return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});
G__6061 = function(self__,text,key1,val1,key2,val2,key3,val3){
switch(arguments.length){
case 2:
return G__6061__2.call(this,self__,text);
case 4:
return G__6061__4.call(this,self__,text,key1,val1);
case 6:
return G__6061__6.call(this,self__,text,key1,val1,key2,val2);
case 8:
return G__6061__8.call(this,self__,text,key1,val1,key2,val2,key3,val3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6061.cljs$core$IFn$_invoke$arity$2 = G__6061__2;
G__6061.cljs$core$IFn$_invoke$arity$4 = G__6061__4;
G__6061.cljs$core$IFn$_invoke$arity$6 = G__6061__6;
G__6061.cljs$core$IFn$_invoke$arity$8 = G__6061__8;
return G__6061;
})()
;
instaparse.core.Parser.prototype.apply = (function (self__,args6055){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6055)));
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){var self__ = this;
var parser = this;return instaparse.core.parse.call(null,parser,text);
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){var self__ = this;
var parser = this;return instaparse.core.parse.call(null,parser,text,key1,val1);
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){var self__ = this;
var parser = this;return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){var self__ = this;
var parser = this;return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});
instaparse.core.Parser.cljs$lang$type = true;
instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__4055__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.core/Parser");
});
instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__4055__auto__,writer__4056__auto__){return cljs.core._write.call(null,writer__4056__auto__,"instaparse.core/Parser");
});
instaparse.core.__GT_Parser = (function __GT_Parser(grammar,start_production,output_format){return (new instaparse.core.Parser(grammar,start_production,output_format));
});
instaparse.core.map__GT_Parser = (function map__GT_Parser(G__6054){return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__6054),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__6054),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__6054),null,cljs.core.dissoc.call(null,G__6054,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676))));
});
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = true;
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){var parser__$1 = this;return cljs.core._write.call(null,writer,instaparse.print.Parser__GT_str.call(null,parser__$1));
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
var parser__delegate = function (grammar_specification,p__6062){var map__6067 = p__6062;var map__6067__$1 = ((cljs.core.seq_QMARK_.call(null,map__6067))?cljs.core.apply.call(null,cljs.core.hash_map,map__6067):map__6067);var options = map__6067__$1;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"input-format","input-format",-422703481))))))));
}
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"output-format","output-format",-1826382676))))))));
}
if((function (){var ws_parser = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));return ((ws_parser == null)) || (cljs.core.contains_QMARK_.call(null,instaparse.core.standard_whitespace_parsers,ws_parser)) || ((cljs.core.map_QMARK_.call(null,ws_parser)) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))));
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317))], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null)),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"standard-whitespace-parsers","standard-whitespace-parsers",-1387573457,null),new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null)),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null),new cljs.core.Keyword(null,"grammar","grammar",1881328267)),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"ws-parser","ws-parser",937152647,null),new cljs.core.Keyword(null,"start-production","start-production",687546537))))))))));
}
var input_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);var build_parser = (function (){var G__6068 = (((input_format instanceof cljs.core.Keyword))?input_format.fqn:null);switch (G__6068) {
case "ebnf":
if(cljs.core.truth_(cljs.core.get.call(null,options,new cljs.core.Keyword(null,"string-ci","string-ci",374631805))))
{return ((function (G__6068,input_format,map__6067,map__6067__$1,options){
return (function (spec,output_format){var _STAR_case_insensitive_literals_STAR_6069 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;try{instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;
return instaparse.cfg.build_parser.call(null,spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_6069;
}});
;})(G__6068,input_format,map__6067,map__6067__$1,options))
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
})();var output_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);var start = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),null);var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser__$1 = build_parser.call(null,grammar_specification,output_format);if(cljs.core.truth_(start))
{return instaparse.core.map__GT_Parser.call(null,cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else
{return instaparse.core.map__GT_Parser.call(null,parser__$1);
}
})():((cljs.core.map_QMARK_.call(null,grammar_specification))?(function (){var parser__$1 = instaparse.cfg.build_parser_from_combinators.call(null,grammar_specification,output_format,start);return instaparse.core.map__GT_Parser.call(null,parser__$1);
})():((cljs.core.vector_QMARK_.call(null,grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:grammar_specification.call(null,(0)));var parser__$1 = instaparse.cfg.build_parser_from_combinators.call(null,cljs.core.apply.call(null,cljs.core.hash_map,grammar_specification),output_format,start__$1);return instaparse.core.map__GT_Parser.call(null,parser__$1);
})():null)));var auto_whitespace = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.call(null,instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);var temp__4124__auto__ = whitespace_parser;if(cljs.core.truth_(temp__4124__auto__))
{var map__6070 = temp__4124__auto__;var map__6070__$1 = ((cljs.core.seq_QMARK_.call(null,map__6070))?cljs.core.apply.call(null,cljs.core.hash_map,map__6070):map__6070);var ws_grammar = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));var ws_start = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));return cljs.core.assoc.call(null,built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(built_parser),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else
{return built_parser;
}
};
var parser = function (grammar_specification,var_args){
var p__6062 = null;if (arguments.length > 1) {
  p__6062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return parser__delegate.call(this,grammar_specification,p__6062);};
parser.cljs$lang$maxFixedArity = 1;
parser.cljs$lang$applyTo = (function (arglist__6072){
var grammar_specification = cljs.core.first(arglist__6072);
var p__6062 = cljs.core.rest(arglist__6072);
return parser__delegate(grammar_specification,p__6062);
});
parser.cljs$core$IFn$_invoke$arity$variadic = parser__delegate;
return parser;
})()
;
/**
* Tests whether a parse result is a failure.
*/
instaparse.core.failure_QMARK_ = (function failure_QMARK_(result){return ((result instanceof instaparse.gll.Failure)) || ((cljs.core.meta.call(null,result) instanceof instaparse.gll.Failure));
});
/**
* Extracts failure object from failed parse result.
*/
instaparse.core.get_failure = (function get_failure(result){if((result instanceof instaparse.gll.Failure))
{return result;
} else
{if((cljs.core.meta.call(null,result) instanceof instaparse.gll.Failure))
{return cljs.core.meta.call(null,result);
} else
{return null;

}
}
});
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser.call(null,"whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser.call(null,"whitespace = #'[,\\s]+'")], null);

//# sourceMappingURL=core.js.map