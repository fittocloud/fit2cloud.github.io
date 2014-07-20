实现持续部署升级
=======================================================
|
| 这里我们以在阿里云上建立一个wordpress网站为例, 了解如何使用Fit2Cloud实现应用的持续部署升级。
|
| 第一步: 创建Jenkins CI Job
|    
|
| 第二步: 配置Jenkins CI Job
|    调用Fit2Cloud SDK在集群内所有虚拟机上执行CodeUpdate脚本
|    CodeUpdate脚本:
|    1) 获取集群名字
|    2) 根据集群名字下载集群对应的最新的wordpress部署包信息
|    3) 检查是否需要升级
|    4) 需要，下载最新版本并部署配置启动wordpress