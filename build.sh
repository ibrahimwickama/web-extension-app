#!/usr/bin/env bash
ng build --aot --prod --sourcemap=false --output-hashing=none
echo "Compressing the file..."
#web-ext build --source-dir=dist --artifacts-dir=.
echo "Successful installed the app"


#mv dist/assets/manifest.webapp dist/
#cp -r dist/* /opt/dhis/config/apps/interactiveHelp/
#cd dist
##Compress the file
#
#zip -r -D interactiveHelp.zip .
#echo "Installing the app into DHIS Siera Lione..."
#curl -X POST -u admin:district -F file=@interactiveHelp.zip https://play.dhis2.org/demo/api/apps
##echo "Installing the app into DHIS HiSPTz..."
##curl -X POST -u admin:district -F file=@interactiveHelp.zip https://play.hisptz.org/27/api/apps
#
