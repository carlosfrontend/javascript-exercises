const reverseString = function (string) {
  const arrayOfString = [];
  for (let i = 0; i < string.length; i++) {
    arrayOfString.push(string[i]);
  }
  let reverseText = arrayOfString.reverse().join("");
  return reverseText;
};
reverseString("hello world");
// Do not edit below this line
module.exports = reverseString;
