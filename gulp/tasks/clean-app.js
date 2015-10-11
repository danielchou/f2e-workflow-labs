var gulp = require('gulp');
var del = require('del');

gulp.task('clean-app', function(cb) {
	del(['assets/app/**', '!assets/app'])
	.then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
		cb();
	});	
});