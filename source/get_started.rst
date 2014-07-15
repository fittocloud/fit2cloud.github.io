Fit2Cloud快速入门: 十分钟部署Wordpress应用
========================================

|    这里我们以在阿里云上建立一个wordpress网站为例, 了解Fit2Cloud的基本功能，看看如何通过Fit2Cloud
| 在阿里云上部署和建立一个wordpress网站。
|
|    我们将要创建的wordpress网站需要在阿里云里启动两台虚拟机，一台跑wordpress web，一台跑wordpress 
| mysql, 装wordpress web的虚拟机需要对外开放80端口, 以便能从公网访问。 部署计划即:
|    1) 启动2台虚拟机;
|    2) 在1台虚拟机上安装mysql,创建wordpress database;
|    3) 在另一台虚拟机上安装wordpress web及需要的各种运行时库和apache, 并配置数据库虚拟机的IP及数据
| 库用户名密码到wordpress web虚拟机的数据库连接配置文件里;
|
|    下面我们看在Fit2Cloud中如何做，在Fit2Cloud中, 把用于部署和运行某应用的一组虚拟机叫做一个集群, 我
| 们首先根据上面的部署计划在Web页面上创建一个集群部署计划, 然后让Fit2Cloud执行这个集群的部署计划，先调用
| 阿里云的API创建出集群部署计划定义的虚拟机，然后在虚拟机启动后根据计划部署配置和启动wordpress的各个组件。
.. code:: python

   注1: 集群部署计划会定义在哪个数据中心启动哪种配置的虚拟机，安装哪种操作系统, 虚拟机启动后如何部署配置
 和启动wordpress的各个组件。

.. code:: python

     注2: 基本概念及术语
     1) 集群: 把用于部署和运行某应用的一组虚拟机叫做一个集群
     2) 虚拟机组: 把集群中相同类型的一组虚拟机叫做一个虚拟机组
     比如wordpress网站的虚拟机有两个虚拟机组，一组是wordpress-web虚拟机组，里面有一台虚拟机, 另一组
   是wordpress-mysql虚拟机组，里面有一台虚拟机, 不同类型的虚拟组里的虚拟机安装该组相应的运行时环境及组件。
   对于一个特定的虚拟机组，我们可以定义组内包括几台虚拟机，启动在阿里云的哪个数据中心，北京杭州香港还是青岛，
   每台虚拟机启动后装哪种操作系统，运行什么脚本, 装哪些软件，组件，如何配置数据库连接文件。这样，我们只要先定
   义好集群的部署计划，剩下就是Fit2Cloud执行计划了, 执行完后就可以访问集群里部署的应用服务了。

|    所以接下来我们具体要做的就是，定义一个集群部署计划，告诉Fit2Cloud如何创建一个集群, 然后让Fit2Cloud执
| 行计划:
|    1) 创建一个集群，定义该集群包含两组虚拟机，一组为wordpress-mysql虚拟机, 一组为wordpress-web虚拟机
|    2) 定义wordpress-mysql虚拟机组，组里有一台虚拟机，启动在青岛，配置为xsmall, OS为CentOS6.5,启动后
| 安装mysql,并设置root用户密码为fit2cloud
|    3) 定义wordpress-web虚拟机组，组里有一台虚拟机，启动在青岛，配置为xsmall, OS为CentOS6.5,启动后安装
| apache, php, php mysql库以及wordpress最新的build。
|
|    注3: 第一次用时需要绑定阿里云的Access Key，可能麻烦些，但是绑定后创建集群就不需要这一步了。
| 
|    罗嗦了半天，现在，让我们开始Fit2Cloud的破冰之旅吧:)
|
登录Fit2Cloud For 阿里云
-------------------------------------
| **1) 打开Fit2Cloud For 阿里云首页**
|  
| a> 打开 `Fit2Cloud For 阿里云 (aliyun.fit2cloud.com) <http://aliyun.fit2cloud.com/>`_ 
|
|    注1: 目前不支持IE,只支持FireFox和Goolge Chrome
|
| b> 在Fit2Cloud首页点击 "Github帐号登陆", 如下图示:
|
.. image:: _static/000-Fit2Cloud-Website.png
|
| **2) 点击"Github帐号登陆"后，会弹出Github登陆页面，要求输入Github用户名密码**
|
| **3) 输完用户名密码，点击登陆后，会到授权页面，选择 "授权" 即可, 之后就进入Fit2Cloud的开始页面**
|
|
一: 绑定阿里云Access Key
-------------------------------------

