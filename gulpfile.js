var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifycss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
var base64 = require("gulp-base64");
var spritesmith = require('gulp.spritesmith');

gulp.task("css",function(){
	return gulp
		.src("public/css/*.css")
		.pipe(autoprefixer('last 2 version'))
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'} ))
		.pipe(gulp.dest("public/build/css"));
})

gulp.task("default",function(){
	gulp.run("css");
	gulp.run("sprite");
	gulp.run("watch");

});

gulp.task('sprite', function () {
  var spriteData = gulp.src('public/img/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm:'',
    cssTemplate:'public/build/css/sp.css'
  }));
  spriteData.img.pipe(gulp.dest('public/build/img/'));
  spriteData.css.pipe(gulp.dest('public/build/css/'));
});


gulp.task("watch",function(){
	gulp.watch("public/css/*.css",["css"]);

	var sever = livereload();
	gulp.watch(["public/build/css/*.css"]).on("change",function(file){
		sever.changed(file.path);
	});
})