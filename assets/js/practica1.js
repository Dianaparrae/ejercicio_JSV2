// DOM - Document Objet Model
// Variables
let btnAlerta = document.getElementById("btnAlerta");



const ventanaAlerta = () => {
    alert("prueba");
}


//Onclicks
btnAlerta.onclick = function () {
    ventanaAlerta();
}