一般问题
============================

**Q: 什么是FIT2CLOUD?**

FIT2CLOUD是一个建立在IaaS之上的云管理及DevOps协作平台，帮助企业提高云成熟度，实现云资源创建自动化、
服务器自动化、混合云管理、应用部署升级自动化和持续交付。基于FIT2CLOUD，企业可以实现应用全生命周期的自动化管理，
打通从代码到服务的转化通道，实现云应用的持续交付和自动化运维。
     
FIT2CLOUD目前支持阿里云、微软Azure、亚马逊AWS和青云QingCloud。未来，FIT2CLOUD将支持更多的公有云和私有云
(如Openstack/Cloudstack), 打造中国版RightScale。FIT2CLOUD将致力于解决跨平台云管理问题，让企业能够
轻松部署和管理跨公有云、私有云和混合云的重要商业应用，为云基础设施和应用提供配置、监控、自动化和管理服务。

FIT2CLOUD的产品和解决方案包括：Hosted服务、企业版和SaaS化解决方案。FIT2CLOUD企业版部署在企业自己的云账户中，
完全由企业自主控制。FIT2CLOUD SaaS化解决方案帮助ISV自动化管理云中的成千上万个虚机，转型SaaS服务提供商。

|     `FIT2CLOUD详细介绍PPT <http://fit2cloud.com/introduction.html>`_
|     `FIT2CLOUD介绍视频 <http://v.youku.com/v_show/id_XNzc3NjA1NjEy.html>`_

**Q: FIT2CLOUD能用来做什么?**

通过使用FIT2CLOUD可以实现全栈自动化，即应用环境创建和管理、应用部署升级和运维管理的自动化：

| 1) 提升IaaS使用成熟度，使得IaaS更好地为企业服务，支持敏捷开发过程，快速开发迭代持续交付的过程
| 2) 提升研发及运维效率和应用服务质量，并降低开发及运维运营成本, 减少不必要重复且易于出错的手工部署配置升级维护劳动。

**Q: FIT2CLOUD的常见使用场景有哪些**

**1) 开发测试运维支持过程中的自动化部署升级场景:**

| 场景1: 一键自动创建和管理软硬件环境并部署应用
| 场景2: 自动升级应用
| 场景3: 与持续集成服务集成实现持续部署升级, 持续交付
| 场景4: 设置安全组
| 场景5: 设置数据盘
| 场景6: 实现自动配置DNS

**2) 产品上线后运维场景:**

| 场景1: 自动伸缩应对峰值
| 场景2: 定时启动关闭虚拟机
| 场景3: 自动升级应用
| 场景4: 查看应用集群虚拟机监控及告警
| 场景5: 自动备份恢复
| 场景6: 配置应用运行时环境

**3) 开发测试运维支持过程中日常工具场景:**

| 场景1: 从Web控制台登录虚拟机
| 场景2: 从Web控制台同时在多个虚拟机执行脚本
| 场景3: 查看应用集群虚拟机监控及告警

**Q: FIT2CLOUD对谁有用?**

使用阿里云,AWS, 青云等IaaS服务开发和管理业务应用系统的企业研发及运维组织，以及组织内的开发人员, 测试人员, 运维人员。

FIT2CLOUD特别适合需要频繁升级发布，快速迭代的组织，非常适合管理大规模分布式的平台和应用。

**从组织层面非常适合**

 |  1) 提供大规模平台服务，企业应用的系统集成商, 代维护运营商
 |  2) 需要快速发布的移动互联网公司
 |  3) 开发和运营大规模平台及应用的组织
 |  4) 对成本敏感，需要减少运维人力成本的组织

**从最终用户层面适合**

 |  1) 开发大规模分布式系统，需要快速方便自动化搭建升级集成测试环境的开发人员，测试人员
 |  2) 日常开发测试使用AWS，阿里云的开发人员，测试人员
 |  3) 维护运行在AWS，阿里云的系统的维护人员

**Q: FIT2CLOUD能做哪些以前不能做的事情?**

1.如果您使用的是阿里云, 阿里云不提供自动伸缩的功能, 但是基于FIT2CLOUD, 可以让您在阿里云应用服务实现自动伸缩。
    
2.通过使用FIT2CLOUD可以实现应用服务的创建和管理的全栈自动化, 举个例子，目前大家使用阿里云，为了让服务运行起来，
基本上除了创建应用的部署环境跟以前不同外，其他的操作，如安装应用，配置，启动还跟原来一样, 但是通过FIT2CLOUD,
您可以定义一个集群的部署计划和监控运维计划, 将从创建环境到应用的部署配置启动以及增减服务器全部都自动化，从而减少不
必要乏味易出错的手工操作，提升开发运维各个过程的效率和质量。
       
3.对于大规模分布式系统的发布, 之前从搭建一套环境到安装应用服务到运行起来, 升级一个版本, 需要几小时一天甚至数天的时间, 基于FIT2CLOUD, 可以实现分钟级发布。

4.通过FIT2CLOUD启动和管理虚拟机，不需要自己安装配置额外的监控系统就能够查看主机的基本监控及设置和收到告警通知。

**Q: FIT2CLOUD安全吗?**

