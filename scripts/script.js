const menuToggle = document.querySelector('.menu-toggle input');
const navUl = document.querySelector('nav ul');
const navLink = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function () {
    navUl.classList.toggle('slide');
});

const year = document.querySelector('.year');
const date = new Date();
const yearNow = date.getFullYear();
year.innerText = yearNow;

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});