const createEmail = (name) => `${name.toLowerCase().replace(' ', '_')}@trybe.com`;
const createPerson = (name) => ({ fullName: name, email: createEmail(name) });

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond
        id3: callback('Carla Paiva'), // Nome: Carla Paiva
    }
    return employees;
};

// console.log(newEmployees(createPerson));

const generateNumber = () => Math.floor((Math.random() * 5) + 1);
const checkAposta = (numeroApostado, numeroSorteado) => {
    if (numeroApostado === numeroSorteado) {
        return true;
    }
    return false;
}

const sortear = (numeroApostado, callback) => {
    const numeroSorteado = generateNumber();
    console.log(numeroSorteado);
    if (callback(numeroApostado, numeroSorteado)) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

// console.log(sortear(5, checkAposta));

const countCorrectRespostas = (gabarito, respostas) => {
    let count = 0;
    for (let index = 0; index < respostas.length; index += 1) {
        const resposta = respostas[index];
        const respostaCorreta = gabarito[index];
        if (resposta === 'N.A') {
            continue;
        }
        if (resposta !== respostaCorreta) {
            count -= 0.5;
            continue;
        }
        count += 1;
    }
    return count;
}

const checkRespostas = (gabarito, respostas, callback) => {
    return callback(gabarito, respostas);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS, countCorrectRespostas));