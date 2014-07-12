Fit2Cloud快速入门: 十分钟部署Wordpress应用
=====================================

|       这里我们以在阿里云上建立一个wordpress网站为例, 了解Fit2Cloud的基本功能，看看如何通过Fit2Cloud方便快速地
| 在阿里云上部署和建立一个应用。
|
登录Fit2Cloud For 阿里云
-------------------------------------
| **1) 首先在非IE浏览器中输入或点击aliyun.fit2cloud.com进入Fit2Cloud首页**
|
.. image:: _static/000-Fit2Cloud-Website.png
|
| **2) 输入Github帐号，使用GitHub帐号登录**

一: 绑定阿里云Access Key
-------------------------------------

第一步: 登录阿里云(www.aliyun.com)
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
|
.. image:: _static/001-BindKey-1-AliyunHome.png
|
| **2) 用户中心页面选择"账户管理"**
|
.. image:: _static/001-BindKey-1-AliyunUserHome.png
|
| **3) 账户管理页面选择"管理控制台"**
|
.. image:: _static/001-BindKey-2-TopUp.png
|
| **4) 管理控制台页面选择"Access Key"进入阿里云Access Key页面**
|
.. image:: _static/001-BindKey-3-ClickKey.png
|
| **5) Access Key页面选择创建阿里云Access Key**
|
.. image:: _static/001-BindKey-4-RequestCreateAccessKey.png
|
| **6) Access Key页面查看阿里云Access Key**
|
.. image:: _static/001-BindKey-5-ViewAccessKey.png
|

第三步: 绑定阿里云Access  Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) Fit2Cloud开始页，选择"绑定阿里云Access Key"**
|
.. image:: _static/001-BindKey-6-ClickBindKey.png
|
| **2) Fit2Cloud Key管理页，选择default key并点击"修改"按钮**
|
.. image:: _static/001-BindKey-7-EditDefaultKey.png
|
| **3) Access Key绑定页，填写阿里云Access Key ID and Secret并保存**
|
.. image:: _static/001-BindKey-8-FillKeyAndSave.png
|

二: 创建虚拟机组
-------------------------------------

第一步: 创建wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

|
| **1) 到"开始页", 选择"创建虚拟机组"**
|
.. image:: _static/002-CreateVMGroup-1-SelectCreateVMGroupOnBeginPage.png
|
| **2) 填写虚拟机组配置信息并保存**
|
.. image:: _static/002-CreateVMGroup-2-FillMySQLVMGroupNameAndSave.png
|         
| **3) 编辑wordpress-web虚拟机组事件处理脚本**
|
| **> 选择编辑事件处理脚本**
|
.. image:: _static/002-CreateVMGroup-3-SelectEditEventHandlers.png
|
| **> 选择编辑本机install事件本机处理脚本**
| **> 将下面的mysql安装脚本填写到wordpress-mysql虚拟机组的install事件本机处理器中并保存:**

| MySQL安装脚本
.. code:: python

	#!/bin/bash
	yum -y install mysql-server
	
	#chkconfig mysqld on
	#configure:
	/etc/rc.d/init.d/mysqld stop
	/etc/rc.d/init.d/mysqld start
	mysqladmin -u root password 'fit2cloud'
	
	mysql -u root -pfit2cloud -e "create database wordpress"
	mysql -u root -pfit2cloud -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'fit2cloud' WITH GRANT OPTION;flush privileges;"
	/etc/rc.d/init.d/mysqld restart

.. image:: _static/002-CreateVMGroup-4-EditMysqlInstallEventHandler.png
|
|
第二步: 创建wordpress-web虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 到"开始页", 选择"创建虚拟机组"**
|
.. image:: _static/002-CreateVMGroup-1-SelectCreateVMGroupOnBeginPage.png
|
| **2) 填写虚拟机组配置信息并保存**
|
.. image:: _static/002-CreateVMGroup-5-FillWebVMGroupNameAndSave.png
|         
| **3) 编辑wordpress-web虚拟机组事件处理脚本**

| **> 选择编辑wordpress-web虚拟机组事件处理脚本**
|
.. image:: _static/002-CreateVMGroup-6-SelectEditWebVMGroupEventHandlers.png
|
| **> 选择编辑本机initialize事件本机处理脚本, 编辑并保存**
|
| wordpress-web初始化运行时环境安装脚本
.. code:: python

	#!/bin/bash
	yum -y install httpd mysql-server php php-mysql wget
	#chkconfig mysqld on
	chkconfig httpd on

.. image:: _static/002-CreateVMGroup-7-EditWebinitializeEventHandler.png

