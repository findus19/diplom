!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".header-contacts__arrow"),t=document.getElementById("arrow"),n=document.querySelector(".header-contacts__phone-number-accord"),r=document.querySelectorAll(".header-contacts__phone-number")[1],i=!0;e.addEventListener("click",(function(){i?(i=!1,t.style.transform="rotate(-180deg)",n.style.position="relative",r.style.opacity=1):i||(i=!0,t.style.transform="rotate(0deg)",n.style.position="absolute",r.style.opacity=0)}))},i=document.querySelectorAll(".popup"),o=function(e){e.classList.add("open_popup"),document.body.style.overflow="hidden"},s=function(e){var t=e.target;t.matches(".close, .popup")&&function(e){e.closest(".popup").classList.remove("open_popup"),document.body.style.overflow="visible"}(t)},l=function(){var e=!0,t=!1,n=void 0;try{for(var r,o=i[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){r.value.addEventListener("click",s)}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}},a=document.querySelector(".popup-thank"),c=o.bind(null,a),d=document.querySelectorAll(".feedback__form, .feedback-block__form"),u=function(e){e.preventDefault();var t=e.target,n=t.querySelector(".checkbox__input");if(console.log(123),n.checked){var r=new FormData(t),i={};r.forEach((function(e,t){i[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error(e.statusText);console.log(321),c()}),(function(e){console.log(e)})),t.reset()}else alert("Согласитесь с политикой конфиденциальности")},p=function(){d.forEach((function(e){var t=e.querySelector(".checkbox__input"),n=e.querySelector('[name="phone"]');t.removeAttribute("required"),n.required=!0,e.addEventListener("submit",u)}))},v=function(){var e=document.querySelector(".popup-dialog-menu"),t=!0;document.body.addEventListener("click",(function(n){var r=n.target;r.closest(".menu")&&t?(t=!1,e.classList.add("showHide-menu")):r===e||t||(t=!0,e.classList.remove("showHide-menu"))}))},m=function(){var e=document.querySelectorAll('a[href*="#"]'),t=!0,n=!1,r=void 0;try{for(var i,o=function(){var e=i.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))},s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0)o()}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+7 (___) ___-__-__",t=document.querySelectorAll('input[name="phone"]');function n(t){var n=t.keyCode,r=e,i=r.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,l=r.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||i.charAt(s):e}));-1!=(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==t.type&&this.value.length<5&&(this.value="")}t.forEach((function(e){e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}))};function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.main,r=t.wrap,i=t.next,o=t.prev,s=t.tabs,l=t.hideArrow,a=void 0!==l&&l,c=t.infinity,d=void 0!==c&&c,u=t.position,p=void 0===u?0:u,v=t.slidesShow,m=void 0===v?3:v,h=t.responsive,f=void 0===h?[]:h,y=t.numSlider,w=void 0===y?1:y,S=t.classTab,b=void 0===S?"glo-tab":S,_=t.moveSlide,g=void 0===_?"x":_;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n||r||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=document.querySelector(r).children,this.first=this.slides[0],this.next=document.querySelector(i),this.prev=document.querySelector(o),this.slidesShow=m,this.options={position:p,infinity:d,widthSlide:Math.floor(100/this.slidesShow),maxPosition:this.slides.length-this.slidesShow},this.responsive=f,this.numSlider=w,this.event=new Event("sliderChange"),this.tabEvent=new Event("tabChange"),this.eventAfter=new Event("eventAfter"),this.tabs=document.querySelector(s),this.classTab=b,this.moveSlide=g.toUpperCase(),this.hideArrow=a,this.backcall={},this.backcall.prev={},this.backcall.next={}}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev||this.next||this.tabs||this.addArrow(),this.tabs?this.tabSlider():this.checkSlider(),this.lookLike()}},{key:"addGloClass",value:function(){this.wrap.classList.add("glo-slider".concat(this.numSlider)),this.main.classList.add("glo-wrap");var e=!0,t=!1,n=void 0;try{for(var r,i=this.slides[Symbol.iterator]();!(e=(r=i.next()).done);e=!0)r.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){this.style=document.getElementById("sliderCarousel-style".concat(this.numSlider)),this.style||(this.style=document.createElement("style"),this.style.id="sliderCarousel-style".concat(this.numSlider)),this.style.textContent="\n      .glo-wrap {\n        overflow: hidden;\n      }\n      .glo-wrap .glo-slider".concat(this.numSlider," {\n        display: flex;\n        ").concat("Y"===this.moveSlide?"flex-wrap: wrap;":"flex-wrap: nowrap;","\n      }\n      .glo-slider").concat(this.numSlider," > .glo-slider__item {\n        max-width: none;\n        flex: 0 0 ").concat(this.options.widthSlide,"%;\n        align-items: center;\n        margin: auto 0;\n        transition: margin-left .5s, top .5s; \n        will-change: margin-left, top;\n        position: relative;\n        top: 0;\n        height: 100%;\n      }\n    "),document.head.appendChild(this.style)}},{key:"removeStyle",value:function(){this.style.remove(),this.style=null}},{key:"tabSlider",value:function(){var e=this,t=f(this.tabs.children);this.tabs.addEventListener("click",(function(n){var r=n.target;if(r.matches(".".concat(e.classTab))){var i=document.querySelector(".".concat(e.classTab,".active"));i&&i.classList.remove("active"),r.classList.add("active"),e.toSlide(t.indexOf(r))}}))}},{key:"checkSlider",value:function(){this.backcall.prev=this.prevSlider.bind(this),this.backcall.next=this.nextSlider.bind(this),this.prev.addEventListener("click",this.backcall.prev),this.next.addEventListener("click",this.backcall.next)}},{key:"removeCheckSlider",value:function(){this.prev.removeEventListener("click",this.backcall.prev),this.next.removeEventListener("click",this.backcall.next)}},{key:"toSlide",value:function(e){if(this.options.position=e,"Y"===this.moveSlide){var t=!0,n=!1,r=void 0;try{for(var i,o=this.slides[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)i.value.style.top="-".concat(this.options.position*this.options.widthSlide,"%")}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}else this.first.style.marginLeft="-".concat(this.options.position*this.options.widthSlide,"%");this.main.dispatchEvent(this.tabEvent),this.wrap.dispatchEvent(this.tabEvent)}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.toSlide(this.options.position)),!this.options.infinity&&this.hideArrow&&(0===this.options.position&&this.options.position!==this.options.maxPosition?this.prev.style.display="none":(this.prev.style.display="flex",this.next.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.toSlide(this.options.position)),!this.options.infinity&&this.hideArrow&&(this.options.position===this.options.maxPosition&&0!==this.options.position?this.next.style.display="none":(this.next.style.display="flex",this.prev.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n      }\n\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:hover,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(e)}},{key:"lookLike",value:function(){var e=this,t=this.slidesShow,n=this.responsive.map((function(e){return e.breakpoint})),r=Math.max.apply(Math,f(n)),i=function(){var i=document.documentElement.clientWidth;if(i<r)for(var o=0;o<n.length;o++)i<n[o]&&(e.slidesShow=e.responsive[o].slideToShow,e.options.widthSlide=Math.floor(100/e.slidesShow),e.addStyle());else e.slidesShow=t,e.options.widthSlide=Math.floor(100/e.slidesShow),e.addStyle();e.wrap.dispatchEvent(e.eventAfter)};i(),window.addEventListener("resize",i)}}])&&y(t.prototype,n),r&&y(t,r),e}(),S={num:0,get count(){return this.num++,this.num}};function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _,g,x=document.querySelector(".popup-repair-types"),L=document.querySelector(".repair-types-slider"),k=document.querySelector(".link-list-menu .menu-link"),E=document.querySelector(".repair-types .repair-types-tab"),q=document.querySelector("#repair-counter .slider-counter-content__current"),T=document.querySelector("#repair-counter .slider-counter-content__total"),A=[],C=function(e){var t=e.target;if(t.matches(".link-list-repair a")&&o(x),t.matches(".repair-types-nav__item ")){var n=!0,r=!1,i=void 0;try{for(var s,l=A[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){s.value.removeCheckSlider()}}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}var a=b(_.tabs.children),c=A[a.indexOf(t)];c.checkSlider(),q.innerText=c.options.position+1,T.innerText=c.slides.length}},O=function(){k.addEventListener("click",o.bind(null,x)),E.addEventListener("click",C),function(){var e=L.children,t=!0,n=!1,r=void 0;try{for(var i,o=function(){var e=i.value,t=new w({main:".repair-types-slider",wrap:".".concat(e.className),prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",numSlider:S.count,slidesShow:1});t.init(),t.removeCheckSlider(),A.push(t),t.wrap.addEventListener("sliderChange",(function(){q.innerText=t.options.position+1}))},s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0)o()}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}A[0].checkSlider(),(_=new w({main:".repair-types-slider-wrap",wrap:".repair-types-slider",tabs:".nav-list-repair",classTab:"repair-types-nav__item",moveSlide:"y",numSlider:S.count,slidesShow:1})).init(),(g=new w({wrap:".nav-list-repair",main:".repair-types-nav",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",numSlider:S.count,slidesShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]})).init();var l=function(){document.documentElement.clientWidth<1025?g.style||g.addStyle():document.documentElement.clientWidth>1024&&g.style&&g.removeStyle()};l(),window.addEventListener("resize",l)}()},j=function(){var e=document.querySelector(".popup-privacy");document.querySelectorAll(".link-privacy").forEach((function(t){t.addEventListener("click",o.bind(null,e))}))},M=document.querySelector(".formula .wrapper_small"),P=function(e){var t=e.target;if(t.matches(".formula-item__icon-inner-text")){var n=t.previousElementSibling.previousElementSibling;"mouseout"===e.type?function(e){var t=e.closest(".formula-item");e.classList.remove("tooltip_reverse"),t.classList.remove("formula-item_cover")}(n):function(e){if(e.getBoundingClientRect().y<0){var t=e.closest(".formula-item");console.dir(t),e.classList.add("tooltip_reverse"),t.classList.add("formula-item_cover")}}(n)}},N=function(){M.addEventListener("mouseover",P),M.addEventListener("mouseout",P)},W=document.querySelector(".formula-slider-wrap"),B=document.querySelector(".formula-slider"),I=document.getElementsByClassName("formula-slider__slide"),H="formula-prev-slide",z=function(){return document.documentElement.clientWidth<768?1:3},D=z(),R=(z(),function(){return B.insertBefore(I[I.length-1],I[0])}),G=function(){D=z();var e=!0,t=!1,n=void 0;try{for(var r,i=I[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;3===D?o.classList.remove("formula-one-slide"):o.classList.add("formula-one-slide")}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}},Y=function(e){var t=e.target;t.closest("#formula-arrow_right")?function(){B.appendChild(I[0]).classList.remove(H),I[0].classList.add(H);var e=I[0],t=I[1];3===D&&(e=I[1],t=I[2]),e.classList.remove("formula-slider_active"),t.classList.add("formula-slider_active")}():t.closest("#formula-arrow_left")&&function(){I[0].classList.remove(H);var e=I[1],t=I[0];3===D&&(t=I[1],e=I[2]),t.classList.add("formula-slider_active"),e.classList.remove("formula-slider_active"),R().classList.add(H)}()},$=function(){!function(){R(),3===D&&R(),I[0].classList.add(H);var e=I[1],t=!0,n=!1,r=void 0;try{for(var i,o=I[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;1===D&&s.classList.add("formula-one-slide")}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}3===D&&(e=I[2]),e.classList.add("formula-slider_active")}(),W.addEventListener("click",Y),window.addEventListener("resize",G)},F=function(){new w({wrap:".partners-slider",main:"#partners .wrapper",prev:"#partners-arrow_left",next:"#partners-arrow_right",numSlider:S.count,slidesShow:3,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()},J=function(){new w({wrap:".reviews-slider",main:".reviews-slider-wrap",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",hideArrow:!0,numSlider:S.count,slidesShow:1}).init()},U=function(){var e=document.querySelector(".popup-consultation");document.querySelectorAll(".button_wide").forEach((function(t){t.addEventListener("click",o.bind(null,e))}))},V=function(){var e=new w({main:".scheme-slider-wrap",wrap:".scheme-slider",tabs:"#scheme-list",classTab:"scheme-nav__item",numSlider:S.count,slidesShow:1});e.init();var t=new w({main:".nav-list",wrap:".scheme-nav__item",prev:"#nav-arrow-scheme_left",next:"#nav-arrow-scheme_right",numSlider:S.count,slidesShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]});t.init();var n=function(){document.documentElement.clientWidth<1025?t.style||t.addStyle():document.documentElement.clientWidth>1024&&t.style&&t.removeStyle()};n(),window.addEventListener("resize",n),e.main.addEventListener("tabChange",(function(){var t=e.main.querySelectorAll(".scheme-description-block");e.main.querySelector(".scheme-description-block.visible-content-block").classList.remove("visible-content-block"),t.item(e.options.position).classList.add("visible-content-block")}))},K=document.querySelector(".problems .wrapper_middle"),Q=function(e){var t=e.target;if(t.matches(".problems-item__icon-inner")){var n=t.previousElementSibling.previousElementSibling;console.log(n),"mouseout"===e.type?function(e){var t=e.closest(".problems-item");e.classList.remove("tooltip_reverse"),t.classList.remove("problems-item_cover")}(n):function(e){if(e.getBoundingClientRect().y<0){var t=e.closest(".problems-item");e.classList.add("tooltip_reverse"),t.classList.add("problems-item_cover")}}(n)}},X=function(){K.addEventListener("mouseover",Q),K.addEventListener("mouseout",Q)},Z=document.querySelector(".problems-slider-wrap"),ee=document.querySelector(".problems-slider"),te=document.getElementsByClassName("problems-slider__slide"),ne=function(){return document.documentElement.clientWidth<768?1:3},re=ne(),ie=(ne(),function(){return ee.insertBefore(te[te.length-1],te[0])}),oe=function(){re=ne();var e=!0,t=!1,n=void 0;try{for(var r,i=te[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;3===re?o.classList.remove("problems-one-slide"):o.classList.add("problems-one-slide")}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}},se=function(e){var t=e.target;t.closest("#problems-arrow_right")?function(){ee.appendChild(te[0]).classList.remove("problems-prev-slide"),te[0].classList.add("problems-prev-slide");var e=te[0],t=te[1];3===re&&(e=te[1],t=te[2]),e.classList.remove("problems-slider_active"),t.classList.add("problems-slider_active")}():t.closest("#problems-arrow_left")&&function(){te[0].classList.remove("problems-prev-slide");var e=te[1],t=te[0];3===re&&(t=te[1],e=te[2]),t.classList.add("problems-slider_active"),e.classList.remove("problems-slider_active"),ie().classList.add("problems-prev-slide")}()},le=function(){!function(){ie(),3===re&&ie(),te[0].classList.add("problems-prev-slide");var e=te[1],t=!0,n=!1,r=void 0;try{for(var i,o=te[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;1===re&&s.classList.add("problems-one-slide")}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}3===re&&(e=te[2]),e.classList.add("problems-slider_active")}(),Z.addEventListener("click",se),window.addEventListener("resize",oe)},ae=function(){var e=document.querySelector(".accordion ul");e.addEventListener("click",(function(){var t=event.target,n=e.querySelector(".msg-active");t.matches(".title_block")&&(t.classList.contains("msg-active")||t.classList.add("msg-active"),n&&n.classList.remove("msg-active"))}))};function ce(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var de,ue,pe=document.querySelector(".popup-transparency"),ve=document.querySelector(".transparency-slider"),me=pe.querySelector(".slider-counter-content__total"),he=pe.querySelector(".slider-counter-content__current"),fe=function(){var e=event.target;if(e.matches(".transparency-item__img")){var t=e.parentNode,n=ce(ve.children);de.toSlide(n.indexOf(t)),he.innerText=de.options.position+1,o(pe)}},ye=function(){ve.addEventListener("click",fe),(de=new w({wrap:".popup-transparency-slider",main:".popup-transparency-slider-wrap",prev:"#transparency_left",next:"#transparency_right",numSlider:S.count,slidesShow:1})).init(),(ue=new w({wrap:".transparency-slider",main:".transparency-slider-wrap",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",numSlider:S.count,slidesShow:1})).init();var e=function(){document.documentElement.clientWidth<1091?ue.style||ue.addStyle():document.documentElement.clientWidth>1090&&ue.style&&ue.removeStyle()};e(),me.innerText=de.slides.length,de.main.addEventListener("sliderChange",(function(){he.innerText=de.options.position+1})),window.addEventListener("resize",e)},we=document.querySelector(".popup-repair-types-content__head-date"),Se=document.querySelector(".nav-list-popup-repair"),be=document.getElementById("switch-inner"),_e=document.querySelector(".popup-repair-types-content-table"),ge=function(e){var t="",n=!0,r=!1,i=void 0;try{for(var o,s=e.priceList[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;t+='\n      <tr class="mobile-row showHide">\n        <td class="repair-types-name">'.concat(l.typeService,'</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n        <td class="repair-types-value">').concat(l.units,'</td>\n        <td class="repair-types-value">').concat(l.cost," руб.</td>\n      </tr>\n    ")}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t},xe=function(e){!function(e){we.innerText=e}(e.shift().date),function(e){Se.innerHTML="";var t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;Se.insertAdjacentHTML("beforeend",'\n      <button class="button_o popup-repair-types-nav__item">'.concat(s,"</button>\n    "))}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}(function(e){var t=[];return e.forEach((function(e){t.push(e.title)})),t}(e)),function(e){_e.innerHTML="";var t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value;_e.insertAdjacentHTML("beforeend",'\n      <table class="popup-repair-types-content-table__list">\n        '.concat(ge(s),"\n      </table>\n    "))}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}(e),new w({main:".popup-repair-types-content-table-wrap",wrap:".popup-repair-types-content-table",tabs:".nav-list-popup-repair",classTab:"popup-repair-types-nav__item",numSlider:S.count,slidesShow:1}).init()},Le=function(){var e=event.target;e.matches("button")&&(be.innerText=e.innerText)},ke=function(){fetch("./db/db.json").then((function(e){if(200!==e.status)throw new Error(e.statusText);return e.json()}),(function(e){messageStatus.src=messages.error,console.error(e)})).then(xe),Se.addEventListener("click",Le)};function Ee(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var qe=function(){var e,t,n=document.querySelector(".popup-portfolio"),r=document.querySelector(".portfolio-slider"),i=document.querySelector("#portfolio-counter .slider-counter-content__current"),s=document.querySelector("#portfolio-counter .slider-counter-content__total"),l=document.querySelectorAll(".popup-portfolio .popup-portfolio-text"),a=function(t){var r=t.target,i=r.parentNode,s=Ee(i.children),a=Ee(i.parentNode.children),c=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");if(r.matches(".portfolio-slider__slide-frame, .item-hover")){if(r.matches(".portfolio-slider__slide-frame")){var d=2*a.indexOf(i)+s.indexOf(r);c.innerText=d+1,e.toSlide(d)}if(r.matches(".item-hover")){var u=(s=Ee(i.parentNode.children)).indexOf(i);c.innerText=u+1,e.toSlide(u)}document.querySelector(".popup-portfolio-text.active").classList.remove("active"),l[e.options.position].classList.add("active"),o(n)}};(e=new w({wrap:".popup-portfolio-slider",main:".popup-portfolio-slider-wrap",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",numSlider:S.count,slidesShow:1})).init(),new w({wrap:".portfolio-slider",main:".portfolio-slider-wrap",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",hideArrow:!0,numSlider:S.count,slidesShow:3,responsive:[{breakpoint:1030,slideToShow:3},{breakpoint:1024,slideToShow:2},{breakpoint:901,slideToShow:1}]}).init(),(t=new w({wrap:".portfolio-slider-mobile",main:".portfolio-slider-wrap",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",numSlider:S.count,slidesShow:1})).init(),document.querySelector("#popup-portfolio-counter .slider-counter-content__total").innerText=e.slides.length,s.innerText=t.slides.length,l[0].classList.add("active"),t.main.addEventListener("click",a),r.addEventListener("click",a),t.main.addEventListener("sliderChange",(function(){i.innerText=t.options.position+t.slidesShow})),e.main.addEventListener("sliderChange",(function(){var n=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");n.innerText=e.options.position+e.slidesShow,document.querySelector(".popup-portfolio-text.active").classList.remove("active"),l[e.options.position].classList.add("active"),t.toSlide(e.options.position),(n=document.querySelector("#portfolio-counter .slider-counter-content__current")).innerText=e.options.position+e.slidesShow}))};function Te(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Ae=function(){var e,t,n=document.querySelector(".designs-slider"),r=document.getElementById("designs-list"),i=document.querySelector("#designs-counter .slider-counter-content__current"),o=document.querySelector("#designs-counter .slider-counter-content__total"),s=document.querySelectorAll(".preview-block"),l=document.getElementById("designs"),a=[],c=n.children,d=!0,u=!1,p=void 0;try{for(var v,m=function(){var e=v.value,t=new w({main:".repair-types-slider",wrap:".".concat(e.className),prev:"#design_left",next:"#design_right",numSlider:S.count,slidesShow:1});t.init(),t.removeCheckSlider(),a.push(t),t.wrap.addEventListener("sliderChange",(function(){i.innerText=t.options.position+1}))},h=c[Symbol.iterator]();!(d=(v=h.next()).done);d=!0)m()}catch(e){u=!0,p=e}finally{try{d||null==h.return||h.return()}finally{if(u)throw p}}a[0].checkSlider(),(e=new w({main:".designs-slider-wrap",wrap:".designs-slider",tabs:"#designs-list",classTab:"designs-nav__item",moveSlide:"y",numSlider:S.count,slidesShow:1})).init(),r.addEventListener("click",(function(t){var n=t.target;if(n.matches(".designs-nav__item")){var l=Te(e.tabs.children),c=a[l.indexOf(n)],d=Te(r.children),u=document.querySelector(".preview-block.visible"),p=d.indexOf(n),v=!0,m=!1,h=void 0;try{for(var f,y=a[Symbol.iterator]();!(v=(f=y.next()).done);v=!0){f.value.removeCheckSlider()}}catch(e){m=!0,h=e}finally{try{v||null==y.return||y.return()}finally{if(m)throw h}}c.checkSlider(),u.classList.remove("visible"),s[p].classList.add("visible"),s[p].querySelector(".preview_active").classList.remove("preview_active"),s[p].children[c.options.position].querySelector(".preview-block__item-inner").classList.add("preview_active"),i.innerText=c.options.position+1,o.innerText=c.slides.length}})),(t=new w({wrap:"#designs-list",main:".nav-designs",prev:"#nav-arrow-designs_left",next:"#nav-arrow-designs_right",numSlider:S.count,slidesShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]})).init();var f=function(){document.documentElement.clientWidth<1025?t.style||t.addStyle():document.documentElement.clientWidth>1024?t.style&&t.removeStyle():document.documentElement.clientWidth>1024&&t.style&&(t.removeStyle(),tab.children[0].style.marginLeft=0)};f(),e.wrap.addEventListener("responseEventAfter",f);l.addEventListener("click",(function(){var e=event.target;if(e=e.closest(".preview-block__item")){var t=e.parentNode,n=Te(s).indexOf(t),r=a[n],i=Te(t.children).indexOf(e);r.toSlide(i),t.querySelector(".preview_active").classList.remove("preview_active"),e.querySelector(".preview-block__item-inner").classList.add("preview_active")}}))};r(),l(),p(),v(),m(),h(),O(),j(),N(),$(),F(),J(),U(),V(),X(),le(),ae(),ye(),ke(),qe(),Ae()}]);