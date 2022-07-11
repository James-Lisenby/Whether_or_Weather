var myApi = "4637c879cb34b889eb8beec14aa12735"
// var currentConditions = fetch url for specific city current conditions.
// var fiveDay = fetch url for specific city five day forecast.
// var uvIndex = fetch url for specific city UV Index info.
// var previouslySearched = JSON.parse(localStorage.getItem("searchedList")) || [];
//  Build the array of previously searched cities.




fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=4637c879cb34b889eb8beec14aa12735')
    .then(response => response.json())
    .then(data => console.log(data));
// Base url for fetching weather.

// Format the Url for specific assignment criteria.
// When I search a city, I get current and future weather (5 days) displayed to appropitate locations.
// City name, the date, icon representation of weather conditions, temp, humidity, wind speed, and uv index.

// Render the reults to appropriate locations



var searchButton = document.getElementById("saveBtn")
// The main button that gets the ball rolling.

searchButton.addEventListener("click", getCity)
searchButton.addEventListener("click", storeSearch)
searchButton.addEventListener("click", addToList)
// Event listeners for all the main functions.

function getCity() {
    userInput = document.getElementById("selectedCity").value;
    console.log(userInput);
}
// Takes user input. Will replace [city] in the URL

function storeSearch() {
    searchedCity = document.getElementById("selectedCity").value;
    localStorage.setItem('searchedCity', JSON.stringify(searchedCity));
}
// Stores the searched city into local storage

function addToList() {
    var inputValue = document.getElementById("selectedCity").value,
        listNode = document.getElementById('searchHistory'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(inputValue);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}
// Adds searched city into the Saved Search list.

// Should be able to select previously selected city and retreive the information.
    // store search to local storage.
    // retrieve from local storage.




// Presented with color depending on weather conditions, good, ok, suck.
    // Change Class depending on conditions.
        // Create and attach class based of conditions.


// Future weather must contain icon of weather conditions, the temp, wind speed, and humidity.
    // 5 day forecast specification.
        // Render to approptiate locations.











