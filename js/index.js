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

            if (i<10) {
                cajaProductos1.innerHTML += productoSolo;
            }else {
                cajaProductos2.innerHTML += productoSolo; 
            } 

        }

    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
