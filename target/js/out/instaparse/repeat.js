// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.viz');
instaparse.repeat.empty_result_QMARK_ = (function empty_result_QMARK_(result){return ((cljs.core.vector_QMARK_(result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),(1)))) || ((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,cljs.core.constant$keyword$42)) && (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,cljs.core.constant$keyword$43)))) || (cljs.core.empty_QMARK_(result));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure(null,null);
instaparse.repeat.get_end = (function() {
var get_end = null;
var get_end__1 = (function (parse){var vec__12146 = instaparse.viz.span(parse);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(1),null);if(cljs.core.truth_(end))
{return cljs.core.long$(end);
} else
{return cljs.core.count(parse);
}
});
var get_end__2 = (function (parse,index){var vec__12147 = instaparse.viz.span(parse);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12147,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12147,(1),null);if(cljs.core.truth_(end))
{return cljs.core.long$(end);
} else
{return (index + cljs.core.count(parse));
}
});
get_end = function(parse,index){
switch(arguments.length){
case 1:
return get_end__1.call(this,parse);
case 2:
return get_end__2.call(this,parse,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_end.cljs$core$IFn$_invoke$arity$1 = get_end__1;
get_end.cljs$core$IFn$_invoke$arity$2 = get_end__2;
return get_end;
})()
;
instaparse.repeat.parse_from_index = (function parse_from_index(grammar,initial_parser,text,segment,index){var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3(grammar,text,segment);instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener(tramp));
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
});
/**
* Returns either:
* [a-parse end-index a-list-of-valid-follow-up-parses]
* [a-parse end-index nil] (successfully reached end of text)
* nil (hit a dead-end with this strategy)
*/
instaparse.repeat.select_parse = (function select_parse(grammar,initial_parser,text,segment,index,parses){var length = cljs.core.count(text);var parses__$1 = cljs.core.seq(parses);while(true){
if(parses__$1)
{var parse = cljs.core.first(parses__$1);var vec__12149 = instaparse.viz.span(parse);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(1),null);var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count(parse)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end__$1,length))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else
{var temp__4124__auto__ = cljs.core.seq(instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,end__$1));if(temp__4124__auto__)
{var follow_ups = temp__4124__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else
{{
var G__12150 = cljs.core.next(parses__$1);
parses__$1 = G__12150;
continue;
}
}

}
} else
{return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function() {
var repeat_parse_hiccup = null;
var repeat_parse_hiccup__5 = (function (grammar,initial_parser,root_tag,text,segment){return repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
});
var repeat_parse_hiccup__6 = (function (grammar,initial_parser,root_tag,text,segment,index){var length = cljs.core.count(text);var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$(index);var parses = instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));var G__12162 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);var vec__12163 = G__12162;var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(1),null);var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(2),null);var selection = vec__12163;var index__$2 = index__$1;var parses__$1 = parses;var G__12162__$1 = G__12162;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__12164 = G__12162__$1;var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12164,(0),null);var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12164,(1),null);var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12164,(2),null);var selection__$1 = vec__12164;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(parses__$2.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$92,(0),cljs.core.constant$keyword$93,length], null));
} else
{{
var G__12165 = cljs.core.long$(end__$1);
var G__12166 = parses__$2.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,parse__$1);
var G__12167 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__12165;
parses__$1 = G__12166;
G__12162__$1 = G__12167;
continue;
}

}
}
}
break;
}
});
repeat_parse_hiccup = function(grammar,initial_parser,root_tag,text,segment,index){
switch(arguments.length){
case 5:
return repeat_parse_hiccup__5.call(this,grammar,initial_parser,root_tag,text,segment);
case 6:
return repeat_parse_hiccup__6.call(this,grammar,initial_parser,root_tag,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = repeat_parse_hiccup__5;
repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = repeat_parse_hiccup__6;
return repeat_parse_hiccup;
})()
;
instaparse.repeat.repeat_parse_enlive = (function() {
var repeat_parse_enlive = null;
var repeat_parse_enlive__5 = (function (grammar,initial_parser,root_tag,text,segment){return repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
});
var repeat_parse_enlive__6 = (function (grammar,initial_parser,root_tag,text,segment,index){var length = cljs.core.count(text);var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$(index);var parses = instaparse.auto_flatten_seq.EMPTY;var G__12179 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);var vec__12180 = G__12179;var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(1),null);var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(2),null);var selection = vec__12180;var index__$2 = index__$1;var parses__$1 = parses;var G__12179__$1 = G__12179;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__12181 = G__12179__$1;var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(0),null);var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(1),null);var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(2),null);var selection__$1 = vec__12181;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,root_tag,cljs.core.constant$keyword$43,cljs.core.seq(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$92,(0),cljs.core.constant$keyword$93,length], null));
} else
{{
var G__12182 = cljs.core.long$(end__$1);
var G__12183 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__12184 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__12182;
parses__$1 = G__12183;
G__12179__$1 = G__12184;
continue;
}

}
}
}
break;
}
});
repeat_parse_enlive = function(grammar,initial_parser,root_tag,text,segment,index){
switch(arguments.length){
case 5:
return repeat_parse_enlive__5.call(this,grammar,initial_parser,root_tag,text,segment);
case 6:
return repeat_parse_enlive__6.call(this,grammar,initial_parser,root_tag,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = repeat_parse_enlive__5;
repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = repeat_parse_enlive__6;
return repeat_parse_enlive;
})()
;
instaparse.repeat.repeat_parse_no_tag = (function() {
var repeat_parse_no_tag = null;
var repeat_parse_no_tag__4 = (function (grammar,initial_parser,text,segment){return repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,text,segment,(0));
});
var repeat_parse_no_tag__5 = (function (grammar,initial_parser,text,segment,index){var length = cljs.core.count(text);var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$(index);var parses = instaparse.auto_flatten_seq.EMPTY;var G__12195 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);var vec__12196 = G__12195;var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12196,(0),null);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12196,(1),null);var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12196,(2),null);var selection = vec__12196;var index__$2 = index__$1;var parses__$1 = parses;var G__12195__$1 = G__12195;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__12197 = G__12195__$1;var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12197,(0),null);var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12197,(1),null);var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12197,(2),null);var selection__$1 = vec__12197;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$92,(0),cljs.core.constant$keyword$93,length], null));
} else
{{
var G__12198 = cljs.core.long$(end__$1);
var G__12199 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__12200 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__12198;
parses__$1 = G__12199;
G__12195__$1 = G__12200;
continue;
}

}
}
}
break;
}
});
repeat_parse_no_tag = function(grammar,initial_parser,text,segment,index){
switch(arguments.length){
case 4:
return repeat_parse_no_tag__4.call(this,grammar,initial_parser,text,segment);
case 5:
return repeat_parse_no_tag__5.call(this,grammar,initial_parser,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = repeat_parse_no_tag__4;
repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = repeat_parse_no_tag__5;
return repeat_parse_no_tag;
})()
;
instaparse.repeat.repeat_parse = (function() {
var repeat_parse = null;
var repeat_parse__4 = (function (grammar,initial_parser,output_format,text){return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4(grammar,initial_parser,text,instaparse.gll.string__GT_segment(text));
});
var repeat_parse__5 = (function (grammar,initial_parser,output_format,root_tag,text){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.constant$keyword$40))
{return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.string__GT_segment(text));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.constant$keyword$41))
{return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.string__GT_segment(text));
} else
{return null;
}
}
});
repeat_parse = function(grammar,initial_parser,output_format,root_tag,text){
switch(arguments.length){
case 4:
return repeat_parse__4.call(this,grammar,initial_parser,output_format,root_tag);
case 5:
return repeat_parse__5.call(this,grammar,initial_parser,output_format,root_tag,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse.cljs$core$IFn$_invoke$arity$4 = repeat_parse__4;
repeat_parse.cljs$core$IFn$_invoke$arity$5 = repeat_parse__5;
return repeat_parse;
})()
;
instaparse.repeat.repeat_parse_with_header = (function repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){var segment = instaparse.gll.string__GT_segment(text);var length = cljs.core.count(text);var header_results = instaparse.repeat.parse_from_index(grammar,header_parser,text,segment,(0));if(cljs.core.truth_((function (){var or__3425__auto__ = cljs.core.empty_QMARK_(header_results);if(or__3425__auto__)
{return or__3425__auto__;
} else
{return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(header_parser);
}
})()))
{return instaparse.repeat.failure_signal;
} else
{var header_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,instaparse.repeat.get_end,header_results);var end = instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1(header_result);var repeat_result = instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);var span_meta = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$147,cljs.core.constant$keyword$92,(0),cljs.core.constant$keyword$93,length], null);if(((repeat_result instanceof instaparse.gll.Failure)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(repeating_parser),cljs.core.constant$keyword$48)) && (instaparse.repeat.empty_result_QMARK_(repeat_result))))
{return instaparse.repeat.failure_signal;
} else
{var G__12202 = (((output_format instanceof cljs.core.Keyword))?output_format.fqn:null);switch (G__12202) {
case "hiccup":
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result)),span_meta);

