-- exibindo todas as peças que começam com as letras GR:
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

-- escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2 em ordem alfabética de fornecedor:

SELECT * FROM PecasFornecedores.Fornecimentos WHERE code = 2 ORDER BY Fornecedor;

-- exibindo as peças, preço e fornecedor de todos os fornecimentos em que a sigla do fornecedor tenha a letra N:

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%N%';