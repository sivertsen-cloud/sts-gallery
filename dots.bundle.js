!function(n){var c=document.getElementById("slideshowButtons"),s=1,t="";slideshowProducts=n.slice(Math.max(n.length-9,0)).reverse(),slideshowProducts.forEach((function(n,c){c%3==0&&(s>3&&(s=1),t+='\n        <span class="dot" onclick="currentSlide('.concat(s,')"></span>\n      '),s++)}));var e="\n    ".concat(t,"\n  ");c.innerHTML=e}(products);