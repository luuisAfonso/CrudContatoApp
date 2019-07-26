@ECHO OFF
COLOR 1
ECHO ======================================================================
ECHO				INICIANDO CRUDAPP!
ECHO ======================================================================
echo:
echo:
ECHO INICIANDO CLIENT
echo:
start StartClient
ECHO INICIANDO SERVIDOR
echo:
start StartServer
echo:
ECHO INICIANDO CODE
code .
echo:
COLOR 2
echo:
ECHO ======================================================================
ECHO INICIADO COM SUCESSO!
ECHO ======================================================================
TIMEOUT 10