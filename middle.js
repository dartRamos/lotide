const middle = function(arr) {
  const arrLength = arr.length;

  if (arrLength < 3) {
    return []; 
  } else if (arrLength % 2 !== 0) {
    const centerArr = Math.floor(arrLength / 2);
    return [arr[centerArr]]; 
  } else {
    const centerArr1 = (arrLength / 2) - 1;
    const centerArr2 = centerArr1 + 1;
    return [arr[centerArr1], arr[centerArr2]]; 
  }
};

module.exports = middle;