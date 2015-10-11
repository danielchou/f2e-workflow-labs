
var gulp=require("gulp");
var del=require("del");

//watch的應用，只要有檔案異動就刪除原來assets/app那份，再重新從來源搬過來。
gulp.task("clean",function(cb){
	del(['output2/bootstrap/**', '!output2/bootstrap']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
		cb();
	});
});