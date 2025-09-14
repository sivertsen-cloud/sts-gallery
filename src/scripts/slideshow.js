const slideshowIndicator = document.createElement('div');
slideshowIndicator.setAttribute('id', 'slideshowIndicator');
slideshowIndicator.classList.add('carousel-indicators')

import renderGallerySlideshow from './renderGallerySlideshow';

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,      // Space ID from environment variables
  accessToken: process.env.CONTENTFUL_API_KEY  // API Key from environment variables
});

// const buttonDiv = document.createElement('div');
// buttonDiv.classList.add('buttons');

// const imageLeftButton = document.createElement('a');
// imageLeftButton.classList.add('carousel-control-prev','bg-accent');
// // imageLeftButton.setAttribute('onclick', "plusSlides(-1)");
// imageLeftButton.textContent = "\u276E";
// buttonDiv.appendChild(imageLeftButton);

// CREATE SLIDESHOW NAVIGATION BUTTONS

// LEFT

const LeftButton = document.createElement('button');
LeftButton.classList.add('carousel-control-prev');
LeftButton.setAttribute('type','button');
LeftButton.setAttribute('data-bs-target', `#gallerySlideshow`);
LeftButton.setAttribute('data-bs-slide', 'prev');

const LeftButtonIcon = document.createElement('span');
LeftButtonIcon.classList.add('carousel-control-prev-icon');
LeftButtonIcon.classList.add('rounded-circle');
LeftButton.appendChild(LeftButtonIcon);

const LeftButtonText = document.createElement('span');
LeftButtonText.classList.add('visually-hidden');
LeftButtonText.textContent = "Previous";
LeftButton.appendChild(LeftButtonText);



// RIGHT

const RightButton = document.createElement('button');
RightButton.classList.add('carousel-control-next');
RightButton.setAttribute('type','button');
RightButton.setAttribute('data-bs-target', `#gallerySlideshow`);
RightButton.setAttribute('data-bs-slide', 'next');

const RightButtonIcon = document.createElement('span');
RightButtonIcon.classList.add('carousel-control-next-icon');
RightButtonIcon.classList.add('rounded-circle');
RightButton.appendChild(RightButtonIcon);

const RightButtonText = document.createElement('span');
RightButtonText.classList.add('visually-hidden');
RightButtonText.textContent = "Next";
RightButton.appendChild(RightButtonText);

// buttonDiv.appendChild(RightButton);

// CREATE SLIDESHOW NAVIGATION BUTTONS

// const imageRightButton = document.createElement('a');
// imageRightButton.classList.add('carousel-control-next','bg-accent');
// // imageRightButton.setAttribute('onclick', "plusSlides(1)");
// imageRightButton.textContent = "\u276F";
// buttonDiv.appendChild(imageRightButton);

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

    let indicators=0

    entries.items.forEach(function (product, index) {
      const productContent = renderGallerySlideshow(product, index);

      let dot;
      const adjustedIndex = index + 1
      //Create a slideshow row for each third project
      if (index % 3 === 0) {
        dot = document.createElement('button');
        // dot.classList.add('dot');
        dot.setAttribute('data-bs-target', `#gallerySlideshow`)
        dot.setAttribute('data-bs-slide-to', indicators)
        dot.setAttribute('type','button')
        indicators++;
        if (index === 0) {
          dot.classList.add('active');
        }
        slideshowIndicator.appendChild(dot)
      }
      else {
        // Use the last appended row
        dot = slideshowIndicator.lastElementChild;
      }

      // Append the project to the body container
      bodyContainer.appendChild(productContent);
    });
    bodyContainer.appendChild(slideshowIndicator);

    const buttonContainer = document.querySelector('#gallerySlideshow')
    buttonContainer.appendChild(LeftButton);
    buttonContainer.appendChild(RightButton);

  }).catch(error => {
    console.error('Error fetching entries:', error.message);
  });

}

// Example usage
getRandomProducts();