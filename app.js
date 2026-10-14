import { API_KEY } from "./secret.js";
async function makeRequest() {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8`);
    try {
        console.log(response)
        const data = await (response.json());
        console.log(data);
    } catch (error) {

        console.log(error);

    }
}
makeRequest();

function getInput(){
    const searchInputfield = document.getElementById('');
}