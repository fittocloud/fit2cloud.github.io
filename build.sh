#!/bin/bash

make html
cp -R build/html/* .
sed -i "s/fonts.googleapis.com/fonts.useso.com/g" *.html
cp _static/cloud.css.template _static/cloud.css
python makeChinese.py
#sphinx-build -b pdf ./source build
