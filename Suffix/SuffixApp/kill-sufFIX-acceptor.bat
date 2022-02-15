@echo off
setlocal
for /f "tokens=2 usebackq" %%i in (`tasklist /FI "WINDOWTITLE eq SufFIX Acceptor*" /NH`) do (taskkill /F /PID %%i)
endlocal 