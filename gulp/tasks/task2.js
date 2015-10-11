var gulp = require('gulp');

gulp.task("task2", function(cb){
	console.log("task2");
	cb();
});
