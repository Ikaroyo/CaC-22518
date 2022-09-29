function ValidarForm() {
    /* validar nombre, email y mensaje */

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;


    /* restauracion de estilos */
    document.getElementById("nombre").style.borderColor = "#ddd";
    document.getElementById("email").style.borderColor = "#ddd";
    document.getElementById("mensaje").style.borderColor = "#ddd";

    // validar nombre
    if (nombre === "") {
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("nombre").focus();
        alert("Por favor coloque su nombre para que podamos contactarnos con usted");

        return false;

    }
    // validar email
    const re = /\S+@\S+\.\S+/;

    if (!re.test(document.getElementById("email").value)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        alert("Por favor verifique su email para que podamos contactarnos con usted");
        return false;
    }
    //
    if (mensaje === "") {
        document.getElementById("mensaje").style.borderColor = "red";
        document.getElementById("mensaje").focus();
        alert("Por favor coloque su mensaje para que podamos contactarnos con usted");
        return false;
    }
    // si todo esta bien, enviar el formulario
    alert("Gracias por contactarnos, nos comunicaremos con usted a la brevedad");
    return true;
}

function iframeRun(vehiculo){
    var iframe = document.getElementById("iframe-info");
//   vehiculo == "camioneta" create iframe width="560" height="315" src="https://www.youtube.com/embed/rPuNfTV8J2o?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // vehiculo =="auto"  create width="560" height="315" src="https://www.youtube.com/embed/4sldA6cswgc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    // vehiculo =="utilitario"  width="560" height="315" src="https://www.youtube.com/embed/pKO9IXx6x4I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen

    if(vehiculo == "camioneta"){
        iframe.src = "https://www.youtube.com/embed/rPuNfTV8J2o?controls=0";
    }
    if(vehiculo == "auto"){
        iframe.src = "https://www.youtube.com/embed/4sldA6cswgc?controls=0";


    }
    if(vehiculo == "utilitario"){
        iframe.src = "https://www.youtube.com/embed/pKO9IXx6x4I?controls=0";
    }


    // width="560" height="315"

    iframe.width = "560";
    iframe.height = "315";
    iframe.style.display = "block";
    document.getElementById("iframe-container").classList.add("active");
}

function iframeClose(){
    var iframe = document.getElementById("iframe-info");
    iframe.src = "";
    document.getElementById("iframe-container").classList.remove("active");
}

