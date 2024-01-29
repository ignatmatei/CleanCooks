ng build --base-href /CleanCooks/
$source = "C:.\dist\clean-cooks\browser"
$destination = "..\..\..\docs"
rm $destination -Recurse -Force
Copy-Item $source $destination -Recurse
Write-Host "Done!"

