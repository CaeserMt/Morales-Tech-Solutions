

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

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el footer dinámicamente
    const footerContainer = document.getElementById('footer');

    if (footerContainer) {
        fetch('footer.html')
            .then(response => {
                if (response.ok) {
                    return response.text(); // Obtener el contenido como texto
                } else {
                    throw new Error(`Error al cargar el footer: ${response.statusText}`);
                }
            })
            .then(data => {
                footerContainer.innerHTML = data; // Insertar el contenido en el div
            })
            .catch(error => {
                console.error('Error al cargar el footer:', error);
            });
    } else {
        console.warn("No se encontró el contenedor del footer (#footer).");
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
    autoSlideInterval = setInterval(showNextSlide, 3000);
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
                const typedText = "Bienvenido a Morales Tech Solutions Advanced"; // El texto que se escribirá
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

let userName = "";
let isAskingName = true;

function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";

    if (chatbox.style.display === "block") {
        initiateConversation();
    }
}

function initiateConversation() {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = ""; // Clear previous messages

    const botMessage = createBotMessage("¡Hola! Antes de comenzar, ¿puedes decirme tu nombre?");
    messagesContainer.appendChild(botMessage);
    scrollToBottom();
}

function showOptions() {
    const messagesContainer = document.getElementById("messages");

    const options = ["Servicios", "Contactar", "Redes Sociales", "Insumos de Trabajo", "Consulta"];
    const botMessage = createBotMessage("Selecciona una opción:");

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.className = "option-button";
        optionButton.onclick = () => handleUserOption(option);
        optionsContainer.appendChild(optionButton);
    });

    botMessage.appendChild(optionsContainer);
    messagesContainer.appendChild(botMessage);
    scrollToBottom();
}

function handleUserOption(option) {
    const messagesContainer = document.getElementById("messages");
    const userMessage = createUserMessage(option);
    messagesContainer.appendChild(userMessage);

    let responseText;
    switch (option) {
        case "Servicios":
            responseText = `${userName}, ofrecemos servicios de mantenimiento, reparación y optimización para laptops y PCs. ¿Te gustaría más detalles?`;
            break;
        case "Contactar":
            responseText = "Puedes llamarnos al 903208170 o enviarnos un correo a moralestechsolutionss@gmail.com.";
            break;
            case "Redes Sociales":
    responseText = "Síguenos en nuestras redes sociales:";
    
    const socialLinks = `
        <div class="social-buttons">
            <a href='https://web.facebook.com/Caesermt/' target='_blank' class='social-button'>Facebook</a>
            <a href='https://www.instagram.com/moralestechsolution' target='_blank' class='social-button'>Instagram</a>
        </div>`;
    
    responseText += socialLinks;
    break;

        case "Insumos de Trabajo":
            responseText = `${userName}, utilizamos insumos de alta calidad para asegurar la mejor performance en nuestros servicios, como pastas térmicas y pads de disipación de última generación.`;
            break;
        case "Consulta":
            responseText = `Estoy aquí para ayudarte, ${userName}. ¿Qué necesitas saber?`;
            break;
        default:
            responseText = "Selecciona una opción válida.";
    }

    const botResponse = createBotMessage(responseText);
    messagesContainer.appendChild(botResponse);
    scrollToBottom();
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        const messagesContainer = document.getElementById("messages");

        const userMessageDiv = createUserMessage(userMessage);
        messagesContainer.appendChild(userMessageDiv);

        if (isAskingName) {
            userName = userMessage;
            isAskingName = false;
            const botMessage = createBotMessage(`¡Gracias, ${userName}! ¿En qué puedo ayudarte hoy?`);
            messagesContainer.appendChild(botMessage);
            showOptions();
        } else {
            handleUserInput(userMessage);
        }

        userInput.value = "";
        scrollToBottom();
    }
}