break;
case "enlive":
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,root_tag,cljs.core.constant$keyword$43,instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result)], null),span_meta);

break;
default:
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){var parsers = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(start_rule);var repeating_parser = cljs.core.last(parsers);if(cljs.core.not((function (){var and__3413__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.constant$keyword$57);if(and__3413__auto__)
{var and__3413__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$47,null], null), null).call(null,cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(repeating_parser));if(cljs.core.truth_(and__3413__auto____$1))
{return (cljs.core.not(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(repeating_parser))));
} else
{return and__3413__auto____$1;
}
} else
{return and__3413__auto__;
}
})()))
{return instaparse.repeat.failure_signal;
} else
{var header_parser = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.butlast(parsers));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction))
{return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,null,start_production,text);
} else
{return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function try_repeating_parse_strategy(parser,text,start_production){var grammar = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(parser);var output_format = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(parser);var start_rule = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grammar,start_production);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(start_rule),true))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.constant$keyword$48))
{return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.constant$keyword$47))
{var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);if(instaparse.repeat.empty_result_QMARK_(result))
{return instaparse.repeat.failure_signal;
} else
{return result;
}
} else
{return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.constant$keyword$48))
{return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(start_rule),cljs.core.constant$keyword$47))
{var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);if(instaparse.repeat.empty_result_QMARK_(result))
{return instaparse.repeat.failure_signal;
} else
{return result;
}
} else
{return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function used_memory_optimization_QMARK_(tree){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$147,cljs.core.constant$keyword$146.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tree)));
});
