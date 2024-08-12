const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

const container = document.querySelector("#new");

const title = document.createElement('h2');
title.classList.add("new-headline");
title.textContent = "Nyhet";
container.appendChild(title);

async function newProduct(product) {
  try {
    // Fetch the newest product by ordering by createdAt in descending order
    const entries = await client.getEntries({
      content_type: 'product', // Replace 'product' with your content type ID
      order: '-sys.createdAt', // Order by createdAt in descending order
      limit: 1 // Limit the result to only the newest item
    });
    // Check if any entries were found
    if (entries.items.length > 0) {
      const newestProduct = entries.items[0];
      console.log('Newest product:', newestProduct);

      project = document.createElement('a');
      project.setAttribute('href', `project.html?product=${newestProduct.fields.productId}`);

      projectImage = document.createElement('img');
      projectImage.classList.add("new-picture");
      projectImage.setAttribute('src', `https:${newestProduct.fields.mainPicture.fields.file.url}`);

      project.appendChild(projectImage);
      container.appendChild(project);

      return newestProduct;
    } else {
      console.log('No products found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching the newest product:', error.message);
  }
}

newProduct();