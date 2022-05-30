## Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT:

SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';

## Escreve uma query para exibir todas as informações das cinco peças com os maiores preços:

SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;

## Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

## Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL, ordenadas pelo preço em ordem decrescente:

SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;