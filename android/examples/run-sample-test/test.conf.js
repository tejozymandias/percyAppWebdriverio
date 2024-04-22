exports.config = {
  user: 'tejendra_UwDiBS',
  key: 'vieACoa4poN3yrH9Vsgp',

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || './examples/WikipediaSample.apk',
      }
    ]
  ],

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      platformName: 'android',
    }
  }, {
    'bstack:options': {
      deviceName: 'Google Pixel 7 Pro',
      platformVersion: '13.0',
      platformName: 'android',
    } }, {
    'bstack:options': {
      deviceName: 'OnePlus 9',
      platformVersion: '11.0',
      platformName: 'android',
    }
  }],

  commonCapabilities: {
    'bstack:options': {
      projectName: "wdio-appium-project",
      buildName: 'wdio-appium build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true
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
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(let key in exports.config.commonCapabilities) 
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
