document.addEventListener('DOMContentLoaded', function() {

  darkMode();
  showMenu('nav__toggle', 'barra');
  multimediaTabs();
  lightBox();
});

//* =====Abrir y Cerrar el Menu=====
const showMenu = (toogleId, navbarId) => {
  const toogle = document.getElementById(toogleId),
        navbar = document.getElementById(navbarId)

  if(toogle && navbar) {
      toogle.addEventListener('click', () => {
          navbar.classList.toggle('expander')
      })
  }
};

//* =====Modo Oscuro=====
// const pathMoon = '/src/assets/img/icon/moon-solid.svg';
// const pathSun = '/src/assets/img/icon/sun-solid.svg';

const pathMoon = 'public/assets/media/img-vector/icon/moon-solid.svg';
const pathSun = 'public/assets/media/img-vector/icon/sun-solid.svg';

function darkMode() {
  const toggleTheme = document.getElementById('toggle-theme');
  const toggleIcon = document.getElementById('toggle-icon');
  const toggleText = document.getElementById('toggle-text');

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon-solid.svg')) {
        toggleIcon.src= pathSun
        toggleText.textContent='Ligth Mode'
    } else {
        toggleIcon.src= pathMoon
        toggleText.textContent='Dark Mode'
    }
  });
};

//* =====Texto Cambiante=====
const typed = new Typed('.typed', {
  strings: [
    '<i class="name">Gracias por ser mi Novia</i>', 
    '<i class="name">Gracias por ser mi Cómplice</i>', 
    '<i class="name">Gracias por ser mi Mujer</i>', 
    '<i class="name">Gracias por ser mi Prometida</i>', 
    '<i class="name">Gracias por ser Única</i>',
    '<i class="name">Gracias por ser Dedicada</i>', 
    '<i class="name">Gracias por ser Amorosa</i>', 
    '<i class="name">Gracias por ser Leal</i>', 
    '<i class="name">Gracias por ser Decidida</i>', 
    '<i class="name">Gracias por ser Maravillosa</i>', 
    '<i class="name">Gracias por ser Comprensiva</i>', 
    '<i class="name">Gracias por hacerme Feliz</i>',
    '<i class="name">Por eso y muchas cosas más…</i>', 
    '<i class="name">TE AMO &#9829; &#9829; &#9829;</i>'
  ],
  typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html'
});

//* =====Tabs=====
function multimediaTabs() {
  const li = document.querySelectorAll('.li');
  const bloque = document.querySelectorAll('.box__context');

  li.forEach( ( cadaLi , i) => {
      li[i].addEventListener('click', () => {
          li.forEach( (cadaLi , i ) => {
              li[i].classList.remove('activo')
              bloque[i].classList.remove('activo')
          })
          li[i].classList.add('activo')
          bloque[i].classList.add('activo')
      })
  });
};

//* =====Galeria=====
function lightBox() {
  const images = document.querySelectorAll('.galeria__img');
  const containerImages = document.querySelector('.galeria__contenido');
  const imageContainer = document.querySelector('.galeria__show');
  const copy = document.querySelector('.galeria__copy');
  const closeModal = document.querySelector('.galeria__icon');
  
  images.forEach(image =>{
    image.addEventListener('click', ()=>{
      addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
  })
  
  const addImage = (srcImage, altImage)=>{
    containerImages.classList.toggle('mover');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
  }
  
  closeModal.addEventListener('click', ()=>{
    containerImages.classList.toggle('mover');
    imageContainer.classList.toggle('show');
  })
};