var webpack = require('webpack');
var config = require('./webpack.base.conf.js');

config.devtool = 'eval-source-map';

config.devServer = {
	host: '0.0.0.0',
	historyApiFallback: true,
	noInfo: true
};

module.exports = config;
