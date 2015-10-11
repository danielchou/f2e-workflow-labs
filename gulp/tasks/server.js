var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server',["scripts"], function() {
	browserSync({server: true});
})