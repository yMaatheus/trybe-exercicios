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

## Exibindo o nome dos projetos em ordem alfabética descendente:

SELECT Name FROM Scientists.Projects ORDER BY Name DESC;

## Exibindo uma string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;

## Exibindo o nome e as horas dos três projetos com a maior quantidade de horas.

SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

## Exibindo o código de todos os projetos da tabela AssignedTo sem que haja repetições.

SELECT DISTINCT Project FROM Scientists.AssignedTo;