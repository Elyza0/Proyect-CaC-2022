
var nombre = document.getElementById('nombre');
var error = document.getElementById('error');

function validandoForm(){
    console.log('ingresa ');
    if ((nombre.value===null) || (nombre.value==='')) {
        console.log('ingresa ');
    }
    return false;
}

