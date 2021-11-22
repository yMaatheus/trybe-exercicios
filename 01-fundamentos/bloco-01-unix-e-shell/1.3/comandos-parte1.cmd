@REM Manipulando diretorios e arquivos
mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt trybe_renomeado.txt
mkdir backup/
mv trybe_backup.txt backup
mkdir backup2/
mv backup/trybe_backup.txt backup2/
rmdir backup
mv backup2 backup
ls *
rm -rf backup
clear
cat > skills.txt
head -5 skills.txt
tail -4 skills.txt
rm -rf *.txt

