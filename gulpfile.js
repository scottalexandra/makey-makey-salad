'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('./src/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dest/assets/styles/css'));
});

gulp.task('default', function() {
  gulp.watch('./src/assets/styles/*.scss', ['sass']);
});
