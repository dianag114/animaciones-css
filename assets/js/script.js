// Lógica para la Magic Nav Bar
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// Lógica para el Radial Share Menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.radial-menu');

toggle.onclick = function() {
    menu.classList.toggle('active');
}