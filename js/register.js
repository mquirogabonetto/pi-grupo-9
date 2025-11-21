/*Menú de categorías cargado dinámicamente desde la API */
fetch("https://dummyjson.com/products/category-list")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let categoriasMenu = document.querySelector(".listacategorias");
    let categoriasHtml = "";

    for (let i = 0; i < data.length; i++) {
        let nombrecategoria = data[i].toUpperCase();
        let categoriaApi = data[i];
        categoriasHtml += `<li><a href="./category.html?category=${categoriaApi}">${nombrecategoria}</a></li>`;
    }
    categoriasMenu.innerHTML = categoriasHtml;
  })
  .catch(function(error) {
    console.error("Error: ", error);
  });

/*Validaciones Búsqueda*/
let formularioBusqueda = document.querySelector(".form-busqueda");
let inputBusqueda = document.querySelector(".busquedaForm");

formularioBusqueda.addEventListener("submit", function(event) {
  event.preventDefault();
  if (inputBusqueda.value === "") {
    alert("No se puede dejar el campo de búsqueda en blanco");
  } else if (inputBusqueda.value.length < 3) {
    alert("El término debe tener al menos 3 caracteres");
  } else {
    this.submit();
  }
});

/*Formulario Register*/
let formulario = document.querySelector("#formregistro");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let segundaPassword = document.querySelector("#password2");
let checkbox = document.querySelector("#tyc");
let errorEmail = document.querySelector("#error1");
let errorPassword = document.querySelector("#error2");
let errorSegundaPassword = document.querySelector("#error3");
let errorCheckbox = document.querySelector("#error4");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    errorEmail.innerText = "";
    errorPassword.innerText = "";
    errorSegundaPassword.innerText = "";
    errorCheckbox.innerText = "";
    if (email.value === "") {
		errorEmail.innerText = "*El email es obligatorio*";
	} if (password.value === "") {
    errorPassword.innerText = "La contraseña es obligatoria.";
	} else if (password.value.length < 6) {
    errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
	} if (segundaPassword.value === "") {
    errorSegundaPassword.innerText = "Debes repetir tu contraseña.";
  } else if (password.value !== "" && password.value !== segundaPassword.value) {
    errorSegundaPassword.innerText = "Las contraseñas no coinciden.";
	
	} if (!checkbox.checked) {
		errorCheckbox.innerText = "Debes aceptar los términos y condiciones.";
		
	} if (email.value && password.value.length >= 6 && password.value === segundaPassword.value && checkbox.checked) {
    window.location.href = "./login.html";
  } 
});
