var autoprefixer = require('autoprefixer-core');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var postcss = require('gulp-postcss');


gulp.task('styles',function(){
  var processors = [
      autoprefixer
    ];
  return gulp.src('./src/styles/*.css')
  .pipe(postcss(processors))
    .pipe(concatCss("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
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
