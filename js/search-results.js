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

/*Resultados de búsqueda*/
/*Buscar palabras como: bag, laptop, iphone, shoes, watch, makeup, smartphones, sunglasses, apple, fruit, bed, entre otros*/
let qs = location.search;
let parametro = new URLSearchParams(qs);
let terminoBuscado = parametro.get("busqueda");
let tituloPag = document.querySelector(".resultadosencontrados");
let contenedorProductos = document.querySelector(".categoriaCompleta");
let url = "https://dummyjson.com/products/search?q=" + terminoBuscado;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products;
    let productosHtml = "";
    console.log("PRODUCTOS:", data.products);
    if (productos.length === 0) {
       tituloPag.innerHTML = `<h1>No hay resultados para el término: ${terminoBuscado}</h1>`;
    } else {
      tituloPag.innerHTML = '<h1>Resultados de búsqueda para: ' + terminoBuscado + '</h1>';
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
    }
    
    contenedorProductos.innerHTML = productosHtml;
  })
  .catch(function(error) {
    console.error("Error: ", error);
    tituloPag.innerHTML = '<p>Error al cargar los resultados</p>';
    contenedorProductos.innerHTML = "<p>Error al cargar productos.</p>";
  });

