const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',  // Main entry point
    products: './src/data/products.js',
    header: './src/scripts/header.js',  // Additional script
    footer: './src/scripts/footer.js',  // Add more scripts as needed
    head: './src/scripts/head.js',
    productSlide: './src/scripts/productSlide.js',
    newProduct: './src/scripts/newProduct.js',
    dots: './src/scripts/dots.js',
    slideshow: './src/scripts/slideshow.js',
    gallery: './src/scripts/gallery.js',
    otherProjects: './src/scripts/otherProjects.js',
  },
  output: {
    filename: '[name].bundle.js',  // Generates separate bundles for each entry
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Match all .css files
        use: ['style-loader', 'css-loader'],  // Process and inject CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],  // Inject the main bundle into index.html
    }),
    new HtmlWebpackPlugin({
      template: './src/gallery.html',
      filename: 'gallery.html',
      chunks: ['gallery'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      template: './src/product.html',
      filename: 'product.html',
      chunks: ['product'],  // Inject the main bundle into index.html
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['main'],  // Inject the main bundle into index.html
    }),
  ],
  mode: 'production',
};
