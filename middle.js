const eqArray = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2); 
  if (length <= 2) {
    return [];
  }

  if (length % 2) {
    return [array[middleIndex]];
  }

  return [array[middleIndex -1], array[middleIndex]];
};

module.exports = middle;
