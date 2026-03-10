// Activa la burbuja de la barra de navegación al pasar el cursor
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// Usamos mouseenter para que no sea necesario hacer clic
list.forEach((item) => item.addEventListener('mouseenter', activeLink));    