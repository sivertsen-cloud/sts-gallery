module.exports = function renderDuplexComponent(componentData) {
  const container = document.createElement('div');
  container.classList.add('duplex-component');

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
    headline.classList.add('duplex-headline');
    container.appendChild(headline);
  }

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('duplex-content-container');

  const contentTextContainer = document.createElement('div');
  contentTextContainer.classList.add('duplex-text-container');

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
        item.content.forEach(listItem => {
          const li = document.createElement('li');
          li.textContent = listItem.content[0].content[0].value;
          li.classList.add('duplex-list-item');
          ul.appendChild(li);
        });
        contentTextContainer.appendChild(ul);
      }
    });
  }
  contentContainer.appendChild(contentTextContainer);
  // Add the image
  if (componentData.fields.image) {
    const img = document.createElement('img');
    img.src = normalizeUrl(componentData.fields.image.fields.file.url);
    img.alt = componentData.fields.image.fields.title || '';  // Use title or empty string as alt text
    img.classList.add('duplex-image');
    contentContainer.appendChild(img);
  }

  container.appendChild(contentContainer);

  return container;
};