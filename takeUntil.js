// The takeUntil function takes an array and a callback as arguments. It iterates through the array and returns an array of elements that appear before the one that causes the callback to return a truthy value
const takeUntil = function(array, callback) {
  const result = [];

  for (let item of array) {
    if (callback(item)){
      break;
    }
    result.push(item);
  }

  return result;
};

module.exports = takeUntil;