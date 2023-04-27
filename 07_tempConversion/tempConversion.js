const convertToCelsius = function(temperature) {
  let finalTemp = Math.round((temperature - 32) * (5/9) * 10) / 10;
  return finalTemp;
};

const convertToFahrenheit = function(temperature) {
  let finalTemp = Math.round((temperature * (9/5) + 32) * 10) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
