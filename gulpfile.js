const { src, series, parallel, watch } = require('gulp');

const clear = require('./tasks/clear');
const fileincludes = require('./tasks/fileinclude');
const style = require('./tasks/style');
const images = require('./tasks/images');
const startServer = require('./tasks/server');

const watcher = () => {
	watch('src/**.html', fileincludes);
	watch('src/pages/**.html', fileincludes);
	watch('src/scss/**', style);
	// watch('src/images/**.{jpg, svg, webp, png}', images);
	watch('src/images/**', images);
};

exports.clear = clear;
exports.fileincludes = fileincludes;
exports.style = style;
exports.images = images;
exports.startServer = startServer;
exports.watcher = watcher;

exports.build = series(clear, fileincludes, style, images);

exports.default = series(clear, fileincludes, style, images, startServer, parallel(watcher));
