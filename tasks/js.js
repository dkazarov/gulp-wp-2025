
const { src, dest } = require('gulp');
const webpack = require('webpack-stream');

const js = () => {
	return src('./src/js/main.ts')
		.pipe(webpack(require('../webpack.config.js')))
		.pipe(dest('dist/js'));
};

module.exports = js;
