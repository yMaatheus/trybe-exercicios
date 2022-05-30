-- Exibindo todas as peças que começam com as letras GR:
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

-- escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2 em ordem alfabética de fornecedor:

SELECT * FROM PecasFornecedores.Fornecimentos WHERE code = 2 ORDER BY Fornecedor;