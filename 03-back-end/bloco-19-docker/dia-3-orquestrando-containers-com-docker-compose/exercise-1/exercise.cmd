## Criando container com servidor apache com porta 4545 utilizando volume para obter a source code:

docker container run -d -p 4545:80 -v "/home/matheus/workspace/exercises/trybe-exercicios/03-back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/exercise-1/:/usr/local/apache2/htdocs/" httpd:2.4

## Obtendo o id do container:

docker ps

## Obtendo o caminho do container na "Mounts" na chave "Source":

docker inspect 80db1dde6def

## Parando o  container:

docker stop 80db1dde6def

## Removendo o container:

docker rm 80db1dde6def

## Verificando se o arquivo html está no mesmo lugar:

cd /home/matheus/workspace/exercises/trybe-exercicios/03-back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/exercise-1/
ls -la

## Obtando o id da imagem:

docker images

## Excluindo imagem:

docker rmi c58ef9bfbb57