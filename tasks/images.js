const { src, dest } = require('gulp');
const webp = require('gulp-webp');

const images = () => {
	return src('./src/images/**')
    .pipe(webp())
    .pipe(dest('./dist/images/'));
};

module.exports = images;
