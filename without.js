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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);

// Check if the original array was not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Check the result of the without function
assertArraysEqual(result, ["hello", "world"]);