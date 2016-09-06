var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon');

var jsSrc = ['app/assets/js/*.js'],
    sassSrc = ['app/assets/**/*.scss'];

// Concat and Pipe JS files into public/js/main.js

gulp.task('js', function(){
    gulp.src(jsSrc)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload())
});

gulp.task('lint', function() {
    gulp.src('./**/*.js')
        .pipe(jshint())
});

// Concat at process Sass with Compass into public/css/stylesheet.css

gulp.task('compass', function(){
    gulp.src(sassSrc)
        .pipe(compass({
            sass: 'app/assets/sass',
            css: 'public/css'
        }))
        .on('error', function(error){
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/assets/sass/**/*.scss', ['gulp-minify-css']);
    gulp.watch(jsSrc, ['js']);
});

gulp.task('start', function() {
    nodemon({
        script: 'server.js',
        env: { 'NODE_ENV' : 'development' }
    })
});

gulp.task('default', ['js', 'compass', 'watch', 'start']);
