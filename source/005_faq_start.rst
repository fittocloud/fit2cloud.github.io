开始使用
============================

| **Q: 如何开始使用FIT2CLOUD?如何登陆网站, 域名是?**
|
|    `http://fit2cloud.com <http://fit2cloud.com>`_
|
|    入门文档请移步 `此处 <http://docs.fit2cloud.com/get_started.html>`_
|
| **Q: 登陆FIT2CLOUD需要注册用户吗? 可以使用微博或常见的社交帐号登陆FIT2CLOUD吗?**
|
|    登陆FIT2CLOUD不需要在FIT2CLOUD注册用户，但是FIT2CLOUD使用Github做SSO, 所以需要您有一个Github帐号，
| 目前只支持使用Github帐号登陆。
|
| **Q: 什么是集群？**
|
|    集群就是我们通常所说的环境，我们把用于部署和运行某应用的一组虚拟机叫做一个集群。如果您用过AWS的Opsworks, 
| 等同于Opswork的Stack。
|
|    举例, 通常对于很多项目，一个应用或系统有不同用途的多个环境，如开发环境，测试环境，试运行环境以及产品环境，
| 每一个环境就是一个集群，由一组虚拟机组成。
| 
|    1个集群包含 0..n 个虚拟机组, 每个虚拟机组，包含 0..n 个虚拟机
|
| **Q: 什么是虚机组？**
|
|    把集群中相同类型的一组虚拟机叫做一个虚拟机组, 一个虚拟机组定义了虚拟组里虚拟机:
|    1) 数量
|    2) 在哪个数据中心启动 (如阿里云的北京,杭州,香港,青岛数据中心)
|    3) 硬件配置         (xsmall | ...)
|    4) 安装的操作系统版本 (Ubuntu1204 | CentOS5.8 | CentOS6.5)
|    5) 运行时环境安装配置脚本
|    6) 组件安装配置脚本
|    7) 集群里虚拟机启动或关闭时执行哪些脚本
|
|    FIT2CLOUD会根据集群里的各个虚拟机组的定义或设置在指定的数据中心创建指定类型的虚拟机和执行指定的脚本,
| 从而把从环境的创建到组件的部署配置启动过程全部自动化, 中间不需要手工工作。  
|
|  举例, 比如一个wordpress网站, 我们定义其为一个集群wordpress-qingdao，由两个虚拟机组组成
|
|    1) 一组是wordpress-web虚拟机组
|       虚拟机数量: 1个
|       虚拟机配置大小类型: xsmall
|       虚拟机数据中心: 青岛
|       操作系统: CentOS6.5
|       安装的软件及组件: apache, php和wordpress web
|
|    2) 另一组是wordpress-mysql虚拟机组
|       虚拟机数量: 1个
|       虚拟机大小: xsmall
|       虚拟机数据中心: 青岛
|       操作系统: CentOS6.5
|       安装的软件及组件: mysql, wordpress database, 用户名密码为root/fit2cloud
|
|   当我们启动集群后，FIT2CLOUD就会根据集群的定义和配置，在青岛数据中心启动两台xsmall的虚拟机，都装
| CentOS6.5, 一台安装apache,php和wordpress web, 一台安装mysql及创建wordpress database。
| 安装wordpress web那台虚拟机上的wordpress数据库配置文件会被自动配置好，用装mysql的虚拟机的IP,
| 及数据库用户名密码root/fit2cloud。 
|
| **Q: 什么是事件处理脚本？**
|
|     我们不管是手工还是自动建立环境时，都需要启动虚拟机并在虚拟机上安装各种
|  运行时需要的库包软件以及应用的组件, 为了自动化，FIT2CLOUD把建立服务器的
|  过程分成了几个阶段，即ready, initialize, install, start这几个阶段:
|
|     1) ready代表虚拟机已经在云基础设施中启动起来，ready之后就会触发initialize事件
|
|     2) FIT2CLOUD收到initialize事件后，就会在虚拟机上执行这个事件对应的处理
|  脚本，脚本执行结束后，就会触发install事件
|
|     3) FIT2CLOUD收到install事件后, 就会在虚拟机上执行这个事件对应的处理
|  脚本，脚本执行结束后，就会触发start事件
|
|     4) FIT2CLOUD收到start事件后,就会在虚拟机上执行这个事件对应的处理脚本
|  
|     这几个事件的发生和处理是一个顺序同步的过程，一个发生并处理结束后，下一个发生。
|  通常我们在initialize事件的处理脚本中实现安装应用组件的各种依赖的库，包和软件，
|  在install事件的处理脚本中实现应用组件的部署配置，在start事件中实现应用组件的启动。
|
| **Q: FIT2CLOUD有什么限制？比如应用的类型？比如CloudFoundry只能管理Web类型的应用**
|
|     FIT2CLOUD可以部署和管理任何运行在虚拟机上的应用。
|