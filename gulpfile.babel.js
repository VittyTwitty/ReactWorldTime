let gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    tsify = require("tsify"),
    babelify = require('babelify');


// Создание таска скриптов TypeScript
// gulp.task("scripts-ts", function () {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['app/ts/main.ts'],
//         cache: {},
//         packageCache: {}
//     })
//         .plugin(tsify)
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest("app/scripts"))
//         .pipe(browserSync.reload({ stream: true }));
// });

// Создание таска common.js
gulp.task('scripts-js', function () { 
    return browserify({
            entries: 'app/js/app.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015'],
            plugins: ['transform-class-properties']
        })
        .bundle()        
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app/production'))
        .pipe(browserSync.reload({ stream: true }));
});

// Создание таска скриптов lib
// gulp.task('scripts', function () {
//     return gulp.src([
//         'app/libs/jquery/dist/jquery.min.js',
//         'app/libs/moment/min/moment.min.js',
//         'app/libs/custom-select/custom-select.js',
//         'app/libs/handlebars/handlebars.min.js'
//     ])
//         .pipe(concat('out-libs.min.js')) // Собираем новом файле libs.min.js
//         .pipe(uglify()) // Сжимаем JS файл
//         .pipe(gulp.dest('app/scripts'));
// })




// Создание таска стилей
gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.+(scss|sass)') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true }))
});


// Создание таска browser-sync для автомат. обновления
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

// Создание watcher
gulp.task('watch', ['browser-sync', 'sass', 'scripts-js'], function () {
    gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/scripts/**/*.js', browserSync.reload);
    gulp.watch('app/js/**/*.+(jsx|js)', ['scripts-js']);
    // gulp.watch('app/ts/**/*.ts', ['scripts-ts']);
});

gulp.task('default', ['watch']);