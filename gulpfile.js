const gulp = require('gulp');
const ts = require('gulp-typescript');
// for terminal commands
const exec = require('child_process').exec;

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist/backend'));
});
// mongod is set up as windows service -> starting and stoping using net start/stop command
// made as windows service due to problem with running cmd start command in background
// to use those run vscode as admin
//TODO: Change to start mongod as normal command
gulp.task('start-mongo', function (cb) {
  exec('net start MongoDB', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if(err) return cb(err);
    cb();
  });
});

gulp.task('stop-mongo', function (cb) {
  exec('net stop MongoDB', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if(err) return cb(err);
    cb();
  });
})

//watcher
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/backend/**/*.ts', ['scripts']);
  gulp.watch('src/model/**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);
