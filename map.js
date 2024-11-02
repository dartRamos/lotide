const map = function (array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  
  return result;
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];


const results1 = map (words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map (words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const result3 = map (words, (word) => word);
assertArraysEqual(result3, ["ground", "control", "to", "major", "tom"]);

