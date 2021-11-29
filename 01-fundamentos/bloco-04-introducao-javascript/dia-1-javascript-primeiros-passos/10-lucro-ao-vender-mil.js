const custoDoProduto = 1000;
const valorDeVenda = 2000;

if (custoDoProduto < 0 || valorDeVenda < 0) {
    console.log("[ERROR] Valores inválidos.");
    return;
}

const CustoDoProdutoTotal = custoDoProduto + (0.2 * custoDoProduto); // +20%
const lucro = valorDeVenda - CustoDoProdutoTotal;
const lucroDeMil = lucro * 1000;

console.log(lucroDeMil);