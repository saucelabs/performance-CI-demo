/**
 * super simple functional test
 */
const assert = require('assert')

describe('my fish app', () => {
  it('it should open the main page', () => {
    browser.url('/')
    assert.equal($('h1').getText(), 'Tony\'s Favorite Foods');
  })

  it('allows to open the item details page', () => {
    $('a[href="/brrto"]').click()
    assert.equal($('h2').getText(), 'Brrto');
  })
})
