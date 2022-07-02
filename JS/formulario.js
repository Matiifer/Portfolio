var btnEnviar = document.querySelector(".btnEnviar");
var formulario = document.querySelector(".contacto__form");

btnEnviar.addEventListener("click", function(){
    let completo = 0;

    let btnNombre = document.querySelector(".nombre");
    let nombre = btnNombre.value;
    
    let btEmail = document.querySelector(".email");
    let email = btEmail.value;

    let btnAsunto = document.querySelector(".asunto");
    let asunto = btnAsunto.value;

    let textArea = document.querySelector(".textArea");
    let area = textArea.value;

    if (nombre == 0 || nombre > 50){
        alert("El campo 'Nombre' no puede estar vacio. Tampoco puede contener mas de 50 caracteres");
    } else{
        completo++;
    }
    if (email == 0){
        alert("El campo 'E-mail' no puede estar vacio.");
    } else{
        completo++;
    }
    if (asunto == 0 || asunto > 50){
        alert("El campo 'Asunto' no puede estar vacio. Tampoco puede contener mas de 50 caracteres");
    } else{
        completo++;
    }
    if (area == 0 || area > 300){
        alert("Debe escribir un mensaje. Tampoco puede contener mas de 300 caracteres");
    } else{
        completo++;
    }
    if (completo == 4) {
        formulario.reset();
    }
})