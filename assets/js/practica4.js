let eNombre = document.getElementById("eNombre");
let eEdad = document.getElementById("eEdad");
let eDocumento = document.getElementById("eDocumento");
let eTelefono = document.getElementById("eTelefono");

// Funciones
const guardarNombre = () => {

    let nombre = prompt("Ingresa su nombre completo");
    console.log(nombre);
    if (nombre === "") {
        alert("Favor escribir su nombre antes de aceptar");
    } else {
    let edad = prompt("Ingrese su edad");
    console.log(edad);
    if (edad === "") {
        alert("Favor escribir su edad antes de continuar");
    } else {
    let documento = prompt("Ingrese su documento de identificación");
    console.log(documento);
    if (documento === "") {
        alert("Favor escribir su documento antes de continuar");
    } else {
    let telefono = prompt("Ingrese su teléfono de contacto");
    console.log(telefono);
    if (telefono === "") {
        alert("Favor escribir su teléfono de contacto, retorne nuevamente");
    } else {
        eNombre.innerHTML = "Nombre: " + nombre;
        eEdad.innerHTML = "Edad: " + edad;
        eDocumento.innerHTML = "Documento: " + documento;     
        eTelefono.innerHTML = "Teléfono: " + telefono;
    }
    } 
    }
    }
    }



//Onclicks
mensajeInf.onclick = function () {
    guardarNombre();

}



