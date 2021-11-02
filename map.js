const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: two arrays are not equal.`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length > arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  } if (arrayOne.length < arrayTwo.length) {
    for (let i = 0; i < arrayTwo.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const names = ["sarah", "jeniffer", "blair"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(names, name => name.length);
console.log(results1);

const results3 = map(names, name => name.length + 1);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [3, 4, 4]);
assertArraysEqual(results3, [4, 5, 5]);