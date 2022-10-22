window.onload = function () {
    getVehicles();

};


let dataFull;
let dataNew;

// get the data from the server
function getVehicles() {

    // create the request
    var request = new XMLHttpRequest();
    // open the request
    request.open("GET", "https://vehiculos-2b1d3-default-rtdb.firebaseio.com/vehiculos.json", true);
    document.getElementById("loading").classList.add("active");
    // send the request
    request.send();
    // when the request is ready
  request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            // get the data
            dataFull = JSON.parse(request.responseText);
            // show the data
            showVehicles(dataFull);
            document.getElementById("loading").classList.remove("active");

        }

    }

//    showVehicles(dataFull);

}

// show the vehicles

function showVehicles(data) {
    // clear the table
    clearTable();

    // get the table
    var table = document.getElementById("table");
    // get the template
    var template = document.getElementById("template");
    // for each vehicle
    for (var i in data) {
        // get the vehicle
        var vehicle = data[i];
        // clone the template
        var clone = template.cloneNode(true);
        // show the vehicle
        clone.querySelector(".number").textContent = i;
        clone.querySelector(".make").innerHTML = vehicle.make;
        clone.querySelector(".model").innerHTML = vehicle.model;
        clone.querySelector(".year").innerHTML = vehicle.year;
        clone.querySelector(".valor").innerHTML = vehicle.price;
        // show the clone
        table.appendChild(clone);
    }

}


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


function chargeAgain() {


    dataNew = dataFull.filter(function (vehicle) {
        // check in lowercase, by make, model year
        return vehicle.make.toLowerCase().includes(document.getElementById("make").value.toLowerCase()) &&
            vehicle.model.toLowerCase().includes(document.getElementById("model").value.toLowerCase()) && vehicle.year.includes(document.getElementById("year").value);
    });


    showVehicles(dataNew);

}


function limpiar() {
    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    showVehicles(dataFull);
}



