import plusSlides from './productSlide.js';
import currentSlides from './productSlide.js';
import showSlides from './productSlide.js';

function renderProductComponent(product) {
  require('../styles/productPage.css');
  const container = document.createElement('div');
  container.classList.add('product-component');

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

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('product-content-container');

  //Create Product Gallery Slideshow
  const imageGallery = document.createElement('div');
  imageGallery.classList.add('product-gallery');

  const imageSlideshow = document.createElement('div');
  imageSlideshow.classList.add('product-slideshow');

  const imageDots = document.createElement('div');
  imageDots.classList.add('image-dots');

  const imagePreview = document.createElement('div');
  imagePreview.classList.add('product-image-preview');

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


  // Add the images
  if (product.fields.allPictures) {
    product.fields.allPictures.forEach(function (picture, index) {
      let adjustedIndex = index + 1;
      //Create slideshow divider
      const slideshowImg = document.createElement('div');
      slideshowImg.classList.add('product-images');
      slideshowImg.classList.add('fade');
      if (index == 0) {
        slideshowImg.setAttribute('style', 'display: inline-flex; justify-content: center; width: 100%;');
      }
      //Add images to slideshow
      const img = document.createElement('img');
      img.src = normalizeUrl(picture.fields.file.url);
      img.alt = picture.fields.title || '';  // Use title or empty string as alt text
      img.classList.add('product-image');
      slideshowImg.appendChild(img);
      //Add slideshow to slideshow divider
      imageSlideshow.appendChild(slideshowImg);

      //Image dots
      const imageDot = document.createElement('span');
      imageDot.classList.add("dot");
      imageDot.setAttribute("onclick", `currentSlide(${adjustedIndex})`);
      if (index == 0) {
        imageDot.classList.add("active");
      }
      imageDots.appendChild(imageDot);

      //Image previews
      const previewImages = document.createElement('img')
      previewImages.src = normalizeUrl(picture.fields.file.url);
      previewImages.alt = picture.fields.title || '';  // Use title or empty string as alt text
      previewImages.setAttribute("onclick", (`currentSlide(${adjustedIndex})`));
      imagePreview.appendChild(previewImages);

    });
  }
  imageSlideshow.appendChild(buttonDiv);
  imageGallery.appendChild(imageSlideshow);
  // imageGallery.appendChild(buttonDiv);
  imageGallery.appendChild(imageDots);
  imageGallery.appendChild(imagePreview);


  contentContainer.appendChild(imageGallery);

  const contentTextContainer = document.createElement('div');
  contentTextContainer.classList.add('product-text-container');

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
  contentContainer.appendChild(contentTextContainer);


  container.appendChild(contentContainer);

  return container;
};

export default renderProductComponent;