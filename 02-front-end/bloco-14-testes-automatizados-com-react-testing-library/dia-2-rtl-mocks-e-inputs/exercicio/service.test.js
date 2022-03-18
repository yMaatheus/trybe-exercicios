let { numeroAleatorio, a } = require('./service.js');

describe('Testando função "numeroAleatorio".', () => {
    it('A função foi chamada.', () => {
        numeroAleatorio = jest.fn();
        numeroAleatorio();
        expect(numeroAleatorio).toHaveBeenCalled();
    });
});