@echo off
title One-Stop Career Advisor - Public Direct Link Generator
color 0b
cls
echo ===================================================================
echo  ONE-STOP CAREER & EDUCATION ADVISOR - PUBLIC LINK GENERATOR
echo ===================================================================
echo.
echo  This tool creates an instant, free worldwide public HTTPS link
echo  so any student on any device, anywhere in the world, can access
echo  the Career Advisor website without being on the same Wi-Fi!
echo.
echo  Starting local server if not already running...
start /b "" node server.js >nul 2>nul

echo  Creating secure public tunnel to port 3000...
echo  (Please wait a few seconds...)
echo.
call npx --yes localtunnel --port 3000
pause
