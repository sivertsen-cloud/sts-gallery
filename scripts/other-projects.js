const productsQuery = products.slice(Math.max(products.length - 3, 0))
console.log(productsQuery);

function otherProjects(product1, product2, product3) {
  const container = document.getElementById('other-projects');

  const htmlContent = `
    <div class="other-projects">
      <h3>
        Andre Prosjekter
        </h3>
      <div class="other-project-images">
        <img src="${product1.imageUrl}">
        <img src="${product2.imageUrl}">
        <img src="${product3.imageUrl}">
      </div>
    </div>
  `;

  container.innerHTML = htmlContent;
}

otherProjects(productsQuery["0"], productsQuery["1"], productsQuery["2"]);