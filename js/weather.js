var apiKey = require('./../.env').apiKey;

Weather = function(){
};

// getWeather expects two arguments, (we pass) a city and (we pass) displayHumidity.
Weather.prototype.getWeather = function(city, displayFunctionParameter) {
  console.log(city);
  console.log(apiKey);
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunctionParameter(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
