#!/bin/bash

#pip install awscli
make html
cp -R build/html/* .
#sed -i "s/fonts.googleapis.com/FONTS_GOOGLE_URL/g" get_started.html
#sed -i "s/fonts.googleapis.com/fonts.useso.com/g" *.html
#sed -i "s/FONTS_GOOGLE_URL/fonts.googleapis.com/g" *.html
sed -i "s/\/\/fonts.googleapis.com\/css/\/\/fonts.useso.com\/css/g" *.html
cp _static/cloud.css.template _static/cloud.css
python makeChinese.py
