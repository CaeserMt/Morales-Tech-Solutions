
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active'); // Alterna la clase 'active' en la lista de navegación
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevenir el envío del formulario
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;
        const whatsappNumber = "+51 903 208 170"; // Tu número de WhatsApp
        const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

        // Abrir WhatsApp con el mensaje
        window.open(whatsappURL, '_blank');
        contactForm.reset(); // Limpiar el formulario después de enviar
    });
});
