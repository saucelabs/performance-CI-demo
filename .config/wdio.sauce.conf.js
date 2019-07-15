const { config } = require('./wdio.conf')

exports.config = Object.assign(config, {
  // =================
  // Service Providers
  // =================
  // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
  // should work too though). These services define specific user and key (or access key)
  // values you need to put in here in order to connect to these services.
  //
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['sauce', 'static-server'],
  sauceConnect: true,
  sauceConnectOpts: { tunnelIdentifier: 'myTunnel' },
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      build: process.env.CIRCLE_WORKFLOW_ID,
      extendedDebugging: true,
      capturePerformance: true,
      crmuxdriverVersion: 'beta'
    }
  }, {
    browserName: 'firefox',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      build: process.env.CIRCLE_WORKFLOW_ID
    }
  }]
})
