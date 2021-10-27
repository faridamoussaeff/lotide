//Instructions: 
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// Use assertEqual to write test cases for various scenarios. 

// Expected Outcome: 
/*
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false; 
    }
  }
  return true; 
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 4]), true);


//Output: 
/*true
false
✅✅✅ Assertion Passed: true === true
🛑🛑🛑 Assertion Failed: true !== false
✅✅✅ Assertion Passed: false === false
🛑🛑🛑 Assertion Failed: false !== true
*/ 