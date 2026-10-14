import { API_KEY } from "./secret.js";
const btnSubmit = document.getElementById('btnSubmit');
const searchInputfield = document.getElementById('searchInput');
const para1 = document.getElementById('p1');


async function makeRequest(event) {
    const ipAddress=getInput(event);
    console.log(ipAddress);
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
    try {
        console.log(response)
        const data = await (response.json());
        console.log(data);
        para1.textContent=data.ip;
    } catch (error) {

        console.log(error);

    }
}

btnSubmit.addEventListener('click',makeRequest);
function getInput(event){
    event.preventDefault();
    if(!searchInputfield || searchInputfield.value===""){
        new Error('Error occured');
        return;
    }
    const ipAddress = searchInputfield.value;
    console.log(ipAddress+"---")
    return ipAddress;
}