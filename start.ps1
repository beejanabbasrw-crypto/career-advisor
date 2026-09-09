# One-Stop Personalized Career & Education Advisor
# PowerShell One-Click Launcher

Write-Host "=============================================================" -ForegroundColor Cyan
Write-Host "  Launching One-Stop Career & Education Advisor...          " -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Cyan

$hasNode = (Get-Command node -ErrorAction SilentlyContinue)

if ($hasNode) {
    Write-Host "`n[✓] Node.js runtime detected. Launching local web server..." -ForegroundColor Green
    Set-Location -Path $PSScriptRoot
    node server.js
} else {
    Write-Host "`n[✓] Launching index.html directly in your default browser..." -ForegroundColor Yellow
    Start-Process "$PSScriptRoot\index.html"
}
