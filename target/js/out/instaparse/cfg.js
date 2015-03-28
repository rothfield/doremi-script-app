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
{var c = temp__4124__auto__;var G__12962 = c;switch (G__12962) {
case "\\":
var temp__4124__auto____$1 = cljs.core.second(sq);if(cljs.core.truth_(temp__4124__auto____$1))
{var c2 = temp__4124__auto____$1;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'"))
{{
var G__12964 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__12965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__12964;
v = G__12965;
continue;
}
} else
{{
var G__12966 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__12967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.array_seq([c2], 0));
sq = G__12966;
v = G__12967;
continue;
}
}
} else
{throw ("Encountered backslash character at end of string:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}

break;
case "\"":
{
var G__12968 = cljs.core.next(sq);
var G__12969 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.array_seq(["\""], 0));
sq = G__12968;
v = G__12969;
continue;
}

break;
default:
{
var G__12970 = cljs.core.next(sq);
var G__12971 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__12970;
v = G__12971;
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
var G__13003 = ((((function (){var G__13004 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__13004) : instaparse.cfg.tag.call(null,G__13004));
})() instanceof cljs.core.Keyword))?(function (){var G__13005 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__13005) : instaparse.cfg.tag.call(null,G__13005));
})().fqn:null);switch (G__13003) {
case "neg":
return instaparse.combinators_source.neg(build_rule((function (){var G__13006 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13006) : instaparse.cfg.content.call(null,G__13006));
})()));

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__13007 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__13007) : instaparse.cfg.contents.call(null,G__13007));
})()));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__13008 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__13008) : instaparse.cfg.contents.call(null,G__13008));
})()));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_rule,(function (){var G__13009 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__13009) : instaparse.cfg.contents.call(null,G__13009));
})()));

break;
case "look":
return instaparse.combinators_source.look(build_rule((function (){var G__13010 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13010) : instaparse.cfg.content.call(null,G__13010));
})()));

break;
case "rule":
var vec__13011 = (function (){var G__13012 = tree;return (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(G__13012) : instaparse.cfg.contents.call(null,G__13012));
})();var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(0),null);var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13013 = nt;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__13013) : instaparse.cfg.tag.call(null,G__13013));
})(),cljs.core.constant$keyword$103))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__13014 = (function (){var G__13015 = nt;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13015) : instaparse.cfg.content.call(null,G__13015));
})();return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13014) : instaparse.cfg.content.call(null,G__13014));
})()),instaparse.combinators_source.hide_tag(build_rule(alt_or_ord))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__13016 = nt;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13016) : instaparse.cfg.content.call(null,G__13016));
})()),build_rule(alt_or_ord)], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__13017 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13017) : instaparse.cfg.content.call(null,G__13017));
})()));

break;
case "star":
return instaparse.combinators_source.star(build_rule((function (){var G__13018 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13018) : instaparse.cfg.content.call(null,G__13018));
})()));

break;
case "string":
return (cljs.core.truth_(instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string).call(null,instaparse.cfg.process_string((function (){var G__13019 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13019) : instaparse.cfg.content.call(null,G__13019));
})()));

break;
case "hide":
return instaparse.combinators_source.hide(build_rule((function (){var G__13020 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13020) : instaparse.cfg.content.call(null,G__13020));
})()));

break;
case "paren":
{
var G__13027 = (function (){var G__13021 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13021) : instaparse.cfg.content.call(null,G__13021));
})();
tree = G__13027;
continue;
}

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((function (){var G__13022 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13022) : instaparse.cfg.content.call(null,G__13022));
})()));

