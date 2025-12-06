# run-dev.ps1 — start the React dev server for the Breton Revival app
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location "$scriptDir\react-app"
if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies (this may take a minute)..."
  npm install
}
Write-Host "Starting dev server (Vite)..."
Start-Process -FilePath "npm" -ArgumentList @('run','dev') -NoNewWindow
Start-Sleep -Seconds 1
# open the common Vite dev URL; the server may use a different port if 5173 is occupied
Start-Process "http://localhost:5173"
Write-Host "Dev server started (if the browser didn't open, open http://localhost:5173 manually)."