const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const Keys1 = Object.keys(object1);
  const Keys2 = Object.keys(object2);
  if (Keys1.length !== Keys2.length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        const output = eqArrays(object1[key], object2[key]);
        console.log('output', output, object1[key], object2[key]);
        if (output === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: two objects are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: two objects are not equal`);
  }
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
assertObjectsEqual({ a: 1, b: 2, c: 'dog' }, { b: 2, a: 1, c: 'dog' });
assertObjectsEqual({ a: 1, b: 2, d: 4 }, { b: 2, a: 1, d: 5 });

