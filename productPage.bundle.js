(()=>{var n=window.location.search,c=new URLSearchParams(n).get("product"),t=products.find((function(n){return n.id===c}));function i(n){document.getElementById("product-images");var c="",t="",i="",e="1";return n.images.forEach((function(a){c+='\n    <div class="product-images fade">\n      <div class="project-container">\n        <img src="'.concat(a,'" alt="').concat(n.name,'">\n      </div>\n    </div>\n    '),t+='\n      <img src="'.concat(a,'" alt="').concat(n.name,'" onclick="currentSlide(').concat(e,')" style="width: 90px; height: 70px; margin: 10px;">\n    '),i+='\n      <span class="dot" onclick="currentSlide('.concat(e,')"></span>\n    '),e++})),{imageSlideHtml:c,imagesHtml:t,dotsHtml:i}}products.find((function(n){return n.id===c})).images,function(n,c,t,i){var e=document.getElementById("product-container"),a="\n    <h2>".concat(n.name,'</h2>\n    <div class="product-gallery">\n    <div class="product-slideshow">\n\n    <div id="product-images"></div>\n      ').concat(c,'\n      \x3c!-- Next and previous buttons --\x3e\n      <div class="buttons">\n        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>\n        <a class="next" onclick="plusSlides(1)">&#10095;</a>\n      </div>\n    </div>\n\n    \x3c!-- The dots/circles --\x3e\n    <div style="text-align:center">\n      ').concat(i,'\n    </div>\n\n    <div id="product-images"></div>\n      ').concat(t,'\n    </div>\n    <div class="product-description">\n      <h2>Beskrivelse</h2>\n      <p>').concat(n.description,"</p>\n      <p>\n        Materiale:\n        <p>\n          ").concat(n.material,"\n        </p>\n      </p>\n      <p>\n        Produsert:\n        <p>\n          ").concat(n.productionDate,"\n        </p>\n      </p>\n      <p>\n        Kategori:\n        <p>\n          ").concat(n.category,"\n        </p>\n      </p>\n    </div>\n  ");e.innerHTML=a}(t,i(t).imageSlideHtml,i(t).imagesHtml,i(t).dotsHtml)})();