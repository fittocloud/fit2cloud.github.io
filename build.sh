#!/bin/bash

make html
cp -R build/html/* .
cp _static/cloud.css.template _static/cloud.css
python makeChinese.py
