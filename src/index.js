var funnyQuotes = require('./funnyQuotes');

function randomIndex(arr) {
  var prev;
  return function getRandomNum() {
    var num = Math.floor(Math.random() * arr.length);
    return prev = num === prev ? getRandomNum() : num;
  }
}

function getRandomElement(arr) {
  var getIndex = randomIndex(arr)
  return function() {
    return arr[getIndex()];
  }
}

module.exports = {
  all: funnyQuotes,
  randomQuote: getRandomElement(funnyQuotes)
}
