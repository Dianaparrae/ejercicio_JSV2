// Variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");

// Funciones
const guardarNombre = () => {
    let nombre = prompt("Ingresa su nombre");
    hNombre.innerHTML = "Hola: " + nombre;
}


//Onclicks
btnNombre.onclick = function () {
    guardarNombre();
}