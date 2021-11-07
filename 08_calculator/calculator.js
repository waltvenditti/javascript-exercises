const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((sum, element) => sum + element,0);
};

const multiply = function(array) {
  return array.reduce((product, element) => product*element);
};

const power = function(number, exponent) {
	let result = 1;
  for (let i=0; i < exponent; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  let factorial = 1;
  for(let i = number; i>1; i--) {
    factorial *= i;
  }
  return factorial;
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
