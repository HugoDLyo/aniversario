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