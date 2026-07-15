@echo off
echo ===================================================
echo   AuraRecord - Web Screen Recorder Launcher
echo ===================================================
echo.
echo [*] Opening http://localhost:8000 in your browser...
start http://localhost:8000
echo.
echo [*] Starting local server on port 8000...
echo     (Press Ctrl+C to stop the server and close this window)
echo.
python -m http.server 8000
if %ERRORLEVEL% neq 0 (
    echo.
    echo [!] Python server failed to start.
    echo [*] Trying to start with Node.js http-server...
    npx -y http-server -p 8000
)
pause
