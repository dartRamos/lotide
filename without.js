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
  if (eqArrays(actual, expected) === true) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  const result = [];
  
  for (let i = 0; i < source.length; i++) {
    let matchFound = false;

    for (let t = 0; t < itemsToRemove.length; t++) {
      if (source[i] === itemsToRemove[t]){
        matchFound = true;
      }
    }

    if (!matchFound) {
      result.push(source[i]);
    }
  }

  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 


// Test to ensure the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // Call without but ignore return value
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should pass