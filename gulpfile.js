// gulpfile.js
const gulp = require('gulp')
const theo = require('gulp-theo')
 
// Transform design/props.yml to dist/props.scss:
gulp.task('tokens:scss', () =>
  gulp.src('src/global/tokens.json')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('src/global'))
)