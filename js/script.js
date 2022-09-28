function ValidarForm() {
    /* validar nombre, email y mensaje */

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;


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
        alert("Por favor coloque su email para que podamos contactarnos con usted");
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


