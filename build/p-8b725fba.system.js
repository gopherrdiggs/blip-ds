System.register([],(function(r){"use strict";return{execute:function(){function n(r,n){return n={exports:{}},r(n,n.exports),n.exports}var t=n((function(r){var n=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);r.exports=function r(){n(t);return t}}else{var e=new Array(16);r.exports=function r(){for(var n=0,t;n<16;n++){if((n&3)===0)t=Math.random()*4294967296;e[n]=t>>>((n&3)<<3)&255}return e}}}));var e=[];for(var o=0;o<256;++o){e[o]=(o+256).toString(16).substr(1)}function a(r,n){var t=n||0;var o=e;return[o[r[t++]],o[r[t++]],o[r[t++]],o[r[t++]],"-",o[r[t++]],o[r[t++]],"-",o[r[t++]],o[r[t++]],"-",o[r[t++]],o[r[t++]],"-",o[r[t++]],o[r[t++]],o[r[t++]],o[r[t++]],o[r[t++]],o[r[t++]]].join("")}var u=a;function i(r,n,e){var o=n&&e||0;if(typeof r=="string"){n=r==="binary"?new Array(16):null;r=null}r=r||{};var a=r.random||(r.rng||t)();a[6]=a[6]&15|64;a[8]=a[8]&63|128;if(n){for(var i=0;i<16;++i){n[o+i]=a[i]}}return n||u(a)}var f=i;r("u",f)}}}));