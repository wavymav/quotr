import Xray from 'x-ray';

const xray = new Xray();
const funnyQuotes = {
  url: '100-funny-quotes-worth-laughing-over/',
  selectors: '.blog-quote'
}

xray(`http://www.quotery.com/lists/${funnyQuotes.url}`, funnyQuotes.selectors,
  [{
    rank: '.blog-quote__count span',
    quote: '.blog-quote__content a',
    author: '.blog-quote__author a'
  }]
)
  .write('./data/results.json');
