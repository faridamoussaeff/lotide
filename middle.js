const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  
  let middleArray = [];
  let length = array.length;

  if (length % 2 === 0) {
    let indexTwo = length / 2;
    let indexOne = indexTwo - 1;
    middleArray = [array[indexOne], array[indexTwo]];
    return middleArray;
  }
};
module.exports = middle;