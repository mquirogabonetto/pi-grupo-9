let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');
let divProduct = document.querySelector('.product');

function generarReviews(reviews) {
    if (!reviews) {
        return '<p>No hay reviews disponibles para este producto.</p>';
    }
    
    let reviewsHTML = '';
    reviews.forEach(review => {
        reviewsHTML += `
            <div class="reviews">
                <p><strong class="usuario">Calificación:</strong> ${review.rating}/5 ⭐</p>
                <p><strong class="usuario">Comentario:</strong> ${review.comment}</p>
                <p><strong class="usuario">Usuario:</strong> ${review.reviewerName}</p>
            </div>
        `;
    });
    return reviewsHTML;
}

let url = `https://dummyjson.com/products/${id}`;
console.log('El ID es:', id);
fetch(url)
    .then(function(response)
{
    return response.json()
})
    .then (function(data) {
        console.log(data);

        let divProductHTML = `
            <article class="productoDetalle">
                    <img class="imgProducto" src="${data.thumbnail}" alt="${data.title}">
                    <div class="detalleproduct">
                        <h1 class="titulo-producto">${data.title}</h1>
                        <p><strong>Marca: </strong>${data.brand || 'Grill House'}</p>
                        <p><strong>Descripción: </strong>${data.description}</p>
                        <p><strong>Precio: </strong>$${data.price}</p>
                        <p><strong>Categoria: </strong>${data.category}</p>
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
    .catch(function(error){
        console.log("Error: " + error);
    });