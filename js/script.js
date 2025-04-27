// File: js/script.js

// Selecciona el botón hamburguesa y la lista de navegación
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('#primary-navigation'); // El <ul> del menú

// Añade un 'escuchador de eventos' para el clic en el botón
mobileNavToggle.addEventListener('click', () => {
    // Añade o quita la clase 'nav-open' de la lista <ul>
    // classList.toggle devuelve true si la clase FUE AÑADIDA, false si FUE QUITADA
    const isOpen = primaryNavigation.classList.toggle('nav-open');

    // Actualiza el atributo aria-expanded para accesibilidad
    mobileNavToggle.setAttribute('aria-expanded', isOpen);

    // Cambia el icono del botón
    if (isOpen) {
        mobileNavToggle.innerHTML = '✕'; // Icono de 'Cerrar'
    } else {
        mobileNavToggle.innerHTML = '☰'; // Icono de 'Menú' (hamburguesa)
    }
});

// --- Opcional: Cerrar menú si se hace clic fuera de él ---
// (Puedes descomentar este bloque si quieres añadir esta funcionalidad)
/*
document.addEventListener('click', (event) => {
    // Comprueba si el menú está abierto
    const isNavOpen = primaryNavigation.classList.contains('nav-open');

    // Si está abierto Y el clic NO fue dentro del menú NI en el botón de toggle...
    if (isNavOpen && !primaryNavigation.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        // ...entonces cierra el menú
        primaryNavigation.classList.remove('nav-open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.innerHTML = '☰';
    }
});
*/
