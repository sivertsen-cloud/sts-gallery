//Remove current product from array
products.splice(productID-1, 1);

function getRandomProducts(min, max, count) {
  // Ensure count does not exceed the range of unique numbers
  if (count > (max - min + 1)) {
    throw new Error("Count exceeds the range of unique numbers.");
  }

  let uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNum);
  }

  return Array.from(uniqueNumbers);
}

// Get 3 unique random products
let randomProducts = getRandomProducts(0, products.length-1, 3);
console.log(randomProducts);

function pickProductsFromArray(array, indices) {
  return indices.map(index => array[index]);
}

// const otherProductsQuery = products.slice(Math.max(products.length - 3, 0));

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

otherProjects(pickProductsFromArray(products, randomProducts));