//Exercicio 1:

const testingScope = (escopo) => {
    if (escopo) {
        var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//Exercicio 2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = oddsAndEvens.sort((a, b) => a - b).toString();

console.log(`Os números ${sort} se encontram ordenados de forma crescente!`);
