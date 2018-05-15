/*!
 * gulp
 * $ npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
 var babel = require("gulp-babel");
 */
// Load plugins
var gulp = require('gulp');
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');// 获取 minify-css 模块（用于压缩 CSS）
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    LessPluginFunctions = require('less-plugin-functions');

notify = require('gulp-notify'),
plumber = require('gulp-plumber');

var ug = require('gulp-ug');


gulp.task('dlbpc_less', function () {
    gulp.src('less/*.less')
        .pipe(plumber())
        .pipe(less({
            plugins: [new LessPluginAutoPrefix({
                browsers: ["last 5 versions"],
                cascade: true
            }), new LessPluginFunctions()]
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['dlbpc_less'], function () {
    gulp.watch('less/*.less', ['dlbpc_less']);
});


