const nota = 51;

if (nota > 100 || nota < 0) {
    console.log("[ERROR] Valor inválido.");
    return;
}

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else if (nota >= 60) {
    console.log("Nota D");
} else if (nota >= 50) {
    console.log("Nota E");
} else if (nota < 50) {
    console.log("Nota F");
}