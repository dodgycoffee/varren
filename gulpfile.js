const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const imagemin      = require('gulp-imagemin');
const uglify        = require('gulp-uglify-es').default;
const sourcemaps    = require('gulp-sourcemaps');

const path = {
    styles: {
        src: 'resources/sass/styles.scss',
        dest: 'web/assets/css',
        watch: 'resources/sass/**/*.scss'
    },
    js: {
        src: 'resources/js/**/*',
        dest: 'web/assets/js',
    },
    images: {
        src: 'resources/img/*',
        dest: 'web/assets/img',
    }
};

function test(cb) {
    console.log('Gulp is functioning!');
    cb();
}

function scss(cb) {
    return gulp.src(path.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.styles.dest));
    cb();
}

function js(cb) {
    return gulp.src(path.js.src)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest(path.js.dest));
    cb();
}

function optimiseImages() {
    return gulp.src(path.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(path.images.dest));
}

function watchFiles() {
    gulp.watch(path.styles.watch, scss);
    gulp.watch(path.js.src, js);
}

exports.test        = test;
exports.build       = gulp.series(scss, js, optimiseImages);
exports.optimise    = optimiseImages;
exports.watch       = watchFiles;