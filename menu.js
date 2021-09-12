const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const Menu = document.getElementById('side-menu');
const arrow = document.getElementById('arrow');

let sideMenu = false;

function openSideMenu() {
  Menu.style.display = 'flex';
  sideMenu = true;
}

function closeSideMenu() {
  Menu.style.display = 'none';
  sideMenu = false;
}

function getMenu() {
  if (sideMenu === false) {
    openSideMenu();
  } else closeSideMenu();
}

openMenu.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);

if (getMenu === 0) {
  getMenu();
}

// Menu

const navLIst = document.querySelectorAll('.nav-list-item');
const navLIstArr = Array.from(navLIst);
navLIstArr.forEach((list) => {
  list.addEventListener('click', () => {
    Menu.style.display = 'none';
  });
});

// Arrow button
const arrowIcon = document.getElementById('down');
arrowIcon.style.display = 'flex';
arrowIcon.style.alignItems = 'center';
arrowIcon.style.justifyContent = 'center';
arrow.style.position = 'fixed';
arrow.style.bottom = '1rem';
arrow.style.right = '10px';
arrow.style.borderRadius = '50%';
arrow.style.color = '#ec5242';
arrow.style.padding = '5px 15px';
arrow.style.border = '2px solid #ec5242';
arrow.style.width = '1px';
arrow.style.cursor = 'pointer';
arrow.style.display = 'none';
arrow.style.zIndex = '20';

function getArrow() {
  if (
    document.body.scrollTop >= 100
    || document.documentElement.scrollTop >= 100
  ) {
    arrow.style.display = 'block';
  } else arrow.style.display = 'none';
}

window.onscroll = getArrow;
function getTop() {
  document.documentElement.scrollTop = 0;
}

arrow.addEventListener('click', getTop);
