# gulp-resolve

Use static assets from other packages in your build step.

`$ npm install --save-dev gulp-resolve`

## Sample usage

`resolve.src()` replaces `gulp.src()` when you want to access module files.

Refer to files as you would in a call to `require()`; i.e.,
`modulename/path/to/file.ext`.

```
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    resolve = require('gulp-resolve');

gulp.task('default', function () {
  return resolve.src({
    files: [
      'module1/foo.txt',
      'module2/bar.txt'
    ],
    basedir: process.cwd()
  }).pipe(concat('out.txt'))
    .pipe(gulp.dest('./build/'));
});

```

## Options

Everything is passed to `src()` in a single options hash.

* `files`: Array of files to require.
* `basedir`: The directory from which to resolve modules. Defaults to `process.cwd()`,
  but I strongly recommend you set it yourself to make it clear.
