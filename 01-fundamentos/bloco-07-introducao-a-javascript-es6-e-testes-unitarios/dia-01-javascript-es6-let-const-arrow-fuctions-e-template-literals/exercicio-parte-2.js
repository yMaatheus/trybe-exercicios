//Exercicio 1:

function fatorial(n) {
    // if (n <= 1) {
    //     return 1;
    // }
    // let resp = n;
    // for (let i = 1; i < n; i+=1) {
    //     resp *= i;
    // }
    // return resp;
    return (n <= 1) ? 1 : n * fatorial(n - 1);
}

// console.log(fatorial(4));

//Exercicio 2:

function longestWord(phrase) {
    return phrase.split(' ').sort((a, b) => b.length - a.length)[0];
}

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//Exercicio 4:

function replaceX(str, param) {
    return `${str.replace('x', param)}`
}

console.log(replaceX('Tryber x aqui!', 'Bebeto'));

const skills = ['Programar', 'Jogar', 'Ajudar Pessoas', 'Resolver Problemas', 'Ambição']

function hello(str) {
    return `${str} Minhas cinco principais habilidades são: ${skills.sort().join(',').replace(/,/g, ', ')}`
}

console.log(hello(replaceX('Tryber x aqui!', 'Bebeto')));