document.addEventListener("DOMContentLoaded", function() {
    // Mostrar texto de introducción durante 3 segundos
    setTimeout(function() {
        document.querySelector(".intro-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
        
        // Mostrar contenido con animación
        setTimeout(function() {
            document.getElementById("content").style.opacity = 1;
        }, 100);
    }, 5000); // Espera de 3 segundos antes de ocultar la intro
});