| 1) FIT2CLOUD登陆使用Github帐号，所以您的用户名密码都是是保存在Github中;
| 2) FIT2CLOUD中的数据传输均采用SSL/HTTPS;
| 3) FIT2CLOUD REST API采用OAuth;
| 4) FIT2CLOUD对于关键的数据在存储过程中进行了加密;
| 5) FIT2CLOUD企业版部署在您自己的虚拟机环境中，完全由企业控制。

**Q: FIT2CLOUD(在线版)支持哪些公有云？**

目前支持阿里云, AWS, Azure和青云QingCloud, 其中FIT2CLOUD(阿里云版)为V2.0版，功能最为完善，其他云版本为V1.0版，我们会尽快升级到V2.0版。

**Q: FIT2CLOUD(企业版)支持哪些公有云？**

目前仅支持阿里云, 通过镜像方式交付，镜像以上架阿里云官方镜像市场。

**Q: FIT2CLOUD支持私有云吗? 比如Cloudstack/Openstack/vSphere?**

目前不支持。但是我们计划支持，FIT2CLOUD可以根据客户需求做定制化开发，比如您的私有云基于
CloudStack/OpenStack/vSphere, 我们可以为您在您的私有云内部安装一套基于CloudStack/OpenStack/vSphere的FIT2CLOUD服务。 

**Q: FIT2CLOUD同类产品有哪些？国外有同类产品吗？国内有同类产品吗？**

目前，在国内还没有同类产品，国外的同类产品有AWS的Opsworks/CloudFormation/CodeDeploy, 以及RightScale和Scalr。

**Q: FIT2CLOUD与AWS的Opsworks有什么区别？**

1) OpsWorks与Chef绑定紧密：OpsWorks与Chef绑定,这导致只能用Chef;而FIT2CLOUD的EventHandler可以用任何脚本语言实现，不仅可以使用Shell, python, Ruby, 还可以在脚本中可以调用Chef/Puppet。

2) OpsWorks不支持On-Premise部署和定制化修改：对于大型企业来说，会有自己的特定需求，On-premise部署和可定制性非常重要。

3) OpsWorks不支持其他公有云：OpsWorks只支持AWS,不支持其他的IaaS, 不支持混合云, FIT2CLOUD将来可以支持其他的IaaS。

4) OpsWorks暂时不支持Beijing Region：AWS北京区域不提供OpsWorks 服务。而FIT2CLOUD会抽象掉Beijing Region和其他Global regions之间的差异。用户可以在Cluster中使用所有Region的资源。

5) OpsWorks单个Stack的资源局限在一个Region内：受限于底层实现(CloudWatch＆ AutoScaling Group)，OpsWorks一个Stack内的所有资源都是位于一个Region之内。

6) OpsWorks不能处理不同VM之间的事件(Orchestration)：举例而言,当启动一台新的mysql后， 我们想自动把mysql的地址配置到Webapp的配置文件中，在OpsWorks中，按照例子，需要先手动启动mysql, 然后等mysql启动后，人用肉眼获得MySQL的IP, 然后手动配置到chef的Cookebook里，从VM的启动到自动的配置，这之间需要人手工干预，无法实现环境VM自动化到配置自动化之前衔接的自动化。

**Q: FIT2CLOUD与AWS的CodeDeploy有什么区别？**

| 1) FIT2CLOUD兼容AWS CodeDeploy Appspec规范，功能上基本一致;
| 2) AWS CodeDeploy与S3紧密结合，但FIT2CLOUD artifact仓库支持阿里云OSS和Nexus;
| 3) AWS CodeDeploy支持Windows，FIT2CLOUD不支持;

**Q: 什么是全栈自动化？**

全栈自动化就是从创建环境，到应用运行时环境安装，应用组件的部署配置启动整个过程的自动化以及应用运行过程中监控, 备份恢复, 按需伸缩的自动化, 以及各个中间过程衔接的自动化。

现在很多应用的安装，在IaaS中启动虚拟机后，还需要人工获取IP地址，并把IP地址配置到某文件，然后运行自动化脚本，
这种方式下，环境创建和应用的部署之间的衔接不是自动化的，仍需人工手工操作。即使自动化，也是需要自行编写程序来实现，
如果使用FIT2CLOUD, 这个衔接部分FIT2CLOUD都给您做了，您只需要在Web控制台配置集群虚拟机组的虚拟机类型和启动后
要运行的安装脚本即可。 这样就将应用的管理工作进一步自动化了，又消除了一个影响效率的地方。

**Q: 现在Docker很火，FIT2CLOUD跟Docker有什么区别？**

请参考IaaS使用成熟度模型, FIT2CLOUD和Docker所要解决的问题范畴不同。FIT2CLOUD的功能涵盖创建资源、
服务器自动化、混合云管理、应用自动化和持续交付, 而Docker更多专注于应用自动化，持续交付这两块。所以用户在使用
FIT2CLOUD实现应用自动化和持续交付时，有多种方案可以选择，既可以选择采用自己的方案和实现(比如自定义脚本或者集成Chef)，
也可以采用Docker来实现。未来，FIT2CLOUD将深度集成Docker & Kubernetes，让用户更加方便的使用Docker来实现应用自动化和持续交付。