var cityInfo = document.querySelector(".city_info");
var windInfo = document.querySelector(".wind");
var tempInfo = document.querySelector(".temp");
var humidyInfo = document.querySelector(".humidity");
var cardWrapper = document.querySelector(".forecast_wrapper");
var searchHistory = document.querySelector(".search_history");
var buttonEL = document.querySelector("search _btn");


buttonEL.addEventListener('click', function getApi(request){
fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=945ee0c80eb9c6fb74ca9c1f8d075247')
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    responseText.textContent = "Status Code :): " + response.status;
 
        }); 
        


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