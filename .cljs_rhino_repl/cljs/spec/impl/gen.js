// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27726__auto__,writer__27727__auto__,opt__27728__auto__){
return cljs.core._write.call(null,writer__27727__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30253 = arguments.length;
var i__28196__auto___30254 = (0);
while(true){
if((i__28196__auto___30254 < len__28195__auto___30253)){
args__28202__auto__.push((arguments[i__28196__auto___30254]));

var G__30255 = (i__28196__auto___30254 + (1));
i__28196__auto___30254 = G__30255;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30252){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30252));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30257 = arguments.length;
var i__28196__auto___30258 = (0);
while(true){
if((i__28196__auto___30258 < len__28195__auto___30257)){
args__28202__auto__.push((arguments[i__28196__auto___30258]));

var G__30259 = (i__28196__auto___30258 + (1));
i__28196__auto___30258 = G__30259;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30256){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30256));
});

var g_QMARK__30260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30261 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30260){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30260))
,null));
var mkg_30262 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30260,g_30261){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30260,g_30261))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30260,g_30261,mkg_30262){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30260).call(null,x);
});})(g_QMARK__30260,g_30261,mkg_30262))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30260,g_30261,mkg_30262){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30262).call(null,gfn);
});})(g_QMARK__30260,g_30261,mkg_30262))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30260,g_30261,mkg_30262){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30261).call(null,generator);
});})(g_QMARK__30260,g_30261,mkg_30262))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28271__auto___30281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28271__auto___30281){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30282 = arguments.length;
var i__28196__auto___30283 = (0);
while(true){
if((i__28196__auto___30283 < len__28195__auto___30282)){
args__28202__auto__.push((arguments[i__28196__auto___30283]));

var G__30284 = (i__28196__auto___30283 + (1));
i__28196__auto___30283 = G__30284;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30281))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30281){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30281),args);
});})(g__28271__auto___30281))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28271__auto___30281){
return (function (seq30263){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30263));
});})(g__28271__auto___30281))
;


var g__28271__auto___30285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28271__auto___30285){
return (function cljs$spec$impl$gen$list(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30286 = arguments.length;
var i__28196__auto___30287 = (0);
while(true){
if((i__28196__auto___30287 < len__28195__auto___30286)){
args__28202__auto__.push((arguments[i__28196__auto___30287]));

var G__30288 = (i__28196__auto___30287 + (1));
i__28196__auto___30287 = G__30288;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30285))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30285),args);
});})(g__28271__auto___30285))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28271__auto___30285){
return (function (seq30264){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30264));
});})(g__28271__auto___30285))
;


var g__28271__auto___30289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28271__auto___30289){
return (function cljs$spec$impl$gen$map(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30290 = arguments.length;
var i__28196__auto___30291 = (0);
while(true){
if((i__28196__auto___30291 < len__28195__auto___30290)){
args__28202__auto__.push((arguments[i__28196__auto___30291]));

var G__30292 = (i__28196__auto___30291 + (1));
i__28196__auto___30291 = G__30292;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30289))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30289),args);
});})(g__28271__auto___30289))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28271__auto___30289){
return (function (seq30265){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30265));
});})(g__28271__auto___30289))
;


var g__28271__auto___30293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28271__auto___30293){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30294 = arguments.length;
var i__28196__auto___30295 = (0);
while(true){
if((i__28196__auto___30295 < len__28195__auto___30294)){
args__28202__auto__.push((arguments[i__28196__auto___30295]));

var G__30296 = (i__28196__auto___30295 + (1));
i__28196__auto___30295 = G__30296;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30293))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30293),args);
});})(g__28271__auto___30293))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28271__auto___30293){
return (function (seq30266){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30266));
});})(g__28271__auto___30293))
;


