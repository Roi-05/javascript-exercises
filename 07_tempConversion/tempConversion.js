const convertToCelsius = function(temperature) {
  let celcius = (temperature - 32) * 5/9;
  let roundedCelcius = Math.round(celcius * 10) / 10;
  return roundedCelcius;
};

const convertToFahrenheit = function(temperature) {
  let farenheit = temperature * 9/5 + 32;
  let roundedFarenheit = Math.round(farenheit * 10) / 10;
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
