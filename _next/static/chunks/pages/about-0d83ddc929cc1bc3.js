!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b6af5be8-8eac-4841-921b-3576eccf00de",e._sentryDebugIdIdentifier="sentry-dbid-b6af5be8-8eac-4841-921b-3576eccf00de")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{2711:function(e){e.exports=function(e){function t(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="dist/",t(0)}([function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n=(a(i(1)),i(6)),s=a(n),r=a(i(7)),l=a(i(8)),c=a(i(9)),d=a(i(10)),m=a(i(11)),u=a(i(14)),f=[],p=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return f=(0,m.default)(f,h),(0,d.default)(f,h.once),f},g=function(){f=(0,u.default)(),v()},b=function(){f.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){h=o(h,e),f=(0,u.default)();var t,i=document.all&&!window.atob;return!0===(t=h.disable)||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()||i?b():(h.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,function(){v(!0)}):document.addEventListener(h.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,r.default)(v,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(v,h.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,d.default)(f,h.once)},h.throttleDelay)),h.disableMutationObserver||l.default.ready("[data-aos]",g),f)},refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function i(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function a(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":o(t))||t&&"object"==(void 0===t?"undefined":o(t))&&v.call(t)==r)return s;if(i(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=i(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;var n=d.test(e=e.replace(l,""));return n||m.test(e)?u(e.slice(2),n?2:8):c.test(e)?s:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n="Expected a function",s=NaN,r="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,u=parseInt,f="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,h=f||p||Function("return this")(),v=Object.prototype.toString,g=Math.max,b=Math.min,y=function(){return h.Date.now()};e.exports=function(e,t,o){var s=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return i(o)&&(s="leading"in o?!!o.leading:s,r="trailing"in o?!!o.trailing:r),function(e,t,o){function s(t){var i=m,a=u;return m=u=void 0,_=t,p=e.apply(a,i)}function r(e){var i=e-v,a=e-_;return void 0===v||i>=t||i<0||x&&a>=f}function l(){var e,i,a,o=y();return r(o)?c(o):void(h=setTimeout(l,(e=o-v,i=o-_,a=t-e,x?b(a,f-i):a)))}function c(e){return h=void 0,j&&m?s(e):(m=u=void 0,p)}function d(){var e,i=y(),a=r(i);if(m=arguments,u=this,v=i,a){if(void 0===h)return _=e=v,h=setTimeout(l,t),w?s(e):p;if(x)return h=setTimeout(l,t),s(v)}return void 0===h&&(h=setTimeout(l,t)),p}var m,u,f,p,h,v,_=0,w=!1,x=!1,j=!0;if("function"!=typeof e)throw TypeError(n);return t=a(t)||0,i(o)&&(w=!!o.leading,f=(x="maxWait"in o)?g(a(o.maxWait)||0,t):f,j="trailing"in o?!!o.trailing:j),d.cancel=function(){void 0!==h&&clearTimeout(h),_=0,m=v=u=h=void 0},d.flush=function(){return void 0===h?p:c(y())},d}(e,t,{leading:s,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function i(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function a(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":o(t))||t&&"object"==(void 0===t?"undefined":o(t))&&h.call(t)==s)return n;if(i(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=i(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;var u=c.test(e=e.replace(r,""));return u||d.test(e)?m(e.slice(2),u?2:8):l.test(e)?n:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=NaN,s="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,u="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),h=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return p.Date.now()};e.exports=function(e,t,o){function n(t){var i=d,a=m;return d=m=void 0,y=t,f=e.apply(a,i)}function s(e){var i=e-h,a=e-y;return void 0===h||i>=t||i<0||w&&a>=u}function r(){var e,i,a,o=b();return s(o)?l(o):void(p=setTimeout(r,(e=o-h,i=o-y,a=t-e,w?g(a,u-i):a)))}function l(e){return p=void 0,x&&d?n(e):(d=m=void 0,f)}function c(){var e,i=b(),a=s(i);if(d=arguments,m=this,h=i,a){if(void 0===p)return y=e=h,p=setTimeout(r,t),_?n(e):f;if(w)return p=setTimeout(r,t),n(h)}return void 0===p&&(p=setTimeout(r,t)),f}var d,m,u,f,p,h,y=0,_=!1,w=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=a(t)||0,i(o)&&(_=!!o.leading,u=(w="maxWait"in o)?v(a(o.maxWait)||0,t):u,x="trailing"in o?!!o.trailing:x),c.cancel=function(){void 0!==p&&clearTimeout(p),y=0,d=h=m=p=void 0},c.flush=function(){return void 0===p?f:l(b())},c}}).call(t,function(){return this}())},function(e,t){"use strict";function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(function e(t){var i=void 0,a=void 0;for(i=0;i<t.length;i+=1)if((a=t[i]).dataset&&a.dataset.aos||a.children&&e(a.children))return!0;return!1}(t.concat(i)))return o()})}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){};t.default={isSupported:function(){return!!i()},ready:function(e,t){var n=window.document,s=new(i())(a);o=t,s.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,n=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"phone",value:function(){var e=i();return!(!o.test(e)&&!n.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!s.test(e)&&!r.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,i){var a=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===a||"false"!==a&&(i||"true"===a)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var a=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,n){i(e,o+a,t)})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=(a=i(12))&&a.__esModule?a:{default:a};t.default=function(e,t){return e.forEach(function(e,i){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)}),e}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=(a=i(13))&&a.__esModule?a:{default:a};t.default=function(e,t){var i=0,a=0,n=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(a=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),i=(0,o.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=n/2;break;case"bottom-center":i+=n/2+e.offsetHeight;break;case"center-center":i+=n/2+e.offsetHeight/2;break;case"top-top":i+=n;break;case"bottom-top":i+=e.offsetHeight+n;break;case"center-top":i+=e.offsetHeight/2+n}return s.anchorPlacement||s.offset||isNaN(t)||(a=t),i+a}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},10512:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(39e3)}])},39e3:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return S}});var a=i(85893),o=i(25675),n=i.n(o),s=i(76733),r=i.n(s),l=i(25709),c=i(85318),d=()=>(0,a.jsx)("div",{className:r().container,children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{className:r().title,children:"We’re proud to be leading the email revolution"}),(0,a.jsxs)("p",{className:r().description,children:["At Mailmodo, we help marketers create, send and automate beautiful and interactive emails that perform like no other."," "]}),(0,a.jsx)(n(),{src:(0,l.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1729759427/strapi/Frame_1110167733_4ca18b44f0.png"),alt:(0,c.Gj)("https://res.cloudinary.com/mailmodo/image/upload/v1729759427/strapi/Frame_1110167733_4ca18b44f0.png"),width:2252,height:1236,className:r().image})]})}),m=i(41664),u=i.n(m),f=i(67294),p=i(2711),h=i.n(p);i(21496);var v=i(77515),g=i.n(v);let b=[{time:"2018-19",title:"AMP technology is released",description:"Interactive emails become a possibility but still not easily available for marketers.",icon:"https://res.cloudinary.com/mailmodo/image/upload/v1728977906/strapi/Component_1_ac062ec96c.svg"},{time:"2021",title:"Mailmodo Launches",description:"We release a complete platform for marketers to create and run interactive emails hassle-free.",icon:"https://res.cloudinary.com/mailmodo/image/upload/v1728977906/strapi/Component_1_78414ec123.svg"},{time:"2022",title:"YC & Sequoia Funding",description:"Y Combinator & Sequoia notice the potential of Mailmodo and we get our first investment.",icon:"https://res.cloudinary.com/mailmodo/image/upload/v1728977906/strapi/Component_1_1c9994493d.svg"},{time:"2024",title:"Mailmodo 2.0",description:"We go beyond AMP technology and launch interactivity for Apple Mail, too.",icon:"https://res.cloudinary.com/mailmodo/image/upload/v1728977905/strapi/Frame_29a9feb6e4.svg"}],y=[{title:"Marketing Tribe",description:"Dive into the world of Mailmodo through interactive webinars, creative sessions, and AMAs. Join the Marketing Tribe to stay on top of what’s new in the space and actively participate in discussions with our team!",image:"https://res.cloudinary.com/mailmodo/image/upload/v1728981099/strapi/Frame_1110166605_a08c42de2b.png",redirectUrl:"https://community.mailmodo.com/",redirectText:"Join Marketing Tribe"},{title:"Partnerships",description:"Let’s team up! If you're looking to integrate or co-create, let’s chat. Together, we can create magic and make unique, creative ideas possible.",image:"https://res.cloudinary.com/mailmodo/image/upload/v1728981099/strapi/Frame_1110166605_1_eb56841cf9.png",redirectUrl:"/marketing-partner/",redirectText:"Become a Partner"},{title:"Mailmodo Affiliate",description:"Become a Mailmodo affiliate and earn commission on your referrals while helping businesses discover the power of interactive emails. Join our affiliate program today.",image:"https://res.cloudinary.com/mailmodo/image/upload/v1730282383/strapi/Mailmodo_Affiliate_198fb12317.png",redirectUrl:"/affiliate/",redirectText:"Apply now"}];var _=()=>((0,f.useEffect)(()=>{h().init({duration:1e3})},[]),(0,a.jsx)("div",{className:g().container,children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:g().row,children:[(0,a.jsxs)("div",{className:g().leftCol,"data-aos":"fade-right","data-aos-duration":"800","data-aos-delay":"100",children:[(0,a.jsx)("h2",{className:g().title,children:"So many creative ideas were trapped in old, complex ESPs. Now they have a way out."}),(0,a.jsx)("p",{className:g().subtitle,children:"Not taking action within emails is so last year."}),(0,a.jsxs)("p",{className:g().description,children:["Interactive emails perform 3x better on average."," ",(0,a.jsx)("span",{children:"So why would anyone choose not to use them?"})," We’ve been asking ourselves that question a lot. We think the #1 cause is that marketers and their ideas are still trapped in complex and limiting email platforms. And we’re here to help them save themselves."," "]})]}),(0,a.jsx)("div",{className:g().rightCol,"data-aos":"fade-left","data-aos-duration":"800","data-aos-delay":"100",children:(0,a.jsxs)("video",{width:"1096",height:"1100",autoPlay:!0,muted:!0,loop:!0,className:g().video,playsInline:!0,src:(0,l.cy)("https://res.cloudinary.com/mailmodo/video/upload/v1729850860/strapi/about_us_62a3c73134.mp4"),preload:"metadata",poster:"https://res.cloudinary.com/mailmodo/video/upload/v1729850860/strapi/about_us_62a3c73134.mp4",children:[(0,a.jsx)("source",{type:"video/mp4"}),(0,a.jsx)("source",{type:"video/webm"})]})})]}),(0,a.jsxs)("div",{className:g().workflowSection,children:[(0,a.jsx)("h2",{className:g().workflowTitle,children:"Remember this clunky way of having CTAs in emails?"}),(0,a.jsx)(n(),{src:(0,l.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1728975419/strapi/Frame_1110167721_d2b29eec92.svg"),alt:(0,c.Gj)("https://res.cloudinary.com/mailmodo/image/upload/v1728975419/strapi/Frame_1110167721_d2b29eec92.svg"),width:1027,height:292,className:g().workflowImageDesktop}),(0,a.jsx)(n(),{src:(0,l.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1729142909/strapi/Group_1110166353_771ff26370.svg"),alt:(0,c.Gj)("https://res.cloudinary.com/mailmodo/image/upload/v1729142909/strapi/Group_1110166353_771ff26370.svg"),width:317,height:331,className:g().workflowImageMobile})]}),(0,a.jsx)("div",{className:g().timelineSection,children:(0,a.jsxs)("div",{className:g().row,children:[(0,a.jsx)("div",{className:g().leftCol,children:(0,a.jsxs)("h2",{className:g().timelineTitle,children:["It’s been an exciting journey,",(0,a.jsx)("br",{}),"so far."]})}),(0,a.jsx)("div",{className:g().rightCol,children:b.map((e,t)=>(0,a.jsxs)("div",{className:g().timelineItem,"data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":100*(.2*(t+1)),"data-aos-once":"true",children:[(0,a.jsxs)("div",{className:g().timelineItemIcon,children:[(0,a.jsx)(n(),{src:(0,l.Jn)(e.icon),alt:(0,c.Gj)(e.title),width:42,height:42,className:g().image}),(0,a.jsx)("div",{className:g().timelineDivider})]}),(0,a.jsxs)("div",{className:g().timelineItemText,children:[(0,a.jsx)("div",{className:g().timelineItemTime,children:e.time}),(0,a.jsx)("p",{className:g().timelineItemTitle,children:e.title}),(0,a.jsx)("p",{className:g().timelineItemDescription,children:e.description})]})]},"unique_timeline_item_".concat(t)))})]})}),(0,a.jsxs)("div",{className:g().featuresSection,children:[(0,a.jsx)("h2",{className:g().featuresTitle,children:"Get involved"}),(0,a.jsx)("p",{className:g().featuresSubtitle,children:"Join us in our mission toward a frictionless, engaging future."}),(0,a.jsx)("div",{className:g().featuresContianer,children:y.map((e,t)=>(0,a.jsxs)("div",{className:g().featuresItem,"data-reverse":t%2==0,"data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":100,children:[(0,a.jsxs)("div",{className:g().featuresItemText,children:[(0,a.jsx)("h3",{className:g().featuresItemTitle,children:e.title}),(0,a.jsx)("p",{className:g().featuresItemDescription,children:e.description}),(0,a.jsxs)(u(),{href:e.redirectUrl,className:g().featuresItemLink,children:[e.redirectText," ",(0,a.jsx)("span",{children:"->"})]})]}),(0,a.jsx)("div",{className:g().featuresItemImage,children:(0,a.jsx)(n(),{src:(0,l.Jn)(e.image),alt:(0,c.Gj)(e.image),width:628,height:404,className:g().image})})]},"unique_feature_item_".concat(t)))})]})]})})),w=i(61828),x=i.n(w),j=i(11163),k=i(37988),N=i.n(k);let I=()=>(0,a.jsx)(n(),{src:(0,l.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1729057500/strapi/two_rectangales_400px_a00ae6bb56.svg"),alt:(0,c.Gj)("https://res.cloudinary.com/mailmodo/image/upload/v1729057500/strapi/two_rectangales_400px_a00ae6bb56.svg"),width:400,height:396,className:N().image});var T=()=>{let e=(0,j.useRouter)().asPath;return(0,a.jsxs)("div",{className:N().container,children:[(0,a.jsx)("div",{className:N().leftGradient}),(0,a.jsx)("div",{className:N().rightGradient}),(0,a.jsx)("div",{className:N().leftBgImg,children:(0,a.jsx)(I,{})}),(0,a.jsx)("div",{className:N().rightBgImg,children:(0,a.jsx)(I,{})}),(0,a.jsxs)("div",{className:N().row,children:[(0,a.jsxs)("div",{className:N().leftCol,children:[(0,a.jsx)("h2",{className:N().title,children:"The future of email marketing is here"}),(0,a.jsx)("a",{href:"".concat((0,c.XE)("https://manage.mailmodo.com/auth/signup","signup-cta",e)),children:(0,a.jsxs)("button",{className:N().button,type:"button",children:["Try Mailmodo for free ",(0,a.jsx)("span",{children:"->"})]})})]}),(0,a.jsx)("div",{className:N().rightCol,children:(0,a.jsx)(n(),{src:(0,l.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1728982825/strapi/Frame_1110167695_e7e8d18b59.svg"),alt:(0,c.Gj)("https://res.cloudinary.com/mailmodo/image/upload/v1728982825/strapi/Frame_1110167695_e7e8d18b59.svg"),width:357,height:215,className:N().image})})]})]})},M=()=>(0,a.jsx)("div",{className:x().container,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(T,{})})}),O=i(2962),S=()=>{let e="About Us - The Mailmodo Story",t="Discover how Mailmodo is empowering marketers worldwide to boost engagement and conversions with an interactive email marketing platform.",i="https://www.mailmodo.com/about/";return(0,a.jsxs)("div",{children:[(0,a.jsx)(O.PB,{robotsProps:{maxImagePreview:"large"},title:e,description:t,canonical:i,keywords:"",openGraph:{url:i,title:e,description:t,locale:"en_US",images:[{url:"https://www.mailmodo.com/static/images/og-image.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,a.jsx)(O.dX,{url:i,title:e,images:["https://www.mailmodo.com/static/images/logo/logo-full.svg"],authorName:"Mailmodo",publisherName:"Mailmodo",publisherLogo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:t}),(0,a.jsx)(d,{}),(0,a.jsx)(_,{}),(0,a.jsx)(M,{})]})}},21496:function(){},61828:function(){},77515:function(e){e.exports={container:"styles_container__4vcIX",row:"styles_row___LZVT",leftCol:"styles_leftCol__BZkIo",title:"styles_title__IcFLb",subtitle:"styles_subtitle__7ggNK",description:"styles_description__b4Tb5",rightCol:"styles_rightCol__aOqYC",video:"styles_video__Hd2ZX",workflowSection:"styles_workflowSection__Z2QEI",workflowTitle:"styles_workflowTitle__07NYB",workflowImageDesktop:"styles_workflowImageDesktop__D_U6G",workflowImageMobile:"styles_workflowImageMobile__0L1sT",timelineSection:"styles_timelineSection__qbY0N",timelineTitle:"styles_timelineTitle__eUyNT",timelineItem:"styles_timelineItem__eB8FX",timelineItemIcon:"styles_timelineItemIcon__wlioO",timelineDivider:"styles_timelineDivider__K9jrV",timelineItemText:"styles_timelineItemText__eF5vW",timelineItemDescription:"styles_timelineItemDescription__Wm1FO",image:"styles_image__dzCcQ",timelineItemTime:"styles_timelineItemTime__K5AdM",timelineItemTitle:"styles_timelineItemTitle__dfAkq",featuresSection:"styles_featuresSection__sBueI",featuresTitle:"styles_featuresTitle__Cy9DN",featuresSubtitle:"styles_featuresSubtitle__AyFv1",featuresContianer:"styles_featuresContianer__h6YT9",featuresItem:"styles_featuresItem__VEveu",featuresItemText:"styles_featuresItemText__A_OiB",featuresItemTitle:"styles_featuresItemTitle__20TOp",featuresItemDescription:"styles_featuresItemDescription__7gikq",featuresItemLink:"styles_featuresItemLink__0aIFz",featuresItemImage:"styles_featuresItemImage__dMlJZ"}},76733:function(e){e.exports={container:"styles_container__iYpBG",title:"styles_title__Q0ayP",description:"styles_description__nzaMq",image:"styles_image__k92EL"}},37988:function(e){e.exports={container:"styles_container__InBlv",row:"styles_row__rHRVO",leftCol:"styles_leftCol__TbuQg",title:"styles_title__atxMb",button:"styles_button__QKA6W",rightCol:"styles_rightCol__pnn59",leftGradient:"styles_leftGradient__kS6rX",rightGradient:"styles_rightGradient__6bHq_",leftBgImg:"styles_leftBgImg__bUEUz",rightBgImg:"styles_rightBgImg__1WaOo"}}},function(e){e.O(0,[6e3,9774,2888,179],function(){return e(e.s=10512)}),_N_E=e.O()}]);