var g__28271__auto___30297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28271__auto___30297){
return (function cljs$spec$impl$gen$set(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30298 = arguments.length;
var i__28196__auto___30299 = (0);
while(true){
if((i__28196__auto___30299 < len__28195__auto___30298)){
args__28202__auto__.push((arguments[i__28196__auto___30299]));

var G__30300 = (i__28196__auto___30299 + (1));
i__28196__auto___30299 = G__30300;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30297))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30297),args);
});})(g__28271__auto___30297))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28271__auto___30297){
return (function (seq30267){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30267));
});})(g__28271__auto___30297))
;


var g__28271__auto___30301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28271__auto___30301){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30302 = arguments.length;
var i__28196__auto___30303 = (0);
while(true){
if((i__28196__auto___30303 < len__28195__auto___30302)){
args__28202__auto__.push((arguments[i__28196__auto___30303]));

var G__30304 = (i__28196__auto___30303 + (1));
i__28196__auto___30303 = G__30304;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30301))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30301),args);
});})(g__28271__auto___30301))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28271__auto___30301){
return (function (seq30268){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30268));
});})(g__28271__auto___30301))
;


var g__28271__auto___30305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28271__auto___30305){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30306 = arguments.length;
var i__28196__auto___30307 = (0);
while(true){
if((i__28196__auto___30307 < len__28195__auto___30306)){
args__28202__auto__.push((arguments[i__28196__auto___30307]));

var G__30308 = (i__28196__auto___30307 + (1));
i__28196__auto___30307 = G__30308;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30305))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30305),args);
});})(g__28271__auto___30305))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28271__auto___30305){
return (function (seq30269){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30269));
});})(g__28271__auto___30305))
;


var g__28271__auto___30309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28271__auto___30309){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30310 = arguments.length;
var i__28196__auto___30311 = (0);
while(true){
if((i__28196__auto___30311 < len__28195__auto___30310)){
args__28202__auto__.push((arguments[i__28196__auto___30311]));

var G__30312 = (i__28196__auto___30311 + (1));
i__28196__auto___30311 = G__30312;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30309))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30309),args);
});})(g__28271__auto___30309))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28271__auto___30309){
return (function (seq30270){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30270));
});})(g__28271__auto___30309))
;


var g__28271__auto___30313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28271__auto___30313){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30314 = arguments.length;
var i__28196__auto___30315 = (0);
while(true){
if((i__28196__auto___30315 < len__28195__auto___30314)){
args__28202__auto__.push((arguments[i__28196__auto___30315]));

var G__30316 = (i__28196__auto___30315 + (1));
i__28196__auto___30315 = G__30316;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30313))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30313),args);
});})(g__28271__auto___30313))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28271__auto___30313){
return (function (seq30271){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30271));
});})(g__28271__auto___30313))
;


var g__28271__auto___30317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28271__auto___30317){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30318 = arguments.length;
var i__28196__auto___30319 = (0);
while(true){
if((i__28196__auto___30319 < len__28195__auto___30318)){
args__28202__auto__.push((arguments[i__28196__auto___30319]));

var G__30320 = (i__28196__auto___30319 + (1));
i__28196__auto___30319 = G__30320;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30317))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30317),args);
});})(g__28271__auto___30317))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28271__auto___30317){
return (function (seq30272){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30272));
});})(g__28271__auto___30317))
;


var g__28271__auto___30321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28271__auto___30321){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30322 = arguments.length;
var i__28196__auto___30323 = (0);
while(true){
if((i__28196__auto___30323 < len__28195__auto___30322)){
args__28202__auto__.push((arguments[i__28196__auto___30323]));

var G__30324 = (i__28196__auto___30323 + (1));
i__28196__auto___30323 = G__30324;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30321))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30321),args);
});})(g__28271__auto___30321))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28271__auto___30321){
return (function (seq30273){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30273));
});})(g__28271__auto___30321))
;


var g__28271__auto___30325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28271__auto___30325){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30326 = arguments.length;
var i__28196__auto___30327 = (0);
while(true){
if((i__28196__auto___30327 < len__28195__auto___30326)){
args__28202__auto__.push((arguments[i__28196__auto___30327]));

var G__30328 = (i__28196__auto___30327 + (1));
i__28196__auto___30327 = G__30328;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30325))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30325),args);
});})(g__28271__auto___30325))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28271__auto___30325){
return (function (seq30274){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30274));
});})(g__28271__auto___30325))
;


