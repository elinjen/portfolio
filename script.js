//select elements
const menuBtn = document.querySelector('.menu-icon button');
const navList = document.querySelector('nav ul');

//menu button toggle
menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});