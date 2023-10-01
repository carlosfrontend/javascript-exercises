const add = function(a, b) {
  
  return a += b;
};

const subtract = function(a, b) {
	return a -= b;
};

const sum = function(arr) {
	return arr.reduce((total, elem) => {
    return total + elem;
  },0 );
}

const multiply = function(arr) {
 return arr.reduce((acc, number) => {
  return acc * number;
 });
};

const power = function(number, exp) {
	return Math.pow(number, exp);
};

const factorial = function(number) {
	let total = 1;
  for(let i = 1; i <= number; i++){
    total *= i;
  }
  return total;
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
