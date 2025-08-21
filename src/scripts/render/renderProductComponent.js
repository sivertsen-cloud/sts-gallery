
function renderProductComponent(product) {
  // require('../styles/productPage.css');
  const container = document.createElement('div');

  const slideshow = document.createElement('div');
  slideshow.id = 'productCarousel';
  slideshow.classList.add('product-component');
  slideshow.classList.add('carousel');
  slideshow.classList.add('slide');

  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }



  // Add the headline
  if (product.fields.headline) {
    const headline = document.createElement('h2');
    headline.textContent = product.fields.headline;
    headline.classList.add('product-headline');
    container.appendChild(headline);
  }

  // const contentContainer = document.createElement('div');

  //Create Product Gallery Slideshow
  // const imageGallery = document.createElement('div');
  // imageGallery.classList.add('product-gallery');
  // imageGallery.classList.add('row');

  const imageSlideshow = document.createElement('div');
  imageSlideshow.classList.add('product-slideshow');
  imageSlideshow.classList.add('row');
  // imageSlideshow.classList.add('justify-content-center');
  imageSlideshow.classList.add('carousel-inner');
  
// CREATE SLIDESHOW NAVIGATION BUTTONS

// LEFT

const LeftButton = document.createElement('button');
LeftButton.classList.add('carousel-control-prev');
LeftButton.setAttribute('type','button');
LeftButton.setAttribute('data-bs-target', `#productCarousel`);
LeftButton.setAttribute('data-bs-slide', 'prev');

const LeftButtonIcon = document.createElement('span');
LeftButtonIcon.classList.add('carousel-control-prev-icon');
LeftButton.appendChild(LeftButtonIcon);

const LeftButtonText = document.createElement('span');
LeftButtonText.classList.add('visually-hidden');
LeftButtonText.textContent = "Previous";
LeftButton.appendChild(LeftButtonText);



// RIGHT

const RightButton = document.createElement('button');
RightButton.classList.add('carousel-control-next');
RightButton.setAttribute('type','button');
RightButton.setAttribute('data-bs-target', `#productCarousel`);
RightButton.setAttribute('data-bs-slide', 'next');

const RightButtonIcon = document.createElement('span');
RightButtonIcon.classList.add('carousel-control-next-icon');
RightButton.appendChild(RightButtonIcon);

const RightButtonText = document.createElement('span');
RightButtonText.classList.add('visually-hidden');
RightButtonText.textContent = "Next";
RightButton.appendChild(RightButtonText);

