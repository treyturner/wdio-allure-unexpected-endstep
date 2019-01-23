//Load default chai expect library
expect = require('chai').expect;

//Load page objects
search = require('../pages/search.page');

/**
 * Checks any element for a specific class
 * @param {Object} element The webdriverio element to be checked
 * @param {String} string The class to search for
 * @returns {boolean} Whether or not the element had that class
 */
browser.addCommand('hasClass', function(string) {
  let classes = this.getAttribute('class');
  console.log(`classes: `, classes);
  return classes.split(' ').includes(string);
}, true);

before(function() {
  browser.url('/');
  search.input.waitForDisplayed(5000);
});

describe("getAttribute from within a synchronous custom element command", () => {
  it("shouldn't return a promise", () => {
    expect(search.input.hasClass('foo')).to.be.false;
  });
});