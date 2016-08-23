var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
	entry: [
		'webpack/hot/dev_server',
		'webpack_dev_server/client?http://localhot:8080',
		APP_APTH
	],
	output: {
		path: BUILD_PATH,
		filename: './bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};