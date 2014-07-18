使用Fit2Cloud Java SDK
================================================

第一步：引用Jar包
-----------------------------------------------

|  方法1：使用Maven

.. code:: python

	<!-- repository -->
	<repositories>
	    <repository>
	        <id>fit2cloud</id>
	        <url>http://repository.fit2cloud.com/content/groups/public/</url>
	        <releases>
	            <enabled>true</enabled>
	        </releases>
	        <snapshots>
	            <enabled>true</enabled>
	        </snapshots>
	    </repository>  
	</repositories>
	
	<!-- dependency -->
	<dependency>
	  <groupId>com.fit2cloud</groupId>
	  <artifactId>fit2cloud-aliyun-java-sdk</artifactId>
	  <version>1.0</version>
	</dependency>

|  方法2：直接下载Jar包
|
|        下载地址是： http://repository.fit2cloud.com/service/local/repo_groups/public/content/com/fit2cloud/fit2cloud-aliyun-java-sdk/1.0/fit2cloud-aliyun-java-sdk-1.0-jar-with-dependencies.jar

第二步：调用Fit2Cloud API
-----------------------------------------------

.. code:: python

        String apiKey = "你的consumer key";
        String apiSecret = "你的secret key";
        Fit2CloudClient client = new Fit2CloudClient(apiKey, apiSecret);
        System.out.println("List clusters.....");
        System.out.println(client.getClusters());

| API列表：
|    获取集群列表
|    获取单个集群的信息
|    获取集群下面的虚机组列表
|    获取集群下面的虚机列表
|    向集群下面的所有虚机发送事件
|    向虚机组下面的所有虚机发送事件
|    向单个虚机发送事件
|    获取事件日志
