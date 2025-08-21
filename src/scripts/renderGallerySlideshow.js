const container = document.createElement('div');
// container.classList.add('carousel', 'slide');
container.setAttribute("id", "slideshow");
container.classList.add('carousel-inner')

// const buttonDiv = document.createElement('div');
// buttonDiv.classList.add('buttons-s3d');
// const imageLeftButton = document.createElement('a');
// imageLeftButton.classList.add('carousel-control-prev');
// imageLeftButton.setAttribute('onclick', "plusSlides(-1)");
// imageLeftButton.textContent = "\u276E";
// const imageRightButton = document.createElement('a');
// imageRightButton.classList.add('carousel-control-next');
// imageRightButton.setAttribute('onclick', "plusSlides(1)");
// imageRightButton.textContent = "\u276F";

// buttonDiv.appendChild(imageLeftButton);
// buttonDiv.appendChild(imageRightButton);

// const newDiv = document.createElement('div');

function renderGallerySlideshow(product, index) {

  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }

  let galleryImage;
  //Create a slideshow row for each third project
  if (index % 3 === 0) {
    galleryImage = document.createElement('div');
    galleryImage.classList.add('gallery-image','carousel-item');
    galleryImage.classList.add('fades3d');
    container.appendChild(galleryImage);
    if (index == 0) {
      // galleryImage.setAttribute('style', 'display: inline-flex; width: 100%;');
      galleryImage.classList.add('active');
    }
  } else {
    // Use the last appended row
    galleryImage = container.lastElementChild;
  }

  // Add the images
  if (product.fields.mainPicture) {
    const picture = product.fields.mainPicture.fields.file.url
    let adjustedIndex = index + 1

    const projectLink = document.createElement('a');
    projectLink.setAttribute('href', `project.html?product=${adjustedIndex}`);
    projectLink.classList.add('col');
    galleryImage.appendChild(projectLink);

    //Add images to gallery
    const img = document.createElement('img');
    img.src = normalizeUrl(picture);
    img.alt = picture || '';  // Use title or empty string as alt text
    // img.classList.add('product-image','carousel-item','active');
    // img.setAttribute('style', 'width="200px" height="200px"', )
    projectLink.appendChild(img);
  }
  return container;
};

// container.appendChild(buttonDiv);
export default renderGallerySlideshow;