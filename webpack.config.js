const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',  // Main entry point
    header: './src/scripts/header.js',  // Additional script
    footer: './src/scripts/footer.js',  // Add more scripts as needed
    head: './src/scripts/head.js',
  },
  output: {
    filename: '[name].bundle.js',  // Generates separate bundles for each entry
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],  // Inject the main bundle into index.html
    }),
  ],
  mode: 'production',
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const glob = require('glob');

// const scriptFiles = glob.sync('./src/scripts/**/*.js');
// console.log('Script files:', scriptFiles);  // Log the files found by glob

// const entry = {
//   main: './src/index.js',
// };

// scriptFiles.forEach(file => {
//   const name = path.basename(file, path.extname(file)); // Use file name (without extension) as the key
//   console.log(`Adding entry: ${name} -> ${file}`);  // Log each entry
//   entry[name] = file;
// });

// module.exports = {
//   entry,
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//       chunks: ['main'],
//     }),
//   ],
//   mode: 'production',
// };