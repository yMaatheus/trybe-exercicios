cd unix_tests
ls -l
chmod a+rw bunch_of_things.txt @REM Adicionando permissões de leitura e escrita ao usuário, grupo e outros
chmod a-w bunch_of_things.txt @REM Removendo permissões de escrita do usuário, grupo e outros
chmod 644 bunch_of_things.txt