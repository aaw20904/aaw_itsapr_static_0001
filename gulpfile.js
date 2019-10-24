const autoprefixer = require('gulp-autoprefixer');
const { src, dest } = require('gulp');
const Gsass = require('gulp-sass');
refresh = require('gulp-refresh')

exports.default = function(cb) {
    return src('./main.scss')
    // The gulp-sass plugin won't update the filename
    .pipe(Gsass())
    .pipe(autoprefixer())
    // So use gulp-rename to change the extension
    .pipe(dest('./'))
    .pipe(refresh());
    cb();
};
