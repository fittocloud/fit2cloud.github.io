十分钟在AWS部署Wordpress
====================================================

|    这里我们以在AWS上建立一个wordpress网站为例, 了解FIT2CLOUD的基本功能，看看如何通过FIT2CLOUD
| 在AWS上部署和建立一个wordpress网站, 并且把创建虚拟机和安装运行时环境及组件的工作自动化。如果您用的
| 是AWS, 在AWS建立wordpress网站的步骤与在阿里云上是一样的。
|
|    我们将要创建的wordpress网站需要在AWS里启动两台虚拟机，一台跑wordpress web，一台跑wordpress 
| mysql, 装wordpress web的虚拟机需要对外开放80端口, 以便能从公网访问。 部署计划即:
|    1) 启动2台虚拟机;
|    2) 在1台虚拟机上安装mysql,创建wordpress database;
|    3) 在另一台虚拟机上安装wordpress web及需要的各种运行时库和apache, 并配置数据库虚拟机的IP及数据
| 库用户名密码到wordpress web虚拟机的数据库连接配置文件里;
|
|    下面我们看在FIT2CLOUD中如何做，在FIT2CLOUD中, 把用于部署和运行某应用的一组虚拟机叫做一个集群, 我
| 们首先根据上面的部署计划在Web页面上创建一个集群部署计划, 然后让FIT2CLOUD执行这个集群的部署计划，先调用
| AWS的API创建出集群部署计划定义的虚拟机，然后在虚拟机启动后根据计划部署配置和启动wordpress的各个组件。

.. code:: python

   注1: 集群部署计划会定义在哪个数据中心启动哪种配置的虚拟机，安装哪种操作系统, 虚拟机启动后如何部署配置
 和启动wordpress的各个组件。

.. code:: python

     注2: 基本概念及术语
     1) 集群: 把用于部署和运行某应用的一组虚拟机叫做一个集群
     2) 虚拟机组: 把集群中相同类型的一组虚拟机叫做一个虚拟机组
     比如wordpress网站的虚拟机有两个虚拟机组，一组是wordpress-web虚拟机组，里面有一台虚拟机, 另一组
   是wordpress-mysql虚拟机组，里面有一台虚拟机, 不同类型的虚拟组里的虚拟机安装该组相应的运行时环境及组件。
   对于一个特定的虚拟机组，我们可以定义组内包括几台虚拟机，启动在AWS的哪个数据中心，日本新加坡美东还是美西，
   每台虚拟机启动后装哪种操作系统，运行什么脚本, 装哪些软件，组件，如何配置数据库连接文件。这样，我们只要先定
   义好集群的部署计划，剩下就是FIT2CLOUD执行计划了, 执行完后就可以访问集群里部署的应用服务了。

|    所以接下来我们具体要做的就是，定义一个集群部署计划，告诉FIT2CLOUD如何创建一个集群, 然后让FIT2CLOUD执
| 行计划:
|
|    1) 创建一个集群，定义该集群包含两组虚拟机，一组为wordpress-mysql虚拟机, 一组为wordpress-web虚拟机
|
|    2) 定义wordpress-mysql虚拟机组，组里有一台虚拟机，启动在青岛，配置为xsmall, OS为CentOS6.5,启动后
| 安装mysql,并设置root用户密码为fit2cloud
|
|    3) 定义wordpress-web虚拟机组，组里有一台虚拟机，启动在青岛，配置为xsmall, OS为CentOS6.5,启动后安装
| apache, php, php mysql库以及wordpress最新的build。

.. code:: python
     
     注3: 第一次用时需要绑定AWS的Access Key，可能麻烦些，但是绑定后创建集群就不需要这一步了。

|    罗嗦了半天，现在，让我们开始FIT2CLOUD的破冰之旅吧:)

登录FIT2CLOUD
-------------------------------------

| **1) 打开FIT2CLOUD首页**
|  
| a> 打开 `FIT2CLOUD (www.fit2cloud.com) <http://www.fit2cloud.com/>`_ 
|
|    注1: 目前不支持IE，推荐使用FireFox 或 Goolge Chrome
|
| b> 在FIT2CLOUD首页选择 "FIT2CLOUD For AWS(Github帐号登陆)", 如下图示:

.. image:: _static/000-Login-Fit2CloudForAWS.png

| **2) 点击"Github帐号登陆"后，会弹出Github登陆页面，要求输入Github用户名密码**
|
| **3) 输完用户名密码，点击登陆后，会到授权页面，选择 "授权" 即可, 之后就进入FIT2CLOUD的开始页面**

.. image:: _static/000-Login-Github-Authorize.png

一: 绑定Access Key
-------------------------------------

