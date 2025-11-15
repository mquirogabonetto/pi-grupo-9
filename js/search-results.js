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