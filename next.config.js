/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

// .env config
const env = require('dotenv').config({
	path: path.resolve(__dirname, '.env'),
}).parsed;

delete env.NODE_ENV;

// Next config
const nextJSConfig = {
	env,
	webpack: (c) => {
		const config = c;
		config.plugins = config.plugins || [];

		return config;
	},
};

// eslint-disable-next-line no-console
console.log(`Starting application with NODE_ENV=${process.env.NODE_ENV}`);

module.exports = withPlugins([withCss, withSass, withImages], nextJSConfig);
