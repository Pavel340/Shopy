// Перенос шрифтов в папку build
let gulp = require('gulp'),
    cfg = require('../package.json').config;

gulp.task('fonts', function() {
    gulp.src(cfg.src.fonts)
        .pipe(gulp.dest(cfg.build.fonts));
});
