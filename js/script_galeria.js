// Funciones que se ejecutan en carga de la pagina
window.onload = loadImages;
const cantidad = 14;

// Funcion de carga de imagenes dentro del div carousel-container
function loadImages() {
    // Ruta de la carpeta de imagenes
    const path = "img/Vehiculos/galeria/";

    // Cantidad de imagenes a cargar


    // Bucle de creacion de elementos dentro del div galeria
    for (var i = 1; i <= cantidad; i++) {
        var img = document.createElement("img");
        img.src = path + i + ".jpg";
        img.className = "imagenes";
        // add onclick call to bigImage function
        img.onclick = function () {
            popupImage(this);
        }

        img.alt = "Imagen " + i;
        document.getElementById("gallery-container").appendChild(img);
    }
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
    var num = parseInt(img.src.split("/").pop().split(".")[0]);
    console.log(num);

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
    img.src = path + num + ".jpg";
    img.alt = "Imagen " + num;



}