// CREATE SLIDESHOW NAVIGATION BUTTONS  


  // const imageDots = document.createElement('div');
  // imageDots.classList.add('image-dots');
  // imageDots.classList.add('row');

  // const imagePreview = document.createElement('div');
  // imagePreview.classList.add('product-image-preview');
  // imagePreview.classList.add('row');

  // const buttonDiv = document.createElement('div');
  // buttonDiv.classList.add('buttons');
  // const imageLeftButton = document.createElement('a');
  // imageLeftButton.classList.add('prev');
  // imageLeftButton.setAttribute('onclick', "plusSlides(-1)");
  // imageLeftButton.textContent = "\u276E";
  // const imageRightButton = document.createElement('a');
  // imageRightButton.classList.add('next');
  // imageRightButton.setAttribute('onclick', "plusSlides(1)");
  // imageRightButton.textContent = "\u276F";

  // buttonDiv.appendChild(imageLeftButton);
  // buttonDiv.appendChild(imageRightButton);

  
  // SLIDESHOW INDICATOR
  let indicator;
  let indicatorImage;
  let indicators = 0;
  const slideshowIndicator = document.createElement('div');
  slideshowIndicator.setAttribute('id', 'slideshowIndicator');
  slideshowIndicator.classList.add('carousel-indicators')
  slideshowIndicator.setAttribute('style', 'position: static;')

  // Add the images
  if (product.fields.allPictures) {
    product.fields.allPictures.forEach(function (picture, index) {
      let adjustedIndex = index + 1;
      //Create slideshow divider
      const slideshowImg = document.createElement('div');
      slideshowImg.classList.add('product-images');
      slideshowImg.classList.add('fades3d');
      // slideshowImg.classList.add('col');
      slideshowImg.classList.add('carousel-item');
      if (index == 0) {
        // slideshowImg.setAttribute('style', 'display: inline-flex; justify-content: center; width: 200px;');
        slideshowImg.classList.add('active');
      }
      //Add images to slideshow
      const img = document.createElement('img');
      img.src = normalizeUrl(picture.fields.file.url);
      img.alt = picture.fields.title || '';  // Use title or empty string as alt text
      img.classList.add('product-image');
      img.setAttribute('style', 'width: 617px; height: 380px')
      slideshowImg.appendChild(img);
      //Add slideshow to slideshow divider
      imageSlideshow.appendChild(slideshowImg);

      // //Image dots
      // const imageDot = document.createElement('span');
      // imageDot.classList.add("dot");
      // imageDot.setAttribute("onclick", `currentSlide(${adjustedIndex})`);
      // if (index == 0) {
      //   imageDot.classList.add("active");
      // }
      // imageDots.appendChild(imageDot);

      //Image previews
      const previewImages = document.createElement('img')
      previewImages.src = normalizeUrl(picture.fields.file.url);
      previewImages.alt = picture.fields.title || '';  // Use title or empty string as alt text
      previewImages.setAttribute("onclick", (`currentSlide(${adjustedIndex})`));
      previewImages.setAttribute("style", "width: 200px")
      // imagePreview.appendChild(previewImages);

      //Generate indicators
      // indicator = document.createElement('button');
      // indicator.setAttribute('data-bs-target', `#productCarousel`)
      // indicator.setAttribute('data-bs-slide-to', indicators)
      // indicator.setAttribute('type','button')
      indicatorImage = document.createElement('img');
      indicatorImage.src = normalizeUrl(picture.fields.file.url);
      indicatorImage.setAttribute('style', 'width: 70px; height: 90px; background: var(--background);')
      indicatorImage.setAttribute('data-bs-target', `#productCarousel`)
      indicatorImage.setAttribute('data-bs-slide-to', indicators)
      indicatorImage.setAttribute('type','button')
      if (index === 0) {
        // indicator.classList.add('active');
        indicatorImage.classList.add('active')
      }
      // slideshowIndicator.appendChild(indicator)
      slideshowIndicator.appendChild(indicatorImage)

      indicators++;

    });
  }

  
  
  slideshow.appendChild(imageSlideshow);
  slideshow.appendChild(LeftButton);
  slideshow.appendChild(RightButton);
  slideshow.appendChild(slideshowIndicator);
  // container.appendChild(imagePreview);


  // container.appendChild(imageGallery);

  const contentTextContainer = document.createElement('div');
  contentTextContainer.classList.add('product-text-container');
  contentTextContainer.classList.add('row');

  // Add the body text
  if (product.fields.description) {
    product.fields.description.content.forEach(item => {
      if (item.nodeType === 'paragraph') {
        const p = document.createElement('p');
        p.textContent = item.content[0].value;
        p.classList.add('product-paragraph');
        contentTextContainer.appendChild(p);
      } else if (item.nodeType === 'unordered-list') {
        const ul = document.createElement('ul');
        ul.classList.add('product-list');
        item.content.forEach(listItem => {
          const li = document.createElement('li');
          li.textContent = listItem.content[0].content[0].value;
          li.classList.add('product-list-item');
          ul.appendChild(li);
        });
        contentTextContainer.appendChild(ul);
      }
    });
  }

  container.appendChild(slideshow);
  container.appendChild(contentTextContainer);


  // container.appendChild(contentContainer);

  return container;
};

export default renderProductComponent;