// Сборка всего проекта
let gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('build', function () {
	runSequence(
		'html',
		'js',
		'libs',
		'style',
		'fonts',
		'image'
	);
});
