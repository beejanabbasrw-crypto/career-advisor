@echo off
title One-Stop Personalized Career & Education Advisor
echo =============================================================
echo   Starting One-Stop Career & Education Advisor...
echo =============================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [Node.js Detected] Starting local web server with auto-launch...
    node "%~dp0server.js"
) else (
    echo [Browser Direct Mode] Launching index.html in your default browser...
    start "" "%~dp0index.html"
)
