document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active'); // Alterna la clase 'active' en la lista de navegación
    });
});





let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Ciclo al inicio
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

// Abre el lightbox
function openLightbox(index) {
    var lightbox = document.getElementById("lightbox");
    var images = document.querySelectorAll(".gallery-slide img");
    var fullImage = document.getElementById("fullImage");
    var caption = document.getElementById("caption");

    lightbox.style.display = "block";
    currentSlide = index;
    fullImage.src = images[currentSlide].src;
    caption.innerHTML = images[currentSlide].alt;
}

// Cierra el lightbox
document.querySelector(".close").onclick = function() {
    document.getElementById("lightbox").style.display = "none";
};

// Cambia de imagen
var currentSlide = 0;
function changeSlide(n) {
    var images = document.querySelectorAll(".gallery-slide img");
    currentSlide = (currentSlide + n + images.length) % images.length;
    var fullImage = document.getElementById("fullImage");
    var caption = document.getElementById("caption");
    fullImage.src = images[currentSlide].src;
    caption.innerHTML = images[currentSlide].alt;
}

// Cuando se hace clic en una imagen, abrir en pantalla completa
document.querySelectorAll(".gallery-slide img").forEach(function(image, index) {
    image.onclick = function() {
        openLightbox(index);
    };
});
