const a = 60;
const b = 60;
const c = 60;

if (a < 0 || b < 0 || c < 0) {
    console.log("Ângulo inválido.");
    return;
}

console.log((a + b + c) === 180);