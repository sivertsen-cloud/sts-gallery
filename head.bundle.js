(()=>{"use strict";var n={159:(n,t,e)=>{e.d(t,{A:()=>s});var i=e(601),o=e.n(i),a=e(314),r=e.n(a)()(o());r.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  font-family: Montserrat;\n}\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n}\n\nheader {\n  max-height: 50px;\n  width: 100%;\n  background: #CED6CB;\n  justify-content: center;\n  display: flex;\n}\n\nfooter {\n  max-height: 189px;\n  width: 100%;\n  background: #724614;\n  justify-content: center;\n  display: flex;\n  height: 100px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  /* height: 100%; */\n}\n\nmain {\n  flex: 1;\n  background: #FFF9F3;\n  padding: 64px 0 24px 0;\n  text-align: center;\n  /* overflow-y: auto; Makes main content scrollable if content overflows */\n}\n\n.logo {\n  width: 100%;\n  margin: auto;\n}\n\n.logo a h2 {\n  display: inline-flex;\n  height: 100%;\n  margin: auto;\n  padding: 0px 20px;\n  font-family: "EB Garamond";\n}\n\n.logo img {\n  width: 40px;\n}\n\nnav {\n  max-width: 1280px;\n  justify-content: right;\n  display: inline-flex;\n  width: 100%;\n  margin: auto;\n}\n\n.navigation-bar {\n  max-width: 1280px;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n\nnav a {\n  font-size: 24px;\n  padding: 0px 40px 0 0;\n}\n\n.logo-link {\n  height: 100%;\n  display: inline-flex;\n}\n\n.footer {\n  max-width: 1280px;\n  width: 100%;\n  margin: auto;\n  display: inline-flex;\n}\n\n.footer img {\n  height: 90px;\n  filter: brightness(0) invert(1);\n}\n\na:link {\n  text-decoration: none;\n}\na:visited {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\n\nbody::-webkit-scrollbar {\n  display: none;\n}\n\na:-webkit-any-link {\n  text-decoration: none;\n  color: #000;\n}\n\nmain h2 {\n  font-size: 60px;\n  text-align: left;\n}\n\n.main-content {\n  max-width: 900px;\n  width: 100%;\n  margin: auto;\n}\n\n.new {\n  margin: auto;\n}\n\n.new-picture {\n  width: 618px;\n  height: 380px;\n}\n\n.new-headline {\n  text-align: left;\n}\n\n.slideshow {\n  max-width: 834px;\n  width: 100%;\n  position: relative;\n  margin: auto;\n  display: inline-flex;\n}\n\n.slideshow img {\n  max-height: 300px;\n}\n\n/* Hide the images by default */\n.gallery-image {\n  display: none;\n}\n\n.gallery-image img {\n  max-width: 256px;\n  height: 200px;\n}\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  color: white;\n  background: #8F5F2AB0;\n  border-radius: 12px;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: #8F5F2AB0(0,0,0,0.8);\n}\n\n/* Caption text */\n.text {\n  color: #fff;\n  font-size: 36px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: left;\n  text-transform: capitalize;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 7.5px;\n  width: 7.5px;\n  margin: 0 2px;\n  background-color: #DDAE7B;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #8F5F2A;\n  height: 15px;\n  width: 15px;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n.buttons {\n  justify-content: space-between;\n  display: inline-flex;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  left: 0;\n}\n\n.gallery {\n  position: relative;\n}\n\n.project-container {\n  position: relative;\n  height: 100%;\n}\n\n.footer-logo {\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n}\n\n.contact-list-icons {\n  list-style-type: none;\n  padding: 0;\n  display: inline-flex;\n  justify-content: right; /* Center the icons horizontally */\n  width: 100%;\n  align-items: center;\n}\n\n.contact-list-icons li {\n  margin-right: 10px; /* Add some spacing between icons */\n}\n\n.contact-list-icons a {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: bold;\n  border-radius: 20px;\n  padding: 5px 10px;\n  transition: background-color 0.3s ease;\n}\n\n.contact-list-icons a:hover {\n  background-color: #ddd;\n}\n\n.contact-list-icons i {\n  margin-right: 5px;\n  font-size: 1.5rem;\n}\n\n.contact {\n  max-width: 1280px;\n  text-align: left;\n  margin: auto;\n}\n\n.contact-info {\n  display: inline-flex;\n  width: 100%;\n}\n\n.gallery-content {\n  max-width: 840px;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.gallery-row {\n  display: inline-flex;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 200px;\n  padding: 0 0 32px 0;\n}\n\n.gallery-row .project-container img {\n  width: 256px;\n  height: 200px;\n}\n\n.contact-information {\n  width: 660px;\n  height: 266px;\n  border-radius: 2px;\n  background: var(--Gray-1, #FEFEFE);\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);\n  \n}\n\n.contact-information i,p {\n  width: 100%;\n  text-align: left;\n}\n\n.contact-information i {\n  font-size: 24px;\n  display: inline-flex;\n  align-items: center;\n  padding: 16px 0px 16px 32px;\n}\n\n.contact-information i p {\n  font-size: 36px;\n  padding: 0px 0px 0px 9px;\n}\n\n.contact-information p {\n  font-size: 24px;\n  padding: 0px 0px 0px 32px;\n}\n\n#product-container {\n  text-align: center;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n#other-projects {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n#product-container img {\n  max-width: 100%;\n  width: 617px;\n  height: 280px;\n}\n\n.product-images {\n  display: none;\n}\n\n.product-images img {\n  max-width: 200px;\n  height: 256px;\n}\n\n.product-slideshow {\n  max-width: 700px;\n  max-height: 380px;\n  width: 100%;\n  position: relative;\n  margin: auto;\n  display: inline-flex;\n}\n\n.product-slideshow img {\n  max-height: 300px;\n}\n\n.product-gallery {\n  position: relative;\n  width: 700px;\n}\n\n.product-slideshow .buttons {\n  width: 700px;\n}\n\n.product-description {\n  width: 660px;\n  height: 185px;\n  flex-shrink: 0;\n  border-radius: 2px;\n  background: var(--Gray-1, #FEFEFE);\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);\n  \n}\n\n.product-description h2 {\n  font-size: 24px;\n}\n\n.other-projects h3 {\n  font-size: 36px;\n}\n\n.other-projects {\n  width: 768px;\n}\n\n.other-project-images{\n  width: 100%;\n  justify-content: space-between;\n  display: inline-flex;\n}\n\n.other-projects img {\n  width: 224px;\n  height: 190px;\n}',""]);const s=r},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(r[p]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},r=[],s=0;s<n.length;s++){var p=n[s],c=i.base?p[0]+i.base:p[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var h=e(d),x={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==h)t[h].references++,t[h].updater(x);else{var f=o(x,i);i.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=e(a[r]);t[s].references--}for(var p=i(n,o),c=0;c<a.length;c++){var l=e(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=p}}},659:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var i=e(72),o=e.n(i),a=e(825),r=e.n(a),s=e(659),p=e.n(s),c=e(56),l=e.n(c),d=e(540),h=e.n(d),x=e(113),f=e.n(x),u=e(159),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=p().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=h(),o()(u.A,g),u.A&&u.A.locals&&u.A.locals,document.write('  <head>     <meta charset="UTF-8">     <meta name="viewport" content="width=device-width, initial-scale=1.0">     <title>Sivertsen 3Design</title>     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">     <link href="https://fonts.googleapis.com/css?family=EB Garamond" rel="stylesheet">     <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">     <script type="text/javascript" src="products.bundle.js"><\/script>     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js"><\/script>     <script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"><\/script>   </head> ')})();