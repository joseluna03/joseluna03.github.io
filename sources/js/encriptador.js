const textarea = document.querySelector("#textarea");
const mensajeProcesado = document.querySelector(".mensaje-procesado");
const ningunMensaje = document.querySelector(".ningun-mensaje");
const botonCop=document.querySelector(".boton-copiar");
const arraySustitucion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function visibilityNingunMensaje(status) {
    if (status == true) {
        document.querySelector(".mensaje img").style.visibility="visible"
        ningunMensaje.style.visibility = "visible"
    } else {
        ningunMensaje.style.visibility = "hidden"
        document.querySelector(".mensaje img").style.visibility="hidden"
    }
}

function encriptar(cadena) {
    cadena = cadena.toLowerCase();
    for (let x = 0; x < arraySustitucion.length; x++) {
        if (cadena.includes(arraySustitucion[x][0])) {
            cadena = cadena.replaceAll(arraySustitucion[x][0], arraySustitucion[x][1]);
        }
    }
    return cadena;
}


function botonEnc() {
    let output = encriptar(textarea.value)
    mensajeProcesado.innerHTML = output;
    textarea.value = "";
    if (mensajeProcesado.innerHTML != "") {
        visibilityNingunMensaje(false);
    } else {
        alert("no ha introducido ningun texto para encriptar");
    }
    mostrarBotonCopiar(); 
}

function desencriptar(cadena) {
    cadena = cadena.toLowerCase();
    for (let x = 0; x < arraySustitucion.length; x++) {
        if (cadena.includes(arraySustitucion[x][1])) {
            cadena = cadena.replaceAll(arraySustitucion[x][1], arraySustitucion[x][0]);
        }
    }
    return cadena;
}

function botonDesenc() {
    let output = desencriptar(textarea.value)
    mensajeProcesado.innerHTML = output;
    textarea.value = "";
    if (mensajeProcesado.innerHTML != "") {
        visibilityNingunMensaje(false);
    } else {
        alert("no ha introducido ningun texto para desencriptar");
    }
    mostrarBotonCopiar(); 
}

function botonCopiar() {
    navigator.clipboard.writeText(mensajeProcesado.innerHTML)
    mensajeProcesado.innerHTML = "";
    visibilityNingunMensaje(true);
    mostrarBotonCopiar(); 
}


function mostrarBotonCopiar(){
    if (mensajeProcesado.innerHTML!=""){
botonCop.style.visibility="visible";
    } else {
        botonCop.style.visibility="hidden";
    }
}



