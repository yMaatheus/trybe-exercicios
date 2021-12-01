const n = 5;

let array = [];

for (let i = n; i >= 1; i -= 2) {
    array.push(i);
}

array.sort(function(a, b){return a - b});

for (let number of array) {
    let spacesCount = Math.abs((n - number) / 2);
    let spaces = "";
    let piramideArea = "";
    for (let i = 1; i <= spacesCount; i += 1) {
        spaces += " ";
    }
    if (number >= 3) {
        piramideArea += "*";
        for (let i = 1; i <= (number - 2); i += 1) {
            piramideArea += " ";
        }
        piramideArea += "*";
    } else {
        for (let i = 1; i <= number; i += 1) {
            piramideArea += "*";
        }
    }
    console.log(spaces + piramideArea);
}