//Arquivos de configuração do protractor

exports.config ={

    directConnect: true,

    framework:'jasmine2',

    specs:['test.js'],

    capabilities:{
        browserName: 'chrome'
    }
}