const repeatString = function(string, num) {
let concatenatedString = '';
for(let i = 0; i < num; i++){
  concatenatedString += string;
}
if(num === 0){
  concatenatedString = '';
}
if(num < 0){
  concatenatedString = 'ERROR';
}
return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
