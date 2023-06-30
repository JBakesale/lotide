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
  if (eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const takeUntil = function(array, callback) {
  const endIndex = array.findIndex(callback);
  return array.slice(0, endIndex);
  }





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']));

console.log('---');

const data3 = [-4, 2, 5, 6, 7, -2];
const results3 = takeUntil(data3, x => x < 0);
console.log(assertArraysEqual(results3, []));