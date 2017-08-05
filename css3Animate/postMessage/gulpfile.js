var gulp = require("gulp");
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');


gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(gulp.dest("./"))
        .pipe(connect.reload());
})

gulp.task('webserver', function(){
    connect.server({
        livereload: true
    });
})

gulp.task('default',['html','webserver']);
