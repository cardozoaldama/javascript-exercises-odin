const convertToCelsius = function(fahr) {
  let result = (fahr - 32) * 5/9;
  result = result.toFixed(1);
  return parseFloat(result);
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 9/5) + 32;
  result = result.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
