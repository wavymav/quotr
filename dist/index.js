'use strict';

var _xRay = require('x-ray');

var _xRay2 = _interopRequireDefault(_xRay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x = new _xRay2.default();
var funnyQuotes = {
  url: 'http://www.quotery.com/lists/100-funny-quotes-worth-laughing-over/',
  sel: '.blog-quote',
  rank: '.blog-quote__count span',
  quote: '.blog-quote__content a',
  author: '.blog-quote__author a',
  paginSel: '.page-links__inner a[rel="next"]@href',
  dataLoc: './data/funnyQuotes.json'
};

x(funnyQuotes.url, funnyQuotes.sel, [{
  rank: funnyQuotes.rank,
  quote: funnyQuotes.quote,
  author: funnyQuotes.author
}]).paginate(funnyQuotes.paginSel).write(funnyQuotes.dataLoc);