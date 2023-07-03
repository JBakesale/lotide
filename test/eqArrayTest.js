const assertEqual = require('../assertEqual');
const eqArray = require ('../eqArray');

let result = eqArray([1, 2, 3], [1, 2, 3, 4]);
console.log(result);
assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArray([1, 2, 3], [1, 2, 3, 4]), false); 

