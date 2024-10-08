const container = document.createElement('div');
container.classList.add('other-project-images');

function renderOtherProjects(product, index) {

  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }



  // Add the images
  if (product.fields.mainPicture) {
    const picture = product.fields.mainPicture.fields.file.url
    let adjustedIndex = index + 1

    const projectLink = document.createElement('a')
    projectLink.setAttribute('href', `project.html?product=${adjustedIndex}`)
    container.appendChild(projectLink);
    //Add images to gallery
    const img = document.createElement('img');
    img.src = normalizeUrl(picture);
    img.alt = picture || '';  // Use title or empty string as alt text
    img.classList.add('product-image');
    projectLink.appendChild(img);
  }

  // container.appendChild(imageGallery);

  return container;
};

export default renderOtherProjects;