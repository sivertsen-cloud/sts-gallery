const container = document.createElement('div');
container.classList.add('container','gallery-content');
container.setAttribute("id", "gallery-content");

function renderGallery(product, index) {
  require('../../styles/productPage.css');


  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }
  // Track the current row
  let galleryRow;

  //Create a gallery row for each third project
  if (index % 3 === 0) {
    galleryRow = document.createElement('div');
    galleryRow.classList.add('gallery-row','row');
    container.appendChild(galleryRow);
  } else {
    // Use the last appended row
    galleryRow = container.lastElementChild;
  }
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container','col')

  // Add the images
  if (product.fields.mainPicture) {
    const picture = product.fields.mainPicture.fields.file.url
    let adjustedIndex = index + 1

    const projectLink = document.createElement('a')
    projectLink.setAttribute('href', `project.html?product=${adjustedIndex}`)
    projectContainer.appendChild(projectLink);
    //Add images to gallery
    const img = document.createElement('img');
    img.src = normalizeUrl(picture);
    img.alt = picture || '';  // Use title or empty string as alt text
    img.classList.add('product-image','img-fluid','img-hover');
    projectLink.appendChild(img);
    galleryRow.appendChild(projectContainer);
  }

  // container.appendChild(imageGallery);

  return container;
};

export default renderGallery;