// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code


/*------------------nameOfCity-------------------*/
function createBox (nameOfCity) {
    const cityButton = document.createElement("div");
    cityButton.classList.add("cityBox");
    cityButton.textContent = nameOfCity;
    document.getElementById("cities").appendChild(cityButton);
}
for (let i = 0; i < cities.length; i++){
    createBox(cities[i].name);
}
