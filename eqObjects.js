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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎇🎇🎇Assertion Passed: ${actual} === ${expected}`); // Using `` allows you to embed expressions inside ${} in string
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function (object1, object2) {
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);

  if (objKey1.length !== objKey2.length) {
    return false;
  }

  for (let key of objKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if (!eqArrays(object1[key], object2[key])) {
        return false 
      }
    }

    else if (!objKey2.includes(key) || object1[key] !== object2[key]) {
      return false;
    } 
  }
 
  return true;
 };

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

assertEqual(eqObjects(multiColorShirtObject, multiColorShirtObject), true)