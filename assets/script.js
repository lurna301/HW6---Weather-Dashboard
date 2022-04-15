var dateEl = document.querySelector('#date');
var cityEl = document.querySelector('#city');
var timeEl = document.querySelector('#time');
var tempEl = document.querySelector('#tempInfo');
var windEl = document.querySelector('#windInfo');
var humidityEl = document.querySelector('#humidityInfo');
var uvEl = document.querySelector('#uvInfo');
var buttonEl = document.querySelector('.searchButton');
var forecastContainerEl = document.querySelector("#forecast-container");
var weatherDayIconEl = document.querySelector("#weather-day-icon");
var buttonContainerEl = document.querySelector("#button-container");
var weatherDayContainerEl = document.querySelector("#weather-day-container");
var outerForecastContainerEl = document.querySelector(
  "#outer-forecast-container"
);

var days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"]
var months = ['January','February','March','April','May','June','July','August','September', 'October','November','December']
var APIKEY = "929dea4147042e6db80d748fcc81f4e7";
var baseUrl = "http://api.openweathermap.org/";
var input = "";

// calling the set interval function to set the date without using API

setInterval(() => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var year = time.getFullYear();


    dateEl.innerHTML = days[day] + ' ' + months[month]+ ' ' + date + ',' + ' ' + year;

},1000)

    buttonEl.addEventListener('click', function(event){
    
       event.preventDefault();
        getWeatherData();

        var url = `${baseUrl}geo/1.0/direct?q=${city}&limit=1&appid=${APIKEY}`;
        function getWeatherData(){
        var currentWeatherUrl = `${baseUrl}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`;
            
         
             fetch(url)
             .then(response => response.json())
             .then(data => {
                 console.log(data)
             })   
            // function showWeatherData(){




            // }

        })
    }
        
});