const palindromes = function (str) {
  const normalString = str.toLowerCase()
                                  .split('')
                                  .join('')
                                  .replace(/[^a-z0-9]+/g, '');
  const reversedString = str.toLowerCase()
                                  .split('')
                                  .reverse()
                                  .join('')
                                  .replace(/[^a-z0-9]+/g, '');
  return normalString === reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
