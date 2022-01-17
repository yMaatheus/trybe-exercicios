const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//Exercicio 1:

function newKeyValue(object, key, value) {
    object[key] = value;
}

newKeyValue(lesson2, 'turno', 'noite');

//Exercicio 2:

function listKeysForObject(object) {
    return Object.keys(object);
}

console.log(listKeysForObject(lesson2));

//Exercicio 3:

function showSizeObject(object) {
    return listKeysForObject(object).length;
}

console.log(showSizeObject(lesson2));

//Exercicio 4:

function listValuesForObject(object) {
    return Object.values(object);
}

console.log(listValuesForObject(lesson2));

//Exercicio 5:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//Exercicio 6:

function getTotalStudants() {
    const keys = Object.keys(allLessons);
    let sum = 0;
    for (const key of keys) {
        const studants = allLessons[key]['numeroEstudantes'];
        sum += studants;
    }
    return sum;
}

console.log(getTotalStudants());

//Exercicio 7:

function getValueByKeyNumber(object, numberKey) {
    return object[Object.keys(object)[numberKey]];
}

console.log(getValueByKeyNumber(lesson1, 0));

//Exercicio 8:

function verifyPair(object, key, value) {
    const entries = Object.entries(object);
    for (const entry of entries) {
        if  (entry[0] === key && entry[1] === value) {
            return true;
        }
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//Bonûs 1:

function getStudantsMath() {
    let count = 0;
    for (const key of Object.keys(allLessons)) {
        const materia = allLessons[key]['materia'];
        if (materia === 'Matemática') {
            const studants = allLessons[key]['numeroEstudantes'];
            count += studants;
        }
    }
    return count;
}

console.log(getStudantsMath());

function createReport(professor) {
    const leassons = [];
    let studants = 0;
    for (const key of Object.keys(allLessons)) {
        const teacher = allLessons[key]['professor'];
        if (teacher === professor) {
            leassons.push(allLessons[key]['materia']);
            studants += allLessons[key]['numeroEstudantes'];
        }
    }
    return {professor: professor, aulas: leassons, estudantes: studants}
}

console.log(createReport('Maria Clara'));