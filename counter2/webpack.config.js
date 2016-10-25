var path = require('path');
var webpack = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		APP_PATH
	],
	output: {
		filename: 'bundle.js',
		path: BUILD_PATH
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}