const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { default: renderDuplexComponent } = require('./src/scripts/renderDuplexComponent');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['main'],
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
    chunks: ['product'],
  }),
  new HtmlWebpackPlugin({
    template: './src/newproductpage.html',
    filename: 'newproductpage.html',
    chunks: ['newproductpage'],
  }),
  new HtmlWebpackPlugin({
    template: './src/about.html',
    filename: 'about.html',
    chunks: ['about'],
  }),
];

// Include dotenv-webpack for local development
if (!isCI) {
  plugins.push(new Dotenv());
}

// Always define environment variables using DefinePlugin
plugins.push(
  new webpack.DefinePlugin({
    'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
    'process.env.CONTENTFUL_API_KEY': JSON.stringify(process.env.CONTENTFUL_API_KEY),
  })
);

module.exports = {
  entry: {
    main: './src/scripts/index.js',  // Main entry point
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
    about: './src/scripts/about.js',
    renderDuplexComponent: './src/scripts/renderDuplexComponent.js',
    renderProductComponent: './src/scripts/renderProductComponent.js',
    productPage: './src/scripts/productPage.js',
    newproductPage: './src/scripts/newproductPage.js',
  },
  output: {
    filename: '[name].bundle.js',  // Generates separate bundles for each entry
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',  // Custom output directory for assets
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Handle JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,  // Match all .css files
        use: ['style-loader', 'css-loader'],  // Process and inject CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Process image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',  // Custom directory for images
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,  // Process font files
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',  // Custom directory for fonts
        },
      },
    ],
  },
  plugins: plugins,
  mode: isProduction ? 'production' : 'development',
};
