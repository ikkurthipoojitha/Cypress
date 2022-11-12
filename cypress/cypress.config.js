const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  //watchForFileChanges : false,

  e2e: {
    setupNodeEvents(on, config) {
      on('task',{downloadFile})

      // implement node event listeners here
    },
  },
});
