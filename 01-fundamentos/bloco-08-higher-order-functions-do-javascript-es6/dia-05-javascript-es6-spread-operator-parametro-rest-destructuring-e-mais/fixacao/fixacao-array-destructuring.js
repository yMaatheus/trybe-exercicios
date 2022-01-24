function arrayDestructuring() {
    const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

    saudacoes[1](saudacoes[0]); // Olá

    // Produza o mesmo resultado acima, porém utilizando array destructuring
    const [primeiroValor, segundoValor] = saudacoes;
    segundoValor(primeiroValor);
}

arrayDestructuring();


function orgValuesDestructuring() {
    let comida = 'gato';
    let animal = 'água';
    let bebida = 'arroz';

    console.log(comida, animal, bebida); // arroz gato água

    // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

    /*
    Explicação:
    As variaveis comida, animal e bebida recebem o array [bebida, comida e animal]

    */
                 //arroz , gato  , água
    const array = [bebida, comida, animal];
    [comida, animal, bebida] = array;

    console.log(comida, animal, bebida);
}

orgValuesDestructuring();

function pairsNumbersDestructuring() {
    let numerosPares = [1, 3, 5, 6, 8, 10, 12];
    // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
    [,,, ...numerosPares] = numerosPares;
    console.log(numerosPares); // [6, 8, 10, 12];
}

pairsNumbersDestructuring();