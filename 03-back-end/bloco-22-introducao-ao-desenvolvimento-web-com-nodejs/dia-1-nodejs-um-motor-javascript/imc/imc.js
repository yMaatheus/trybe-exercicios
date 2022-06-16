const readlineSync = require('readline-sync');

const peso = readlineSync.questionInt('Qual o seu peso? ');
const altura = readlineSync.questionFloat('Qual sua altura? ');

const imc = peso / (altura ** 2);
let categoria = 'Abaixo do peso';

if (imc > 18.5 && imc < 24.9) {
    categoria = 'Peso normal';
} else if (imc > 25 && imc < 29.9) {
    categoria = 'Acima do peso'
} else if (imc > 30 && imc < 34.9) {
    categoria = 'Obesidade grau I';
} else if (imc > 35 && imc < 39.9) {
    categoria = 'Obesidade grau II';
} else if (imc > 40) {
    categoria = 'Obesidade grau III e IV';
}

console.log(`${imc} - ${categoria}`);