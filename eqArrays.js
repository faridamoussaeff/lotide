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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);