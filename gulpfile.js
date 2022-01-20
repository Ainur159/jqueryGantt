const gulp = require("gulp");
const clean = require("gulp-clean");
const concat = require('gulp-concat');
const n2a = require('gulp-native2ascii');
const image = require( 'gulp-image');
var cssMin = require('gulp-css');

gulp.task('default', ['clean', 'font', 'js', 'css', 'img']);

gulp.task('js', function() {
    return gulp.src([
        "libs/jquery/jquery.livequery.1.1.1.min.js",
        "libs/jquery/jquery.timers.js",
        "libs/utilities.js",
        "libs/forms.js",
        "libs/date.js",
        "libs/dialogs.js",
        "libs/layout.js",
        "libs/i18nJs.js",
        "libs/jquery/dateField/jquery.dateField.js",
        "libs/jquery/JST/jquery.JST.js",
        "libs/jquery/valueSlider/jquery.mb.slider.js",
        "libs/jquery/svg/jquery.svg.min.js",
        "libs/jquery/svg/jquery.svgdom.1.8.js",
        "ganttUtilities.js",
        "ganttTask.js",
        "ganttDrawerSVG.js",
        "ganttZoom.js",
        "ganttGridEditor.js",
        "ganttMaster.js"
        ])
        .pipe(n2a())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('css', function(){
    return gulp.src('./*.css')
      .pipe(cssMin())
      .pipe(gulp.dest('build/'));
});

gulp.task('font', function() {
    return gulp.src('./res/*')
        .pipe(gulp.dest('./build/res/'));
});

gulp.task('img', function () {
    gulp.src('./res/*')
      .pipe(image())
      .pipe(gulp.dest('./build/res/'));
});

gulp.task('clean', function () {
    return gulp.src(['build/res/*', 'build/*.*'], {read: false})
        .pipe(clean());
});
