// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-6");

describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
        const callback = (error) => {
            try {
                expect(error.message).toEqual('Não temos esse pokémon para você :(');
                done();
            } catch (e) {
                done(e);
            }
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Nenhum', callback);
    });

    it("retorna um pokemon que existe no banco de dados", (done) => {
        const callback = (error, message) => {
            try {
                expect(message).toEqual(`Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember`);
                done();
            } catch (e) {
                done(e);
            }
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
});