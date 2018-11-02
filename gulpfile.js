var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

// BROWSER SYNC IS HERE
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('workflow', function(){
  console.log('! >>>Workflow task launching<<< !');
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist/css'))
  .pipe(
    browserSync.init({
      server: "./"
    })
  );
});

gulp.task('indexreload', function(){
  console.log('index reload is working');
  gulp.src('index.html')
  .pipe(
    browserSync.init({
      server:"./"
    })
  );
});

gulp.task('default', function(){
  console.log('! >>>Hey, the default task is starting<<< !');
  gulp.watch('scss/**/*.scss', ['workflow']);
  gulp.watch('scss/**/*.scss').on('change', reload);
  gulp.watch('index.html').on('change', reload);
});
