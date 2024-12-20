const { src, dest } = require('gulp');
const server = require('gulp-server-livereload');

const startServer = () => {
	return src('./dist').pipe(
		server({
			livereload: true,
			open: true,
		}),
	);
};

module.exports = startServer;
