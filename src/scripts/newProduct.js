const newProductQuery = products.slice(-1)[0];
// console.log(newProductQuery);
function newProduct(product) {
  const container = document.getElementById('new');

  const htmlContent = `
    <h2 class="new-headline">
      Nyhet
    </h2>
    <a href="product.html?product=${product.id}">
      <img class="new-picture"
      src="${product.imageUrl}"
      alt="">
    </a>
  `;

  container.innerHTML = htmlContent;
}

newProduct(newProductQuery);