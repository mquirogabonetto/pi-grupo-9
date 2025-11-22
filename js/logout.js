let logout = document.querySelector("#logout");

if(logout){
    logout.addEventListener("click", function(e) {
        e.preventDefault()

        localStorage.removeItem("emailUsuario");

        let pagina = document.querySelector(".pagina ul");
        let listas = pagina.querySelectorAll("li");

        for (let i = 0; i < listas.length; i++) {
            if (listas[i].querySelector("#logout")){
                listas[i].innerHTML = `<a href="./login.html">Log In </a> |` ;
                listas[i].classList.remove("liLogin"); 
            }
            if (listas[i].innerText === "Sign Up") {
                listas[i].style.display = "block";
            }
        }
    })
}