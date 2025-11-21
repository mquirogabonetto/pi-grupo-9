/*Menú de categorías cargado dinámicamente desde la API */
fetch("https://dummyjson.com/products/category-list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let categoriasMenu = document.querySelector(".listacategorias");
    let categoriasHtml = "";

    for (let i = 0; i < data.length; i++) {
      let nombrecategoria = data[i].toUpperCase();
      let categoriaApi = data[i];
      categoriasHtml += `<li><a href="./category.html?category=${categoriaApi}">${nombrecategoria}</a></li>`;
    }
    categoriasMenu.innerHTML = categoriasHtml;
  })
  .catch(function (error) {
    console.error("Error: ", error);
  });

/*Validaciones Búsqueda*/
let formularioBusqueda = document.querySelector(".form-busqueda");
let inputBusqueda = document.querySelector(".busquedaForm");

formularioBusqueda.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputBusqueda.value === "") {
    alert("No se puede dejar el campo de búsqueda en blanco");
  } else if (inputBusqueda.value.length < 3) {
    alert("El término debe tener al menos 3 caracteres");
  } else {
    this.submit();
  }
});

/*Index.js*/
let cajaProductos1 = document.querySelectorAll('.masvendidos')[0];
let cajaProductos2 = document.querySelectorAll('.masvendidos')[1];

let url = 'https://dummyjson.com/products'

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let productos = data.products;

    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];

      let productoSolo = `
            <article class="vendidos">
                <img class="foto1" src="${producto.thumbnail}" alt="${producto.title}">
                <h2>${producto.title}</h2>
                <p>${producto.description}</p>
                <p>Precio: $${producto.price}</p>
                <a class="detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
            </article>`;

      if (i < 10) {
        cajaProductos1.innerHTML += productoSolo;
      } else {
        cajaProductos2.innerHTML += productoSolo;
      }

    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
