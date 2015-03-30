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
{var G__11876 = pixels;return parseInt(G__11876);
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
var closest__3 = (function (base,elem,selector){return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11879_SHARP_){return !((p1__11879_SHARP_ === base));
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
var set_style_BANG___delegate = function (elem,kvs){var style = elem.style;var seq__11889_11895 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__11890_11896 = null;var count__11891_11897 = (0);var i__11892_11898 = (0);while(true){
if((i__11892_11898 < count__11891_11897))
{var vec__11893_11899 = chunk__11890_11896.cljs$core$IIndexed$_nth$arity$2(null,i__11892_11898);var k_11900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11893_11899,(0),null);var v_11901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11893_11899,(1),null);style.setProperty(dommy.utils.as_str(k_11900),v_11901);
{
var G__11902 = seq__11889_11895;
var G__11903 = chunk__11890_11896;
var G__11904 = count__11891_11897;
var G__11905 = (i__11892_11898 + (1));
seq__11889_11895 = G__11902;
chunk__11890_11896 = G__11903;
count__11891_11897 = G__11904;
i__11892_11898 = G__11905;
continue;
}
} else
{var temp__4126__auto___11906 = cljs.core.seq(seq__11889_11895);if(temp__4126__auto___11906)
{var seq__11889_11907__$1 = temp__4126__auto___11906;if(cljs.core.chunked_seq_QMARK_(seq__11889_11907__$1))
{var c__4195__auto___11908 = cljs.core.chunk_first(seq__11889_11907__$1);{
var G__11909 = cljs.core.chunk_rest(seq__11889_11907__$1);
var G__11910 = c__4195__auto___11908;
var G__11911 = cljs.core.count(c__4195__auto___11908);
var G__11912 = (0);
seq__11889_11895 = G__11909;
chunk__11890_11896 = G__11910;
count__11891_11897 = G__11911;
i__11892_11898 = G__11912;
continue;
}
} else
{var vec__11894_11913 = cljs.core.first(seq__11889_11907__$1);var k_11914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894_11913,(0),null);var v_11915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894_11913,(1),null);style.setProperty(dommy.utils.as_str(k_11914),v_11915);
{
var G__11916 = cljs.core.next(seq__11889_11907__$1);
var G__11917 = null;
var G__11918 = (0);
var G__11919 = (0);
seq__11889_11895 = G__11916;
chunk__11890_11896 = G__11917;
count__11891_11897 = G__11918;
i__11892_11898 = G__11919;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11920){
var elem = cljs.core.first(arglist__11920);
var kvs = cljs.core.rest(arglist__11920);
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
var set_px_BANG___delegate = function (elem,kvs){var seq__11927_11933 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__11928_11934 = null;var count__11929_11935 = (0);var i__11930_11936 = (0);while(true){
if((i__11930_11936 < count__11929_11935))
{var vec__11931_11937 = chunk__11928_11934.cljs$core$IIndexed$_nth$arity$2(null,i__11930_11936);var k_11938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11931_11937,(0),null);var v_11939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11931_11937,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_11938,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11939)+"px")], 0));
{
var G__11940 = seq__11927_11933;
var G__11941 = chunk__11928_11934;
var G__11942 = count__11929_11935;
var G__11943 = (i__11930_11936 + (1));
seq__11927_11933 = G__11940;
chunk__11928_11934 = G__11941;
count__11929_11935 = G__11942;
i__11930_11936 = G__11943;
continue;
}
} else
{var temp__4126__auto___11944 = cljs.core.seq(seq__11927_11933);if(temp__4126__auto___11944)
{var seq__11927_11945__$1 = temp__4126__auto___11944;if(cljs.core.chunked_seq_QMARK_(seq__11927_11945__$1))
{var c__4195__auto___11946 = cljs.core.chunk_first(seq__11927_11945__$1);{
var G__11947 = cljs.core.chunk_rest(seq__11927_11945__$1);
var G__11948 = c__4195__auto___11946;
var G__11949 = cljs.core.count(c__4195__auto___11946);
var G__11950 = (0);
seq__11927_11933 = G__11947;
chunk__11928_11934 = G__11948;
count__11929_11935 = G__11949;
i__11930_11936 = G__11950;
continue;
}
} else
{var vec__11932_11951 = cljs.core.first(seq__11927_11945__$1);var k_11952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932_11951,(0),null);var v_11953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932_11951,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_11952,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_11953)+"px")], 0));
{
var G__11954 = cljs.core.next(seq__11927_11945__$1);
var G__11955 = null;
var G__11956 = (0);
var G__11957 = (0);
seq__11927_11933 = G__11954;
chunk__11928_11934 = G__11955;
count__11929_11935 = G__11956;
i__11930_11936 = G__11957;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__11958){
var elem = cljs.core.first(arglist__11958);
var kvs = cljs.core.rest(arglist__11958);
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
{var G__11976 = elem;(G__11976[k__$1] = v);
return G__11976;
} else
{var G__11977 = elem;G__11977.setAttribute(k__$1,v);
return G__11977;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__11984__delegate = function (elem,k,v,kvs){var seq__11978_11985 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));var chunk__11979_11986 = null;var count__11980_11987 = (0);var i__11981_11988 = (0);while(true){
if((i__11981_11988 < count__11980_11987))
{var vec__11982_11989 = chunk__11979_11986.cljs$core$IIndexed$_nth$arity$2(null,i__11981_11988);var k_11990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11982_11989,(0),null);var v_11991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11982_11989,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_11990__$1,v_11991__$1);
{
var G__11992 = seq__11978_11985;
var G__11993 = chunk__11979_11986;
var G__11994 = count__11980_11987;
var G__11995 = (i__11981_11988 + (1));
seq__11978_11985 = G__11992;
chunk__11979_11986 = G__11993;
count__11980_11987 = G__11994;
i__11981_11988 = G__11995;
continue;
}
} else
{var temp__4126__auto___11996 = cljs.core.seq(seq__11978_11985);if(temp__4126__auto___11996)
{var seq__11978_11997__$1 = temp__4126__auto___11996;if(cljs.core.chunked_seq_QMARK_(seq__11978_11997__$1))
{var c__4195__auto___11998 = cljs.core.chunk_first(seq__11978_11997__$1);{
var G__11999 = cljs.core.chunk_rest(seq__11978_11997__$1);
var G__12000 = c__4195__auto___11998;
var G__12001 = cljs.core.count(c__4195__auto___11998);
var G__12002 = (0);
seq__11978_11985 = G__11999;
chunk__11979_11986 = G__12000;
count__11980_11987 = G__12001;
i__11981_11988 = G__12002;
continue;
}
} else
{var vec__11983_12003 = cljs.core.first(seq__11978_11997__$1);var k_12004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11983_12003,(0),null);var v_12005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11983_12003,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12004__$1,v_12005__$1);
{
var G__12006 = cljs.core.next(seq__11978_11997__$1);
var G__12007 = null;
var G__12008 = (0);
var G__12009 = (0);
seq__11978_11985 = G__12006;
chunk__11979_11986 = G__12007;
count__11980_11987 = G__12008;
i__11981_11988 = G__12009;
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
var G__11984 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11984__delegate.call(this,elem,k,v,kvs);};
G__11984.cljs$lang$maxFixedArity = 3;
G__11984.cljs$lang$applyTo = (function (arglist__12010){
var elem = cljs.core.first(arglist__12010);
arglist__12010 = cljs.core.next(arglist__12010);
var k = cljs.core.first(arglist__12010);
arglist__12010 = cljs.core.next(arglist__12010);
var v = cljs.core.first(arglist__12010);
var kvs = cljs.core.rest(arglist__12010);
return G__11984__delegate(elem,k,v,kvs);
});
G__11984.cljs$core$IFn$_invoke$arity$variadic = G__11984__delegate;
return G__11984;
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
var remove_attr_BANG___2 = (function (elem,k){var k_12023__$1 = dommy.utils.as_str(k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12023__$1)))
{dommy.core.set_class_BANG_(elem,"");
} else
{elem.removeAttribute(k_12023__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__12024__delegate = function (elem,k,ks){var seq__12019_12025 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__12020_12026 = null;var count__12021_12027 = (0);var i__12022_12028 = (0);while(true){
if((i__12022_12028 < count__12021_12027))
{var k_12029__$1 = chunk__12020_12026.cljs$core$IIndexed$_nth$arity$2(null,i__12022_12028);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12029__$1);
{
var G__12030 = seq__12019_12025;
var G__12031 = chunk__12020_12026;
var G__12032 = count__12021_12027;
var G__12033 = (i__12022_12028 + (1));
seq__12019_12025 = G__12030;
chunk__12020_12026 = G__12031;
count__12021_12027 = G__12032;
i__12022_12028 = G__12033;
continue;
}
} else
{var temp__4126__auto___12034 = cljs.core.seq(seq__12019_12025);if(temp__4126__auto___12034)
{var seq__12019_12035__$1 = temp__4126__auto___12034;if(cljs.core.chunked_seq_QMARK_(seq__12019_12035__$1))
{var c__4195__auto___12036 = cljs.core.chunk_first(seq__12019_12035__$1);{
var G__12037 = cljs.core.chunk_rest(seq__12019_12035__$1);
var G__12038 = c__4195__auto___12036;
var G__12039 = cljs.core.count(c__4195__auto___12036);
var G__12040 = (0);
seq__12019_12025 = G__12037;
chunk__12020_12026 = G__12038;
count__12021_12027 = G__12039;
i__12022_12028 = G__12040;
continue;
}
} else
{var k_12041__$1 = cljs.core.first(seq__12019_12035__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12041__$1);
{
var G__12042 = cljs.core.next(seq__12019_12035__$1);
var G__12043 = null;
var G__12044 = (0);
var G__12045 = (0);
seq__12019_12025 = G__12042;
chunk__12020_12026 = G__12043;
count__12021_12027 = G__12044;
i__12022_12028 = G__12045;
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
var G__12024 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12024__delegate.call(this,elem,k,ks);};
G__12024.cljs$lang$maxFixedArity = 2;
G__12024.cljs$lang$applyTo = (function (arglist__12046){
var elem = cljs.core.first(arglist__12046);
arglist__12046 = cljs.core.next(arglist__12046);
var k = cljs.core.first(arglist__12046);
var ks = cljs.core.rest(arglist__12046);
return G__12024__delegate(elem,k,ks);
});
G__12024.cljs$core$IFn$_invoke$arity$variadic = G__12024__delegate;
return G__12024;
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
{var temp__4124__auto___12078 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12078))
{var class_list_12079 = temp__4124__auto___12078;var seq__12066_12080 = cljs.core.seq(classes__$1);var chunk__12067_12081 = null;var count__12068_12082 = (0);var i__12069_12083 = (0);while(true){
if((i__12069_12083 < count__12068_12082))
{var c_12084 = chunk__12067_12081.cljs$core$IIndexed$_nth$arity$2(null,i__12069_12083);class_list_12079.add(c_12084);
{
var G__12085 = seq__12066_12080;
var G__12086 = chunk__12067_12081;
var G__12087 = count__12068_12082;
var G__12088 = (i__12069_12083 + (1));
seq__12066_12080 = G__12085;
chunk__12067_12081 = G__12086;
count__12068_12082 = G__12087;
i__12069_12083 = G__12088;
continue;
}
} else
{var temp__4126__auto___12089 = cljs.core.seq(seq__12066_12080);if(temp__4126__auto___12089)
{var seq__12066_12090__$1 = temp__4126__auto___12089;if(cljs.core.chunked_seq_QMARK_(seq__12066_12090__$1))
{var c__4195__auto___12091 = cljs.core.chunk_first(seq__12066_12090__$1);{
var G__12092 = cljs.core.chunk_rest(seq__12066_12090__$1);
var G__12093 = c__4195__auto___12091;
var G__12094 = cljs.core.count(c__4195__auto___12091);
var G__12095 = (0);
seq__12066_12080 = G__12092;
chunk__12067_12081 = G__12093;
count__12068_12082 = G__12094;
i__12069_12083 = G__12095;
continue;
}
} else
{var c_12096 = cljs.core.first(seq__12066_12090__$1);class_list_12079.add(c_12096);
{
var G__12097 = cljs.core.next(seq__12066_12090__$1);
var G__12098 = null;
var G__12099 = (0);
var G__12100 = (0);
seq__12066_12080 = G__12097;
chunk__12067_12081 = G__12098;
count__12068_12082 = G__12099;
i__12069_12083 = G__12100;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__12070_12101 = cljs.core.seq(classes__$1);var chunk__12071_12102 = null;var count__12072_12103 = (0);var i__12073_12104 = (0);while(true){
if((i__12073_12104 < count__12072_12103))
{var c_12105 = chunk__12071_12102.cljs$core$IIndexed$_nth$arity$2(null,i__12073_12104);var class_name_12106 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_12106,c_12105)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_12106 === ""))?c_12105:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_12106)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_12105))));
}
{
var G__12107 = seq__12070_12101;
var G__12108 = chunk__12071_12102;
var G__12109 = count__12072_12103;
var G__12110 = (i__12073_12104 + (1));
seq__12070_12101 = G__12107;
chunk__12071_12102 = G__12108;
count__12072_12103 = G__12109;
i__12073_12104 = G__12110;
continue;
}
} else
{var temp__4126__auto___12111 = cljs.core.seq(seq__12070_12101);if(temp__4126__auto___12111)
{var seq__12070_12112__$1 = temp__4126__auto___12111;if(cljs.core.chunked_seq_QMARK_(seq__12070_12112__$1))
{var c__4195__auto___12113 = cljs.core.chunk_first(seq__12070_12112__$1);{
var G__12114 = cljs.core.chunk_rest(seq__12070_12112__$1);
var G__12115 = c__4195__auto___12113;
var G__12116 = cljs.core.count(c__4195__auto___12113);
var G__12117 = (0);
seq__12070_12101 = G__12114;
chunk__12071_12102 = G__12115;
count__12072_12103 = G__12116;
i__12073_12104 = G__12117;
continue;
}
} else
{var c_12118 = cljs.core.first(seq__12070_12112__$1);var class_name_12119 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_12119,c_12118)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_12119 === ""))?c_12118:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_12119)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_12118))));
}
{
var G__12120 = cljs.core.next(seq__12070_12112__$1);
var G__12121 = null;
var G__12122 = (0);
var G__12123 = (0);
seq__12070_12101 = G__12120;
chunk__12071_12102 = G__12121;
count__12072_12103 = G__12122;
i__12073_12104 = G__12123;
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
var G__12124__delegate = function (elem,classes,more_classes){var seq__12074_12125 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__12075_12126 = null;var count__12076_12127 = (0);var i__12077_12128 = (0);while(true){
if((i__12077_12128 < count__12076_12127))
{var c_12129 = chunk__12075_12126.cljs$core$IIndexed$_nth$arity$2(null,i__12077_12128);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12129);
{
var G__12130 = seq__12074_12125;
var G__12131 = chunk__12075_12126;
var G__12132 = count__12076_12127;
var G__12133 = (i__12077_12128 + (1));
seq__12074_12125 = G__12130;
chunk__12075_12126 = G__12131;
count__12076_12127 = G__12132;
i__12077_12128 = G__12133;
continue;
}
} else
{var temp__4126__auto___12134 = cljs.core.seq(seq__12074_12125);if(temp__4126__auto___12134)
{var seq__12074_12135__$1 = temp__4126__auto___12134;if(cljs.core.chunked_seq_QMARK_(seq__12074_12135__$1))
{var c__4195__auto___12136 = cljs.core.chunk_first(seq__12074_12135__$1);{
var G__12137 = cljs.core.chunk_rest(seq__12074_12135__$1);
var G__12138 = c__4195__auto___12136;
var G__12139 = cljs.core.count(c__4195__auto___12136);
var G__12140 = (0);
seq__12074_12125 = G__12137;
chunk__12075_12126 = G__12138;
count__12076_12127 = G__12139;
i__12077_12128 = G__12140;
continue;
}
} else
{var c_12141 = cljs.core.first(seq__12074_12135__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12141);
{
var G__12142 = cljs.core.next(seq__12074_12135__$1);
var G__12143 = null;
var G__12144 = (0);
var G__12145 = (0);
seq__12074_12125 = G__12142;
chunk__12075_12126 = G__12143;
count__12076_12127 = G__12144;
i__12077_12128 = G__12145;
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
var G__12124 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12124__delegate.call(this,elem,classes,more_classes);};
G__12124.cljs$lang$maxFixedArity = 2;
G__12124.cljs$lang$applyTo = (function (arglist__12146){
var elem = cljs.core.first(arglist__12146);
arglist__12146 = cljs.core.next(arglist__12146);
var classes = cljs.core.first(arglist__12146);
var more_classes = cljs.core.rest(arglist__12146);
return G__12124__delegate(elem,classes,more_classes);
});
G__12124.cljs$core$IFn$_invoke$arity$variadic = G__12124__delegate;
return G__12124;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___12159 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12159))
{var class_list_12160 = temp__4124__auto___12159;class_list_12160.remove(c__$1);
} else
{var class_name_12161 = dommy.core.class$(elem);var new_class_name_12162 = dommy.utils.remove_class_str(class_name_12161,c__$1);if((class_name_12161 === new_class_name_12162))
{} else
{dommy.core.set_class_BANG_(elem,new_class_name_12162);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__12163__delegate = function (elem,class$,classes){var seq__12155 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__12156 = null;var count__12157 = (0);var i__12158 = (0);while(true){
if((i__12158 < count__12157))
{var c = chunk__12156.cljs$core$IIndexed$_nth$arity$2(null,i__12158);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__12164 = seq__12155;
var G__12165 = chunk__12156;
var G__12166 = count__12157;
var G__12167 = (i__12158 + (1));
seq__12155 = G__12164;
chunk__12156 = G__12165;
count__12157 = G__12166;
i__12158 = G__12167;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__12155);if(temp__4126__auto__)
{var seq__12155__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12155__$1))
{var c__4195__auto__ = cljs.core.chunk_first(seq__12155__$1);{
var G__12168 = cljs.core.chunk_rest(seq__12155__$1);
var G__12169 = c__4195__auto__;
var G__12170 = cljs.core.count(c__4195__auto__);
var G__12171 = (0);
seq__12155 = G__12168;
chunk__12156 = G__12169;
count__12157 = G__12170;
i__12158 = G__12171;
continue;
}
} else
{var c = cljs.core.first(seq__12155__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__12172 = cljs.core.next(seq__12155__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__12155 = G__12172;
chunk__12156 = G__12173;
count__12157 = G__12174;
i__12158 = G__12175;
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
var G__12163 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12163__delegate.call(this,elem,class$,classes);};
G__12163.cljs$lang$maxFixedArity = 2;
G__12163.cljs$lang$applyTo = (function (arglist__12176){
var elem = cljs.core.first(arglist__12176);
arglist__12176 = cljs.core.next(arglist__12176);
var class$ = cljs.core.first(arglist__12176);
var classes = cljs.core.rest(arglist__12176);
return G__12163__delegate(elem,class$,classes);
});
G__12163.cljs$core$IFn$_invoke$arity$variadic = G__12163__delegate;
return G__12163;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___12180 = elem.classList;if(cljs.core.truth_(temp__4124__auto___12180))
{var class_list_12181 = temp__4124__auto___12180;class_list_12181.toggle(c__$1);
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
var append_BANG___2 = (function (parent,child){var G__12193 = parent;G__12193.appendChild(child);
return G__12193;
});
var append_BANG___3 = (function() { 
var G__12198__delegate = function (parent,child,more_children){var seq__12194_12199 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__12195_12200 = null;var count__12196_12201 = (0);var i__12197_12202 = (0);while(true){
if((i__12197_12202 < count__12196_12201))
{var c_12203 = chunk__12195_12200.cljs$core$IIndexed$_nth$arity$2(null,i__12197_12202);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12203);
{
var G__12204 = seq__12194_12199;
var G__12205 = chunk__12195_12200;
var G__12206 = count__12196_12201;
var G__12207 = (i__12197_12202 + (1));
seq__12194_12199 = G__12204;
chunk__12195_12200 = G__12205;
count__12196_12201 = G__12206;
i__12197_12202 = G__12207;
continue;
}
} else
{var temp__4126__auto___12208 = cljs.core.seq(seq__12194_12199);if(temp__4126__auto___12208)
{var seq__12194_12209__$1 = temp__4126__auto___12208;if(cljs.core.chunked_seq_QMARK_(seq__12194_12209__$1))
{var c__4195__auto___12210 = cljs.core.chunk_first(seq__12194_12209__$1);{
var G__12211 = cljs.core.chunk_rest(seq__12194_12209__$1);
var G__12212 = c__4195__auto___12210;
var G__12213 = cljs.core.count(c__4195__auto___12210);
var G__12214 = (0);
seq__12194_12199 = G__12211;
chunk__12195_12200 = G__12212;
count__12196_12201 = G__12213;
i__12197_12202 = G__12214;
continue;
}
} else
{var c_12215 = cljs.core.first(seq__12194_12209__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12215);
{
var G__12216 = cljs.core.next(seq__12194_12209__$1);
var G__12217 = null;
var G__12218 = (0);
var G__12219 = (0);
seq__12194_12199 = G__12216;
chunk__12195_12200 = G__12217;
count__12196_12201 = G__12218;
i__12197_12202 = G__12219;
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
var G__12198 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12198__delegate.call(this,parent,child,more_children);};
G__12198.cljs$lang$maxFixedArity = 2;
G__12198.cljs$lang$applyTo = (function (arglist__12220){
var parent = cljs.core.first(arglist__12220);
arglist__12220 = cljs.core.next(arglist__12220);
var child = cljs.core.first(arglist__12220);
var more_children = cljs.core.rest(arglist__12220);
return G__12198__delegate(parent,child,more_children);
});
G__12198.cljs$core$IFn$_invoke$arity$variadic = G__12198__delegate;
return G__12198;
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
var prepend_BANG___2 = (function (parent,child){var G__12230 = parent;G__12230.insertBefore(child,parent.firstChild);
return G__12230;
});
var prepend_BANG___3 = (function() { 
var G__12235__delegate = function (parent,child,more_children){var seq__12231_12236 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__12232_12237 = null;var count__12233_12238 = (0);var i__12234_12239 = (0);while(true){
if((i__12234_12239 < count__12233_12238))
{var c_12240 = chunk__12232_12237.cljs$core$IIndexed$_nth$arity$2(null,i__12234_12239);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12240);
{
var G__12241 = seq__12231_12236;
var G__12242 = chunk__12232_12237;
var G__12243 = count__12233_12238;
var G__12244 = (i__12234_12239 + (1));
seq__12231_12236 = G__12241;
chunk__12232_12237 = G__12242;
count__12233_12238 = G__12243;
i__12234_12239 = G__12244;
continue;
}
} else
{var temp__4126__auto___12245 = cljs.core.seq(seq__12231_12236);if(temp__4126__auto___12245)
{var seq__12231_12246__$1 = temp__4126__auto___12245;if(cljs.core.chunked_seq_QMARK_(seq__12231_12246__$1))
{var c__4195__auto___12247 = cljs.core.chunk_first(seq__12231_12246__$1);{
var G__12248 = cljs.core.chunk_rest(seq__12231_12246__$1);
var G__12249 = c__4195__auto___12247;
var G__12250 = cljs.core.count(c__4195__auto___12247);
var G__12251 = (0);
seq__12231_12236 = G__12248;
chunk__12232_12237 = G__12249;
count__12233_12238 = G__12250;
i__12234_12239 = G__12251;
continue;
}
} else
{var c_12252 = cljs.core.first(seq__12231_12246__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12252);
{
var G__12253 = cljs.core.next(seq__12231_12246__$1);
var G__12254 = null;
var G__12255 = (0);
var G__12256 = (0);
seq__12231_12236 = G__12253;
chunk__12232_12237 = G__12254;
count__12233_12238 = G__12255;
i__12234_12239 = G__12256;
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
var G__12235 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12235__delegate.call(this,parent,child,more_children);};
G__12235.cljs$lang$maxFixedArity = 2;
G__12235.cljs$lang$applyTo = (function (arglist__12257){
var parent = cljs.core.first(arglist__12257);
arglist__12257 = cljs.core.next(arglist__12257);
var child = cljs.core.first(arglist__12257);
var more_children = cljs.core.rest(arglist__12257);
return G__12235__delegate(parent,child,more_children);
});
G__12235.cljs$core$IFn$_invoke$arity$variadic = G__12235__delegate;
return G__12235;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___12258 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___12258))
{var next_12259 = temp__4124__auto___12258;dommy.core.insert_before_BANG_(elem,next_12259);
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
var remove_BANG___2 = (function (p,elem){var G__12263 = p;G__12263.removeChild(elem);
return G__12263;
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
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12264){var vec__12265 = p__12264;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12265,(0),null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12265,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__12265,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__12265,special_mouse_event,real_mouse_event){
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
{var G__12266 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12266) : f.call(null,G__12266));
}
});
;})(vec__12265,special_mouse_event,real_mouse_event))
});})(vec__12265,special_mouse_event,real_mouse_event))
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
var G__12268 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12268) : f.call(null,G__12268));
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__12269){
var elem = cljs.core.first(arglist__12269);
arglist__12269 = cljs.core.next(arglist__12269);
var f = cljs.core.first(arglist__12269);
var args = cljs.core.rest(arglist__12269);
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
var listen_BANG___delegate = function (elem_sel,type_fs){var vec__12297_12324 = dommy.core.elem_and_selector(elem_sel);var elem_12325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297_12324,(0),null);var selector_12326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297_12324,(1),null);var seq__12298_12327 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12305_12328 = null;var count__12306_12329 = (0);var i__12307_12330 = (0);while(true){
if((i__12307_12330 < count__12306_12329))
{var vec__12314_12331 = chunk__12305_12328.cljs$core$IIndexed$_nth$arity$2(null,i__12307_12330);var orig_type_12332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12314_12331,(0),null);var f_12333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12314_12331,(1),null);var seq__12308_12334 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12332,new cljs.core.PersistentArrayMap.fromArray([orig_type_12332,cljs.core.identity], true, false)));var chunk__12310_12335 = null;var count__12311_12336 = (0);var i__12312_12337 = (0);while(true){
if((i__12312_12337 < count__12311_12336))
{var vec__12315_12338 = chunk__12310_12335.cljs$core$IIndexed$_nth$arity$2(null,i__12312_12337);var actual_type_12339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12315_12338,(0),null);var factory_12340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12315_12338,(1),null);var canonical_f_12341 = (cljs.core.truth_(selector_12326)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12325,selector_12326):cljs.core.identity).call(null,(function (){var G__12316 = f_12333;return (factory_12340.cljs$core$IFn$_invoke$arity$1 ? factory_12340.cljs$core$IFn$_invoke$arity$1(G__12316) : factory_12340.call(null,G__12316));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12325,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12326,actual_type_12339,f_12333], null),canonical_f_12341], 0));
if(cljs.core.truth_(elem_12325.addEventListener))
{elem_12325.addEventListener(cljs.core.name(actual_type_12339),canonical_f_12341);
} else
{elem_12325.attachEvent(cljs.core.name(actual_type_12339),canonical_f_12341);
}
{
var G__12342 = seq__12308_12334;
var G__12343 = chunk__12310_12335;
var G__12344 = count__12311_12336;
var G__12345 = (i__12312_12337 + (1));
seq__12308_12334 = G__12342;
chunk__12310_12335 = G__12343;
count__12311_12336 = G__12344;
i__12312_12337 = G__12345;
continue;
}
} else
{var temp__4126__auto___12346 = cljs.core.seq(seq__12308_12334);if(temp__4126__auto___12346)
{var seq__12308_12347__$1 = temp__4126__auto___12346;if(cljs.core.chunked_seq_QMARK_(seq__12308_12347__$1))
{var c__4195__auto___12348 = cljs.core.chunk_first(seq__12308_12347__$1);{
var G__12349 = cljs.core.chunk_rest(seq__12308_12347__$1);
var G__12350 = c__4195__auto___12348;
var G__12351 = cljs.core.count(c__4195__auto___12348);
var G__12352 = (0);
seq__12308_12334 = G__12349;
chunk__12310_12335 = G__12350;
count__12311_12336 = G__12351;
i__12312_12337 = G__12352;
continue;
}
} else
{var vec__12317_12353 = cljs.core.first(seq__12308_12347__$1);var actual_type_12354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317_12353,(0),null);var factory_12355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317_12353,(1),null);var canonical_f_12356 = (cljs.core.truth_(selector_12326)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12325,selector_12326):cljs.core.identity).call(null,(function (){var G__12318 = f_12333;return (factory_12355.cljs$core$IFn$_invoke$arity$1 ? factory_12355.cljs$core$IFn$_invoke$arity$1(G__12318) : factory_12355.call(null,G__12318));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12325,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12326,actual_type_12354,f_12333], null),canonical_f_12356], 0));
if(cljs.core.truth_(elem_12325.addEventListener))
{elem_12325.addEventListener(cljs.core.name(actual_type_12354),canonical_f_12356);
} else
{elem_12325.attachEvent(cljs.core.name(actual_type_12354),canonical_f_12356);
}
{
var G__12357 = cljs.core.next(seq__12308_12347__$1);
var G__12358 = null;
var G__12359 = (0);
var G__12360 = (0);
seq__12308_12334 = G__12357;
chunk__12310_12335 = G__12358;
count__12311_12336 = G__12359;
i__12312_12337 = G__12360;
continue;
}
}
} else
{}
}
break;
}
{
var G__12361 = seq__12298_12327;
var G__12362 = chunk__12305_12328;
var G__12363 = count__12306_12329;
var G__12364 = (i__12307_12330 + (1));
seq__12298_12327 = G__12361;
chunk__12305_12328 = G__12362;
count__12306_12329 = G__12363;
i__12307_12330 = G__12364;
continue;
}
} else
{var temp__4126__auto___12365 = cljs.core.seq(seq__12298_12327);if(temp__4126__auto___12365)
{var seq__12298_12366__$1 = temp__4126__auto___12365;if(cljs.core.chunked_seq_QMARK_(seq__12298_12366__$1))
{var c__4195__auto___12367 = cljs.core.chunk_first(seq__12298_12366__$1);{
var G__12368 = cljs.core.chunk_rest(seq__12298_12366__$1);
var G__12369 = c__4195__auto___12367;
var G__12370 = cljs.core.count(c__4195__auto___12367);
var G__12371 = (0);
seq__12298_12327 = G__12368;
chunk__12305_12328 = G__12369;
count__12306_12329 = G__12370;
i__12307_12330 = G__12371;
continue;
}
} else
{var vec__12319_12372 = cljs.core.first(seq__12298_12366__$1);var orig_type_12373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_12372,(0),null);var f_12374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12319_12372,(1),null);var seq__12299_12375 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12373,new cljs.core.PersistentArrayMap.fromArray([orig_type_12373,cljs.core.identity], true, false)));var chunk__12301_12376 = null;var count__12302_12377 = (0);var i__12303_12378 = (0);while(true){
if((i__12303_12378 < count__12302_12377))
{var vec__12320_12379 = chunk__12301_12376.cljs$core$IIndexed$_nth$arity$2(null,i__12303_12378);var actual_type_12380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12320_12379,(0),null);var factory_12381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12320_12379,(1),null);var canonical_f_12382 = (cljs.core.truth_(selector_12326)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12325,selector_12326):cljs.core.identity).call(null,(function (){var G__12321 = f_12374;return (factory_12381.cljs$core$IFn$_invoke$arity$1 ? factory_12381.cljs$core$IFn$_invoke$arity$1(G__12321) : factory_12381.call(null,G__12321));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12325,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12326,actual_type_12380,f_12374], null),canonical_f_12382], 0));
if(cljs.core.truth_(elem_12325.addEventListener))
{elem_12325.addEventListener(cljs.core.name(actual_type_12380),canonical_f_12382);
} else
{elem_12325.attachEvent(cljs.core.name(actual_type_12380),canonical_f_12382);
}
{
var G__12383 = seq__12299_12375;
var G__12384 = chunk__12301_12376;
var G__12385 = count__12302_12377;
var G__12386 = (i__12303_12378 + (1));
seq__12299_12375 = G__12383;
chunk__12301_12376 = G__12384;
count__12302_12377 = G__12385;
i__12303_12378 = G__12386;
continue;
}
} else
{var temp__4126__auto___12387__$1 = cljs.core.seq(seq__12299_12375);if(temp__4126__auto___12387__$1)
{var seq__12299_12388__$1 = temp__4126__auto___12387__$1;if(cljs.core.chunked_seq_QMARK_(seq__12299_12388__$1))
{var c__4195__auto___12389 = cljs.core.chunk_first(seq__12299_12388__$1);{
var G__12390 = cljs.core.chunk_rest(seq__12299_12388__$1);
var G__12391 = c__4195__auto___12389;
var G__12392 = cljs.core.count(c__4195__auto___12389);
var G__12393 = (0);
seq__12299_12375 = G__12390;
chunk__12301_12376 = G__12391;
count__12302_12377 = G__12392;
i__12303_12378 = G__12393;
continue;
}
} else
{var vec__12322_12394 = cljs.core.first(seq__12299_12388__$1);var actual_type_12395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12322_12394,(0),null);var factory_12396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12322_12394,(1),null);var canonical_f_12397 = (cljs.core.truth_(selector_12326)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12325,selector_12326):cljs.core.identity).call(null,(function (){var G__12323 = f_12374;return (factory_12396.cljs$core$IFn$_invoke$arity$1 ? factory_12396.cljs$core$IFn$_invoke$arity$1(G__12323) : factory_12396.call(null,G__12323));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12325,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12326,actual_type_12395,f_12374], null),canonical_f_12397], 0));
if(cljs.core.truth_(elem_12325.addEventListener))
{elem_12325.addEventListener(cljs.core.name(actual_type_12395),canonical_f_12397);
} else
{elem_12325.attachEvent(cljs.core.name(actual_type_12395),canonical_f_12397);
}
{
var G__12398 = cljs.core.next(seq__12299_12388__$1);
var G__12399 = null;
var G__12400 = (0);
var G__12401 = (0);
seq__12299_12375 = G__12398;
chunk__12301_12376 = G__12399;
count__12302_12377 = G__12400;
i__12303_12378 = G__12401;
continue;
}
}
} else
{}
}
break;
}
{
var G__12402 = cljs.core.next(seq__12298_12366__$1);
var G__12403 = null;
var G__12404 = (0);
var G__12405 = (0);
seq__12298_12327 = G__12402;
chunk__12305_12328 = G__12403;
count__12306_12329 = G__12404;
i__12307_12330 = G__12405;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__12406){
var elem_sel = cljs.core.first(arglist__12406);
var type_fs = cljs.core.rest(arglist__12406);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){var vec__12430_12453 = dommy.core.elem_and_selector(elem_sel);var elem_12454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430_12453,(0),null);var selector_12455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430_12453,(1),null);var seq__12431_12456 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12438_12457 = null;var count__12439_12458 = (0);var i__12440_12459 = (0);while(true){
if((i__12440_12459 < count__12439_12458))
{var vec__12447_12460 = chunk__12438_12457.cljs$core$IIndexed$_nth$arity$2(null,i__12440_12459);var orig_type_12461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447_12460,(0),null);var f_12462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447_12460,(1),null);var seq__12441_12463 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12461,new cljs.core.PersistentArrayMap.fromArray([orig_type_12461,cljs.core.identity], true, false)));var chunk__12443_12464 = null;var count__12444_12465 = (0);var i__12445_12466 = (0);while(true){
if((i__12445_12466 < count__12444_12465))
{var vec__12448_12467 = chunk__12443_12464.cljs$core$IIndexed$_nth$arity$2(null,i__12445_12466);var actual_type_12468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448_12467,(0),null);var __12469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448_12467,(1),null);var keys_12470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12455,actual_type_12468,f_12462], null);var canonical_f_12471 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12454),keys_12470);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12454,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12470], 0));
if(cljs.core.truth_(elem_12454.removeEventListener))
{elem_12454.removeEventListener(cljs.core.name(actual_type_12468),canonical_f_12471);
} else
{elem_12454.detachEvent(cljs.core.name(actual_type_12468),canonical_f_12471);
}
{
var G__12472 = seq__12441_12463;
var G__12473 = chunk__12443_12464;
var G__12474 = count__12444_12465;
var G__12475 = (i__12445_12466 + (1));
seq__12441_12463 = G__12472;
chunk__12443_12464 = G__12473;
count__12444_12465 = G__12474;
i__12445_12466 = G__12475;
continue;
}
} else
{var temp__4126__auto___12476 = cljs.core.seq(seq__12441_12463);if(temp__4126__auto___12476)
{var seq__12441_12477__$1 = temp__4126__auto___12476;if(cljs.core.chunked_seq_QMARK_(seq__12441_12477__$1))
{var c__4195__auto___12478 = cljs.core.chunk_first(seq__12441_12477__$1);{
var G__12479 = cljs.core.chunk_rest(seq__12441_12477__$1);
var G__12480 = c__4195__auto___12478;
var G__12481 = cljs.core.count(c__4195__auto___12478);
var G__12482 = (0);
seq__12441_12463 = G__12479;
chunk__12443_12464 = G__12480;
count__12444_12465 = G__12481;
i__12445_12466 = G__12482;
continue;
}
} else
{var vec__12449_12483 = cljs.core.first(seq__12441_12477__$1);var actual_type_12484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449_12483,(0),null);var __12485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449_12483,(1),null);var keys_12486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12455,actual_type_12484,f_12462], null);var canonical_f_12487 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12454),keys_12486);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12454,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12486], 0));
if(cljs.core.truth_(elem_12454.removeEventListener))
{elem_12454.removeEventListener(cljs.core.name(actual_type_12484),canonical_f_12487);
} else
{elem_12454.detachEvent(cljs.core.name(actual_type_12484),canonical_f_12487);
}
{
var G__12488 = cljs.core.next(seq__12441_12477__$1);
var G__12489 = null;
var G__12490 = (0);
var G__12491 = (0);
seq__12441_12463 = G__12488;
chunk__12443_12464 = G__12489;
count__12444_12465 = G__12490;
i__12445_12466 = G__12491;
continue;
}
}
} else
{}
}
break;
}
{
var G__12492 = seq__12431_12456;
var G__12493 = chunk__12438_12457;
var G__12494 = count__12439_12458;
var G__12495 = (i__12440_12459 + (1));
seq__12431_12456 = G__12492;
chunk__12438_12457 = G__12493;
count__12439_12458 = G__12494;
i__12440_12459 = G__12495;
continue;
}
} else
{var temp__4126__auto___12496 = cljs.core.seq(seq__12431_12456);if(temp__4126__auto___12496)
{var seq__12431_12497__$1 = temp__4126__auto___12496;if(cljs.core.chunked_seq_QMARK_(seq__12431_12497__$1))
{var c__4195__auto___12498 = cljs.core.chunk_first(seq__12431_12497__$1);{
var G__12499 = cljs.core.chunk_rest(seq__12431_12497__$1);
var G__12500 = c__4195__auto___12498;
var G__12501 = cljs.core.count(c__4195__auto___12498);
var G__12502 = (0);
seq__12431_12456 = G__12499;
chunk__12438_12457 = G__12500;
count__12439_12458 = G__12501;
i__12440_12459 = G__12502;
continue;
}
} else
{var vec__12450_12503 = cljs.core.first(seq__12431_12497__$1);var orig_type_12504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12503,(0),null);var f_12505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12503,(1),null);var seq__12432_12506 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12504,new cljs.core.PersistentArrayMap.fromArray([orig_type_12504,cljs.core.identity], true, false)));var chunk__12434_12507 = null;var count__12435_12508 = (0);var i__12436_12509 = (0);while(true){
if((i__12436_12509 < count__12435_12508))
{var vec__12451_12510 = chunk__12434_12507.cljs$core$IIndexed$_nth$arity$2(null,i__12436_12509);var actual_type_12511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451_12510,(0),null);var __12512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451_12510,(1),null);var keys_12513 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12455,actual_type_12511,f_12505], null);var canonical_f_12514 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12454),keys_12513);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12454,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12513], 0));
if(cljs.core.truth_(elem_12454.removeEventListener))
{elem_12454.removeEventListener(cljs.core.name(actual_type_12511),canonical_f_12514);
} else
{elem_12454.detachEvent(cljs.core.name(actual_type_12511),canonical_f_12514);
}
{
var G__12515 = seq__12432_12506;
var G__12516 = chunk__12434_12507;
var G__12517 = count__12435_12508;
var G__12518 = (i__12436_12509 + (1));
seq__12432_12506 = G__12515;
chunk__12434_12507 = G__12516;
count__12435_12508 = G__12517;
i__12436_12509 = G__12518;
continue;
}
} else
{var temp__4126__auto___12519__$1 = cljs.core.seq(seq__12432_12506);if(temp__4126__auto___12519__$1)
{var seq__12432_12520__$1 = temp__4126__auto___12519__$1;if(cljs.core.chunked_seq_QMARK_(seq__12432_12520__$1))
{var c__4195__auto___12521 = cljs.core.chunk_first(seq__12432_12520__$1);{
var G__12522 = cljs.core.chunk_rest(seq__12432_12520__$1);
var G__12523 = c__4195__auto___12521;
var G__12524 = cljs.core.count(c__4195__auto___12521);
var G__12525 = (0);
seq__12432_12506 = G__12522;
chunk__12434_12507 = G__12523;
count__12435_12508 = G__12524;
i__12436_12509 = G__12525;
continue;
}
} else
{var vec__12452_12526 = cljs.core.first(seq__12432_12520__$1);var actual_type_12527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452_12526,(0),null);var __12528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452_12526,(1),null);var keys_12529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12455,actual_type_12527,f_12505], null);var canonical_f_12530 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12454),keys_12529);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12454,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12529], 0));
if(cljs.core.truth_(elem_12454.removeEventListener))
{elem_12454.removeEventListener(cljs.core.name(actual_type_12527),canonical_f_12530);
} else
{elem_12454.detachEvent(cljs.core.name(actual_type_12527),canonical_f_12530);
}
{
var G__12531 = cljs.core.next(seq__12432_12520__$1);
var G__12532 = null;
var G__12533 = (0);
var G__12534 = (0);
seq__12432_12506 = G__12531;
chunk__12434_12507 = G__12532;
count__12435_12508 = G__12533;
i__12436_12509 = G__12534;
continue;
}
}
} else
{}
}
break;
}
{
var G__12535 = cljs.core.next(seq__12431_12497__$1);
var G__12536 = null;
var G__12537 = (0);
var G__12538 = (0);
seq__12431_12456 = G__12535;
chunk__12438_12457 = G__12536;
count__12439_12458 = G__12537;
i__12440_12459 = G__12538;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__12539){
var elem_sel = cljs.core.first(arglist__12539);
var type_fs = cljs.core.rest(arglist__12539);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){var vec__12551_12562 = dommy.core.elem_and_selector(elem_sel);var elem_12563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551_12562,(0),null);var selector_12564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551_12562,(1),null);var seq__12552_12565 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__12553_12566 = null;var count__12554_12567 = (0);var i__12555_12568 = (0);while(true){
if((i__12555_12568 < count__12554_12567))
{var vec__12556_12569 = chunk__12553_12566.cljs$core$IIndexed$_nth$arity$2(null,i__12555_12568);var type_12570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_12569,(0),null);var f_12571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_12569,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12570,((function (seq__12552_12565,chunk__12553_12566,count__12554_12567,i__12555_12568,vec__12556_12569,type_12570,f_12571,vec__12551_12562,elem_12563,selector_12564){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12570,this_fn], 0));
var G__12558 = e;return (f_12571.cljs$core$IFn$_invoke$arity$1 ? f_12571.cljs$core$IFn$_invoke$arity$1(G__12558) : f_12571.call(null,G__12558));
});})(seq__12552_12565,chunk__12553_12566,count__12554_12567,i__12555_12568,vec__12556_12569,type_12570,f_12571,vec__12551_12562,elem_12563,selector_12564))
], 0));
{
var G__12572 = seq__12552_12565;
var G__12573 = chunk__12553_12566;
var G__12574 = count__12554_12567;
var G__12575 = (i__12555_12568 + (1));
seq__12552_12565 = G__12572;
chunk__12553_12566 = G__12573;
count__12554_12567 = G__12574;
i__12555_12568 = G__12575;
continue;
}
} else
{var temp__4126__auto___12576 = cljs.core.seq(seq__12552_12565);if(temp__4126__auto___12576)
{var seq__12552_12577__$1 = temp__4126__auto___12576;if(cljs.core.chunked_seq_QMARK_(seq__12552_12577__$1))
{var c__4195__auto___12578 = cljs.core.chunk_first(seq__12552_12577__$1);{
var G__12579 = cljs.core.chunk_rest(seq__12552_12577__$1);
var G__12580 = c__4195__auto___12578;
var G__12581 = cljs.core.count(c__4195__auto___12578);
var G__12582 = (0);
seq__12552_12565 = G__12579;
chunk__12553_12566 = G__12580;
count__12554_12567 = G__12581;
i__12555_12568 = G__12582;
continue;
}
} else
{var vec__12559_12583 = cljs.core.first(seq__12552_12577__$1);var type_12584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_12583,(0),null);var f_12585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_12583,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12584,((function (seq__12552_12565,chunk__12553_12566,count__12554_12567,i__12555_12568,vec__12559_12583,type_12584,f_12585,seq__12552_12577__$1,temp__4126__auto___12576,vec__12551_12562,elem_12563,selector_12564){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12584,this_fn], 0));
var G__12561 = e;return (f_12585.cljs$core$IFn$_invoke$arity$1 ? f_12585.cljs$core$IFn$_invoke$arity$1(G__12561) : f_12585.call(null,G__12561));
});})(seq__12552_12565,chunk__12553_12566,count__12554_12567,i__12555_12568,vec__12559_12583,type_12584,f_12585,seq__12552_12577__$1,temp__4126__auto___12576,vec__12551_12562,elem_12563,selector_12564))
], 0));
{
var G__12586 = cljs.core.next(seq__12552_12577__$1);
var G__12587 = null;
var G__12588 = (0);
var G__12589 = (0);
seq__12552_12565 = G__12586;
chunk__12553_12566 = G__12587;
count__12554_12567 = G__12588;
i__12555_12568 = G__12589;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__12590){
var elem_sel = cljs.core.first(arglist__12590);
var type_fs = cljs.core.rest(arglist__12590);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
