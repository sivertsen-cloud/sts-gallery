import renderOtherProjects from './renderOtherProjects';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product');

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

function getColumns() {
    const width = window.innerWidth;
    if (width <= 576) return 1;        // Mobile
    if (width <= 992) return 2;        // Tablet  
    return 3;                          // Desktop
}

const columns = getColumns();

function getRandomProducts(productID) {
  // Step 1: Fetch all entries of type "product" excluding the one with the specified productID
  client.getEntries({
    content_type: 'product', // Replace 'product' with your content type ID
    'fields.productId[ne]': productID, // Exclude the product with the specified productID
    limit: 100, // Increase limit if you have a large number of products (default is 100)
  }).then(entries => {
    console.log(entries); // Log the fetched entries

    // Step 2: Randomly shuffle the entries
    let products = entries.items;
    products = shuffleArray(products);

    // Step 3: Select the first three products after shuffling
    const selectedProducts = products.slice(0, columns);

    const bodyContainer = document.querySelector('#other-projects');
    bodyContainer.classList.add('other-projects','container');
    const title = document.createElement("h3");
    title.textContent = "Andre Prosjekter";
    title.classList.add('mb-5')
    bodyContainer.innerHTML = '';  // Clear any existing content
    bodyContainer.appendChild(title);
    selectedProducts.forEach(function (product, index) {
      const productContent = renderOtherProjects(product, index);

      // Append the project to the body container
      bodyContainer.appendChild(productContent);
    });

  }).catch(error => {
    console.error('Error fetching entries:', error.message);
  });
}

// Utility function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example usage
getRandomProducts(productID);