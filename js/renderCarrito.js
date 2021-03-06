import {
    productosSeleccionados,
    listaProductos
} from "./listaProductos.js"



//Número de cantidad de productos en el carrito
export const renderBadge = () => {
    $('#badge').text(productosSeleccionados.displayList().length)
}
renderBadge()


//Función que renderiza el carrito de objetos seleccionados del localStorage
const renderCarrito = () => {
    for (const element of productosSeleccionados.displayList()) {
        const div = $('<div>', {
            class: "productoCarrito"
        }).html(`
        <img class="imgProducto" src="${element.imgsrc}" alt="${element.alt}">
        <div class="divTexto">
        <h3 class="nombreProducto">${element.nombre}</h3>
        <h3 class="precioProducto">$ ${element.precio}</h3>
        <p class="precioProducto">${element.peso}</p>
        <input class="cantidadProducto" type="number" oninput="validity.valid||(value='1')" id="id${element.id}" min="1" max="10" value="${element.cantidad}" required>
        </div>
        `)
        const bttn = $('<button>', {
            class: "botonEliminar far fa-trash-alt fa-lg"
        }).click(function () {
            this.parentElement.remove()
            productosSeleccionados.removeItem(element.id)
            renderResultado()
            renderBadge()
        })
        div.append(bttn)
        $('#sectorCarrito').append(div)
        document.querySelector(`#id${element.id}`).addEventListener('change', function () {
            productosSeleccionados.findItem(element.id).cantidad = parseInt(this.value)
            productosSeleccionados.updateItem()
            renderResultado()
        })
    }
}

//Función para calcular el resultado de la suma de productos seleccionados
export const calcularResultado = () => {
    let resultado = 0
    for (const element of productosSeleccionados.displayList()) {
        resultado += (element.precio * element.cantidad)
    }
    return resultado
}

//Función que renderiza el resultado total
export const renderResultado = () => {
    $('#resultado').text(`Total: $ ${calcularResultado()}`)
}

//Función para que funcione el botón 'Vaciar carrito'
$('#vaciarCarrito').click(() => {
    localStorage.setItem('productos', '[]')
    productosSeleccionados.productos = []
    $('#sectorCarrito').html('')
    $('#resultado').text(`Total: 0`)
    for (const element of listaProductos.displayList()) {
        element.cantidad = 0
    }
    renderBadge()
})

//Botón que aun no funciona de 'Comprar'
$('.botonComprar').click(() => {
    swal({
        title: "No funciona aun",
        icon: "warning"
    })
    renderBadge()
})

//Botón que aun no funciona de Enviar/contactos
$('#botonEnviar').click(() => {
    swal({
        title: "No funciona aun",
        icon: "warning"
    })
    renderBadge()
})

renderCarrito()
renderResultado()