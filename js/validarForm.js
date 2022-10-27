// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//   });


//   var nombre

//   function validarFormulario(evento) {
//     evento.preventDefault();
//     var usuario = document.getElementById('usuario').value;
//     if(usuario.length == 0) {
//       alert('No has escrito nada en el usuario');
//       return;
//     }
//     var clave = document.getElementById('clave').value;
//     if (clave.length < 6) {
//       alert('La clave no es válida');
//       return;
//     }
//     this.submit();
//   }

//
var nombre = document.getElementById('nombre');
// var apellido = document.getElementById('apellidos');
// var direccion = document.getElementById('direccion');
// var ciudad = document.getElementById('ciudad');
// var cp = document.getElementById('cp');
// var tel = document.getElementById('tel');
// var mail = document.getElementById('correo');
// var contraseña = document.getElementById('password');
var error = document.getElementById('msgError');


function validandoForm() {
    console.log('enviando formulario....');
    var mensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu Nombre');
    }
    // // if (apellido.value === null || apellido.value === '') {
    // //     mensajesError.push('Ingresa tu Apellido');
    // // }
    // // if (contraseña.value === null || contraseña.value === '') {
    // //     mensajesError.push('Ingresa la Contraseña');
    // // }
    error.innerHTML = mensajesError.join(', ');
    return false;
}

