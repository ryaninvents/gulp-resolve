var gulp = require('gulp'),
    concat = require('gulp-concat'),
    resolve = require('gulp-resolve'),
    fs = require('fs'),
    path = require('path'),
    assert = require('assert');


gulp.task('default', ['generate','test']);

gulp.task('generate', function () {
  return resolve.src({
    files: [
      'module1/foo.txt',
      'module2/bar.txt'
    ],
    basedir: process.cwd()
  }).pipe(concat('out.txt'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('test', ['generate'], function () {
  var expectedContent = [
    'Test content',
    '',
    'More content',
    ''
  ].join('\n');
  var content = fs.readFileSync(path.join(__dirname, 'build','out.txt')).toString();
  assert.equal(content, expectedContent);
});
