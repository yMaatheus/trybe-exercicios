## Escrevendo QUERY para exibir string:

SELECT 'This is SQL Exercise, Practice and Solution';

## Escrevendo QUERY para exibir três números em três colunas:

SELECT 1, 2, 3;

## Escrevendo QUERY que soma os numeros 10 e 15:

SELECT 10 + 15;

## Escrevendo QUERY com operação aritmética :

SELECT (10 + (4 * 5)) / 2;

## Exibindo todas as informações dos ciêntistas:

SELECT * FROM Scientists.Scientists;

## Exibindo o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto:

SELECT Name AS `Nome do Projeto`, Hours AS `Tempo de Trabalho` FROM Scientists.Projects;

## Exibindo e ordenando os nomes dos cientistas por ordem alfabética:

SELECT Name FROM Scientists.Scientists ORDER BY Name;