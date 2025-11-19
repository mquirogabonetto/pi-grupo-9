let usuarioGuardado = localStorage.getItem("emailUsuario");

let textoBienvenida = document.querySelector(".bienvenida");
let linkLogout = document.querySelector(".logoutLink");

let linkLogin = document.querySelector(".loginLink");
let linkRegister = document.querySelector(".registerLink");

if (usuarioGuardado != null) {

    if (textoBienvenida != null) {
        textoBienvenida.innerText = "Bienvenido: " + usuarioGuardado;
        textoBienvenida.style.display = "inline";
    }

    if (linkLogout != null) {
        linkLogout.style.display = "inline";
    }

    if (linkLogin != null) {
        linkLogin.style.display = "none";
    }

    if (linkRegister != null) {
        linkRegister.style.display = "none";
    }

    
    if (linkLogout != null) {
        linkLogout.addEventListener("click", function(e) {
            e.preventDefault();
            localStorage.removeItem("emailUsuario");
            location.href = "index.html";
        });
    }

}







