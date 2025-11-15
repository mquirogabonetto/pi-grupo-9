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


/*Cargar productos dinámicos según la categoría seleccionada*/
let qs = location.search;
let parametro = new URLSearchParams(qs);
let categoriaSeleccionada = parametro.get("category");
let tituloPag = document.querySelector(".tituloAcompañamientos");
let contenedorProductos = document.querySelector(".categoriaCompleta");
tituloPag.innerText = categoriaSeleccionada.toUpperCase();
let url = "https://dummyjson.com/products/category/" + categoriaSeleccionada ;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products;
    let productosHtml = "";
    for (let i = 0; i < productos.length; i++) {
        productosHtml += 
          '<article class="vendidos">' +
          '<img class="foto1" src="' + productos[i].thumbnail + '" alt="' + productos[i].title + '">' +
          '<h2>' + productos[i].title + '</h2>' +
          '<p>' + productos[i].description + '</p>' +
          '<p>Precio: $' + productos[i].price + '</p>' +
          '<a class="detalle" href="./product.html?id=' + productos[i].id + '">Ver detalle</a>' +
          '</article>';
        }
        contenedorProductos.innerHTML = productosHtml;
   })
  .catch(function(error) {
    console.error("Error: ", error);
    contenedorProductos.innerHTML = "<p>Error al cargar productos.</p>";
  }); 
   
