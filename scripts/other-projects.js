const productsQuery = products.slice(Math.max(products.length - 3, 0))
console.log(productsQuery);

function otherProjects(products) {
  const container = document.getElementById('other-projects');

  let productImagesHtml = '';

  products.forEach(product => {
    productImagesHtml += `
      <a href="product.html?product=${product.id}"><img src="${product.imageUrl}"></a>
    `;
  });

  const htmlContent = `
    <div class="other-projects">
      <h3>
        Andre Prosjekter
      </h3>
      <div class="other-project-images">
        ${productImagesHtml}
      </div>
    </div>
  `;

  container.innerHTML = htmlContent;
}

otherProjects(productsQuery);