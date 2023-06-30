const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const findKey = function(object, callback) {
//   for (let key of Object.values(object)) {
//     if (callback(key)) {
//       return key;
//     }
//     }
//   };

  const findKey = function(object, callback) {
    for (let key of Object.keys(object)) {
      if (callback(object[key])) {
        return key;
      }
    }
  };

obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const results1 = findKey(obj1, x => x.stars === 2);
console.log(assertEqual(results1, 'noma'));

console.log('---');

obj2 = {
  'hello' : {stars: 0},
  'world' : {stars: 4},
}
const results2 = findKey(obj2, x => x.stars === 2);
console.log(assertEqual(results2, undefined));

console.log('---');

obj3 = {
  'this' : {status: 'even'},
  'one' : {status: 'even'},
  'is' : {status: 'even'},
  'a' : {status: 'even'},
  'little' : {status: 'odd'},
  'different' : {status: 'odd'},
}
const results3 = findKey(obj3, x => x.status === 'odd');
console.log(assertEqual(results3, 'little'));