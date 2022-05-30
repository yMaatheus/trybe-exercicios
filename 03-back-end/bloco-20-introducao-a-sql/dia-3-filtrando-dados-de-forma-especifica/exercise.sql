-- exibindo todas as peças que começam com as letras GR:
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

-- escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2 em ordem alfabética de fornecedor:

SELECT * FROM PecasFornecedores.Fornecimentos WHERE code = 2 ORDER BY Fornecedor;

-- exibindo as peças, preço e fornecedor de todos os fornecimentos em que a sigla do fornecedor tenha a letra N:

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%N%';

-- exibindo todas as informações dos fornecedores que são empresas limitadas (LTDA) por ordem alfabética decrescente:

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;

-- exibindo o número de empresas (fornecedores) que contém a letra F na sigla:

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE code LIKE '%F%';

-- exibindo os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 por ordem crescente:

SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco;

-- exibindo o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019:

SELECT COUNT(*) AS vendas_feitas FROM PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';