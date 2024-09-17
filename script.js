// Función para actualizar la fecha y hora
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(now);
    dateTimeElement.textContent = formattedDateTime;
}

// Ejecutar la función por primera vez y luego cada segundo
updateDateTime();
setInterval(updateDateTime, 1000);

// Función para agregar un nuevo artículo
function addArticle() {
    const title = document.getElementById('article-title').value;
    const description = document.getElementById('article-description').value;

    // Almacenar el artículo en localStorage (simplificado)
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push({ title, description });
    localStorage.setItem('articles', JSON.stringify(articles));

    // Actualizar la lista de artículos (implementación simplificada)
    // Aquí deberías crear un elemento HTML para el nuevo artículo y agregarlo al DOM
    // ...

    // Actualizar el contador de artículos
    updateArticleCount();
}

// Función para actualizar los contadores de artículos
function updateArticleCount() {
    // Obtener los artículos del localStorage
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    // Actualizar los contadores de cada sección
    document.getElementById('noticias-count').textContent = `Total de artículos: ${articles.length}`;
    // ... actualizar los demás contadores ...
}

// Función para enviar el formulario de contacto (simplificado)
function submitContactForm() {
    const name = document.getElementById('contact-name').value;
    const message = document.getElementById('contact-message').value;

    // Simular envío a un servidor (en realidad, enviarías esto a una API)
    console.log('Nombre:', name);
    console.log('Mensaje:', message);
}

// Event listener para el formulario de agregar artículo
document.getElementById('article-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addArticle();
});

// Event listener para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    submitContactForm();
});

// Cargar los artículos iniciales al cargar la página (si los hay)
updateArticleCount();
// ... cargar los artículos del localStorage y mostrarlos en la página ...