第一步: 获取Access Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
**如果使用的是AWS, 帐号是2013年12月前创建的**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 登录AWS(aws.amazon.com)**
|
| **2) 点击右上角My Account|Console, 在下拉列表中点击"Security Credentials" 进入 "Security Credentials"页面**

.. image:: _static/001-BindKey-AWS-1-SelectSecurityCredential.png

| **3) 找到Access Credentails部分，获取AccessKey ID and Secret.**

.. image:: _static/001-BindKey-AWS-2-ViewSecurityCredential.png

|
**如果使用的是AWS, 帐号是2013年12月之后创建的**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 登录AWS(aws.amazon.com)**
|
| **2) 选择进入IAM**

.. image:: _static/001-BindKey-AWS-3-SelectIAM.png

| **3) 在IAM中选择使用"Power User Policy"创建User Group**

.. image:: _static/001-BindKey-AWS-4-CreateUserGroup.png

| **4) 在设置权限页面点击"Continue"**

.. image:: _static/001-BindKey-AWS-5-ViewGroupPermission.png

| **5) 在创建确认页面点击"CreateGroup"**

.. image:: _static/001-BindKey-AWS-6-ConfirmCreateGroup.png

| **6) IAM中选择创建User**

.. image:: _static/001-BindKey-AWS-7-SelectCreateUser.png

| **7) 输入用户名后，点击"Create"**

.. image:: _static/001-BindKey-AWS-8-FillUserInfo.png

| **8) 在创建完成页面点击"Show User Security Credentials"**

.. image:: _static/001-BindKey-AWS-9-UserCreatedConfirmPage.png

| **9) 在"Show User Security Credentials"页面查看AccessKey**

.. image:: _static/001-BindKey-AWS-10-ViewUserSecurityCredential.png

| **10) 打开IAM Access开关**

.. image:: _static/001-BindKey-AWS-11-EnableIAMAccess.png


第二步: 绑定Access  Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) FIT2CLOUD开始页，选择"绑定AWS Access Key"**

.. image:: _static/001-BindKey-6-ClickBindKey.png

| **2) FIT2CLOUD Key管理页，选择default key并点击"修改"按钮**

.. image:: _static/001-BindKey-7-EditDefaultKey.png

| **3) Access Key绑定页，将第二步获得的AWS Access Key填写到相应输入框里并保存**

.. image:: _static/001-BindKey-8-FillKeyAndSave.png


二: 创建虚拟机组
--------------------------------------------------------------------------

第一步: 创建wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

|
| **1) 到"开始页", 选择"创建虚拟机组"**

.. image:: _static/002-CreateVMGroup-1-SelectCreateVMGroupOnBeginPage.png

| **2) 填写虚拟机组配置信息并保存**

.. image:: _static/002-CreateVMGroup-2-FillMySQLVMGroupNameAndSave.png
 
| **3) 编辑wordpress-web虚拟机组事件处理脚本**
|
| **> 选择编辑事件处理脚本**

.. image:: _static/002-CreateVMGroup-3-SelectEditEventHandlers.png

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

第二步: 创建wordpress-web虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 到"开始页", 选择"创建虚拟机组"**

.. image:: _static/002-CreateVMGroup-1-SelectCreateVMGroupOnBeginPage.png

| **2) 填写虚拟机组配置信息并保存**

.. image:: _static/002-CreateVMGroup-5-FillWebVMGroupNameAndSave.png
    
| **3) 编辑wordpress-web虚拟机组事件处理脚本**

| **> 选择编辑wordpress-web虚拟机组事件处理脚本**

.. image:: _static/002-CreateVMGroup-6-SelectEditWebVMGroupEventHandlers.png

| **> 选择编辑本机initialize事件本机处理脚本, 编辑并保存**
|
| wordpress-web初始化运行时环境安装脚本

.. code:: python

	#!/bin/bash
	yum -y install httpd php php-mysql wget
	chkconfig httpd on

.. image:: _static/002-CreateVMGroup-7-EditWebinitializeEventHandler.png

| **> 选择编辑本机install事件本机处理脚本, 编辑并保存**
|
| wordpress-web安装脚本

.. code:: python

	#!/bin/bash
	cd /tmp
	wget http://repository-proxy.fit2cloud.com:8080/content/repositories/releases/com/tidakada/wordpress/4.0.1/wordpress-4.0.1-wordpress.gz
	mkdir -p /var/www/html
	tar -xvzf wordpress-4.0.1-wordpress.gz -C /var/www/html
	
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
        sed -i "s/fonts.googleapis.com/fonts.useso.com/g" `grep fonts.googleapis.com -rl /var/www/html/wordpress`
	
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

.. image:: _static/002-CreateVMGroup-9-SelectToEditWebSecurityGroup.png

| **b> 到"安全组规则"页面, 选择"新建" ; 新建安全规则页面，填写打开80端口并保存**

.. image:: _static/002-CreateVMGroup-10-EditWebVMGroupSecurityGroup.png

