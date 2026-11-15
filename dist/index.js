"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var t=u(function(l,a){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),s=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-gjoin/dist').ndarray,o=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function c(e){var r=e[0],i=o(e[1]);return d(n(r,0),i,q(r),s(r,0),v(r))}a.exports=c
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
