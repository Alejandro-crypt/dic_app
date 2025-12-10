// ------------------------------ INICIO: DATOS DEL DICCIONARIO (BASE) ----------------------------
// Se inicializa el objeto vacío. Los términos y la lógica de búsqueda se añadirán en la siguiente rama.
const dictionaryData = {};
// ------------------------------ FIN: DATOS DEL DICCIONARIO (BASE) ----------------------------

// ------------------------------ INICIO: ANIMACIÓN DEL HEADER ----------------------------
// (El código de la animación se pegará aquí)
document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.getElementById('header-subtitle');
    
    // Función para activar la animación de desvanecimiento (fade-in)
    const animateHeader = () => {
        // Aseguramos que el subtítulo exista antes de manipularlo
        if (subtitleElement) {
             subtitleElement.classList.add('is-visible');
        }
        
        // Opcional: Cambiar el color del subtítulo después de 3 segundos
        setTimeout(() => {
            if (subtitleElement) {
                subtitleElement.style.color = '#388e3c'; 
            }
        }, 3000);
    };

    setTimeout(animateHeader, 500);
});
// ------------------------------ FIN: ANIMACIÓN DEL HEADER ------------------------------------------------

// ------------------------------ INICIO: LÓGICA DE LA APLICACIÓN ----------------------------
// (El código de las funciones y event listeners se pegará aquí)

// ------------------------------ FIN: LÓGICA DE LA APLICACIÓN ------------------------------------------------