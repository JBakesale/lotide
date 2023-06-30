const assertEqual = function(actual, expected) {
  //filter
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
//happy path
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

    
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("jones", "Jones");
assertEqual(4567, 4567);