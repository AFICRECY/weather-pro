var cityInfo = document.querySelector(".city_info");
var windInfo = document.querySelector(".wind");
var tempInfo = document.querySelector(".temp");
var humidyInfo = document.querySelector(".humidity");
var cardWrapper = document.querySelector(".forecast_wrapper");
var searchHistory = document.querySelector(".search_history");
var cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search_btn");
console.log(searchBtn);

var lat = null;
var lon = null;
var apiKey = "5313640f5787ea9e3c4cda59b1ef2c59";
var WEATHER_API = "weather";
var FORECAST_API = "forecast";


function fetchOneCallWeatherData(lat, lon){
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=[minutely,alerts]&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('onecall data is', data);
        // renderWeather(data);
        // searchHistoryStored(city);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
}

function renderWeather(data) {
    var name = data.city.name;
    var weather = data.list[0].weather;
    var wind = data.list[0].wind.speed;
    var temp = Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32);
    var humidity = data.list[0].main.humidity;
    var iconSrc = "https://openweathermap.org/img/wn/";
    var icon = document.createElement("i");
    var weatherIcon = document.createElement("div");
    var currentDate = renderCurrentWeather();
  
    weatherIcon.classList.add("weather_icon");
    icon.ariaHidden = true;
  
    cityInfo.textContent = `${name} (${currentDate})`;
    windInfo.textContent = `Wind: ${wind} MPH`;
    tempInfo.innerHTML = `Temp: ${temp}&#176;F`;
    humidityInfo.textContent = `Humidity: ${humidity}%`;
    icon.style.backgroundImage = `url(${iconSrc + weather[0].icon}@2x.png)`;
  
    weatherIcon.appendChild(icon);
    cityInfo.appendChild(weatherIcon);
}
  
function renderCurrentWeather() {
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
return `${month}/${day}/${year}`;
}
  
function searchHistoryStored(city) {
    var newData = city;
    var searchHistory = document.querySelector(".search_history");

    if (searchHistory.innerHTML) {
        searchHistory.innerHTML += `<div class="column">${newData}</div>`;
    } else {
        searchHistory.innerHTML = `<div class="column">${newData}</div>`;
    }
}

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('button clicked');
    var cityInputValue = cityInput.value;
    console.log(cityInputValue);

    if(cityInputValue == "") {
        alert("Please enter a city to search");
        return null;
    }

    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityInputValue}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data is', data);
        lat = data[0]["lat"];
        lon = data[0]["lon"];
        console.log(lat, lon);
        // now that we have our latitude and longitude, let's run our function and pass in values
        fetchOneCallWeatherData(lat, lon);
      })
      .catch((error) => {
        console.error("Error fetching lat and lon data:", error);
      });
  });

  




















// Pseudo Code: 
// 1. set up the html and the associated classes to mirror the wireframe. 
//         a. Will need section for the search input element as well as a button for sumbit. 
//         b. Underneath should be the section of the search history. 
//         c. Will need another section about for the curent day and weather and tempInfo, wind, and humidity 
//         d. Underneath should be a section for the 5 day forecast 
// 2. Input the API key in the javascript, bootstrap link, and jquery link. 
// 3. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the data should be fetched, 
// 4. We need a function with a conditional statement (when the new city has been looked up it is saved to the screen and displayed in the search history section as a column)
// 5. We need a function with a conditional statement (when the input section is filled out with a city name && the button is selected, then the city name and current date, temp, wind, and humidity are pulled from open weather
// 6. Using the createELement and textContent properties, create divs and elements for the sections that will be filled with the updated data 
// 7. Create a function for local storage and saving the previous searches into the empty div underneath the form.