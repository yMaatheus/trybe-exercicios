const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('Exercício', () => {
    test('Valor retornado está em maiúsculo', (done) => {
        uppercase('aleatório', (str) => {
            try {
                expect(str).toBe('ALEATÓRIO');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});