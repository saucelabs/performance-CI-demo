/**
 * super simple functional test
 */
const assert = require('assert')

describe('my fish app', () => {
  it('it should open the main page', () => {
    browser.url('/')

    const headline = $('header')
    assert.equal(headline.getText(), 'Tony\'s Favorite Foods');
  })

  it('allows to open the item details page', () => {
    $('a[href="/brrto"]').click()

    const title = $('main > span')
    assert.equal(title.getText(), 'Brrto');
  })
})
