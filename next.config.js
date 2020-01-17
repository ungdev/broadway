// Always restart the dev server if you edit this file
// For "Port 8080 is already in use." -> taskkill /F /IM node.exe (Windows only)

const path = require('path');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

// .env config
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

// Next config
const nextJSConfig = {
  webpack: (c) => {
    const config = c;
    config.plugins = config.plugins || [];

    return config;
  },
  useFileSystemPublicRoutes: false,
};

module.exports = withPlugins(
  [withCSS, withImages],
  nextJSConfig,
);
