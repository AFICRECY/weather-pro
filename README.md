# weather-pro

## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Jquery UI  | [https://jqueryui.com/](https://jqueryui.com/)      |
| OpenWeather Server Side API | [https://openweathermap.org/api/one-call-3](https://openweathermap.org/api/one-call-3)      |



## Description:

[Visit Deployed Site]:

Having access to an accessible weather application is extremely useful for any individual who want to plan their day or week according to a 5 day weather forecast. This web application does exactly that! With this dynamic web application I’ve brought together HTML, CSS, JavaScript, Jquery, OpenWeather’s API weather data to help enhance the user experience when looking up a city and the corresponding weekly weather conditions. With Weather Pro, a user can enter a city name into the search input and the daily weather (Temp, Wind, and Humidity) as well as a 5 day weather forecast for that respective city are displayed in an appealing display. 
A main advantage of this weather application is its usage of a weather API which provides high quality, reliable, and up to date weather data. 




## Table of Contents:
* Installation (HTML, CSS, JavaScript, Jquery, getElementById, Event Listeners, and Objects, Server Side API’s )
* Usage
* Credits
* License


### Installation:

To install this project, a knowledge of HTML, CSS, JavaScript, Web API’s, and Server Side API,  were required. Methods used ranged from functions, document window methods, querySelector, getElementById, Event Listeners, Local Storage, Variables, If/Else Statements, and the OpenWeather.com weather API link and key. The web application is intended for the user to be able to input any city and get current and updated weather forecasts as well as store their previous searches in a designated area underneath the search section. 



### Usage:

Weekly weather displays are important to protecting life, property, and daily planning. Forecasts are pulled from OpenWeather’s API database and provide fast and numerical predictions.  When a user enters a city name, they are able to get the current day as well as a 5 day weather forecast. 

Weather predictions based on temperature and precipitation are important to agriculture, family and event planning as well as outdoor and indoor businesses. 























# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/api-documentation-and-keys
https://www.educative.io/answers/how-to-add-bootstrap-to-html 
https://getbootstrap.com/docs/5.3/utilities/flex/


Youtube Video: 
https://www.youtube.com/watch?v=GXrDEA3SIOQ
