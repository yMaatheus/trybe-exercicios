const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('../exercise2');
const fs = require('fs/promises');

const fileName = 'teste.txt';
const content = 'Hello world!';

describe('A função writeFile', () => {
    before(() => {
        sinon.stub(fs, 'writeFile').returns(content);
    });

    after(() => {
        fs.writeFile.restore();
    });

    it('Existe', () => {
        expect(writeFile).to.be.a('function');
    })
    it('Retorna ok', async () => {
        expect(await writeFile(fileName, content)).to.be.equal('ok');
    });
    it('Escreve o conteúdo', async () => {
        await writeFile(fileName, content);
        expect(fs.writeFile).to.be.called;
        expect(fs.writeFile()).to.be.equal(content);
    });

    describe('Retorna um erro', () => {
        describe('Caso o arquivo', () => {
            it('seja indefinido', async () => {
                expect(await writeFile()).to.throw('file is undefined');
            });
            it('seja inválido', async () => {
                expect(await writeFile(131313, content)).to.throw('file is invalid');
            });
        });
        describe('Caso o conteúdo escrito', () => {
            it('seja indefinido', async () => {
                expect(await writeFile(fileName)).to.throw('content is undefined');
            });
        });
    });
});