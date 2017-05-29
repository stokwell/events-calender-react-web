const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');


const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/static/index.js'
		},
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		plugins: [
      new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/static/index.html'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				$:'jquery',
				jQuery: 'jquery'
			})
		],
		module: {
			rules: [
			  {
			  	include: [
						path.resolve(__dirname, "src"),
			  	],
			  	test: /\.js$/,
			  	use: ['babel-loader'],
			  }	
		  ]
		}	
	},
	images()
]);

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			extractCSS(),
			uglifyJS(),
		]);
	}
	if (env === 'development'){
		return merge([
			common, 
			devserver(),
			sass(),
			css( )
		])	
	}
};
