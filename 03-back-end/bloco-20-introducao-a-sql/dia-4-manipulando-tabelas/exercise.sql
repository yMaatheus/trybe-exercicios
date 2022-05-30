-- inserindo produções da pixar na tabela movies:
INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92), ('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116), ('WALL-E', 'Pete Docter', 2008, 104);

-- inserindo na tabela BoxOffice que o filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional:
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES (9, 6.8, 450000000, 370000000);

-- corrigindo o nome do diretor do filme Procurando Nemo para Andrew Staton:
SET SQL_SAFE_UPDATES = 0;
UPDATE Pixar.Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';

-- corrigindo o titulo e ano de lançamento do filme Ratatouille na tabela Movies:
UPDATE Pixar.Movies SET title = 'Ratatouille', year = 2007 WHERE id = 3;

-- inserindo novas classificações a tabela BoxOffice:
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES 
(8, 8.5, 300000000, 250000000), (10, 7.4, 460000000, 510000000), (11, 9.9, 290000000, 280000000);