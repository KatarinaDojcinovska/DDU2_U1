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
}
     if (rate == false) { 
        title.textContent = "Not found";
    }
    
for (let i = 0; i < cities.length; i++){
    createBox(cities[i].name);
}
            closest_city.push(distance[i]);
            console.log(city1, city2);
        }
    }
    return closest_city;
}
   distance(longest_city);

   function longest_city (longest){
    for(let i= 0; i < longest.length; i++){ //kolla vilket värde som är störst i arrayen
    }
}




