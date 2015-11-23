'use strict';

var _xRay = require('x-ray');

var _xRay2 = _interopRequireDefault(_xRay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xray = new _xRay2.default();
var funnyQuotes = {
  url: '100-funny-quotes-worth-laughing-over/',
  selectors: '.blog-quote'
};

xray('http://www.quotery.com/lists/' + funnyQuotes.url, funnyQuotes.selectors, [{
  rank: '.blog-quote__count span',
  quote: '.blog-quote__content a',
  author: '.blog-quote__author a'
}]).write('./data/results.json');