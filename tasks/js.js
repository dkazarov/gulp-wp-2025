const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const strip = require('gulp-strip-comments');

const js = () => {
	return src('./src/js/main.ts')
		.pipe(strip())
		.pipe(webpack(require('../webpack.config.js')))
		.pipe(dest('dist/js'));
};

module.exports = js;
