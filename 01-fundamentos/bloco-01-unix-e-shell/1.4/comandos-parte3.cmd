ps
sleep 30 & @REM Abrindo tarefa no backstage
ps @REM Listando todos os processos
kill 74633
@REM (Control + Z) = Colocar processo em modo suspenso.
sleep 30 @REM + (Control + Z)
bg
sleep 300 &
sleep 200 @REM + (Control + Z)
sleep 100 @REM + (Control + Z)
fg %1 @REM + (Control + Z) - Colocando processo em primeiro plano e suspendendendo com o control z.
bg %3
kill 74980 @REM (Sleep 100)
@REM Utilizando -9 para suspender um processo que está suspenso 
kill -9 74929 
kill -9 74966
