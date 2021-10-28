// Instructions:
//Implement 'without' which will return a subset of a given array,
//removing unwanted elements;

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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: two arrays are not equal.`);
  }
   
};

//Example output:
/// without([1, 2, 3], [1]) // => [2, 3]
/// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

/* function should take a source array and a itemsToRemove array
it shoudl return a new array with only those elements from source array
that are not present in the itemsToRemove array.*/

const without = function(source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove)) {
     return [];
  }
/*
let result = [];
for (let i = 0; i < source.length; i++) {
  if (!itemsToRemove.includes(source[i])) {
   result.push(source[i]);
  }
}
return result;
*/
  return source.filter(word => !itemsToRemove.includes(word));
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);