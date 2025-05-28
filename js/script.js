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
// --- Funcionalidad Botón Enviar por WhatsApp (contacto.html) ---
const whatsAppBtn = document.getElementById('sendWhatsAppBtn');
// Asumimos que tu formulario está dentro de la sección con id="formulario-contacto"
// y es el primer (o único) <form> dentro de esa sección.
const contactFormForWhatsApp = document.querySelector('#formulario-contacto form');

if (whatsAppBtn && contactFormForWhatsApp) {
    whatsAppBtn.addEventListener('click', function() {
        // Obtener los valores de los campos del formulario
        const name = contactFormForWhatsApp.elements.name.value;
        const email = contactFormForWhatsApp.elements.email.value;
        const service = contactFormForWhatsApp.elements.servicio.value;
        const phone = contactFormForWhatsApp.elements.telefono.value; // Teléfono del visitante
        const company = contactFormForWhatsApp.elements.empresa.value;
        const message = contactFormForWhatsApp.elements.mensaje.value;

        // --- ¡IMPORTANTE! REEMPLAZA CON TU NÚMERO DE WHATSAPP ---
        // Formato internacional sin '+' o ceros iniciales si no son necesarios para wa.me,
        // pero sí el código de país. Para Argentina: 549 seguido de tu número sin el 0 y sin el 15.
        // Ejemplo: si tu número es +54 9 11 2345-6789, usa 5491123456789
        const tuNumeroWhatsApp = '549XXXXXXXXXX'; // ¡REEMPLAZA ESTO!

        // Construir el mensaje
        let waMessage = `¡Hola Alí! Te contacto desde tu sitio web:\n\n`;
        waMessage += `*Nombre:* ${name}\n`;
        waMessage += `*Email:* ${email}\n`;
        if (service) {
            waMessage += `*Servicio de Interés:* ${service}\n`;
        }
        if (phone) {
            waMessage += `*Teléfono del Contacto:* ${phone}\n`;
        }
        if (company) {
            waMessage += `*Empresa:* ${company}\n`;
        }
        waMessage += `*Mensaje:* ${message}\n`;

        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(waMessage);

        // Crear el enlace de WhatsApp
        const whatsappURL = `https://wa.me/${tuNumeroWhatsApp}?text=${encodedMessage}`;

        // Abrir WhatsApp en una nueva pestaña/aplicación
        window.open(whatsappURL, '_blank');
    });
}
