const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: two arrays are not equal.`);
  }
};

const middle = function(array) {
  let result = "";
  let newlength = array[Math.floor(array.length / 2)];
  if (array.length < 3) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result = array[newlength - 1] + ', ' + array[newlength];

    } else {
      result = array[Math.floor(array.length / 2)];
    }
  }
  return result;
};
console.log(middle([1]));  // prints []
console.log(middle([1, 2])); // []
console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4, 5])); // [3]