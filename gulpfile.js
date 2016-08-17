var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('refresh', function() {
   browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['refresh']);
    gulp.watch('src/ng/views/*.html', ['refresh']);
    gulp.watch('src/ng/controllers/*.js', ['refresh']);
    gulp.watch('src/ng/models/*.js', ['refresh']);
    gulp.watch('src/ng/app.js', ['refresh']);
    gulp.watch('src/css/*.css', ['refresh']);
});



gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: ['src']
        }
    });

    gulp.start('watch');
    
}); 





gulp.task('default', ['server']);

