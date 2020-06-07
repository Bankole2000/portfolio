// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menuHlBtn = document.querySelector('.menu-hl-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const copyRight = document.querySelector('#year');
//Set Initial State of the menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
menuHlBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Reset Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Reset Menu State
    showMenu = false;
  }
}

// Keep Footer Year Updated

let today = new Date();
copyRight.innerHTML = `${today.getFullYear()}`;
