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

module.exports = without;