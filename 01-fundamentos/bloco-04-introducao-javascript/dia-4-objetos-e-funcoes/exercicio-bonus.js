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

// console.log(arrayOfNumbers([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10],]));

const basket = [
	'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
	'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
	'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
	'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
	'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
	'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
	'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
	'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
	'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
	'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
	'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
	'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
	'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
	'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
	'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
	'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
	'Banana', 'Pera', 'Abacate', 'Uva',
];

function countBasket(basket) {
    let contagem = {};
    for (let fruit of basket) {
        if (contagem[fruit] === undefined) {
            contagem[fruit] = 0;
        }
        contagem[fruit] += 1;
    }
    let index = 0;
    let exit = "Sua cesta possui:";
    for (let key in contagem) {
        index+=1;
        const count = contagem[key];
        if (index === 1) {
            exit += " " + count + " " + key;
            continue;
        }
        exit += ", " + count + " " + key;
    }
    return exit += ".";
}

// console.log(countBasket(basket));
