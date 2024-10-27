const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(array) {
  const result = [];

  for (let f = 0; f < array.length; f++) {
    if (Array.isArray(array[f])) {
      for (let g = 0; g < array[f].length; g++) {
        result.push(array[f][g]);
      }
    } else {
      result.push(array[f]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(["Tacos", 3, ["Burger", 5], 4]));