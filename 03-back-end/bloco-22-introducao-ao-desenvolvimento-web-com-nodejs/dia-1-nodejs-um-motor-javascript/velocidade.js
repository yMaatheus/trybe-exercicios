const readlineSync = require('readline-sync');

const distancia = readlineSync.questionFloat('Qual a distância percorrida?(metros) ');
const tempo = readlineSync.questionFloat('Qual o tempo gasto?(segundos) ');

const velocidadeMedia = distancia / tempo;

console.log(velocidadeMedia);