const searchEmployee = require('../bonus');

describe('Testando a função searchEmployee', () => {
    it('A Função existe.', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('A função funciona.', () => {
        expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    });
    it('Gera um erro "ID não identificada" ao não encontrar um id.', () => {
        expect.assertions(1);
        try {
            searchEmployee('1256', 'firstName');
        } catch (error) {
            expect(error).toEqual(new Error('ID não identificada'));
        }
    });
    it('Detalhe especificado não existe.', () => {
        expect.assertions(1);
        try {
            searchEmployee('1256-4', 'firstNamed');
        } catch (error) {
            expect(error).toEqual(new Error('Informação indisponível'));
        }
    });
});