var g__28271__auto___30329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28271__auto___30329){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30330 = arguments.length;
var i__28196__auto___30331 = (0);
while(true){
if((i__28196__auto___30331 < len__28195__auto___30330)){
args__28202__auto__.push((arguments[i__28196__auto___30331]));

var G__30332 = (i__28196__auto___30331 + (1));
i__28196__auto___30331 = G__30332;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30329))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30329),args);
});})(g__28271__auto___30329))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28271__auto___30329){
return (function (seq30275){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30275));
});})(g__28271__auto___30329))
;


var g__28271__auto___30333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28271__auto___30333){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30334 = arguments.length;
var i__28196__auto___30335 = (0);
while(true){
if((i__28196__auto___30335 < len__28195__auto___30334)){
args__28202__auto__.push((arguments[i__28196__auto___30335]));

var G__30336 = (i__28196__auto___30335 + (1));
i__28196__auto___30335 = G__30336;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30333))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30333),args);
});})(g__28271__auto___30333))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28271__auto___30333){
return (function (seq30276){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30276));
});})(g__28271__auto___30333))
;


var g__28271__auto___30337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28271__auto___30337){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30338 = arguments.length;
var i__28196__auto___30339 = (0);
while(true){
if((i__28196__auto___30339 < len__28195__auto___30338)){
args__28202__auto__.push((arguments[i__28196__auto___30339]));

var G__30340 = (i__28196__auto___30339 + (1));
i__28196__auto___30339 = G__30340;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30337))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30337),args);
});})(g__28271__auto___30337))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28271__auto___30337){
return (function (seq30277){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30277));
});})(g__28271__auto___30337))
;


var g__28271__auto___30341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28271__auto___30341){
return (function cljs$spec$impl$gen$return(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30342 = arguments.length;
var i__28196__auto___30343 = (0);
while(true){
if((i__28196__auto___30343 < len__28195__auto___30342)){
args__28202__auto__.push((arguments[i__28196__auto___30343]));

var G__30344 = (i__28196__auto___30343 + (1));
i__28196__auto___30343 = G__30344;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30341))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30341),args);
});})(g__28271__auto___30341))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28271__auto___30341){
return (function (seq30278){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30278));
});})(g__28271__auto___30341))
;


var g__28271__auto___30345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28271__auto___30345){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30346 = arguments.length;
var i__28196__auto___30347 = (0);
while(true){
if((i__28196__auto___30347 < len__28195__auto___30346)){
args__28202__auto__.push((arguments[i__28196__auto___30347]));

var G__30348 = (i__28196__auto___30347 + (1));
i__28196__auto___30347 = G__30348;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30345))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30345),args);
});})(g__28271__auto___30345))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28271__auto___30345){
return (function (seq30279){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30279));
});})(g__28271__auto___30345))
;


var g__28271__auto___30349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28271__auto___30349){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30350 = arguments.length;
var i__28196__auto___30351 = (0);
while(true){
if((i__28196__auto___30351 < len__28195__auto___30350)){
args__28202__auto__.push((arguments[i__28196__auto___30351]));

var G__30352 = (i__28196__auto___30351 + (1));
i__28196__auto___30351 = G__30352;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28271__auto___30349))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28271__auto___30349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28271__auto___30349),args);
});})(g__28271__auto___30349))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28271__auto___30349){
return (function (seq30280){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30280));
});})(g__28271__auto___30349))
;

var g__28284__auto___30374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28284__auto___30374){
return (function cljs$spec$impl$gen$any(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30375 = arguments.length;
var i__28196__auto___30376 = (0);
while(true){
if((i__28196__auto___30376 < len__28195__auto___30375)){
args__28202__auto__.push((arguments[i__28196__auto___30376]));

var G__30377 = (i__28196__auto___30376 + (1));
i__28196__auto___30376 = G__30377;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30374))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30374){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30374);
});})(g__28284__auto___30374))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28284__auto___30374){
return (function (seq30353){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30353));
});})(g__28284__auto___30374))
;


