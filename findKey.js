const findKey = function (obj, callback) {
  for (let key in obj) {
    if(callback(obj[key])) {
      return key;
    }
  }

  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const objGiven =
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  };


assertEqual(findKey(objGiven, (x) => x.stars === 2), "noma");

assertEqual(findKey(objGiven, (x) => x.stars === 3), "Akaleri");

assertEqual(findKey(objGiven, (x) => x.stars === 4), undefined);

assertEqual(findKey(objGiven, (x) => x.stars === 1), "Blue Hill");

assertEqual(findKey(objGiven, (x) => x.stars === 0), undefined);