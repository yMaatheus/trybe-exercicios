-- exibindo todas as informações de todos os cientistas que possuam a letra e em seu nome:
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%';

-- exibindo o nome de todos os projetos cujo o código inicie com a letra A em ordem alfabética:
SELECT Name FROM Scientists.Projects WHERE Name LIKE '%A%' ORDER BY Name;

-- exibindo o código e nome de todos os projetos que possuam em seu código o número 3 em ordem alfabética:
SELECT Code, Name FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Name;