// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3425__auto__ = elem.textContent;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6125_SHARP_){return !((p1__6125_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__6132_6138 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6133_6139 = null;var count__6134_6140 = (0);var i__6135_6141 = (0);while(true){
if((i__6135_6141 < count__6134_6140))
{var vec__6136_6142 = cljs.core._nth.call(null,chunk__6133_6139,i__6135_6141);var k_6143 = cljs.core.nth.call(null,vec__6136_6142,(0),null);var v_6144 = cljs.core.nth.call(null,vec__6136_6142,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6143),v_6144);
{
var G__6145 = seq__6132_6138;
var G__6146 = chunk__6133_6139;
var G__6147 = count__6134_6140;
var G__6148 = (i__6135_6141 + (1));
seq__6132_6138 = G__6145;
chunk__6133_6139 = G__6146;
count__6134_6140 = G__6147;
i__6135_6141 = G__6148;
continue;
}
} else
{var temp__4126__auto___6149 = cljs.core.seq.call(null,seq__6132_6138);if(temp__4126__auto___6149)
{var seq__6132_6150__$1 = temp__4126__auto___6149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6132_6150__$1))
{var c__4195__auto___6151 = cljs.core.chunk_first.call(null,seq__6132_6150__$1);{
var G__6152 = cljs.core.chunk_rest.call(null,seq__6132_6150__$1);
var G__6153 = c__4195__auto___6151;
var G__6154 = cljs.core.count.call(null,c__4195__auto___6151);
var G__6155 = (0);
seq__6132_6138 = G__6152;
chunk__6133_6139 = G__6153;
count__6134_6140 = G__6154;
i__6135_6141 = G__6155;
continue;
}
} else
{var vec__6137_6156 = cljs.core.first.call(null,seq__6132_6150__$1);var k_6157 = cljs.core.nth.call(null,vec__6137_6156,(0),null);var v_6158 = cljs.core.nth.call(null,vec__6137_6156,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6157),v_6158);
{
var G__6159 = cljs.core.next.call(null,seq__6132_6150__$1);
var G__6160 = null;
var G__6161 = (0);
var G__6162 = (0);
seq__6132_6138 = G__6159;
chunk__6133_6139 = G__6160;
count__6134_6140 = G__6161;
i__6135_6141 = G__6162;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6163){
var elem = cljs.core.first(arglist__6163);
var kvs = cljs.core.rest(arglist__6163);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6170_6176 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6171_6177 = null;var count__6172_6178 = (0);var i__6173_6179 = (0);while(true){
if((i__6173_6179 < count__6172_6178))
{var vec__6174_6180 = cljs.core._nth.call(null,chunk__6171_6177,i__6173_6179);var k_6181 = cljs.core.nth.call(null,vec__6174_6180,(0),null);var v_6182 = cljs.core.nth.call(null,vec__6174_6180,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6181,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6182)+"px"));
{
var G__6183 = seq__6170_6176;
var G__6184 = chunk__6171_6177;
var G__6185 = count__6172_6178;
var G__6186 = (i__6173_6179 + (1));
seq__6170_6176 = G__6183;
chunk__6171_6177 = G__6184;
count__6172_6178 = G__6185;
i__6173_6179 = G__6186;
continue;
}
} else
{var temp__4126__auto___6187 = cljs.core.seq.call(null,seq__6170_6176);if(temp__4126__auto___6187)
{var seq__6170_6188__$1 = temp__4126__auto___6187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6170_6188__$1))
{var c__4195__auto___6189 = cljs.core.chunk_first.call(null,seq__6170_6188__$1);{
var G__6190 = cljs.core.chunk_rest.call(null,seq__6170_6188__$1);
var G__6191 = c__4195__auto___6189;
var G__6192 = cljs.core.count.call(null,c__4195__auto___6189);
var G__6193 = (0);
seq__6170_6176 = G__6190;
chunk__6171_6177 = G__6191;
count__6172_6178 = G__6192;
i__6173_6179 = G__6193;
continue;
}
} else
{var vec__6175_6194 = cljs.core.first.call(null,seq__6170_6188__$1);var k_6195 = cljs.core.nth.call(null,vec__6175_6194,(0),null);var v_6196 = cljs.core.nth.call(null,vec__6175_6194,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6195,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6196)+"px"));
{
var G__6197 = cljs.core.next.call(null,seq__6170_6188__$1);
var G__6198 = null;
var G__6199 = (0);
var G__6200 = (0);
seq__6170_6176 = G__6197;
chunk__6171_6177 = G__6198;
count__6172_6178 = G__6199;
i__6173_6179 = G__6200;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6201){
var elem = cljs.core.first(arglist__6201);
var kvs = cljs.core.rest(arglist__6201);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6210 = elem;(G__6210[k__$1] = v);
return G__6210;
} else
{var G__6211 = elem;G__6211.setAttribute(k__$1,v);
return G__6211;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6218__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6212_6219 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6213_6220 = null;var count__6214_6221 = (0);var i__6215_6222 = (0);while(true){
if((i__6215_6222 < count__6214_6221))
{var vec__6216_6223 = cljs.core._nth.call(null,chunk__6213_6220,i__6215_6222);var k_6224__$1 = cljs.core.nth.call(null,vec__6216_6223,(0),null);var v_6225__$1 = cljs.core.nth.call(null,vec__6216_6223,(1),null);set_attr_BANG_.call(null,elem,k_6224__$1,v_6225__$1);
{
var G__6226 = seq__6212_6219;
var G__6227 = chunk__6213_6220;
var G__6228 = count__6214_6221;
var G__6229 = (i__6215_6222 + (1));
seq__6212_6219 = G__6226;
chunk__6213_6220 = G__6227;
count__6214_6221 = G__6228;
i__6215_6222 = G__6229;
continue;
}
} else
{var temp__4126__auto___6230 = cljs.core.seq.call(null,seq__6212_6219);if(temp__4126__auto___6230)
{var seq__6212_6231__$1 = temp__4126__auto___6230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6212_6231__$1))
{var c__4195__auto___6232 = cljs.core.chunk_first.call(null,seq__6212_6231__$1);{
var G__6233 = cljs.core.chunk_rest.call(null,seq__6212_6231__$1);
var G__6234 = c__4195__auto___6232;
var G__6235 = cljs.core.count.call(null,c__4195__auto___6232);
var G__6236 = (0);
seq__6212_6219 = G__6233;
chunk__6213_6220 = G__6234;
count__6214_6221 = G__6235;
i__6215_6222 = G__6236;
continue;
}
} else
{var vec__6217_6237 = cljs.core.first.call(null,seq__6212_6231__$1);var k_6238__$1 = cljs.core.nth.call(null,vec__6217_6237,(0),null);var v_6239__$1 = cljs.core.nth.call(null,vec__6217_6237,(1),null);set_attr_BANG_.call(null,elem,k_6238__$1,v_6239__$1);
{
var G__6240 = cljs.core.next.call(null,seq__6212_6231__$1);
var G__6241 = null;
var G__6242 = (0);
var G__6243 = (0);
seq__6212_6219 = G__6240;
chunk__6213_6220 = G__6241;
count__6214_6221 = G__6242;
i__6215_6222 = G__6243;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6218 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6218__delegate.call(this,elem,k,v,kvs);};
G__6218.cljs$lang$maxFixedArity = 3;
G__6218.cljs$lang$applyTo = (function (arglist__6244){
var elem = cljs.core.first(arglist__6244);
arglist__6244 = cljs.core.next(arglist__6244);
var k = cljs.core.first(arglist__6244);
arglist__6244 = cljs.core.next(arglist__6244);
var v = cljs.core.first(arglist__6244);
var kvs = cljs.core.rest(arglist__6244);
return G__6218__delegate(elem,k,v,kvs);
});
G__6218.cljs$core$IFn$_invoke$arity$variadic = G__6218__delegate;
return G__6218;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_6253__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6253__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6253__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6254__delegate = function (elem,k,ks){var seq__6249_6255 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6250_6256 = null;var count__6251_6257 = (0);var i__6252_6258 = (0);while(true){
if((i__6252_6258 < count__6251_6257))
{var k_6259__$1 = cljs.core._nth.call(null,chunk__6250_6256,i__6252_6258);remove_attr_BANG_.call(null,elem,k_6259__$1);
{
var G__6260 = seq__6249_6255;
var G__6261 = chunk__6250_6256;
var G__6262 = count__6251_6257;
var G__6263 = (i__6252_6258 + (1));
seq__6249_6255 = G__6260;
chunk__6250_6256 = G__6261;
count__6251_6257 = G__6262;
i__6252_6258 = G__6263;
continue;
}
} else
{var temp__4126__auto___6264 = cljs.core.seq.call(null,seq__6249_6255);if(temp__4126__auto___6264)
{var seq__6249_6265__$1 = temp__4126__auto___6264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6249_6265__$1))
{var c__4195__auto___6266 = cljs.core.chunk_first.call(null,seq__6249_6265__$1);{
var G__6267 = cljs.core.chunk_rest.call(null,seq__6249_6265__$1);
var G__6268 = c__4195__auto___6266;
var G__6269 = cljs.core.count.call(null,c__4195__auto___6266);
var G__6270 = (0);
seq__6249_6255 = G__6267;
chunk__6250_6256 = G__6268;
count__6251_6257 = G__6269;
i__6252_6258 = G__6270;
continue;
}
} else
{var k_6271__$1 = cljs.core.first.call(null,seq__6249_6265__$1);remove_attr_BANG_.call(null,elem,k_6271__$1);
{
var G__6272 = cljs.core.next.call(null,seq__6249_6265__$1);
var G__6273 = null;
var G__6274 = (0);
var G__6275 = (0);
seq__6249_6255 = G__6272;
chunk__6250_6256 = G__6273;
count__6251_6257 = G__6274;
i__6252_6258 = G__6275;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6254 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6254__delegate.call(this,elem,k,ks);};
G__6254.cljs$lang$maxFixedArity = 2;
G__6254.cljs$lang$applyTo = (function (arglist__6276){
var elem = cljs.core.first(arglist__6276);
arglist__6276 = cljs.core.next(arglist__6276);
var k = cljs.core.first(arglist__6276);
var ks = cljs.core.rest(arglist__6276);
return G__6254__delegate(elem,k,ks);
});
G__6254.cljs$core$IFn$_invoke$arity$variadic = G__6254__delegate;
return G__6254;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___6301 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6301))
{var class_list_6302 = temp__4124__auto___6301;var seq__6289_6303 = cljs.core.seq.call(null,classes__$1);var chunk__6290_6304 = null;var count__6291_6305 = (0);var i__6292_6306 = (0);while(true){
if((i__6292_6306 < count__6291_6305))
{var c_6307 = cljs.core._nth.call(null,chunk__6290_6304,i__6292_6306);class_list_6302.add(c_6307);
{
var G__6308 = seq__6289_6303;
var G__6309 = chunk__6290_6304;
var G__6310 = count__6291_6305;
var G__6311 = (i__6292_6306 + (1));
seq__6289_6303 = G__6308;
chunk__6290_6304 = G__6309;
count__6291_6305 = G__6310;
i__6292_6306 = G__6311;
continue;
}
} else
{var temp__4126__auto___6312 = cljs.core.seq.call(null,seq__6289_6303);if(temp__4126__auto___6312)
{var seq__6289_6313__$1 = temp__4126__auto___6312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6289_6313__$1))
{var c__4195__auto___6314 = cljs.core.chunk_first.call(null,seq__6289_6313__$1);{
var G__6315 = cljs.core.chunk_rest.call(null,seq__6289_6313__$1);
var G__6316 = c__4195__auto___6314;
var G__6317 = cljs.core.count.call(null,c__4195__auto___6314);
var G__6318 = (0);
seq__6289_6303 = G__6315;
chunk__6290_6304 = G__6316;
count__6291_6305 = G__6317;
i__6292_6306 = G__6318;
continue;
}
} else
{var c_6319 = cljs.core.first.call(null,seq__6289_6313__$1);class_list_6302.add(c_6319);
{
var G__6320 = cljs.core.next.call(null,seq__6289_6313__$1);
var G__6321 = null;
var G__6322 = (0);
var G__6323 = (0);
seq__6289_6303 = G__6320;
chunk__6290_6304 = G__6321;
count__6291_6305 = G__6322;
i__6292_6306 = G__6323;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6293_6324 = cljs.core.seq.call(null,classes__$1);var chunk__6294_6325 = null;var count__6295_6326 = (0);var i__6296_6327 = (0);while(true){
if((i__6296_6327 < count__6295_6326))
{var c_6328 = cljs.core._nth.call(null,chunk__6294_6325,i__6296_6327);var class_name_6329 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6329,c_6328)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6329 === ""))?c_6328:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6329)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6328))));
}
{
var G__6330 = seq__6293_6324;
var G__6331 = chunk__6294_6325;
var G__6332 = count__6295_6326;
var G__6333 = (i__6296_6327 + (1));
seq__6293_6324 = G__6330;
chunk__6294_6325 = G__6331;
count__6295_6326 = G__6332;
i__6296_6327 = G__6333;
continue;
}
} else
{var temp__4126__auto___6334 = cljs.core.seq.call(null,seq__6293_6324);if(temp__4126__auto___6334)
{var seq__6293_6335__$1 = temp__4126__auto___6334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6293_6335__$1))
{var c__4195__auto___6336 = cljs.core.chunk_first.call(null,seq__6293_6335__$1);{
var G__6337 = cljs.core.chunk_rest.call(null,seq__6293_6335__$1);
var G__6338 = c__4195__auto___6336;
var G__6339 = cljs.core.count.call(null,c__4195__auto___6336);
var G__6340 = (0);
seq__6293_6324 = G__6337;
chunk__6294_6325 = G__6338;
count__6295_6326 = G__6339;
i__6296_6327 = G__6340;
continue;
}
} else
{var c_6341 = cljs.core.first.call(null,seq__6293_6335__$1);var class_name_6342 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6342,c_6341)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6342 === ""))?c_6341:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6342)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6341))));
}
{
var G__6343 = cljs.core.next.call(null,seq__6293_6335__$1);
var G__6344 = null;
var G__6345 = (0);
var G__6346 = (0);
seq__6293_6324 = G__6343;
chunk__6294_6325 = G__6344;
count__6295_6326 = G__6345;
i__6296_6327 = G__6346;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__6347__delegate = function (elem,classes,more_classes){var seq__6297_6348 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6298_6349 = null;var count__6299_6350 = (0);var i__6300_6351 = (0);while(true){
if((i__6300_6351 < count__6299_6350))
{var c_6352 = cljs.core._nth.call(null,chunk__6298_6349,i__6300_6351);add_class_BANG_.call(null,elem,c_6352);
{
var G__6353 = seq__6297_6348;
var G__6354 = chunk__6298_6349;
var G__6355 = count__6299_6350;
var G__6356 = (i__6300_6351 + (1));
seq__6297_6348 = G__6353;
chunk__6298_6349 = G__6354;
count__6299_6350 = G__6355;
i__6300_6351 = G__6356;
continue;
}
} else
{var temp__4126__auto___6357 = cljs.core.seq.call(null,seq__6297_6348);if(temp__4126__auto___6357)
{var seq__6297_6358__$1 = temp__4126__auto___6357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6297_6358__$1))
{var c__4195__auto___6359 = cljs.core.chunk_first.call(null,seq__6297_6358__$1);{
var G__6360 = cljs.core.chunk_rest.call(null,seq__6297_6358__$1);
var G__6361 = c__4195__auto___6359;
var G__6362 = cljs.core.count.call(null,c__4195__auto___6359);
var G__6363 = (0);
seq__6297_6348 = G__6360;
chunk__6298_6349 = G__6361;
count__6299_6350 = G__6362;
i__6300_6351 = G__6363;
continue;
}
} else
{var c_6364 = cljs.core.first.call(null,seq__6297_6358__$1);add_class_BANG_.call(null,elem,c_6364);
{
var G__6365 = cljs.core.next.call(null,seq__6297_6358__$1);
var G__6366 = null;
var G__6367 = (0);
var G__6368 = (0);
seq__6297_6348 = G__6365;
chunk__6298_6349 = G__6366;
count__6299_6350 = G__6367;
i__6300_6351 = G__6368;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6347 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6347__delegate.call(this,elem,classes,more_classes);};
G__6347.cljs$lang$maxFixedArity = 2;
G__6347.cljs$lang$applyTo = (function (arglist__6369){
var elem = cljs.core.first(arglist__6369);
arglist__6369 = cljs.core.next(arglist__6369);
var classes = cljs.core.first(arglist__6369);
var more_classes = cljs.core.rest(arglist__6369);
return G__6347__delegate(elem,classes,more_classes);
});
G__6347.cljs$core$IFn$_invoke$arity$variadic = G__6347__delegate;
return G__6347;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6378 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6378))
{var class_list_6379 = temp__4124__auto___6378;class_list_6379.remove(c__$1);
} else
{var class_name_6380 = dommy.core.class$.call(null,elem);var new_class_name_6381 = dommy.utils.remove_class_str.call(null,class_name_6380,c__$1);if((class_name_6380 === new_class_name_6381))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6381);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6382__delegate = function (elem,class$,classes){var seq__6374 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6375 = null;var count__6376 = (0);var i__6377 = (0);while(true){
if((i__6377 < count__6376))
{var c = cljs.core._nth.call(null,chunk__6375,i__6377);remove_class_BANG_.call(null,elem,c);
{
var G__6383 = seq__6374;
var G__6384 = chunk__6375;
var G__6385 = count__6376;
var G__6386 = (i__6377 + (1));
seq__6374 = G__6383;
chunk__6375 = G__6384;
count__6376 = G__6385;
i__6377 = G__6386;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6374);if(temp__4126__auto__)
{var seq__6374__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6374__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6374__$1);{
var G__6387 = cljs.core.chunk_rest.call(null,seq__6374__$1);
var G__6388 = c__4195__auto__;
var G__6389 = cljs.core.count.call(null,c__4195__auto__);
var G__6390 = (0);
seq__6374 = G__6387;
chunk__6375 = G__6388;
count__6376 = G__6389;
i__6377 = G__6390;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6374__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6391 = cljs.core.next.call(null,seq__6374__$1);
var G__6392 = null;
var G__6393 = (0);
var G__6394 = (0);
seq__6374 = G__6391;
chunk__6375 = G__6392;
count__6376 = G__6393;
i__6377 = G__6394;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6382 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6382__delegate.call(this,elem,class$,classes);};
G__6382.cljs$lang$maxFixedArity = 2;
G__6382.cljs$lang$applyTo = (function (arglist__6395){
var elem = cljs.core.first(arglist__6395);
arglist__6395 = cljs.core.next(arglist__6395);
var class$ = cljs.core.first(arglist__6395);
var classes = cljs.core.rest(arglist__6395);
return G__6382__delegate(elem,class$,classes);
});
G__6382.cljs$core$IFn$_invoke$arity$variadic = G__6382__delegate;
return G__6382;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6396 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6396))
{var class_list_6397 = temp__4124__auto___6396;class_list_6397.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6403 = parent;G__6403.appendChild(child);
return G__6403;
});
var append_BANG___3 = (function() { 
var G__6408__delegate = function (parent,child,more_children){var seq__6404_6409 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6405_6410 = null;var count__6406_6411 = (0);var i__6407_6412 = (0);while(true){
if((i__6407_6412 < count__6406_6411))
{var c_6413 = cljs.core._nth.call(null,chunk__6405_6410,i__6407_6412);append_BANG_.call(null,parent,c_6413);
{
var G__6414 = seq__6404_6409;
var G__6415 = chunk__6405_6410;
var G__6416 = count__6406_6411;
var G__6417 = (i__6407_6412 + (1));
seq__6404_6409 = G__6414;
chunk__6405_6410 = G__6415;
count__6406_6411 = G__6416;
i__6407_6412 = G__6417;
continue;
}
} else
{var temp__4126__auto___6418 = cljs.core.seq.call(null,seq__6404_6409);if(temp__4126__auto___6418)
{var seq__6404_6419__$1 = temp__4126__auto___6418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6404_6419__$1))
{var c__4195__auto___6420 = cljs.core.chunk_first.call(null,seq__6404_6419__$1);{
var G__6421 = cljs.core.chunk_rest.call(null,seq__6404_6419__$1);
var G__6422 = c__4195__auto___6420;
var G__6423 = cljs.core.count.call(null,c__4195__auto___6420);
var G__6424 = (0);
seq__6404_6409 = G__6421;
chunk__6405_6410 = G__6422;
count__6406_6411 = G__6423;
i__6407_6412 = G__6424;
continue;
}
} else
{var c_6425 = cljs.core.first.call(null,seq__6404_6419__$1);append_BANG_.call(null,parent,c_6425);
{
var G__6426 = cljs.core.next.call(null,seq__6404_6419__$1);
var G__6427 = null;
var G__6428 = (0);
var G__6429 = (0);
seq__6404_6409 = G__6426;
chunk__6405_6410 = G__6427;
count__6406_6411 = G__6428;
i__6407_6412 = G__6429;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6408 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6408__delegate.call(this,parent,child,more_children);};
G__6408.cljs$lang$maxFixedArity = 2;
G__6408.cljs$lang$applyTo = (function (arglist__6430){
var parent = cljs.core.first(arglist__6430);
arglist__6430 = cljs.core.next(arglist__6430);
var child = cljs.core.first(arglist__6430);
var more_children = cljs.core.rest(arglist__6430);
return G__6408__delegate(parent,child,more_children);
});
G__6408.cljs$core$IFn$_invoke$arity$variadic = G__6408__delegate;
return G__6408;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__6436 = parent;G__6436.insertBefore(child,parent.firstChild);
return G__6436;
});
var prepend_BANG___3 = (function() { 
var G__6441__delegate = function (parent,child,more_children){var seq__6437_6442 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6438_6443 = null;var count__6439_6444 = (0);var i__6440_6445 = (0);while(true){
if((i__6440_6445 < count__6439_6444))
{var c_6446 = cljs.core._nth.call(null,chunk__6438_6443,i__6440_6445);prepend_BANG_.call(null,parent,c_6446);
{
var G__6447 = seq__6437_6442;
var G__6448 = chunk__6438_6443;
var G__6449 = count__6439_6444;
var G__6450 = (i__6440_6445 + (1));
seq__6437_6442 = G__6447;
chunk__6438_6443 = G__6448;
count__6439_6444 = G__6449;
i__6440_6445 = G__6450;
continue;
}
} else
{var temp__4126__auto___6451 = cljs.core.seq.call(null,seq__6437_6442);if(temp__4126__auto___6451)
{var seq__6437_6452__$1 = temp__4126__auto___6451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6437_6452__$1))
{var c__4195__auto___6453 = cljs.core.chunk_first.call(null,seq__6437_6452__$1);{
var G__6454 = cljs.core.chunk_rest.call(null,seq__6437_6452__$1);
var G__6455 = c__4195__auto___6453;
var G__6456 = cljs.core.count.call(null,c__4195__auto___6453);
var G__6457 = (0);
seq__6437_6442 = G__6454;
chunk__6438_6443 = G__6455;
count__6439_6444 = G__6456;
i__6440_6445 = G__6457;
continue;
}
} else
{var c_6458 = cljs.core.first.call(null,seq__6437_6452__$1);prepend_BANG_.call(null,parent,c_6458);
{
var G__6459 = cljs.core.next.call(null,seq__6437_6452__$1);
var G__6460 = null;
var G__6461 = (0);
var G__6462 = (0);
seq__6437_6442 = G__6459;
chunk__6438_6443 = G__6460;
count__6439_6444 = G__6461;
i__6440_6445 = G__6462;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6441 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6441__delegate.call(this,parent,child,more_children);};
G__6441.cljs$lang$maxFixedArity = 2;
G__6441.cljs$lang$applyTo = (function (arglist__6463){
var parent = cljs.core.first(arglist__6463);
arglist__6463 = cljs.core.next(arglist__6463);
var child = cljs.core.first(arglist__6463);
var more_children = cljs.core.rest(arglist__6463);
return G__6441__delegate(parent,child,more_children);
});
G__6441.cljs$core$IFn$_invoke$arity$variadic = G__6441__delegate;
return G__6441;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___6464 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___6464))
{var next_6465 = temp__4124__auto___6464;dommy.core.insert_before_BANG_.call(null,elem,next_6465);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__6467 = p;G__6467.removeChild(elem);
return G__6467;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6468){var vec__6469 = p__6468;var special_mouse_event = cljs.core.nth.call(null,vec__6469,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6469,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6469,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6469,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3425__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3413__auto__ = related_target;if(cljs.core.truth_(and__3413__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3413__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__6469,special_mouse_event,real_mouse_event))
});})(vec__6469,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3413__auto__ = selected_target;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3413__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3425__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6470){
var elem = cljs.core.first(arglist__6470);
arglist__6470 = cljs.core.next(arglist__6470);
var f = cljs.core.first(arglist__6470);
var args = cljs.core.rest(arglist__6470);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6494_6517 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6518 = cljs.core.nth.call(null,vec__6494_6517,(0),null);var selector_6519 = cljs.core.nth.call(null,vec__6494_6517,(1),null);var seq__6495_6520 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6502_6521 = null;var count__6503_6522 = (0);var i__6504_6523 = (0);while(true){
if((i__6504_6523 < count__6503_6522))
{var vec__6511_6524 = cljs.core._nth.call(null,chunk__6502_6521,i__6504_6523);var orig_type_6525 = cljs.core.nth.call(null,vec__6511_6524,(0),null);var f_6526 = cljs.core.nth.call(null,vec__6511_6524,(1),null);var seq__6505_6527 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6525,new cljs.core.PersistentArrayMap.fromArray([orig_type_6525,cljs.core.identity], true, false)));var chunk__6507_6528 = null;var count__6508_6529 = (0);var i__6509_6530 = (0);while(true){
if((i__6509_6530 < count__6508_6529))
{var vec__6512_6531 = cljs.core._nth.call(null,chunk__6507_6528,i__6509_6530);var actual_type_6532 = cljs.core.nth.call(null,vec__6512_6531,(0),null);var factory_6533 = cljs.core.nth.call(null,vec__6512_6531,(1),null);var canonical_f_6534 = (cljs.core.truth_(selector_6519)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6518,selector_6519):cljs.core.identity).call(null,factory_6533.call(null,f_6526));dommy.core.update_event_listeners_BANG_.call(null,elem_6518,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6519,actual_type_6532,f_6526], null),canonical_f_6534);
if(cljs.core.truth_(elem_6518.addEventListener))
{elem_6518.addEventListener(cljs.core.name.call(null,actual_type_6532),canonical_f_6534);
} else
{elem_6518.attachEvent(cljs.core.name.call(null,actual_type_6532),canonical_f_6534);
}
{
var G__6535 = seq__6505_6527;
var G__6536 = chunk__6507_6528;
var G__6537 = count__6508_6529;
var G__6538 = (i__6509_6530 + (1));
seq__6505_6527 = G__6535;
chunk__6507_6528 = G__6536;
count__6508_6529 = G__6537;
i__6509_6530 = G__6538;
continue;
}
} else
{var temp__4126__auto___6539 = cljs.core.seq.call(null,seq__6505_6527);if(temp__4126__auto___6539)
{var seq__6505_6540__$1 = temp__4126__auto___6539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6505_6540__$1))
{var c__4195__auto___6541 = cljs.core.chunk_first.call(null,seq__6505_6540__$1);{
var G__6542 = cljs.core.chunk_rest.call(null,seq__6505_6540__$1);
var G__6543 = c__4195__auto___6541;
var G__6544 = cljs.core.count.call(null,c__4195__auto___6541);
var G__6545 = (0);
seq__6505_6527 = G__6542;
chunk__6507_6528 = G__6543;
count__6508_6529 = G__6544;
i__6509_6530 = G__6545;
continue;
}
} else
{var vec__6513_6546 = cljs.core.first.call(null,seq__6505_6540__$1);var actual_type_6547 = cljs.core.nth.call(null,vec__6513_6546,(0),null);var factory_6548 = cljs.core.nth.call(null,vec__6513_6546,(1),null);var canonical_f_6549 = (cljs.core.truth_(selector_6519)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6518,selector_6519):cljs.core.identity).call(null,factory_6548.call(null,f_6526));dommy.core.update_event_listeners_BANG_.call(null,elem_6518,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6519,actual_type_6547,f_6526], null),canonical_f_6549);
if(cljs.core.truth_(elem_6518.addEventListener))
{elem_6518.addEventListener(cljs.core.name.call(null,actual_type_6547),canonical_f_6549);
} else
{elem_6518.attachEvent(cljs.core.name.call(null,actual_type_6547),canonical_f_6549);
}
{
var G__6550 = cljs.core.next.call(null,seq__6505_6540__$1);
var G__6551 = null;
var G__6552 = (0);
var G__6553 = (0);
seq__6505_6527 = G__6550;
chunk__6507_6528 = G__6551;
count__6508_6529 = G__6552;
i__6509_6530 = G__6553;
continue;
}
}
} else
{}
}
break;
}
{
var G__6554 = seq__6495_6520;
var G__6555 = chunk__6502_6521;
var G__6556 = count__6503_6522;
var G__6557 = (i__6504_6523 + (1));
seq__6495_6520 = G__6554;
chunk__6502_6521 = G__6555;
count__6503_6522 = G__6556;
i__6504_6523 = G__6557;
continue;
}
} else
{var temp__4126__auto___6558 = cljs.core.seq.call(null,seq__6495_6520);if(temp__4126__auto___6558)
{var seq__6495_6559__$1 = temp__4126__auto___6558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6495_6559__$1))
{var c__4195__auto___6560 = cljs.core.chunk_first.call(null,seq__6495_6559__$1);{
var G__6561 = cljs.core.chunk_rest.call(null,seq__6495_6559__$1);
var G__6562 = c__4195__auto___6560;
var G__6563 = cljs.core.count.call(null,c__4195__auto___6560);
var G__6564 = (0);
seq__6495_6520 = G__6561;
chunk__6502_6521 = G__6562;
count__6503_6522 = G__6563;
i__6504_6523 = G__6564;
continue;
}
} else
{var vec__6514_6565 = cljs.core.first.call(null,seq__6495_6559__$1);var orig_type_6566 = cljs.core.nth.call(null,vec__6514_6565,(0),null);var f_6567 = cljs.core.nth.call(null,vec__6514_6565,(1),null);var seq__6496_6568 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6566,new cljs.core.PersistentArrayMap.fromArray([orig_type_6566,cljs.core.identity], true, false)));var chunk__6498_6569 = null;var count__6499_6570 = (0);var i__6500_6571 = (0);while(true){
if((i__6500_6571 < count__6499_6570))
{var vec__6515_6572 = cljs.core._nth.call(null,chunk__6498_6569,i__6500_6571);var actual_type_6573 = cljs.core.nth.call(null,vec__6515_6572,(0),null);var factory_6574 = cljs.core.nth.call(null,vec__6515_6572,(1),null);var canonical_f_6575 = (cljs.core.truth_(selector_6519)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6518,selector_6519):cljs.core.identity).call(null,factory_6574.call(null,f_6567));dommy.core.update_event_listeners_BANG_.call(null,elem_6518,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6519,actual_type_6573,f_6567], null),canonical_f_6575);
if(cljs.core.truth_(elem_6518.addEventListener))
{elem_6518.addEventListener(cljs.core.name.call(null,actual_type_6573),canonical_f_6575);
} else
{elem_6518.attachEvent(cljs.core.name.call(null,actual_type_6573),canonical_f_6575);
}
{
var G__6576 = seq__6496_6568;
var G__6577 = chunk__6498_6569;
var G__6578 = count__6499_6570;
var G__6579 = (i__6500_6571 + (1));
seq__6496_6568 = G__6576;
chunk__6498_6569 = G__6577;
count__6499_6570 = G__6578;
i__6500_6571 = G__6579;
continue;
}
} else
{var temp__4126__auto___6580__$1 = cljs.core.seq.call(null,seq__6496_6568);if(temp__4126__auto___6580__$1)
{var seq__6496_6581__$1 = temp__4126__auto___6580__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6496_6581__$1))
{var c__4195__auto___6582 = cljs.core.chunk_first.call(null,seq__6496_6581__$1);{
var G__6583 = cljs.core.chunk_rest.call(null,seq__6496_6581__$1);
var G__6584 = c__4195__auto___6582;
var G__6585 = cljs.core.count.call(null,c__4195__auto___6582);
var G__6586 = (0);
seq__6496_6568 = G__6583;
chunk__6498_6569 = G__6584;
count__6499_6570 = G__6585;
i__6500_6571 = G__6586;
continue;
}
} else
{var vec__6516_6587 = cljs.core.first.call(null,seq__6496_6581__$1);var actual_type_6588 = cljs.core.nth.call(null,vec__6516_6587,(0),null);var factory_6589 = cljs.core.nth.call(null,vec__6516_6587,(1),null);var canonical_f_6590 = (cljs.core.truth_(selector_6519)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6518,selector_6519):cljs.core.identity).call(null,factory_6589.call(null,f_6567));dommy.core.update_event_listeners_BANG_.call(null,elem_6518,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6519,actual_type_6588,f_6567], null),canonical_f_6590);
if(cljs.core.truth_(elem_6518.addEventListener))
{elem_6518.addEventListener(cljs.core.name.call(null,actual_type_6588),canonical_f_6590);
} else
{elem_6518.attachEvent(cljs.core.name.call(null,actual_type_6588),canonical_f_6590);
}
{
var G__6591 = cljs.core.next.call(null,seq__6496_6581__$1);
var G__6592 = null;
var G__6593 = (0);
var G__6594 = (0);
seq__6496_6568 = G__6591;
chunk__6498_6569 = G__6592;
count__6499_6570 = G__6593;
i__6500_6571 = G__6594;
continue;
}
}
} else
{}
}
break;
}
{
var G__6595 = cljs.core.next.call(null,seq__6495_6559__$1);
var G__6596 = null;
var G__6597 = (0);
var G__6598 = (0);
seq__6495_6520 = G__6595;
chunk__6502_6521 = G__6596;
count__6503_6522 = G__6597;
i__6504_6523 = G__6598;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6599){
var elem_sel = cljs.core.first(arglist__6599);
var type_fs = cljs.core.rest(arglist__6599);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6623_6646 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6647 = cljs.core.nth.call(null,vec__6623_6646,(0),null);var selector_6648 = cljs.core.nth.call(null,vec__6623_6646,(1),null);var seq__6624_6649 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6631_6650 = null;var count__6632_6651 = (0);var i__6633_6652 = (0);while(true){
if((i__6633_6652 < count__6632_6651))
{var vec__6640_6653 = cljs.core._nth.call(null,chunk__6631_6650,i__6633_6652);var orig_type_6654 = cljs.core.nth.call(null,vec__6640_6653,(0),null);var f_6655 = cljs.core.nth.call(null,vec__6640_6653,(1),null);var seq__6634_6656 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6654,new cljs.core.PersistentArrayMap.fromArray([orig_type_6654,cljs.core.identity], true, false)));var chunk__6636_6657 = null;var count__6637_6658 = (0);var i__6638_6659 = (0);while(true){
if((i__6638_6659 < count__6637_6658))
{var vec__6641_6660 = cljs.core._nth.call(null,chunk__6636_6657,i__6638_6659);var actual_type_6661 = cljs.core.nth.call(null,vec__6641_6660,(0),null);var __6662 = cljs.core.nth.call(null,vec__6641_6660,(1),null);var keys_6663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6648,actual_type_6661,f_6655], null);var canonical_f_6664 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6647),keys_6663);dommy.core.update_event_listeners_BANG_.call(null,elem_6647,dommy.utils.dissoc_in,keys_6663);
if(cljs.core.truth_(elem_6647.removeEventListener))
{elem_6647.removeEventListener(cljs.core.name.call(null,actual_type_6661),canonical_f_6664);
} else
{elem_6647.detachEvent(cljs.core.name.call(null,actual_type_6661),canonical_f_6664);
}
{
var G__6665 = seq__6634_6656;
var G__6666 = chunk__6636_6657;
var G__6667 = count__6637_6658;
var G__6668 = (i__6638_6659 + (1));
seq__6634_6656 = G__6665;
chunk__6636_6657 = G__6666;
count__6637_6658 = G__6667;
i__6638_6659 = G__6668;
continue;
}
} else
{var temp__4126__auto___6669 = cljs.core.seq.call(null,seq__6634_6656);if(temp__4126__auto___6669)
{var seq__6634_6670__$1 = temp__4126__auto___6669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6634_6670__$1))
{var c__4195__auto___6671 = cljs.core.chunk_first.call(null,seq__6634_6670__$1);{
var G__6672 = cljs.core.chunk_rest.call(null,seq__6634_6670__$1);
var G__6673 = c__4195__auto___6671;
var G__6674 = cljs.core.count.call(null,c__4195__auto___6671);
var G__6675 = (0);
seq__6634_6656 = G__6672;
chunk__6636_6657 = G__6673;
count__6637_6658 = G__6674;
i__6638_6659 = G__6675;
continue;
}
} else
{var vec__6642_6676 = cljs.core.first.call(null,seq__6634_6670__$1);var actual_type_6677 = cljs.core.nth.call(null,vec__6642_6676,(0),null);var __6678 = cljs.core.nth.call(null,vec__6642_6676,(1),null);var keys_6679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6648,actual_type_6677,f_6655], null);var canonical_f_6680 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6647),keys_6679);dommy.core.update_event_listeners_BANG_.call(null,elem_6647,dommy.utils.dissoc_in,keys_6679);
if(cljs.core.truth_(elem_6647.removeEventListener))
{elem_6647.removeEventListener(cljs.core.name.call(null,actual_type_6677),canonical_f_6680);
} else
{elem_6647.detachEvent(cljs.core.name.call(null,actual_type_6677),canonical_f_6680);
}
{
var G__6681 = cljs.core.next.call(null,seq__6634_6670__$1);
var G__6682 = null;
var G__6683 = (0);
var G__6684 = (0);
seq__6634_6656 = G__6681;
chunk__6636_6657 = G__6682;
count__6637_6658 = G__6683;
i__6638_6659 = G__6684;
continue;
}
}
} else
{}
}
break;
}
{
var G__6685 = seq__6624_6649;
var G__6686 = chunk__6631_6650;
var G__6687 = count__6632_6651;
var G__6688 = (i__6633_6652 + (1));
seq__6624_6649 = G__6685;
chunk__6631_6650 = G__6686;
count__6632_6651 = G__6687;
i__6633_6652 = G__6688;
continue;
}
} else
{var temp__4126__auto___6689 = cljs.core.seq.call(null,seq__6624_6649);if(temp__4126__auto___6689)
{var seq__6624_6690__$1 = temp__4126__auto___6689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6624_6690__$1))
{var c__4195__auto___6691 = cljs.core.chunk_first.call(null,seq__6624_6690__$1);{
var G__6692 = cljs.core.chunk_rest.call(null,seq__6624_6690__$1);
var G__6693 = c__4195__auto___6691;
var G__6694 = cljs.core.count.call(null,c__4195__auto___6691);
var G__6695 = (0);
seq__6624_6649 = G__6692;
chunk__6631_6650 = G__6693;
count__6632_6651 = G__6694;
i__6633_6652 = G__6695;
continue;
}
} else
{var vec__6643_6696 = cljs.core.first.call(null,seq__6624_6690__$1);var orig_type_6697 = cljs.core.nth.call(null,vec__6643_6696,(0),null);var f_6698 = cljs.core.nth.call(null,vec__6643_6696,(1),null);var seq__6625_6699 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6697,new cljs.core.PersistentArrayMap.fromArray([orig_type_6697,cljs.core.identity], true, false)));var chunk__6627_6700 = null;var count__6628_6701 = (0);var i__6629_6702 = (0);while(true){
if((i__6629_6702 < count__6628_6701))
{var vec__6644_6703 = cljs.core._nth.call(null,chunk__6627_6700,i__6629_6702);var actual_type_6704 = cljs.core.nth.call(null,vec__6644_6703,(0),null);var __6705 = cljs.core.nth.call(null,vec__6644_6703,(1),null);var keys_6706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6648,actual_type_6704,f_6698], null);var canonical_f_6707 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6647),keys_6706);dommy.core.update_event_listeners_BANG_.call(null,elem_6647,dommy.utils.dissoc_in,keys_6706);
if(cljs.core.truth_(elem_6647.removeEventListener))
{elem_6647.removeEventListener(cljs.core.name.call(null,actual_type_6704),canonical_f_6707);
} else
{elem_6647.detachEvent(cljs.core.name.call(null,actual_type_6704),canonical_f_6707);
}
{
var G__6708 = seq__6625_6699;
var G__6709 = chunk__6627_6700;
var G__6710 = count__6628_6701;
var G__6711 = (i__6629_6702 + (1));
seq__6625_6699 = G__6708;
chunk__6627_6700 = G__6709;
count__6628_6701 = G__6710;
i__6629_6702 = G__6711;
continue;
}
} else
{var temp__4126__auto___6712__$1 = cljs.core.seq.call(null,seq__6625_6699);if(temp__4126__auto___6712__$1)
{var seq__6625_6713__$1 = temp__4126__auto___6712__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6625_6713__$1))
{var c__4195__auto___6714 = cljs.core.chunk_first.call(null,seq__6625_6713__$1);{
var G__6715 = cljs.core.chunk_rest.call(null,seq__6625_6713__$1);
var G__6716 = c__4195__auto___6714;
var G__6717 = cljs.core.count.call(null,c__4195__auto___6714);
var G__6718 = (0);
seq__6625_6699 = G__6715;
chunk__6627_6700 = G__6716;
count__6628_6701 = G__6717;
i__6629_6702 = G__6718;
continue;
}
} else
{var vec__6645_6719 = cljs.core.first.call(null,seq__6625_6713__$1);var actual_type_6720 = cljs.core.nth.call(null,vec__6645_6719,(0),null);var __6721 = cljs.core.nth.call(null,vec__6645_6719,(1),null);var keys_6722 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6648,actual_type_6720,f_6698], null);var canonical_f_6723 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6647),keys_6722);dommy.core.update_event_listeners_BANG_.call(null,elem_6647,dommy.utils.dissoc_in,keys_6722);
if(cljs.core.truth_(elem_6647.removeEventListener))
{elem_6647.removeEventListener(cljs.core.name.call(null,actual_type_6720),canonical_f_6723);
} else
{elem_6647.detachEvent(cljs.core.name.call(null,actual_type_6720),canonical_f_6723);
}
{
var G__6724 = cljs.core.next.call(null,seq__6625_6713__$1);
var G__6725 = null;
var G__6726 = (0);
var G__6727 = (0);
seq__6625_6699 = G__6724;
chunk__6627_6700 = G__6725;
count__6628_6701 = G__6726;
i__6629_6702 = G__6727;
continue;
}
}
} else
{}
}
break;
}
{
var G__6728 = cljs.core.next.call(null,seq__6624_6690__$1);
var G__6729 = null;
var G__6730 = (0);
var G__6731 = (0);
seq__6624_6649 = G__6728;
chunk__6631_6650 = G__6729;
count__6632_6651 = G__6730;
i__6633_6652 = G__6731;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6732){
var elem_sel = cljs.core.first(arglist__6732);
var type_fs = cljs.core.rest(arglist__6732);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6740_6747 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6748 = cljs.core.nth.call(null,vec__6740_6747,(0),null);var selector_6749 = cljs.core.nth.call(null,vec__6740_6747,(1),null);var seq__6741_6750 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6742_6751 = null;var count__6743_6752 = (0);var i__6744_6753 = (0);while(true){
if((i__6744_6753 < count__6743_6752))
{var vec__6745_6754 = cljs.core._nth.call(null,chunk__6742_6751,i__6744_6753);var type_6755 = cljs.core.nth.call(null,vec__6745_6754,(0),null);var f_6756 = cljs.core.nth.call(null,vec__6745_6754,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6755,((function (seq__6741_6750,chunk__6742_6751,count__6743_6752,i__6744_6753,vec__6745_6754,type_6755,f_6756,vec__6740_6747,elem_6748,selector_6749){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6755,this_fn);
return f_6756.call(null,e);
});})(seq__6741_6750,chunk__6742_6751,count__6743_6752,i__6744_6753,vec__6745_6754,type_6755,f_6756,vec__6740_6747,elem_6748,selector_6749))
);
{
var G__6757 = seq__6741_6750;
var G__6758 = chunk__6742_6751;
var G__6759 = count__6743_6752;
var G__6760 = (i__6744_6753 + (1));
seq__6741_6750 = G__6757;
chunk__6742_6751 = G__6758;
count__6743_6752 = G__6759;
i__6744_6753 = G__6760;
continue;
}
} else
{var temp__4126__auto___6761 = cljs.core.seq.call(null,seq__6741_6750);if(temp__4126__auto___6761)
{var seq__6741_6762__$1 = temp__4126__auto___6761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6741_6762__$1))
{var c__4195__auto___6763 = cljs.core.chunk_first.call(null,seq__6741_6762__$1);{
var G__6764 = cljs.core.chunk_rest.call(null,seq__6741_6762__$1);
var G__6765 = c__4195__auto___6763;
var G__6766 = cljs.core.count.call(null,c__4195__auto___6763);
var G__6767 = (0);
seq__6741_6750 = G__6764;
chunk__6742_6751 = G__6765;
count__6743_6752 = G__6766;
i__6744_6753 = G__6767;
continue;
}
} else
{var vec__6746_6768 = cljs.core.first.call(null,seq__6741_6762__$1);var type_6769 = cljs.core.nth.call(null,vec__6746_6768,(0),null);var f_6770 = cljs.core.nth.call(null,vec__6746_6768,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6769,((function (seq__6741_6750,chunk__6742_6751,count__6743_6752,i__6744_6753,vec__6746_6768,type_6769,f_6770,seq__6741_6762__$1,temp__4126__auto___6761,vec__6740_6747,elem_6748,selector_6749){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6769,this_fn);
return f_6770.call(null,e);
});})(seq__6741_6750,chunk__6742_6751,count__6743_6752,i__6744_6753,vec__6746_6768,type_6769,f_6770,seq__6741_6762__$1,temp__4126__auto___6761,vec__6740_6747,elem_6748,selector_6749))
);
{
var G__6771 = cljs.core.next.call(null,seq__6741_6762__$1);
var G__6772 = null;
var G__6773 = (0);
var G__6774 = (0);
seq__6741_6750 = G__6771;
chunk__6742_6751 = G__6772;
count__6743_6752 = G__6773;
i__6744_6753 = G__6774;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6775){
var elem_sel = cljs.core.first(arglist__6775);
var type_fs = cljs.core.rest(arglist__6775);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map