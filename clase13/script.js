document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname; // obtener la ruta actual

    // Comprobacion para la pagina index.html
    if(currentPage.includes('index.html') || currentPage === '/') {
        const productForm = document.getElementById('product-form');

        if (productForm) {
            // Evento de envio del formulario
            productForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // obtener datos del formulario
                const description = document.getElementById('description').value;
                const price = document.getElementById('price').value;
                const quantity = document.getElementById('quantity').value;

                // cargar productos almacenados en localStorage
                const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
                
                //crear nuevo producto con un ID unico
                const product = {
                    id: Date.now(),
                    description,
                    price,
                    quantity

                };

                // guardar produco en localStorage
                storedProducts.push(product);
                localStorage.setItem('products', JSON.stringify(storedProducts));

                // limpian formulario
                productForm.reset();

                alert('Producto creado con exito!');
            });
        }
    }

    // Comprobacion para la pagina products.html
    if (currentPage.includes('products.html')) {
        const productList = document.getElementById('product-list');
        const noProductsMessage = document.getElementById('no-products');

        // verificar que los elementos no sean null
        if (!productList || !noProductsMessage) {
            console.error('no se encontraron los elemenos necesarios en el DOM en products.html.');
            return;
        }

        // cargar productos almacenados en localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        if (storedProducts.length > 0) {
            noProductsMessage.style.display = 'none';
            storedProducts.forEach(product => renderProduct(product));
        }

        // funcion para renderizar un producto
        function renderProduct(product) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.setAttribute('data-id', product.id); // agregar ID unico a cada elemento

            productDiv.innerHTML = `
            <h2>${product.description}</h2>
            <p>Precio: $${product.price}</p>
            <p>Cantidad: ${product.quantity}</p>
            <button class="delete-button">Eliminar</button> 
            `;

            productList.appendChild(productDiv);

            // agregar eventos a los botones de eliminar 
            const deleteButton = productDiv.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => deleteProduct(product.id));
        }

        // funcion para eliminar un producto
        function deleteProduct(id) {
            const updatedProducts = storedProducts.filter(product => product.id !== id);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            location.reload(); // recargar la pagina para mostrar los cambios
        }
    }

});
  
    
    
    
    
    
    
    
    
     