var gulp = require('gulp');

gulp.task("task1",["task2"],function(){
	console.log("task1");
});