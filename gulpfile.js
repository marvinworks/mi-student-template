const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
//const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

// Copy HTML
gulp.task('copyHTML', function() {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
});

// Copy JSON
gulp.task('copyJSON', function() {
  gulp.src('src/js/*.json')
      .pipe(gulp.dest('dist/js/'))
      .pipe(browserSync.stream());
});

// Compile Sass
gulp.task('compileSass', () =>
  gulp.src('src/sass/*')
      .pipe(sass()).on('error', sass.logError)
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
);

// Compile Sass
gulp.task('compileSassComp', () =>
  gulp.src('src/sass/*')
      .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
);

// Optimize Images
gulp.task('imageMin', () =>
  gulp.src('src/images/**')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
      .pipe(browserSync.stream())
);

// Scripts
gulp.task('concatScripts', function() {
  gulp.src('src/js/scripts.js')
      .pipe(webpack(require('./webpack.config.js')))
      //.pipe(uglify()) //uglify happens though webpack
      .pipe(gulp.dest('dist/js/'))
      .pipe(browserSync.stream());
});

// copyFonts
gulp.task('copyFonts', function() {
  gulp.src('node_modules/font-awesome/fonts/**')
      .pipe(gulp.dest('dist/fonts/'))
      .pipe(browserSync.stream());
});


// Default
gulp.task('default', ['copyHTML', 'compileSass', 'concatScripts', 'copyFonts', 'imageMin', "copyJSON"]);

gulp.task('watch', function() {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('src/js/**', ['concatScripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/**', ['compileSass']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/js/*.json', ['copyJSON']);
  gulp.watch('node_modules/font-awesome/scss/font-awesome/**', ['copyFonts']);
});


gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});


gulp.task('deploy', ['apply-prod-environment', 'copyHTML', 'compileSassComp', 'concatScripts', 'copyFonts', 'imageMin', 'copyJSON']);
