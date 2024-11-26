// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

let title = document.querySelector("title");
document.getElementById("cities");


// Recommended: Ask for the city name and then the rest of the code

const user_request_city = prompt("Vilken stad?");
let rate = false;

/*------------------nameOfCity-------------------*/
function createBox (nameOfCity) {
    const cityButton = document.createElement("div");
    cityButton.classList.add("cityBox");
    cityButton.textContent = nameOfCity;
    document.getElementById("cities").appendChild(cityButton);

    if (nameOfCity.includes(user_request_city)){
        title.textContent = user_request_city;
        rate = true;
    } 
function createCityBoxes () {
   for (let i = 0; i <cities.length; i++) {
    const cityDiv = document.createElement(`div`);
    cityDiv.id = cities[i].id;
    cityDiv.classList.add(`cityBox`);
    cityDiv.textContent = cities[i].name;
    document.getElementById(`cities`).appendChild(cityDiv);
   }
}
     if (rate == false) { 
        title.textContent = "Not found";
    }

function cityNamePrompt () {
    const userCityName = prompt (`Vilken stad`)
    let cityID = null;
    
for (let i = 0; i < cities.length; i++){
    createBox(cities[i].name);
    for (const city of cities){
        if (city.name.toUpperCase() === userCityName.toUpperCase()) {
            displayCity(city);
            cityID = city.id;
            break;
            } else {
            displayCityNotFound(userCityName);
            }
        }
    return cityID;
}

/*---------------------Prompt-------------------------*/

for (let i = 0; i < cities.length; i++){
    let city = cities[i];
    let city_name = city.name;

    if (user_request_city === city_name){
        document.querySelector("h2").textContent = city_name;
        document.querySelector("h2").textContent = city_name + " (" + city.country + ") ";
        title.textContent = city_name;
        console.log(true);
        rate = true;
function displayCity (city) {
    document.querySelector('h2').textContent = `${city.name} (${city.country})`
    document.querySelector('title').textContent = `${city.name}`
    
    const targetCity = document.getElementById(city.id)
    targetCity.classList.add('target')
    document.querySelector('h3').style.visibility = 'visible'
  }
function displayCityNotFound (userCityPrompt) {
    document.querySelector('h2').textContent = `${userCityPrompt} finns inte i databasen`
    document.querySelector('title').textContent = `Not Found`;
    document.querySelector('h3').style.visibility = 'hidden';
  }
function getCityDistances (cityId)  {
    const cityDistances = []
    for (let i = 0; i < distances.length; i++){
        const distance = distances[i];
        if (distance.city1 === cityId || distance.city2 === cityId) {
        cityDistances.push(distance)
      }
    }
    return cityDistances
}
    if (rate == false) {
        document.querySelector("h2").textContent = `${user_request_city} is not in the database`;
        console.log(false);
}

/*-------------------Further and Closest-------------------*/

    function distance (){
        let closest_city = [];
        for (let i = 0; i < distances.length; i++){
        if (distances[i].city1 == user_request_city.id || distances[i].city2 == user_request_city.id ) {
            closest_city.push(distance[i]);
            console.log(city1, city2);
function getFarthestCityId (distances, cityid) {
    let currentDistance = 0
    let currentFarthestCityId;
  
    for (let i = 0; i < distances.length; i++) {
        const distance = distances[i];
      if (distance.distance > currentDistance) {
        currentDistance = distance.distance
        if (distance.city1 === cityId) {
          currentFarthestCityId = distance.city2
        } else {
          currentFarthestCityId = distance.city1
        }
      }
    }
    return closest_city;
    
    return { id: currentFarthestCityId, distance: currentDistance }
}
   distance(longest_city);

   function longest_city (longest){
    for(let i= 0; i < longest.length; i++){ //kolla vilket värde som är störst i arrayen
function getClosestCity (distances, cityId){
    let currentDistance = Infinity
    let currentClosestCityId
  
    for (let i = 0; i < distances.length; i++) {
        const distance = distances[i];
      if (distance.distance < currentDistance) {
        currentDistance = distance.distance
        if (distance.city1 === cityId) {
          currentClosestCityId = distance.city2
        } else {
          currentClosestCityId = distance.city1
        }
      }
    }
  
    return { id: currentClosestCityId, distance: currentDistance }
}




function displayFarthestCity (cityData) {
    let farthestCity = null
    for (const city of cities) {
      if (city.id === cityData.id) {
        farthestCity = city
        document.getElementById('furthest').textContent = city.name
      }
    }
    const cityDiv = document.getElementById(farthestCity.id)
    cityDiv.classList.add('furthest')
    const distanceInMiles = cityData.distance / 10
  
    cityDiv.textContent = `${farthestCity.name} ${distanceInMiles} mil bort`;
}
function displayClosestCity (cityData) {
    let closestCity = null
    for (const city of cities) {
      if (city.id === cityData.id) {
        closestCity = city;
        document.getElementById('closest').textContent = city.name;
      }
function createTable () {
  const table = document.getElementById('table');
  const cityCount = cities.length;
  
  createColumns(table, cityCount);
  createRows(table, cityCount);
  populateTable();
}
function createColumns (table, cityCount) {
  for (let i = 0; i < cityCount + 1; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add('head_column');
    if (i !== 0) {
      cell.textContent = i - 1; // Stadens ID
    }
    const cityDiv = document.getElementById(closestCity.id)
    cityDiv.classList.add('closest')
    const distanceInMiles = cityData.distance / 10
    cityDiv.textContent = `${closestCity.name} ${distanceInMiles} mil bort`
}
function createRows (table, cityCount) {
  for (let i = 0; i < cityCount; i++) {
    const cityNameCell = document.createElement('div');
    cityNameCell.textContent = cities[i].name;
    cityNameCell.classList.add('head_row');
    cityNameCell.classList.add('cell');
  if (i % 2 === 0) {
    cityNameCell.classList.add('even_row');
  }
  table.appendChild(cityNameCell);

    for (let j = 0; j < cityCount; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
  
    if (j % 2 === 0) {
      cell.style.backgroundColor = 'rgb(189, 172, 134)';
    }
  
    if (i % 2 === 0) {
      cell.classList.add('even_row');
    }
  
    cell.id = `${i}-${j}`
    table.appendChild(cell);
    }
  }
}
function populateTable () {
    for (let i = 0; i <distances.length; i++){
    
      const distance = distances[i];
    const cell = document.getElementById(`${distance.city1}-${distance.city2}`)
    cell.textContent = distance.distance / 10
    const cellReverse = document.getElementById(`${distance.city2}-${distance.city1}`)
    cellReverse.textContent = distance.distance / 10
  }
}
  createCityBoxes();
  createTable();
  const cityID = cityNamePrompt();
  if (cityID) {
    const cityDistances = getCityDistances(cityID);
    const farthestCity = getFarthestCityId(cityDistances, cityID);
    const closestCity = getClosestCity(cityDistances, cityID);
    displayFarthestCity(farthestCity);
    displayClosestCity(closestCity);
  }