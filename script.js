const ACCESS_TOKEN = 'pk.eyJ1IjoibWFsYWs2IiwiYSI6ImNrbGFqOWpxMTB3Z2QydWxiMjEwamI0aHQifQ.wxx4aAalGtjlDgwbgVmMJg'


var map = new mapboxgl.Map({
    accessToken: ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
    setupMap(position.coords.longitude, position.coords.latitude)
    console.log(position)
}

function errorLocation() {
    console.log('Location Error')
}