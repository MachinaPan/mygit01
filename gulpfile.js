//使用插件
var gulp = require("gulp"); //导入gulp
var htmlmin = require("gulp-htmlmin"); //导入html压缩插件
var uglify = require("gulp-uglify"); //导入js压缩插件
var babel = require('gulp-babel'); //es6转es5
//var rename = require('gulp-rename'); //重命名插件


/*gulp.task("jsTask", function(){
	gulp.src("js/bullet.js")
		.pipe( babel({"presets": ["es2015"]}) ) //es6转es5
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})*/

/*gulp.task("jsTask", function(){
	gulp.src("js/enemy.js")
		.pipe( babel({"presets": ["es2015"]}) ) //es6转es5
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})*/

/*gulp.task("jsTask", function(){
	gulp.src("js/gameEngine.js")
		.pipe( babel({"presets": ["es2015"]}) ) //es6转es5
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})*/

gulp.task("jsTask", function(){
	gulp.src("js/myplane.js")
		.pipe( babel({"presets": ["es2015"]}) ) //es6转es5
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})


//默认任务
gulp.task("default", ["jsTask"]);

	
	
	
	
	
	

