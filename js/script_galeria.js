// Funciones que se ejecutan en carga de la pagina
// onload call loadImages function with the first button selected
window.onload = function () {
    loadImages("camioneta");
}


let cantidad;
let vehiculoActual = '';
let camionetaBoolean=false, autoBoolean=false, motoBoolean=false;

// Funcion de carga de imagenes dentro del div carousel-container

function loadImages(tipoVehiculos) {
    // Ruta de la carpeta de imagenes
    vehiculoActual = tipoVehiculos;
    const path = "img/Vehiculos/galeria/";
    borrarImagenes();

    if (tipoVehiculos == "camioneta") {
        cantidad = 7;
        camionetaBoolean=true;
        autoBoolean=false;
        motoBoolean=false;
        removeSelectedClass();
        document.getElementById("btn-camioneta").classList.add("selected");
    }
    else if (tipoVehiculos == "auto") {
        cantidad = 4;
        camionetaBoolean=false;
        autoBoolean=true;
        motoBoolean=false;
        removeSelectedClass();
        document.getElementById("btn-auto").classList.add("selected");
    }
    else if (tipoVehiculos == "utilitario") {
        cantidad = 3;
        camionetaBoolean=false;
        autoBoolean=false;
        motoBoolean=true;
        removeSelectedClass();
        document.getElementById("btn-utilitario").classList.add("selected");
    }

    // Cantidad de imagenes a cargar
    if (tipoVehiculos == 'camioneta') {
        cantidad = 7;
    } else if (tipoVehiculos == 'auto') {
        cantidad = 4;
    } else if (tipoVehiculos == 'utilitario') {
        cantidad = 3;
    }


    // Bucle de creacion de elementos dentro del div galeria
    for (var i = 1; i <= cantidad; i++) {
        var img = document.createElement("img");
        img.src = path + tipoVehiculos + i + ".jpg";
        img.className = "imagenes";
        // add onclick call to bigImage function
        img.onclick = function () {
            popupImage(this);
        }

        img.alt = "Imagen " + i;
        document.getElementById("gallery-container").appendChild(img);
    }


}

function removeSelectedClass(){
    document.getElementById("btn-camioneta").classList.remove("selected");
    document.getElementById("btn-auto").classList.remove("selected");
    document.getElementById("btn-utilitario").classList.remove("selected");
}

function borrarImagenes() {
    var galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = "";
}

// Funcion de carga de imagen en el div popup
function popupImage(img) {
    var popup = document.getElementById("popup");
    popup.classList.add("active");
    popup.style.display = "block";

    popup.innerHTML = "<img src='" + img.src + "' alt='" + img.alt + "' class='popup-img' onclick='inactivePopup()' />";

    var buttonCarrousel = document.getElementById("button-carrousel-l");
    buttonCarrousel.classList.add("activeb");

    var buttonCarrousel = document.getElementById("button-carrousel-r");
    buttonCarrousel.classList.add("activeb");

}

function inactivePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("active");
    popup.style.display = "none";
    var buttonCarrousel = document.getElementById("button-carrousel-l");
    buttonCarrousel.classList.remove("activeb");

    var buttonCarrousel = document.getElementById("button-carrousel-r");
    buttonCarrousel.classList.remove("activeb");
}

function carrouselMove(i) {
    // Obtener la imagen actual
    var img = document.getElementsByClassName("popup-img")[0];
    // Obtener el numero de la imagen actual
    var num = img.src.split("/").pop().split(".")[0];
    num = parseInt(num.split(vehiculoActual)[1]);


    // Si el parametro es 1

    if (i == 1) {
        // Si el numero es menor a la cantidad de imagenes
        if (num < cantidad) {
            // Sumar 1 al numero
            num++;
        } else {
            // Si no, asignar 1
            num = 1;
        }
    }
    // Si el parametro es -1
    else if (i == -1) {
        // Si el numero es mayor a 1
        if (num > 1) {
            // Restar 1 al numero
            num--;
        } else {
            // Si no, asignar la cantidad de imagenes
            num = cantidad;
        }
    }

    // Obtener la ruta de la imagen
    var path = img.src.split("/");
    path.pop();
    path = path.join("/") + "/";
    // Cambiar la imagen
    img.src = path + vehiculoActual.toString() + num + ".jpg";
    img.alt = "Imagen " + num;


}

