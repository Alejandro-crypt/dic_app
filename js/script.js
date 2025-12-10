// ------------------------------ INICIO: DATOS DEL DICCIONARIO ----------------------------
// MODIFICA SÓLO ESTE OBJETO para añadir o cambiar términos.
const dictionaryData = {
    // FORMATO: "palabra_en_minusculas": "Definición completa del término."
    
    // --- EJEMPLOS INICIALES ---
    "git": "Sistema de control de versiones distribuido, esencial para el seguimiento de cambios en el código de un proyecto.",
    "push": "Operación de Git que sube los cambios (commits) desde el repositorio local al repositorio remoto (ej. GitHub).",
    "rama": "Línea de desarrollo independiente que permite trabajar en nuevas funcionalidades sin afectar la versión principal del proyecto.",
    "frontend": "La capa de presentación de una aplicación web, que incluye HTML, CSS y JavaScript, con la que el usuario interactúa.",
    "minimalista": "Estilo de diseño caracterizado por la sencillez, la claridad y el uso limitado de colores y elementos decorativos.",
    // --- AÑADE TUS PROPIOS TÉRMINOS AQUÍ ABAJO ---
    // ...
    
};
// ------------------------------ FIN: DATOS DEL DICCIONARIO ----------------------------


// ------------------------------ INICIO: LÓGICA DE LA APLICACIÓN ----------------------------
const form = document.getElementById('search-form');
const input = document.getElementById('word-input');
const resultContainer = document.getElementById('result-container');

// Función para mostrar el resultado
function displayResult(word, definition) {
    resultContainer.innerHTML = `
        <h3 class="word-title">Definición de ${word.toUpperCase()}</h3>
        <p class="definition">${definition}</p>
    `;
}

// Función para manejar el error
function displayError(word) {
    resultContainer.innerHTML = `
        <p class="error-message">❌ Término no encontrado: **${word}**.</p>
        <p class="placeholder-text">Intenta con otro concepto o verifica la ortografía.</p>
    `;
}

// Manejador del evento de búsqueda
function handleSearch(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Preprocesa la entrada: quita espacios y convierte a minúsculas
    const searchTerm = input.value.trim().toLowerCase(); 

    if (searchTerm === "") {
        resultContainer.innerHTML = '<p class="placeholder-text">Por favor, escribe un término válido.</p>';
        return;
    }

    // Busca la definición en la "base de datos"
    const definition = dictionaryData[searchTerm];

    if (definition) {
        displayResult(searchTerm, definition);
    } else {
        displayError(searchTerm);
    }
    
    // Opcional: limpiar la caja de texto después de buscar
    input.value = ''; 
}

// Asigna el evento al formulario
form.addEventListener('submit', handleSearch);
// ------------------------------ FIN: LÓGICA DE LA APLICACIÓN ----------------------------