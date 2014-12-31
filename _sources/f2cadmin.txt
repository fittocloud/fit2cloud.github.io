f2cadmin命令行工具
==================================

| f2cadmin是一个FIT2CLOUD部署在虚拟机上的一个命令行工具，通过f2cadmin可以:
| 1) 获取集群虚拟组内虚拟机
| 2) 获取集群虚拟组内虚拟机IP信息
| 3) 等待虚拟机组内虚拟机启动
| 4) 获取虚拟机本机信息
| 5) 获取虚拟机本机的某些字段信息
|  
| 所以f2cadmin在实现根据集群内虚拟机信息自动配置组件配置文件时很有用，比如在快速入门
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
|   1) 获取集群虚拟组内虚拟机
|   f2cadmin get clusterrole_servers_info <虚拟机组名称>
|
|   例子: 获取wordpress-mysql虚拟机组虚拟机信息
|         f2cadmin get clusterrole_servers_info wordpress-mysql
|   输出: 

.. code:: python

    > f2cadmin get clusterrole_servers_info wordpress-mysql
	[
	  {
	    "backendCreated": false,
	    "serverRoleId": 24,
	    "vmId": "i-28mixti7m",
	    "imageId": "centos6u5_64_20G_aliaegis_20140926.vhd",
	    "vmType": "ecs.t1.xsmall",
	    "rabbitmqQueue": "queue_down_14_12154_637fdea6",
	    "id": 12154,
	    "alertType": null,
	    "zone": "cn-qingdao-b",
	    "cloudName": "default-dev",
	    "backendCreating": false,
	    "failedCause": null,
	    "clusterRoleName": "wordpress-mysql",
	    "clusterType": "default",
	    "workId": 24287,
	    "localIP": "10.165.63.61",
	    "imageName": "centos6u5-20140926",
	    "heartbeatStatus": "ONLINE",
	    "image": 15,
	    "internetBandwidth": 100,
	    "status": "initializeResponse",
	    "description": null,
	    "clusterName": "wordpress-qingdao",
	    "clusterId": 14,
	    "price": 0.18809999999999999,
	    "internetType": "PayByTraffic",
	    "excludeVmStatus": null,
	    "runningTime": null,
	    "remoteIP": "121.42.56.146",
	    "password": null,
	    "groupId": 34,
	    "name": "wordpress-qingdao--wordpress-mysql--12154",
	    "agentRetried": 0,
	    "vmStatus": "Running",
	    "terminateFlag": false,
	    "created": 1417244439000,
	    "clusterRoleId": 52,
	    "region": "cn-qingdao",
	    "cloudId": 10,
	    "deleted": null
	  }
	]

|   2) 获取集群虚拟组内虚拟机IP信息
|   f2cadmin get clusterrole_servers_info <虚拟机组名称> localIP | head -1
|      
|   例子: 获取wordpress-mysql虚拟机组虚拟机内网IP
|       f2cadmin get clusterrole_servers_info wordpress-mysql localIP | head -1  
|
|   输出:

.. code:: python

	> f2cadmin get clusterrole_servers_info wordpress-mysql localIP
	10.165.63.61

|   3) 等待虚拟机组内虚拟机启动
|   f2cadmin waitUntilServerUp <虚拟机组名称> <等待超时时间(单位秒)>
|     
|   例子: 等待wordpress-mysql虚拟机组虚拟机启动，等待120秒
|        f2cadmin waitUntilServerUp wordpress-mysql 120
|   输出:

.. code:: python

	> f2cadmin waitUntilServerUp wordpress-mysql 120
	to locate clusterrole wordpress-mysql servers..... @ 2014-11-29 15:29:36
	clusterrole wordpress-mysql #12154 vm is up, localIP:10.165.63.61 remoteIP:121.42.56.146
	
|   4) 获取虚拟机本机信息
|   f2cadmin get local_server_info [<column>]  #column in [localIP, remoteIP, clusterRoleId, serverRoleId]
|
|   例子: 获取虚拟机本机信息
|         f2cadmin get local_server_info
|   输出: 

.. code:: python

	> f2cadmin get local_server_info
	{
	  "clusterName": "wordpress-qingdao",
	  "name": "wordpress-qingdao->wordpress-mysql->297",
	  "vmId": "",
	  "clusterRoleId": 52,
	  "clusterRoleName": "wordpress-mysql",
	  "serverRoleId": 24,
	  "cloudId": 10,
	  "clusterId": 14,
	  "clusterType": "default",
	  "groupId": 34,
	  "localIP": "10.163.100.108",
	  "remoteIP": "120.27.40.251",
	  "region": "cn-qingdao",
	  "rabbitmqQueue": "queue_down_14_297_d166bb98",
	  "id": 297
	}

|   5) 获取虚拟机本机的某些字段信息
|   f2cadmin get local_server_info [<column>]  #column in [localIP, remoteIP, clusterRoleId, serverRoleId]
|
|   例子: 获取本机虚拟机信息
|         f2cadmin get local_server_info localIP
|   输出: 

.. code:: python

	> f2cadmin get local_server_info localIP
	10.163.100.108








