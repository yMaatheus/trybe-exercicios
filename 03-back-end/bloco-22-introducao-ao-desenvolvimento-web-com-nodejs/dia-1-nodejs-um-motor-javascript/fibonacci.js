const readlineSync = require('readline-sync');

const n = readlineSync.questionInt('Qual é o valor de n? ');

if (n <= 0) {
    console.log('O valor informado precisa ser maior que zero.');
    return;
}

const limit = n - 2;
const fibonacci = [1, 1];

for (let i = 1; i <= limit; i++) {
    const last = fibonacci.length - 1;
    const penultimate = fibonacci.length - 2;
    fibonacci.push(fibonacci[penultimate] + fibonacci[last]);
}

console.log(`Fibonacci: ${fibonacci}`);