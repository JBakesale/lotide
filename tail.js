const assertEqual = require('./assertEqual');

const tail = function(i) {
  const lastElement = i[i.length - 1];
  return lastElement;
};

module.exports = tail;
