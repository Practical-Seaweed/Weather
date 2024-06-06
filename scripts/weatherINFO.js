"use strict";

window.onload = () => {
    let citiesDropdown = document.querySelector("#citiesDropdown");
    citiesDropdown.addEventListener("change", () => {
        if(citiesDropdown.value === ""){
            hideTable();
        }else {
            getWeatherDataForLocation(citiesDropdown.value);
        }
        
    });
    inputCitiesData();
    console.log("we are in");
}

let cities = [
    { name: "Irving, TX", latitude: 32.81522468450753, longitude: -96.94671908134723 },
    { name: "Dallas, TX", latitude: 32.776748073760835, longitude: -96.79858243805562 },
    { name: "Arlington, TX", latitude: 32.735711653959775, longitude: -97.10809012871582 },
    { name: "Garland, TX", latitude: 32.91262119495808, longitude: -96.63908920576453 },
    { name: "Fort Worth, TX", latitude: 32.75494372150879, longitude: -97.33515696793772 }
];

function inputCitiesData() {
    let citiesData = document.querySelector("#citiesDropdown");


    citiesData.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select a City!--";
    citiesData.appendChild(defaultOption);

    cities.forEach(city => {
        let newOption = document.createElement("option");
        newOption.value = `${city.latitude},${city.longitude}`;
        newOption.textContent = city.name;
        citiesData.appendChild(newOption);
    });
}

function getWeatherDataForLocation(location) {
    fetch(`https://api.weather.gov/points/${location}`)
        .then((response) => response.json())
        .then((weatherData) => {
            getForecastDetails(weatherData.properties.forecast);
        })
        .catch((error) => console.log("Nahh brother, check again for getWeatherDataForLocation" ));
}

function getForecastDetails(forecastURL) {
    fetch(forecastURL)
        .then((response) => response.json())
        .then((data) => {
            generateTableRows(data.properties.periods);
        })
        .catch((error) => console.log("haha nope! check again inside getForecastDetails"));
}

function hideTable(){
    let tableOverall = document.querySelector("#tableOverall");
    tableOverall.style.display = "none";
}



function generateTableRows(periods) {
    let tbody = document.querySelector("#userTableInfo");
    tbody.innerHTML = ""; 

    let tableOverall = document.querySelector("#tableOverall");
    tableOverall.style.display = "block"


    periods.forEach(period => {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        cell1.textContent = period.name;

        let cell2 = row.insertCell();
        cell2.textContent = `${period.temperature}℉`;

        let cell3 = row.insertCell();
        cell3.textContent = `${period.windDirection} - ${period.windSpeed}`;

        let cell4 = row.insertCell();
        cell4.textContent = period.shortForecast;

        let cell5 = row.insertCell();
        cell5.textContent = period.detailedForecast;
    });
}