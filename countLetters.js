// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const result = {};

  for (const letter of string) {
    if (letter !== " ") {
      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 2);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);

module.exports = countLetters;