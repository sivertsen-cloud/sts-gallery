const contentful = require('contentful');

const client = contentful.createClient({
  space: 'hwlyxu8yxi74',
  accessToken: 'T1d5XadBmyFdOU_i9VRk2nFDociQlVHOzjsy-Jl39lA',
});

client.getEntries()
  .then(entries => {
    // Handle and render the content
    console.log(entries.items);
  })
  .catch(err => console.log(err));
