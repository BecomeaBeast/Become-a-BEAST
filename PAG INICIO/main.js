// main.js
document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe de forma tradicional

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const experience = document.getElementById('experience').value;
    const goal = document.getElementById('goal').value;

    // Mostrar los datos del formulario
    alert(`¡Gracias por registrarte, ${name}!\nEdad: ${age}\nExperiencia: ${experience}\nObjetivo: ${goal}`);

    // Aquí puedes enviar estos datos a un servidor, por ejemplo, para guardar la información
});