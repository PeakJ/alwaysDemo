var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
gulp.task('default',['css'], function () {
    // 将你的默认的任务代码放在这
});
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
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
    gulp.src('remStyle.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('temp'));
});
gulp.watch('remStyle.css',['css']);