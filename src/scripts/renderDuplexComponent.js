module.exports = function renderDuplexComponent(componentData) {
  // require('../styles/duplexComponents.css');
  const container = document.createElement('div');
  container.classList.add('duplex-component');
  container.classList.add('container');

  function normalizeUrl(url) {
    if (!url.startsWith('http')) {
      return `https:${url}`;
    }
    return url;
  }



  // Add the headline
  if (componentData.fields.headline) {
    const headline = document.createElement('h2');
    headline.textContent = componentData.fields.headline;
    headline.classList.add('row');
    headline.classList.add('justify-content-center');
    container.appendChild(headline);
  }

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('row');
  contentContainer.classList.add('justify-content-center');

  const contentTextContainer = document.createElement('div');
  contentTextContainer.classList.add('text-decoration-none');
  contentTextContainer.classList.add('col-8');
  contentTextContainer.classList.add('text-start');
  contentTextContainer.classList.add('order-md-1');

  // Add the image
  if (componentData.fields.image) {
    const img = document.createElement('img');
    img.src = normalizeUrl(componentData.fields.image.fields.file.url);
    img.alt = componentData.fields.image.fields.title || '';  // Use title or empty string as alt text
    img.classList.add('duplex-image');
    img.classList.add('col-4');
    img.classList.add('order-md-2');
    img.setAttribute('style', 'width:300px; height:300px;')
    contentContainer.appendChild(img);
  }

  // Add the body text
  if (componentData.fields.bodyText) {
    componentData.fields.bodyText.content.forEach(item => {
      if (item.nodeType === 'paragraph') {
        const p = document.createElement('p');
        p.textContent = item.content[0].value;
        p.classList.add('duplex-paragraph');
        contentTextContainer.appendChild(p);
      } else if (item.nodeType === 'unordered-list') {
        const ul = document.createElement('ul');
        ul.classList.add('duplex-list');
        ul.classList.add('list-unstyled');
        item.content.forEach(listItem => {
          const li = document.createElement('li');
          li.classList.add('list-group-item');
          const i = document.createElement('i');
          i.classList.add('bi');
          i.classList.add('bi-arrow-right-short');
          i.classList.add('me-2');
          li.appendChild(i);
          li.appendChild(document.createTextNode(listItem.content[0].content[0].value));
          ul.appendChild(li);
        });
        contentTextContainer.appendChild(ul);
      }
    });
  }
  contentContainer.appendChild(contentTextContainer);


  container.appendChild(contentContainer);
  container.classList.add('mb-5')

  return container;
};