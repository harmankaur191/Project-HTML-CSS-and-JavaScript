import { makeRequest } from './app.js'
import { ipAddress } from './app.js';

let marker = null;
let map = null;

export function setMap(data) {
    if (map!==null) {
        map.remove();
        map===null
        
    }
         console.log(data);
        console.log(data.location.lat);
         map = L.map('map').setView([data.location.lat, data.location.lng], 13);
        const tileUrl = ' https://tile.openstreetmap.org/{z}/{x}/{y}.png';
        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        const tiles = L.tileLayer(tileUrl, { attribution }).addTo(map);

        L.marker([data.location.lat, data.location.lng],13).addTo(map)
            .bindPopup(`IP address tracked!  ${data.location.city}, ${data.location.country}`)
            .openPopup();

    


}




