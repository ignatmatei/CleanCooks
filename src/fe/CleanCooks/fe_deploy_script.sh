#!/bin/bash
npm run buildGHPages
source="./dist/clean-cooks/browser/"
destination="../../../docs/"
rm -rf $destination
mv $source $destination
echo "Done!"
