# Criando DockerFile e gerando um build:

docker image build -t cowsay .

# Criando um container com comando padrão padrão:

docker container run cowsay

# Criando um container com comando personalizado:

docker container run cowsay hello

# Obtendo a lista de animais:

docker container run cowsay -l

# Criando um container com animal e comando perosnalizado:

docker container run cowsay -f dragon-and-cow "VQM TRYBE"