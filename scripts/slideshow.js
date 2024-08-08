function slideshow(products) {
  const container = document.getElementById('slideshow');
  let items = ``
  slideshowProducts = products.slice(Math.max(products.length - 9, 0))
  slideshowProducts.forEach(function (product, index) {
    if ((index % 3) == 0) items += '<div class="gallery-image fade">';

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

slideshow(products);