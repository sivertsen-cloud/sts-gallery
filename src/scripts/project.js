import renderProductComponent from './renderProductComponent';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product')

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

client.getEntries({
  content_type: 'product',      // Replace 'product' with your content type ID
  'fields.productId': productID         // Replace 'productId' with the field ID you're querying
}).then((entry) => {
    console.log(entry);

    const pageTitle = document.querySelector('#product-title');
    pageTitle.textContent = entry.items[0].fields.name;

    const bodyContainer = document.querySelector('#product-body');
    bodyContainer.innerHTML = '';  // Clear any existing content

    entry.items.forEach(product => {
      const productContent = renderProductComponent(product);
      console.log('Rendered Element:', productContent);  // Debugging output

      // Append the duplex component to the body container
      bodyContainer.appendChild(productContent);
    });


  })
  .catch(err => console.error(err));