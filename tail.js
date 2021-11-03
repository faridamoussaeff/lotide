const assertEqual = require('./assertEqual');

let newArray = [];
const tail = function (array) {
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail; 
// const tail = function(array) {
//  return array.slice(1);
// };

// module.exports = tail; 