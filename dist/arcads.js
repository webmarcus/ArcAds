!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var i=n();for(var t in i)("object"==typeof exports?exports:e)[t]=i[t]}}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=3)}([function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeGPT=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],(0,t.appendResource)("script","//www.googletagservices.com/tag/js/gpt.js",!0,!0)},n.refreshSlot=function(e){var n=e.ad,i=e.correlator,t=void 0!==i&&i,r=e.prerender,o=void 0===r?null:r,a=e.info,d=void 0===a?{}:a;new Promise(function(e){if(o)try{o(d).then(function(){e("Prerender function has completed.")})}catch(n){console.warn("ArcAds: Prerender function did not return a promise or there was an error.\n          Documentation: https://github.com/wapopartners/arc-ads/wiki/Utilizing-a-Prerender-Hook"),e("Prerender function did not return a promise or there was an error, ignoring.")}else e("No Prerender function was provided.")}).then(function(){!function e(){if(window.blockArcAdsLoad)return"blockArcAdsLoad";window.googletag&&googletag.pubadsReady?window.googletag.pubads().refresh([n],{changeCorrelator:t}):setTimeout(function(){e()},200)}()})},n.queueGoogletagCommand=function(e){window.googletag.cmd.push(e)},n.setTargeting=function(e,n){for(var i in n)n.hasOwnProperty(i)&&n[i]&&e.setTargeting(i,n[i])},n.dfpSettings=function(e){window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.collapseEmptyDivs&&window.googletag.pubads().collapseEmptyDivs();window.googletag.enableServices(),e&&window.googletag.pubads().addEventListener("slotRenderEnded",e)},n.determineSlotName=function(e,n){var i=(0,r.expandQueryString)("adslot");if(i&&(""!==i||null!==i))return"/"+e+"/"+i;return"/"+e+"/"+n};var t=i(5),r=i(6)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeBiddingServices=a,n.fetchBids=function(e){var n=this,i=e.ad,d=e.id,s=e.slotName,u=e.dimensions,l=e.wrapper,c=e.bidding,p=e.correlator,f=void 0!==p&&p,g=e.prerender,b=e.breakpoints,v={adUnit:i,adSlot:s,adDimensions:u,adId:d,bids:c},h=new Promise(function(e){if(l.prebid&&l.prebid.enabled){var r=l.prebid.timeout||700;t.queuePrebidCommand.bind(n,(0,t.fetchPrebidBids)(i,l.prebid.useSlotForAdUnit?s:d,r,v,g,function(){e("Fetched Prebid ads!")}))}else e("Prebid is not enabled on the wrapper...")}),w=new Promise(function(e){l.amazon&&l.amazon.enabled?(0,r.fetchAmazonBids)(d,s,u,b,function(){e("Fetched Amazon ads!")}):e("Amazon is not enabled on the wrapper...")});window.arcBiddingReady?Promise.all([h,w]).then(function(){(0,o.refreshSlot)({ad:i,correlator:f,prerender:g,info:v})}):setTimeout(function(){return a()},200)};var t=i(2),r=i(7),o=i(0);function a(e){var n=e.prebid,i=void 0!==n&&n,t=e.amazon,o=void 0!==t&&t;if(!window.arcBiddingReady){window.arcBiddingReady=!1;var a=new Promise(function(e){if(i&&i.enabled){if("undefined"==typeof pbjs){var n=n||{};n.que=n.que||[]}e("Prebid has been initialized")}else e("Prebid is not enabled on the wrapper...")}),d=new Promise(function(e){o&&o.enabled&&window.apstag?o.id&&""!==o.id?(0,r.queueAmazonCommand)(function(){window.apstag.init({pubID:o.id,adServer:"googletag"}),e("Amazon scripts have been added onto the page!")}):(console.warn("ArcAds: Missing Amazon account id. \n          Documentation: https://github.com/wapopartners/arc-ads#amazon-tama9"),e("Amazon is not enabled on the wrapper...")):e("Amazon is not enabled on the wrapper...")});Promise.all([a,d]).then(function(){window.arcBiddingReady=!0})}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};n.queuePrebidCommand=function(e){pbjs.que.push(e)},n.fetchPrebidBidsArray=o,n.fetchPrebidBids=function(e,n,i,t,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,d=t;d.bids=Array.isArray(t.bids)?t.bids:[t.bids],o(e,[n],i,d,r,a)},n.addUnit=function(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t({code:e,bids:i},o);a.mediaTypes={banner:{sizes:n}};var d=r.sizeConfig,s=r.config;if(pbjs.addAdUnits(a),s)return void pbjs.setConfig(s);d&&pbjs.setConfig({sizeConfig:d})};var r=i(0);function o(e,n,i,t,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;pbjs.addAdUnits(t),window.blockArcAdsPrebid||pbjs.requestBids({timeout:i,adUnitCodes:n,bidsBackHandler:function(i){console.log("Bid Back Handler",i),pbjs.setTargetingForGPTAsync(n),a?a():(0,r.refreshSlot)({ad:e,info:t,prerender:o})}})}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ArcAds=void 0;var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}(),r=i(4),o=i(1),a=i(0),d=i(2),s=i(8);function u(e){if(Array.isArray(e)){for(var n=0,i=Array(e.length);n<e.length;n++)i[n]=e[n];return i}return Array.from(e)}n.ArcAds=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.dfpId=n.dfp.id||"",this.wrapper=n.bidding||{},this.positions=[],this.collapseEmptyDivs=n.dfp.collapseEmptyDivs,this.adsList=[],window.isMobile=r.MobileDetection,""===this.dfpId?console.warn("ArcAds: DFP id is missing from the arcads initialization script.","\n","Documentation: https://github.com/wapopartners/arc-ads#getting-started"):((0,a.initializeGPT)(),(0,a.queueGoogletagCommand)(a.dfpSettings.bind(this,i)),(0,o.initializeBiddingServices)(this.wrapper))}return t(e,[{key:"registerAd",value:function(e){var n=e.id,i=e.slotName,t=e.dimensions,r=e.adType,o=void 0!==r&&r,s=e.targeting,l=void 0===s?{}:s,c=e.display,p=void 0===c?"all":c,f=e.bidding,g=void 0!==f&&f,b=e.iframeBidders,v=void 0===b?["openx"]:b,h=e.others,w=void 0===h?{}:h,m=[],y=!1,A=function e(n){return Array.isArray(n)?1+Math.max.apply(Math,u(n.map(function(n){return e(n)}))):0}(t);t&&void 0!==t&&1===A?m.push.apply(m,u(t)):t&&void 0!==t&&t.length>0&&2===A?m.push.apply(m,u(t)):t&&t.forEach(function(e){m.push.apply(m,u(e))});try{if(!(l&&l.hasOwnProperty("position")||!1===o)){var k=this.positions[o]+1||1;this.positions[o]=k;var P=Object.assign(l,{position:k});Object.assign(e,{targeting:P})}var z=g.prebid&&(g.prebid.enabled&&g.prebid.bids||void 0===g.prebid.enabled&&g.prebid.bids);if(isMobile.any()&&"mobile"===p||!isMobile.any()&&"desktop"===p||"all"===p){if(z&&this.wrapper.prebid&&this.wrapper.prebid.enabled&&m){pbjs&&v.length>0&&pbjs.setConfig({userSync:{iframeEnabled:!0,filterSettings:{iframe:{bidders:v,filter:"include"}}}});var S=this.wrapper.prebid.useSlotForAdUnit?(0,a.determineSlotName)(this.dfpId,i):n;d.queuePrebidCommand.bind(this,(0,d.addUnit)(S,m,g.prebid.bids,this.wrapper.prebid,w))}(y=this.displayAd.bind(this,e))&&(0,a.queueGoogletagCommand)(y)}}catch(e){console.error("ads error",e)}}},{key:"registerAdCollection",value:function(e){var n=this;e.forEach(function(e){n.registerAd(e)})}},{key:"registerAdCollectionSingleCall",value:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700;window.blockArcAdsLoad=!0,window.blockArcAdsPrebid=!0,e.forEach(function(e){n.registerAd(e)}),window.blockArcAdsLoad=!1,window.blockArcAdsPrebid=!1,pbjs.requestBids({timeout:i,bidsBackHandler:function(e){console.log("Bid Back Handler",e),pbjs.setTargetingForGPTAsync(),window.googletag.pubads().refresh(window.adsList),window.adsList=[]}})}},{key:"displayAd",value:function(e){var n=e.id,i=e.slotName,t=e.dimensions,r=e.targeting,d=e.sizemap,u=void 0!==d&&d,l=e.bidding,c=void 0!==l&&l,p=e.prerender,f=void 0===p?null:p,g=(0,a.determineSlotName)(this.dfpId,i),b=t&&!t.length?null:t,v=t?window.googletag.defineSlot(g,b,n):window.googletag.defineOutOfPageSlot(g,n);if(u&&u.breakpoints&&t){var h=(0,s.prepareSizeMaps)(b,u.breakpoints),w=h.mapping,m=h.breakpoints,y=h.correlators;if(!v)return!1;v.defineSizeMapping(w),u.refresh&&(0,s.setResizeListener)({ad:v,slotName:g,breakpoints:m,id:n,mapping:w,correlators:y,bidding:c,wrapper:this.wrapper,prerender:f})}v&&(v.addService(window.googletag.pubads()),(0,a.setTargeting)(v,r));var A=u&&u.breakpoints?u.breakpoints:[];window.adsList&&v&&adsList.push(v),t&&c&&(c.amazon&&c.amazon.enabled||c.prebid&&c.prebid.enabled)?(0,o.fetchBids)({ad:v,id:n,slotName:g,dimensions:b,wrapper:this.wrapper,prerender:f,bidding:c,breakpoints:A}):window.blockArcAdsPrebid||(0,a.refreshSlot)({ad:v,prerender:f,info:{adUnit:v,adSlot:g,adDimensions:b,adId:n}})}},{key:"sendSingleCallAds",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:700;if(this.adsList&&this.adsList.length<1)return!1;window&&window.googletag&&googletag.pubadsReady?(window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.registerAdCollectionSingleCall(this.adsList,n)):setTimeout(function(){e.sendSingleCallAds()},2e3)}},{key:"reserveAd",value:function(n){e.setAdsBlockGate(),this.adsList.push(n)}},{key:"setPageLeveTargeting",value:function(e,n){googletag.pubads().setTargeting(e,n)}}],[{key:"setAdsBlockGate",value:function(){var n=e.getWindow();void 0!==n&&(n.blockArcAdsLoad=!0)}},{key:"releaseAdsBlockGate",value:function(){var n=e.getWindow();void 0!==n&&(n.blockArcAdsLoad=!1)}},{key:"getWindow",value:function(){return window}}]),e}()},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}();var r=n.MobileDetection=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"Android",value:function(){return!!navigator.userAgent.match(/Android/i)}},{key:"AndroidOld",value:function(){return!!navigator.userAgent.match(/Android 2.3.3/i)}},{key:"AndroidTablet",value:function(){return!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Mobile/i))}},{key:"Kindle",value:function(){return!!navigator.userAgent.match(/Kindle/i)}},{key:"KindleFire",value:function(){return!!navigator.userAgent.match(/KFOT/i)}},{key:"Silk",value:function(){return!!navigator.userAgent.match(/Silk/i)}},{key:"BlackBerry",value:function(){return!!navigator.userAgent.match(/BlackBerry/i)}},{key:"iOS",value:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}},{key:"iPhone",value:function(){return!!navigator.userAgent.match(/iPhone|iPod/i)}},{key:"iPad",value:function(){return!!navigator.userAgent.match(/iPad/i)}},{key:"Windows",value:function(){return!!navigator.userAgent.match(/IEMobile/i)}},{key:"FirefoxOS",value:function(){return!!navigator.userAgent.match(/Mozilla/i)&&!!navigator.userAgent.match(/Mobile/i)}},{key:"Retina",value:function(){return window.retina||window.devicePixelRatio>1}},{key:"any",value:function(){return this.Android()||this.Kindle()||this.KindleFire()||this.Silk()||this.BlackBerry()||this.iOS()||this.Windows()||this.FirefoxOS()}}]),e}();n.default=r},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appendResource=function(e,n,i,t,r){var o=document.createElement(e);if("script"!==e)return;o.src=n,o.async=i||!1,o.defer=i||t||!1;(document.head||document.documentElement).appendChild(o),r&&r()}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.expandQueryString=function(e){var n=window.location.href,i=e.replace(/[[\]]/g,"\\$&"),t=new RegExp("[?&]"+i+"(=([^&#]*)|&|#|$)").exec(n);if(!t)return null;if(!t[2])return"";return decodeURIComponent(t[2].replace(/\+/g," "))}},function(e,n,i){"use strict";function t(e){window.apstag&&e()}Object.defineProperty(n,"__esModule",{value:!0}),n.fetchAmazonBids=function(e,n,i,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=i;if(r&&void 0!==window.innerWidth&&void 0!==i[0][0][0]){for(var d=window.innerWidth,s=-1,u=r.length,l=0;l<u;l++)if(d>=r[l][0]){s=l;break}a=i[s]}t(function(){var i={slotName:n,slotID:e,sizes:a};window.apstag.fetchBids({slots:[i]},function(){window.apstag.setDisplayBids(),o&&o()})})},n.queueAmazonCommand=t},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resizeListeners=n.sizemapListeners=void 0,n.prepareSizeMaps=function(e,n){var i=[],t=[],r=[],o=n.length?n:null;o&&e&&o.forEach(function(n,o){i.push([n,e[o]]),-1===t.indexOf(n[0])&&(t.push(n[0]),r.push(!1))});return t.sort(function(e,n){return e-n}),{mapping:i,breakpoints:t,correlators:r}},n.parseSizeMappings=s,n.runResizeEvents=u,n.setResizeListener=function(e){var n=e.id,i=e.correlators;d[n]=(0,t.debounce)(u(e),250),window.addEventListener("resize",d[n]),a[n]={listener:d[n],correlators:i}};var t=i(9),r=i(1),o=i(0),a=n.sizemapListeners={},d=n.resizeListeners={};function s(e){try{var n=[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight],i=e.filter(function(e){return e[0][0]<=n[0]&&e[0][1]<=n[1]}),t=i.length>0?i[0][1]:[];return t.length>0&&t[0].constructor!==Array&&(t=[t]),t}catch(n){return e[e.length-1][1]}}function u(e){var n=void 0,i=!1;return function(){for(var t=e.ad,d=e.breakpoints,u=e.id,l=e.bidding,c=e.mapping,p=e.slotName,f=e.wrapper,g=e.prerender,b=window.innerWidth,v=void 0,h=void 0,w=0;w<d.length;w++){if(v=d[w],h=d[w+1],b>v&&(b<h||!h)&&n!==v||b===v&&!i){n=v,i=!0;var m=s(c),y={adUnit:t,adSlot:p,adDimensions:m,adId:u};l.prebid&&l.prebid.enabled||l.amazon&&l.amazon.enabled?(0,r.fetchBids)({ad:t,id:u,slotName:p,dimensions:m,bidding:l,wrapper:f,prerender:g,correlator:a[u].correlators[w],breakpoints:d}):(0,o.refreshSlot)({ad:t,correlator:a[u].correlators[w],prerender:g,info:y})}a[u].correlators[w]=!0}}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.debounce=function(e,n){var i=void 0;return function(){for(var t=this,r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(i),i=setTimeout(function(){i=null,e.apply(t,o)},n)}}}])});