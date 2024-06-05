"use strict"

window.onload = () => {
    let citiesDropdown = document.querySelector("#citiesDropdown");
    citiesDropdown.addEventListener("change", inputCitiesData);
    inputCitiesData();
    console.log("we are in")
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

    console.log("we are inside inputCitiesData function")
    // Clear the dropdown before repopulating it
    citiesData.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select a City!--";
    citiesData.appendChild(defaultOption);

    cities.forEach(city => {
        let newOption = document.createElement("option");
        newOption.value = city.name;
        newOption.textContent = city.name;
        citiesData.appendChild(newOption);
    });
}