const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;


// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (eqArrays(arrayOne, arrayTwo)) {
//     console.log(`✅✅✅ Assertion Passed: two arrays are equal.`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: two arrays are not equal.`);
//   }
// };

// const eqArrays = function(arrayOne, arrayTwo) {
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne.length !== arrayTwo.length) {
//       return false;
//     }
//   }
//   return true;
// };

// const letterPositions = function(sentence) {
//   const results = {};
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== " ") {
//       if (results[sentence[i]]) {
//         results[sentence[i]].push(i);
//       } else {
//         results[sentence[i]] = [i];
//       }
//     }
//   }
//   return results;
// };

// assertArraysEqual(letterPositions("hello").e, [1]);