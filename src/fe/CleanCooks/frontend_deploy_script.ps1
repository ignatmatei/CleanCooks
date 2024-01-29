ng build --base-href /CleanCooks/
$source = "C:\Users\matei\Documents\CleanCooks\src\fe\CleanCooks\dist\clean-cooks\browser"
$destination = "C:Users\matei\Documents\CleanCooks\docs"
Copy-Item $source $destination -Recurse
Write-Host "Done!"

