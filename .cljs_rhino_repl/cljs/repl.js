// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29267){
var map__29292 = p__29267;
var map__29292__$1 = ((((!((map__29292 == null)))?((((map__29292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var m = map__29292__$1;
var n = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29294_29316 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29295_29317 = null;
var count__29296_29318 = (0);
var i__29297_29319 = (0);
while(true){
if((i__29297_29319 < count__29296_29318)){
var f_29320 = cljs.core._nth.call(null,chunk__29295_29317,i__29297_29319);
cljs.core.println.call(null,"  ",f_29320);

var G__29321 = seq__29294_29316;
var G__29322 = chunk__29295_29317;
var G__29323 = count__29296_29318;
var G__29324 = (i__29297_29319 + (1));
seq__29294_29316 = G__29321;
chunk__29295_29317 = G__29322;
count__29296_29318 = G__29323;
i__29297_29319 = G__29324;
continue;
} else {
var temp__4657__auto___29325 = cljs.core.seq.call(null,seq__29294_29316);
if(temp__4657__auto___29325){
var seq__29294_29326__$1 = temp__4657__auto___29325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29294_29326__$1)){
var c__27931__auto___29327 = cljs.core.chunk_first.call(null,seq__29294_29326__$1);
var G__29328 = cljs.core.chunk_rest.call(null,seq__29294_29326__$1);
var G__29329 = c__27931__auto___29327;
var G__29330 = cljs.core.count.call(null,c__27931__auto___29327);
var G__29331 = (0);
seq__29294_29316 = G__29328;
chunk__29295_29317 = G__29329;
count__29296_29318 = G__29330;
i__29297_29319 = G__29331;
continue;
} else {
var f_29332 = cljs.core.first.call(null,seq__29294_29326__$1);
cljs.core.println.call(null,"  ",f_29332);

var G__29333 = cljs.core.next.call(null,seq__29294_29326__$1);
var G__29334 = null;
var G__29335 = (0);
var G__29336 = (0);
seq__29294_29316 = G__29333;
chunk__29295_29317 = G__29334;
count__29296_29318 = G__29335;
i__29297_29319 = G__29336;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29337 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27120__auto__)){
return or__27120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29337);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29337)))?cljs.core.second.call(null,arglists_29337):arglists_29337));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29298_29338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29299_29339 = null;
var count__29300_29340 = (0);
var i__29301_29341 = (0);
while(true){
if((i__29301_29341 < count__29300_29340)){
var vec__29302_29342 = cljs.core._nth.call(null,chunk__29299_29339,i__29301_29341);
var name_29343 = cljs.core.nth.call(null,vec__29302_29342,(0),null);
var map__29305_29344 = cljs.core.nth.call(null,vec__29302_29342,(1),null);
var map__29305_29345__$1 = ((((!((map__29305_29344 == null)))?((((map__29305_29344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29305_29344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29305_29344):map__29305_29344);
var doc_29346 = cljs.core.get.call(null,map__29305_29345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29347 = cljs.core.get.call(null,map__29305_29345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29343);

cljs.core.println.call(null," ",arglists_29347);

if(cljs.core.truth_(doc_29346)){
cljs.core.println.call(null," ",doc_29346);
} else {
}

var G__29348 = seq__29298_29338;
var G__29349 = chunk__29299_29339;
var G__29350 = count__29300_29340;
var G__29351 = (i__29301_29341 + (1));
seq__29298_29338 = G__29348;
chunk__29299_29339 = G__29349;
count__29300_29340 = G__29350;
i__29301_29341 = G__29351;
continue;
} else {
var temp__4657__auto___29352 = cljs.core.seq.call(null,seq__29298_29338);
if(temp__4657__auto___29352){
var seq__29298_29353__$1 = temp__4657__auto___29352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29298_29353__$1)){
var c__27931__auto___29354 = cljs.core.chunk_first.call(null,seq__29298_29353__$1);
var G__29355 = cljs.core.chunk_rest.call(null,seq__29298_29353__$1);
var G__29356 = c__27931__auto___29354;
var G__29357 = cljs.core.count.call(null,c__27931__auto___29354);
var G__29358 = (0);
seq__29298_29338 = G__29355;
chunk__29299_29339 = G__29356;
count__29300_29340 = G__29357;
i__29301_29341 = G__29358;
continue;
} else {
var vec__29307_29359 = cljs.core.first.call(null,seq__29298_29353__$1);
var name_29360 = cljs.core.nth.call(null,vec__29307_29359,(0),null);
var map__29310_29361 = cljs.core.nth.call(null,vec__29307_29359,(1),null);
var map__29310_29362__$1 = ((((!((map__29310_29361 == null)))?((((map__29310_29361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29310_29361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29310_29361):map__29310_29361);
var doc_29363 = cljs.core.get.call(null,map__29310_29362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29364 = cljs.core.get.call(null,map__29310_29362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29360);

cljs.core.println.call(null," ",arglists_29364);

if(cljs.core.truth_(doc_29363)){
cljs.core.println.call(null," ",doc_29363);
} else {
}

var G__29365 = cljs.core.next.call(null,seq__29298_29353__$1);
var G__29366 = null;
var G__29367 = (0);
var G__29368 = (0);
seq__29298_29338 = G__29365;
chunk__29299_29339 = G__29366;
count__29300_29340 = G__29367;
i__29301_29341 = G__29368;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29312 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29313 = null;
var count__29314 = (0);
var i__29315 = (0);
while(true){
if((i__29315 < count__29314)){
var role = cljs.core._nth.call(null,chunk__29313,i__29315);
var temp__4657__auto___29369__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29369__$1)){
var spec_29370 = temp__4657__auto___29369__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29370));
} else {
}

var G__29371 = seq__29312;
var G__29372 = chunk__29313;
var G__29373 = count__29314;
var G__29374 = (i__29315 + (1));
seq__29312 = G__29371;
chunk__29313 = G__29372;
count__29314 = G__29373;
i__29315 = G__29374;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29312);
if(temp__4657__auto____$1){
var seq__29312__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29312__$1)){
var c__27931__auto__ = cljs.core.chunk_first.call(null,seq__29312__$1);
var G__29375 = cljs.core.chunk_rest.call(null,seq__29312__$1);
var G__29376 = c__27931__auto__;
var G__29377 = cljs.core.count.call(null,c__27931__auto__);
var G__29378 = (0);
seq__29312 = G__29375;
chunk__29313 = G__29376;
count__29314 = G__29377;
i__29315 = G__29378;
continue;
} else {
var role = cljs.core.first.call(null,seq__29312__$1);
var temp__4657__auto___29379__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29379__$2)){
var spec_29380 = temp__4657__auto___29379__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29380));
} else {
}

var G__29381 = cljs.core.next.call(null,seq__29312__$1);
var G__29382 = null;
var G__29383 = (0);
var G__29384 = (0);
seq__29312 = G__29381;
chunk__29313 = G__29382;
count__29314 = G__29383;
i__29315 = G__29384;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map