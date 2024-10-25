const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp"); // assertEqual allows for more style like adding emotes and text with results
assertEqual(1, 1);
assertEqual("Light", 2);
assertEqual("Lighthouse", 'Lighthouse');