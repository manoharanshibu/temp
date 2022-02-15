@echo off

echo ************************************
echo * It is safe to close this console *
echo ************************************

set CLASSPATH=cfg\initiator
set CLASSPATH=%CLASSPATH%;lib\sufFIX.jar;lib\*

rem Need to clear these out, as automation has options that hook into the code
set _JAVA_OPTIONS=  
set JAVA_TOOL_OPTIONS= 

jre\bin\javaw -DuseSystemLaF=true -cp %CLASSPATH% com.jramoyo.qfixmessenger.QFixMessenger "cfg\initiator\messenger.cfg" "cfg\initiator\quickfix.cfg"
