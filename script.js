// Datos de ejemplo de productos
const productosEjemplo = [
    {
        nombre: 'Tomate',
        precio: 1.500,
        imagen: 'ruta-de-la-imagen-tomate.jpg',
    },
    {
        nombre: 'Acelga',
        precio: 2.900,
        imagen: 'ruta-de-la-imagen-lechuga.jpg',
    },
    // Agrega más productos aquí...
];

document.addEventListener('DOMContentLoaded', () => {
    const productosListosSection = document.getElementById('productos-listos');

    // Itera sobre los productos y crea elementos para mostrarlos
    productosEjemplo.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.classList.add('producto-card');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        productoCard.appendChild(imagenProducto);

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;
        productoCard.appendChild(nombreProducto);

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `$${producto.precio.toFixed(2)}`;
        productoCard.appendChild(precioProducto);

        productosListosSection.appendChild(productoCard);
    });
});

function login() {

    if (document.form.password.value=='Contraseña' && document.form.login.value=='Usuario'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Por favor ingresa tu nombre de usuario y contraseña correctos."); 
        } 
    } 