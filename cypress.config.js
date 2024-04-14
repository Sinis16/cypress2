const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "Registration-example",
    env: {
      PATH: "C:\\Windows\\System32\\WindowsPowerShell\\v1.0"
    },
    specs: [
      './cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
    ],
  },
});
