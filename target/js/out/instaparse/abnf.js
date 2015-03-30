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
format.cljs$lang$applyTo = (function (arglist__14001){
var fmt = cljs.core.first(arglist__14001);
var args = cljs.core.rest(arglist__14001);
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
instaparse.abnf.char_codes = (function char_codes(c){var c1 = c.charCodeAt((0));var c2 = c.charCodeAt((1));return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,(cljs.core.truth_((function (){var G__14003 = c2;return isNaN(G__14003);
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
var G__14022__delegate = function (num1,num2,nums){var v = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.abnf.coerce_char,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [num1,num2], null),nums)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14013 = (1);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__14013) : v.call(null,G__14013));
})(),"-"))
{return instaparse.abnf.char_range((function (){var G__14014 = (0);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__14014) : v.call(null,G__14014));
})(),(function (){var G__14015 = (2);return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__14015) : v.call(null,G__14015));
})());
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__4164__auto__ = ((function (v){
return (function iter__14016(s__14017){return (new cljs.core.LazySeq(null,((function (v){
return (function (){var s__14017__$1 = s__14017;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14017__$1);if(temp__4126__auto__)
{var s__14017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14017__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14017__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14019 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14018 = (0);while(true){
if((i__14018 < size__4163__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14018);cljs.core.chunk_append(b__14019,instaparse.combinators_source.string(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,instaparse.abnf.char_codes(n))));
{
var G__14023 = (i__14018 + (1));
i__14018 = G__14023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14019),iter__14016(cljs.core.chunk_rest(s__14017__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14019),null);
}
} else
{var n = cljs.core.first(s__14017__$2);return cljs.core.cons(instaparse.combinators_source.string(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,instaparse.abnf.char_codes(n))),iter__14016(cljs.core.rest(s__14017__$2)));
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
var G__14022 = function (num1,num2,var_args){
var nums = null;if (arguments.length > 2) {
  nums = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14022__delegate.call(this,num1,num2,nums);};
G__14022.cljs$lang$maxFixedArity = 2;
G__14022.cljs$lang$applyTo = (function (arglist__14024){
var num1 = cljs.core.first(arglist__14024);
arglist__14024 = cljs.core.next(arglist__14024);
var num2 = cljs.core.first(arglist__14024);
var nums = cljs.core.rest(arglist__14024);
return G__14022__delegate(num1,num2,nums);
});
G__14022.cljs$core$IFn$_invoke$arity$variadic = G__14022__delegate;
return G__14022;
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
instaparse.abnf.project = (function project(m,ks){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4164__auto__ = (function iter__14035(s__14036){return (new cljs.core.LazySeq(null,(function (){var s__14036__$1 = s__14036;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14036__$1);if(temp__4126__auto__)
{var s__14036__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14036__$2))
{var c__4162__auto__ = cljs.core.chunk_first(s__14036__$2);var size__4163__auto__ = cljs.core.count(c__4162__auto__);var b__14038 = cljs.core.chunk_buffer(size__4163__auto__);if((function (){var i__14037 = (0);while(true){
if((i__14037 < size__4163__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4162__auto__,i__14037);if(cljs.core.contains_QMARK_(m,k))
{cljs.core.chunk_append(b__14038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__14043 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__14043) : m.call(null,G__14043));
})()], null));
{
var G__14045 = (i__14037 + (1));
i__14037 = G__14045;
continue;
}
} else
{{
var G__14046 = (i__14037 + (1));
i__14037 = G__14046;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14038),iter__14035(cljs.core.chunk_rest(s__14036__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14038),null);
}
} else
{var k = cljs.core.first(s__14036__$2);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__14044 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__14044) : m.call(null,G__14044));
})()], null),iter__14035(cljs.core.rest(s__14036__$2)));
} else
{{
var G__14047 = cljs.core.rest(s__14036__$2);
s__14036__$1 = G__14047;
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
var G__14058__delegate = function (cs){var G__14051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);var G__14052 = (2);return parseInt(G__14051,G__14052);
};
var G__14058 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14058__delegate.call(this,cs);};
G__14058.cljs$lang$maxFixedArity = 0;
G__14058.cljs$lang$applyTo = (function (arglist__14059){
var cs = cljs.core.seq(arglist__14059);
return G__14058__delegate(cs);
});
G__14058.cljs$core$IFn$_invoke$arity$variadic = G__14058__delegate;
return G__14058;
})()
,cljs.core.hash_map,(function() { 
var G__14060__delegate = function (rest__14049_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14049_SHARP_))));
} else
{return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14049_SHARP_)));
}
};
var G__14060 = function (var_args){
var rest__14049_SHARP_ = null;if (arguments.length > 0) {
  rest__14049_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14060__delegate.call(this,rest__14049_SHARP_);};
G__14060.cljs$lang$maxFixedArity = 0;
G__14060.cljs$lang$applyTo = (function (arglist__14061){
var rest__14049_SHARP_ = cljs.core.seq(arglist__14061);
return G__14060__delegate(rest__14049_SHARP_);
});
G__14060.cljs$core$IFn$_invoke$arity$variadic = G__14060__delegate;
return G__14060;
})()
,(function() { 
var G__14062__delegate = function (rest__14050_SHARP_){var G__14053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14050_SHARP_);return parseInt(G__14053);
};
var G__14062 = function (var_args){
var rest__14050_SHARP_ = null;if (arguments.length > 0) {
  rest__14050_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14062__delegate.call(this,rest__14050_SHARP_);};
G__14062.cljs$lang$maxFixedArity = 0;
G__14062.cljs$lang$applyTo = (function (arglist__14063){
var rest__14050_SHARP_ = cljs.core.seq(arglist__14063);
return G__14062__delegate(rest__14050_SHARP_);
});
G__14062.cljs$core$IFn$_invoke$arity$variadic = G__14062__delegate;
return G__14062;
})()
,(function() { 
var G__14064__delegate = function (cs){return instaparse.combinators_source.string_ci(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs));
};
var G__14064 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14064__delegate.call(this,cs);};
G__14064.cljs$lang$maxFixedArity = 0;
G__14064.cljs$lang$applyTo = (function (arglist__14065){
var cs = cljs.core.seq(arglist__14065);
return G__14064__delegate(cs);
});
G__14064.cljs$core$IFn$_invoke$arity$variadic = G__14064__delegate;
return G__14064;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__14066__delegate = function (cs){var G__14054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);var G__14055 = (16);return parseInt(G__14054,G__14055);
};
var G__14066 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14066__delegate.call(this,cs);};
G__14066.cljs$lang$maxFixedArity = 0;
G__14066.cljs$lang$applyTo = (function (arglist__14067){
var cs = cljs.core.seq(arglist__14067);
return G__14066__delegate(cs);
});
G__14066.cljs$core$IFn$_invoke$arity$variadic = G__14066__delegate;
return G__14066;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__14068 = null;
var G__14068__1 = (function (element){return element;
});
var G__14068__2 = (function (repeat,element){if(cljs.core.empty_QMARK_(repeat))
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
G__14068 = function(repeat,element){
switch(arguments.length){
case 1:
return G__14068__1.call(this,repeat);
case 2:
return G__14068__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14068.cljs$core$IFn$_invoke$arity$1 = G__14068__1;
G__14068.cljs$core$IFn$_invoke$arity$2 = G__14068__2;
return G__14068;
})()
,(function() { 
var G__14069__delegate = function (rest__14048_SHARP_){if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14048_SHARP_)));
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__14048_SHARP_));
}
};
var G__14069 = function (var_args){
var rest__14048_SHARP_ = null;if (arguments.length > 0) {
  rest__14048_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14069__delegate.call(this,rest__14048_SHARP_);};
G__14069.cljs$lang$maxFixedArity = 0;
G__14069.cljs$lang$applyTo = (function (arglist__14070){
var rest__14048_SHARP_ = cljs.core.seq(arglist__14070);
return G__14069__delegate(rest__14048_SHARP_);
});
G__14069.cljs$core$IFn$_invoke$arity$variadic = G__14069__delegate;
return G__14069;
})()
,(function() { 
var G__14071__delegate = function (items){var G__14056 = cljs.core.count(items);switch (G__14056) {
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
var G__14071 = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14071__delegate.call(this,items);};
G__14071.cljs$lang$maxFixedArity = 0;
G__14071.cljs$lang$applyTo = (function (arglist__14073){
var items = cljs.core.seq(arglist__14073);
return G__14071__delegate(items);
});
G__14071.cljs$core$IFn$_invoke$arity$variadic = G__14071__delegate;
return G__14071;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__14074__delegate = function (cs){var G__14057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);return parseInt(G__14057);
};
var G__14074 = function (var_args){
var cs = null;if (arguments.length > 0) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14074__delegate.call(this,cs);};
G__14074.cljs$lang$maxFixedArity = 0;
G__14074.cljs$lang$applyTo = (function (arglist__14075){
var cs = cljs.core.seq(arglist__14075);
return G__14074__delegate(cs);
});
G__14074.cljs$core$IFn$_invoke$arity$variadic = G__14074__delegate;
return G__14074;
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
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14078_14080 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14078_14080,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14078_14080,sb__4366__auto__,rule_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14078_14080;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree));
}
} else
{var rhs_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.constant$keyword$137,spec,false);if((rhs_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14079_14081 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14079_14081,sb__4366__auto__,rhs_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14079_14081,sb__4366__auto__,rhs_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14079_14081;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.transform.transform(instaparse.abnf.abnf_transformer,rhs_tree);
}
}
});
instaparse.abnf.build_parser = (function build_parser(spec,output_format){var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.constant$keyword$145,spec,false);if((rule_tree instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14083_14084 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14083_14084,sb__4366__auto__,rule_tree){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14083_14084,sb__4366__auto__,rule_tree))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14083_14084;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.constant$keyword$67,start_production,cljs.core.constant$keyword$110,output_format], null);
}
});
