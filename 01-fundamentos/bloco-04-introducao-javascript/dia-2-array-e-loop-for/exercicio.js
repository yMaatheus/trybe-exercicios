let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
    console.log(number);
}

let soma = 0;
for (let number of numbers) {
    soma = soma + number;
}

console.log("Resultado: " + soma);

let mediaAritmetica = (soma / numbers.length);

console.log("Média Aritmética: " + mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//Descobrir qual maior valor na lista de numbers usando for
let maiorNumero = 0;
for (let number of numbers) {
    for (let number2 of numbers) {
        if (maiorNumero > number && maiorNumero > number2) {
            continue;
        }
        if (number > number2) {
            maiorNumero = number;
        } else {
            maiorNumero = number2;
        }
    }
}

console.log(maiorNumero);

//Econtrando valores impares
let count = 0;
for (let number of numbers) {
    if (!(number % 2 === 0)) {
        count += 1;
    }
}

if (count === 0) {
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log(count);
}

//Descobrir qual menor valor na lista de numbers usando for
let menorNumero = numbers[0]; //Pegando um numero lista
for (let number of numbers) {
    for (let number2 of numbers) {
        if (menorNumero < number && menorNumero < number2) {
            continue;
        }
        if (number < number2) {
            menorNumero = number;
        } else {
            menorNumero = number2;
        }
    }
}

console.log(menorNumero);

//Criando um array do numero 1 até o 25
let lista = [];
for (let i = 1; i <= 25; i+=1) {
    lista.push(i);
}
console.log(lista);

for (let i of lista) {
    console.log((i/2));
}