第一步: 登录阿里云(www.aliyun.com)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|    点击 `到阿里云(www.aliyun.com)点这里 <http://www.aliyun.com/>`_
|
| 注1: 如果没有阿里云帐号, 需要先创建一个
| 注2: 如果阿里云帐号现金账户余额小于100, 需要先用支付宝充值(阿里云开通按量付费的云服务器，现金账户余额需要至少100.00元)
| 
第二步: 获取阿里云Access Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
|   如果已创建过阿里云Access  Key，请直接到阿里云Access  Key页面;
|   如果没有阿里云Access  Key需要先创建一个;
|
| **1) 在阿里云首页, 右上角, 选择进入 "用户中心"**
|
.. image:: _static/001-BindKey-1-AliyunHome.png
|
| **2) 在阿里云用户中心页面, 右上角, 点击 "账户管理"**
|
.. image:: _static/001-BindKey-1-AliyunUserHome.png
|
| **3) 在阿里云账户管理页面, 页面最上方, 点击用户名后会出现一个下拉菜单，然后点击 "管理控制台"**
|
.. image:: _static/001-BindKey-2-TopUp.png
|
| **4) 在阿里云管理控制台页面, 点击页面右上角的钥匙图标以进入阿里云"Access Key"页面**
|
.. image:: _static/001-BindKey-3-ClickKey.png
|
| **5) 在阿里云Access Key页面, 点击 "创建Access Key" 按钮**
|
.. image:: _static/001-BindKey-4-RequestCreateAccessKey.png
|
| **6) 在阿里云Access Key页面, 点击 "显示" 按钮查看阿里云Access Key**
|
.. image:: _static/001-BindKey-5-ViewAccessKey.png
|
| 将阿里云显示的Access Key ID 和 Secret拷贝到某文本文件，第三步在Fit2Cloud中绑定阿里云Access Key时会用到.

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
| **3) Access Key绑定页，将第二步获得的阿里云Access Key填写到相应输入框里并保存**
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

第一步: 新建集群
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
| **1) Fit2Cloud页面中选择"集群"**
|
.. image:: _static/003-CreateCluster-1-SelectGoToClusterPage.png
|
| **2) 集群列表页面，选择"新建"; 新建集群页面中，填写集群名称并保存**
|
.. image:: _static/003-CreateCluster-2-CreateClusterAndSave.png
|
第二步: 添加wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 集群页面，选择 "wordpress"集群 -> "0个虚拟机组"**
|
.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png
|
| **2) 集群虚拟机组页面，选择 "新建" 虚拟机组**
| **3) 新建虚拟机组页面，配置wordpress-mysql虚拟机组并保存**
|
.. image:: _static/003-CreateCluster-3-AddMysqlVMGroupToCluster.png
|
第三步: 添加wordpress-web虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 集群页面选择 "wordpress"集群 -> "1个虚拟机组"**
|
.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png
|
| **2) 集群虚拟机组页面选择 "新建" 虚拟机组**
| **3) 新建集群虚拟机组页面配置wordpress-web虚拟机组并保存**
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
| 选择"启动"后，会出现下面的页面，显示集群将会在几分钟内启动
|
.. image:: _static/004-LaunchCluster-2-LaunchedInfo.png
|
| **2) 集群列表页面，选择集群"wordpress-qingdao" -> 选择"x个虚拟机" 进入集群虚拟机列表页面**
|
.. image:: _static/004-LaunchCluster-3-SelectGoToClusterVMListPage.png
|
| **3) 集群虚拟机列表页面，查看启动的虚拟机**
|
.. image:: _static/004-LaunchCluster-4-ViewClusterVMList.png
|
| **4) 找到wordpress-web虚拟机，公有IP，并在浏览器中输入http://<wordpress-web虚拟机公有IP>访问wordpress**
|
.. image:: _static/004-LaunchCluster-5-GetWebIP.png
|
.. image:: _static/004-LaunchCluster-6-ViewWordpressWeb.png
|

五: 登录虚拟机
-------------------------------------

| **集群虚拟机列表页面，点击某个虚拟机所在行选定要登录的虚拟机 -> 点击行最右边一列显示的 "操作" -> 在下拉列表中选择 "登录虚机"**
|
.. image:: _static/005-LoginVM-1-LogInVM.png
|
| 之后会弹出登陆页面，如果您的浏览器没有装Java(TM)插件，会弹出提示页面提示安装(如下面Chrome提示)
.. image:: _static/005-LoginVM-2-InstallJavaTMPlugin.png
|
| **安装Java(TM)插件参考文档:**
| 1) 下载Java(TM)插件:           http://java.com/en/download/manual.jsp?locale=en
| 2) Linux下安装Java(TM)插件:    http://java.com/en/download/help/linux_install.xml
| 3) Windows下安装Java(TM)插件: http://java.com/en/download/help/windows_manual_download.xml
| 
|
|    最后, 这篇入门文档，简单介绍了Fit2Cloud的一些基本功能，由于主题和篇幅的限制，还有很多非常有用的功能
| 以及一些高级功能没有介绍，比如查看集群的监控，费用，同时在集群内的多个虚拟机上执行脚本，将应用的部署自
| 动化，将应用的升级自动化，让集群内虚拟机按顺序启动，与持续集成系统集成实现持续部署, 自动恢复, 自动伸缩等等,
| 对于这些功能，详细介绍请移步到相应的文档，您可以在文档首页找到各个文档的入口链接，如有需求或碰到问题，请联系
| support@fit2cloud.com。
|    
|    注: 到文档目录请点击页面左上角或左下角的目录链接: "Fit2Cloud For 阿里云 1.0 文档"。








































