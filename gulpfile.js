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
  return src('src/assets/media/img/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/media/imagen/'))
}
function deployImageWebp() {
  return src('public/assets/media/imagen/*')
  .pipe(webp())
  .pipe(dest('public/assets/media/imagen/'))
}
function deployImageAvif() {
  return src('public/assets/media/imagen/*')
  .pipe(avif())
  .pipe(dest('public/assets/media/imagen/'))
}

function deployImageGallery() {
  return src('src/assets/media/img-gallery/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/media/gallery/'))
}
function deployImageGalleryWebp() {
  return src('public/assets/media/gallery/*')
    .pipe(webp())
    .pipe(dest('public/assets/media/gallery/'))
}

function deployImageIcon() {
  return src('src/assets/media/img-vector/img-icon/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/media/img-vector/icon/'))
}
function deployImageFavicon() {
  return src('src/assets/media/img-vector/img-favicon/*')
    .pipe(imagenmin())
    .pipe(dest('public/assets/media/img-vector/favicon/'))
}
exports.deployFile = series(deployConvertPug, deployScss, deployJavascript);
exports.deployImage = deployImage
exports.deployImageAvif = deployImageAvif
exports.deployImageWebp = deployImageWebp
exports.deployImageFavicon = deployImageFavicon
exports.deployImageIcon = deployImageIcon
exports.deployGaleria = series(deployImageGallery, deployImageGalleryWebp);