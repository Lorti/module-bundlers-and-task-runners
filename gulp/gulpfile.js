const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const del = require('del');

sass.compiler = require('node-sass');

const { series, parallel, watch } = gulp;

function clean() {
    return del(['dist']);
}

function css() {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
}

function js() {
    return gulp.src(['./main.js', './index.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

exports.default = series(clean, parallel(css, js));
exports.watch = function () {
    watch('./*.scss', css);
    watch('./*.js', series(clean, js));
};
