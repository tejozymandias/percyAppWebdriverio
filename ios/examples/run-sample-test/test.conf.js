exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESSKEY',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || './examples/BStackSampleApp.ipa'
      }
    ]
  ],

  capabilities: [{
    'bstack:options': {
      deviceName: "iPhone 11 Pro",
      osVersion: "13"
    }
  }, {
    'bstack:options': {
      deviceName: "iPhone 11 Pro Max",
      osVersion: "13"
    }
  }],

  commonCapabilities: {
    'bstack:options': {
      projectName: "wdio-percy-project",
      buildName: 'wdio-percy-build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0'
    }
  },

  maxInstances: 10,

  updateJob: false,
  specs: [
    './examples/run-sample-test/specs/single_test.js'
  ],
  exclude: [],


  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(let key in exports.config.commonCapabilities)
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
