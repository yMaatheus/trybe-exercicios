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

## Inicinado container novamente sem precisar criar outro:

docker container start 3ea9b3406762

## Validando se ele está ativo na lista de containers:

docker container ls

## Remotando ao terminal do container criado no exercicio:

docker container attach 3ea9b3406762

## Rodando comando para ver versão atual do Debian:

cat /etc/debian_version

## Saindo do terminal do container:

exit

## Removendo somente o container criado no exercicio:

docker container rm -f 3ea9b3406762