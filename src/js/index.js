document.addEventListener('DOMContentLoaded', function() {

  darkMode();
  showMenu('nav__toggle', 'barra');
  
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

const pathMoon = 'public/assets/imagen/icon/moon-solid.svg';
const pathSun = 'public/assets/imagen/icon/sun-solid.svg';

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