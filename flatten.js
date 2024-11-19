const flatten = function(array) {
  let result = [];

  for (let f = 0; f < array.length; f++) {
    if (Array.isArray(array[f])) {
      result = result.concat(array[f]); // is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    } else {
      result.push(array[f]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(["Tacos", 3, ["Burger", 5], 4]));


module.exports = flatten;