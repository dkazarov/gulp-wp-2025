const { src, dest } = require('gulp');
const ttf2woff2 = require('gulp-ttf2woff2');

const fonts = () => {
	return src(['./src/fonts/*.ttf']).pipe(ttf2woff2()).pipe(dest('./dist/fonts/'));
};

module.exports = fonts;
