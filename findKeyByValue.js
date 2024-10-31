const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const items = Object.keys(obj);

  for (const key of items) {
    if (obj[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);