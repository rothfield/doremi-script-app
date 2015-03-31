// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
/**
* When true all string literal terminals in built grammar will be treated as case insensitive
*/
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = false;
instaparse.cfg.single_quoted_string = /'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.single_quoted_regexp = /#'[^'\\]*(?:\\.[^'\\]*)*'/;
instaparse.cfg.double_quoted_string = /\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.double_quoted_regexp = /#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/;
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = "[,\\s]*";
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.constant$keyword$100));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$64,cljs.core.constant$keyword$57,cljs.core.constant$keyword$56,cljs.core.constant$keyword$101,cljs.core.constant$keyword$53,cljs.core.constant$keyword$63,cljs.core.constant$keyword$102,cljs.core.constant$keyword$62,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104,cljs.core.constant$keyword$48,cljs.core.constant$keyword$58,cljs.core.constant$keyword$105,cljs.core.constant$keyword$65,cljs.core.constant$keyword$106,cljs.core.constant$keyword$107,cljs.core.constant$keyword$60,cljs.core.constant$keyword$108,cljs.core.constant$keyword$109,cljs.core.constant$keyword$47,cljs.core.constant$keyword$44,cljs.core.constant$keyword$100,cljs.core.constant$keyword$46],[instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$108)], 0)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$108),instaparse.combinators_source.nt(cljs.core.constant$keyword$63),instaparse.combinators_source.nt(cljs.core.constant$keyword$64)], 0)),instaparse.cfg.opt_whitespace], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$57),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$57)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(":"),instaparse.combinators_source.string(":="),instaparse.combinators_source.string("::="),instaparse.combinators_source.string("=")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$57),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$57)], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$108)], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$62),instaparse.combinators_source.nt(cljs.core.constant$keyword$103)], 0)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.constant$keyword$101)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$107),instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$100),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$100),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string(";"),instaparse.combinators_source.string(".")], 0)),instaparse.combinators_source.nt(cljs.core.constant$keyword$100)], 0))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.neg(instaparse.combinators_source.nt(cljs.core.constant$keyword$44)),instaparse.combinators_source.regexp("[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$62),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$109),instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$107),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$108),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus(instaparse.combinators_source.nt(cljs.core.constant$keyword$102))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$107),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$107),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$53),instaparse.combinators_source.nt(cljs.core.constant$keyword$56)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$62),instaparse.combinators_source.nt(cljs.core.constant$keyword$58),instaparse.combinators_source.nt(cljs.core.constant$keyword$60),instaparse.combinators_source.nt(cljs.core.constant$keyword$46),instaparse.combinators_source.nt(cljs.core.constant$keyword$48),instaparse.combinators_source.nt(cljs.core.constant$keyword$47),instaparse.combinators_source.nt(cljs.core.constant$keyword$106),instaparse.combinators_source.nt(cljs.core.constant$keyword$65),instaparse.combinators_source.nt(cljs.core.constant$keyword$44)], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("(*"),instaparse.combinators_source.nt(cljs.core.constant$keyword$104),instaparse.combinators_source.string("*)")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$108),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.string("Epsilon"),instaparse.combinators_source.string("epsilon"),instaparse.combinators_source.string("EPSILON"),instaparse.combinators_source.string("eps"),instaparse.combinators_source.string("\u03B5")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.regexp(instaparse.cfg.ws),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$109),instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.constant$keyword$107),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([instaparse.combinators_source.nt(cljs.core.constant$keyword$108),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 0))], 0))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
* Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
*/
instaparse.cfg.escape = (function escape__$1(s){var sq = cljs.core.seq(s);var v = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(sq);if(cljs.core.truth_(temp__4124__auto__))
{var c = temp__4124__auto__;var G__14088 = c;switch (G__14088) {
case "\\":
var temp__4124__auto____$1 = cljs.core.second(sq);if(cljs.core.truth_(temp__4124__auto____$1))
{var c2 = temp__4124__auto____$1;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'"))
{{
var G__14090 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__14091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__14090;
v = G__14091;
continue;
}
} else
{{
var G__14092 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__14093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.array_seq([c2], 0));
sq = G__14092;
v = G__14093;
continue;
}
}
} else
{throw ("Encountered backslash character at end of string:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}

break;
case "\"":
{
var G__14094 = cljs.core.next(sq);
var G__14095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.array_seq(["\""], 0));
sq = G__14094;
v = G__14095;
continue;
}

break;
default:
{
var G__14096 = cljs.core.next(sq);
var G__14097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__14096;
v = G__14097;
continue;
}

}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function safe_read_string(s){return cljs.reader.read_string_STAR_(cljs.reader.push_back_reader(s),null);
});
/**
* Converts single quoted string to double-quoted
*/
instaparse.cfg.process_string = (function process_string(s){var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);var final_string = instaparse.cfg.safe_read_string((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(remove_escaped_single_quotes)+"\""));return final_string;
});
/**
* Converts single quoted regexp to double-quoted
*/
instaparse.cfg.process_regexp = (function process_regexp(s){var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (1)));var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);var final_string = cljs.core.re_pattern(remove_escaped_single_quotes);return final_string;
});
/**
* Convert one parsed rule from the grammar into combinators
*/
instaparse.cfg.build_rule = (function build_rule(tree){while(true){
var G__14129 = ((((function (){var G__14130 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__14130) : instaparse.cfg.tag.call(null,G__14130));
})() instanceof cljs.core.Keyword))?(function (){var G__14131 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__14131) : instaparse.cfg.tag.call(null,G__14131));
})().fqn:null);switch (G__14129) {
case "neg":
return instaparse.combinators_source.neg(build_rule((function (){var G__14132 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14132) : instaparse.cfg.content.call(null,G__14132));
})()));

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__14133 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__14133) : instaparse.cfg.contents.call(null,G__14133));
})()));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__14134 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__14134) : instaparse.cfg.contents.call(null,G__14134));
})()));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__14135 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__14135) : instaparse.cfg.contents.call(null,G__14135));
})()));

