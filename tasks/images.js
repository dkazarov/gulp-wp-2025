const { src, dest } = require('gulp');

const images = () => {
	return src('./src/images/**').pipe(dest('./dist/images/'));
};

module.exports = images;
