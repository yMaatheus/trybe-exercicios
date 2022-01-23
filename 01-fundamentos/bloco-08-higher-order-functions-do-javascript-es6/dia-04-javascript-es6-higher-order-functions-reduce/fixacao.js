const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => {
    console.log(previousValue);
    console.log(currentValue);
};

console.log(array1.reduce((acumulador, valorAtual, index, array) => {
    console.log(acumulador, valorAtual, index, array);
    return 4;
}));

// Pegando maior numero do array
function biggestNumberOfArray() {
    const numbers = [50, 85, -30, 3, 15];
    let bigNumber = 0;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        if (number > bigNumber) {
            bigNumber = number;
        }
    }

    console.log(bigNumber);

    const bigNumberReduce = numbers.reduce((big, number) => {
        console.log(`big - ${big}`, `number - ${number}`);
        if (number > big) {
            return number;
        } else {
            return big;
        }
    });

    console.log(bigNumberReduce);
    return bigNumberReduce;
}

//Somando os numeros pares do array
function sumPairNumbers() {
    const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

    let sumPares = 0;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        if (number % 2 === 0) {
            sumPares += number;
        }
    }

    console.log(sumPares);

    const sumParesReduce = numbers.reduce((acc, number) => number % 2 === 0 ? acc += number : acc, 0);

    console.log(sumParesReduce);
    return sumParesReduce;
}

//Relatório que diz em qual matéria cada estudante foi melhor
function theBestMateriaPerStudant() {
    const estudantes = [
        {
            nome: 'Jorge',
            sobrenome: 'Silva',
            idade: 14,
            turno: 'Manhã',
            materias: [
                { name: 'Matemática', nota: 67 },
                { name: 'Português', nota: 79 },
                { name: 'Química', nota: 70 },
                { name: 'Biologia', nota: 65 },
            ],
        },
        {
            nome: 'Mario',
            sobrenome: 'Ferreira',
            idade: 15,
            turno: 'Tarde',
            materias: [
                { name: 'Matemática', nota: 59 },
                { name: 'Português', nota: 80 },
                { name: 'Química', nota: 78 },
                { name: 'Biologia', nota: 92 },
            ],
        },
        {
            nome: 'Jorge',
            sobrenome: 'Santos',
            idade: 15,
            turno: 'Manhã',
            materias: [
                { name: 'Matemática', nota: 76 },
                { name: 'Português', nota: 90 },
                { name: 'Química', nota: 70 },
                { name: 'Biologia', nota: 80 },
            ],
        },
        {
            nome: 'Maria',
            sobrenome: 'Silveira',
            idade: 14,
            turno: 'Manhã',
            materias: [
                { name: 'Matemática', nota: 91 },
                { name: 'Português', nota: 85 },
                { name: 'Química', nota: 92 },
                { name: 'Biologia', nota: 90 },
            ],
        },
        {
            nome: 'Natalia',
            sobrenome: 'Castro',
            idade: 14,
            turno: 'Manhã',
            materias: [
                { name: 'Matemática', nota: 70 },
                { name: 'Português', nota: 70 },
                { name: 'Química', nota: 60 },
                { name: 'Biologia', nota: 50 },
            ],
        },
        {
            nome: 'Wilson',
            sobrenome: 'Martins',
            idade: 14,
            turno: 'Manhã',
            materias: [
                { name: 'Matemática', nota: 80 },
                { name: 'Português', nota: 82 },
                { name: 'Química', nota: 79 },
                { name: 'Biologia', nota: 75 },
            ],
        },
    ];

    const bestMateriasPerStudant = estudantes.map((estudante) => ({name: `${estudante.nome} ${estudante.sobrenome}`, materia: estudante.materias.reduce((acc, materia) => acc.nota > materia.nota  ? acc : materia).name }));
    console.log(bestMateriasPerStudant);
    return bestMateriasPerStudant;
}