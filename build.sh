#!/bin/bash

make html
cp -R build/html/* .
cp render.sh.bak render.sh
bash render.sh
cp _static/cloud.css.template _static/cloud.css
