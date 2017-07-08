// The packages we are using
// Not using gulp-load-plugins as it is nice to see whats here.
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    //takana       = require('takana'),
    kit         = require('gulp-kit'),
    pretty       = require('gulp-pretty-url'),
    browserSync  = require('browser-sync'),
    autoprefix   = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    //concat       = require('gulp-concat'),
    //order        = require("gulp-order"),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    //cleanup      = require('gulp-combine-media-queries'),
    minifyCss    = require('gulp-minify-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    webp         = require('gulp-webp'),
    useref       = require('gulp-useref'),
    gulpif       = require('gulp-if'),
    uglify       = require('gulp-uglify'),
    minifyHTML   = require('gulp-minify-html');

// Sass
// Compile
// Compress/Minify
// Catch errors (gulp-plumber)
// Autoprefixer

gulp.task('scss', function() {
  gulp.src('src/assets/scss/styles.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefix('last 2 versions', '> 1%'))
    .pipe(plumber())
    .pipe(sourcemaps.write())
    //.pipe(cleanup())
    .pipe(gulp.dest('build/css'))
    .pipe(rename('style.css'))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('takana', function() {
  takana.run({
    path:         __dirname, // run from the current working directory
    includePaths: []         // optional include paths
  });
});

gulp.task('html', function() {
    gulp.src([
      'src/*.kit',
      '!src/includes/*.kit',         //! Ignore
      ])
     .pipe(kit())
      // .pipe(inlineCss({
      //            applyStyleTags: true,
      //            applyLinkTags: true,
      //            removeStyleTags: true,
      //            removeLinkTags: true
      //    }))
      //.pipe(minifyHTML())
     .pipe(gulp.dest('build'))
     .pipe(useref())
     .pipe(gulpif('*.js', uglify()))
     //.pipe(gulp.dest('build'))
     //.pipe(pretty())
     .pipe(gulp.dest('build'));
 });

// Javascript
// Uglify/minify

// gulp.task('js', function () {
//     return gulp.src('src/assets/js/**/*.js')
//         .pipe(plumber())
//         .pipe(uglify())
//         .pipe(sourcemaps.init({
//             loadMaps: false,
//         }))
//         .pipe(order([
//           'js/jquery.smoothState.min.js',
//           'js/headroom.js',
//           'js/selection-sharer.js',
//           'js/footnotes.js',
//           'js/init.js'
//         ], { base: '/' }))
//
//         .pipe(concat('scripts.js', {
//             newLine:'\n;' // the newline is needed in case the file ends with a line comment, the semi-colon is needed if the last statement wasn't terminated
//         }))
//         .pipe(sourcemaps.write('.', {
//             includeContent: true,
//             sourceRoot: '/',
//         }))
//         .pipe(plumber.stop())
//         .pipe(rename('scripts.min.js'))
//         .pipe(gulp.dest('build/js'))
// });


// Images
  gulp.task('images', function() {
     gulp.src('src/assets/images/**/*.*')
    //  .pipe(imagemin({
    //          progressive: true,
    //          //svgoPlugins: [{removeViewBox: false}],
    //          use: [pngquant()]
    //      }))
         .pipe(gulp.dest('build/images'));
  });

// WebP
  gulp.task('webp', function () {
    gulp.src('src/assets/images/**/*.*')
    .pipe(webp())
    .pipe(gulp.dest('build/images'));
    });

// Copy stuff we need to the build folder
gulp.task('fonts', function() {
   gulp.src('src/assets/fonts/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('CNAME', function() {
   gulp.src('src/CNAME')
   .pipe(gulp.dest('build/'));
});

gulp.task('json', function() {
   gulp.src('src/assets/js/*.json')
   .pipe(gulp.dest('build/js'));
});

// BrowserSync.io
// Watch CSS, JS & HTML for changes
// View project at: localhost:3000
gulp.task('browser-sync', function() {
  browserSync.init(['build/**/*.html', 'build/css/*.css', 'build/js/**/*.js'], {
    server: {
      baseDir: 'build'    }
  });
});


// Default task
// Runs sass, browser-sync, scripts and image tasks
// Watchs for file changes for images, scripts and sass/css
gulp.task
('default',
  [
  'html',
  'scss',
  //'takana',
  'images',
  //'webp',
  'fonts',
  'CNAME',
  'json',
  'browser-sync'
  //'deploy'
  ],
function () {
  gulp.watch('src/assets/scss/**/*.scss', ['scss']);
  //gulp.watch('src/assets/fonts', ['fonts']);
  gulp.watch('src/assets/js/**/*.js', ['html']);
  gulp.watch('src/assets/js/*.json', ['json']);
  //gulp.watch('src/assets/images/**/*.jpg', ['webp']);
  gulp.watch('src/assets/images/**/*.jpg', ['images']);
  gulp.watch('src/**/*.kit', ['html']);
});
