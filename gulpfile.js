const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')
const minify = require('gulp-minify');
const uglify  = require('gulp-uglify')
const input = './src/assets/scss/*.scss';
const output = './dist'

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:'./',
            port:3000
        }
    });
    gulp.watch('./**/*.html').on('change',browserSync.reload);
    gulp.watch('./**/*.css').on('change',browserSync.reload)
    gulp.watch('./**/*.js').on('change',browserSync.reload)
});

gulp.task('minify',function(){
    gulp.src('./src/js/*.js')
        .pipe(minify())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})
gulp.task('scss', function () {
    return gulp.src(input)
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(gulp.dest(output));
  });

gulp.task('scss:watch',function(){
    gulp.watch('./src/assets/scss/**/*.scss',['scss'])
})

gulp.task('build',['minify','scss'])