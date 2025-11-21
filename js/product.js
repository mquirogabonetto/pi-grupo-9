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

/*Product js*/
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');
let divProduct = document.querySelector('.product');

function generarReviews(reviews) {
  if (!reviews || reviews.length === 0) {
    return '<p>No hay reviews disponibles para este producto.</p>';
  }

  let reviewsHTML = '';
  for (let i = 0; i < reviews.length; i++) {
    reviewsHTML += `
            <div class="reviews">
                <p><strong class="usuario">Calificación:</strong> ${reviews[i].rating}/5 ⭐</p>
                <p><strong class="usuario">Comentario:</strong> ${reviews[i].comment}</p>
                <p><strong class="usuario">Usuario:</strong> ${reviews[i].reviewerName}</p>
            </div>
        `;
  }
  return reviewsHTML;
}

let url = `https://dummyjson.com/products/${id}`;
console.log('El ID es:', id);
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let divProductHTML = `
            <article class="productoDetalle">
                    <img class="imgProducto" src="${data.thumbnail}" alt="${data.title}">
                    <div class="detalleproduct">
                        <h1 class="titulo-producto">${data.title}</h1>
                        <p><strong>Marca: </strong>${data.brand}</p>
                        <p><strong>Descripción: </strong>${data.description}</p>
                        <p><strong>Precio: </strong>${data.price}</p>
                        <p><strong>Categoria: </strong><a class= "dinamico" href="./category.html?category=${data.category}">${data.category}</a></p>
                        <p><strong>Stock: </strong> ${data.stock} unidades</p>
                        <p><strong>Rating: </strong> ${data.rating}/5 ⭐</p>
                        <p><strong>Tags: </strong>${data.tags ? data.tags.join(' - ') : 'N/A'}</p>
                    </div>
                </article>

                <article class="review">
                    <h2 class="tituloreviews">- REVIEWS -</h2>
                    ${generarReviews(data.reviews)}
                </article>` ;
    divProduct.innerHTML = divProductHTML;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });