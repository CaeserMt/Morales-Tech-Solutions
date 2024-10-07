
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


// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia de imagen cada 5 segundos
setInterval(showNextSlide, 5000);


