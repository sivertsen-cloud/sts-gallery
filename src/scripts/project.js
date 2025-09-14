import renderProductComponent from './render/renderProductComponent';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product')

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});
if (productID) {
  console.log('Product ID is set:', productID);
  client.getEntries({
    content_type: 'product',      // Replace 'product' with your content type ID
    'fields.productId': productID         // Replace 'productId' with the field ID you're querying
  }).then((entry) => {
    console.log(entry);

    const productContainer = document.querySelector('#product-container');
    productContainer.innerHTML = '';  // Clear any existing content
    const productTitle = document.createElement('h2')
    productTitle.classList.add('mb-5')
    productTitle.textContent = entry.items[0].fields.name;

    productContainer.appendChild(productTitle)

    // const bodyContainer = document.querySelector('#product-body');
    // bodyContainer.innerHTML = '';  // Clear any existing content

    entry.items.forEach(product => {
      const productContent = renderProductComponent(product);
      console.log('Rendered Element:', productContent);  // Debugging output

      // Append the duplex component to the body container
      productContainer.appendChild(productContent);
    });


  })
    .catch(err => console.error(err));
}
else {
  console.log('Product ID is not set.');
  window.location.href("/");
}