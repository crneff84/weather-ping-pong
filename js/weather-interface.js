var Weather = require('./../js/weather.js').weatherModule;

// a callback function that recieves the city and the humidityData. THIS function is passed into getWeather, and is then transformed in the .then() function as displayHumidity(city, response.main.humidity), because we've passed displayHumidity in as an argument in the getWeather function.
var displayHumidity = function(cityParameter, humidityDataParameter) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
