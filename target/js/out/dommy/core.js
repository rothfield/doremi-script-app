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
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6123_SHARP_){return !((p1__6123_SHARP_ === base));
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
var style = elem.style;var seq__6130_6136 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6131_6137 = null;var count__6132_6138 = (0);var i__6133_6139 = (0);while(true){
if((i__6133_6139 < count__6132_6138))
{var vec__6134_6140 = cljs.core._nth.call(null,chunk__6131_6137,i__6133_6139);var k_6141 = cljs.core.nth.call(null,vec__6134_6140,(0),null);var v_6142 = cljs.core.nth.call(null,vec__6134_6140,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6141),v_6142);
{
var G__6143 = seq__6130_6136;
var G__6144 = chunk__6131_6137;
var G__6145 = count__6132_6138;
var G__6146 = (i__6133_6139 + (1));
seq__6130_6136 = G__6143;
chunk__6131_6137 = G__6144;
count__6132_6138 = G__6145;
i__6133_6139 = G__6146;
continue;
}
} else
{var temp__4126__auto___6147 = cljs.core.seq.call(null,seq__6130_6136);if(temp__4126__auto___6147)
{var seq__6130_6148__$1 = temp__4126__auto___6147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6130_6148__$1))
{var c__4195__auto___6149 = cljs.core.chunk_first.call(null,seq__6130_6148__$1);{
var G__6150 = cljs.core.chunk_rest.call(null,seq__6130_6148__$1);
var G__6151 = c__4195__auto___6149;
var G__6152 = cljs.core.count.call(null,c__4195__auto___6149);
var G__6153 = (0);
seq__6130_6136 = G__6150;
chunk__6131_6137 = G__6151;
count__6132_6138 = G__6152;
i__6133_6139 = G__6153;
continue;
}
} else
{var vec__6135_6154 = cljs.core.first.call(null,seq__6130_6148__$1);var k_6155 = cljs.core.nth.call(null,vec__6135_6154,(0),null);var v_6156 = cljs.core.nth.call(null,vec__6135_6154,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6155),v_6156);
{
var G__6157 = cljs.core.next.call(null,seq__6130_6148__$1);
var G__6158 = null;
var G__6159 = (0);
var G__6160 = (0);
seq__6130_6136 = G__6157;
chunk__6131_6137 = G__6158;
count__6132_6138 = G__6159;
i__6133_6139 = G__6160;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6161){
var elem = cljs.core.first(arglist__6161);
var kvs = cljs.core.rest(arglist__6161);
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
var seq__6168_6174 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6169_6175 = null;var count__6170_6176 = (0);var i__6171_6177 = (0);while(true){
if((i__6171_6177 < count__6170_6176))
{var vec__6172_6178 = cljs.core._nth.call(null,chunk__6169_6175,i__6171_6177);var k_6179 = cljs.core.nth.call(null,vec__6172_6178,(0),null);var v_6180 = cljs.core.nth.call(null,vec__6172_6178,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6179,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6180)+"px"));
{
var G__6181 = seq__6168_6174;
var G__6182 = chunk__6169_6175;
var G__6183 = count__6170_6176;
var G__6184 = (i__6171_6177 + (1));
seq__6168_6174 = G__6181;
chunk__6169_6175 = G__6182;
count__6170_6176 = G__6183;
i__6171_6177 = G__6184;
continue;
}
} else
{var temp__4126__auto___6185 = cljs.core.seq.call(null,seq__6168_6174);if(temp__4126__auto___6185)
{var seq__6168_6186__$1 = temp__4126__auto___6185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6168_6186__$1))
{var c__4195__auto___6187 = cljs.core.chunk_first.call(null,seq__6168_6186__$1);{
var G__6188 = cljs.core.chunk_rest.call(null,seq__6168_6186__$1);
var G__6189 = c__4195__auto___6187;
var G__6190 = cljs.core.count.call(null,c__4195__auto___6187);
var G__6191 = (0);
seq__6168_6174 = G__6188;
chunk__6169_6175 = G__6189;
count__6170_6176 = G__6190;
i__6171_6177 = G__6191;
continue;
}
} else
{var vec__6173_6192 = cljs.core.first.call(null,seq__6168_6186__$1);var k_6193 = cljs.core.nth.call(null,vec__6173_6192,(0),null);var v_6194 = cljs.core.nth.call(null,vec__6173_6192,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6193,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6194)+"px"));
{
var G__6195 = cljs.core.next.call(null,seq__6168_6186__$1);
var G__6196 = null;
var G__6197 = (0);
var G__6198 = (0);
seq__6168_6174 = G__6195;
chunk__6169_6175 = G__6196;
count__6170_6176 = G__6197;
i__6171_6177 = G__6198;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6199){
var elem = cljs.core.first(arglist__6199);
var kvs = cljs.core.rest(arglist__6199);
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
{var G__6208 = elem;(G__6208[k__$1] = v);
return G__6208;
} else
{var G__6209 = elem;G__6209.setAttribute(k__$1,v);
return G__6209;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6216__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6210_6217 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6211_6218 = null;var count__6212_6219 = (0);var i__6213_6220 = (0);while(true){
if((i__6213_6220 < count__6212_6219))
{var vec__6214_6221 = cljs.core._nth.call(null,chunk__6211_6218,i__6213_6220);var k_6222__$1 = cljs.core.nth.call(null,vec__6214_6221,(0),null);var v_6223__$1 = cljs.core.nth.call(null,vec__6214_6221,(1),null);set_attr_BANG_.call(null,elem,k_6222__$1,v_6223__$1);
{
var G__6224 = seq__6210_6217;
var G__6225 = chunk__6211_6218;
var G__6226 = count__6212_6219;
var G__6227 = (i__6213_6220 + (1));
seq__6210_6217 = G__6224;
chunk__6211_6218 = G__6225;
count__6212_6219 = G__6226;
i__6213_6220 = G__6227;
continue;
}
} else
{var temp__4126__auto___6228 = cljs.core.seq.call(null,seq__6210_6217);if(temp__4126__auto___6228)
{var seq__6210_6229__$1 = temp__4126__auto___6228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6210_6229__$1))
{var c__4195__auto___6230 = cljs.core.chunk_first.call(null,seq__6210_6229__$1);{
var G__6231 = cljs.core.chunk_rest.call(null,seq__6210_6229__$1);
var G__6232 = c__4195__auto___6230;
var G__6233 = cljs.core.count.call(null,c__4195__auto___6230);
var G__6234 = (0);
seq__6210_6217 = G__6231;
chunk__6211_6218 = G__6232;
count__6212_6219 = G__6233;
i__6213_6220 = G__6234;
continue;
}
} else
{var vec__6215_6235 = cljs.core.first.call(null,seq__6210_6229__$1);var k_6236__$1 = cljs.core.nth.call(null,vec__6215_6235,(0),null);var v_6237__$1 = cljs.core.nth.call(null,vec__6215_6235,(1),null);set_attr_BANG_.call(null,elem,k_6236__$1,v_6237__$1);
{
var G__6238 = cljs.core.next.call(null,seq__6210_6229__$1);
var G__6239 = null;
var G__6240 = (0);
var G__6241 = (0);
seq__6210_6217 = G__6238;
chunk__6211_6218 = G__6239;
count__6212_6219 = G__6240;
i__6213_6220 = G__6241;
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
var G__6216 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6216__delegate.call(this,elem,k,v,kvs);};
G__6216.cljs$lang$maxFixedArity = 3;
G__6216.cljs$lang$applyTo = (function (arglist__6242){
var elem = cljs.core.first(arglist__6242);
arglist__6242 = cljs.core.next(arglist__6242);
var k = cljs.core.first(arglist__6242);
arglist__6242 = cljs.core.next(arglist__6242);
var v = cljs.core.first(arglist__6242);
var kvs = cljs.core.rest(arglist__6242);
return G__6216__delegate(elem,k,v,kvs);
});
G__6216.cljs$core$IFn$_invoke$arity$variadic = G__6216__delegate;
return G__6216;
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
var remove_attr_BANG___2 = (function (elem,k){var k_6251__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6251__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6251__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6252__delegate = function (elem,k,ks){var seq__6247_6253 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6248_6254 = null;var count__6249_6255 = (0);var i__6250_6256 = (0);while(true){
if((i__6250_6256 < count__6249_6255))
{var k_6257__$1 = cljs.core._nth.call(null,chunk__6248_6254,i__6250_6256);remove_attr_BANG_.call(null,elem,k_6257__$1);
{
var G__6258 = seq__6247_6253;
var G__6259 = chunk__6248_6254;
var G__6260 = count__6249_6255;
var G__6261 = (i__6250_6256 + (1));
seq__6247_6253 = G__6258;
chunk__6248_6254 = G__6259;
count__6249_6255 = G__6260;
i__6250_6256 = G__6261;
continue;
}
} else
{var temp__4126__auto___6262 = cljs.core.seq.call(null,seq__6247_6253);if(temp__4126__auto___6262)
{var seq__6247_6263__$1 = temp__4126__auto___6262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6247_6263__$1))
{var c__4195__auto___6264 = cljs.core.chunk_first.call(null,seq__6247_6263__$1);{
var G__6265 = cljs.core.chunk_rest.call(null,seq__6247_6263__$1);
var G__6266 = c__4195__auto___6264;
var G__6267 = cljs.core.count.call(null,c__4195__auto___6264);
var G__6268 = (0);
seq__6247_6253 = G__6265;
chunk__6248_6254 = G__6266;
count__6249_6255 = G__6267;
i__6250_6256 = G__6268;
continue;
}
} else
{var k_6269__$1 = cljs.core.first.call(null,seq__6247_6263__$1);remove_attr_BANG_.call(null,elem,k_6269__$1);
{
var G__6270 = cljs.core.next.call(null,seq__6247_6263__$1);
var G__6271 = null;
var G__6272 = (0);
var G__6273 = (0);
seq__6247_6253 = G__6270;
chunk__6248_6254 = G__6271;
count__6249_6255 = G__6272;
i__6250_6256 = G__6273;
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
var G__6252 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6252__delegate.call(this,elem,k,ks);};
G__6252.cljs$lang$maxFixedArity = 2;
G__6252.cljs$lang$applyTo = (function (arglist__6274){
var elem = cljs.core.first(arglist__6274);
arglist__6274 = cljs.core.next(arglist__6274);
var k = cljs.core.first(arglist__6274);
var ks = cljs.core.rest(arglist__6274);
return G__6252__delegate(elem,k,ks);
});
G__6252.cljs$core$IFn$_invoke$arity$variadic = G__6252__delegate;
return G__6252;
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
{var temp__4124__auto___6299 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6299))
{var class_list_6300 = temp__4124__auto___6299;var seq__6287_6301 = cljs.core.seq.call(null,classes__$1);var chunk__6288_6302 = null;var count__6289_6303 = (0);var i__6290_6304 = (0);while(true){
if((i__6290_6304 < count__6289_6303))
{var c_6305 = cljs.core._nth.call(null,chunk__6288_6302,i__6290_6304);class_list_6300.add(c_6305);
{
var G__6306 = seq__6287_6301;
var G__6307 = chunk__6288_6302;
var G__6308 = count__6289_6303;
var G__6309 = (i__6290_6304 + (1));
seq__6287_6301 = G__6306;
chunk__6288_6302 = G__6307;
count__6289_6303 = G__6308;
i__6290_6304 = G__6309;
continue;
}
} else
{var temp__4126__auto___6310 = cljs.core.seq.call(null,seq__6287_6301);if(temp__4126__auto___6310)
{var seq__6287_6311__$1 = temp__4126__auto___6310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6287_6311__$1))
{var c__4195__auto___6312 = cljs.core.chunk_first.call(null,seq__6287_6311__$1);{
var G__6313 = cljs.core.chunk_rest.call(null,seq__6287_6311__$1);
var G__6314 = c__4195__auto___6312;
var G__6315 = cljs.core.count.call(null,c__4195__auto___6312);
var G__6316 = (0);
seq__6287_6301 = G__6313;
chunk__6288_6302 = G__6314;
count__6289_6303 = G__6315;
i__6290_6304 = G__6316;
continue;
}
} else
{var c_6317 = cljs.core.first.call(null,seq__6287_6311__$1);class_list_6300.add(c_6317);
{
var G__6318 = cljs.core.next.call(null,seq__6287_6311__$1);
var G__6319 = null;
var G__6320 = (0);
var G__6321 = (0);
seq__6287_6301 = G__6318;
chunk__6288_6302 = G__6319;
count__6289_6303 = G__6320;
i__6290_6304 = G__6321;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6291_6322 = cljs.core.seq.call(null,classes__$1);var chunk__6292_6323 = null;var count__6293_6324 = (0);var i__6294_6325 = (0);while(true){
if((i__6294_6325 < count__6293_6324))
{var c_6326 = cljs.core._nth.call(null,chunk__6292_6323,i__6294_6325);var class_name_6327 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6327,c_6326)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6327 === ""))?c_6326:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6327)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6326))));
}
{
var G__6328 = seq__6291_6322;
var G__6329 = chunk__6292_6323;
var G__6330 = count__6293_6324;
var G__6331 = (i__6294_6325 + (1));
seq__6291_6322 = G__6328;
chunk__6292_6323 = G__6329;
count__6293_6324 = G__6330;
i__6294_6325 = G__6331;
continue;
}
} else
{var temp__4126__auto___6332 = cljs.core.seq.call(null,seq__6291_6322);if(temp__4126__auto___6332)
{var seq__6291_6333__$1 = temp__4126__auto___6332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6291_6333__$1))
{var c__4195__auto___6334 = cljs.core.chunk_first.call(null,seq__6291_6333__$1);{
var G__6335 = cljs.core.chunk_rest.call(null,seq__6291_6333__$1);
var G__6336 = c__4195__auto___6334;
var G__6337 = cljs.core.count.call(null,c__4195__auto___6334);
var G__6338 = (0);
seq__6291_6322 = G__6335;
chunk__6292_6323 = G__6336;
count__6293_6324 = G__6337;
i__6294_6325 = G__6338;
continue;
}
} else
{var c_6339 = cljs.core.first.call(null,seq__6291_6333__$1);var class_name_6340 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6340,c_6339)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6340 === ""))?c_6339:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6340)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6339))));
}
{
var G__6341 = cljs.core.next.call(null,seq__6291_6333__$1);
var G__6342 = null;
var G__6343 = (0);
var G__6344 = (0);
seq__6291_6322 = G__6341;
chunk__6292_6323 = G__6342;
count__6293_6324 = G__6343;
i__6294_6325 = G__6344;
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
var G__6345__delegate = function (elem,classes,more_classes){var seq__6295_6346 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6296_6347 = null;var count__6297_6348 = (0);var i__6298_6349 = (0);while(true){
if((i__6298_6349 < count__6297_6348))
{var c_6350 = cljs.core._nth.call(null,chunk__6296_6347,i__6298_6349);add_class_BANG_.call(null,elem,c_6350);
{
var G__6351 = seq__6295_6346;
var G__6352 = chunk__6296_6347;
var G__6353 = count__6297_6348;
var G__6354 = (i__6298_6349 + (1));
seq__6295_6346 = G__6351;
chunk__6296_6347 = G__6352;
count__6297_6348 = G__6353;
i__6298_6349 = G__6354;
continue;
}
} else
{var temp__4126__auto___6355 = cljs.core.seq.call(null,seq__6295_6346);if(temp__4126__auto___6355)
{var seq__6295_6356__$1 = temp__4126__auto___6355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6295_6356__$1))
{var c__4195__auto___6357 = cljs.core.chunk_first.call(null,seq__6295_6356__$1);{
var G__6358 = cljs.core.chunk_rest.call(null,seq__6295_6356__$1);
var G__6359 = c__4195__auto___6357;
var G__6360 = cljs.core.count.call(null,c__4195__auto___6357);
var G__6361 = (0);
seq__6295_6346 = G__6358;
chunk__6296_6347 = G__6359;
count__6297_6348 = G__6360;
i__6298_6349 = G__6361;
continue;
}
} else
{var c_6362 = cljs.core.first.call(null,seq__6295_6356__$1);add_class_BANG_.call(null,elem,c_6362);
{
var G__6363 = cljs.core.next.call(null,seq__6295_6356__$1);
var G__6364 = null;
var G__6365 = (0);
var G__6366 = (0);
seq__6295_6346 = G__6363;
chunk__6296_6347 = G__6364;
count__6297_6348 = G__6365;
i__6298_6349 = G__6366;
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
var G__6345 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6345__delegate.call(this,elem,classes,more_classes);};
G__6345.cljs$lang$maxFixedArity = 2;
G__6345.cljs$lang$applyTo = (function (arglist__6367){
var elem = cljs.core.first(arglist__6367);
arglist__6367 = cljs.core.next(arglist__6367);
var classes = cljs.core.first(arglist__6367);
var more_classes = cljs.core.rest(arglist__6367);
return G__6345__delegate(elem,classes,more_classes);
});
G__6345.cljs$core$IFn$_invoke$arity$variadic = G__6345__delegate;
return G__6345;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6376 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6376))
{var class_list_6377 = temp__4124__auto___6376;class_list_6377.remove(c__$1);
} else
{var class_name_6378 = dommy.core.class$.call(null,elem);var new_class_name_6379 = dommy.utils.remove_class_str.call(null,class_name_6378,c__$1);if((class_name_6378 === new_class_name_6379))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6379);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6380__delegate = function (elem,class$,classes){var seq__6372 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6373 = null;var count__6374 = (0);var i__6375 = (0);while(true){
if((i__6375 < count__6374))
{var c = cljs.core._nth.call(null,chunk__6373,i__6375);remove_class_BANG_.call(null,elem,c);
{
var G__6381 = seq__6372;
var G__6382 = chunk__6373;
var G__6383 = count__6374;
var G__6384 = (i__6375 + (1));
seq__6372 = G__6381;
chunk__6373 = G__6382;
count__6374 = G__6383;
i__6375 = G__6384;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6372);if(temp__4126__auto__)
{var seq__6372__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6372__$1))
{var c__4195__auto__ = cljs.core.chunk_first.call(null,seq__6372__$1);{
var G__6385 = cljs.core.chunk_rest.call(null,seq__6372__$1);
var G__6386 = c__4195__auto__;
var G__6387 = cljs.core.count.call(null,c__4195__auto__);
var G__6388 = (0);
seq__6372 = G__6385;
chunk__6373 = G__6386;
count__6374 = G__6387;
i__6375 = G__6388;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6372__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6389 = cljs.core.next.call(null,seq__6372__$1);
var G__6390 = null;
var G__6391 = (0);
var G__6392 = (0);
seq__6372 = G__6389;
chunk__6373 = G__6390;
count__6374 = G__6391;
i__6375 = G__6392;
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
var G__6380 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6380__delegate.call(this,elem,class$,classes);};
G__6380.cljs$lang$maxFixedArity = 2;
G__6380.cljs$lang$applyTo = (function (arglist__6393){
var elem = cljs.core.first(arglist__6393);
arglist__6393 = cljs.core.next(arglist__6393);
var class$ = cljs.core.first(arglist__6393);
var classes = cljs.core.rest(arglist__6393);
return G__6380__delegate(elem,class$,classes);
});
G__6380.cljs$core$IFn$_invoke$arity$variadic = G__6380__delegate;
return G__6380;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6394 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6394))
{var class_list_6395 = temp__4124__auto___6394;class_list_6395.toggle(c__$1);
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
var append_BANG___2 = (function (parent,child){var G__6401 = parent;G__6401.appendChild(child);
return G__6401;
});
var append_BANG___3 = (function() { 
var G__6406__delegate = function (parent,child,more_children){var seq__6402_6407 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6403_6408 = null;var count__6404_6409 = (0);var i__6405_6410 = (0);while(true){
if((i__6405_6410 < count__6404_6409))
{var c_6411 = cljs.core._nth.call(null,chunk__6403_6408,i__6405_6410);append_BANG_.call(null,parent,c_6411);
{
var G__6412 = seq__6402_6407;
var G__6413 = chunk__6403_6408;
var G__6414 = count__6404_6409;
var G__6415 = (i__6405_6410 + (1));
seq__6402_6407 = G__6412;
chunk__6403_6408 = G__6413;
count__6404_6409 = G__6414;
i__6405_6410 = G__6415;
continue;
}
} else
{var temp__4126__auto___6416 = cljs.core.seq.call(null,seq__6402_6407);if(temp__4126__auto___6416)
{var seq__6402_6417__$1 = temp__4126__auto___6416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6402_6417__$1))
{var c__4195__auto___6418 = cljs.core.chunk_first.call(null,seq__6402_6417__$1);{
var G__6419 = cljs.core.chunk_rest.call(null,seq__6402_6417__$1);
var G__6420 = c__4195__auto___6418;
var G__6421 = cljs.core.count.call(null,c__4195__auto___6418);
var G__6422 = (0);
seq__6402_6407 = G__6419;
chunk__6403_6408 = G__6420;
count__6404_6409 = G__6421;
i__6405_6410 = G__6422;
continue;
}
} else
{var c_6423 = cljs.core.first.call(null,seq__6402_6417__$1);append_BANG_.call(null,parent,c_6423);
{
var G__6424 = cljs.core.next.call(null,seq__6402_6417__$1);
var G__6425 = null;
var G__6426 = (0);
var G__6427 = (0);
seq__6402_6407 = G__6424;
chunk__6403_6408 = G__6425;
count__6404_6409 = G__6426;
i__6405_6410 = G__6427;
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
var G__6406 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6406__delegate.call(this,parent,child,more_children);};
G__6406.cljs$lang$maxFixedArity = 2;
G__6406.cljs$lang$applyTo = (function (arglist__6428){
var parent = cljs.core.first(arglist__6428);
arglist__6428 = cljs.core.next(arglist__6428);
var child = cljs.core.first(arglist__6428);
var more_children = cljs.core.rest(arglist__6428);
return G__6406__delegate(parent,child,more_children);
});
G__6406.cljs$core$IFn$_invoke$arity$variadic = G__6406__delegate;
return G__6406;
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
var prepend_BANG___2 = (function (parent,child){var G__6434 = parent;G__6434.insertBefore(child,parent.firstChild);
return G__6434;
});
var prepend_BANG___3 = (function() { 
var G__6439__delegate = function (parent,child,more_children){var seq__6435_6440 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6436_6441 = null;var count__6437_6442 = (0);var i__6438_6443 = (0);while(true){
if((i__6438_6443 < count__6437_6442))
{var c_6444 = cljs.core._nth.call(null,chunk__6436_6441,i__6438_6443);prepend_BANG_.call(null,parent,c_6444);
{
var G__6445 = seq__6435_6440;
var G__6446 = chunk__6436_6441;
var G__6447 = count__6437_6442;
var G__6448 = (i__6438_6443 + (1));
seq__6435_6440 = G__6445;
chunk__6436_6441 = G__6446;
count__6437_6442 = G__6447;
i__6438_6443 = G__6448;
continue;
}
} else
{var temp__4126__auto___6449 = cljs.core.seq.call(null,seq__6435_6440);if(temp__4126__auto___6449)
{var seq__6435_6450__$1 = temp__4126__auto___6449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6435_6450__$1))
{var c__4195__auto___6451 = cljs.core.chunk_first.call(null,seq__6435_6450__$1);{
var G__6452 = cljs.core.chunk_rest.call(null,seq__6435_6450__$1);
var G__6453 = c__4195__auto___6451;
var G__6454 = cljs.core.count.call(null,c__4195__auto___6451);
var G__6455 = (0);
seq__6435_6440 = G__6452;
chunk__6436_6441 = G__6453;
count__6437_6442 = G__6454;
i__6438_6443 = G__6455;
continue;
}
} else
{var c_6456 = cljs.core.first.call(null,seq__6435_6450__$1);prepend_BANG_.call(null,parent,c_6456);
{
var G__6457 = cljs.core.next.call(null,seq__6435_6450__$1);
var G__6458 = null;
var G__6459 = (0);
var G__6460 = (0);
seq__6435_6440 = G__6457;
chunk__6436_6441 = G__6458;
count__6437_6442 = G__6459;
i__6438_6443 = G__6460;
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
var G__6439 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6439__delegate.call(this,parent,child,more_children);};
G__6439.cljs$lang$maxFixedArity = 2;
G__6439.cljs$lang$applyTo = (function (arglist__6461){
var parent = cljs.core.first(arglist__6461);
arglist__6461 = cljs.core.next(arglist__6461);
var child = cljs.core.first(arglist__6461);
var more_children = cljs.core.rest(arglist__6461);
return G__6439__delegate(parent,child,more_children);
});
G__6439.cljs$core$IFn$_invoke$arity$variadic = G__6439__delegate;
return G__6439;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___6462 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___6462))
{var next_6463 = temp__4124__auto___6462;dommy.core.insert_before_BANG_.call(null,elem,next_6463);
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
var remove_BANG___2 = (function (p,elem){var G__6465 = p;G__6465.removeChild(elem);
return G__6465;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6466){var vec__6467 = p__6466;var special_mouse_event = cljs.core.nth.call(null,vec__6467,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6467,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6467,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6467,special_mouse_event,real_mouse_event){
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
;})(vec__6467,special_mouse_event,real_mouse_event))
});})(vec__6467,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6468){
var elem = cljs.core.first(arglist__6468);
arglist__6468 = cljs.core.next(arglist__6468);
var f = cljs.core.first(arglist__6468);
var args = cljs.core.rest(arglist__6468);
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
var vec__6492_6515 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6516 = cljs.core.nth.call(null,vec__6492_6515,(0),null);var selector_6517 = cljs.core.nth.call(null,vec__6492_6515,(1),null);var seq__6493_6518 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6500_6519 = null;var count__6501_6520 = (0);var i__6502_6521 = (0);while(true){
if((i__6502_6521 < count__6501_6520))
{var vec__6509_6522 = cljs.core._nth.call(null,chunk__6500_6519,i__6502_6521);var orig_type_6523 = cljs.core.nth.call(null,vec__6509_6522,(0),null);var f_6524 = cljs.core.nth.call(null,vec__6509_6522,(1),null);var seq__6503_6525 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6523,new cljs.core.PersistentArrayMap.fromArray([orig_type_6523,cljs.core.identity], true, false)));var chunk__6505_6526 = null;var count__6506_6527 = (0);var i__6507_6528 = (0);while(true){
if((i__6507_6528 < count__6506_6527))
{var vec__6510_6529 = cljs.core._nth.call(null,chunk__6505_6526,i__6507_6528);var actual_type_6530 = cljs.core.nth.call(null,vec__6510_6529,(0),null);var factory_6531 = cljs.core.nth.call(null,vec__6510_6529,(1),null);var canonical_f_6532 = (cljs.core.truth_(selector_6517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6516,selector_6517):cljs.core.identity).call(null,factory_6531.call(null,f_6524));dommy.core.update_event_listeners_BANG_.call(null,elem_6516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6517,actual_type_6530,f_6524], null),canonical_f_6532);
if(cljs.core.truth_(elem_6516.addEventListener))
{elem_6516.addEventListener(cljs.core.name.call(null,actual_type_6530),canonical_f_6532);
} else
{elem_6516.attachEvent(cljs.core.name.call(null,actual_type_6530),canonical_f_6532);
}
{
var G__6533 = seq__6503_6525;
var G__6534 = chunk__6505_6526;
var G__6535 = count__6506_6527;
var G__6536 = (i__6507_6528 + (1));
seq__6503_6525 = G__6533;
chunk__6505_6526 = G__6534;
count__6506_6527 = G__6535;
i__6507_6528 = G__6536;
continue;
}
} else
{var temp__4126__auto___6537 = cljs.core.seq.call(null,seq__6503_6525);if(temp__4126__auto___6537)
{var seq__6503_6538__$1 = temp__4126__auto___6537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6503_6538__$1))
{var c__4195__auto___6539 = cljs.core.chunk_first.call(null,seq__6503_6538__$1);{
var G__6540 = cljs.core.chunk_rest.call(null,seq__6503_6538__$1);
var G__6541 = c__4195__auto___6539;
var G__6542 = cljs.core.count.call(null,c__4195__auto___6539);
var G__6543 = (0);
seq__6503_6525 = G__6540;
chunk__6505_6526 = G__6541;
count__6506_6527 = G__6542;
i__6507_6528 = G__6543;
continue;
}
} else
{var vec__6511_6544 = cljs.core.first.call(null,seq__6503_6538__$1);var actual_type_6545 = cljs.core.nth.call(null,vec__6511_6544,(0),null);var factory_6546 = cljs.core.nth.call(null,vec__6511_6544,(1),null);var canonical_f_6547 = (cljs.core.truth_(selector_6517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6516,selector_6517):cljs.core.identity).call(null,factory_6546.call(null,f_6524));dommy.core.update_event_listeners_BANG_.call(null,elem_6516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6517,actual_type_6545,f_6524], null),canonical_f_6547);
if(cljs.core.truth_(elem_6516.addEventListener))
{elem_6516.addEventListener(cljs.core.name.call(null,actual_type_6545),canonical_f_6547);
} else
{elem_6516.attachEvent(cljs.core.name.call(null,actual_type_6545),canonical_f_6547);
}
{
var G__6548 = cljs.core.next.call(null,seq__6503_6538__$1);
var G__6549 = null;
var G__6550 = (0);
var G__6551 = (0);
seq__6503_6525 = G__6548;
chunk__6505_6526 = G__6549;
count__6506_6527 = G__6550;
i__6507_6528 = G__6551;
continue;
}
}
} else
{}
}
break;
}
{
var G__6552 = seq__6493_6518;
var G__6553 = chunk__6500_6519;
var G__6554 = count__6501_6520;
var G__6555 = (i__6502_6521 + (1));
seq__6493_6518 = G__6552;
chunk__6500_6519 = G__6553;
count__6501_6520 = G__6554;
i__6502_6521 = G__6555;
continue;
}
} else
{var temp__4126__auto___6556 = cljs.core.seq.call(null,seq__6493_6518);if(temp__4126__auto___6556)
{var seq__6493_6557__$1 = temp__4126__auto___6556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6493_6557__$1))
{var c__4195__auto___6558 = cljs.core.chunk_first.call(null,seq__6493_6557__$1);{
var G__6559 = cljs.core.chunk_rest.call(null,seq__6493_6557__$1);
var G__6560 = c__4195__auto___6558;
var G__6561 = cljs.core.count.call(null,c__4195__auto___6558);
var G__6562 = (0);
seq__6493_6518 = G__6559;
chunk__6500_6519 = G__6560;
count__6501_6520 = G__6561;
i__6502_6521 = G__6562;
continue;
}
} else
{var vec__6512_6563 = cljs.core.first.call(null,seq__6493_6557__$1);var orig_type_6564 = cljs.core.nth.call(null,vec__6512_6563,(0),null);var f_6565 = cljs.core.nth.call(null,vec__6512_6563,(1),null);var seq__6494_6566 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6564,new cljs.core.PersistentArrayMap.fromArray([orig_type_6564,cljs.core.identity], true, false)));var chunk__6496_6567 = null;var count__6497_6568 = (0);var i__6498_6569 = (0);while(true){
if((i__6498_6569 < count__6497_6568))
{var vec__6513_6570 = cljs.core._nth.call(null,chunk__6496_6567,i__6498_6569);var actual_type_6571 = cljs.core.nth.call(null,vec__6513_6570,(0),null);var factory_6572 = cljs.core.nth.call(null,vec__6513_6570,(1),null);var canonical_f_6573 = (cljs.core.truth_(selector_6517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6516,selector_6517):cljs.core.identity).call(null,factory_6572.call(null,f_6565));dommy.core.update_event_listeners_BANG_.call(null,elem_6516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6517,actual_type_6571,f_6565], null),canonical_f_6573);
if(cljs.core.truth_(elem_6516.addEventListener))
{elem_6516.addEventListener(cljs.core.name.call(null,actual_type_6571),canonical_f_6573);
} else
{elem_6516.attachEvent(cljs.core.name.call(null,actual_type_6571),canonical_f_6573);
}
{
var G__6574 = seq__6494_6566;
var G__6575 = chunk__6496_6567;
var G__6576 = count__6497_6568;
var G__6577 = (i__6498_6569 + (1));
seq__6494_6566 = G__6574;
chunk__6496_6567 = G__6575;
count__6497_6568 = G__6576;
i__6498_6569 = G__6577;
continue;
}
} else
{var temp__4126__auto___6578__$1 = cljs.core.seq.call(null,seq__6494_6566);if(temp__4126__auto___6578__$1)
{var seq__6494_6579__$1 = temp__4126__auto___6578__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6494_6579__$1))
{var c__4195__auto___6580 = cljs.core.chunk_first.call(null,seq__6494_6579__$1);{
var G__6581 = cljs.core.chunk_rest.call(null,seq__6494_6579__$1);
var G__6582 = c__4195__auto___6580;
var G__6583 = cljs.core.count.call(null,c__4195__auto___6580);
var G__6584 = (0);
seq__6494_6566 = G__6581;
chunk__6496_6567 = G__6582;
count__6497_6568 = G__6583;
i__6498_6569 = G__6584;
continue;
}
} else
{var vec__6514_6585 = cljs.core.first.call(null,seq__6494_6579__$1);var actual_type_6586 = cljs.core.nth.call(null,vec__6514_6585,(0),null);var factory_6587 = cljs.core.nth.call(null,vec__6514_6585,(1),null);var canonical_f_6588 = (cljs.core.truth_(selector_6517)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6516,selector_6517):cljs.core.identity).call(null,factory_6587.call(null,f_6565));dommy.core.update_event_listeners_BANG_.call(null,elem_6516,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6517,actual_type_6586,f_6565], null),canonical_f_6588);
if(cljs.core.truth_(elem_6516.addEventListener))
{elem_6516.addEventListener(cljs.core.name.call(null,actual_type_6586),canonical_f_6588);
} else
{elem_6516.attachEvent(cljs.core.name.call(null,actual_type_6586),canonical_f_6588);
}
{
var G__6589 = cljs.core.next.call(null,seq__6494_6579__$1);
var G__6590 = null;
var G__6591 = (0);
var G__6592 = (0);
seq__6494_6566 = G__6589;
chunk__6496_6567 = G__6590;
count__6497_6568 = G__6591;
i__6498_6569 = G__6592;
continue;
}
}
} else
{}
}
break;
}
{
var G__6593 = cljs.core.next.call(null,seq__6493_6557__$1);
var G__6594 = null;
var G__6595 = (0);
var G__6596 = (0);
seq__6493_6518 = G__6593;
chunk__6500_6519 = G__6594;
count__6501_6520 = G__6595;
i__6502_6521 = G__6596;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__6597){
var elem_sel = cljs.core.first(arglist__6597);
var type_fs = cljs.core.rest(arglist__6597);
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
var vec__6621_6644 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6645 = cljs.core.nth.call(null,vec__6621_6644,(0),null);var selector_6646 = cljs.core.nth.call(null,vec__6621_6644,(1),null);var seq__6622_6647 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6629_6648 = null;var count__6630_6649 = (0);var i__6631_6650 = (0);while(true){
if((i__6631_6650 < count__6630_6649))
{var vec__6638_6651 = cljs.core._nth.call(null,chunk__6629_6648,i__6631_6650);var orig_type_6652 = cljs.core.nth.call(null,vec__6638_6651,(0),null);var f_6653 = cljs.core.nth.call(null,vec__6638_6651,(1),null);var seq__6632_6654 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6652,new cljs.core.PersistentArrayMap.fromArray([orig_type_6652,cljs.core.identity], true, false)));var chunk__6634_6655 = null;var count__6635_6656 = (0);var i__6636_6657 = (0);while(true){
if((i__6636_6657 < count__6635_6656))
{var vec__6639_6658 = cljs.core._nth.call(null,chunk__6634_6655,i__6636_6657);var actual_type_6659 = cljs.core.nth.call(null,vec__6639_6658,(0),null);var __6660 = cljs.core.nth.call(null,vec__6639_6658,(1),null);var keys_6661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6646,actual_type_6659,f_6653], null);var canonical_f_6662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6645),keys_6661);dommy.core.update_event_listeners_BANG_.call(null,elem_6645,dommy.utils.dissoc_in,keys_6661);
if(cljs.core.truth_(elem_6645.removeEventListener))
{elem_6645.removeEventListener(cljs.core.name.call(null,actual_type_6659),canonical_f_6662);
} else
{elem_6645.detachEvent(cljs.core.name.call(null,actual_type_6659),canonical_f_6662);
}
{
var G__6663 = seq__6632_6654;
var G__6664 = chunk__6634_6655;
var G__6665 = count__6635_6656;
var G__6666 = (i__6636_6657 + (1));
seq__6632_6654 = G__6663;
chunk__6634_6655 = G__6664;
count__6635_6656 = G__6665;
i__6636_6657 = G__6666;
continue;
}
} else
{var temp__4126__auto___6667 = cljs.core.seq.call(null,seq__6632_6654);if(temp__4126__auto___6667)
{var seq__6632_6668__$1 = temp__4126__auto___6667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6632_6668__$1))
{var c__4195__auto___6669 = cljs.core.chunk_first.call(null,seq__6632_6668__$1);{
var G__6670 = cljs.core.chunk_rest.call(null,seq__6632_6668__$1);
var G__6671 = c__4195__auto___6669;
var G__6672 = cljs.core.count.call(null,c__4195__auto___6669);
var G__6673 = (0);
seq__6632_6654 = G__6670;
chunk__6634_6655 = G__6671;
count__6635_6656 = G__6672;
i__6636_6657 = G__6673;
continue;
}
} else
{var vec__6640_6674 = cljs.core.first.call(null,seq__6632_6668__$1);var actual_type_6675 = cljs.core.nth.call(null,vec__6640_6674,(0),null);var __6676 = cljs.core.nth.call(null,vec__6640_6674,(1),null);var keys_6677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6646,actual_type_6675,f_6653], null);var canonical_f_6678 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6645),keys_6677);dommy.core.update_event_listeners_BANG_.call(null,elem_6645,dommy.utils.dissoc_in,keys_6677);
if(cljs.core.truth_(elem_6645.removeEventListener))
{elem_6645.removeEventListener(cljs.core.name.call(null,actual_type_6675),canonical_f_6678);
} else
{elem_6645.detachEvent(cljs.core.name.call(null,actual_type_6675),canonical_f_6678);
}
{
var G__6679 = cljs.core.next.call(null,seq__6632_6668__$1);
var G__6680 = null;
var G__6681 = (0);
var G__6682 = (0);
seq__6632_6654 = G__6679;
chunk__6634_6655 = G__6680;
count__6635_6656 = G__6681;
i__6636_6657 = G__6682;
continue;
}
}
} else
{}
}
break;
}
{
var G__6683 = seq__6622_6647;
var G__6684 = chunk__6629_6648;
var G__6685 = count__6630_6649;
var G__6686 = (i__6631_6650 + (1));
seq__6622_6647 = G__6683;
chunk__6629_6648 = G__6684;
count__6630_6649 = G__6685;
i__6631_6650 = G__6686;
continue;
}
} else
{var temp__4126__auto___6687 = cljs.core.seq.call(null,seq__6622_6647);if(temp__4126__auto___6687)
{var seq__6622_6688__$1 = temp__4126__auto___6687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6622_6688__$1))
{var c__4195__auto___6689 = cljs.core.chunk_first.call(null,seq__6622_6688__$1);{
var G__6690 = cljs.core.chunk_rest.call(null,seq__6622_6688__$1);
var G__6691 = c__4195__auto___6689;
var G__6692 = cljs.core.count.call(null,c__4195__auto___6689);
var G__6693 = (0);
seq__6622_6647 = G__6690;
chunk__6629_6648 = G__6691;
count__6630_6649 = G__6692;
i__6631_6650 = G__6693;
continue;
}
} else
{var vec__6641_6694 = cljs.core.first.call(null,seq__6622_6688__$1);var orig_type_6695 = cljs.core.nth.call(null,vec__6641_6694,(0),null);var f_6696 = cljs.core.nth.call(null,vec__6641_6694,(1),null);var seq__6623_6697 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6695,new cljs.core.PersistentArrayMap.fromArray([orig_type_6695,cljs.core.identity], true, false)));var chunk__6625_6698 = null;var count__6626_6699 = (0);var i__6627_6700 = (0);while(true){
if((i__6627_6700 < count__6626_6699))
{var vec__6642_6701 = cljs.core._nth.call(null,chunk__6625_6698,i__6627_6700);var actual_type_6702 = cljs.core.nth.call(null,vec__6642_6701,(0),null);var __6703 = cljs.core.nth.call(null,vec__6642_6701,(1),null);var keys_6704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6646,actual_type_6702,f_6696], null);var canonical_f_6705 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6645),keys_6704);dommy.core.update_event_listeners_BANG_.call(null,elem_6645,dommy.utils.dissoc_in,keys_6704);
if(cljs.core.truth_(elem_6645.removeEventListener))
{elem_6645.removeEventListener(cljs.core.name.call(null,actual_type_6702),canonical_f_6705);
} else
{elem_6645.detachEvent(cljs.core.name.call(null,actual_type_6702),canonical_f_6705);
}
{
var G__6706 = seq__6623_6697;
var G__6707 = chunk__6625_6698;
var G__6708 = count__6626_6699;
var G__6709 = (i__6627_6700 + (1));
seq__6623_6697 = G__6706;
chunk__6625_6698 = G__6707;
count__6626_6699 = G__6708;
i__6627_6700 = G__6709;
continue;
}
} else
{var temp__4126__auto___6710__$1 = cljs.core.seq.call(null,seq__6623_6697);if(temp__4126__auto___6710__$1)
{var seq__6623_6711__$1 = temp__4126__auto___6710__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6623_6711__$1))
{var c__4195__auto___6712 = cljs.core.chunk_first.call(null,seq__6623_6711__$1);{
var G__6713 = cljs.core.chunk_rest.call(null,seq__6623_6711__$1);
var G__6714 = c__4195__auto___6712;
var G__6715 = cljs.core.count.call(null,c__4195__auto___6712);
var G__6716 = (0);
seq__6623_6697 = G__6713;
chunk__6625_6698 = G__6714;
count__6626_6699 = G__6715;
i__6627_6700 = G__6716;
continue;
}
} else
{var vec__6643_6717 = cljs.core.first.call(null,seq__6623_6711__$1);var actual_type_6718 = cljs.core.nth.call(null,vec__6643_6717,(0),null);var __6719 = cljs.core.nth.call(null,vec__6643_6717,(1),null);var keys_6720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6646,actual_type_6718,f_6696], null);var canonical_f_6721 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6645),keys_6720);dommy.core.update_event_listeners_BANG_.call(null,elem_6645,dommy.utils.dissoc_in,keys_6720);
if(cljs.core.truth_(elem_6645.removeEventListener))
{elem_6645.removeEventListener(cljs.core.name.call(null,actual_type_6718),canonical_f_6721);
} else
{elem_6645.detachEvent(cljs.core.name.call(null,actual_type_6718),canonical_f_6721);
}
{
var G__6722 = cljs.core.next.call(null,seq__6623_6711__$1);
var G__6723 = null;
var G__6724 = (0);
var G__6725 = (0);
seq__6623_6697 = G__6722;
chunk__6625_6698 = G__6723;
count__6626_6699 = G__6724;
i__6627_6700 = G__6725;
continue;
}
}
} else
{}
}
break;
}
{
var G__6726 = cljs.core.next.call(null,seq__6622_6688__$1);
var G__6727 = null;
var G__6728 = (0);
var G__6729 = (0);
seq__6622_6647 = G__6726;
chunk__6629_6648 = G__6727;
count__6630_6649 = G__6728;
i__6631_6650 = G__6729;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6730){
var elem_sel = cljs.core.first(arglist__6730);
var type_fs = cljs.core.rest(arglist__6730);
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
var vec__6738_6745 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6746 = cljs.core.nth.call(null,vec__6738_6745,(0),null);var selector_6747 = cljs.core.nth.call(null,vec__6738_6745,(1),null);var seq__6739_6748 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6740_6749 = null;var count__6741_6750 = (0);var i__6742_6751 = (0);while(true){
if((i__6742_6751 < count__6741_6750))
{var vec__6743_6752 = cljs.core._nth.call(null,chunk__6740_6749,i__6742_6751);var type_6753 = cljs.core.nth.call(null,vec__6743_6752,(0),null);var f_6754 = cljs.core.nth.call(null,vec__6743_6752,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6753,((function (seq__6739_6748,chunk__6740_6749,count__6741_6750,i__6742_6751,vec__6743_6752,type_6753,f_6754,vec__6738_6745,elem_6746,selector_6747){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6753,this_fn);
return f_6754.call(null,e);
});})(seq__6739_6748,chunk__6740_6749,count__6741_6750,i__6742_6751,vec__6743_6752,type_6753,f_6754,vec__6738_6745,elem_6746,selector_6747))
);
{
var G__6755 = seq__6739_6748;
var G__6756 = chunk__6740_6749;
var G__6757 = count__6741_6750;
var G__6758 = (i__6742_6751 + (1));
seq__6739_6748 = G__6755;
chunk__6740_6749 = G__6756;
count__6741_6750 = G__6757;
i__6742_6751 = G__6758;
continue;
}
} else
{var temp__4126__auto___6759 = cljs.core.seq.call(null,seq__6739_6748);if(temp__4126__auto___6759)
{var seq__6739_6760__$1 = temp__4126__auto___6759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6739_6760__$1))
{var c__4195__auto___6761 = cljs.core.chunk_first.call(null,seq__6739_6760__$1);{
var G__6762 = cljs.core.chunk_rest.call(null,seq__6739_6760__$1);
var G__6763 = c__4195__auto___6761;
var G__6764 = cljs.core.count.call(null,c__4195__auto___6761);
var G__6765 = (0);
seq__6739_6748 = G__6762;
chunk__6740_6749 = G__6763;
count__6741_6750 = G__6764;
i__6742_6751 = G__6765;
continue;
}
} else
{var vec__6744_6766 = cljs.core.first.call(null,seq__6739_6760__$1);var type_6767 = cljs.core.nth.call(null,vec__6744_6766,(0),null);var f_6768 = cljs.core.nth.call(null,vec__6744_6766,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6767,((function (seq__6739_6748,chunk__6740_6749,count__6741_6750,i__6742_6751,vec__6744_6766,type_6767,f_6768,seq__6739_6760__$1,temp__4126__auto___6759,vec__6738_6745,elem_6746,selector_6747){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6767,this_fn);
return f_6768.call(null,e);
});})(seq__6739_6748,chunk__6740_6749,count__6741_6750,i__6742_6751,vec__6744_6766,type_6767,f_6768,seq__6739_6760__$1,temp__4126__auto___6759,vec__6738_6745,elem_6746,selector_6747))
);
{
var G__6769 = cljs.core.next.call(null,seq__6739_6760__$1);
var G__6770 = null;
var G__6771 = (0);
var G__6772 = (0);
seq__6739_6748 = G__6769;
chunk__6740_6749 = G__6770;
count__6741_6750 = G__6771;
i__6742_6751 = G__6772;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6773){
var elem_sel = cljs.core.first(arglist__6773);
var type_fs = cljs.core.rest(arglist__6773);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map