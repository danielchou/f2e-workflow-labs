var gulp = require('gulp');

gulp.task("output1",function(){
	gulp
	.src("assets/vendor/bootstrap/**/*.js")
	.pipe(gulp.dest("output1"));
});

//sample5:先清除~~再Create output2 folder...
gulp.task("output2",["clean"],function(){
	gulp
	.src("assets/vendor/bootstrap/**/*.js"
		, { base:"assets/vendor/"})
	.pipe(gulp.dest("output2"));
});

gulp.task("output3",function(){
	gulp
		.src([
				"assets/vendor/**/*.js",  
				"assets/vendor/**/*.css"
			]
			, { base:"assets/vendor/"})  //這邊base有寫跟沒寫是一樣
		.pipe(gulp.dest("output3"));
});