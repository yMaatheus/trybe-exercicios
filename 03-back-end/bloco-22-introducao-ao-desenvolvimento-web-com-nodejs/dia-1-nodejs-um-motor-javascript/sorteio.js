const readlineSync = require('readline-sync');

const numeroEscolhido = readlineSync.questionInt('Escolha um número entre 0 e 10: ');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const sorteado = getRandomInt(0, 10);

console.log(numeroEscolhido === sorteado ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${sorteado}`);