var g__28284__auto___30378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28284__auto___30378){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30379 = arguments.length;
var i__28196__auto___30380 = (0);
while(true){
if((i__28196__auto___30380 < len__28195__auto___30379)){
args__28202__auto__.push((arguments[i__28196__auto___30380]));

var G__30381 = (i__28196__auto___30380 + (1));
i__28196__auto___30380 = G__30381;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30378))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30378){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30378);
});})(g__28284__auto___30378))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28284__auto___30378){
return (function (seq30354){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30354));
});})(g__28284__auto___30378))
;


var g__28284__auto___30382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28284__auto___30382){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30383 = arguments.length;
var i__28196__auto___30384 = (0);
while(true){
if((i__28196__auto___30384 < len__28195__auto___30383)){
args__28202__auto__.push((arguments[i__28196__auto___30384]));

var G__30385 = (i__28196__auto___30384 + (1));
i__28196__auto___30384 = G__30385;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30382))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30382){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30382);
});})(g__28284__auto___30382))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28284__auto___30382){
return (function (seq30355){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30355));
});})(g__28284__auto___30382))
;


var g__28284__auto___30386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28284__auto___30386){
return (function cljs$spec$impl$gen$char(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30387 = arguments.length;
var i__28196__auto___30388 = (0);
while(true){
if((i__28196__auto___30388 < len__28195__auto___30387)){
args__28202__auto__.push((arguments[i__28196__auto___30388]));

var G__30389 = (i__28196__auto___30388 + (1));
i__28196__auto___30388 = G__30389;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30386))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30386){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30386);
});})(g__28284__auto___30386))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28284__auto___30386){
return (function (seq30356){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30356));
});})(g__28284__auto___30386))
;


var g__28284__auto___30390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28284__auto___30390){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30391 = arguments.length;
var i__28196__auto___30392 = (0);
while(true){
if((i__28196__auto___30392 < len__28195__auto___30391)){
args__28202__auto__.push((arguments[i__28196__auto___30392]));

var G__30393 = (i__28196__auto___30392 + (1));
i__28196__auto___30392 = G__30393;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30390))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30390){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30390);
});})(g__28284__auto___30390))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28284__auto___30390){
return (function (seq30357){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30357));
});})(g__28284__auto___30390))
;


var g__28284__auto___30394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28284__auto___30394){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30395 = arguments.length;
var i__28196__auto___30396 = (0);
while(true){
if((i__28196__auto___30396 < len__28195__auto___30395)){
args__28202__auto__.push((arguments[i__28196__auto___30396]));

var G__30397 = (i__28196__auto___30396 + (1));
i__28196__auto___30396 = G__30397;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30394){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30394);
});})(g__28284__auto___30394))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28284__auto___30394){
return (function (seq30358){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30358));
});})(g__28284__auto___30394))
;


var g__28284__auto___30398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28284__auto___30398){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30399 = arguments.length;
var i__28196__auto___30400 = (0);
while(true){
if((i__28196__auto___30400 < len__28195__auto___30399)){
args__28202__auto__.push((arguments[i__28196__auto___30400]));

var G__30401 = (i__28196__auto___30400 + (1));
i__28196__auto___30400 = G__30401;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30398))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30398){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30398);
});})(g__28284__auto___30398))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28284__auto___30398){
return (function (seq30359){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30359));
});})(g__28284__auto___30398))
;


var g__28284__auto___30402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28284__auto___30402){
return (function cljs$spec$impl$gen$double(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30403 = arguments.length;
var i__28196__auto___30404 = (0);
while(true){
if((i__28196__auto___30404 < len__28195__auto___30403)){
args__28202__auto__.push((arguments[i__28196__auto___30404]));

var G__30405 = (i__28196__auto___30404 + (1));
i__28196__auto___30404 = G__30405;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30402))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30402){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30402);
});})(g__28284__auto___30402))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28284__auto___30402){
return (function (seq30360){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30360));
});})(g__28284__auto___30402))
;


