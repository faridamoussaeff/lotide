const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countLetters = function(word) {
  let result = {};
  const newList = word.split(' ').join('').toLowerCase();
  for (const letter of newList) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Happy LHL"));

//Output:
//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
//{ h: 2, a: 1, p: 2, y: 1, l: 2 }
