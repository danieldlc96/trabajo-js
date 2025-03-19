//MANTENER FIJA LA BARRA DE NAVEGACION AL HACER SCROLL

window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) { 
        navbar.style.position = 'fixed'; // Fija la barra en la parte superior cuando se hace scroll
        navbar.style.top = '0'; // Asegura que esté en la parte superior
    } else {
        navbar.style.position = 'relative'; // Vuelve a su posición original cuando no se hace scroll
    }
};

//MOSTRAR ALERT AL CARGAR LA PAGINA

window.onload = function(){
    alert("Solicitar acceso a tu ubicacion")
    obtenerUbicacion()
};

function obtenerUbicacion(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            success,
            error,
            options
        )
    }else{
        alert("Los servicios de geolocalizacion no estan disponibles");
    }
}


let options = {

    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

        // AÑADIR MAPA
    let map = L.map('map').setView([latitude, longitude], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'OpenStreetMap'}).addTo(map);

        //AÑADIR MARCADOR UBICACION ACTUAL
    L.marker([latitude, longitude]).bindPopup('Estas aqui').addTo(map).openPopup();
        

        //AÑADIR CONTROL DE RUTA
    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(37.181308, -5.783663)
        ]
    }).addTo(map)
}



function error(){
    alert("No se pudo obtener la ubicacion");
}