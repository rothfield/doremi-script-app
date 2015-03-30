// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('instaparse.transform');
goog.require('instaparse.cfg');
goog.require('goog.string.format');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
/**
* This is normally set to false, in which case the non-terminals
* are treated as case-sensitive, which is NOT the norm
* for ABNF grammars. If you really want case-insensitivity,
* bind this to true, in which case all non-terminals
* will be converted to upper-case internally (which
* you'll have to keep in mind when transforming).
*/
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"CRLF","CRLF",11418756),new cljs.core.Keyword(null,"HTAB","HTAB",11392612),new cljs.core.Keyword(null,"LWSP","LWSP",782998598),new cljs.core.Keyword(null,"LF","LF",1177033158),new cljs.core.Keyword(null,"VCHAR","VCHAR",1962437706),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338),new cljs.core.Keyword(null,"SP","SP",124290284),new cljs.core.Keyword(null,"HEXDIG","HEXDIG",-200221072),new cljs.core.Keyword(null,"CTL","CTL",-9995632),new cljs.core.Keyword(null,"DQUOTE","DQUOTE",-571169808),new cljs.core.Keyword(null,"WSP","WSP",-1046948716),new cljs.core.Keyword(null,"CR","CR",-1654295403),new cljs.core.Keyword(null,"OCTET","OCTET",-743420682),new cljs.core.Keyword(null,"ALPHA","ALPHA",-1463859144),new cljs.core.Keyword(null,"CHAR","CHAR",-1280338086),new cljs.core.Keyword(null,"BIT","BIT",-1854474115)],[instaparse.combinators_source.string.call(null,"\r\n"),instaparse.combinators_source.string.call(null,"\t"),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t")),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.string.call(null,"\r\n"),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t"))))),instaparse.combinators_source.string.call(null,"\n"),instaparse.combinators_source.regexp.call(null,"[\\u0021-\\u007E]"),instaparse.combinators_source.regexp.call(null,"[0-9]"),instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.regexp.call(null,"[0-9a-fA-F]"),instaparse.combinators_source.regexp.call(null,"[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string.call(null,"\""),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t")),instaparse.combinators_source.string.call(null,"\r"),instaparse.combinators_source.regexp.call(null,"[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp.call(null,"[a-zA-Z]"),instaparse.combinators_source.regexp.call(null,"[\\u0001-\\u007F]"),instaparse.combinators_source.regexp.call(null,"[01]")]);
instaparse.abnf.abnf_grammar = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
instaparse.abnf.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7391){
var fmt = cljs.core.first(arglist__7391);
var args = cljs.core.rest(arglist__7391);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Convert an number to a hex string.
*/
instaparse.abnf.number__GT_hex = (function number__GT_hex(v){return clojure.string.replace.call(null,instaparse.abnf.format.call(null,"%2s",v.toString((16)))," ","0");
});
/**
* Takes two chars and returns a combinator representing a range of characters.
*/
instaparse.abnf.char_range = (function char_range(codepoint1,codepoint2){return instaparse.combinators_source.regexp.call(null,("[\\x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.abnf.number__GT_hex.call(null,codepoint1))+"-\\x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.abnf.number__GT_hex.call(null,codepoint2))+"]"));
});
instaparse.abnf.char_codes = (function char_codes(c){var c1 = c.charCodeAt((0));var c2 = c.charCodeAt((1));return cljs.core.map.call(null,cljs.core.char$,(cljs.core.truth_(isNaN(c2))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null)));
});
instaparse.abnf.coerce_char = (function coerce_char(c){if(cljs.core.integer_QMARK_.call(null,c))
{return cljs.core.char$.call(null,c);
} else
{return c;
}
});
/**
* @param {...*} var_args
*/
instaparse.abnf.get_char_combinator = (function() {
var get_char_combinator = null;
var get_char_combinator__1 = (function (num1){return instaparse.combinators_source.string.call(null,cljs.core.apply.call(null,cljs.core.str,instaparse.abnf.char_codes.call(null,num1)));
});
var get_char_combinator__3 = (function() { 
var G__7400__delegate = function (num1,num2,nums){var v = cljs.core.vec.call(null,cljs.core.map.call(null,instaparse.abnf.coerce_char,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [num1,num2], null),nums)));if(cljs.core._EQ_.call(null,v.call(null,(1)),"-"))
{return instaparse.abnf.char_range.call(null,v.call(null,(0)),v.call(null,(2)));
} else
{return cljs.core.apply.call(null,instaparse.combinators_source.cat,(function (){var iter__4164__auto__ = ((function (v){
return (function iter__7396(s__7397){return (new cljs.core.LazySeq(null,((function (v){
return (function (){var s__7397__$1 = s__7397;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7397__$1);if(temp__4126__auto__)
{var s__7397__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7397__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7397__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7399 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7398 = (0);while(true){
if((i__7398 < size__4163__auto__))
{var n = cljs.core._nth.call(null,c__4162__auto__,i__7398);cljs.core.chunk_append.call(null,b__7399,instaparse.combinators_source.string.call(null,cljs.core.apply.call(null,cljs.core.str,instaparse.abnf.char_codes.call(null,n))));
{
var G__7401 = (i__7398 + (1));
i__7398 = G__7401;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7399),iter__7396.call(null,cljs.core.chunk_rest.call(null,s__7397__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7399),null);
}
} else
{var n = cljs.core.first.call(null,s__7397__$2);return cljs.core.cons.call(null,instaparse.combinators_source.string.call(null,cljs.core.apply.call(null,cljs.core.str,instaparse.abnf.char_codes.call(null,n))),iter__7396.call(null,cljs.core.rest.call(null,s__7397__$2)));
}
} else
{return null;
}
break;
}
});})(v))
,null,null));
});})(v))
;return iter__4164__auto__.call(null,v);
})());
}
};
var G__7400 = function (num1,num2,var_args){
var nums = null;if (arguments.length > 2) {
  nums = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7400__delegate.call(this,num1,num2,nums);};
G__7400.cljs$lang$maxFixedArity = 2;
G__7400.cljs$lang$applyTo = (function (arglist__7402){
var num1 = cljs.core.first(arglist__7402);
arglist__7402 = cljs.core.next(arglist__7402);
var num2 = cljs.core.first(arglist__7402);
var nums = cljs.core.rest(arglist__7402);
return G__7400__delegate(num1,num2,nums);
});
G__7400.cljs$core$IFn$_invoke$arity$variadic = G__7400__delegate;
return G__7400;
})()
;
get_char_combinator = function(num1,num2,var_args){
var nums = var_args;
switch(arguments.length){
case 1:
return get_char_combinator__1.call(this,num1);
default:
return get_char_combinator__3.cljs$core$IFn$_invoke$arity$variadic(num1,num2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_char_combinator.cljs$lang$maxFixedArity = 2;
get_char_combinator.cljs$lang$applyTo = get_char_combinator__3.cljs$lang$applyTo;
get_char_combinator.cljs$core$IFn$_invoke$arity$1 = get_char_combinator__1;
get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = get_char_combinator__3.cljs$core$IFn$_invoke$arity$variadic;
return get_char_combinator;
})()
;
/**
* Restricts map to certain keys
*/
instaparse.abnf.project = (function project(m,ks){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__7407(s__7408){return (new cljs.core.LazySeq(null,(function (){var s__7408__$1 = s__7408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7408__$1);if(temp__4126__auto__)
{var s__7408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7408__$2))
{var c__4162__auto__ = cljs.core.chunk_first.call(null,s__7408__$2);var size__4163__auto__ = cljs.core.count.call(null,c__4162__auto__);var b__7410 = cljs.core.chunk_buffer.call(null,size__4163__auto__);if((function (){var i__7409 = (0);while(true){
if((i__7409 < size__4163__auto__))
{var k = cljs.core._nth.call(null,c__4162__auto__,i__7409);if(cljs.core.contains_QMARK_.call(null,m,k))
{cljs.core.chunk_append.call(null,b__7410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m.call(null,k)], null));
{
var G__7411 = (i__7409 + (1));
i__7409 = G__7411;
continue;
}
} else
{{
var G__7412 = (i__7409 + (1));
i__7409 = G__7412;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7410),iter__7407.call(null,cljs.core.chunk_rest.call(null,s__7408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7410),null);
}
} else
{var k = cljs.core.first.call(null,s__7408__$2);if(cljs.core.contains_QMARK_.call(null,m,k))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m.call(null,k)], null),iter__7407.call(null,cljs.core.rest.call(null,s__7408__$2)));
} else
{{
var G__7413 = cljs.core.rest.call(null,s__7408__$2);
s__7408__$1 = G__7413;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4164__auto__.call(null,ks);
})());
});
/**
* Merges abnf-core map in with parsed grammar map
*/
instaparse.abnf.merge_core = (function merge_core(grammar_map){return cljs.core.merge.call(null,instaparse.abnf.project.call(null,instaparse.abnf.abnf_core,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,cljs.core.vals.call(null,grammar_map)))),grammar_map);
});
/**
* Tests whether parser was constructed with hide-tag
*/
instaparse.abnf.hide_tag_QMARK_ = (function hide_tag_QMARK_(p){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function alt_preserving_hide_tag(p1,p2){var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_.call(null,p1);var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_.call(null,p2);if((hide_tag_p1_QMARK_) && (hide_tag_p2_QMARK_))
{return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,cljs.core.dissoc.call(null,p1,new cljs.core.Keyword(null,"red","red",-969428204)),cljs.core.dissoc.call(null,p2,new cljs.core.Keyword(null,"red","red",-969428204))));
} else
{if(hide_tag_p1_QMARK_)
{return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,cljs.core.dissoc.call(null,p1,new cljs.core.Keyword(null,"red","red",-969428204)),p2));
} else
{if(hide_tag_p2_QMARK_)
{return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,p1,cljs.core.dissoc.call(null,p2,new cljs.core.Keyword(null,"red","red",-969428204))));
} else
{return instaparse.combinators_source.alt.call(null,p1,p2);

}
}
}
});
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193),new cljs.core.Keyword(null,"NUM","NUM",-218662260),new cljs.core.Keyword(null,"char-val","char-val",1408617933),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"hex-char","hex-char",764443568),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614),new cljs.core.Keyword(null,"alternation","alternation",-1162147630),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"repetition","repetition",1938392115),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)],[instaparse.combinators_source.neg,(function (tag,rule){return new cljs.core.PersistentArrayMap.fromArray([tag,instaparse.combinators_source.hide_tag.call(null,rule)], true, false);
}),instaparse.combinators_source.look,(function() { 
var G__7418__delegate = function (cs){return parseInt(cljs.core.apply.call(null,cljs.core.str,cs),(2));
};
var G__7418 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7418__delegate.call(this,cs);};
G__7418.cljs$lang$maxFixedArity = 0;
G__7418.cljs$lang$applyTo = (function (arglist__7419){
var cs = cljs.core.seq(arglist__7419);
return G__7418__delegate(cs);
});
G__7418.cljs$core$IFn$_invoke$arity$variadic = G__7418__delegate;
return G__7418;
})()
,cljs.core.hash_map,(function() { 
var G__7420__delegate = function (rest__7415_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.apply.call(null,cljs.core.str,rest__7415_SHARP_))));
} else
{return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,rest__7415_SHARP_)));
}
};
var G__7420 = function (var_args){
var rest__7415_SHARP_ = null;if (arguments.length > 0) {
  rest__7415_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7420__delegate.call(this,rest__7415_SHARP_);};
G__7420.cljs$lang$maxFixedArity = 0;
G__7420.cljs$lang$applyTo = (function (arglist__7421){
var rest__7415_SHARP_ = cljs.core.seq(arglist__7421);
return G__7420__delegate(rest__7415_SHARP_);
});
G__7420.cljs$core$IFn$_invoke$arity$variadic = G__7420__delegate;
return G__7420;
})()
,(function() { 
var G__7422__delegate = function (rest__7416_SHARP_){return parseInt(cljs.core.apply.call(null,cljs.core.str,rest__7416_SHARP_));
};
var G__7422 = function (var_args){
var rest__7416_SHARP_ = null;if (arguments.length > 0) {
  rest__7416_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7422__delegate.call(this,rest__7416_SHARP_);};
G__7422.cljs$lang$maxFixedArity = 0;
G__7422.cljs$lang$applyTo = (function (arglist__7423){
var rest__7416_SHARP_ = cljs.core.seq(arglist__7423);
return G__7422__delegate(rest__7416_SHARP_);
});
G__7422.cljs$core$IFn$_invoke$arity$variadic = G__7422__delegate;
return G__7422;
})()
,(function() { 
var G__7424__delegate = function (cs){return instaparse.combinators_source.string_ci.call(null,cljs.core.apply.call(null,cljs.core.str,cs));
};
var G__7424 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7424__delegate.call(this,cs);};
G__7424.cljs$lang$maxFixedArity = 0;
G__7424.cljs$lang$applyTo = (function (arglist__7425){
var cs = cljs.core.seq(arglist__7425);
return G__7424__delegate(cs);
});
G__7424.cljs$core$IFn$_invoke$arity$variadic = G__7424__delegate;
return G__7424;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__7426__delegate = function (cs){return parseInt(cljs.core.apply.call(null,cljs.core.str,cs),(16));
};
var G__7426 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7426__delegate.call(this,cs);};
G__7426.cljs$lang$maxFixedArity = 0;
G__7426.cljs$lang$applyTo = (function (arglist__7427){
var cs = cljs.core.seq(arglist__7427);
return G__7426__delegate(cs);
});
G__7426.cljs$core$IFn$_invoke$arity$variadic = G__7426__delegate;
return G__7426;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.call(null,instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__7428 = null;
var G__7428__1 = (function (element){return element;
});
var G__7428__2 = (function (repeat,element){if(cljs.core.empty_QMARK_.call(null,repeat))
{return instaparse.combinators_source.star.call(null,element);
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,repeat),(2)))
{return instaparse.combinators_source.rep.call(null,new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),element);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),(1)))
{return instaparse.combinators_source.plus.call(null,element);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),(1)))
{return instaparse.combinators_source.opt.call(null,element);
} else
{return instaparse.combinators_source.rep.call(null,(function (){var or__3425__auto__ = new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return (0);
}
})(),(function (){var or__3425__auto__ = new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return Infinity;
}
})(),element);

}
}
}
}
});
G__7428 = function(repeat,element){
switch(arguments.length){
case 1:
return G__7428__1.call(this,repeat);
case 2:
return G__7428__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7428.cljs$core$IFn$_invoke$arity$1 = G__7428__1;
G__7428.cljs$core$IFn$_invoke$arity$2 = G__7428__2;
return G__7428;
})()
,(function() { 
var G__7429__delegate = function (rest__7414_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.apply.call(null,cljs.core.str,rest__7414_SHARP_)));
} else
{return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,rest__7414_SHARP_));
}
};
var G__7429 = function (var_args){
var rest__7414_SHARP_ = null;if (arguments.length > 0) {
  rest__7414_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7429__delegate.call(this,rest__7414_SHARP_);};
G__7429.cljs$lang$maxFixedArity = 0;
G__7429.cljs$lang$applyTo = (function (arglist__7430){
var rest__7414_SHARP_ = cljs.core.seq(arglist__7430);
return G__7429__delegate(rest__7414_SHARP_);
});
G__7429.cljs$core$IFn$_invoke$arity$variadic = G__7429__delegate;
return G__7429;
})()
,(function() { 
var G__7431__delegate = function (items){var G__7417 = cljs.core.count.call(null,items);switch (G__7417) {
case (1):
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,items),"*"))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.first.call(null,items)], null);

}

