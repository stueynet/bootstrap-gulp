'use strict';

var gulp        = require('gulp');
var compass     = require('gulp-compass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

//js
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');

gulp.task('compass', function() {
  gulp.src('assets/sass/main.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: 'assets/css',
    sass: 'assets/sass'
  }).on('error', function(e){
    console.log(e);
  }))
  .pipe(gulp.dest('assets/css'))
  .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {

  // if php
  browserSync({
    watchTask: true,
    proxy: 'localhost/tgwtk'
  });

  // if static
  // browserSync({
  //       server: {
  //           baseDir: "./"
  //       }
  //   });

});

// Reload all Browsers
gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('uglify',['concat'], function() {
  gulp.src('assets/js/all.js')
  .pipe(uglify('all.min.js'))
  .pipe(gulp.dest('assets/js'))
});

gulp.task('concat', function() {
  return gulp.src([
    'bower_components/modernizr/modernizr.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'assets/js/main.js'
    ])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('assets/js'))
});

// Default task to be run with `gulp`
gulp.task('watch', ['compass', 'browser-sync'], function () {
  gulp.watch(["assets/sass/**/*.scss", "bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss"], ['compass']);
  gulp.watch("*.php", ['bs-reload']);
  gulp.watch("assets/js/main.js", ['concat', 'uglify']);
});

gulp.task('default', ['watch', 'compass', 'browser-sync', 'bs-reload', 'uglify', 'concat']);
