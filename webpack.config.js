module.exports = {
	entry: './app/js/app.js',
	output: {
		filename: 'app/js/dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	}
};