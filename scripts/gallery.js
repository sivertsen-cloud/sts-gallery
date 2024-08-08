// const productQuery = (products.find(x => x.id === productID))
// const imageQuery = (products.find(x => x.id === productID).images)

function displayProduct(products) {
  const container = document.getElementById('gallery-content');
  let items = ``
  console.log(products);
  products.forEach(function (product, index) {
    if ((index % 3) == 0) items += '<div class="gallery-row">';

    items += `
      <div class="project-container">
        <img
          src="${product.imageUrl}">
        <div class="text">bord</div>
      </div>
    `;

    if ((index % 3) == 2) items += '</div>';
    console.log(`${index}`)
  });

  const htmlContent = `
    ${items}
  `;

  container.innerHTML = htmlContent;
}

displayProduct(products);