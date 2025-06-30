const menuToggler = document.getElementById('menu-toggler');
const menuIconClosed = document.getElementById('menu-toggler-icon-closed');
const menuIconOpened = document.getElementById('menu-toggler-icon-opened');
const menu = document.getElementById('menu');

menuToggler.addEventListener('click', (e) => {
  menu.classList.toggle('hidden');
  menuIconClosed.classList.toggle('hidden');
  menuIconOpened.classList.toggle('hidden');
});
