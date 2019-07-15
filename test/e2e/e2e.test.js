/**
 * super simple functional test
 */
const assert = require('assert')

/**
 * A job name has to be set in the capabilities in order for Sauce
 * to be able to collect the data properly. With this we make sure that
 * we choose the right job name and also not modify it when changed
 * using WebdriverIO Sauce service.
 */
const jobName = browser.options.capabilities['sauce:options']
  ? browser.options.capabilities['sauce:options'].name
  : 'my fish app'

describe(jobName, () => {
  it('it should open the main page', () => {
    browser.url('/')

    const headline = $('header')
    assert.equal(headline.getText(), 'Tony\'s Favorite Foods');
  })

  /**
   * only run performance tests when running on SauceLabs
   */
  if (browser.options.capabilities['sauce:options'] && browser.isChrome) {
    it('should have loaded the page within expected baseline', () => {
      const pageloadPerformance = browser.assertPerformance(
        jobName,
        ['speedIndex', 'score', 'load']
      )
      assert.equal(
        pageloadPerformance.result,
        'pass',
        `performance on one of the metrics is outside the boundaries: ${JSON.stringify(pageloadPerformance.details)}`)
    })
  }

  it('allows to open the item details page', () => {
    $('a[href="/brrto"]').click()

    const title = $('main > span')
    assert.equal(title.getText(), 'Brrto');
  })
})
