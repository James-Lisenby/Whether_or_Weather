var myApi = "4637c879cb34b889eb8beec14aa12735"
// var currentConditions = fetch url for specific city current conditions.
// var fiveDay = fetch url for specific city five day forecast.
// var uvIndex = fetch url for specific city UV Index info.
// var previouslySearched = JSON.parse(localStorage.getItem("searchedList")) || [];
//  Build the array of previously searched cities.




fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API Key}')
    .then(response => response.json())
    .then(data => console.log(data));
// Base url for fetching weather.

// Format the Url for specific assignment criteria.
// When I search a city, I get current and future weather (5 days) displayed to appropitate locations.
// City name, the date, icon representation of weather conditions, temp, humidity, wind speed, and uv index.

// Create function that uses user input to search for desired city.
// Event listener for search function.
// Render the reults to appropriate locations

var cityInput = document.getElementById("selectedCity").value;
var savedCities = document.getElementById("savedSearch");
var searchButton = document.getElementById("saveBtn");

function getCity() {


}

searchButton.addEventListener("click", getCity);

// Presented with color depending on weather conditions, good, ok, suck.
    // Change Class depending on conditions.
        // Create and attach class based of conditions.


// Future weather must contain icon of weather conditions, the temp, wind speed, and humidity.
    // 5 day forecast specification.
        // Render to approptiate locations.



// Should be able to select previously selected city and retreive the information.
    // store search to local storage.
    // retrieve from local storage.







