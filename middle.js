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

let result = middle([1, 2])
console.log(result);


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);