break;
case "look":
return instaparse.combinators_source.look(build_rule((function (){var G__14136 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14136) : instaparse.cfg.content.call(null,G__14136));
})()));

break;
case "rule":
var vec__14137 = (function (){var G__14138 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__14138) : instaparse.cfg.contents.call(null,G__14138));
})();var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14137,(0),null);var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14137,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14139 = nt;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__14139) : instaparse.cfg.tag.call(null,G__14139));
})(),cljs.core.constant$keyword$103))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__14140 = (function (){var G__14141 = nt;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14141) : instaparse.cfg.content.call(null,G__14141));
})();return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14140) : instaparse.cfg.content.call(null,G__14140));
})()),instaparse.combinators_source.hide_tag(build_rule(alt_or_ord))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__14142 = nt;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14142) : instaparse.cfg.content.call(null,G__14142));
})()),build_rule(alt_or_ord)], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__14143 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14143) : instaparse.cfg.content.call(null,G__14143));
})()));

break;
case "star":
return instaparse.combinators_source.star(build_rule((function (){var G__14144 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14144) : instaparse.cfg.content.call(null,G__14144));
})()));

break;
case "string":
return (cljs.core.truth_(instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string).call(null,instaparse.cfg.process_string((function (){var G__14145 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14145) : instaparse.cfg.content.call(null,G__14145));
})()));

break;
case "hide":
return instaparse.combinators_source.hide(build_rule((function (){var G__14146 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14146) : instaparse.cfg.content.call(null,G__14146));
})()));

break;
case "paren":
{
var G__14153 = (function (){var G__14147 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14147) : instaparse.cfg.content.call(null,G__14147));
})();
tree = G__14153;
continue;
}

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((function (){var G__14148 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14148) : instaparse.cfg.content.call(null,G__14148));
})()));

