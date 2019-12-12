//Arquivos de configuração do protractor - 1:08

exports.config ={

    // chromeOnly: true,
    // directConnect: true,
    framework:'jasmine2',
    specs:['test.js'],
    capabilities:{
        browserName: 'firefox',
    }
}