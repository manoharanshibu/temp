@echo off
setlocal
for /f "tokens=2 usebackq" %%i in (`tasklist /FI "WINDOWTITLE eq SufFIX Initiator*" /NH`) do (taskkill /F /PID %%i)
endlocal 