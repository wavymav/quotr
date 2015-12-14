import Xray from 'x-ray';

const x = new Xray();
const funnyQuotes = {
  url: 'http://www.quotery.com/lists/100-funny-quotes-worth-laughing-over/',
  sel: '.blog-quote',
  rank: '.blog-quote__count span',
  quote: '.blog-quote__content a',
  author: '.blog-quote__author a',
  paginSel: '.page-links__inner a[rel="next"]@href',
  dataLoc: './data/funnyQuotes.js'
}

x(funnyQuotes.url, funnyQuotes.sel,[{
  rank: funnyQuotes.rank,
  quote: funnyQuotes.quote,
  author: funnyQuotes.author
}])
  .paginate(funnyQuotes.paginSel)
  .write(funnyQuotes.dataLoc);
