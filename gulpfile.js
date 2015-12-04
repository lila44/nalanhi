/*
    author      : 임정채
    date        : 2015.11.16 22:15
    description : auto minify
*/
var gulp       = require('gulp'             );
var uglify     = require('gulp-uglify'      );
var concat     = require('gulp-concat'      );
var jshint     = require('gulp-jshint'      );
var minifycss  = require('gulp-minify-css'  );
var minifyhtml = require('gulp-minify-html' );
var del        = require('del'              );
var config     = require('./resource/config');


// clean target
gulp.task('clean', function () {
    del([config.gulp.clean]);

});

// minify js
gulp.task('uglifyjs', function () {
    return gulp.src(config.gulp.src.js)
               //.pipe(jshint()) // run their contents through jshint
               //.pipe(jshint.reporter('default')) // report any findings from jshint
               .pipe(concat(config.gulp.minify.js))
               //.pipe(uglify())
               .pipe(gulp.dest(config.gulp.target.js));
});

// minify html
gulp.task('minifyhtml', ['uglifyjs'], function () {
    return gulp.src(config.gulp.src.html)
               //.pipe(minifyhtml())
               .pipe(gulp.dest(config.gulp.target.html));
});

// public
gulp.task('public', ['minifyhtml'], function () {
    return gulp.src(config.gulp.src.public)
               .pipe(gulp.dest(config.gulp.target.public));
});

// minify css
// gulp.task('minifycss', function () {
//     return gulp.src(config.gulp.src.css)
//                //.pipe(concat(config.gulp.minify.css))
//                .pipe(minifycss())
//                .pipe(gulp.dest(config.gulp.target.css));
// });

// clean, uglifyjs, minifycss, minihtml
gulp.task('default', ['public']);
