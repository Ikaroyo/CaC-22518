window.onload = function () {
    // pedido al servidor de los vehiculos
    getVehicles();
};

// inicializacion de variables
let dataFull;
let dataNew;


// obtener los vehiculos del servidor
function getVehicles() {
    // crear el request
    var request = new XMLHttpRequest();
    // abrir el request
    request.open("GET", "https://vehiculos-2b1d3-default-rtdb.firebaseio.com/vehiculos.json", true);
    document.getElementById("loading").classList.add("active");
    // enviar el request
    request.send();
    // cuando el request este listo
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            // get the data
            dataFull = JSON.parse(request.responseText);
            // show the data
            showVehicles(dataFull);
            document.getElementById("loading").classList.remove("active");
        }
    }
}


// mostrar los vehiculos
function showVehicles(data) {
    // clear the table
    clearTable();
    // get the table
    var table = document.getElementById("table");
    // get the template
    var template = document.getElementById("template");
    // for each vehiculo
    for (var i in data) {
        // obtener el vehiculo
        var vehicle = data[i];
        // clonar el template
        var clone = template.cloneNode(true);
        // mostrar los vehiculos
        clone.querySelector(".number").textContent = i;
        clone.querySelector(".make").innerHTML = vehicle.make;
        clone.querySelector(".model").innerHTML = vehicle.model;
        clone.querySelector(".year").innerHTML = vehicle.year;
        clone.querySelector(".valor").innerHTML = vehicle.price;
        // mostrar el clon
        table.appendChild(clone);
    }
}

// limpiar la tabla
function clearTable() {
    var table = document.getElementById("table");
    var template = document.getElementById("template");
    var rows = table.getElementsByTagName("tr");
    var i = rows.length;
    while (--i) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    table.appendChild(template);
}


// Esperar mientras se escribe
function preChargeAgain() {
    setTimeout(chargeAgain, 1000);
}

// funcion de muestra de vehiculos
function chargeAgain() {
    dataNew = dataFull.filter(function (vehicle) {
        // check en minuscula, make, model y year
        return vehicle.make.toLowerCase().includes(document.getElementById("make").value.toLowerCase()) &&
            vehicle.model.toLowerCase().includes(document.getElementById("model").value.toLowerCase()) && vehicle.year.includes(document.getElementById("year").value);
    });
    showVehicles(dataNew);
}


// limpiar el form

function limpiar() {
    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    showVehicles(dataFull);
}



