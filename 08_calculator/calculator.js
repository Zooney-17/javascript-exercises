const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
	let finalSum = 0;

  for (const number of array) {
    finalSum += number;
  };

  return finalSum;
};

const multiply = function(array) {
  let placeHolder = 1;
  let finalProduct;

  for (const factor of array) {
    finalProduct = placeHolder * factor;
    placeHolder = finalProduct;
  };

  return finalProduct;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    let placeHolder = 1;
    let factorialedNumber;

    for (let i = number; i >= 1; i--) {
      factorialedNumber = i * placeHolder;
      placeHolder = factorialedNumber;
    };

    return factorialedNumber;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
