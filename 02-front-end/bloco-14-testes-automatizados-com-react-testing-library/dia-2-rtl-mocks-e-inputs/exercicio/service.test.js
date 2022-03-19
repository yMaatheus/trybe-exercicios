let service = require('./service.js');

describe('Testando função "randomNumber".', () => {
    it('A função foi chamada.', () => {
        service.randomNumber = jest.fn();

        service.randomNumber();
        expect(service.randomNumber).toHaveBeenCalled();
    });

    it('A função retorna o esperado.', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);

        expect(service.randomNumber()).toBe(10);
    });

    it('A função foi teve suas execuções chamadas corretamente.', () => {
        service.randomNumber = jest.fn();

        service.randomNumber();
        service.randomNumber();
        service.randomNumber();
        expect(service.randomNumber).toHaveBeenCalledTimes(3);
    });

    it('A função foi chamada e a nova implementação de divisão foi aplicada e acontece apenas uma vez.', () => {
        service.randomNumber = jest.fn().mockImplementation(() => 1).mockImplementationOnce((a, b) => a/b);

        expect(service.randomNumber(4, 2)).toBe(2);
        expect(service.randomNumber()).toBe(1);
    });

    it('Desenvolva uma nova implementação que receba três parâmetros multiplicando-os e resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => a*b*c);

        expect(service.randomNumber(2, 2, 2)).toBe(8);

        service.randomNumber.mockReset();
        service.randomNumber = jest.fn().mockImplementation((a) => a *2);

        expect(service.randomNumber(10)).toBe(20);
    });
});

describe('Testando as funções: "toUpper", "firstChar" e "concatStrings"', () => {
    it('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.', () => {
        service.toUpper = jest.spyOn(service, "toUpper").mockImplementation((str) => str.toLowerCase());

        expect(service.toUpper('BOM DIA')).toBe('bom dia');

        service.toUpper.mockRestore();
        expect(service.toUpper('abc')).toBe('ABC');
    });

    it('Desenvolva para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
        service.firstChar = jest.fn().mockImplementation((str) => str.charAt(str.length -1));

        expect(service.firstChar('BOM DIA')).toBe('A');
    });

    it('Desenvolva para a terceira função: ela deve receber três strings e concatená-las.', () => {
        service.concatStrings = jest.fn().mockImplementation((a, b, c) => a.concat(b).concat(c));

        expect(service.concatStrings('BOM DIA', ' Pessoa ', 'Estudante')).toBe('BOM DIA Pessoa Estudante');
    });
})

describe('Testando a função: "fetchDogPicture"', () => {
    test('A requisição se resolveu e teve como valor "request sucess"', async () => {
        service.fetchDogPicture = jest.fn().mockResolvedValue("request sucess");
    
        service.fetchDogPicture();
        expect(service.fetchDogPicture).toHaveBeenCalled();
        expect(service.fetchDogPicture).toHaveBeenCalledTimes(1);
        await expect(service.fetchDogPicture()).resolves.toBe("request sucess");
        expect(service.fetchDogPicture).toHaveBeenCalledTimes(2);
      });
    
      test('A requisição falhou e ter como valor "request failed"', async () => {
        service.fetchDogPicture = jest.fn().mockRejectedValue("request failed");
    
        expect(service.fetchDogPicture).toHaveBeenCalledTimes(0);
        await expect(service.fetchDogPicture()).rejects.toMatch("request failed");
        expect(service.fetchDogPicture).toHaveBeenCalledTimes(1);
      });
});