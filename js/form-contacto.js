window.addEventListener('DOMContentLoaded', (e) => {
    console.log("evento DOMContentLoaded");

    let boton = document.getElementById("btn-enviar");
    boton.addEventListener("click", (ev) => {

        //bloque try
        try {

            //recuperar los valores del formulario
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let email = document.getElementById("correo").value;

            //objeto JSON
            let suscriptor = { //JSON = Javascript object notation
                //clave: valor
                nombre_completo: nombre,
                apellido,
                email,
                fecha_registro: (new Date()).toISOString()
            };
            //console.log("El nombre del suscriptor es: " + nombre);
            console.dir(suscriptor);
            guardarSuscriptor(suscriptor);
            mostrarExito("Se guardó correctamente su suscripción");
        } catch (e) {
            mostrarError(e.message);
        }
    });
});