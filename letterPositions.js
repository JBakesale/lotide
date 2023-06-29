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

function letterPositions(sentence) {
  result = {};
  
  for (var i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    
    if (char !== ' ') {
      if (result[char]) {
        result[char].push(i);
      } else {
        result[char] = [i];
      }
    }
  }
  
  return result;
}




assertArraysEqual(letterPositions("hello").e, [1]);
