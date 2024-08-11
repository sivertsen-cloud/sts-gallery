import renderGallery from './renderGallery';

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

client.getEntries({
  content_type: 'product',      // Replace 'product' with your content type ID
}).then((entry) => {
    console.log(entry);

    const bodyContainer = document.querySelector('#gallery');
    bodyContainer.innerHTML = '';  // Clear any existing content

    entry.items.forEach(function(product, index) {
      const productContent = renderGallery(product, index);
      console.log('Rendered Element:', productContent);  // Debugging output

      // Append the project to the body container
      bodyContainer.appendChild(productContent);
    });


  })
  .catch(err => console.error(err));