var g__28284__auto___30406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28284__auto___30406){
return (function cljs$spec$impl$gen$int(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30407 = arguments.length;
var i__28196__auto___30408 = (0);
while(true){
if((i__28196__auto___30408 < len__28195__auto___30407)){
args__28202__auto__.push((arguments[i__28196__auto___30408]));

var G__30409 = (i__28196__auto___30408 + (1));
i__28196__auto___30408 = G__30409;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30406))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30406){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30406);
});})(g__28284__auto___30406))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28284__auto___30406){
return (function (seq30361){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30361));
});})(g__28284__auto___30406))
;


var g__28284__auto___30410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28284__auto___30410){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30411 = arguments.length;
var i__28196__auto___30412 = (0);
while(true){
if((i__28196__auto___30412 < len__28195__auto___30411)){
args__28202__auto__.push((arguments[i__28196__auto___30412]));

var G__30413 = (i__28196__auto___30412 + (1));
i__28196__auto___30412 = G__30413;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30410))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30410){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30410);
});})(g__28284__auto___30410))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28284__auto___30410){
return (function (seq30362){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30362));
});})(g__28284__auto___30410))
;


var g__28284__auto___30414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28284__auto___30414){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30415 = arguments.length;
var i__28196__auto___30416 = (0);
while(true){
if((i__28196__auto___30416 < len__28195__auto___30415)){
args__28202__auto__.push((arguments[i__28196__auto___30416]));

var G__30417 = (i__28196__auto___30416 + (1));
i__28196__auto___30416 = G__30417;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30414))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30414){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30414);
});})(g__28284__auto___30414))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28284__auto___30414){
return (function (seq30363){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30363));
});})(g__28284__auto___30414))
;


var g__28284__auto___30418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28284__auto___30418){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30419 = arguments.length;
var i__28196__auto___30420 = (0);
while(true){
if((i__28196__auto___30420 < len__28195__auto___30419)){
args__28202__auto__.push((arguments[i__28196__auto___30420]));

var G__30421 = (i__28196__auto___30420 + (1));
i__28196__auto___30420 = G__30421;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30418))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30418){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30418);
});})(g__28284__auto___30418))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28284__auto___30418){
return (function (seq30364){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30364));
});})(g__28284__auto___30418))
;


var g__28284__auto___30422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28284__auto___30422){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30423 = arguments.length;
var i__28196__auto___30424 = (0);
while(true){
if((i__28196__auto___30424 < len__28195__auto___30423)){
args__28202__auto__.push((arguments[i__28196__auto___30424]));

var G__30425 = (i__28196__auto___30424 + (1));
i__28196__auto___30424 = G__30425;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30422))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30422){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30422);
});})(g__28284__auto___30422))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28284__auto___30422){
return (function (seq30365){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30365));
});})(g__28284__auto___30422))
;


var g__28284__auto___30426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28284__auto___30426){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30427 = arguments.length;
var i__28196__auto___30428 = (0);
while(true){
if((i__28196__auto___30428 < len__28195__auto___30427)){
args__28202__auto__.push((arguments[i__28196__auto___30428]));

var G__30429 = (i__28196__auto___30428 + (1));
i__28196__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30426))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30426){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30426);
});})(g__28284__auto___30426))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28284__auto___30426){
return (function (seq30366){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30366));
});})(g__28284__auto___30426))
;


var g__28284__auto___30430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28284__auto___30430){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30431 = arguments.length;
var i__28196__auto___30432 = (0);
while(true){
if((i__28196__auto___30432 < len__28195__auto___30431)){
args__28202__auto__.push((arguments[i__28196__auto___30432]));

var G__30433 = (i__28196__auto___30432 + (1));
i__28196__auto___30432 = G__30433;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30430){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30430);
});})(g__28284__auto___30430))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28284__auto___30430){
return (function (seq30367){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30367));
});})(g__28284__auto___30430))
;


