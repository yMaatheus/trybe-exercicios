-- exibindo o maior salário da tabela:
SELECT MAX(SALARY) FROM hr.employees;

-- exibindo a diferença entre o maior e o menor salário:
SELECT (MAX(SALARY) - MIN(SALARY)) FROM hr.employees;