| **> 选择编辑本机install事件本机处理脚本, 编辑并保存**
|
| wordpress-web安装脚本
.. code:: python

	#!/bin/bash
	cd /tmp
	wget http://wordpress.org/latest.tar.gz
	mkdir -p /var/www/html
	tar -xvzf latest.tar.gz -C /var/www/html
	
	#configure apache2 file for wordpress
	cat << EOF >> /etc/httpd/conf/httpd.conf
	<VirtualHost *:80>
	ServerAdmin info@fit2cloud.com
	ServerName wordpress.fit2cloud.net
	DocumentRoot /var/www/html/wordpress
	ErrorLog /var/log/httpd/wordpress-error.log
	CustomLog /var/log/httpd/wordpress-common.log common
	</VirtualHost>
	EOF
	
	cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php
	sed -i "s/database_name_here/wordpress/g" /var/www/html/wordpress/wp-config.php
	sed -i "s/username_here/root/g" /var/www/html/wordpress/wp-config.php
	sed -i "s/password_here/fit2cloud/g" /var/www/html/wordpress/wp-config.php
	
	service httpd restart
	
	#get mysql role server ip address
	waitOutput=`f2cadmin waitUntilServerUp wordpress-mysql 120`
	output=`echo $waitOutput | grep "vm is up"`
	if [ ${#output} -gt 0 ] ; then
	    getIPoutput=`f2cadmin get clusterrole_servers_info wordpress-mysql localIP | head -1`
	    
	    checkErrorOutput=`echo $getIPoutput | grep "does not exist"`
	    if [ ${#checkErrorOutput} -gt 0 ] ; then
	        echo "exceptions happens when get role server ip"
	        echo $output
	    else
	        echo $getIPoutput
	        mysqlInternalIP=$getIPoutput
	        sed -i "s/localhost/$mysqlInternalIP/g" /var/www/html/wordpress/wp-config.php
	    fi
	else
	   echo exceptions happens when wait until mysql server up, can not get mysql ip, can not configure wp-config.php
	   echo $waitOutput
	fi

.. image:: _static/002-CreateVMGroup-8-EditWebInstallEventHandler.png

| **4) 设置wordpress-web虚拟机组安全组打开80端口**

| **a> 到"虚拟机组"页面, 选择"操作"->"设置安全组规则"**
|
.. image:: _static/002-CreateVMGroup-9-SelectToEditWebSecurityGroup.png
|
| **b> 到"安全组规则"页面, 选择"新建" ; 新建安全规则页面，填写打开80端口并保存**
|
.. image:: _static/002-CreateVMGroup-10-EditWebVMGroupSecurityGroup.png
|
|
三: 创建集群
--------------------------------------------

| **1) Fit2Cloud页面中选择"集群"**
|
.. image:: _static/003-CreateCluster-1-SelectGoToClusterPage.png
|
| **2) 集群列表页面，选择"新建"; 新建集群页面中，填写集群名称并保存**
|
.. image:: _static/003-CreateCluster-2-CreateClusterAndSave.png
|
| **3) 添加wordpress-mysql虚拟机组**
|
| **a> 集群页面，选择 "wordpress"集群 -> "0个虚拟机组"**
|
.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png
|
| **b> 集群虚拟机组页面，选择 "新建" 虚拟机组**
| **c> 新建虚拟机组页面，配置wordpress-mysql虚拟机组并保存**
|
.. image:: _static/003-CreateCluster-3-AddMysqlVMGroupToCluster.png
|
| **4) 添加wordpress-web虚拟机组**
|
| **a> 集群页面选择 "wordpress"集群 -> "1个虚拟机组"**
|
.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png
|
| **b> 集群虚拟机组页面选择 "新建" 虚拟机组**
| **c> 新建集群虚拟机组页面配置wordpress-web虚拟机组并保存**
|
.. image:: _static/003-CreateCluster-5-AddWebVMGroupToCluster.png
|
|
四: 启动集群
-------------------------------------

| **1) 集群列表页面，选择"wordpress-qingdao" ->  选择"启动"**
|
.. image:: _static/004-LaunchCluster-1-Launch.png
|
| **2) 集群列表页面，选择"启动"后，显示集群将会在几分钟内启动**
|
.. image:: _static/004-LaunchCluster-2-LaunchedInfo.png
|
| **3) 集群列表页面，选择集群"wordpress-qingdao" -> 选择"x个虚拟机" 进入集群虚拟机列表页面**
|
.. image:: _static/004-LaunchCluster-3-SelectGoToClusterVMListPage.png
|
| **4) 集群虚拟机列表页面，查看启动的虚拟机**
|
.. image:: _static/004-LaunchCluster-4-ViewClusterVMList.png
|
| **5) 找到wordpress-web虚拟机，公有IP，并在浏览器中输入http://<wordpress-web虚拟机公有IP>访问wordpress**
|
.. image:: _static/004-LaunchCluster-5-GetWebIP.png
|
|
|
.. image:: _static/004-LaunchCluster-6-ViewWordpressWeb.png
|

五: 登录虚拟机
-------------------------------------

| **集群虚拟机列表页面，选择某个虚拟机所在行 -> 选择"操作" -> 选择登录虚机**
|
.. image:: _static/005-LoginVM-1-LogInVM.png
|









































