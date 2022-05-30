## Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT:

SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';

## Escreve uma query para exibir todas as informações das cinco peças com os maiores preços:

SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;