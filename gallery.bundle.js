!function(n){const t=document.getElementById("gallery-content");let e="";galleryProducts=n.reverse(),galleryProducts.forEach((function(n,t){t%3==0&&(e+='<div class="gallery-row">'),e+=`\n      <div class="project-container">\n        <a href="product.html?product=${n.id}">\n          <img\n            src="${n.imageUrl}">\n          <div class="text">${n.category}</div>\n        </a>\n      </div>\n    `,t%3==2&&(e+="</div>")}));const r=`\n    ${e}\n  `;t.innerHTML=r}(products);