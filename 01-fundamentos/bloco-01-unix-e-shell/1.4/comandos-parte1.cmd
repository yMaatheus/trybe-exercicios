cd unix_tests
cat > skills2.txt @REM Adicionando Valores: Internet , Unix e Bash
cat >> skills2.txt @REM Adicionando Valores: HTML, CSS, JavaScript
sort < skills2.txt 
wc -l skills2.txt
sort < skills2.txt | head -3 > top_skills.txt @REM Criando um arquivo top_skills.txt ordenando e pegando os 3 primeiros itens de skills2.txt
cat > phrases2.txt
grep br phrases2.txt
grep -v br phrases2.txt | wc -l
cat >> phrases2.txt
cat phrases2.txt countries.txt > bunch_of_things.txt
sort bunch_of_things.txt -o bunch_of_things.txt
