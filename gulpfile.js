var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');


gulp.task('default', ['css', 'babel'], function () {
    // 将你的默认的任务代码放在这
    console.log('gulp 任务已启动')
});
gulp.task('css', function () {
    var plugins = [
        autoprefixer({ browsers: ['last 3 version'] }),
        pxtorem({
            rootValue: 75,
            unitPrecision: 15,
            propList: ['*', '!font*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ];
    gulp.src('./exercises/src/css/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./exercises/dist/rem'));
});
gulp.task('babel', function () {
    gulp.src('exercises/src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('exercises/dist'))
}
);
gulp.watch('./exercises/src/**/*.css', ['css']);
gulp.watch('./exercises/src/**/*.js', ['babel'])