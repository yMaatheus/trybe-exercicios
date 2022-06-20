const readlineSync = require('readline-sync');

const n = readlineSync.questionInt('Qual é o valor de n? ');

if (n <= 0) {
    console.log('O valor informado precisa ser maior que zero.');
    return;
}

let fatorial = 1;

for (let i = n; i > 1; i--) {
    fatorial = i * fatorial;
}

console.log(`Fatorial: ${fatorial}`);