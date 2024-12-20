const { src, series, parallel, watch } = require('gulp');
const server = require('gulp-server-livereload');

const fileincludes = require('./tasks/fileinclude');
const style = require('./tasks/style');
const clear = require('./tasks/clear');

const startServer = () => {
	return src('./dist').pipe(
		server({
			livereload: true,
			open: true,
		}),
	);
};

exports.clear = clear;
exports.fileincludes = fileincludes;
exports.style = style;
exports.startServer = startServer;

exports.build = series(clear, fileincludes, style);

exports.default = series(clear, fileincludes, style, startServer);
