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
browser.addCommand('hasClass', function(element, string) {
  return element.getAttribute('class').split(' ').includes(string);
});

before(function() {
  browser.url('/');
  search.input.waitForDisplayed(5000);
});

describe("custom commands", () => {
  it("shouldn't output to stderr", () => {
    expect(browser.hasClass(search.input, 'foo')).to.be.false;
  });
});