import { API_KEY } from "./secret.js";
import {setMap} from "./script.js";

const btnSubmit = document.getElementById('btnSubmit');
const searchInputfield = document.getElementById('searchInput');
const para_ip = document.getElementById('para_ip');
const para_location = document.getElementById('para_location');
const para_timezone = document.getElementById('para_timezone');
const para_isp = document.getElementById('para_isp');
export let ipAddress;


export async function makeRequest(ipAddress = "") {

    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
        console.log(response)
        const data = await (response.json());
        console.log(data);
        para_ip.textContent = data.ip;
        para_location.textContent = data.location.city + '\n' + data.location.country;
        para_timezone.textContent = data.location.timezone;
        para_isp.textContent = data.isp;
        console.log(data);
        setMap(data);
        return data;

    } catch (error) {

        console.log(error);

    }
}


function getInput(event) {
    event.preventDefault();
    if (!searchInputfield) {
        throw new Error('Error occured');
        return;
    } else if (searchInputfield === "") {
        alert('Please enter valid IP address or domain');
        return;
    }
     let ipAddress = searchInputfield.value;
    searchInputfield.value = "";
    console.log(ipAddress);
    makeRequest(ipAddress);
}


btnSubmit.addEventListener('click', getInput);

//automatically retriving IP address on page load
document.addEventListener('DOMContentLoaded', () => {
    makeRequest("");
})