break;
case (2):
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,items),"*"))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.second.call(null,items)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.nth.call(null,items,(2))], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,items)))));

}
};
var G__7431 = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7431__delegate.call(this,items);};
G__7431.cljs$lang$maxFixedArity = 0;
G__7431.cljs$lang$applyTo = (function (arglist__7433){
var items = cljs.core.seq(arglist__7433);
return G__7431__delegate(items);
});
G__7431.cljs$core$IFn$_invoke$arity$variadic = G__7431__delegate;
return G__7431;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__7434__delegate = function (cs){return parseInt(cljs.core.apply.call(null,cljs.core.str,cs));
};
var G__7434 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7434__delegate.call(this,cs);};
G__7434.cljs$lang$maxFixedArity = 0;
G__7434.cljs$lang$applyTo = (function (arglist__7435){
var cs = cljs.core.seq(arglist__7435);
return G__7434__delegate(cs);
});
G__7434.cljs$core$IFn$_invoke$arity$variadic = G__7434__delegate;
return G__7434;
})()
]);
instaparse.abnf.abnf_parser = instaparse.reduction.apply_standard_reductions.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.cfg.ebnf.call(null,instaparse.abnf.abnf_grammar));
instaparse.abnf.rules__GT_grammar_map = (function rules__GT_grammar_map(rules){return instaparse.abnf.merge_core.call(null,cljs.core.apply.call(null,cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
* Takes an ABNF grammar specification string and returns the combinator version.
* If you give it the right-hand side of a rule, it will return the combinator equivalent.
* If you give it a series of rules, it will give you back a grammar map.
* Useful for combining with other combinators.
*/
instaparse.abnf.abnf = (function abnf(spec){if(cljs.core.truth_(cljs.core.re_find.call(null,/=/,spec)))
{var rule_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),spec,false);if((rule_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_7438_7440 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_7438_7440,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_7438_7440,sb__4366__auto__,rule_tree))
;
cljs.core.println.call(null,rule_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7438_7440;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.abnf.rules__GT_grammar_map.call(null,instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rule_tree));
}
} else
{var rhs_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"alternation","alternation",-1162147630),spec,false);if((rhs_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_7439_7441 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_7439_7441,sb__4366__auto__,rhs_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_7439_7441,sb__4366__auto__,rhs_tree))
;
cljs.core.println.call(null,rhs_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7439_7441;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rhs_tree);
}
}
});
instaparse.abnf.build_parser = (function build_parser(spec,output_format){var rule_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),spec,false);if((rule_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_7443_7444 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_7443_7444,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_7443_7444,sb__4366__auto__,rule_tree))
;
cljs.core.println.call(null,rule_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7443_7444;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{var rules = instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rule_tree);var grammar_map = instaparse.abnf.rules__GT_grammar_map.call(null,rules);var start_production = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,rules)));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});

//# sourceMappingURL=abnf.js.map