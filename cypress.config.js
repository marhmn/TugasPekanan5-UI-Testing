const { defineConfig } = require('cypress')

module.exports = defineConfig({
    pageLoadTimeout: 60000,
    e2e: {

        baseUrl : 'https://kasirdemo.belajarqa.com/',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    },
    env:{

        email : "m.a.rahman0505@gmail.com",
        password : "rohman2023"

    }
})