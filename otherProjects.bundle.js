(()=>{const e=window.location.search,r=new URLSearchParams(e).get("product");products.splice(r-1,1);let n=function(e,r){if(3>r-0+1)throw new Error("Count exceeds the range of unique numbers.");let n=new Set;for(;n.size<3;){let e=Math.floor(Math.random()*(r-0+1))+0;n.add(e)}return Array.from(n)}(0,products.length-1);var t;console.log(n),function(e){const r=document.getElementById("other-projects");let n="";e.forEach((e=>{n+=`\n      <a href="product.html?product=${e.id}"><img src="${e.imageUrl}"></a>\n    `}));const t=`\n    <div class="other-projects">\n      <h3>\n        Andre Prosjekter\n      </h3>\n      <div class="other-project-images">\n        ${n}\n      </div>\n    </div>\n  `;r.innerHTML=t}((t=products,n.map((e=>t[e]))))})();