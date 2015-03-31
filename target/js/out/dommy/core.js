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
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
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
{return elem.getAttribute(dommy.utils.as_str(k));
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
var style__1 = (function (elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
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
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);if(cljs.core.seq(pixels))
{var G__11878 = pixels;return parseInt(G__11878);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$(elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index(class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
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
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.constant$keyword$260) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$261,r.top,cljs.core.constant$keyword$262,r.bottom,cljs.core.constant$keyword$263,r.left,cljs.core.constant$keyword$264,r.right,cljs.core.constant$keyword$265,r.width,cljs.core.constant$keyword$266,r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));return ((function (matches){
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
var closest__2 = (function (elem,selector){return closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11881_SHARP_){return !((p1__11881_SHARP_ === base));
}),dommy.core.ancestors(elem))));
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
var set_style_BANG___delegate = function (elem,kvs){var style = elem.style;var seq__11891_11897 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__11892_11898 = null;var count__11893_11899 = (0);var i__11894_11900 = (0);while(true){
if((i__11894_11900 < count__11893_11899))
{var vec__11895_11901 = chunk__11892_11898.cljs$core$IIndexed$_nth$arity$2(null,i__11894_11900);var k_11902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895_11901,(0),null);var v_11903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895_11901,(1),null);style.setProperty(dommy.utils.as_str(k_11902),v_11903);
{
var G__11904 = seq__11891_11897;
var G__11905 = chunk__11892_11898;
var G__11906 = count__11893_11899;
var G__11907 = (i__11894_11900 + (1));
seq__11891_11897 = G__11904;
chunk__11892_11898 = G__11905;
count__11893_11899 = G__11906;
i__11894_11900 = G__11907;
continue;
}
} else
{var temp__4126__auto___11908 = cljs.core.seq(seq__11891_11897);if(temp__4126__auto___11908)
{var seq__11891_11909__$1 = temp__4126__auto___11908;if(cljs.core.chunked_seq_QMARK_(seq__11891_11909__$1))
{var c__4195__auto___11910 = cljs.core.chunk_first(seq__11891_11909__$1);{
var G__11911 = cljs.core.chunk_rest(seq__11891_11909__$1);
var G__11912 = c__4195__auto___11910;
var G__11913 = cljs.core.count(c__4195__auto___11910);
var G__11914 = (0);
seq__11891_11897 = G__11911;
chunk__11892_11898 = G__11912;
count__11893_11899 = G__11913;
i__11894_11900 = G__11914;
continue;
}
} else
{var vec__11896_11915 = cljs.core.first(seq__11891_11909__$1);var k_11916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896_11915,(0),null);var v_11917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896_11915,(1),null);style.setProperty(dommy.utils.as_str(k_11916),v_11917);
{
var G__11918 = cljs.core.next(seq__11891_11909__$1);
var G__11919 = null;
var G__11920 = (0);
var G__11921 = (0);
seq__11891_11897 = G__11918;
chunk__11892_11898 = G__11919;
count__11893_11899 = G__11920;
i__11894_11900 = G__11921;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11922){
var elem = cljs.core.first(arglist__11922);
var kvs = cljs.core.rest(arglist__11922);
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
var set_px_BANG___delegate = function (elem,kvs){var seq__11929_11935 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__11930_11936 = null;var count__11931_11937 = (0);var i__11932_11938 = (0);while(true){
if((i__11932_11938 < count__11931_11937))
{var vec__11933_11939 = chunk__11930_11936.cljs$core$IIndexed$_nth$arity$2(null,i__11932_11938);var k_11940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933_11939,(0),null);var v_11941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933_11939,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_11940,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11941)+"px")], 0));
{
var G__11942 = seq__11929_11935;
var G__11943 = chunk__11930_11936;
var G__11944 = count__11931_11937;
var G__11945 = (i__11932_11938 + (1));
seq__11929_11935 = G__11942;
chunk__11930_11936 = G__11943;
count__11931_11937 = G__11944;
i__11932_11938 = G__11945;
continue;
}
} else
{var temp__4126__auto___11946 = cljs.core.seq(seq__11929_11935);if(temp__4126__auto___11946)
{var seq__11929_11947__$1 = temp__4126__auto___11946;if(cljs.core.chunked_seq_QMARK_(seq__11929_11947__$1))
{var c__4195__auto___11948 = cljs.core.chunk_first(seq__11929_11947__$1);{
var G__11949 = cljs.core.chunk_rest(seq__11929_11947__$1);
var G__11950 = c__4195__auto___11948;
var G__11951 = cljs.core.count(c__4195__auto___11948);
var G__11952 = (0);
seq__11929_11935 = G__11949;
chunk__11930_11936 = G__11950;
count__11931_11937 = G__11951;
i__11932_11938 = G__11952;
continue;
}
} else
{var vec__11934_11953 = cljs.core.first(seq__11929_11947__$1);var k_11954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934_11953,(0),null);var v_11955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934_11953,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_11954,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11955)+"px")], 0));
{
var G__11956 = cljs.core.next(seq__11929_11947__$1);
var G__11957 = null;
var G__11958 = (0);
var G__11959 = (0);
seq__11929_11935 = G__11956;
chunk__11930_11936 = G__11957;
count__11931_11937 = G__11958;
i__11932_11938 = G__11959;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__11960){
var elem = cljs.core.first(arglist__11960);
var kvs = cljs.core.rest(arglist__11960);
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str(k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__11978 = elem;(G__11978[k__$1] = v);
return G__11978;
} else
{var G__11979 = elem;G__11979.setAttribute(k__$1,v);
return G__11979;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__11986__delegate = function (elem,k,v,kvs){var seq__11980_11987 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));var chunk__11981_11988 = null;var count__11982_11989 = (0);var i__11983_11990 = (0);while(true){
if((i__11983_11990 < count__11982_11989))
{var vec__11984_11991 = chunk__11981_11988.cljs$core$IIndexed$_nth$arity$2(null,i__11983_11990);var k_11992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_11991,(0),null);var v_11993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_11991,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_11992__$1,v_11993__$1);
{
var G__11994 = seq__11980_11987;
var G__11995 = chunk__11981_11988;
var G__11996 = count__11982_11989;
var G__11997 = (i__11983_11990 + (1));
seq__11980_11987 = G__11994;
chunk__11981_11988 = G__11995;
count__11982_11989 = G__11996;
i__11983_11990 = G__11997;
continue;
}
} else
{var temp__4126__auto___11998 = cljs.core.seq(seq__11980_11987);if(temp__4126__auto___11998)
{var seq__11980_11999__$1 = temp__4126__auto___11998;if(cljs.core.chunked_seq_QMARK_(seq__11980_11999__$1))
{var c__4195__auto___12000 = cljs.core.chunk_first(seq__11980_11999__$1);{
var G__12001 = cljs.core.chunk_rest(seq__11980_11999__$1);
var G__12002 = c__4195__auto___12000;
var G__12003 = cljs.core.count(c__4195__auto___12000);
var G__12004 = (0);
seq__11980_11987 = G__12001;
chunk__11981_11988 = G__12002;
count__11982_11989 = G__12003;
i__11983_11990 = G__12004;
continue;
}
} else
{var vec__11985_12005 = cljs.core.first(seq__11980_11999__$1);var k_12006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985_12005,(0),null);var v_12007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985_12005,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12006__$1,v_12007__$1);
{
var G__12008 = cljs.core.next(seq__11980_11999__$1);
var G__12009 = null;
var G__12010 = (0);
var G__12011 = (0);
seq__11980_11987 = G__12008;
chunk__11981_11988 = G__12009;
count__11982_11989 = G__12010;
i__11983_11990 = G__12011;
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
var G__11986 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11986__delegate.call(this,elem,k,v,kvs);};
G__11986.cljs$lang$maxFixedArity = 3;
G__11986.cljs$lang$applyTo = (function (arglist__12012){
var elem = cljs.core.first(arglist__12012);
arglist__12012 = cljs.core.next(arglist__12012);
var k = cljs.core.first(arglist__12012);
arglist__12012 = cljs.core.next(arglist__12012);
var v = cljs.core.first(arglist__12012);
var kvs = cljs.core.rest(arglist__12012);
return G__11986__delegate(elem,k,v,kvs);
});
G__11986.cljs$core$IFn$_invoke$arity$variadic = G__11986__delegate;
return G__11986;
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
var remove_attr_BANG___2 = (function (elem,k){var k_12025__$1 = dommy.utils.as_str(k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12025__$1)))
{dommy.core.set_class_BANG_(elem,"");
} else
{elem.removeAttribute(k_12025__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__12026__delegate = function (elem,k,ks){var seq__12021_12027 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__12022_12028 = null;var count__12023_12029 = (0);var i__12024_12030 = (0);while(true){
if((i__12024_12030 < count__12023_12029))
{var k_12031__$1 = chunk__12022_12028.cljs$core$IIndexed$_nth$arity$2(null,i__12024_12030);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12031__$1);
{
var G__12032 = seq__12021_12027;
var G__12033 = chunk__12022_12028;
var G__12034 = count__12023_12029;
var G__12035 = (i__12024_12030 + (1));
seq__12021_12027 = G__12032;
chunk__12022_12028 = G__12033;
count__12023_12029 = G__12034;
i__12024_12030 = G__12035;
continue;
}
} else
{var temp__4126__auto___12036 = cljs.core.seq(seq__12021_12027);if(temp__4126__auto___12036)
{var seq__12021_12037__$1 = temp__4126__auto___12036;if(cljs.core.chunked_seq_QMARK_(seq__12021_12037__$1))
{var c__4195__auto___12038 = cljs.core.chunk_first(seq__12021_12037__$1);{
var G__12039 = cljs.core.chunk_rest(seq__12021_12037__$1);
var G__12040 = c__4195__auto___12038;
var G__12041 = cljs.core.count(c__4195__auto___12038);
var G__12042 = (0);
seq__12021_12027 = G__12039;
chunk__12022_12028 = G__12040;
count__12023_12029 = G__12041;
i__12024_12030 = G__12042;
continue;
}
} else
{var k_12043__$1 = cljs.core.first(seq__12021_12037__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12043__$1);
{
var G__12044 = cljs.core.next(seq__12021_12037__$1);
var G__12045 = null;
var G__12046 = (0);
var G__12047 = (0);
seq__12021_12027 = G__12044;
chunk__12022_12028 = G__12045;
count__12023_12029 = G__12046;
i__12024_12030 = G__12047;
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
var G__12026 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12026__delegate.call(this,elem,k,ks);};
G__12026.cljs$lang$maxFixedArity = 2;
G__12026.cljs$lang$applyTo = (function (arglist__12048){
var elem = cljs.core.first(arglist__12048);
arglist__12048 = cljs.core.next(arglist__12048);
var k = cljs.core.first(arglist__12048);
var ks = cljs.core.rest(arglist__12048);
return G__12026__delegate(elem,k,ks);
});
G__12026.cljs$core$IFn$_invoke$arity$variadic = G__12026__delegate;
return G__12026;
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
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else
{return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
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
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);if(cljs.core.seq(classes__$1))
{var temp__4124__auto___12080 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12080))
{var class_list_12081 = temp__4124__auto___12080;var seq__12068_12082 = cljs.core.seq(classes__$1);var chunk__12069_12083 = null;var count__12070_12084 = (0);var i__12071_12085 = (0);while(true){
if((i__12071_12085 < count__12070_12084))
{var c_12086 = chunk__12069_12083.cljs$core$IIndexed$_nth$arity$2(null,i__12071_12085);class_list_12081.add(c_12086);
{
var G__12087 = seq__12068_12082;
var G__12088 = chunk__12069_12083;
var G__12089 = count__12070_12084;
var G__12090 = (i__12071_12085 + (1));
seq__12068_12082 = G__12087;
chunk__12069_12083 = G__12088;
count__12070_12084 = G__12089;
i__12071_12085 = G__12090;
continue;
}
} else
{var temp__4126__auto___12091 = cljs.core.seq(seq__12068_12082);if(temp__4126__auto___12091)
{var seq__12068_12092__$1 = temp__4126__auto___12091;if(cljs.core.chunked_seq_QMARK_(seq__12068_12092__$1))
{var c__4195__auto___12093 = cljs.core.chunk_first(seq__12068_12092__$1);{
var G__12094 = cljs.core.chunk_rest(seq__12068_12092__$1);
var G__12095 = c__4195__auto___12093;
var G__12096 = cljs.core.count(c__4195__auto___12093);
var G__12097 = (0);
seq__12068_12082 = G__12094;
chunk__12069_12083 = G__12095;
count__12070_12084 = G__12096;
i__12071_12085 = G__12097;
continue;
}
} else
{var c_12098 = cljs.core.first(seq__12068_12092__$1);class_list_12081.add(c_12098);
{
var G__12099 = cljs.core.next(seq__12068_12092__$1);
var G__12100 = null;
var G__12101 = (0);
var G__12102 = (0);
seq__12068_12082 = G__12099;
chunk__12069_12083 = G__12100;
count__12070_12084 = G__12101;
i__12071_12085 = G__12102;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__12072_12103 = cljs.core.seq(classes__$1);var chunk__12073_12104 = null;var count__12074_12105 = (0);var i__12075_12106 = (0);while(true){
if((i__12075_12106 < count__12074_12105))
{var c_12107 = chunk__12073_12104.cljs$core$IIndexed$_nth$arity$2(null,i__12075_12106);var class_name_12108 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_12108,c_12107)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_12108 === ""))?c_12107:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_12108)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_12107))));
}
{
var G__12109 = seq__12072_12103;
var G__12110 = chunk__12073_12104;
var G__12111 = count__12074_12105;
var G__12112 = (i__12075_12106 + (1));
seq__12072_12103 = G__12109;
chunk__12073_12104 = G__12110;
count__12074_12105 = G__12111;
i__12075_12106 = G__12112;
continue;
}
} else
{var temp__4126__auto___12113 = cljs.core.seq(seq__12072_12103);if(temp__4126__auto___12113)
{var seq__12072_12114__$1 = temp__4126__auto___12113;if(cljs.core.chunked_seq_QMARK_(seq__12072_12114__$1))
{var c__4195__auto___12115 = cljs.core.chunk_first(seq__12072_12114__$1);{
var G__12116 = cljs.core.chunk_rest(seq__12072_12114__$1);
var G__12117 = c__4195__auto___12115;
var G__12118 = cljs.core.count(c__4195__auto___12115);
var G__12119 = (0);
seq__12072_12103 = G__12116;
chunk__12073_12104 = G__12117;
count__12074_12105 = G__12118;
i__12075_12106 = G__12119;
continue;
}
} else
{var c_12120 = cljs.core.first(seq__12072_12114__$1);var class_name_12121 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_12121,c_12120)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_12121 === ""))?c_12120:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_12121)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_12120))));
}
{
var G__12122 = cljs.core.next(seq__12072_12114__$1);
var G__12123 = null;
var G__12124 = (0);
var G__12125 = (0);
seq__12072_12103 = G__12122;
chunk__12073_12104 = G__12123;
count__12074_12105 = G__12124;
i__12075_12106 = G__12125;
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
var G__12126__delegate = function (elem,classes,more_classes){var seq__12076_12127 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__12077_12128 = null;var count__12078_12129 = (0);var i__12079_12130 = (0);while(true){
if((i__12079_12130 < count__12078_12129))
{var c_12131 = chunk__12077_12128.cljs$core$IIndexed$_nth$arity$2(null,i__12079_12130);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12131);
{
var G__12132 = seq__12076_12127;
var G__12133 = chunk__12077_12128;
var G__12134 = count__12078_12129;
var G__12135 = (i__12079_12130 + (1));
seq__12076_12127 = G__12132;
chunk__12077_12128 = G__12133;
count__12078_12129 = G__12134;
i__12079_12130 = G__12135;
continue;
}
} else
{var temp__4126__auto___12136 = cljs.core.seq(seq__12076_12127);if(temp__4126__auto___12136)
{var seq__12076_12137__$1 = temp__4126__auto___12136;if(cljs.core.chunked_seq_QMARK_(seq__12076_12137__$1))
{var c__4195__auto___12138 = cljs.core.chunk_first(seq__12076_12137__$1);{
var G__12139 = cljs.core.chunk_rest(seq__12076_12137__$1);
var G__12140 = c__4195__auto___12138;
var G__12141 = cljs.core.count(c__4195__auto___12138);
var G__12142 = (0);
seq__12076_12127 = G__12139;
chunk__12077_12128 = G__12140;
count__12078_12129 = G__12141;
i__12079_12130 = G__12142;
continue;
}
} else
{var c_12143 = cljs.core.first(seq__12076_12137__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12143);
{
var G__12144 = cljs.core.next(seq__12076_12137__$1);
var G__12145 = null;
var G__12146 = (0);
var G__12147 = (0);
seq__12076_12127 = G__12144;
chunk__12077_12128 = G__12145;
count__12078_12129 = G__12146;
i__12079_12130 = G__12147;
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
var G__12126 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12126__delegate.call(this,elem,classes,more_classes);};
G__12126.cljs$lang$maxFixedArity = 2;
G__12126.cljs$lang$applyTo = (function (arglist__12148){
var elem = cljs.core.first(arglist__12148);
arglist__12148 = cljs.core.next(arglist__12148);
var classes = cljs.core.first(arglist__12148);
var more_classes = cljs.core.rest(arglist__12148);
return G__12126__delegate(elem,classes,more_classes);
});
G__12126.cljs$core$IFn$_invoke$arity$variadic = G__12126__delegate;
return G__12126;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___12161 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12161))
{var class_list_12162 = temp__4124__auto___12161;class_list_12162.remove(c__$1);
} else
{var class_name_12163 = dommy.core.class$(elem);var new_class_name_12164 = dommy.utils.remove_class_str(class_name_12163,c__$1);if((class_name_12163 === new_class_name_12164))
{} else
{dommy.core.set_class_BANG_(elem,new_class_name_12164);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__12165__delegate = function (elem,class$,classes){var seq__12157 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__12158 = null;var count__12159 = (0);var i__12160 = (0);while(true){
if((i__12160 < count__12159))
{var c = chunk__12158.cljs$core$IIndexed$_nth$arity$2(null,i__12160);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__12166 = seq__12157;
var G__12167 = chunk__12158;
var G__12168 = count__12159;
var G__12169 = (i__12160 + (1));
seq__12157 = G__12166;
chunk__12158 = G__12167;
count__12159 = G__12168;
i__12160 = G__12169;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12157);if(temp__4126__auto__)
{var seq__12157__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12157__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12157__$1);{
var G__12170 = cljs.core.chunk_rest(seq__12157__$1);
var G__12171 = c__4195__auto__;
var G__12172 = cljs.core.count(c__4195__auto__);
var G__12173 = (0);
seq__12157 = G__12170;
chunk__12158 = G__12171;
count__12159 = G__12172;
i__12160 = G__12173;
continue;
}
} else
{var c = cljs.core.first(seq__12157__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__12174 = cljs.core.next(seq__12157__$1);
var G__12175 = null;
var G__12176 = (0);
var G__12177 = (0);
seq__12157 = G__12174;
chunk__12158 = G__12175;
count__12159 = G__12176;
i__12160 = G__12177;
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
var G__12165 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12165__delegate.call(this,elem,class$,classes);};
G__12165.cljs$lang$maxFixedArity = 2;
G__12165.cljs$lang$applyTo = (function (arglist__12178){
var elem = cljs.core.first(arglist__12178);
arglist__12178 = cljs.core.next(arglist__12178);
var class$ = cljs.core.first(arglist__12178);
var classes = cljs.core.rest(arglist__12178);
return G__12165__delegate(elem,class$,classes);
});
G__12165.cljs$core$IFn$_invoke$arity$variadic = G__12165__delegate;
return G__12165;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___12182 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12182))
{var class_list_12183 = temp__4124__auto___12182;class_list_12183.toggle(c__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else
{dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
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
var toggle_BANG___1 = (function (elem){return toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.constant$keyword$260,((show_QMARK_)?"":"none")], 0));
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
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str(tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
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
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_(elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__12195 = parent;G__12195.appendChild(child);
return G__12195;
});
var append_BANG___3 = (function() { 
var G__12200__delegate = function (parent,child,more_children){var seq__12196_12201 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__12197_12202 = null;var count__12198_12203 = (0);var i__12199_12204 = (0);while(true){
if((i__12199_12204 < count__12198_12203))
{var c_12205 = chunk__12197_12202.cljs$core$IIndexed$_nth$arity$2(null,i__12199_12204);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12205);
{
var G__12206 = seq__12196_12201;
var G__12207 = chunk__12197_12202;
var G__12208 = count__12198_12203;
var G__12209 = (i__12199_12204 + (1));
seq__12196_12201 = G__12206;
chunk__12197_12202 = G__12207;
count__12198_12203 = G__12208;
i__12199_12204 = G__12209;
continue;
}
} else
{var temp__4126__auto___12210 = cljs.core.seq(seq__12196_12201);if(temp__4126__auto___12210)
{var seq__12196_12211__$1 = temp__4126__auto___12210;if(cljs.core.chunked_seq_QMARK_(seq__12196_12211__$1))
{var c__4195__auto___12212 = cljs.core.chunk_first(seq__12196_12211__$1);{
var G__12213 = cljs.core.chunk_rest(seq__12196_12211__$1);
var G__12214 = c__4195__auto___12212;
var G__12215 = cljs.core.count(c__4195__auto___12212);
var G__12216 = (0);
seq__12196_12201 = G__12213;
chunk__12197_12202 = G__12214;
count__12198_12203 = G__12215;
i__12199_12204 = G__12216;
continue;
}
} else
{var c_12217 = cljs.core.first(seq__12196_12211__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12217);
{
var G__12218 = cljs.core.next(seq__12196_12211__$1);
var G__12219 = null;
var G__12220 = (0);
var G__12221 = (0);
seq__12196_12201 = G__12218;
chunk__12197_12202 = G__12219;
count__12198_12203 = G__12220;
i__12199_12204 = G__12221;
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
var G__12200 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12200__delegate.call(this,parent,child,more_children);};
G__12200.cljs$lang$maxFixedArity = 2;
G__12200.cljs$lang$applyTo = (function (arglist__12222){
var parent = cljs.core.first(arglist__12222);
arglist__12222 = cljs.core.next(arglist__12222);
var child = cljs.core.first(arglist__12222);
var more_children = cljs.core.rest(arglist__12222);
return G__12200__delegate(parent,child,more_children);
});
G__12200.cljs$core$IFn$_invoke$arity$variadic = G__12200__delegate;
return G__12200;
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
var prepend_BANG___2 = (function (parent,child){var G__12232 = parent;G__12232.insertBefore(child,parent.firstChild);
return G__12232;
});
var prepend_BANG___3 = (function() { 
var G__12237__delegate = function (parent,child,more_children){var seq__12233_12238 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__12234_12239 = null;var count__12235_12240 = (0);var i__12236_12241 = (0);while(true){
if((i__12236_12241 < count__12235_12240))
{var c_12242 = chunk__12234_12239.cljs$core$IIndexed$_nth$arity$2(null,i__12236_12241);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12242);
{
var G__12243 = seq__12233_12238;
var G__12244 = chunk__12234_12239;
var G__12245 = count__12235_12240;
var G__12246 = (i__12236_12241 + (1));
seq__12233_12238 = G__12243;
chunk__12234_12239 = G__12244;
count__12235_12240 = G__12245;
i__12236_12241 = G__12246;
continue;
}
} else
{var temp__4126__auto___12247 = cljs.core.seq(seq__12233_12238);if(temp__4126__auto___12247)
{var seq__12233_12248__$1 = temp__4126__auto___12247;if(cljs.core.chunked_seq_QMARK_(seq__12233_12248__$1))
{var c__4195__auto___12249 = cljs.core.chunk_first(seq__12233_12248__$1);{
var G__12250 = cljs.core.chunk_rest(seq__12233_12248__$1);
var G__12251 = c__4195__auto___12249;
var G__12252 = cljs.core.count(c__4195__auto___12249);
var G__12253 = (0);
seq__12233_12238 = G__12250;
chunk__12234_12239 = G__12251;
count__12235_12240 = G__12252;
i__12236_12241 = G__12253;
continue;
}
} else
{var c_12254 = cljs.core.first(seq__12233_12248__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12254);
{
var G__12255 = cljs.core.next(seq__12233_12248__$1);
var G__12256 = null;
var G__12257 = (0);
var G__12258 = (0);
seq__12233_12238 = G__12255;
chunk__12234_12239 = G__12256;
count__12235_12240 = G__12257;
i__12236_12241 = G__12258;
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
var G__12237 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12237__delegate.call(this,parent,child,more_children);};
G__12237.cljs$lang$maxFixedArity = 2;
G__12237.cljs$lang$applyTo = (function (arglist__12259){
var parent = cljs.core.first(arglist__12259);
arglist__12259 = cljs.core.next(arglist__12259);
var child = cljs.core.first(arglist__12259);
var more_children = cljs.core.rest(arglist__12259);
return G__12237__delegate(parent,child,more_children);
});
G__12237.cljs$core$IFn$_invoke$arity$variadic = G__12237__delegate;
return G__12237;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent(other);p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___12260 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___12260))
{var next_12261 = temp__4124__auto___12260;dommy.core.insert_before_BANG_(elem,next_12261);
} else
{dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent(elem);p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent(elem);return remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__12265 = p;G__12265.removeChild(elem);
return G__12265;
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
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12266){var vec__12267 = p__12266;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267,(0),null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__12267,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__12267,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3425__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3425__auto__))
{return or__3425__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3413__auto__ = related_target;if(cljs.core.truth_(and__3413__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3413__auto__;
}
})()))
{return null;
} else
{var G__12268 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12268) : f.call(null,G__12268));
}
});
;})(vec__12267,special_mouse_event,real_mouse_event))
});})(vec__12267,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$267,cljs.core.constant$keyword$269,cljs.core.constant$keyword$268,cljs.core.constant$keyword$270], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);if(cljs.core.truth_((function (){var and__3413__auto__ = selected_target;if(cljs.core.truth_(and__3413__auto__))
{return cljs.core.not(dommy.core.attr(selected_target,cljs.core.constant$keyword$271));
} else
{return and__3413__auto__;
}
})()))
{event.selectedTarget = selected_target;
var G__12270 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12270) : f.call(null,G__12270));
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
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__12271){
var elem = cljs.core.first(arglist__12271);
arglist__12271 = cljs.core.next(arglist__12271);
var f = cljs.core.first(arglist__12271);
var args = cljs.core.rest(arglist__12271);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
var listen_BANG___delegate = function (elem_sel,type_fs){var vec__12299_12326 = dommy.core.elem_and_selector(elem_sel);var elem_12327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12299_12326,(0),null);var selector_12328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12299_12326,(1),null);var seq__12300_12329 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12307_12330 = null;var count__12308_12331 = (0);var i__12309_12332 = (0);while(true){
if((i__12309_12332 < count__12308_12331))
{var vec__12316_12333 = chunk__12307_12330.cljs$core$IIndexed$_nth$arity$2(null,i__12309_12332);var orig_type_12334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12316_12333,(0),null);var f_12335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12316_12333,(1),null);var seq__12310_12336 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12334,new cljs.core.PersistentArrayMap.fromArray([orig_type_12334,cljs.core.identity], true, false)));var chunk__12312_12337 = null;var count__12313_12338 = (0);var i__12314_12339 = (0);while(true){
if((i__12314_12339 < count__12313_12338))
{var vec__12317_12340 = chunk__12312_12337.cljs$core$IIndexed$_nth$arity$2(null,i__12314_12339);var actual_type_12341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317_12340,(0),null);var factory_12342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317_12340,(1),null);var canonical_f_12343 = (cljs.core.truth_(selector_12328)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12327,selector_12328):cljs.core.identity).call(null,(function (){var G__12318 = f_12335;return (factory_12342.cljs$core$IFn$_invoke$arity$1 ? factory_12342.cljs$core$IFn$_invoke$arity$1(G__12318) : factory_12342.call(null,G__12318));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12327,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12328,actual_type_12341,f_12335], null),canonical_f_12343], 0));
if(cljs.core.truth_(elem_12327.addEventListener))
{elem_12327.addEventListener(cljs.core.name(actual_type_12341),canonical_f_12343);
} else
{elem_12327.attachEvent(cljs.core.name(actual_type_12341),canonical_f_12343);
}
{
var G__12344 = seq__12310_12336;
var G__12345 = chunk__12312_12337;
var G__12346 = count__12313_12338;
var G__12347 = (i__12314_12339 + (1));
seq__12310_12336 = G__12344;
chunk__12312_12337 = G__12345;
count__12313_12338 = G__12346;
i__12314_12339 = G__12347;
continue;
}
} else
{var temp__4126__auto___12348 = cljs.core.seq(seq__12310_12336);if(temp__4126__auto___12348)
{var seq__12310_12349__$1 = temp__4126__auto___12348;if(cljs.core.chunked_seq_QMARK_(seq__12310_12349__$1))
{var c__4195__auto___12350 = cljs.core.chunk_first(seq__12310_12349__$1);{
var G__12351 = cljs.core.chunk_rest(seq__12310_12349__$1);
var G__12352 = c__4195__auto___12350;
var G__12353 = cljs.core.count(c__4195__auto___12350);
var G__12354 = (0);
seq__12310_12336 = G__12351;
chunk__12312_12337 = G__12352;
count__12313_12338 = G__12353;
i__12314_12339 = G__12354;
continue;
}
} else
{var vec__12319_12355 = cljs.core.first(seq__12310_12349__$1);var actual_type_12356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_12355,(0),null);var factory_12357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_12355,(1),null);var canonical_f_12358 = (cljs.core.truth_(selector_12328)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12327,selector_12328):cljs.core.identity).call(null,(function (){var G__12320 = f_12335;return (factory_12357.cljs$core$IFn$_invoke$arity$1 ? factory_12357.cljs$core$IFn$_invoke$arity$1(G__12320) : factory_12357.call(null,G__12320));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12327,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12328,actual_type_12356,f_12335], null),canonical_f_12358], 0));
if(cljs.core.truth_(elem_12327.addEventListener))
{elem_12327.addEventListener(cljs.core.name(actual_type_12356),canonical_f_12358);
} else
{elem_12327.attachEvent(cljs.core.name(actual_type_12356),canonical_f_12358);
}
{
var G__12359 = cljs.core.next(seq__12310_12349__$1);
var G__12360 = null;
var G__12361 = (0);
var G__12362 = (0);
seq__12310_12336 = G__12359;
chunk__12312_12337 = G__12360;
count__12313_12338 = G__12361;
i__12314_12339 = G__12362;
continue;
}
}
} else
{}
}
break;
}
{
var G__12363 = seq__12300_12329;
var G__12364 = chunk__12307_12330;
var G__12365 = count__12308_12331;
var G__12366 = (i__12309_12332 + (1));
seq__12300_12329 = G__12363;
chunk__12307_12330 = G__12364;
count__12308_12331 = G__12365;
i__12309_12332 = G__12366;
continue;
}
} else
{var temp__4126__auto___12367 = cljs.core.seq(seq__12300_12329);if(temp__4126__auto___12367)
{var seq__12300_12368__$1 = temp__4126__auto___12367;if(cljs.core.chunked_seq_QMARK_(seq__12300_12368__$1))
{var c__4195__auto___12369 = cljs.core.chunk_first(seq__12300_12368__$1);{
var G__12370 = cljs.core.chunk_rest(seq__12300_12368__$1);
var G__12371 = c__4195__auto___12369;
var G__12372 = cljs.core.count(c__4195__auto___12369);
var G__12373 = (0);
seq__12300_12329 = G__12370;
chunk__12307_12330 = G__12371;
count__12308_12331 = G__12372;
i__12309_12332 = G__12373;
continue;
}
} else
{var vec__12321_12374 = cljs.core.first(seq__12300_12368__$1);var orig_type_12375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321_12374,(0),null);var f_12376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321_12374,(1),null);var seq__12301_12377 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12375,new cljs.core.PersistentArrayMap.fromArray([orig_type_12375,cljs.core.identity], true, false)));var chunk__12303_12378 = null;var count__12304_12379 = (0);var i__12305_12380 = (0);while(true){
if((i__12305_12380 < count__12304_12379))
{var vec__12322_12381 = chunk__12303_12378.cljs$core$IIndexed$_nth$arity$2(null,i__12305_12380);var actual_type_12382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12322_12381,(0),null);var factory_12383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12322_12381,(1),null);var canonical_f_12384 = (cljs.core.truth_(selector_12328)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12327,selector_12328):cljs.core.identity).call(null,(function (){var G__12323 = f_12376;return (factory_12383.cljs$core$IFn$_invoke$arity$1 ? factory_12383.cljs$core$IFn$_invoke$arity$1(G__12323) : factory_12383.call(null,G__12323));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12327,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12328,actual_type_12382,f_12376], null),canonical_f_12384], 0));
if(cljs.core.truth_(elem_12327.addEventListener))
{elem_12327.addEventListener(cljs.core.name(actual_type_12382),canonical_f_12384);
} else
{elem_12327.attachEvent(cljs.core.name(actual_type_12382),canonical_f_12384);
}
{
var G__12385 = seq__12301_12377;
var G__12386 = chunk__12303_12378;
var G__12387 = count__12304_12379;
var G__12388 = (i__12305_12380 + (1));
seq__12301_12377 = G__12385;
chunk__12303_12378 = G__12386;
count__12304_12379 = G__12387;
i__12305_12380 = G__12388;
continue;
}
} else
{var temp__4126__auto___12389__$1 = cljs.core.seq(seq__12301_12377);if(temp__4126__auto___12389__$1)
{var seq__12301_12390__$1 = temp__4126__auto___12389__$1;if(cljs.core.chunked_seq_QMARK_(seq__12301_12390__$1))
{var c__4195__auto___12391 = cljs.core.chunk_first(seq__12301_12390__$1);{
var G__12392 = cljs.core.chunk_rest(seq__12301_12390__$1);
var G__12393 = c__4195__auto___12391;
var G__12394 = cljs.core.count(c__4195__auto___12391);
var G__12395 = (0);
seq__12301_12377 = G__12392;
chunk__12303_12378 = G__12393;
count__12304_12379 = G__12394;
i__12305_12380 = G__12395;
continue;
}
} else
{var vec__12324_12396 = cljs.core.first(seq__12301_12390__$1);var actual_type_12397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324_12396,(0),null);var factory_12398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324_12396,(1),null);var canonical_f_12399 = (cljs.core.truth_(selector_12328)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12327,selector_12328):cljs.core.identity).call(null,(function (){var G__12325 = f_12376;return (factory_12398.cljs$core$IFn$_invoke$arity$1 ? factory_12398.cljs$core$IFn$_invoke$arity$1(G__12325) : factory_12398.call(null,G__12325));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12327,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12328,actual_type_12397,f_12376], null),canonical_f_12399], 0));
if(cljs.core.truth_(elem_12327.addEventListener))
{elem_12327.addEventListener(cljs.core.name(actual_type_12397),canonical_f_12399);
} else
{elem_12327.attachEvent(cljs.core.name(actual_type_12397),canonical_f_12399);
}
{
var G__12400 = cljs.core.next(seq__12301_12390__$1);
var G__12401 = null;
var G__12402 = (0);
var G__12403 = (0);
seq__12301_12377 = G__12400;
chunk__12303_12378 = G__12401;
count__12304_12379 = G__12402;
i__12305_12380 = G__12403;
continue;
}
}
} else
{}
}
break;
}
{
var G__12404 = cljs.core.next(seq__12300_12368__$1);
var G__12405 = null;
var G__12406 = (0);
var G__12407 = (0);
seq__12300_12329 = G__12404;
chunk__12307_12330 = G__12405;
count__12308_12331 = G__12406;
i__12309_12332 = G__12407;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__12408){
var elem_sel = cljs.core.first(arglist__12408);
var type_fs = cljs.core.rest(arglist__12408);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){var vec__12432_12455 = dommy.core.elem_and_selector(elem_sel);var elem_12456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432_12455,(0),null);var selector_12457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432_12455,(1),null);var seq__12433_12458 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12440_12459 = null;var count__12441_12460 = (0);var i__12442_12461 = (0);while(true){
if((i__12442_12461 < count__12441_12460))
{var vec__12449_12462 = chunk__12440_12459.cljs$core$IIndexed$_nth$arity$2(null,i__12442_12461);var orig_type_12463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449_12462,(0),null);var f_12464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449_12462,(1),null);var seq__12443_12465 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12463,new cljs.core.PersistentArrayMap.fromArray([orig_type_12463,cljs.core.identity], true, false)));var chunk__12445_12466 = null;var count__12446_12467 = (0);var i__12447_12468 = (0);while(true){
if((i__12447_12468 < count__12446_12467))
{var vec__12450_12469 = chunk__12445_12466.cljs$core$IIndexed$_nth$arity$2(null,i__12447_12468);var actual_type_12470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12469,(0),null);var __12471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12469,(1),null);var keys_12472 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12457,actual_type_12470,f_12464], null);var canonical_f_12473 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12456),keys_12472);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12456,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12472], 0));
if(cljs.core.truth_(elem_12456.removeEventListener))
{elem_12456.removeEventListener(cljs.core.name(actual_type_12470),canonical_f_12473);
} else
{elem_12456.detachEvent(cljs.core.name(actual_type_12470),canonical_f_12473);
}
{
var G__12474 = seq__12443_12465;
var G__12475 = chunk__12445_12466;
var G__12476 = count__12446_12467;
var G__12477 = (i__12447_12468 + (1));
seq__12443_12465 = G__12474;
chunk__12445_12466 = G__12475;
count__12446_12467 = G__12476;
i__12447_12468 = G__12477;
continue;
}
} else
{var temp__4126__auto___12478 = cljs.core.seq(seq__12443_12465);if(temp__4126__auto___12478)
{var seq__12443_12479__$1 = temp__4126__auto___12478;if(cljs.core.chunked_seq_QMARK_(seq__12443_12479__$1))
{var c__4195__auto___12480 = cljs.core.chunk_first(seq__12443_12479__$1);{
var G__12481 = cljs.core.chunk_rest(seq__12443_12479__$1);
var G__12482 = c__4195__auto___12480;
var G__12483 = cljs.core.count(c__4195__auto___12480);
var G__12484 = (0);
seq__12443_12465 = G__12481;
chunk__12445_12466 = G__12482;
count__12446_12467 = G__12483;
i__12447_12468 = G__12484;
continue;
}
} else
{var vec__12451_12485 = cljs.core.first(seq__12443_12479__$1);var actual_type_12486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451_12485,(0),null);var __12487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451_12485,(1),null);var keys_12488 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12457,actual_type_12486,f_12464], null);var canonical_f_12489 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12456),keys_12488);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12456,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12488], 0));
if(cljs.core.truth_(elem_12456.removeEventListener))
{elem_12456.removeEventListener(cljs.core.name(actual_type_12486),canonical_f_12489);
} else
{elem_12456.detachEvent(cljs.core.name(actual_type_12486),canonical_f_12489);
}
{
var G__12490 = cljs.core.next(seq__12443_12479__$1);
var G__12491 = null;
var G__12492 = (0);
var G__12493 = (0);
seq__12443_12465 = G__12490;
chunk__12445_12466 = G__12491;
count__12446_12467 = G__12492;
i__12447_12468 = G__12493;
continue;
}
}
} else
{}
}
break;
}
{
var G__12494 = seq__12433_12458;
var G__12495 = chunk__12440_12459;
var G__12496 = count__12441_12460;
var G__12497 = (i__12442_12461 + (1));
seq__12433_12458 = G__12494;
chunk__12440_12459 = G__12495;
count__12441_12460 = G__12496;
i__12442_12461 = G__12497;
continue;
}
} else
{var temp__4126__auto___12498 = cljs.core.seq(seq__12433_12458);if(temp__4126__auto___12498)
{var seq__12433_12499__$1 = temp__4126__auto___12498;if(cljs.core.chunked_seq_QMARK_(seq__12433_12499__$1))
{var c__4195__auto___12500 = cljs.core.chunk_first(seq__12433_12499__$1);{
var G__12501 = cljs.core.chunk_rest(seq__12433_12499__$1);
var G__12502 = c__4195__auto___12500;
var G__12503 = cljs.core.count(c__4195__auto___12500);
var G__12504 = (0);
seq__12433_12458 = G__12501;
chunk__12440_12459 = G__12502;
count__12441_12460 = G__12503;
i__12442_12461 = G__12504;
continue;
}
} else
{var vec__12452_12505 = cljs.core.first(seq__12433_12499__$1);var orig_type_12506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452_12505,(0),null);var f_12507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452_12505,(1),null);var seq__12434_12508 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12506,new cljs.core.PersistentArrayMap.fromArray([orig_type_12506,cljs.core.identity], true, false)));var chunk__12436_12509 = null;var count__12437_12510 = (0);var i__12438_12511 = (0);while(true){
if((i__12438_12511 < count__12437_12510))
{var vec__12453_12512 = chunk__12436_12509.cljs$core$IIndexed$_nth$arity$2(null,i__12438_12511);var actual_type_12513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12453_12512,(0),null);var __12514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12453_12512,(1),null);var keys_12515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12457,actual_type_12513,f_12507], null);var canonical_f_12516 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12456),keys_12515);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12456,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12515], 0));
if(cljs.core.truth_(elem_12456.removeEventListener))
{elem_12456.removeEventListener(cljs.core.name(actual_type_12513),canonical_f_12516);
} else
{elem_12456.detachEvent(cljs.core.name(actual_type_12513),canonical_f_12516);
}
{
var G__12517 = seq__12434_12508;
var G__12518 = chunk__12436_12509;
var G__12519 = count__12437_12510;
var G__12520 = (i__12438_12511 + (1));
seq__12434_12508 = G__12517;
chunk__12436_12509 = G__12518;
count__12437_12510 = G__12519;
i__12438_12511 = G__12520;
continue;
}
} else
{var temp__4126__auto___12521__$1 = cljs.core.seq(seq__12434_12508);if(temp__4126__auto___12521__$1)
{var seq__12434_12522__$1 = temp__4126__auto___12521__$1;if(cljs.core.chunked_seq_QMARK_(seq__12434_12522__$1))
{var c__4195__auto___12523 = cljs.core.chunk_first(seq__12434_12522__$1);{
var G__12524 = cljs.core.chunk_rest(seq__12434_12522__$1);
var G__12525 = c__4195__auto___12523;
var G__12526 = cljs.core.count(c__4195__auto___12523);
var G__12527 = (0);
seq__12434_12508 = G__12524;
chunk__12436_12509 = G__12525;
count__12437_12510 = G__12526;
i__12438_12511 = G__12527;
continue;
}
} else
{var vec__12454_12528 = cljs.core.first(seq__12434_12522__$1);var actual_type_12529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454_12528,(0),null);var __12530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454_12528,(1),null);var keys_12531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12457,actual_type_12529,f_12507], null);var canonical_f_12532 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12456),keys_12531);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12456,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12531], 0));
if(cljs.core.truth_(elem_12456.removeEventListener))
{elem_12456.removeEventListener(cljs.core.name(actual_type_12529),canonical_f_12532);
} else
{elem_12456.detachEvent(cljs.core.name(actual_type_12529),canonical_f_12532);
}
{
var G__12533 = cljs.core.next(seq__12434_12522__$1);
var G__12534 = null;
var G__12535 = (0);
var G__12536 = (0);
seq__12434_12508 = G__12533;
chunk__12436_12509 = G__12534;
count__12437_12510 = G__12535;
i__12438_12511 = G__12536;
continue;
}
}
} else
{}
}
break;
}
{
var G__12537 = cljs.core.next(seq__12433_12499__$1);
var G__12538 = null;
var G__12539 = (0);
var G__12540 = (0);
seq__12433_12458 = G__12537;
chunk__12440_12459 = G__12538;
count__12441_12460 = G__12539;
i__12442_12461 = G__12540;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__12541){
var elem_sel = cljs.core.first(arglist__12541);
var type_fs = cljs.core.rest(arglist__12541);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){var vec__12553_12564 = dommy.core.elem_and_selector(elem_sel);var elem_12565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553_12564,(0),null);var selector_12566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553_12564,(1),null);var seq__12554_12567 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12555_12568 = null;var count__12556_12569 = (0);var i__12557_12570 = (0);while(true){
if((i__12557_12570 < count__12556_12569))
{var vec__12558_12571 = chunk__12555_12568.cljs$core$IIndexed$_nth$arity$2(null,i__12557_12570);var type_12572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558_12571,(0),null);var f_12573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558_12571,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12572,((function (seq__12554_12567,chunk__12555_12568,count__12556_12569,i__12557_12570,vec__12558_12571,type_12572,f_12573,vec__12553_12564,elem_12565,selector_12566){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12572,this_fn], 0));
var G__12560 = e;return (f_12573.cljs$core$IFn$_invoke$arity$1 ? f_12573.cljs$core$IFn$_invoke$arity$1(G__12560) : f_12573.call(null,G__12560));
});})(seq__12554_12567,chunk__12555_12568,count__12556_12569,i__12557_12570,vec__12558_12571,type_12572,f_12573,vec__12553_12564,elem_12565,selector_12566))
], 0));
{
var G__12574 = seq__12554_12567;
var G__12575 = chunk__12555_12568;
var G__12576 = count__12556_12569;
var G__12577 = (i__12557_12570 + (1));
seq__12554_12567 = G__12574;
chunk__12555_12568 = G__12575;
count__12556_12569 = G__12576;
i__12557_12570 = G__12577;
continue;
}
} else
{var temp__4126__auto___12578 = cljs.core.seq(seq__12554_12567);if(temp__4126__auto___12578)
{var seq__12554_12579__$1 = temp__4126__auto___12578;if(cljs.core.chunked_seq_QMARK_(seq__12554_12579__$1))
{var c__4195__auto___12580 = cljs.core.chunk_first(seq__12554_12579__$1);{
var G__12581 = cljs.core.chunk_rest(seq__12554_12579__$1);
var G__12582 = c__4195__auto___12580;
var G__12583 = cljs.core.count(c__4195__auto___12580);
var G__12584 = (0);
seq__12554_12567 = G__12581;
chunk__12555_12568 = G__12582;
count__12556_12569 = G__12583;
i__12557_12570 = G__12584;
continue;
}
} else
{var vec__12561_12585 = cljs.core.first(seq__12554_12579__$1);var type_12586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561_12585,(0),null);var f_12587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561_12585,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12586,((function (seq__12554_12567,chunk__12555_12568,count__12556_12569,i__12557_12570,vec__12561_12585,type_12586,f_12587,seq__12554_12579__$1,temp__4126__auto___12578,vec__12553_12564,elem_12565,selector_12566){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12586,this_fn], 0));
var G__12563 = e;return (f_12587.cljs$core$IFn$_invoke$arity$1 ? f_12587.cljs$core$IFn$_invoke$arity$1(G__12563) : f_12587.call(null,G__12563));
});})(seq__12554_12567,chunk__12555_12568,count__12556_12569,i__12557_12570,vec__12561_12585,type_12586,f_12587,seq__12554_12579__$1,temp__4126__auto___12578,vec__12553_12564,elem_12565,selector_12566))
], 0));
{
var G__12588 = cljs.core.next(seq__12554_12579__$1);
var G__12589 = null;
var G__12590 = (0);
var G__12591 = (0);
seq__12554_12567 = G__12588;
chunk__12555_12568 = G__12589;
count__12556_12569 = G__12590;
i__12557_12570 = G__12591;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__12592){
var elem_sel = cljs.core.first(arglist__12592);
var type_fs = cljs.core.rest(arglist__12592);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
