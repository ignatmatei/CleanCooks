ng build --base-href /CleanCooks/
$source = "C:.\dist\clean-cooks\browser"
$destination = "..\..\..\docs"
Copy-Item $source $destination -Recurse
Write-Host "Done!"

