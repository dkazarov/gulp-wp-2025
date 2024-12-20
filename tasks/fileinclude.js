const { src, dest } = require('gulp');

const fileinclude = require('gulp-file-include');

const fileincludes = () => {
	return src('./src/**.html')
		.pipe(
			fileinclude({
				prefix: '@',
				basepath: '@file',
			}),
		)
		.pipe(dest('./dist'));
};

module.exports = fileincludes;
