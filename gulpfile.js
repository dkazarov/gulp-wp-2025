const { src, series, parallel, watch } = require('gulp');

const clear = require('./tasks/clear');
const html = require('./tasks/html');
const style = require('./tasks/style');
const images = require('./tasks/images');
const startServer = require('./tasks/server');

const watcher = () => {
	watch('src/html-components/**.html', html);
	watch('src/pages/**.html', html);
	watch('src/scss/**', style);
	// watch('src/images/**.{jpg, svg, webp, png}', images);
	watch('src/images/**', images);
};

exports.clear = clear;
exports.html = html;
exports.style = style;
exports.images = images;
exports.startServer = startServer;
exports.watcher = watcher;

exports.build = series(clear, html, style, images);

exports.default = series(clear, html, style, images, startServer, parallel(watcher));
