const { src, dest } = require('gulp');

const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

const fileincludes = () => {
	return src('./src/**.html')
		.pipe(
			fileinclude({
				prefix: '@',
				basepath: '@file',
			}),
		)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('./dist'));
};

module.exports = fileincludes;
