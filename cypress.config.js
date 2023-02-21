const { defineConfig } = require('cypress')

module.exports = defineConfig({
    
    e2e: {
        pageLoadTimeout: 120000,
        baseUrl : 'https://kasirdemo.belajarqa.com/',
        specPattern : "cypress/support/e2e/",
        supportFile : false,
    },
    env:{

        email : "m.a.rahman0505@gmail.com",
        password : "rohman2023"

    }
})