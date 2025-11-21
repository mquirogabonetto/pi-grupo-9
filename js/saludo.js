let usuarioGuardado = localStorage.getItem("emailUsuario");



if (usuarioGuardado != null) {
    
    let pagina = document.querySelector (".pagina ul")

    if (pagina) {
        let listas = pagina.querySelectorAll ("li")

        for (let i = 0; i < listas.length; i++) {
             let opcion = listas[i].innerText

             if (opcion === "Log In|"){
                listas[i].innerHTML = `
                    <span class="welcome-message">Bienvenido: ${usuarioGuardado}</span>
                    <a href="./index.html" id="logout">Logout </a>`
             }
             if (opcion === "Sign Up"){
                listas[i].style.display = 'none';
             }
        }
    }
}

    






