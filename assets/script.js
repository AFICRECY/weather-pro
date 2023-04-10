var cityInfo = document.querySelector(".city_info");
var windInfo = document.querySelector(".wind");
var tempInfo = document.querySelector(".temp");
var humidyInfo = document.querySelector(".humidity");
var cardWrapper = document.querySelector(".forecast_wrapper");
var searchHistory = document.querySelector(".search_history");
var buttonEL = document.querySelector("search _btn");
var lat = "";
var lon = "";
var city = "";
var WEATHER_API = "weather";
var FORECAST_API = "forecast";



// buttonEL.addEventListener('click', function getApi(request){
// fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=945ee0c80eb9c6fb74ca9c1f8d075247')
//     .then(response => response.json()) 
//     .then(data => console.log(data)) 
    
 
//         }); 


      buttonEL.addEventListener('click', function() {
        // Send a GET request to the OpenWeatherMap API using fetch
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=945ee0c80eb9c6fb74ca9c1f8d075247`)
          .then(city => {
            if (type === city) {
              fetchData();
              searchHistoryStored();
            }
            return city.json();
          })
          .then(data => {
            console.log(data);
            // Render the weather data to the UI
            renderWeather(data);
          })
          .catch(error => {
            console.error("Error fetching weather data:", error);
          });
      });

  
  function fetchData() {
// 3. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the 5 day forecast should be pulled from open weather, 
  }

  function searchHistoryStored () {
// 4. We need a function with a conditional statement (when the new city has been looked up it is saved to the screen and displayed in the search history section as a column)

  }
  
  function renderCurrentWeather () {
// 5. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the city name and current date, temp, wind, and humidity are pulled from open weather
  }











responseText.textContent = "Status Code :): " + response.status;

// 3. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the 5 day forecast should be pulled from open weather, 






// Pseudo Code: 
// 1. set up the html and the associated classes to mirror the wireframe. 
//         a. Will need section for the search input element as well as a button for sumbit. 
//         b. Underneath should be the section of the search history. 
//         c. Will need another section about for the curent day and weather and tempInfo, wind, and humidity 
//         d. Underneath should be a section for the 5 day forecast 
// 2. Input the API key in the javascript, bootstrap link, and jquery link. 
// 3. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the 5 day forecast should be pulled from open weather, 
// 4. We need a function with a conditional statement (when the new city has been looked up it is saved to the screen and displayed in the search history section as a column)
// 5. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the city name and current date, temp, wind, and humidity are pulled from open weather
// 6. Using the createELement and textContent properties, create divs and elements for the sections that will be filled with the updated data 
// 7. Create a function for local storage and saving the previous searches into the empty div underneath the form.