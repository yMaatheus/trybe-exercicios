const decode = require('../decode');
const encode = require('../encode');

describe('Exercicio 4', () => {
    it('encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Para a função encode teste se as vogais "a, e, i, o, u" são convertidas em "1, 2, 3, 4 e 5" respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('Para a função decode teste se os números "1, 2, 3, 4 e 5" são convertidos nas vogais "a, e, i, o, u" respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('As demais letras/números não são convertidos', () => {
        expect(encode('aeiou6')).toBe('123456');
        expect(decode('123456')).toBe('aeiou6');
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        const str = 'abc12345';
        expect(encode(str).length).toBe(str.length);
        expect(decode(str).length).toBe(str.length);
    });
});