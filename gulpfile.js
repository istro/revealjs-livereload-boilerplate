'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');

var config = {
  port: 3232,
  devBaseUrl: 'http://localhost',
  to_watch: ['./*.html', './*.css']
}

// local dev server task
gulp.task('server', function() {
  connect.server({
    root: ['./'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
})

// livereload tasks
gulp.task('reload', function() {
  gulp.src(config.to_watch).pipe(connect.reload());
})
gulp.task('watch', function() {
  gulp.watch(config.to_watch, ['reload']);
})

// open task 
gulp.task('default', ['server', 'watch'], function() {
  gulp.src('./index.html')
    .pipe(
      open({
        uri: config.devBaseUrl + ':' + config.port + '/'
      }
    )
  );
})
