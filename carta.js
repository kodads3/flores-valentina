function mostrarCarta() {

    const carta = document.getElementById("carta");

    carta.classList.add("abierta");

}

function cerrarCarta() {

    const carta = document.getElementById("carta");

    carta.classList.remove("abierta");

}

/* Cerrar haciendo clic fuera de la carta */

document.getElementById("carta").addEventListener("click", function(event) {

    if (event.target === this) {
        cerrarCarta();
    }

});