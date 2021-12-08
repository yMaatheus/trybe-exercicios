const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  console.log(numero);
  let soma = numerosRomanos[numero[numero.length - 1]];
  let atual = numerosRomanos[numero[numero.length - 1]];
  console.log(numero[numero.length - 1], numerosRomanos[numero[numero.length - 1]], "1");
  for (let i = 2; i <= numero.length; i += 1) {
    const prox = numerosRomanos[numero[numero.length - i]];
    console.log(numero[numero.length - i], numerosRomanos[numero[numero.length - i]], i);
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

// console.log(romanoParaDecimal("MMXVIII")); // 2018
// console.log(romanoParaDecimal("IVV")); // 6
// console.log(romanoParaDecimal("IV")); // 4

function arrayOfNumbers(vector) {
  let array = [];
  for (let numbers of vector) {
    for (let number of numbers) {
      if (number % 2 !== 0) {
        continue;
      }
      array.push(number);
    }
  }
  return array;
}

// console.log(
//   arrayOfNumbers([
//     [1, 2],
//     [3, 4, 5, 6],
//     [7, 8, 9, 10],
//   ])
// );

