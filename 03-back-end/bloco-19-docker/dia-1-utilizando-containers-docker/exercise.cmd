## Baixando imagem do Debian versão reduzida:

docker pull debian:stable-slim

## Criando container a partir da imagem:

docker container run -it debian:stable-slim

## Vendo os dados do sistema operacional do container:

cat /etc/*-release

## Encerrando o terminal do container:

exit

## Verificando na lista de containers qual se refere ao que foi criado:

docker container ls -la