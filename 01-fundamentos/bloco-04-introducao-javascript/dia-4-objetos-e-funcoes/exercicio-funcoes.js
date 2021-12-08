function verificaPalindrome(text) {
  let textReverse = text.split("").reverse().join("");
  if (textReverse === text) {
    return true;
  }
  return false;
}

function maiorValor(array) {
  return Math.max(...array);
}

function menorValor(array) {
  return Math.min(...array);
}

function maiorQuantidadeCaracteres(array) {
  let word = array[0];
  for (let index of array) {
    if (index.length > word.length) {
      word = index;
    }
  }
  return word;
}

function repeteMais(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }

    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido] + " " + contRepetido;
}

function somaAte(number) {
  let soma = 0;
  for (let index = 1; index <= number; index += 1) {
    soma += index;
  }
  return soma;
}

function isEnd(word, end) {
  let reverseWord = word.split("").reverse().join("");
  let reverseEnd = end.split("").reverse().join("");
  let exit = false;
  for (let index = 0; index < reverseEnd.length; index += 1) {
    const charWord = reverseWord[index];
    const charEnd = reverseEnd[index];
    if (charEnd !== charWord) {
      break;
    }
    exit = true;
  }
  return exit;
}