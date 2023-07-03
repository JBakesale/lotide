const assertEqual = function(actual, expected) {
  //filter
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
//happy path
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqual;

