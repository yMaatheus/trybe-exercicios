# Criando DockerFile e gerando um build:

docker image build -t cowsay .

# Criando um container com comando padrão padrão:

docker container run cowsay

# Criando um container com comando personalizado:

docker container run cowsay hello