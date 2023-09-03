// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtener el elemento de entrada y el párrafo de mensaje del HTML
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Función para verificar el número adivinado
function checkGuess() {
    // Obtener el valor ingresado por el usuario
    const userGuess = parseInt(guessInput.value);

    // Comprobar si el número es válido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    // Comparar el número adivinado con el número aleatorio
    if (userGuess === randomNumber) {
        message.textContent = '¡Felicitaciones! Adivinaste el número.';
        message.style.color = 'green';
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'El número es mayor. Intenta nuevamente.';
        message.style.color = 'red';
        animateMessage();
    } else {
        message.textContent = 'El número es menor. Intenta nuevamente.';
        message.style.color = 'red';
        animateMessage();
    }
}

// Función para animar el mensaje
function animateMessage() {
    message.style.animation = 'none';
    message.offsetHeight; // Reiniciar la animación
    message.style.animation = null;
}

// Event listener para el botón de adivinar
document.getElementById('guessButton').addEventListener('click', checkGuess);