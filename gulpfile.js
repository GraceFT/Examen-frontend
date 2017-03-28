var gulp = require('gulp');
/*var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');*/


gulp.task('bootstrap', function(cb){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')//raiz
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('script-jquery',function(){
    return gulp.src('./node_modules/jquery/dist/jquery.js')//raiz
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('sweetalert',function(){
    return gulp.src('./node_modules/sweetalert/dist/sweetalert.css')//raiz
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('style', function() {
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('sass', function() {
	return gulp.src('./src/scss/*.scss')
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('js-script', function() {
	return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('images', function() {
	//return gulp.src('./src/img/*.')
    //.pipe(gulp.dest('./dist/images'))
});
gulp.task('fonts', function() {
	return gulp.src('./node_modules/font-awesome/css/*.css')
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('watch', function() {
	gulp.watch('./src/scss/*.scss',['sass']);
    gulp.watch('./src/js/*.js',['js-script']);
});

gulp.task('default', ['images', 'style', 'bootstrap','script-jquery','sass','js-script','watch','fonts','sweetalert']);