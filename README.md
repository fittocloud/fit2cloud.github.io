fit2cloud.github.io
===================

Installation
=================================

1. Install sphinx
'''
wget --no-check-certificate https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py
easy_install sphinx
'''

2. Install cloud_sptheme
'''
easy_install cloud_sptheme
'''

3. Copy customized layout.html

'''
/usr/lib/python2.6/site-packages/cloud_sptheme-1.6-py2.6.egg
/usr/lib/python2.6/site-packages/Sphinx-1.3b1-py2.6.egg

cd fit2cloud.github.io
cp _static/layout.html /usr/lib/python2.6/site-packages/cloud_sptheme-1.6-py2.6.egg/cloud_sptheme/themes/cloud/layout.html
'''

4. Install AWS Cli
'''
wget https://pypi.python.org/packages/source/s/setuptools/setuptools-7.0.zip
unzip setuptools-7.0.zip
cd setuptools-7.0
python setup.py install

mkdir -p /opt/tools
cd /opt/tools
rm -rf awscli-1.5.2.tar.gz
wget https://pypi.python.org/packages/source/a/awscli/awscli-1.5.2.tar.gz
tar -zxvf awscli-1.5.2.tar.gz
cd awscli-1.5.2
python setup.py install
'''

5. configure aws cli

aws configure
