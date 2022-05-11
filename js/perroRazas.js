//Fetch Api de Perritos para el registro de nuevo usuario
const contededor = document.querySelector("#contenedor");
const url = "https://api.thedogapi.com/v1/breeds"

const urlApi= 'https://api.thedogapi.com/v1'
const fetchMascota = async () => {
    const response = await fetch(urlApi + '/breeds')
    const data = await response.json()
    selector(data)
}

const selector = (raza) => {
    const select = document.querySelector('#lista')
    const options = raza.map(raza => {
        const option = document.createElement('option')
        option.text = raza.name
        option.value = raza.id
        return option
    })
    options.forEach(element => {
        select.appendChild(element)
        
    })
}

const imgPerro = (imagenUrl) =>{

    document.querySelector('#imagenPerro').setAttribute('src', imagenUrl);
    document.querySelector('#imagenPerro').setAttribute('style', 'display:block');
}

const perro = async(razaId) =>{
    const [data] = await fetch(urlApi + '/images/search?include_breed=1&breed_id=' + razaId)
    .then((data) => data.json())
    const {url: imagenUrl} = data;
    imgPerro(imagenUrl);
}

const razaSeleccionada = () => {
    const id = document.querySelector('#lista').value
    perro(id);
}


fetchMascota()