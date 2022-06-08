-- encontre as vendas nacionais e internacionais de cada filme.
SELECT
    movies.title,
    box.domestic_sales,
    box.international_sales
FROM
    pixar.movies AS movies
    INNER JOIN pixar.box_office AS box ON movies.id = box.movie_id;