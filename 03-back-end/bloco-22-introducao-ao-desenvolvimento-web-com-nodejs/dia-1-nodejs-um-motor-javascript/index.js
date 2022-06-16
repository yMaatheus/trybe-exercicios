const readlineSync = require('readline-sync');

console.log('1 - imc');
console.log('2 - velocidade');
console.log('3 - sorteio');
const scriptEscolhido = readlineSync.questionInt('Digite o número do script a ser executado: ');

if (scriptEscolhido === 1) {
    require('./imc');
} else if (scriptEscolhido === 2) {
    require('./velocidade');
} else if (scriptEscolhido === 3) {
    require('./sorteio');
} else {
    console.log('Ops! não foi possível encontrar o script informado.');
}