function handleUserInput(input) {
    const messagesContainer = document.getElementById("messages");
    let responseText;

    if (/^(sí|quiero saber más)$/i.test(input)) {
        responseText = `${userName}, estamos encantados de ofrecer más detalles. Realizamos limpieza profunda, aplicación de pasta térmica de alta calidad, y reemplazo de pads térmicos para mantener tus dispositivos en perfecto estado.`;
    } else if (/contactar/i.test(input)) {
        responseText = "Puedes llamarnos al 903208170 o enviarnos un correo a moralestechsolutionss@gmail.com. ¡Esperamos tu mensaje!";
    } else if (/insumo|utilizan/i.test(input)) {
        responseText = `${userName}, usamos productos de primera calidad como la pasta térmica Noctua NT-H1 y Arctic MX-4, ideales para laptops de alto rendimiento.`;
    } else if (/horario/i.test(input)) {
        responseText = "Nuestro horario de atencion: 9 am a 2 pm. ¡Esperamos tu visita!";
    
    } else if (/ubicacion|ubican/i.test(input)) {
        responseText = "Nos encontramos en los Jardines de Casablanca!";
    } else if (/servicios|Servicio/i.test(input)) {
        responseText = "Soporte tecnico, mantenimiento de computadoras y etc";


    } else if (/(misión|mision)/i.test(input)) {
        responseText = "Nuestra misión en MORALES TECH SOLUTIONS es brindar soluciones avanzadas en mantenimiento, ensamblaje y optimización de equipos, asegurando calidad y satisfacción para cada cliente.";
    } else if (/(visión|vision)/i.test(input)) {
        responseText = "Aspiramos a convertirnos en líderes en soluciones tecnológicas en Latinoamérica, destacando por nuestro compromiso con la innovación y la satisfacción del cliente.";
    } else if (/(valores|valor)/i.test(input)) {
        responseText = "En MORALES TECH SOLUTIONS, nuestros valores son compromiso, innovación, responsabilidad y excelencia. Nos dedicamos a superar tus expectativas en cada servicio.";
    } else if (/(mantenimiento de laptops|limpieza de laptops|cuidado de laptops|limpieza)/i.test(input)) {
        responseText = "Ofrecemos mantenimiento preventivo y correctivo para laptops, con limpieza profunda, cambio de pasta térmica, y reemplazo de pads térmicos, usando productos de alta calidad como NOCTUA NT-H1 y Artic MX-4.";
    } else if (/(reparación de PC|reparación de escritorio|problema con PC)/i.test(input)) {
        responseText = "Realizamos reparación de PCs de escritorio, incluyendo diagnóstico de fallas, actualización de componentes, y ensamblaje personalizado según tus necesidades.";
    } else if (/(optimización de equipos|mejorar rendimiento|tunear)/i.test(input)) {
        responseText = "Podemos optimizar el rendimiento de tu equipo mediante ajustes en el sistema operativo y hardware, logrando una experiencia más rápida y eficiente.";
    } else if (/(soporte técnico|asistencia técnica)/i.test(input)) {
        responseText = "Nuestro equipo de soporte técnico está listo para resolver tus problemas de software y hardware, tanto de manera presencial como remota, ¡para tu comodidad!";
    } else if (/(instalación de redes|configuración de redes|redes y cableado)/i.test(input)) {
        responseText = "Ofrecemos instalación y configuración de redes y cableado estructurado, ya sea en tu hogar u oficina, garantizando una conexión óptima y segura.";
    } else if (/(asistencia remota|soporte remoto|reparación a distancia)/i.test(input)) {
        responseText = "Ofrecemos asistencia remota para solucionar problemas de software sin necesidad de que te desplaces. ¡Ideal para resolver problemas rápidamente!";
    } else if (/(compromiso|calidad del servicio)/i.test(input)) {
        responseText = "Nos comprometemos a brindar un servicio de calidad en cada proyecto, asegurando soluciones tecnológicas que superen tus expectativas.";
    } else if (/(innovación|tecnología avanzada)/i.test(input)) {
        responseText = "En Morales Tech Solutions, siempre estamos a la vanguardia de la tecnología para ofrecerte servicios optimizados y con los mejores resultados.";
    } else if (/(responsabilidad|confianza)/i.test(input)) {
        responseText = "Valoramos la responsabilidad y confianza de nuestros clientes, asegurándonos de que cada servicio cumpla con los más altos estándares de seguridad y calidad.";
    } else if (/(excelencia|superar expectativas)/i.test(input)) {
        responseText = "Nos esforzamos por ofrecer un servicio de excelencia, trabajando cada día para superar las expectativas de nuestros clientes.";
    } else if (/(servicios adicionales|otros servicios|qué más hacen)/i.test(input)) {
        responseText = "Además de mantenimiento y reparación, también ofrecemos soporte técnico remoto, configuración de redes, optimización de sistemas, y más. ¡Todo lo que necesitas para mantener tus equipos en óptimas condiciones!";
    } else if (/(liderazgo|referente en tecnología)/i.test(input)) {
        responseText = "Buscamos convertirnos en líderes en soluciones tecnológicas en Latinoamérica, destacando por nuestra innovación y compromiso con el cliente.";
    } else if (/(garantía de servicio|garantizan|seguridad del servicio)/i.test(input)) {
        responseText = "Cada uno de nuestros servicios cuenta con una garantía de satisfacción para que tengas total tranquilidad. En Morales Tech Solutions, la calidad es lo primero.";
    } else if (/(distinción|qué los hace diferentes|destacan)/i.test(input)) {
        responseText = "Lo que nos diferencia es nuestro compromiso con la innovación, la excelencia, y la dedicación a cada cliente. Utilizamos herramientas de alta calidad y nos mantenemos actualizados en las últimas tecnologías.";
    
    
}
 else if (/(limpieza profunda|limpieza ventilador|limpieza interna)/i.test(input)) {
    responseText = "Realizamos una limpieza profunda de ventiladores, fuente de poder, placa madre y el case de tu equipo, eliminando polvo y suciedad para que funcione en óptimas condiciones.";
} else if (/(eliminar óxido|óxido disipador|problema de óxido)/i.test(input)) {
    responseText = "Ofrecemos eliminación de óxido en los componentes del disipador para mejorar la conducción térmica, lo cual optimiza la eficiencia y el funcionamiento de tu CPU.";
} else if (/(reemplazo ssd|mejorar velocidad|dar nueva vida a la cpu)/i.test(input)) {
    responseText = "Podemos reemplazar tu disco HDD antiguo por un SSD moderno, lo que mejora significativamente la velocidad de arranque y carga de aplicaciones, dándole nueva vida a tu CPU.";
} else if (/(pasta térmica|mejor disipación de calor|calidad de pasta termica)/i.test(input)) {
    responseText = "Aplicamos pasta térmica de alta calidad como NOCTUA NT-H1 y Artic MX-4, asegurando una excelente disipación del calor y protegiendo tus componentes del sobrecalentamiento.";
} else if (/(reensamblaje|corregir ensamblaje|armado correcto)/i.test(input)) {
    responseText = "Si tu equipo tiene problemas debido a un mal ensamblaje previo, podemos desarmarlo y reensamblarlo correctamente, asegurando que cada componente esté en su lugar para un rendimiento óptimo.";
} else if (/(reducir sobrecalentamiento|problema de temperatura|cpu caliente)/i.test(input)) {
    responseText = "Nuestro servicio incluye una limpieza y aplicación de pasta térmica de calidad para reducir el sobrecalentamiento de tu CPU, manteniendo el equipo a una temperatura segura.";
} else if (/(vida útil|prolongar vida de cpu|cuidar cpu)/i.test(input)) {
    responseText = "Nuestros servicios de mantenimiento y optimización no solo mejoran el rendimiento de tu CPU, sino que también prolongan su vida útil, asegurando un equipo confiable por más tiempo.";
} else if (/(problemas de rendimiento|cpu lento|equipo lento)/i.test(input)) {
    responseText = "Si tu equipo está lento, puede ser por acumulación de polvo, pasta térmica seca o un disco HDD anticuado. Nuestros servicios de limpieza y reemplazo de SSD pueden solucionar estos problemas.";
} else if (/(rendimiento óptimo|mejorar velocidad|optimizar rendimiento)/i.test(input)) {
    responseText = "Nuestro servicio de optimización incluye limpieza interna, aplicación de pasta térmica de calidad y reemplazo de componentes, para que tu equipo tenga un rendimiento óptimo y funcione como nuevo.";
} else if (/(beneficios de ssd|ventajas de ssd|ssd frente a hdd)/i.test(input)) {
    responseText = "El reemplazo de HDD por SSD en tu equipo mejora la velocidad de arranque y de carga de aplicaciones, brindando una experiencia más ágil y moderna.";
} else if (/(equipos de sobremesa|pc de escritorio|laptops)/i.test(input)) {
    responseText = "Ofrecemos mantenimiento tanto para PCs de escritorio como para laptops, con servicios de limpieza, reemplazo de pasta térmica y reensamblaje para ambos tipos de equipos.";
} else if (/(garantía de servicio|calidad asegurada|confianza en servicios)/i.test(input)) {
    responseText = "Garantizamos calidad en cada servicio. En Morales Tech Solutions utilizamos productos y herramientas de alta calidad para cuidar y mejorar tus dispositivos.";
}




    
     else {
        responseText = "No estoy seguro de cómo responder a eso. ¿Podrías preguntarme sobre 'Servicios', 'Insumos de Trabajo', o cualquier otra opción de ayuda?";
    }

    const botResponse = createBotMessage(responseText);
    messagesContainer.appendChild(botResponse);
    scrollToBottom();
}

function createBotMessage(text) {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = text;
    return botMessage;
}

function createUserMessage(text) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-message";
    userMessageDiv.textContent = text;
    return userMessageDiv;
}

function scrollToBottom() {
    const messagesContainer = document.getElementById("messages");
    requestAnimationFrame(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}
