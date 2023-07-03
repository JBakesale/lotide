const assertEqual = require('./assertEqual');

const tail = function(i) {
  console.log(i.slice(1));
};

module.exports = tail;
