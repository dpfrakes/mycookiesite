!function(o){function e(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return o[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=o,e.c=n,e.d=function(o,n,t){e.o(o,n)||Object.defineProperty(o,n,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(n,"a",n),n},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="js/",e(e.s=1)}([function(o,e){window.cookieMgmtNS=Object.assign(window.cookieMgmtNS||{},{cookieValidity10Years:31536e4,cookieValiditySession:void 0,createCookie:function(o,e,n,t,i){var c=o+"="+encodeURI(e)+";";n&&(n instanceof Date?isNaN(n.getTime())&&(n=new Date):n=new Date((new Date).getTime()+1e3*parseInt(n)),c+="expires="+n.toGMTString()+";"),t&&(c+="path="+t+";"),i&&(c+="domain="+i+";"),document.cookie=c},getCookie:function(o){var e=document.cookie.match("(^|;)\\s*"+o+"\\s*=\\s*([^;]+)");return e?e.pop():null},deleteCookie:function(o,e,n){getCookie(o)&&createCookie(o,"",-1,e,n)},allowUserTracking:function(){return"false"!==getCookie("cookie-consent")}})},function(o,e,n){o.exports=n(2)},function(o,e,n){n(0),n(3)},function(o,e){window.cookieMgmtNS=Object.assign(window.cookieMgmtNS||{},{setAcceptTrack:function(o){cookieMgmtNS.createCookie("cookie-consent","true",o,void 0,location.host)},setDoNotTrack:function(o){cookieMgmtNS.createCookie("cookie-consent","false",o,void 0,location.host)},consentCookieSet:function(){return null!==cookieMgmtNS.getCookie("cookie-consent")},openCookieBanner:function(){document.querySelector('iframe[src$="cookie-banner"]').parentElement.classList.add("open")},closeCookieBanner:function(){document.querySelector('iframe[src$="cookie-banner"]').parentElement.classList.remove("open")},fetchUserCookieConsentPreferences:function(o,e,n){var t=new XMLHttpRequest;t.open("GET",o,!0),t.onload=function(){if(t.status>=200&&t.status<400){var o=JSON.parse(t.responseText);console.log("consent banner to open for this location"),!0===o.dnt?(console.log("do-not-track enabled"),cookieMgmtNS.createCookie("dnt","true",cookieMgmtNS.cookieValiditySession,"/")):(console.log("do-not-track disabled"),cookieMgmtNS.createCookie("dnt","false",cookieMgmtNS.cookieValiditySession,"/")),e()}else console.log("failed to call user API - not showing banner"),n()},t.onerror=function(){console.log("failed to call user API - not showing banner"),n()},t.send()},shouldOpenCookieBanner:function(o,e,n){cookieMgmtNS.consentCookieSet()?(console.log("consent cookie already set - not showing banner"),n()):cookieMgmtNS.fetchUserCookieConsentPreferences(o,e,n)}}),console.assert("function"==typeof cookieMgmtNS.getCookie),console.assert("function"==typeof cookieMgmtNS.consentCookieSet),console.assert("function"==typeof cookieMgmtNS.openCookieBanner),console.assert("function"==typeof cookieMgmtNS.closeCookieBanner),console.assert("function"==typeof cookieMgmtNS.shouldOpenCookieBanner);var n=String((new Date).getTime())+String(Math.random());cookieMgmtNS.shouldOpenCookieBanner("http://df-feature-ipod-229.test.nationalgeographic.org/ngs-commons/api/geoip?nonce="+n,cookieMgmtNS.openCookieBanner,function(){}),window.addEventListener("message",function(o){if("http://df-feature-ipod-229.test.nationalgeographic.org"===o.origin){var e="true"===cookieMgmtNS.getCookie("dnt")?cookieMgmtNS.cookieValiditySession:cookieMgmtNS.cookieValidity10Years;"triggerAccept"===o.data?cookieMgmtNS.setAcceptTrack(e):"triggerDeny"===o.data&&cookieMgmtNS.setDoNotTrack(e),cookieMgmtNS.closeCookieBanner()}})}]);