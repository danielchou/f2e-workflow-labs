var gulp = require('gulp');
var _ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('scripts', function() {

  gulp.src(config.paths.app + '/**/*.module.js')
    .pipe(_.concat('app.modules.js'))
	.pipe(gulp.dest('./assets/'))
	.pipe(_.sourcemaps.init())
		.pipe(_.uglify({
			mangle: false
		}))
		.pipe(_.rename({
			extname: '.min.js'
		}))
	.pipe(_.sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/'));

  gulp.src([config.paths.app + '/**/*.js', '!./app/**/*.module.js'])
    .pipe(_.concat('app.services.js'))
	.pipe(gulp.dest('./assets/'))
	.pipe(_.sourcemaps.init())
		.pipe(_.uglify({
			mangle: false
		}))
		.pipe(_.rename({
			extname: '.min.js'
		}))
	.pipe(_.sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/'));

});