const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var _config = {
	entry: {},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[id].js',
		publicPath: '/public/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract('css-loader!less-loader')
			},
			{
				test: /\.dot$/,
				use: ['dot-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'url-loader?limit=8192&name=img/[hash].[ext]'
			},
			{
				test: /\.html$/,
				use: 'html-loader?attrs=img:src img:data-src'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin('css/[name].css')
	]
}

module.exports = _config;