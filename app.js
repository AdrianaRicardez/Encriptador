

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encrypt() {
    var message = document.getElementById("message").value;
    var encryptedMessage = btoa(message); // Base64 Encoding
    document.getElementById("result").innerText = "Mensaje encriptado: " + encryptedMessage;
}

function decrypt() {
    var encryptedMessage = document.getElementById("result").innerText.split(": ")[1];
    var decryptedMessage = atob(encryptedMessage); // Base64 Decoding
    document.getElementById("result").innerText = "Mensaje desencriptado: " + decryptedMessage;
}




asignarTextoElemento('h1','Encriptador y Desencriptador!');
asignarTextoElemento('p',`Indica una palabra`);