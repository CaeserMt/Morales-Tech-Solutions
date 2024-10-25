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
fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('menu').innerHTML = data;
    
                // Código para manejar el menú después de que se haya cargado
                const menuToggle = document.querySelector('.menu-toggle');
                const navUl = document.querySelector('header nav ul');
    
                if (menuToggle && navUl) {
                    menuToggle.addEventListener('click', () => {
                        navUl.classList.toggle('active'); // Alterna la clase 'active' en la lista de navegación
                    });
                } else {
                    console.error("El menú no se encontró en el DOM.");
                }
            })
            .catch(error => console.error('Error al cargar el menú:', error));



            
            window.onload = function() {
                const typedTextElement = document.getElementById("typed-text");
                const typedText = "¿Tu computadora está funcionando más lento de lo habitual? "; // El texto que se escribirá
                let i = 0;
                const speed = 50; // Velocidad de escritura en milisegundos
            
                function typeWriter() {
                    if (i < typedText.length) {
                        typedTextElement.innerHTML += typedText.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    } else {
                        typedTextElement.classList.add("animated-text"); // Añadir la clase cuando el texto termine
                    }
                }
            
                // Iniciar el efecto de escritura
                if (typedTextElement) {
                    typeWriter();
                } else {
                    console.error("El elemento con ID 'typed-text' no fue encontrado.");
                }
            };


       