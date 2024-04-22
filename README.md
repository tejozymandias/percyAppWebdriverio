# App Percy with webdriverio
This repository runs your build on app pery and browserstack app automate.


### Requirements

* Node.js 8.11.2+
  - If you don't have Node installed, download it from [here](https://nodejs.org/en/)

### Install the dependencies

For Android tests, run the following command in project's base directory :

```sh
cd android
npm i
```

## Getting Started

- Create a new App Project in Percy and export percy token 
`export PERCY_TOKEN=[your-project-token]`
- Install Percy CLI and Percy Appium dependencies.
```sh
npm install --save-dev @percy/cli
npm install --save-dev @percy/appium-app
```

- A sample test script is already available in single_test.js file under android>examples> run-sample-test>spec folder. Refer [Documentation](https://www.browserstack.com/docs/app-percy/integrate/webdriverio-javascript)for more help.


### Run sample test:

- To run parallel tests, run `npm run test`


