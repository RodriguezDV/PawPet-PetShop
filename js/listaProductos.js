import {ListaProductos, ProductosSeleccionados} from './constructorCarrito.js'


const productos =[
    {
        id : 0,
        nombre : 'Purina Cat Chow / Adultos Carne',
        precio : 1375,
        cantidad : 0,
        peso : '3kg',
        imgsrc : 'img/purinaGatos.png',
    },
    {
        id : 1,
        nombre : 'Dog Chow Adultos Minis y Pequeños (Con Colorante)',
        precio : 1551,
        cantidad : 0,
        peso : '3Kg',
        imgsrc : 'img/purinaExcellentAdulto.png',
    },
    {
        id : 2,
        nombre : 'Dog Chow Pack Sobrecitos Perro Adulto Pavo (100gr)',
        precio : 1245,
        cantidad : 0,
        peso : '100gr - x15 ',
        imgsrc : 'img/dogChowPack.png',
    },
    {
        id : 3,
        nombre : 'Active Mind Razas Medianas y Grandes',
        precio : 1724,
        cantidad : 0,
        peso : '3Kg',
        imgsrc : 'img/purinaProPlanFlagship.png',
    },
    {
        id : 4,
        nombre : 'Defense Hydro® Adultos Pollo',
        precio : 197,
        cantidad : 0,
        peso : '100gr',
        imgsrc : 'img/catChowAdultos.jpg',
    },
    {
        id : 6,
        nombre : 'Purina® Cat Chow® Alimento Seco, Gatitos Hasta 12 Meses',
        precio : 3853,
        cantidad : 0,
        peso : '3Kg',
        imgsrc : 'img/purinaGatitos12Meses.png',
    },
    {
        id : 7,
        nombre : 'Purina® Cat Chow® Alimento Seco, Gatitos Hasta 12 Meses',
        precio : 3853,
        cantidad : 0,
        peso : '3Kg',
        imgsrc : 'img/purinaGatitos12Meses.png',
    },
    {
        id : 8,
        nombre : 'Purina® Cat Chow® Alimento Seco, Gatitos Hasta 12 Meses',
        precio : 3853,
        cantidad : 0,
        peso : '3Kg',
        imgsrc : 'img/purinaGatitos12Meses.png',
    }
]


//agregando los objetos al array
export const productosSeleccionados = new ProductosSeleccionados()
export const listaProductos = new ListaProductos(productos)

