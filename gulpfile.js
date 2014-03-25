var gulp = require('gulp');
var htmli = require('gulp-preprocess');

gulp.task('htmli', function(){
    return gulp.src(['./src/*.html', '!.src/partials/*.html'])
        .pipe(htmli())
        .pipe(gulp.dest('./'));
});

gulp.task('default', [
    'htmli',
    'watch'
])

gulp.task('watch', function(){
    gulp.watch('src/**/*.html', function(e){
        console.log('File: [' + e.path + '] was ' + e.type );
        console.log('running task...');
        gulp.start('htmli');
    });
})
