// GULP
const {src, dest, watch, series} = require('gulp');
// PUG
const pug = require('gulp-pug');
// SASS
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
// JAVASCRIPT
const concat = require('gulp-concat');
const terset = require('gulp-terser-js');
const rename = require('gulp-rename');
// MAPS
const sourcemaps = require('gulp-sourcemaps');
// IMAGENES
const imagenmin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const imagemin = require('imagemin');



// Funciones de Desarrollo
function scss() {
  return src('src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('src/css/'))
}
function convertPug() {
  return src('src/assets/pug/pages/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(dest('src/'))
}
function watchFile() {
  watch('src/assets/sass/**/*.scss', scss);
  watch('src/assets/pug/**/*.pug', convertPug);
}
// Exportaciones de Desarrollo
exports.watchFile = watchFile
exports.scss = scss
exports.convertPug = convertPug

// Funciones de Despliegue
function deployConvertPug() {
  return src('src/assets/pug/pages/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(dest('public/'))
}

function deployScss() {
  return src('src/assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('public/css/'))
}

function deployJavascript() {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terset())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('public/js/'))
}

function deployImage() {
  return src('src/assets/img/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/imagen/'))
}
function deployImageIcon() {
  return src('src/assets/img/icon/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/imagen/icon/'))
}
function deployImageFavicon() {
  return src('src/assets/img/favicon/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/imagen/favicon/'))
}

function deployImageWebp() {
  return src('public/assets/imagen/*')
    .pipe(webp())
    .pipe(dest('public/assets/imagen/'))
}

function deployImageAvif() {
  return src('public/assets/imagen/*')
    .pipe(avif())
    .pipe(dest('public/assets/imagen/'))
}

exports.deployFile = series(deployConvertPug, deployScss, deployJavascript, deployImage, deployImageIcon, deployImageFavicon, deployImageWebp, deployImageAvif);