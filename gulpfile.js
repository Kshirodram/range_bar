var gulp = require('gulp'),
    babel = require("gulp-babel"),
    less = require('gulp-less'),
    path = require('path');

// task
gulp.task('compile-es6', function () {
    gulp.src('scripts/*.js')
        .pipe(babel({
  "presets": ["es2015"]
}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile-less', function () {
  return gulp.src('./styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['compile-es6']);
  gulp.watch('./styles/*.less', ['compile-less']);
});


gulp.task('default', ['compile-es6', 'compile-less', 'watch']);