break;
case "plus":
return instaparse.combinators_source.plus(build_rule((function (){var G__14149 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14149) : instaparse.cfg.content.call(null,G__14149));
})()));

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
case "opt":
return instaparse.combinators_source.opt(build_rule((function (){var G__14150 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__14150) : instaparse.cfg.content.call(null,G__14150));
})()));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14151 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__14151) : instaparse.cfg.tag.call(null,G__14151));
})()))));

}
break;
}
});
/**
* Returns a sequence of all non-terminals in a parser built from combinators.
*/
instaparse.cfg.seq_nt = (function seq_nt(parser){while(true){
var G__14155 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__14155) {
case "neg":
{
var G__14157 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14157;
continue;
}

break;
case "cat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(seq_nt,cljs.core.array_seq([cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "ord":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(seq_nt,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(parser)], null)], 0));

break;
case "alt":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(seq_nt,cljs.core.array_seq([cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "look":
{
var G__14158 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14158;
continue;
}

break;
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "rep":
{
var G__14159 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14159;
continue;
}

break;
case "star":
{
var G__14160 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14160;
continue;
}

break;
case "string":
return cljs.core.PersistentVector.EMPTY;

break;
case "regexp":
return cljs.core.PersistentVector.EMPTY;

break;
case "plus":
{
var G__14161 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14161;
continue;
}

break;
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "string-ci":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
{
var G__14162 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__14162;
continue;
}

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser)))));

}
break;
}
});
/**
* Throw error if grammar uses any invalid non-terminals in its productions
*/
instaparse.cfg.check_grammar = (function check_grammar(grammar_map){var valid_nts_14175 = cljs.core.set(cljs.core.keys(grammar_map));var seq__14169_14176 = cljs.core.seq(cljs.core.distinct(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.array_seq([cljs.core.vals(grammar_map)], 0))));var chunk__14170_14177 = null;var count__14171_14178 = (0);var i__14172_14179 = (0);while(true){
if((i__14172_14179 < count__14171_14178))
{var nt_14180 = chunk__14170_14177.cljs$core$IIndexed$_nth$arity$2(null,i__14172_14179);if(cljs.core.truth_((function (){var G__14173 = nt_14180;return (valid_nts_14175.cljs$core$IFn$_invoke$arity$1 ? valid_nts_14175.cljs$core$IFn$_invoke$arity$1(G__14173) : valid_nts_14175.call(null,G__14173));
})()))
{} else
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_14180)),(1)))+"occurs on the right-hand side of your grammar, but not on the left");
}
{
var G__14181 = seq__14169_14176;
var G__14182 = chunk__14170_14177;
var G__14183 = count__14171_14178;
var G__14184 = (i__14172_14179 + (1));
seq__14169_14176 = G__14181;
chunk__14170_14177 = G__14182;
count__14171_14178 = G__14183;
i__14172_14179 = G__14184;
continue;
}
} else
{var temp__4126__auto___14185 = cljs.core.seq(seq__14169_14176);if(temp__4126__auto___14185)
{var seq__14169_14186__$1 = temp__4126__auto___14185;if(cljs.core.chunked_seq_QMARK_(seq__14169_14186__$1))
{var c__4195__auto___14187 = cljs.core.chunk_first(seq__14169_14186__$1);{
var G__14188 = cljs.core.chunk_rest(seq__14169_14186__$1);
var G__14189 = c__4195__auto___14187;
var G__14190 = cljs.core.count(c__4195__auto___14187);
var G__14191 = (0);
seq__14169_14176 = G__14188;
chunk__14170_14177 = G__14189;
count__14171_14178 = G__14190;
i__14172_14179 = G__14191;
continue;
}
} else
{var nt_14192 = cljs.core.first(seq__14169_14186__$1);if(cljs.core.truth_((function (){var G__14174 = nt_14192;return (valid_nts_14175.cljs$core$IFn$_invoke$arity$1 ? valid_nts_14175.cljs$core$IFn$_invoke$arity$1(G__14174) : valid_nts_14175.call(null,G__14174));
})()))
{} else
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_14192)),(1)))+"occurs on the right-hand side of your grammar, but not on the left");
}
{
var G__14193 = cljs.core.next(seq__14169_14186__$1);
var G__14194 = null;
var G__14195 = (0);
var G__14196 = (0);
seq__14169_14176 = G__14193;
chunk__14170_14177 = G__14194;
count__14171_14178 = G__14195;
i__14172_14179 = G__14196;
continue;
}
}
} else
{}
}
break;
}
return grammar_map;
});
instaparse.cfg.build_parser = (function build_parser(spec,output_format){var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.constant$keyword$105,spec,false);if((rules instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14198_14199 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14198_14199,sb__4366__auto__,rules){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14198_14199,sb__4366__auto__,rules))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14198_14199;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{var productions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules);var start_production = cljs.core.first(cljs.core.first(productions));return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,productions))),cljs.core.constant$keyword$67,start_production,cljs.core.constant$keyword$110,output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function build_parser_from_combinators(grammar_map,output_format,start_production){if((start_production == null))
{throw "When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument.";
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.constant$keyword$67,start_production,cljs.core.constant$keyword$110,output_format], null);
}
});
/**
* Takes an EBNF grammar specification string and returns the combinator version.
* If you give it the right-hand side of a rule, it will return the combinator equivalent.
* If you give it a series of rules, it will give you back a grammar map.
* Useful for combining with other combinators.
*/
instaparse.cfg.ebnf = (function ebnf(spec){if(cljs.core.truth_(cljs.core.re_find(/[:=]/,spec)))
{var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.constant$keyword$105,spec,false);if((rules instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14202_14204 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14202_14204,sb__4366__auto__,rules){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14202_14204,sb__4366__auto__,rules))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14202_14204;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
}
} else
{var rhs = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.constant$keyword$107,spec,false);if((rhs instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_14203_14205 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_14203_14205,sb__4366__auto__,rhs){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_14203_14205,sb__4366__auto__,rhs))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14203_14205;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.cfg.build_rule(cljs.core.first(rhs));
}
}
});
