function renderGallery(product, index) {
  require('../styles/productPage.css');
  const container = document.createElement('div');
  container.classList.add('gallery-content');
  container.setAttribute("id", "gallery-content");

  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }

  const galleryRow = document.createElement('div');
  galleryRow.classList.add('gallery-row')

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container')

  // Add the images
  if (product.fields.mainPicture) {
    const picture = product.fields.mainPicture.fields.file.url
    let adjustedIndex = index + 1
    //Create a gallery row for each third project
    if ((index % 3) == 0) {
      container.appendChild(galleryRow);
    }
    const projectLink = document.createElement('a')
    projectLink.setAttribute('href', `project.html?product=${adjustedIndex}`)
    projectContainer.appendChild(projectLink);
    //Add images to gallery
    const img = document.createElement('img');
    img.src = normalizeUrl(picture);
    img.alt = picture || '';  // Use title or empty string as alt text
    img.classList.add('product-image');
    projectLink.appendChild(img);
    galleryRow.appendChild(projectContainer);
  }

  // container.appendChild(imageGallery);

  return container;
};

export default renderGallery;