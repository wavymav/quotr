var funnyQuotes = require('../data/funnyQuotes.json');

function getRandomElement(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

module.exports = {
  all: funnyQuotes,
  randomQuote: getRandomElement(funnyQuotes)
}
