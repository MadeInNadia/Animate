window.onload = inicializar;
var formAutentication;

function inicializar() {
    formAutentication = document.getElementById("autentication");
    formAutentication.addEventListener("submit", autentificar, false);
}

function autentificar(event) {
    event.preventDefault();
    var autentication = event.target;

var user = autentication.email.value;
var password = autentication.password.value;

    firebase.auth().createUserWithEmailAndPassword(user, password)
        .then(function (result) {
            alert('Ha iniciado sesión.');
        })
        .catch(function (error) {
            alert("El usuario o contraseña son incorrectos.");
        });
}