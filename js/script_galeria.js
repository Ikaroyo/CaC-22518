// Funciones que se ejecutan en carga de la pagina
window.onload = loadImages;
window.setInterval(modificarBackground, 1);

// Inicializacion de variables
var grados = 90.0;
var per1 = 0.0;
var flagPer1 = 1;

// Funcion de carga de imagenes dentro del div galeria
function loadImages() {
    // Ruta de la carpeta de imagenes
    const path = "img/Vehiculos/galeria/";

    // Cantidad de imagenes a cargar
    const cantidad = 43;

    // Bucle de creacion de elementos dentro del div galeria
    for (var i = 1; i <= cantidad; i++) {
        var img = document.createElement("img");
        img.src = path + i + ".jpg";
        img.className = "imagenes";
        img.alt = "Imagen " + i;
        document.getElementById("galeria").appendChild(img);
    }
}

// Funcion de background cambiante
function modificarBackground() {
    // actualizacion del estilo del background
    document.body.style.backgroundImage = 'linear-gradient(' + grados + 'deg, rgb(26, 26, 29) ' + per1 + '%, rgb(111, 34, 50) '+(200-per1)+'%)';

    // Incremento de grados
    grados += 0.2;
    // Cambio de sentido de crecimiento de per1
    if (per1 >= 50 && flagPer1 === 1) {
        flagPer1 = -1;
    }else if(per1 <= -100 && flagPer1 === -1){
        flagPer1 = 1;
    }
    // Incremento de per1
    per1+=flagPer1;
}