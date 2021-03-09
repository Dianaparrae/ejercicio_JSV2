// Variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");

// Funciones
const guardarNombre = () => {
    let nombre = prompt("Ingresa su nombre");
    console.log(nombre);
    if (nombre === "") {
        alert("Favor escribir su nombre antes de aceptar");
    } else {
        hNombre.innerHTML = "Hola: " + nombre;
    }

}

//Onclicks
btnNombre.onclick = function () {
    guardarNombre();
}