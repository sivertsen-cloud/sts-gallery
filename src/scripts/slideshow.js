const dotsDiv = document.createElement('div');
dotsDiv.setAttribute('id', 'slideshowButtons');
const imageDots = document.createElement('div');
imageDots.classList.add('image-dots');
dotsDiv.appendChild(imageDots);

import renderGallerySlideshow from './renderGallerySlideshow';

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttons');
const imageLeftButton = document.createElement('a');
imageLeftButton.classList.add('prev');
imageLeftButton.setAttribute('onclick', "plusSlides(-1)");
imageLeftButton.textContent = "\u276E";
const imageRightButton = document.createElement('a');
imageRightButton.classList.add('next');
imageRightButton.setAttribute('onclick', "plusSlides(1)");
imageRightButton.textContent = "\u276F";

buttonDiv.appendChild(imageLeftButton);
buttonDiv.appendChild(imageRightButton);
function getRandomProducts(index) {

  // Step 1: Fetch all entries of type "product"
  client.getEntries({
    content_type: 'product',
    limit: 9, // Limit to 9 projects
  }).then(entries => {
    console.log(entries); // Log the fetched entries

    const bodyContainer = document.querySelector('#gallerySlideshow');
    bodyContainer.classList.add('gallerySlideshow');
    bodyContainer.innerHTML = '';  // Clear any existing content
    entries.items.forEach(function (product, index) {
      const productContent = renderGallerySlideshow(product, index);

      let dot;
      const adjustedIndex = index + 1
      //Create a slideshow row for each third project
      if (index % 3 === 0) {
        dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide(${adjustedIndex})`)
        if (index === 0) {
          dot.classList.add('active');
        }
        dotsDiv.appendChild(dot)
      }
      else {
        // Use the last appended row
        dot = dotsDiv.lastElementChild;
      }

      // Append the project to the body container
      bodyContainer.appendChild(productContent);
      bodyContainer.appendChild(dotsDiv);
    });

    const buttonContainer = document.querySelector('#slideshow')
    buttonContainer.appendChild(buttonDiv);

  }).catch(error => {
    console.error('Error fetching entries:', error.message);
  });

}

// Example usage
getRandomProducts();