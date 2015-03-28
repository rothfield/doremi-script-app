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
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114,cljs.core.constant$keyword$115,cljs.core.constant$keyword$116,cljs.core.constant$keyword$117,cljs.core.constant$keyword$118,cljs.core.constant$keyword$119,cljs.core.constant$keyword$120,cljs.core.constant$keyword$121,cljs.core.constant$keyword$122,cljs.core.constant$keyword$123,cljs.core.constant$keyword$124,cljs.core.constant$keyword$125,cljs.core.constant$keyword$126],[instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.string("\t"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0))], 0)))], 0)),instaparse.combinators_source.string("\n"),instaparse.combinators_source.regexp("[\\u0021-\\u007E]"),instaparse.combinators_source.regexp("[0-9]"),instaparse.combinators_source.string(" "),instaparse.combinators_source.regexp("[0-9a-fA-F]"),instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string("\""),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.string("\r"),instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp("[a-zA-Z]"),instaparse.combinators_source.regexp("[\\u0001-\\u007F]"),instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
instaparse.abnf.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__12877){
var fmt = cljs.core.first(arglist__12877);
var args = cljs.core.rest(arglist__12877);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Convert an number to a hex string.
*/
instaparse.abnf.number__GT_hex = (function number__GT_hex(v){return clojure.string.replace(instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.array_seq([v.toString((16))], 0))," ","0");
});
/**
* Takes two chars and returns a combinator representing a range of characters.
*/
instaparse.abnf.char_range = (function char_range(codepoint1,codepoint2){return instaparse.combinators_source.regexp(("[\\x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.abnf.number__GT_hex(codepoint1))+"-\\x"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.abnf.number__GT_hex(codepoint2))+"]"));
});
instaparse.abnf.char_codes = (function char_codes(c){var c1 = c.charCodeAt((0));var c2 = c.charCodeAt((1));return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,(cljs.core.truth_((function (){var G__12879 = c2;return isNaN(G__12879);
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null)));
});
instaparse.abnf.coerce_char = (function coerce_char(c){if(cljs.core.integer_QMARK_(c))
{return cljs.core.char$(c);
} else
{return c;
}
});
/**
* @param {...*} var_args
*/
instaparse.abnf.get_char_combinator = (function() {
var get_char_combinator = null;
var get_char_combinator__1 = (function (num1){return instaparse.combinators_source.string(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,instaparse.abnf.char_codes(num1)));
});
var get_char_combinator__3 = (function() { 
var G__12898__delegate = function (num1,num2,nums){var v = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.abnf.coerce_char,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [num1,num2], null),nums)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__12889 = (1);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__12889) : v.call(null,G__12889));
})(),"-"))
{return instaparse.abnf.char_range((function (){var G__12890 = (0);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__12890) : v.call(null,G__12890));
})(),(function (){var G__12891 = (2);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__12891) : v.call(null,G__12891));
})());
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__4164__auto__ = ((function (v){
return (function iter__12892(s__12893){return (new cljs.core.LazySeq(null,((function (v){
return (function (){var s__12893__$1 = s__12893;while(true){
var temp__4126__auto__ = cljs.core.seq(s__12893__$1);if(temp__4126__auto__)
{var s__12893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__12893__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__12893__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__12895 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__12894 = (0);while(true){
if((i__12894 < size__4163__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__12894);cljs.core.chunk_append(b__12895,instaparse.combinators_source.string(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,instaparse.abnf.char_codes(n))));
{
var G__12899 = (i__12894 + (1));
i__12894 = G__12899;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12895),iter__12892(cljs.core.chunk_rest(s__12893__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12895),null);
}
} else
{var n = cljs.core.first(s__12893__$2);return cljs.core.cons(instaparse.combinators_source.string(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,instaparse.abnf.char_codes(n))),iter__12892(cljs.core.rest(s__12893__$2)));
}
} else
{return null;
}
break;
}
});})(v))
,null,null));
});})(v))
;return iter__4164__auto__(v);
})());
}
};
var G__12898 = function (num1,num2,var_args){
var nums = null;if (arguments.length > 2) {
  nums = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12898__delegate.call(this,num1,num2,nums);};
G__12898.cljs$lang$maxFixedArity = 2;
G__12898.cljs$lang$applyTo = (function (arglist__12900){
var num1 = cljs.core.first(arglist__12900);
arglist__12900 = cljs.core.next(arglist__12900);
var num2 = cljs.core.first(arglist__12900);
var nums = cljs.core.rest(arglist__12900);
return G__12898__delegate(num1,num2,nums);
});
G__12898.cljs$core$IFn$_invoke$arity$variadic = G__12898__delegate;
return G__12898;
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
instaparse.abnf.project = (function project(m,ks){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__12911(s__12912){return (new cljs.core.LazySeq(null,(function (){var s__12912__$1 = s__12912;while(true){
var temp__4126__auto__ = cljs.core.seq(s__12912__$1);if(temp__4126__auto__)
{var s__12912__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__12912__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__12912__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__12914 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__12913 = (0);while(true){
if((i__12913 < size__4163__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__12913);if(cljs.core.contains_QMARK_(m,k))
{cljs.core.chunk_append(b__12914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__12919 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__12919) : m.call(null,G__12919));
})()], null));
{
var G__12921 = (i__12913 + (1));
i__12913 = G__12921;
continue;
}
} else
{{
var G__12922 = (i__12913 + (1));
i__12913 = G__12922;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12914),iter__12911(cljs.core.chunk_rest(s__12912__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12914),null);
}
} else
{var k = cljs.core.first(s__12912__$2);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__12920 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__12920) : m.call(null,G__12920));
})()], null),iter__12911(cljs.core.rest(s__12912__$2)));
} else
{{
var G__12923 = cljs.core.rest(s__12912__$2);
s__12912__$1 = G__12923;
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
});return iter__4164__auto__(ks);
})());
});
/**
* Merges abnf-core map in with parsed grammar map
*/
instaparse.abnf.merge_core = (function merge_core(grammar_map){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.abnf.project(instaparse.abnf.abnf_core,cljs.core.distinct(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.array_seq([cljs.core.vals(grammar_map)], 0)))),grammar_map], 0));
});
/**
* Tests whether parser was constructed with hide-tag
*/
instaparse.abnf.hide_tag_QMARK_ = (function hide_tag_QMARK_(p){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function alt_preserving_hide_tag(p1,p2){var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p1);var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p2);if((hide_tag_p1_QMARK_) && (hide_tag_p2_QMARK_))
{return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.constant$keyword$37),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.constant$keyword$37)], 0)));
} else
{if(hide_tag_p1_QMARK_)
{return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.constant$keyword$37),p2], 0)));
} else
{if(hide_tag_p2_QMARK_)
{return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.constant$keyword$37)], 0)));
} else
{return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));

}
}
}
});
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$64,cljs.core.constant$keyword$127,cljs.core.constant$keyword$63,cljs.core.constant$keyword$128,cljs.core.constant$keyword$102,cljs.core.constant$keyword$129,cljs.core.constant$keyword$130,cljs.core.constant$keyword$131,cljs.core.constant$keyword$65,cljs.core.constant$keyword$132,cljs.core.constant$keyword$133,cljs.core.constant$keyword$134,cljs.core.constant$keyword$135,cljs.core.constant$keyword$136,cljs.core.constant$keyword$137,cljs.core.constant$keyword$60,cljs.core.constant$keyword$138,cljs.core.constant$keyword$139,cljs.core.constant$keyword$140,cljs.core.constant$keyword$141,cljs.core.constant$keyword$142],[instaparse.combinators_source.neg,(function (tag,rule){return new cljs.core.PersistentArrayMap.fromArray([tag,instaparse.combinators_source.hide_tag(rule)], true, false);
}),instaparse.combinators_source.look,(function() { 
var G__12934__delegate = function (cs){var G__12927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);var G__12928 = (2);return parseInt(G__12927,G__12928);
};
var G__12934 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12934__delegate.call(this,cs);};
G__12934.cljs$lang$maxFixedArity = 0;
G__12934.cljs$lang$applyTo = (function (arglist__12935){
var cs = cljs.core.seq(arglist__12935);
return G__12934__delegate(cs);
});
G__12934.cljs$core$IFn$_invoke$arity$variadic = G__12934__delegate;
return G__12934;
})()
,cljs.core.hash_map,(function() { 
var G__12936__delegate = function (rest__12925_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__12925_SHARP_))));
} else
{return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__12925_SHARP_)));
}
};
var G__12936 = function (var_args){
var rest__12925_SHARP_ = null;if (arguments.length > 0) {
  rest__12925_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12936__delegate.call(this,rest__12925_SHARP_);};
G__12936.cljs$lang$maxFixedArity = 0;
G__12936.cljs$lang$applyTo = (function (arglist__12937){
var rest__12925_SHARP_ = cljs.core.seq(arglist__12937);
return G__12936__delegate(rest__12925_SHARP_);
});
G__12936.cljs$core$IFn$_invoke$arity$variadic = G__12936__delegate;
return G__12936;
})()
,(function() { 
var G__12938__delegate = function (rest__12926_SHARP_){var G__12929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__12926_SHARP_);return parseInt(G__12929);
};
var G__12938 = function (var_args){
var rest__12926_SHARP_ = null;if (arguments.length > 0) {
  rest__12926_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12938__delegate.call(this,rest__12926_SHARP_);};
G__12938.cljs$lang$maxFixedArity = 0;
G__12938.cljs$lang$applyTo = (function (arglist__12939){
var rest__12926_SHARP_ = cljs.core.seq(arglist__12939);
return G__12938__delegate(rest__12926_SHARP_);
});
G__12938.cljs$core$IFn$_invoke$arity$variadic = G__12938__delegate;
return G__12938;
})()
,(function() { 
var G__12940__delegate = function (cs){return instaparse.combinators_source.string_ci(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs));
};
var G__12940 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12940__delegate.call(this,cs);};
G__12940.cljs$lang$maxFixedArity = 0;
G__12940.cljs$lang$applyTo = (function (arglist__12941){
var cs = cljs.core.seq(arglist__12941);
return G__12940__delegate(cs);
});
G__12940.cljs$core$IFn$_invoke$arity$variadic = G__12940__delegate;
return G__12940;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__12942__delegate = function (cs){var G__12930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);var G__12931 = (16);return parseInt(G__12930,G__12931);
};
var G__12942 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12942__delegate.call(this,cs);};
G__12942.cljs$lang$maxFixedArity = 0;
G__12942.cljs$lang$applyTo = (function (arglist__12943){
var cs = cljs.core.seq(arglist__12943);
return G__12942__delegate(cs);
});
G__12942.cljs$core$IFn$_invoke$arity$variadic = G__12942__delegate;
return G__12942;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__12944 = null;
var G__12944__1 = (function (element){return element;
});
var G__12944__2 = (function (repeat,element){if(cljs.core.empty_QMARK_(repeat))
{return instaparse.combinators_source.star(element);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repeat),(2)))
{return instaparse.combinators_source.rep(cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(repeat),cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(repeat),element);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(repeat),(1)))
{return instaparse.combinators_source.plus(element);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(repeat),(1)))
{return instaparse.combinators_source.opt(element);
} else
{return instaparse.combinators_source.rep((function (){var or__3425__auto__ = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(repeat);if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return (0);
}
})(),(function (){var or__3425__auto__ = cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(repeat);if(cljs.core.truth_(or__3425__auto__))
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
G__12944 = function(repeat,element){
switch(arguments.length){
case 1:
return G__12944__1.call(this,repeat);
case 2:
return G__12944__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12944.cljs$core$IFn$_invoke$arity$1 = G__12944__1;
G__12944.cljs$core$IFn$_invoke$arity$2 = G__12944__2;
return G__12944;
})()
,(function() { 
var G__12945__delegate = function (rest__12924_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__12924_SHARP_)));
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__12924_SHARP_));
}
};
var G__12945 = function (var_args){
var rest__12924_SHARP_ = null;if (arguments.length > 0) {
  rest__12924_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12945__delegate.call(this,rest__12924_SHARP_);};
G__12945.cljs$lang$maxFixedArity = 0;
G__12945.cljs$lang$applyTo = (function (arglist__12946){
var rest__12924_SHARP_ = cljs.core.seq(arglist__12946);
return G__12945__delegate(rest__12924_SHARP_);
});
G__12945.cljs$core$IFn$_invoke$arity$variadic = G__12945__delegate;
return G__12945;
})()
,(function() { 
var G__12947__delegate = function (items){var G__12932 = cljs.core.count(items);switch (G__12932) {
case (1):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*"))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,cljs.core.first(items),cljs.core.constant$keyword$144,cljs.core.first(items)], null);

}

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*"))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,cljs.core.second(items)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,cljs.core.first(items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,cljs.core.first(items),cljs.core.constant$keyword$144,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(2))], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)))));

}
};
var G__12947 = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12947__delegate.call(this,items);};
G__12947.cljs$lang$maxFixedArity = 0;
G__12947.cljs$lang$applyTo = (function (arglist__12949){
var items = cljs.core.seq(arglist__12949);
return G__12947__delegate(items);
});
G__12947.cljs$core$IFn$_invoke$arity$variadic = G__12947__delegate;
return G__12947;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__12950__delegate = function (cs){var G__12933 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);return parseInt(G__12933);
};
var G__12950 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12950__delegate.call(this,cs);};
G__12950.cljs$lang$maxFixedArity = 0;
G__12950.cljs$lang$applyTo = (function (arglist__12951){
var cs = cljs.core.seq(arglist__12951);
return G__12950__delegate(cs);
});
G__12950.cljs$core$IFn$_invoke$arity$variadic = G__12950__delegate;
return G__12950;
})()
]);
instaparse.abnf.abnf_parser = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,instaparse.cfg.ebnf(instaparse.abnf.abnf_grammar));
instaparse.abnf.rules__GT_grammar_map = (function rules__GT_grammar_map(rules){return instaparse.abnf.merge_core(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
* Takes an ABNF grammar specification string and returns the combinator version.
* If you give it the right-hand side of a rule, it will return the combinator equivalent.
* If you give it a series of rules, it will give you back a grammar map.
* Useful for combining with other combinators.
*/
instaparse.abnf.abnf = (function abnf(spec){if(cljs.core.truth_(cljs.core.re_find(/=/,spec)))
{var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.constant$keyword$145,spec,false);if((rule_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_12954_12956 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12954_12956,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_12954_12956,sb__4366__auto__,rule_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12954_12956;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree));
}
} else
{var rhs_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.constant$keyword$137,spec,false);if((rhs_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_12955_12957 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12955_12957,sb__4366__auto__,rhs_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_12955_12957,sb__4366__auto__,rhs_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12955_12957;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.transform.transform(instaparse.abnf.abnf_transformer,rhs_tree);
}
}
});
instaparse.abnf.build_parser = (function build_parser(spec,output_format){var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.constant$keyword$145,spec,false);if((rule_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_12959_12960 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12959_12960,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_12959_12960,sb__4366__auto__,rule_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12959_12960;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.constant$keyword$67,start_production,cljs.core.constant$keyword$110,output_format], null);
}
});
