// Lógica para la Magic Nav Bar (Activación al pasar el mouse)
const list = document.querySelectorAll('.list');

function activeLink() {
    // Removemos la clase activa de todos
    list.forEach((item) => item.classList.remove('active'));
    // Se la agregamos al elemento sobre el que está el cursor
    this.classList.add('active');
}

// Cambiamos 'click' por 'mouseenter'
list.forEach((item) => item.addEventListener('mouseenter', activeLink));

// Nota: El código JS del menú radial se eliminó porque 
// ahora lo controlaremos de forma más nativa y fluida con CSS.