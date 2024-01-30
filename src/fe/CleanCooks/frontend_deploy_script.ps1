ng build --base-href /CleanCooks/
$source = "C:.\dist\clean-cooks\browser"
$destination = "..\..\..\docs"
rm $destination -Recurse -Force
Move-Item $source $destination -Force
Write-Host "Done!"

