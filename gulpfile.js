
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
        	baseDir: "./"
        }
    });
    gulp.watch('./src/sass/*.scss', ['sass']);
    browserSync.watch('**/*.*').on('change', browserSync.reload);

});