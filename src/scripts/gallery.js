// const productQuery = (products.find(x => x.id === productID))
// const imageQuery = (products.find(x => x.id === productID).images)

function displayProduct(products) {
  const container = document.getElementById('gallery-content');
  let items = ``;
  galleryProducts = products.reverse();
  galleryProducts.forEach(function (product, index) {
    if ((index % 3) == 0) items += '<div class="gallery-row">';

    items += `
      <div class="project-container">
        <a href="product.html?product=${product.id}">
          <img
            src="${product.imageUrl}">
          <div class="text">${product.category}</div>
        </a>
      </div>
    `;

    if ((index % 3) == 2) items += '</div>';
  });

  const htmlContent = `
    ${items}
  `;

  container.innerHTML = htmlContent;
}

displayProduct(products);