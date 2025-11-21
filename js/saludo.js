let usuarioGuardado = localStorage.getItem("emailUsuario");



if (usuarioGuardado != null) {
    
    let pagina = document.querySelector (".pagina ul")

    if (pagina) {
        let listas = pagina.querySelectorAll ("li")

        for (let i = 0; i < listas.length; i++) {
             let opcion = listas[i].innerText

             if (opcion === "Log In|"){
                listas[i].innerHTML = `
                    Bienvenido: ${usuarioGuardado}
                    <a href="./index.html" id="logout">Logout </a>`
             }
        }
    }
}

    






