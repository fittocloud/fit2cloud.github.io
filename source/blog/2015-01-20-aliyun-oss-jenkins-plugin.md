---
title: 在Jenkins持续集成方案中使用阿里云OSS作为Artifacts仓库
---

{{ page.title }}
================

<p class="meta">2015/01/20 - 北京 By 阮志敏</p>

建立统一的artifacts仓库是持续部署的前提。目前，建立artifacts仓库大致有如下三种选择：

    * FTP服务器：最传统的方式。
    * 专业的Artifacts存储仓库：比如Nexus, Artifactory等。
    * 对象存储服务：比如阿里云OSS，AWS S3等。

如果用户的应用系统全部部署在阿里云中，那么可以考虑使用阿里云OSS来建立artifacts仓库。使用阿里云OSS来建立artifacts仓库有两个好处：一是仓库的可靠性、高可用性由阿里云OSS来保证；二是上传、下载Artifact速度快。

Jenkins是当前最常用的CI服务器，FIT2CLOUD开源了Aliyun-OSS-Plugin for Jenkins，这个Jenkins插件的功能是：将构建后的artifacts上传到OSS的指定位置上去。

<h2>一、安装说明</h2>

1. 下载插件：[地址](http://repository-proxy.fit2cloud.com:8080/content/repositories/releases/org/jenkins-ci/plugins/aliyun-oss/0.5/aliyun-oss-0.5.hpi)
2. 安装插件: 请到 (Manage Jenkins|Advanced|Upload)页面，上传hpi文件 安装完毕后需要重新启动Jenkins。安装成功后，在已经安装插件列表中会显示，如下图：

![阿里云OSS Jenkins插件](/images/install-plugin.png =600x)

<h2>二、使用说明</h2>

1. 配置阿里云OSS帐号：在(Manage Jenkins|Configure System|阿里云OSS账户设置)中配置阿里云帐号的Access Key和Secret Key。如下图：

![阿里云OSS帐号设置](/images/plugin-config.png =600x)

2. 在Post-build actions下面选择[上传Artifact到阿里云OSS]。需要填写的信息有：

      * Bucket名称： 阿里云OSS Bucket名称
      * 要上传的artifacts：文件之间用;隔开。支持通配符描述，比如text/*.zip。
      * Object前缀设置：设置key的前缀，可使用环境变量，如${JOB_NAME}/${BUILD_NUMBER}/
      
![Job设置](/images/job-config.png =600x)

假设一个job的名称是test，用户的设置如下：

      * Bucket名称: f2c
      * 要上传的artifacts：hello.txt;hello1.txt
      * Object前缀: ${JOB_NAME}/${BUILD_ID}/${BUILD_NUMBER}

那么上传后的文件url为: http://f2c.oss-cn-hangzhou.aliyuncs.com/test/2015-01-20_14-22-46/5/hello.txt

插件工作时会输出类似下面的日志：

![Job构建日志](/images/build-log.png =600x)

<h2>三、二次开发说明</h2>

你可以基于这个插件进行二次开发，增加新的功能，比如在Build Action中从阿里云OSS下载指定文件等。GitHub项目地址为：[https://github.com/fit2cloud/aliyun-oss-plugin](https://github.com/fit2cloud/aliyun-oss-plugin)

如果有疑问，请联系support@fit2cloud.com
