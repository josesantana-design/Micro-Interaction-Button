'use strict';
// include the required packages. 
var gulp 	= require('gulp'),
	stylus 	= require('gulp-stylus'),
	watch 	= require('gulp-watch');

// Get one .styl file and render 
gulp.task('stylus', function () {
  return gulp.src('./stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('./stylus/main.styl', ['stylus']);
});
