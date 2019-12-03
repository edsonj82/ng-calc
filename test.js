import { browser } from "protractor";

describe('Calculadora',()=>{

    it('somar valores', () => {

        browser.get('https://ng-calc.herokuapp.com');    

        element(by.model('first')).sendkeys(2);
        element(by.model('second')).sendkeys(4);
        element(by.id('gobutton')).click();

        var resultado = element(by.binding('latest'));

        expect(resultado.getText()).toEqual('6');
    });
});