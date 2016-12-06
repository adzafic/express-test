var autoprefixer = require('autoprefixer-core');
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var postcss = require('gulp-postcss');
var nodemon = require('gulp-nodemon');

gulp.task('styles',function(){
  var processors = [
      autoprefixer
    ];
  return gulp.src('./src/styles/*.css')
  .pipe(postcss(processors))
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch:styles',function(){
  gulp.watch('./src/styles/*.css',['styles']);
});

gulp.task('nodemon', function () {
  nodemon({
    script: './bin/www',
    ext:'css js hjs',
    ignore: [
           './public'
       ],
    tasks: ['styles']
  });
});
