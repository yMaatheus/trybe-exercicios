-- inserindo produções da pixar na tabela movies:
INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92), ('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116), ('WALL-E', 'Pete Docter', 2008, 104);

-- inserindo na tabela BoxOffice que o filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional:
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES (9, 6.8, 450000000, 370000000);