// captura de elementos del DOM para las opciones piedra,papel,tijera
const botonPiedra = document.querySelector(".piedra");
const botonPapel = document.querySelector(".papel");
const botonTijera = document.querySelector(".tijera");

// captura de los elementos del DOM para el tablero de opciones
// usuario-pc
const manoUsuario = document.querySelector(".mano-usuario");
const manoCompu = document.querySelector(".mano-computadora");

// captura de los puntajes
const puntajeUsuario = document.querySelector(".puntaje-usuario");
const puntajeCompu = document.querySelector(".puntaje-computadora");

const labelResultado = document.querySelector(".resultado");

const tablero = document.querySelector(".tablero")

let eleccionUsuario = "";
let eleccionCompu = "";

let contUsuario = 0;
let contCompu = 0;

const swalInicio = () =>{
    Swal.fire(
        '¿Jugamos?',
        'Gana el primero que alcance los 3 puntos',
        'question'
    )
}
swalInicio();


botonPiedra.addEventListener('click',()=>{
    eleccionUsuario = "piedra"
    manoUsuario.src = "./assets/piedra_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario = "piedra";
        manoUsuario.src = "./assets/piedra_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    },2000)
})

botonPapel.addEventListener('click',()=>{
    eleccionUsuario = "papel"
    manoUsuario.src = "./assets/papel_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario = "papel";
        manoUsuario.src = "./assets/papel_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    },2000)
})

botonTijera.addEventListener('click',()=>{
    eleccionUsuario = "tijera"
    manoUsuario.src = "./assets/tijera_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario = "tijera";
        manoUsuario.src = "./assets/tijera_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    },2000)
})


