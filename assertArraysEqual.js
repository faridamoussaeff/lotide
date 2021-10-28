/* Instructions:
1. implement assertArraysEqual which will take in two arrays and console.log 
appropriate message
2. message will be similar to assertEqual. Instead of doing a simple === check, this
assertiion will make use of your eqArrays function for array comparisson.
*/ 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Functions which do not return values to console are difficult to test by using assertions. 
//for this reason, we will not be writing assertions for assertArraysEqual. Instead, 
// we'll call the function below its declaration to ensure that the message is passed to the console. 

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
const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: two arrays are not equal.`);
  }
   
};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);

// Output:
// ✅✅✅ Assertion Passed: two arrays are equal.