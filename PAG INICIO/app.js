// Obtener los elementos del formulario
const form = document.getElementById('questionnaire');
const resultSection = document.getElementById('result');
const message = document.getElementById('message');

// Añadir un evento al formulario para cuando se envíe
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const experience = document.getElementById('experience').value;

    // Crear el mensaje de respuesta
    message.innerText = `¡Gracias, ${name}! Has seleccionado ${experience} como tu nivel de experiencia y tu edad es ${age} años. Estás en el grupo de ${sex}s. ¡Vamos a ayudarte a mejorar!`;

    // Mostrar la sección de resultados
    resultSection.classList.remove('hidden');
});