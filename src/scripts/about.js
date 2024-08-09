import renderDuplexComponent from './renderDuplexComponent';
const contentful = require('contentful');

const client = contentful.createClient({
  space: 'hwlyxu8yxi74',
  accessToken: 'T1d5XadBmyFdOU_i9VRk2nFDociQlVHOzjsy-Jl39lA',
});

client.getEntry('33QSSCZA505j9F4Ky4mZJd')  // Replace with the ID of the entry you want to fetch
  .then(entry => {
    console.log(entry);

    const pageTitle = document.querySelector('#about-title');
    pageTitle.textContent = entry.fields.pageName;

    const bodyContainer = document.querySelector('#about-body');
    bodyContainer.innerHTML = '';  // Clear any existing content

    entry.fields.topSection.forEach(component => {
      const duplexElement = renderDuplexComponent(component);
      console.log('Rendered Element:', duplexElement);  // Debugging output

      // Append the duplex component to the body container
      bodyContainer.appendChild(duplexElement);
    });


  })
  .catch(err => console.error(err));