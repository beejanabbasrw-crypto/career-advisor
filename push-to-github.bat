@echo off
title Push One-Stop Career Advisor to GitHub
color 0b
cls
echo =================================================================
echo   PUSH ONE-STOP CAREER & EDUCATION ADVISOR TO GITHUB
echo =================================================================
echo.
echo  Step 1: Create a new repository on https://github.com/new
echo         (Name it e.g. career-advisor, leave it EMPTY without README)
echo.
echo  Step 2: Copy your GitHub repository URL
echo         (example: https://github.com/your-username/career-advisor.git)
echo.
set /p REPO_URL="Enter your GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL entered. Exiting.
    pause
    exit
)

echo.
echo Configuring remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Push encountered an error. Check your GitHub permissions.
) else (
    echo.
    echo ================================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo ===============================================================
    echo.
    echo  To make your website PUBLIC and LIVE 24/7 for free:
    echo  1. Go to your GitHub Repo - x Settings - x Pages
    echo  2. Under 'Build and deployment' -> Branch, select 'main'
    echo  3. Click 'Save'
    echo  Your website will be live worldwide on GitHub Pages!
)
pause
