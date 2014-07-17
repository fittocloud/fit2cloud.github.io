f2cadmin命令行工具(ToDo)
==================================

|   f2cadmin是一个Fit2Cloud部署在虚拟机上的一个命令行工具，通过f2cadmin可以:
|   1) 获取集群内所有虚拟机的信息
|   2) 获取集群内某个虚拟机组内虚拟机的信息
|   3) 等待集群内某虚拟机组虚拟机启动
|  
|   所以f2cadmin在实现根据集群内虚拟机信息自动配置组件配置文件时很有用，比如在快速入门
| 例子中，我们在wordpress-web的启动脚本中使用f2cadmin获取wordpress-mysql虚拟机组
| 内虚拟机的IP地址，以配置到wordpress web的数据连接配置文件中。实现根据集群内虚拟机信息
| 自动配置相关组件配置文件。
|
.. code:: python

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
	
|   以下是f2cadmin的用法和示例:
|   
|   1) 获取集群虚拟组内虚拟机IP信息
|      f2cadmin get clusterrole_servers_info <VM Group Name> localIP | head -1
|
|      Example:
|                 f2cadmin get clusterrole_servers_info wordpress-mysql localIP | head -1  
|
|   2) 等待虚拟机组内虚拟机启动
|      f2cadmin waitUntilServerUp <VM Group Name> <Wait Timeout Seconds>
|     
|      Example:   f2cadmin waitUntilServerUp wordpress-mysql 120










