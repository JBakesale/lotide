const eqArray = require('../eqArray');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual(([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(([1, 2, 3], [1, 2, 3, 4]), false); 
