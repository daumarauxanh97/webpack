var gulp =require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('src/scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('html', function(){
    return gulp.src('src./index.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});
// gulp.task('watch', ['browserSync', 'sass'],function(){
//     gulp.watch('src/scss/*.scss', ['sass']);
//     gulp.watch('src/index.html', ['html']);
//     gulp.watch('src/index.html', browserSync.reload);
//     gulp.watch('src/css/*.css', browserSync.reload);
//     // Other watchers
// })
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
})
var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist_gulp/images'))
});
var cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist_gulp/css'));
});
var cleanHTML =require('gulp-htmlmin');
gulp.task('minify-html', () => {
    return gulp.src('*.html')
        .pipe(cleanHTML({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist_gulp/html'));
});