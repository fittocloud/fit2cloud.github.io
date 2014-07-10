Fit2Cloud快速入门: 十分钟部署Wordpress应用
=====================================

|       这里我们以在阿里云上建立一个wordpress网站为例, 了解Fit2Cloud的基本功能，看看如何通过Fit2Cloud方便快速地
| 在阿里云上部署和建立一个应用。


一: 绑定阿里云API Key
-------------------------------------

第一步: 登录阿里云(www.aliyun.com)并确保账户有至少10元的余额
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
|    注1: 用户需要有一个Github帐号 
|    注2: 目前只支持Firefox, Chrome，不支持IE 
|    注3: 如果需要有阿里云帐号 
|    注4: 如果阿里云帐号的余额为0，需要先用支付宝充值
|
第二步: 获取阿里云Access Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
|   如果已创建过阿里云Access  Key，请直接到阿里云Access  Key页面;
|   如果没有阿里云Access  Key需要先创建一个;
|
| **1) 阿里云首页, 选择"用户中心"**
.. image:: _static/001-BindKey-1-AliyunHome.png
| **2) 用户中心页面选择"账户管理"**
.. image:: _static/001-BindKey-1-AliyunUserHome.png
|
| **3) 账户管理页面选择"管理控制台"**
.. image:: _static/001-BindKey-2-TopUp.png
|
| **4) 管理控制台页面选择"Access Key"进入阿里云Access Key页面**
.. image:: _static/001-BindKey-3-ClickKey.png
|
| **5) Access Key页面选择创建阿里云Access Key**
.. image:: _static/001-BindKey-4-RequestCreateAccessKey.png
|
| **6) Access Key页面查看阿里云Access Key**
.. image:: _static/001-BindKey-5-ViewAccessKey.png
|

第三步: 绑定阿里云Access  Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) Fit2Cloud开始页，选择"绑定阿里云Access Key"**
.. image:: _static/001-BindKey-6-ClickBindKey.png

| **2) Fit2Cloud Key管理页，选择default key并点击"修改"按钮**
.. image:: _static/001-BindKey-7-EditDefaultKey.png

| **3) Access Key绑定页，填写阿里云Access Key ID and Secret并保存**
.. image:: _static/001-BindKey-8-FillKeyAndSave.png


二: 创建虚拟机组
-------------------------------------

第一步: 创建wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

|
| **1) 到"开始页", 选择"创建虚拟机组"**
.. image:: _static/002-CreateVMGroup-1-SelectCreateVMGroupOnBeginPage.png
|
| **2) 填写虚拟机组配置信息并保存**
.. image:: _static/002-CreateVMGroup-2-FillMySQLVMGroupNameAndSave.png
|         
| **3) 编辑wordpress-web虚拟机组事件处理脚本**
|
| **> 选择编辑事件处理脚本**
.. image:: _static/002-CreateVMGroup-3-SelectEditEventHandlers.png

| **选择编辑本机install事件本机处理脚本**

.. code:: python

	#!/bin/bash
	sudo su -
	yum -y install mysql-server
	
	#chkconfig mysqld on
	#configure:
	/etc/rc.d/init.d/mysqld stop
	/etc/rc.d/init.d/mysqld start
	mysqladmin -u root password 'fit2cloud'
	
	mysql -u root -pfit2cloud -e "create database wordpress"
	mysql -u root -pfit2cloud -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'fit2cloud' WITH GRANT OPTION;flush privileges;"
	/etc/rc.d/init.d/mysqld restart

| **> 将上面的mysql安装脚本填写到wordpress-mysql虚拟机组的install事件本机处理器中:**
.. image:: _static/002-CreateVMGroup-4-EditMysqlInstallEventHandler.png

第二步: 创建wordpress-web虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| 1) "开始页"选择"创建虚拟机组"
|
| 2) 填写虚拟机组配置信息并保存
|         
| 3) 编辑wordpress-web虚拟机组事件处理脚本
|
| 4) 设置wordpress-web虚拟机组安全组

三: 创建集群
--------------------------------------------

|         **1) 到"开始页"**
|             找到页面最上方一行，点击"开始页"
|
|         **2) 选择"创建集群"**
|
|         **3) 填写集群配置信息并保存**
|         

四: 启动集群
-------------------------------------

.. line-block::
    
          1) 
五: 登录虚拟机
-------------------------------------












































