@echo off
echo Updating menu data with proper UTF-8 encoding...

REM Run the export script to generate menu.json with UTF-8 BOM
node export_menu_data.cjs

REM Copy the UTF-8 encoded file to public/data/ using PowerShell to preserve encoding
powershell -Command "Get-Content 'menu.json' -Encoding UTF8 | Out-File 'public\data\menu.json' -Encoding UTF8"

REM Copy headers file to ensure Netlify serves it properly
copy public\_headers _headers

echo Menu data updated successfully with UTF-8 encoding!
pause
