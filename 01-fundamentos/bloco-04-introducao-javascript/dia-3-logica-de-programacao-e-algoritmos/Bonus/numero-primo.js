const n = 11;
let array = [];

for (let i = 0; i <= n; i += 1) {
    if (n % i == 0) {
        if (i == 1 || i == n) {
            continue;
        }
        array.push(i);
    }
}

let isPrimo = true;

if (array.length > 0) {
    isPrimo = false;
}

if (isPrimo) {
    console.log("É Primo!");
} else {
    console.log("Não é Primo!");
}