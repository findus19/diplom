!function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var o=()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.getElementById("arrow"),i=document.querySelector(".header-contacts__phone-number-accord"),o=document.querySelectorAll(".header-contacts__phone-number")[1];let s=!0;e.addEventListener("click",()=>{s?(s=!1,t.style.transform="rotate(-180deg)",i.style.position="relative",o.style.opacity=1):s||(s=!0,t.style.transform="rotate(0deg)",i.style.position="absolute",o.style.opacity=0)})};const s=document.querySelectorAll(".popup"),n=e=>{e.classList.add("open_popup"),document.body.style.overflow="hidden"},r=e=>{const t=e.target;t.matches(".close, .popup")&&(e=>{e.closest(".popup").classList.remove("open_popup"),document.body.style.overflow="visible"})(t)};var l=()=>{for(const e of s)e.addEventListener("click",r)};const a=document.querySelector(".popup-thank"),c=n.bind(null,a),d=document.querySelectorAll(".feedback__form, .feedback-block__form"),p=e=>{e.preventDefault();const t=e.target,i=t.querySelector(".checkbox__input");if(console.log(123),i.checked){const e=new FormData(t);let i={};e.forEach((e,t)=>{i[t]=e}),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(i).then(e=>{if(200!==e.status)throw new Error(e.statusText);console.log(321),c()},e=>{console.log(e)}),t.reset()}else alert("Согласитесь с политикой конфиденциальности")};var u=()=>{d.forEach(e=>{const t=e.querySelector(".checkbox__input"),i=e.querySelector('[name="phone"]');t.removeAttribute("required"),i.required=!0,e.addEventListener("submit",p)})};var h=()=>{const e=document.querySelector(".popup-dialog-menu");let t=!0;document.body.addEventListener("click",i=>{let o=i.target;o.closest(".menu")&&t?(t=!1,e.classList.add("showHide-menu")):o===e||t||(t=!0,e.classList.remove("showHide-menu"))})};var m=()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const i=t.getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth",block:"start"})}))};var v=function(e="+7 (___) ___-__-__"){function t(t){const i=t.keyCode,o=e,s=o.replace(/\D/g,""),n=this.value.replace(/\D/g,"");let r=0,l=o.replace(/[_\d]/g,(function(e){return r<n.length?n.charAt(r++)||s.charAt(r):e}));r=l.indexOf("_"),-1!=r&&(l=l.slice(0,r));let a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=l),"blur"==t.type&&this.value.length<5&&(this.value="")}document.querySelectorAll('input[name="phone"]').forEach(e=>{e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})};class f{constructor({main:e,wrap:t,next:i,prev:o,tabs:s,hideArrow:n=!1,classTab:r="glo-tab",moveSlide:l="x",infinity:a=!1,position:c=0,slidesShow:d=3,responsive:p=[],numSlider:u=1}){e||t||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.first=this.slides[0],this.next=document.querySelector(i),this.prev=document.querySelector(o),this.slidesShow=d,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesShow),maxPosition:this.slides.length-this.slidesShow},this.responsive=p,this.numSlider=u,this.event=new Event("sliderChange"),this.tabEvent=new Event("tabChange"),this.tabs=document.querySelector(s),this.classTab=r,this.moveSlide=l.toUpperCase(),this.hideArrow=n,this.backcall={},this.backcall.prev={},this.backcall.next={}}init(){this.addGloClass(),this.addStyle(),this.prev||this.next||this.tabs||this.addArrow(),this.tabs?this.tabSlider():this.checkSlider(),this.lookLike()}addGloClass(){this.wrap.classList.add(`glo-slider${this.numSlider}`),this.main.classList.add("glo-wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){this.style=document.getElementById(`sliderCarousel-style${this.numSlider}`),this.style||(this.style=document.createElement("style"),this.style.id=`sliderCarousel-style${this.numSlider}`),this.style.textContent=`\n      .glo-wrap {\n        overflow: hidden;\n      }\n      .glo-wrap .glo-slider${this.numSlider} {\n        display: flex;\n        ${"Y"===this.moveSlide?"flex-wrap: wrap;":"flex-wrap: nowrap;"}\n      }\n      .glo-slider${this.numSlider} .glo-slider__item {\n        max-width: none;\n        flex: 0 0 ${this.options.widthSlide}%;\n        align-items: center;\n        margin: auto 0;\n        transition: margin .5s; \n        will-change: margin;\n        margin-top: 0;\n      }\n    `,document.head.appendChild(this.style)}removeStyle(){this.style.remove(),this.style=null}tabSlider(){const e=[...this.tabs.children];this.tabs.addEventListener("click",t=>{const i=t.target;if(!i.matches(`.${this.classTab}`))return;const o=document.querySelector(`.${this.classTab}.active`);o&&o.classList.remove("active"),i.classList.add("active"),this.toSlide(e.indexOf(i))})}checkSlider(){this.backcall.prev=this.prevSlider.bind(this),this.backcall.next=this.nextSlider.bind(this),this.prev.addEventListener("click",this.backcall.prev),this.next.addEventListener("click",this.backcall.next)}removeCheckSlider(){this.prev.removeEventListener("click",this.backcall.prev),this.next.removeEventListener("click",this.backcall.next)}toSlide(e){this.options.position=e,"Y"===this.moveSlide?this.first.style.marginTop=`calc(${this.options.position} * -100%)`:this.first.style.marginLeft=`-${this.options.position*this.options.widthSlide}%`,this.main.dispatchEvent(this.tabEvent),this.wrap.dispatchEvent(this.tabEvent)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),"Y"===this.moveSlide?this.first.style.marginTop=`-${this.options.position*this.options.widthSlide}%`:this.first.style.marginLeft=`-${this.options.position*this.options.widthSlide}%`),!this.options.infinity&&this.hideArrow&&(0===this.options.position&&this.options.position!==this.options.maxPosition?this.prev.style.display="none":(this.prev.style.display="flex",this.next.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),"Y"===this.moveSlide?this.first.style.marginTop=`-${this.options.position*this.options.widthSlide}%`:this.first.style.marginLeft=`-${this.options.position*this.options.widthSlide}%`),!this.options.infinity&&this.hideArrow&&(this.options.position===this.options.maxPosition&&0!==this.options.position?this.next.style.display="none":(this.next.style.display="flex",this.prev.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n      }\n\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:hover,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(e)}lookLike(){const e=this.slidesShow,t=this.responsive.map(e=>e.breakpoint),i=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<i)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesShow),this.addStyle());else this.slidesShow=e,this.options.widthSlide=Math.floor(100/this.slidesShow),this.addStyle()};o(),window.addEventListener("resize",o)}}const y={num:0,get count(){return this.num++,this.num}},S=document.querySelector(".popup-repair-types"),w=document.querySelector(".repair-types-slider"),_=document.querySelector(".link-list-menu .menu-link"),b=document.querySelector(".repair-types .repair-types-tab"),g=document.querySelector("#repair-counter .slider-counter-content__current"),x=document.querySelector("#repair-counter .slider-counter-content__total");let L,E,k=[];const q=e=>{const{target:t}=e;if(t.matches(".link-list-repair a")&&n(S),!t.matches(".repair-types-nav__item "))return;for(const e of k)e.removeCheckSlider();const i=[...L.tabs.children],o=k[i.indexOf(t)];o.checkSlider(),g.innerText=o.options.position+1,x.innerText=o.slides.length};var T=()=>{_.addEventListener("click",n.bind(null,S)),b.addEventListener("click",q),(()=>{const e=w.children;for(const t of e){const e=new f({main:".repair-types-slider",wrap:`.${t.className}`,prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",numSlider:y.count,slidesShow:1});e.init(),e.removeCheckSlider(),k.push(e),e.wrap.addEventListener("sliderChange",()=>{g.innerText=e.options.position+1})}k[0].checkSlider(),L=new f({main:".repair-types-slider-wrap",wrap:".repair-types-slider",tabs:".nav-list-repair",classTab:"repair-types-nav__item",moveSlide:"y",numSlider:y.count,slidesShow:1}),L.init(),E=new f({wrap:".nav-list-repair",main:".repair-types-nav",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",numSlider:y.count,slidesShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}),E.init();const t=()=>{document.documentElement.clientWidth<1025?E.style||E.addStyle():document.documentElement.clientWidth>1024&&E.style&&E.removeStyle()};t(),window.addEventListener("resize",t)})()};var C=()=>{const e=document.querySelector(".popup-privacy");document.querySelectorAll(".link-privacy").forEach(t=>{t.addEventListener("click",n.bind(null,e))})};const $=document.querySelector(".formula .wrapper_small"),A=e=>{const t=e.target;if(!t.matches(".formula-item__icon-inner-text"))return;const i=t.previousElementSibling.previousElementSibling;"mouseout"===e.type?(e=>{const t=e.closest(".formula-item");e.classList.remove("tooltip_reverse"),t.classList.remove("formula-item_cover")})(i):(e=>{if(e.getBoundingClientRect().y<0){const t=e.closest(".formula-item");e.classList.add("tooltip_reverse"),t.classList.add("formula-item_cover")}})(i)};var O=()=>{$.addEventListener("mouseover",A),$.addEventListener("mouseout",A)};const j=document.querySelector(".formula-slider-wrap"),M=document.querySelector(".formula-slider"),P=document.getElementsByClassName("formula-slider__slide"),N="formula-prev-slide",B=()=>document.documentElement.clientWidth<768?1:3;let H=B();B();const W=()=>M.insertBefore(P[P.length-1],P[0]),D=()=>{H=B();for(const e of P)3===H?e.classList.remove("formula-one-slide"):e.classList.add("formula-one-slide")},z=e=>{const t=e.target;t.closest("#formula-arrow_right")?(()=>{M.appendChild(P[0]).classList.remove(N),P[0].classList.add(N);let e=P[0],t=P[1];3===H&&(e=P[1],t=P[2]),e.classList.remove("formula-slider_active"),t.classList.add("formula-slider_active")})():t.closest("#formula-arrow_left")&&(()=>{P[0].classList.remove(N);let e=P[1],t=P[0];3===H&&(t=P[1],e=P[2]),t.classList.add("formula-slider_active"),e.classList.remove("formula-slider_active"),W().classList.add(N)})()};var I=()=>{(()=>{W(),3===H&&W(),P[0].classList.add(N);let e=P[1];for(const e of P)1===H&&e.classList.add("formula-one-slide");3===H&&(e=P[2]),e.classList.add("formula-slider_active")})(),j.addEventListener("click",z),window.addEventListener("resize",D)};var Y=()=>{new f({wrap:".partners-slider",main:"#partners .wrapper",prev:"#partners-arrow_left",next:"#partners-arrow_right",numSlider:y.count,slidesShow:3,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()};var R=()=>{new f({wrap:".reviews-slider",main:".reviews-slider-wrap",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",numSlider:y.count,slidesShow:1}).init()};var G=()=>{const e=document.querySelector(".popup-consultation");document.querySelectorAll(".button_wide").forEach(t=>{t.addEventListener("click",n.bind(null,e))})};var F=()=>{const e=new f({main:".scheme-slider-wrap",wrap:".scheme-slider",tabs:"#scheme-list",classTab:"scheme-nav__item",numSlider:y.count,slidesShow:1});e.init(),e.main.addEventListener("tabChange",()=>{const t=e.main.querySelectorAll(".scheme-description-block");e.main.querySelector(".scheme-description-block.visible-content-block").classList.remove("visible-content-block"),t.item(e.options.position).classList.add("visible-content-block")})};const J=document.querySelector(".problems .wrapper_middle"),U=e=>{const t=e.target;if(!t.matches(".svg-wrap"))return;const i=t.previousElementSibling.previousElementSibling;"mouseout"===e.type?(e=>{const t=e.closest(".problems-item");e.classList.remove("tooltip_reverse"),t.classList.remove("problems-item_cover")})(i):(e=>{if(e.getBoundingClientRect().y<0){const t=e.closest(".problems-item");e.classList.add("tooltip_reverse"),t.classList.add("problems-item_cover")}})(i)};var V=()=>{J.addEventListener("mouseover",U),J.addEventListener("mouseout",U)};var K=()=>{const e=document.querySelector(".accordion ul");e.addEventListener("click",()=>{const t=event.target,i=e.querySelector(".msg-active");t.matches(".title_block")&&(t.classList.contains("msg-active")||t.classList.add("msg-active"),i&&i.classList.remove("msg-active"))})};const Q=document.querySelector(".popup-transparency"),X=document.querySelector(".transparency-slider"),Z=Q.querySelector(".slider-counter-content__total"),ee=Q.querySelector(".slider-counter-content__current");let te,ie;const oe=()=>{const e=event.target;if(!e.matches(".transparency-item__img"))return;const t=e.parentNode,i=[...X.children];te.toSlide(i.indexOf(t)),ee.innerText=te.options.position+1,n(Q)};var se=()=>{X.addEventListener("click",oe),te=new f({wrap:".popup-transparency-slider",main:".popup-transparency-slider-wrap",prev:"#transparency_left",next:"#transparency_right",numSlider:y.count,slidesShow:1}),te.init(),ie=new f({wrap:".transparency-slider",main:".transparency-slider-wrap",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",numSlider:y.count,slidesShow:1}),ie.init();const e=()=>{document.documentElement.clientWidth<1091?ie.style||ie.addStyle():document.documentElement.clientWidth>1090&&ie.style&&ie.removeStyle()};e(),Z.innerText=te.slides.length,te.main.addEventListener("sliderChange",()=>{ee.innerText=te.options.position+1}),window.addEventListener("resize",e)};const ne=document.querySelector(".popup-repair-types-content__head-date"),re=document.querySelector(".nav-list-popup-repair"),le=document.getElementById("switch-inner"),ae=document.querySelector(".popup-repair-types-content-table"),ce=e=>{let t="";for(const i of e.priceList)t+=`\n      <tr class="mobile-row showHide">\n        <td class="repair-types-name">${i.typeService}</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n        <td class="repair-types-value">${i.units}</td>\n        <td class="repair-types-value">${i.cost} руб.</td>\n      </tr>\n    `;return t},de=e=>{(e=>{ne.innerText=e})(e.shift().date),(e=>{re.innerHTML="";for(const t of e)re.insertAdjacentHTML("beforeend",`\n      <button class="button_o popup-repair-types-nav__item">${t}</button>\n    `)})((e=>{const t=[];return e.forEach(e=>{t.push(e.title)}),t})(e)),(e=>{ae.innerHTML="";for(const t of e)ae.insertAdjacentHTML("beforeend",`\n      <table class="popup-repair-types-content-table__list">\n        ${ce(t)}\n      </table>\n    `)})(e),new f({main:".popup-repair-types-content-table-wrap",wrap:".popup-repair-types-content-table",tabs:".nav-list-popup-repair",classTab:"popup-repair-types-nav__item",numSlider:y.count,slidesShow:1}).init()},pe=()=>{const e=event.target;e.matches("button")&&(le.innerText=e.innerText)};var ue=()=>{fetch("./db/db.json").then(e=>{if(200!==e.status)throw new Error(e.statusText);return e.json()},e=>{messageStatus.src=messages.error,console.error(e)}).then(de),re.addEventListener("click",pe)};var he=()=>{const e=document.querySelector(".popup-portfolio"),t=document.querySelector(".portfolio-slider"),i=document.querySelector("#portfolio-counter .slider-counter-content__current"),o=document.querySelector("#portfolio-counter .slider-counter-content__total"),s=document.querySelectorAll(".popup-portfolio .popup-portfolio-text");let r,l,a;const c=t=>{let{target:i}=t,o=i.parentNode,r=[...o.children],a=[...o.parentNode.children],c=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");if(!i.matches(".portfolio-slider__slide-frame, .item-hover"))return;if(i.matches(".portfolio-slider__slide-frame")){let e=2*a.indexOf(o)+r.indexOf(i);c.innerText=e+1,l.toSlide(e)}if(i.matches(".item-hover")){r=[...o.parentNode.children];let e=r.indexOf(o);c.innerText=e+1,l.toSlide(e)}document.querySelector(".popup-portfolio-text.active").classList.remove("active"),s[l.options.position].classList.add("active"),n(e)};l=new f({wrap:".popup-portfolio-slider",main:".popup-portfolio-slider-wrap",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",numSlider:y.count,slidesShow:1}),l.init(),r=new f({wrap:".portfolio-slider",main:".portfolio-slider-wrap",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",hideArrow:!0,numSlider:y.count,slidesShow:3,responsive:[{breakpoint:1030,slideToShow:3},{breakpoint:1024,slideToShow:2},{breakpoint:901,slideToShow:1}]}),r.init(),a=new f({wrap:".portfolio-slider-mobile",main:".portfolio-slider-wrap",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",numSlider:y.count,slidesShow:1}),a.init(),document.querySelector("#popup-portfolio-counter .slider-counter-content__total").innerText=l.slides.length,o.innerText=a.slides.length,s[0].classList.add("active"),a.main.addEventListener("click",c),t.addEventListener("click",c),a.main.addEventListener("sliderChange",()=>{i.innerText=a.options.position+a.slidesShow}),l.main.addEventListener("sliderChange",()=>{let e=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");e.innerText=l.options.position+l.slidesShow,document.querySelector(".popup-portfolio-text.active").classList.remove("active"),s[l.options.position].classList.add("active"),a.toSlide(l.options.position),e=document.querySelector("#portfolio-counter .slider-counter-content__current"),e.innerText=l.options.position+l.slidesShow})};o(),l(),u(),h(),m(),v(),T(),C(),O(),I(),Y(),R(),G(),F(),V(),K(),se(),ue(),he()}]);