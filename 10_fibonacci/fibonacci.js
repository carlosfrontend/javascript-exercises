const fibonacci = function (number) {
  let fibArr = [1, 1];
  const index = number - 1;

  if (typeof (number) === 'string') {
    number = +number;
  }

  if (Math.sign(number) === - 1) {
    return 'OOPS';
  } else {

    for (let i = 2; i < number; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[index];
  }

};

// Do not edit below this line
module.exports = fibonacci;
