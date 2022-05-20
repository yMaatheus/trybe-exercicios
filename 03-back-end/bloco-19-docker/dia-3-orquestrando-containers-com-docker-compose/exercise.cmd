## Criando container com servidor apache com porta 4545 utilizando volume para obter a source code:

docker container run -d -p 4545:80 -v "/home/matheus/workspace/exercises/trybe-exercicios/03-back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose:/usr/local/apache2/htdocs/" httpd:2.4

## Obtendo o id do container:

docker ps

## Obtendo o caminho do container na "Mounts" na chave "Source":

docker inspect 80db1dde6def

## Parando o  container:

docker stop 80db1dde6def

## Removendo o container:

docker rm 80db1dde6def