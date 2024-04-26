function crearCarta() { /* le damos los valores puestos a cada variable mostrada */
    var infoMostrada = document.getElementById("infoMostrada");
    var rut = document.getElementById("rutInput").value;
    var nombre = document.getElementById("nombreInput").value;
    var appaterno = document.getElementById("appaternoInput").value;
    var apmaterno = document.getElementById("apmaternoInput").value;
    var fecha = document.getElementById("fechaInput").value;
    var edad = document.getElementById("edadInput").value;
    var genero = document.getElementById("generoInput").value;
    var correo = document.getElementById("correoInput").value;
    var celular = document.getElementById("celularInput").value;
    var profesion = document.getElementById("profesionInput").value;
    var motivacion = document.getElementById("motiInput").value;

    // se crea y escribe la carta con los datos dados
    var texto = "Rut: " + rut + "<br>" +
                "Nombre: " + nombre + "<br>" +
                "Apellido paterno: " + appaterno + "<br>" +
                "Apellido materno: " + apmaterno + "<br>" +
                "Fecha de nacimiento: " + fecha + "<br>" +
                "Edad: " + edad + "<br>" +
                "Género: " + genero + "<br>" +
                "Email: " + correo + "<br>" +
                "Celular: " + celular + "<br>" +
                "Profesión: " + profesion + "<br>" +
                "Motivación: " + motivacion + "<br>";

    // hace que el texto se vea como html
    infoMostrada.innerHTML = texto;
}

$(document).ready(function() {
    $("#carta").click(function(event) { // Cambio el evento a click del botón "Crear Carta"
        var rut = $("#rutInput").val();
        var nombre = $("#nombreInput").val();
        var appaterno = $("#appaternoInput").val();
        var apmaterno = $("#apmaternoInput").val();
        var edad = $("#edadInput").val();
        var genero = $("#generoInput").val();
        var celular = $("#celularInput").val();

        if (rut.length < 9 || rut.length > 10) {
            alert("Rut no válido");
            event.preventDefault();
            return false;
        }

        if (nombre.length < 3 || nombre.length > 20) {
            alert("Nombre no válido");
            event.preventDefault();
            return false;
        }

        if (appaterno.length < 3 || appaterno.length > 20) {
            alert("Apellido Paterno no válido");
            event.preventDefault();
            return false;
        }

        if (apmaterno.length < 3 || apmaterno.length > 20) {
            alert("Apellido Materno no válido");
            event.preventDefault();
            return false;
        }

        if (edad < 18 || edad > 35) {
            alert("No cumples con la edad necesitada");
            event.preventDefault();
            return false;
        }

        if (genero === "") {
            alert("Selecciona un género");
            event.preventDefault();
            return false;
        }

        if (celular.length < 9 || celular.length > 12) {
            alert("Celular no válido");
            event.preventDefault();
            return false;
        }

        alert("Formulario enviado con éxito");
    });
});


