const features= document.querySelector('.features');
const company = document.querySelector('.company');
const navMenu = document.querySelector('.overlay-content');
const menuIcon = document.querySelector('.hamburger-menu-icon');
const closeMenuCross = document.querySelector('.close-menu');

function toggleMenu(){
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('display-none')
}

function openNav() {
    navMenu.style.display = "block";
 }
  
function closeNav() {
    navMenu.style.display = "";
    navMenu.classList.add('display-none')
  }

closeMenuCross.addEventListener('click', closeNav)
menuIcon.addEventListener('click', openNav)
features.addEventListener('click', toggleMenu)
company.addEventListener('click', toggleMenu)

