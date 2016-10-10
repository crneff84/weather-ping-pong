var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    // the new instantiated Calculator object called simpleCalculator has the function pingpong called on it with the value of the number input by the user, which is stored as the variable output. Output is an array of numbers/pings/pongs that are calculated using our new object, but our object is a color.
    // var output = ("hot pink").runafunctiontooutputpingpong(inputted number by the user); so on the hot pink calculator we are calculating these numbers. Goal is an inputted value.
    var output = simpleCalculator.pingPong(goal);
    // element is an unbound variable parameter that represents a singular in the foreach loop of the output array.
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
