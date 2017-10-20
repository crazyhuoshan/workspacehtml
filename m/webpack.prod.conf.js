const path = require('path');
const webpack = require('webpack');
const packBaseConf = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Merge = require('webpack-merge');
const glob = require('glob');

module.exports = function (env) {
	var prodConfig = {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
		]
	}

	var entries = glob.sync('./src/views/*/*.js'),
		entriHtml = glob.sync('./src/views/*/*.html')
	var entryJsList = {}
	var entryHtmlList = {}
	for (var _jsPath of entries) {
		var chunkJsName = _jsPath.split('/')[3]
		entryJsList[chunkJsName] = _jsPath
	}
	for (var _path of entriHtml) {
		var chunkName = _path.split('/')[3]
		entryHtmlList[chunkName] = _path
		prodConfig.plugins.push(new HtmlWebpackPlugin({
			template: entryHtmlList[chunkName],
			filename: './pages/' + chunkName + '/' + chunkName + '.html',
			chunks: [chunkName,'vendor']
		}))
	}
	entryJsList['vendor'] = 'jquery'
	prodConfig.entry = entryJsList;

	return Merge(packBaseConf,prodConfig);
}
