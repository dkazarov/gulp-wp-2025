const { src, series, parallel, watch } = require('gulp');

const fileincludes = require('./tasks/fileinclude');
const style = require('./tasks/style');
const clear = require('./tasks/clear');
const startServer = require('./tasks/server');

exports.clear = clear;
exports.fileincludes = fileincludes;
exports.style = style;
exports.startServer = startServer;

exports.build = series(clear, fileincludes, style);

exports.default = series(clear, fileincludes, style, startServer);
