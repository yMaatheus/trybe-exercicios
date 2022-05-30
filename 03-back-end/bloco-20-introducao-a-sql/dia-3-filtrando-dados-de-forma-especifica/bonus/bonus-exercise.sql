-- exibindo todas as informações de todos os cientistas que possuam a letra e em seu nome:
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%';

-- exibindo o nome de todos os projetos cujo o código inicie com a letra A em ordem alfabética:
SELECT Name FROM Scientists.Projects WHERE Name LIKE '%A%' ORDER BY Name;

-- exibindo o código e nome de todos os projetos que possuam em seu código o número 3 em ordem alfabética:
SELECT Code, Name FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Name;

-- exibindo todos os ids de cientistas cujos projetos sejam AeH3, Ast3 ou Che1:
SELECT Scientist FROM Scientists.AssignedTo WHERE Project IN ('AeH3', 'Ast3','Che1');

-- exibindo todas as informações de todos os projetos com mais de 500 horas:
SELECT * FROM Scientists.Projects WHERE Hours > 500;

-- exibindo todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800:
SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 250 AND 800;