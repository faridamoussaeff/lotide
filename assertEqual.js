const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Bootcamp", "Lighthouse Labs");
assertEqual(1, 4);
assertEqual("House", "house");
assertEqual("Home", "Home");

// if the values match, it should print the following: 
//🛑🛑🛑 Assertion Failed: Bootcamp !== Lighthouse Labs
//🛑🛑🛑 Assertion Failed: 1 !== 4
//🛑🛑🛑 Assertion Failed: House !== house
//✅✅✅ Assertion Passed: Home === Home





