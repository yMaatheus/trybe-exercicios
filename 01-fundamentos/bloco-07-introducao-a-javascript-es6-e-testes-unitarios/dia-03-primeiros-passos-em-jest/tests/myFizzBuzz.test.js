const myFizzBuzz = require('../myFizzBuzz');

describe('Exercicio 3', () => {
    it('Chame a função com um numero dividido por 3 e 5 e espere o retorno "fizzbuzz"', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
    });
    it('Chame a função com um número divisível por 3 e verifique se o retorno "fizz"', () => {
        expect(myFizzBuzz(18)).toBe('fizz');
    });
    it('Chame a função com um número divisível por 5 e verifique se o retorno "buzz"', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    it('Chame a função com um número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio número', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });
    it('Chame a função com um parâmetro que não é um número e verifique se o retorno é false', () => {
        expect(myFizzBuzz('')).toBe(false);
    });
});