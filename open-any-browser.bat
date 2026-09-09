@echo off
title One-Stop Career Advisor - Universal Browser Launcher
color 0b
cls
echo =====================================================================
echo   ONE-STOP CAREER ADVISOR - UNIVERSAL BROWSER LAUNCHER
echo =====================================================================
echo.
echo   [1] Google Chrome
echo   [2] Microsoft Edge
echo   [3] Default System Browser
echo   [4] Mobile / Phone on Same Wi-Fi (http://10.187.26.224:3000)
echo   [5] Public Worldwide Link (https://hot-bats-sell.loca.lt)
echo   [6] Offline Mode (Open index.html directly without server)
echo   [7] Exit
echo.
echo ==================================================================
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" (
    start "" "http://localhost:3000"
    exit
)
if "%choice%"=="2" (
    start msedge "http://localhost:3000"
    exit
)
if "%choice%"=="3" (
    start "" http://localhost:3000
    exit
)
if "%choice%"=="4" (
    start "" http://10.187.26.224:3000
    exit
)
if "%choice%"=="5" (
    start "" https://hot-bats-sell.loca.lt
    exit
)
if "%choice%"=="6" (
    start "" index.html
    exit
)
exit
