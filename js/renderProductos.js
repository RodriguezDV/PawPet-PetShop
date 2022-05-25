import {
    listaProductos,
    productosSeleccionados
} from "./listaProductos.js"
import {
    renderResultado,
    renderBadge
} from "./renderCarrito.js"

//Función que renderiza los productos de mi array 'listaProductos' en el DOM
export const renderProductos = () => {

    for (const element of listaProductos.displayList()) {
        const bttn = $('<button>', {
            class: "boton",
            text: "Agregar Producto",
        })

        const div = $('<div>', {
            class: "cajaAlimentos"
        }).html(`
        <img class="wow animate__animated animate__pulse tarjetaAlimento" src="${element.imgsrc}" alt="${element.alt}">
        <h3 class="">${element.nombre}</h3>
        <p class="precioProducto">$ ${element.precio}</p>
        <p class="pesoComida">(Peso: ${element.peso})</p>`)
        div.append(bttn)
        $('#tarjetaProducto').append(div)
        bttn.click(() => {
            if (productosSeleccionados.findItem(element.id) == undefined) {
                element.cantidad += 1
                const div = $('<div>', {
                    class: "productoCarrito"
                }).html(`<img class="imgProducto" src="${element.imgsrc}" alt="${element.alt}">
            <div class="divTexto">
                <h3 class="nombreProducto">${element.nombre}</h3>
                <h3 class="precioProducto">$ ${element.precio}</h3>
                <p class="precioProducto">${element.peso}</p>
                <input class="cantidadProducto" type="number" oninput="validity.valid||(value='1')" min="1" max="10" id="id${element.id}"  value="${element.cantidad}" required>
            </div>`)
                const bttn = $('<button>', {
                    class: "botonEliminar far fa-trash-alt fa-lg"
                }).click(function () {
                    listaProductos.displayList()[element.id].cantidad = 0
                    this.parentElement.remove()
                    productosSeleccionados.removeItem(element.id)
                    renderResultado()
                    renderBadge()
                })
                div.append(bttn)
                $('#sectorCarrito').append(div)
                productosSeleccionados.addItem(element.id)
                swal({
                    title: "Producto agregado a su carrito",
                    icon: "success"
                })
                renderResultado()
                renderBadge()
                document.querySelector(`#id${element.id}`).addEventListener('change', function () {
                    productosSeleccionados.findItem(element.id).cantidad = parseInt(this.value)
                    productosSeleccionados.updateItem()
                    renderResultado()
                })
            } else if (productosSeleccionados.findItem(element.id).cantidad <= 9) {
                productosSeleccionados.findItem(element.id).cantidad += 1
                document.querySelector(`#id${element.id}`).value = productosSeleccionados.findItem(element.id).cantidad
                productosSeleccionados.updateItem()
                renderResultado()
            }

        })
    }
}
renderProductos()