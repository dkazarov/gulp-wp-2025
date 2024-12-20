const { series, parallel, watch } = require('gulp');

const fileincludes = require('./tasks/fileinclude');
const style = require('./tasks/style');

exports.style = style;
exports.fileincludes = fileincludes;

exports.default = series(style, fileincludes);
