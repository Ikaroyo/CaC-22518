// Inicializacion del contador del carrito en 0
var contador = 0;

// Funcion para agregar al carrito
function addCart() {
    document.getElementById("items-carrito").innerHTML=(contador+1).toString();
    contador++;
}

// Funcion para remover del carrito
function removeCart() {
    if (contador === 0) {
    alert("No hay nada en el carrito");
    }else{
        document.getElementById("items-carrito").innerHTML=(contador-1).toString();
        contador--;
    }
}