三: 新建集群及添加虚拟机组
--------------------------------------------

第一步: 新建集群
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
| **1) FIT2CLOUD页面中选择"集群"**

.. image:: _static/003-CreateCluster-1-SelectGoToClusterPage.png

| **2) 集群列表页面，选择"新建"; 新建集群页面中，填写集群名称并保存**

.. image:: _static/003-CreateCluster-2-CreateClusterAndSave.png

第二步: 添加wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 集群页面，选择 "wordpress"集群 -> "0个虚拟机组"**

.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png

| **2) 集群虚拟机组页面，选择 "新建" 虚拟机组**
| **3) 新建虚拟机组页面，配置wordpress-mysql虚拟机组并保存**

.. image:: _static/003-CreateCluster-3-AddMysqlVMGroupToCluster.png

第三步: 添加wordpress-mysql虚拟机组
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
| **1) 集群页面选择 "wordpress"集群 -> "1个虚拟机组"**

.. image:: _static/003-CreateCluster-3-SelectToAddVMGroup.png

| **2) 集群虚拟机组页面选择 "新建" 虚拟机组**
| **3) 新建集群虚拟机组页面配置wordpress-web虚拟机组并保存**

.. image:: _static/003-CreateCluster-5-AddWebVMGroupToCluster.png

四: 启动集群
--------------------------------------------------------------------------

| **1) 集群列表页面，选择"wordpress-qingdao" ->  选择"启动"**

.. image:: _static/004-LaunchCluster-1-Launch.png

| 选择"启动"后，会出现下面的页面，显示集群将会在几分钟内启动

.. image:: _static/004-LaunchCluster-2-LaunchedInfo.png

| **2) 集群列表页面，选择集群"wordpress-qingdao" -> 选择"x个虚拟机" 进入集群虚拟机列表页面**

.. image:: _static/004-LaunchCluster-3-SelectGoToClusterVMListPage.png

| **3) 集群虚拟机列表页面，查看启动的虚拟机**

.. image:: _static/004-LaunchCluster-4-ViewClusterVMList.png

| **4) 找到wordpress-web虚拟机，公有IP，并在浏览器中输入http://<wordpress-web虚拟机公有IP>访问wordpress**

.. image:: _static/004-LaunchCluster-5-GetWebIP.png

.. image:: _static/004-LaunchCluster-6-ViewWordpressWeb.png


五: 管理集群
-------------------------------------

| 集群启动成功后，我们就可以管理这个集群，比如设置告警、执行脚本、设置自动伸、登录虚机等等。下面演示如何登录虚机。
| **集群虚拟机列表页面，点击某个虚拟机所在行选定要登录的虚拟机 -> 点击行最右边一列显示的 "操作" -> 在下拉列表中选择 "登录虚机"**

.. image:: _static/005-LoginVM-1-LogInVM.png

| 之后会弹出登陆页面，如果您的浏览器没有装Java(TM)插件，会弹出提示页面提示安装(如下面Chrome提示)

.. image:: _static/005-LoginVM-2-InstallJavaTMPlugin.png

|
| **安装Java(TM)插件参考文档:**
| 1) 下载Java(TM)插件:           http://java.com/en/download/manual.jsp?locale=en
| 2) Linux下安装Java(TM)插件:    http://java.com/en/download/help/linux_install.xml
| 3) Windows下安装Java(TM)插件: http://java.com/en/download/help/windows_manual_download.xml
| 
|    顺便提及使用FIT2CLOUD方式建立集群有一个好处，就是可以将启动虚拟机和安装运行时环境及组件的工作全部
| 自动化，真正实现一键创建集群和部署应用。您可以把集群关闭后，再启动起来，不需要手工到AWS里启动虚拟机，
| 也不需要手工登到虚拟机运行脚本，也不需要找到虚拟机的IP然后配置到某脚本中让脚本自动登陆安装。
|
|    最后, 这篇入门文档，简单介绍了FIT2CLOUD的一些基本功能，由于主题和篇幅的限制，还有很多非常有用的功
| 能以及一些高级功能没有介绍，比如查看集群的监控，费用，同时在集群内的多个虚拟机上执行脚本，将应用的部署
| 自动化，将应用的升级自动化，让集群内虚拟机按顺序启动，与持续集成系统集成实现持续部署, 自动恢复, 自动伸
| 缩等等,对于这些功能，详细介绍请移步到相应的文档，您可以在文档首页找到各个文档的入口链接，如有需求或碰到
| 问题，请联系support@fit2cloud.com。

.. code:: python    

       注: 到文档目录请点击下面的链接或页面左上角，左下角的文档目录链接。

|  `FIT2CLOUD在线文档 | 云管理及DevOps协作平台 <http://docs.fit2cloud.com/>`_








































