const { expect } = require('chai');
const whatIsThisNumber = require('../exercise1');

describe('Executando função whatIsThisNumber', () => {
    it('Quando o numero é positivo retorna positivo', () => {
        expect(whatIsThisNumber(1)).to.be.equal('positivo');
    });
    it('Quando o numero é negativo retorna negativo', () => {
        expect(whatIsThisNumber(-1)).to.be.equal('negativo');
    });
    it('Quando o numero é zero retorna neutro', () => {
        expect(whatIsThisNumber(0)).to.be.equal('neutro');
    });
    it('Quando não é um número retorna um erro', () => {
        expect(() => whatIsThisNumber('hello world')).to.throw('Invalid number');
    });
});