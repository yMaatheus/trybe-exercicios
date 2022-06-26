const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('../exercise2');
const fs = require('fs');

const fileName = 'teste.txt';
const content = 'Hello world!';

describe('A função writeFile', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync').returns(content);
    });

    after(() => {
        fs.writeFileSync.restore();
    });

    it('Existe', () => {
        expect(writeFile).to.be.a('function');
    })
    it('Retorna ok', async () => {
        expect(writeFile(fileName, content)).to.be.equal('ok');
    });

    describe('Retorna um erro', () => {
        describe('Caso o arquivo', () => {
            it('seja indefinido', async () => {
                expect(() => writeFile()).to.throw('file is undefined');
            });
            it('seja inválido', async () => {
                expect(() => writeFile(131313, content)).to.throw('file is invalid');
            });
        });
        describe('Caso o conteúdo escrito', () => {
            it('seja indefinido', async () => {
                expect(() => writeFile(fileName)).to.throw('content is undefined');
            });
        });
    });
});