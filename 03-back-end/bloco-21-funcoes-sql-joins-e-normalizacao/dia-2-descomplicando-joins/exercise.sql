-- encontre as vendas nacionais e internacionais de cada filme.
SELECT
    movies.title,
    box.domestic_sales,
    box.international_sales
FROM
    pixar.movies AS movies
    INNER JOIN pixar.box_office AS box ON movies.id = box.movie_id;

-- obtendo filmes com o numero de vendas internacionais maior que nacionais.
SELECT
    movies.title,
    box.domestic_sales,
    box.international_sales
FROM
    pixar.movies AS movies
    INNER JOIN pixar.box_office AS box ON movies.id = box.movie_id
    AND box.international_sales > box.domestic_sales;

-- buscando os filmes e sua avaliação em ordem decrescente.
SELECT
    movies.title,
    box.rating
FROM
    pixar.movies AS movies
    INNER JOIN pixar.box_office AS box ON movies.id = box.movie_id
ORDER BY
    box.rating DESC;