const { defineConfig } = require('cypress')

module.exports = defineConfig({
    videoCompression: false,
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