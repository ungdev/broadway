/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
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

module.exports = withPlugins([withCss, withSass, withImages], nextJSConfig);
