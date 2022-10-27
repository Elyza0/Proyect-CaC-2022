
function validandoForm() {
    var pass = document.getElementById("password").value;
    var err = document.getElementById("msgError");
    err.style.color = "red";
    if (pass === "") {
        err.innerHTML = "Ingresa una Contraseña";
        return false;
    }
}