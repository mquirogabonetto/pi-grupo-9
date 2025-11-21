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

/*Login js*/
let formulariolog = document.querySelector(".form-login") 
let inputemail = document.querySelector(".inputlogin")
let inputcontra = document.querySelector(".contraseña")


formulariolog.addEventListener("submit", function (e) {
   
   let email = inputemail.value;
   let password = inputcontra.value;

   if (email === "" || password === ""){
      e.preventDefault()
      alert("Debe completar los campos");
   } else if (email === ""){
      e.preventDefault()
      alert("Debe completar el campo Email")
   } else if (password === ""){
      e.preventDefault()
      alert("Debe completar el campo Contraseña")
   } else if (password.length < 6 ){
      e.preventDefault()
      alert("La contraseña debe tener al menos 6 caracteres")
   } else {
      
      localStorage.setItem("emailUsuario", email);
      
      formulariolog.submit();
      
   }
   
})