break;
case "plus":
return instaparse.combinators_source.plus(build_rule((function (){var G__13023 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13023) : instaparse.cfg.content.call(null,G__13023));
})()));

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
case "opt":
return instaparse.combinators_source.opt(build_rule((function (){var G__13024 = tree;return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__13024) : instaparse.cfg.content.call(null,G__13024));
})()));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13025 = tree;return (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(G__13025) : instaparse.cfg.tag.call(null,G__13025));
})()))));

}
break;
}
});
/**
* Returns a sequence of all non-terminals in a parser built from combinators.
*/
instaparse.cfg.seq_nt = (function seq_nt(parser){while(true){
var G__13029 = (((cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__13029) {
case "neg":
{
var G__13031 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13031;
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
var G__13032 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13032;
continue;
}

break;
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "rep":
{
var G__13033 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13033;
continue;
}

break;
case "star":
{
var G__13034 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13034;
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
var G__13035 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13035;
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
var G__13036 = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__13036;
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
instaparse.cfg.check_grammar = (function check_grammar(grammar_map){var valid_nts_13049 = cljs.core.set(cljs.core.keys(grammar_map));var seq__13043_13050 = cljs.core.seq(cljs.core.distinct(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.array_seq([cljs.core.vals(grammar_map)], 0))));var chunk__13044_13051 = null;var count__13045_13052 = (0);var i__13046_13053 = (0);while(true){
if((i__13046_13053 < count__13045_13052))
{var nt_13054 = chunk__13044_13051.cljs$core$IIndexed$_nth$arity$2(null,i__13046_13053);if(cljs.core.truth_((function (){var G__13047 = nt_13054;return (valid_nts_13049.cljs$core$IFn$_invoke$arity$1 ? valid_nts_13049.cljs$core$IFn$_invoke$arity$1(G__13047) : valid_nts_13049.call(null,G__13047));
})()))
{} else
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_13054)),(1)))+"occurs on the right-hand side of your grammar, but not on the left");
}
{
var G__13055 = seq__13043_13050;
var G__13056 = chunk__13044_13051;
var G__13057 = count__13045_13052;
var G__13058 = (i__13046_13053 + (1));
seq__13043_13050 = G__13055;
chunk__13044_13051 = G__13056;
count__13045_13052 = G__13057;
i__13046_13053 = G__13058;
continue;
}
} else
{var temp__4126__auto___13059 = cljs.core.seq(seq__13043_13050);if(temp__4126__auto___13059)
{var seq__13043_13060__$1 = temp__4126__auto___13059;if(cljs.core.chunked_seq_QMARK_(seq__13043_13060__$1))
{var c__4195__auto___13061 = cljs.core.chunk_first(seq__13043_13060__$1);{
var G__13062 = cljs.core.chunk_rest(seq__13043_13060__$1);
var G__13063 = c__4195__auto___13061;
var G__13064 = cljs.core.count(c__4195__auto___13061);
var G__13065 = (0);
seq__13043_13050 = G__13062;
chunk__13044_13051 = G__13063;
count__13045_13052 = G__13064;
i__13046_13053 = G__13065;
continue;
}
} else
{var nt_13066 = cljs.core.first(seq__13043_13060__$1);if(cljs.core.truth_((function (){var G__13048 = nt_13066;return (valid_nts_13049.cljs$core$IFn$_invoke$arity$1 ? valid_nts_13049.cljs$core$IFn$_invoke$arity$1(G__13048) : valid_nts_13049.call(null,G__13048));
})()))
{} else
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_13066)),(1)))+"occurs on the right-hand side of your grammar, but not on the left");
}
{
var G__13067 = cljs.core.next(seq__13043_13060__$1);
var G__13068 = null;
var G__13069 = (0);
var G__13070 = (0);
seq__13043_13050 = G__13067;
chunk__13044_13051 = G__13068;
count__13045_13052 = G__13069;
i__13046_13053 = G__13070;
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
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13072_13073 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13072_13073,sb__4366__auto__,rules){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13072_13073,sb__4366__auto__,rules))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13072_13073;
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
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13076_13078 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13076_13078,sb__4366__auto__,rules){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13076_13078,sb__4366__auto__,rules))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13076_13078;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
}
} else
{var rhs = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.constant$keyword$107,spec,false);if((rhs instanceof instaparse.gll.Failure))
{throw ("Error parsing grammar specification:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4366__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13077_13079 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13077_13079,sb__4366__auto__,rhs){
return (function (x__4367__auto__){return sb__4366__auto__.append(x__4367__auto__);
});})(_STAR_print_fn_STAR_13077_13079,sb__4366__auto__,rhs))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rhs], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13077_13079;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4366__auto__));
})()));
} else
{return instaparse.cfg.build_rule(cljs.core.first(rhs));
}
}
});
