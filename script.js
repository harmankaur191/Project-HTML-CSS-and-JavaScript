import {makeRequest} from './app.js'
//setting latitude, longitude and zoom level
const data= await makeRequest();
console.log(data.location.lat);
var map = L.map('map').setView([data.location.lat, data.location.lng], 10);
const tileUrl = ' https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles = L.tileLayer(tileUrl, { attribution }).addTo(map);

L.marker([data.location.lat, data.location.lng]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();




