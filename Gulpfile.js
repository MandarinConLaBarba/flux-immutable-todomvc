var gulp = require('gulp');
var gReact = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

var browserifyConfig = {
  entries: ['./lib/app.js']
};

gulp.task('clean', function(cb) {
  del(['lib/', 'js/bundle.js'], cb);
});

gulp.task('reactify', function() {
  return gulp.src('js/**/*.js')
    .pipe(gReact({harmony: true}))
    .pipe(gulp.dest('lib'));
});

gulp.task('bundle', function() {
  return browserify(browserifyConfig)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js/'))
});
