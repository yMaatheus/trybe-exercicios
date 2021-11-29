const salarioBruto = 3000;
let salario = salarioBruto;

console.log("Salário Bruto: " + salarioBruto);

//INSS:
let aliquotaINSS;
if (salario <= 1556.94) {
    //8%
    aliquotaINSS = (0.08 * salario);
} else if (salario >= 1556.95 && salario <= 2594.92) {
    //9%
    aliquotaINSS = (0.09 * salario)
} else if (salario >= 2594.93 && salario <= 5189.82) {
    //11%
    aliquotaINSS = (0.11 * salario);
} else if (salario > 5189.82) {
    //-570.88
    aliquotaINSS = 570.88;
}
salario = salario - aliquotaINSS;

console.log("Aliquota INSS: " + aliquotaINSS);
console.log("Salario com desconto INSS: " + salario);

//Imposto de Renda:
let descontoIR;
if (salario >= 1903.98 && salario <= 2826.65) {
    // salario - (7,5% do salario - 142.80) = salario descontado.
    descontoIR = ((0.075 * salario) - 142.80);
} else if (salario >= 2826.66 && salario <= 3751.05) {
    // salario - (15% do salario - 354.80) = salario descontado.
    descontoIR = ((0.15 * salario) - 354.80);
} else if (salario >= 3751.06 && salario <= 4664.68) {
    // salario - (22,5% do salario - 636.13) = salario descontado.
    descontoIR = ((0.225 * salario) - 636.13);
} else if (salario > 4664.68) {
    // salario - (27,5% do salario - 869.36) = salario descontado.
    descontoIR = ((0.275 * salario) - 869.36);
}
salario = salario - descontoIR;

console.log("Imposto de Renda: " + descontoIR);
console.log("Salário Liquido: " + salario);