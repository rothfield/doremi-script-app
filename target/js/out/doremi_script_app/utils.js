// Compiled by ClojureScript 0.0-2371
goog.provide('doremi_script_app.utils');
goog.require('cljs.core');
doremi_script_app.utils.is_a = (function is_a(s,v){return cljs.core._EQ_.call(null,cljs.core.name.call(null,cljs.core.first.call(null,v)),cljs.core.name.call(null,s));
});
doremi_script_app.utils.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
doremi_script_app.utils.log_off = cljs.core.atom.call(null,true);
doremi_script_app.utils.my_log = (function my_log(x){return console.log(x);
});
/**
* @param {...*} var_args
*/
doremi_script_app.utils.my_log2 = (function() { 
var my_log2__delegate = function (my_args){return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__9393_SHARP_){return doremi_script_app.utils.my_log.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__9393_SHARP_)));
}),my_args));
};
var my_log2 = function (var_args){
var my_args = null;if (arguments.length > 0) {
  my_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return my_log2__delegate.call(this,my_args);};
my_log2.cljs$lang$maxFixedArity = 0;
my_log2.cljs$lang$applyTo = (function (arglist__9394){
var my_args = cljs.core.seq(arglist__9394);
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
var log__delegate = function (my_args){if(cljs.core.truth_(cljs.core.deref.call(null,doremi_script_app.utils.log_off)))
{return null;
} else
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__9395_SHARP_){return doremi_script_app.utils.my_log.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__9395_SHARP_)));
}),my_args));
}
};
var log = function (var_args){
var my_args = null;if (arguments.length > 0) {
  my_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,my_args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__9396){
var my_args = cljs.core.seq(arglist__9396);
return log__delegate(my_args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
doremi_script_app.utils.pprint = (function pprint(x){return doremi_script_app.utils.log.call(null,x);
});

//# sourceMappingURL=utils.js.map