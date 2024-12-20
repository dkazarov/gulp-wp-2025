const { src, dest } = require('gulp');

const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
let webphtml = require('gulp-webp-html-nosvg');

const html = () => {
	return (
		src('./src/**.html')
			.pipe(
				fileinclude({
					prefix: '@',
					basepath: '@file',
				}),
			)
			.pipe(webphtml())
			// .pipe(htmlmin({ collapseWhitespace: true }))
			.pipe(dest('./dist'))
	);
};

module.exports = html;
