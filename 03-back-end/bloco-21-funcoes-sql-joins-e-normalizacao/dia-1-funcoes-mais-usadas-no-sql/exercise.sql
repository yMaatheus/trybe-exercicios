-- exibindo o maior salário da tabela:
SELECT MAX(SALARY) FROM hr.employees;

-- exibindo a diferença entre o maior e o menor salário:
SELECT (MAX(SALARY) - MIN(SALARY)) FROM hr.employees;

-- exibindo a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente:
SELECT JOB_ID, AVG(SALARY) AS avg_job FROM hr.employees GROUP BY JOB_ID ORDER BY avg_job DESC

-- exibindo a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias:
SELECT SUM(SALARY) FROM hr.employees;

-- exibindo o maior salário, o menor salário, a soma de todos os salários e a média dos salários, valores formatados com duas casas decimais:
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2) FROM hr.employees;

-- exibindo a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG):
SELECT COUNT(JOB_ID) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

-- exibindo a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID):
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

-- exibindo a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG):
SELECT JOB_ID, SUM(SALARY) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

-- exibindo em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG):
SELECT JOB_ID, AVG(SALARY) AS avg_salary FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY avg_salary DESC;

-- exibindo média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários:
SELECT DEPARTMENT_ID, COUNT(DEPARTMENT_ID) AS quantity_employees, AVG(SALARY) AS avg_salary FROM hr.employees GROUP BY DEPARTMENT_ID HAVING quantity_employees > 10;