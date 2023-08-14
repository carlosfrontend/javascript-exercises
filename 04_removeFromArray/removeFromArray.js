const removeFromArray = function (arr, ...args) {
  return arr.filter((elem) => !args.includes(elem));
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
