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
function darkMode() {
  const toggleTheme = document.getElementById('toggle-theme');
  const toggleIcon = document.getElementById('toggle-icon');
  const toggleText = document.getElementById('toggle-text');

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon-solid.svg')) {
        toggleIcon.src='/src/assets/img/icon/sun-solid.svg'
        toggleText.textContent='Ligth Mode'
    } else {
        toggleIcon.src='/src/assets/img/icon/moon-solid.svg'
        toggleText.textContent='Dark Mode'
    }
  });
};