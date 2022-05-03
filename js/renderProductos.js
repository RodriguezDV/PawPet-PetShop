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
    for (const element of listaProductos) {
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
            const div = $('<div>', {
                class: "productoCarrito"
            }).html(`<img class="imgProducto" src="${element.imgsrc}" alt="${element.alt}">
        <div class="divTexto">
            <h3 class="nombreProducto">${element.nombre}</h3>
            <h3 class="precioProducto">$ ${element.precio}</h3>
            <p class="precioProducto">${element.peso}</p>
        </div>`)
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
            productosSeleccionados.addItem(element.id)
            swal({
                title: "Producto agregado a su carrito",
                icon: "success"
            })
            renderResultado()
            renderBadge()
        })
    }
}
renderProductos()