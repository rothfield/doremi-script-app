// Compiled by ClojureScript 0.0-2371
goog.provide('doremi_script_app.utils');
goog.require('cljs.core');
doremi_script_app.utils.is_a = (function is_a(s,v){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.first(v)),cljs.core.name(s));
});
doremi_script_app.utils.log_off = (function (){var G__13790 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13790) : cljs.core.atom.call(null,G__13790));
})();
doremi_script_app.utils.my_log = (function my_log(x){return console.log(x);
});
/**
* @param {...*} var_args
*/
doremi_script_app.utils.my_log2 = (function() { 
var my_log2__delegate = function (my_args){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13791_SHARP_){return doremi_script_app.utils.my_log(JSON.stringify(cljs.core.clj__GT_js(p1__13791_SHARP_)));
}),my_args));
};
var my_log2 = function (var_args){
var my_args = null;if (arguments.length > 0) {
  my_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return my_log2__delegate.call(this,my_args);};
my_log2.cljs$lang$maxFixedArity = 0;
my_log2.cljs$lang$applyTo = (function (arglist__13792){
var my_args = cljs.core.seq(arglist__13792);
return my_log2__delegate(my_args);
});
my_log2.cljs$core$IFn$_invoke$arity$variadic = my_log2__delegate;
return my_log2;
})()
;
/**
* @param {...*} var_args
*/
doremi_script_app.utils.log = (function() { 
var log__delegate = function (my_args){if(cljs.core.truth_((function (){var G__13795 = doremi_script_app.utils.log_off;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13795) : cljs.core.deref.call(null,G__13795));
})()))
{return null;
} else
{return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13793_SHARP_){return doremi_script_app.utils.my_log(JSON.stringify(cljs.core.clj__GT_js(p1__13793_SHARP_)));
}),my_args));
}
};
var log = function (var_args){
var my_args = null;if (arguments.length > 0) {
  my_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,my_args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13796){
var my_args = cljs.core.seq(arglist__13796);
return log__delegate(my_args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
doremi_script_app.utils.pprint = (function pprint(x){return doremi_script_app.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
});