var g__28284__auto___30434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28284__auto___30434){
return (function cljs$spec$impl$gen$string(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30435 = arguments.length;
var i__28196__auto___30436 = (0);
while(true){
if((i__28196__auto___30436 < len__28195__auto___30435)){
args__28202__auto__.push((arguments[i__28196__auto___30436]));

var G__30437 = (i__28196__auto___30436 + (1));
i__28196__auto___30436 = G__30437;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30434))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30434){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30434);
});})(g__28284__auto___30434))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28284__auto___30434){
return (function (seq30368){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30368));
});})(g__28284__auto___30434))
;


var g__28284__auto___30438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28284__auto___30438){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30439 = arguments.length;
var i__28196__auto___30440 = (0);
while(true){
if((i__28196__auto___30440 < len__28195__auto___30439)){
args__28202__auto__.push((arguments[i__28196__auto___30440]));

var G__30441 = (i__28196__auto___30440 + (1));
i__28196__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30438))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30438){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30438);
});})(g__28284__auto___30438))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28284__auto___30438){
return (function (seq30369){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30369));
});})(g__28284__auto___30438))
;


var g__28284__auto___30442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28284__auto___30442){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30443 = arguments.length;
var i__28196__auto___30444 = (0);
while(true){
if((i__28196__auto___30444 < len__28195__auto___30443)){
args__28202__auto__.push((arguments[i__28196__auto___30444]));

var G__30445 = (i__28196__auto___30444 + (1));
i__28196__auto___30444 = G__30445;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30442){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30442);
});})(g__28284__auto___30442))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28284__auto___30442){
return (function (seq30370){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30370));
});})(g__28284__auto___30442))
;


var g__28284__auto___30446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28284__auto___30446){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30447 = arguments.length;
var i__28196__auto___30448 = (0);
while(true){
if((i__28196__auto___30448 < len__28195__auto___30447)){
args__28202__auto__.push((arguments[i__28196__auto___30448]));

var G__30449 = (i__28196__auto___30448 + (1));
i__28196__auto___30448 = G__30449;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30446))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30446){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30446);
});})(g__28284__auto___30446))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28284__auto___30446){
return (function (seq30371){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30371));
});})(g__28284__auto___30446))
;


var g__28284__auto___30450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28284__auto___30450){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30451 = arguments.length;
var i__28196__auto___30452 = (0);
while(true){
if((i__28196__auto___30452 < len__28195__auto___30451)){
args__28202__auto__.push((arguments[i__28196__auto___30452]));

var G__30453 = (i__28196__auto___30452 + (1));
i__28196__auto___30452 = G__30453;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30450))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30450){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30450);
});})(g__28284__auto___30450))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28284__auto___30450){
return (function (seq30372){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30372));
});})(g__28284__auto___30450))
;


var g__28284__auto___30454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28284__auto___30454){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30455 = arguments.length;
var i__28196__auto___30456 = (0);
while(true){
if((i__28196__auto___30456 < len__28195__auto___30455)){
args__28202__auto__.push((arguments[i__28196__auto___30456]));

var G__30457 = (i__28196__auto___30456 + (1));
i__28196__auto___30456 = G__30457;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});})(g__28284__auto___30454))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28284__auto___30454){
return (function (args){
return cljs.core.deref.call(null,g__28284__auto___30454);
});})(g__28284__auto___30454))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28284__auto___30454){
return (function (seq30373){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30373));
});})(g__28284__auto___30454))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28202__auto__ = [];
var len__28195__auto___30460 = arguments.length;
var i__28196__auto___30461 = (0);
while(true){
if((i__28196__auto___30461 < len__28195__auto___30460)){
args__28202__auto__.push((arguments[i__28196__auto___30461]));

var G__30462 = (i__28196__auto___30461 + (1));
i__28196__auto___30461 = G__30462;
continue;
} else {
}
break;
}

var argseq__28203__auto__ = ((((0) < args__28202__auto__.length))?(new cljs.core.IndexedSeq(args__28202__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28203__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30458_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30458_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30459){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30459));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30463_SHARP_){
return (new Date(p1__30463_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map