#!/bin/bash

make html
cp -R build/html/* .

htmls=`ls *.html`
for html in $htmls ; do

echo $html
lineId=`grep -n fonts.google $html | awk -F":" '{print $1}'`
echo $lineId
if [ "x" == "x$lineId" ]; then
  echo $html do not need to adjust
else
  sed -i "$lineId d" $html
  sed -i "$lineId i\    <link rel=\"stylesheet\" href=\"_static/fonts.css\" type=\"text/css\" />" $html
fi

done

cp _static/cloud.css.template _static/cloud.css
python makeChinese.py
#sphinx-build -b pdf ./source build
