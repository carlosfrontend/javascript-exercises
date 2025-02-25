const sumAll = function (min, max) {
  let sum = 0;
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (typeof min !== "number" || typeof max !== "number") {
    return "ERROR";
  }
  if (min > max) {
    for (let i = 1; i <= min; i++) {
      sum += i;
    }
  } else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
