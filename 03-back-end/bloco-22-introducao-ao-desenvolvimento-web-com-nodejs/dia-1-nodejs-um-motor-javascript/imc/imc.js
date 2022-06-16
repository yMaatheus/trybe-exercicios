const readlineSync = require('readline-sync');

const peso = readlineSync.questionInt('Qual o seu peso? ');
const altura = readlineSync.questionFloat('Qual sua altura? ');

const imc = peso / (altura ** 2)

console.log(imc);