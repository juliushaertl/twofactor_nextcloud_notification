const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: {
		challenge: path.join(__dirname, 'main-challenge.js'),
		settings: path.join(__dirname, 'main-settings.js')
	},
	output: {
		path: path.resolve(__dirname, '../js'),
		publicPath: '/js/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};