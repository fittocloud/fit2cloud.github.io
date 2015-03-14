---
alias: integrate.html
---

## 使用FIT2CLOUD SDK

### 1. 使用FIT2CLOUD Java SDK

**第一步：引用Jar包**

1) 方法1：使用Maven

```sql
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
```

2) 方法2：直接下载Jar包

[下载](http://repository.fit2cloud.com/service/local/repo_groups/public/content/com/fit2cloud/fit2cloud-aliyun-java-sdk/1.0/fit2cloud-aliyun-java-sdk-1.0-jar-with-dependencies.jar)

**第二步：调用FIT2CLOUD API**

```sql
   String apiKey = "你的consumer key";
   String apiSecret = "你的secret key";
   FIT2CLOUDClient client = new FIT2CLOUDClient(apiKey, apiSecret);
   System.out.println("List clusters.....");
   System.out.println(client.getClusters());
```

* API列表：
*    获取集群列表
*    获取单个集群的信息
*    获取集群下面的虚机组列表
*    获取集群下面的虚机列表
*    向集群下面的所有虚机发送事件
*    向虚机组下面的所有虚机发送事件
*    向单个虚机发送事件
*    获取事件日志

```sql
	package com.fit2cloud.aliyun.sdk;
	
	import java.util.List;
	
	import org.junit.After;
	import org.junit.Before;
	import org.junit.Test;
	
	import com.fit2cloud.aliyun.sdk.model.Cluster;
	import com.fit2cloud.aliyun.sdk.model.ClusterRole;
	import com.fit2cloud.aliyun.sdk.model.Logging;
	import com.fit2cloud.aliyun.sdk.model.Server;
	
	public class FIT2CLOUDClientTest {
	
		private String apiKey;
		private String apiSecret;
		private FIT2CLOUDClient client;
		
		@Before
		public void setUp() throws Exception {
		    this.apiKey = "put your key here";
		    this.apiSecret = "put your secret here";
		    this.client = new FIT2CLOUDClient(apiKey, apiSecret);
		}
		
		@After
		public void tearDown() throws Exception {
		}
		
		@Test
		public void testGetClusters() throws Exception {
		    System.out.println("List clusters...");
		    List<Cluster> clusters = this.client.getClusters();
		    assert clusters!=null && clusters.size()>0;
		    System.out.println(clusters);
		}
		
		@Test
		public void testGetClusterRoles() throws Exception {
			System.out.println("List roles for cluster...");
			List<Cluster> clusters = this.client.getClusters();
			assert clusters!=null && clusters.size()>0;	
			
			List<ClusterRole> clusterRoles = client.getClusterRoles(clusters.get(0).getId());
			assert clusterRoles!=null && clusterRoles.size()>0;
			System.out.println(clusterRoles);
		}
		
		@Test
		public void testGetClusterServers() throws Exception {
			System.out.println("List servers for cluster 4...");
			List<Cluster> clusters = this.client.getClusters();
			assert clusters!=null && clusters.size()>0;
			List<Server> servers = client.getClusterServers(clusters.get(0).getId());
			assert servers!=null;
			System.out.println(servers);
		}
		
		@Test
		public void testExecuteScriptInServer() throws Exception {
			long serverId = 316l;
			StringBuilder sb = new StringBuilder();
			sb.append("#!/bin/bash").append("\n");
			sb.append("pwd").append("\n");
			sb.append("ls -l").append("\n");
			sb.append("date").append("\n");
			String scriptContent = sb.toString();
			long eventId = client.executeScriptInServer(serverId, scriptContent);
			System.out.println(eventId);
		}
		
		@Test
		public void testGetEventLogging() throws Exception {
			long eventId = 1074;
			List<Logging> loggings = client.getLoggingsByEventId(eventId);
			System.out.println(loggings);
		}
	
	}
```

### 2. 使用FIT2CLOUD Python SDK
   
   请见Github [fit2cloud-python-sdk on Github](https://github.com/fit2cloud/fit2cloud-python-sdk)


