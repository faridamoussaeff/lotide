
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false; 
    }
  }
  return true; 
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
          if (results[sentence[i]]) {
              results[sentence[i]].push(i);
          } else {
              results[sentence[i]] = [i];
          }
      }
  }
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);