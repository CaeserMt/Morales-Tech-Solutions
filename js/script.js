
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active'); // Alterna la clase 'active' en la lista de navegación
        });
    } else {
        console.error("El menú no se encontró en el DOM.");
    }
});


//document.addEventListener('DOMContentLoaded', () => {
  //  const menuToggle = document.querySelector('.menu-toggle');
    //const navUl = document.querySelector('header nav ul');

    //menuToggle.addEventListener('click', () => {
      //  navUl.classList.toggle('active'); // Alterna la clase 'active' en la lista de navegación
    //});
//});



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

//let currentIndex = 0;
//const slides = document.querySelectorAll('.slide');

//function showNextSlide() {
  //  slides[currentIndex].classList.remove('active');
    //currentIndex = (currentIndex + 1) % slides.length;
    //slides[currentIndex].classList.add('active');
    //document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
//}

// Cambia de imagen cada 5 segundos
//setInterval(showNextSlide, 7000);

// Para controlar el deslizamiento manual
//document.querySelector('.next-button').addEventListener('click', nextSlide);

//Mantenimiento vizualizacion de imagenes



 //banner 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

// Función para mostrar la siguiente diapositiva
function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para mostrar la diapositiva anterior
function showPrevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia de imagen automáticamente cada 7 segundos
function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 7000);
}

// Detiene el auto-slide cuando se usa la navegación manual
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eventos para las flechas de navegación
document.querySelector('.next-button').addEventListener('click', () => {
    stopAutoSlide();  // Detiene el auto-slide
    showNextSlide();  // Avanza manualmente
    startAutoSlide(); // Reinicia el auto-slide después de la interacción
});

document.querySelector('.prev-button').addEventListener('click', () => {
    stopAutoSlide();  // Detiene el auto-slide
    showPrevSlide();  // Retrocede manualmente
    startAutoSlide(); // Reinicia el auto-slide después de la interacción
});

// Inicia el auto-slide cuando se carga la página
startAutoSlide();


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
                const typedText = "Bienvenido a Morales Tech Solutions"; // El texto que se escribirá
                let i = 0;
                const speed = 100; // Velocidad de escritura en milisegundos
            
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


           
//chat bot 


function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    const messages = document.getElementById('messages');
    
    // Cambiar la visibilidad del chat
    chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';

    // Si se está abriendo el chat, enviar el mensaje de bienvenida
    if (chatbox.style.display === 'block') {
        const currentHour = new Date().getHours();
        const greeting = (currentHour < 6 || currentHour >= 18) ? "¡Buenas noches!" : "¡Buenos días!";
        
        displayMessage(greeting);
        displayMessage("Hola, me llamo Caeser. ¿En qué puedo ayudarte?");
    }
}


function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message) {
        displayMessage('Usuario: ' + message);
        userInput.value = '';

        // Respuesta programada
        const botResponse = getBotResponse(message);
        setTimeout(() => {
            displayMessage('Bot: ' + botResponse);
        }, 500);
    }
}

function displayMessage(message) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Desplazar hacia abajo
}

function getBotResponse(message) {
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "servicios": "Ofrecemos mantenimiento, reparación y optimización de equipos.",
        "contacto": "Puedes contactarnos a través de nuestro formulario o en nuestras redes sociales.",
        "gracias": "¡De nada! Si tienes más preguntas, no dudes en preguntar.",
        "default": "Lo siento, no entiendo esa pregunta. ¿Puedes reformularla?"
    };
    return responses[message.toLowerCase()] || responses["default"];
}


