FAQ
=====================================

一: 一般问题
--------------------------------
| **Q: 什么是FIT2CLOUD?**
|
|     FIT2CLOUD是一个建立在IaaS之上的云管理及DevOps协作平台，帮助企业提高云成熟度，实现云资源创建自动化、
| 服务器自动化、混合云管理、应用部署升级自动化和持续交付。基于FIT2CLOUD，企业可以实现应用全生命周期的自动化管理，
| 打通从代码到服务的转化通道，实现云应用的持续交付和自动化运维。
|     
|     FIT2CLOUD目前支持亚马逊AWS、阿里云和青云QingCloud。未来，FIT2CLOUD将支持更多的公有云和私有云
| (如Openstack/Cloudstack), 打造中国版RightScale。FIT2CLOUD将致力于解决跨平台云管理问题，让企业能够
| 轻松部署和管理跨公有云、私有云和混合云的重要商业应用，为云基础设施和应用提供配置、监控、自动化和管理服务。
|     
|     FIT2CLOUD的产品和解决方案包括：Hosted服务、企业版和SaaS化解决方案。FIT2CLOUD企业版部署在企业自己的云账户中，
| 完全由企业自主控制。FIT2CLOUD SaaS化解决方案帮助ISV自动化管理云中的成千上万个虚机，转型SaaS服务提供商。
|
|     `FIT2CLOUD详细介绍PPT <http://fit2cloud.com/introduction.html>`_
|     `FIT2CLOUD介绍视频 <http://v.youku.com/v_show/id_XNzc3NjA1NjEy.html>`_
|
| **Q: FIT2CLOUD能用来做什么?**
|
|     通过使用FIT2CLOUD可以实现全栈自动化，即应用环境创建和管理、应用部署升级和运维管理的自动化：
|     1) 提升IaaS使用成熟度，使得IaaS更好地为企业服务，支持敏捷开发过程，快速开发迭代持续交付的过程
|     2) 提升研发及运维效率和应用服务质量，并降低开发及运维运营成本, 减少不必要重复且易于出错的手工部署配置升级维
| 护劳动。
|
|     FIT2CLOUD的常见使用场景有:
|
|     1) 开发测试运维支持过程中的自动化部署升级场景:
|       场景1: 一键自动创建和管理软硬件环境并部署应用
|       场景2: 自动升级应用
|       场景3: 与持续集成服务集成实现持续部署升级, 持续交付
|       场景4: 设置安全组
|       场景5: 设置数据盘
|       场景6: 实现自动配置DNS
|
|     2) 产品上线后运维场景:
|       场景1: 自动伸缩应对峰值
|       场景2: 定时启动关闭虚拟机
|       场景3: 自动升级应用
|       场景4: 查看应用集群虚拟机监控及告警
|       场景5: 自动备份恢复
|       场景6: 配置应用运行时环境
|
|     3) 开发测试运维支持过程中日常工具场景:
|       场景1: 从Web控制台登录虚拟机
|       场景2: 从Web控制台同时在多个虚拟机执行脚本
|       场景3: 查看应用集群虚拟机监控及告警
|
| **Q: FIT2CLOUD对谁有用?**
|
|    使用阿里云,AWS, 青云等IaaS服务开发和管理业务应用系统的企业研发及运维组织，以及组织内的开发人员, 
| 测试人员, 运维人员。
|
|    FIT2CLOUD特别适合需要频繁升级发布，快速迭代的组织，非常适合管理大规模分布式的平台和应用。
|
|    **从组织层面非常适合**
|       1) 提供大规模平台服务，企业应用的系统集成商, 代维护运营商
|       2) 需要快速发布的移动互联网公司
|       3) 开发和运营大规模平台及应用的组织
|       4) 对成本敏感，需要减少运维人力成本的组织
|
|    **从最终用户层面适合**
|       1) 开发大规模分布式系统，需要快速方便自动化搭建升级集成测试环境的开发人员，测试人员
|       2) 日常开发测试使用AWS，阿里云的开发人员，测试人员
|       3) 维护运行在AWS，阿里云的系统的维护人员
|
| **Q: FIT2CLOUD能做哪些以前不能做的事情?**
|
|    1) 如果您使用的是阿里云， 阿里云不提供自动伸缩的功能， 但是基于FIT2CLOUD, 可以让您在阿里云
| 应用服务实现自动伸缩。
|    2) 通过使用FIT2CLOUD可以实现应用服务的创建和管理的全栈自动化, 举个例子，目前大家使用阿里云，
| 为了让服务运行起来，基本上除了创建应用的部署环境跟以前不同外，其他的操作，如安装应用，配置，启动还跟
| 原来一样, 但是通过FIT2CLOUD,您可以定义一个集群的部署计划和监控运维计划, 将从创建环境到应用的部署
| 配置启动以及增减服务器全部都自动化，从而减少不必要乏味易出错的手工操作，提升开发运维各个过程的效率和质量。
|    3) 对于大规模分布式系统的发布， 之前从搭建一套环境到安装应用服务到运行起来, 升级一个版本， 需要
| 几小时一天甚至数天的时间，基于FIT2CLOUD, 可以实现分钟级发布。
|    4) 通过FIT2CLOUD启动和管理虚拟机，不需要自己安装配置额外的监控系统就能够查看主机的基本监控及设置
| 和收到告警通知。
| 
| **Q: FIT2CLOUD支持哪些公有云？**
|
|    我们目前支持阿里云,AWS和青云QingCloud。在未来，我们会支持更多的公有云以及私有云。
|
| **Q: FIT2CLOUD支持私有云吗? 比如Cloudstack/Openstack?**
|
|    目前不支持。但是我们计划支持，FIT2CLOUD可以根据客户需求做定制化开发，比如您的私有云基于
| CloudStack或OpenStack, 我们可以为您在您的私有云内部安装一套基于CloudStack或OpenStack的FIT2CLOUD服务。 
|
| **Q: FIT2CLOUD同类产品有哪些？国外有同类产品吗？国内有同类产品吗？**
|
|    目前，在国内还没有同类产品，国外的同类产品有AWS的Opsworks, CloudFormation, 以及RightScale和Scalr。
|
| **Q: FIT2CLOUD与AWS的Opsworks有什么区别？**
|
|   1) OpsWorks与Chef绑定紧密：OpsWorks与Chef绑定,这导致只能用Chef;而FIT2CLOUD的EventHandler可以用任何
|      脚本语言实现，不仅可以使用Shell, python, Ruby, 还可以在脚本中可以调用Chef/Puppet。
|
|   2) OpsWorks不支持On-Premise部署和定制化修改：对于大型企业来说，会有自己的特定需求，On-premise部署和可定
|      制性非常重要。
|
|   3) OpsWorks不支持其他公有云：OpsWorks只支持AWS,不支持其他的IaaS, 不支持混合云, FIT2CLOUD将来可以支持其
|      他的IaaS。
|
|   4) OpsWorks暂时不支持Beijing Region：AWS北京区域不提供OpsWorks 服务。而FIT2CLOUD会抽象掉Beijing 
|      Region和其他Global regions之间的差异。用户可以在Cluster中使用所有Region的资源。
|
|   5) OpsWorks单个Stack的资源局限在一个Region内：受限于底层实现(CloudWatch＆ AutoScaling Group)，
|      OpsWorks一个Stack内的所有资源都是位于一个Region之内。
|
|   6) OpsWorks不能处理不同VM之间的事件(Orchestration)：举例而言,当启动一台新的mysql后， 我们想自动把mysql
|      的地址配置到Webapp的配置文件中，在OpsWorks中，按照例子，需要先手动启动mysql, 然后等mysql启动后，人用肉
|      眼获得MySQL的IP, 然后手动配置到chef的Cookebook里，从VM的启动到自动的配置，这之间需要人手工干预，无法实
|      现环境VM自动化到配置自动化之前衔接的自动化。
|
| **Q: 什么是全栈自动化？**
|
|    全栈自动化就是从创建环境，到应用运行时环境安装，应用组件的部署配置启动整个过程的自动化以及应用运行过程中监控, 
| 备份恢复, 按需伸缩的自动化, 以及各个中间过程衔接的自动化。
|
|    现在很多应用的安装，在IaaS中启动虚拟机后，还需要人工获取IP地址，并把IP地址配置到某文件，然后运行自动化脚本，
| 这种方式下，环境创建和应用的部署之间的衔接不是自动化的，仍需人工手工操作。即使自动化，也是需要自行编写程序来实现，
| 如果使用FIT2CLOUD, 这个衔接部分FIT2CLOUD都给您做了，您只需要在Web控制台配置集群虚拟机组的虚拟机类型和启动后
| 要运行的安装脚本即可。 这样就将应用的管理工作进一步自动化了，又消除了一个影响效率的地方。
|
| **Q: 现在Docker很火，FIT2CLOUD跟Docker有什么区别？**
|    
|    请参考IaaS使用成熟度模型, FIT2CLOUD和Docker所要解决的问题范畴不同。FIT2CLOUD的功能涵盖创建资源、
| 服务器自动化、混合云管理、应用自动化和持续交付, 而Docker更多专注于应用自动化，持续交付这两块。所以用户在使用
| FIT2CLOUD实现应用自动化和持续交付时，有多种方案可以选择，既可以选择采用自己的方案和实现(比如自定义脚本或者集成Chef)，
| 也可以采用Docker来实现。未来，FIT2CLOUD将深度集成Docker，让用户更加方便的使用Docker来实现应用自动化和持续交付。

.. image:: _static/080-improve-maturity.png

二: 开始使用
--------------------------------
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

三: 安全性
--------------------------------
| **Q: FIT2CLOUD的登陆用户名密码是否安全?**
|
|     是安全的，FIT2CLOUD登陆使用Github帐号，所以您的用户名密码都是是保存在Github中的,足够安全。
| 
| **Q: FIT2CLOUD的传输过程安全吗?**
|
|     是安全的，FIT2CLOUD中的数据传输均采用SSL/HTTPS。
|
| **Q: FIT2CLOUD提供的Rest API安全吗?**
|
|     是安全的，FIT2CLOUD REST API基于OAuth协议, 是安全的。
|
| **Q: FIT2CLOUD存储的数据安全吗?**
|
|     是安全的，FIT2CLOUD对于关键的数据在存储过程中进行了加密，是安全的。
|

四: 价格及计费
--------------------------------
| **Q: FIT2CLOUD是如何收费的吗?**
| 
|   FIT2CLOUD计费有多种套餐供您选择，对于管理的虚拟机数量小于10台的用户是免费的。
|
| **Q: FIT2CLOUD除SaaS服务外，是否提供企业版服务，如果提供如何收费?**
| 
|   FIT2CLOUD也提供企业版服务，可以专门为企业在企业内部或者指定的数据中心安装一套
| FIT2CLOUD服务，并负责安装运维和支持服务，如有需要请联系support@fit2cloud.com。
|
| **Q: FIT2CLOUD是否提供技术支持服务套餐以便能够保证支持的及时性，如果有如何收费?**
|
|     FIT2CLOUD也有多种技术支持服务套餐，如有需要请联系support@fit2cloud.com。
|
| **Q: FIT2CLOUD是否提供全栈自动化实施服务，即针对客户具体系统，实现应用自动化部署升级运维?**
|
|     提供，如有需要请联系support@fit2cloud.com。


五: 使用过程常见问题
--------------------------------
| **Q: 执行脚本的超时时间是多少?**
|     
|     执行脚本的默认超时时间为20分钟，如果脚本执行超过20分钟，FIT2CLOUD会把脚本执行进程杀掉，
| 所以如果脚本某些正常操作费时超过20分钟，请在脚本中将其放到后台执行，对于脚本中可能出现超时的
| 操作，您最好处理下，以便能在一定时间内看到结果，fit2cloud提供了一个控制脚本超时的工具叫f2ctimout,
| 您可以在脚本中直接调用, 如 f2ctimeout -t 3 sleep 100 (设置超时时间为3秒，超过3秒就停掉)
|
| **Q: 登陆虚拟机时显示没有安全插件?**
|     
|     这种情况，需要根据您的操作系统和浏览器类型安装相应的java插件jre。
|
| **Q: 登陆虚拟机时显示找不到jar?**
|   
|     这种情况，请检查是否使用了代理服务器，把*.fit2cloud.com加到代理服务器例外设置里即可。
|
| **Q: 为什么虚拟机启动失败?怎么知道失败原因?**
|
|     FIT2CLOUD每个集群的虚拟机列表页面中都有一个"状态"列, 如果失败，这列会显示失败和一个问号图标，
| 将鼠标移到问号图标上就能看到启动失败的原因，比如选定的数据中心不支持指定的虚拟机配置类型，没有可用
| 的类型的虚拟机，或者帐户余额不足，或者超出帐户允许的最大虚拟机数量。
|
| **Q: 启动一台虚拟机大概得等多长时间?**
|
|     一般几分钟。
|
| **Q: 同一个集群里的各个虚拟机是否能互相访问?**
|
|     FIT2CLOUD做了处理，同一个集群里的虚拟机可以互相访问, 但是如果不添加安全组规则，则集群外部
| 及公网只能访问ssh 22端口。
|
| **Q: 为什么访问不了虚拟机某端口?**
|
|     情况一: 安全组设置有问题。
|         请检查是否在虚拟机所属的虚拟机组安全组设置中打开了指定的端口。
|
|     情况二: 本地的网络环境问题。
|         请确定本地的网络允许访问外网的除80外的端口, 或者本地的DNS等。
|
| **Q: 为什么启动集群后各个虚拟机没有心跳?多长时间能看到心跳?**
|
|     情况一: 虚拟机启动后，3分钟内是不显示心跳的，FIT2CLOUD确认连续收到三个心跳才认为是正常。
|
|     情况二: 网络问题，虚拟机到FIT2CLOUD主服务器之间的网络有问题。
|            这个可以通过查看FIT2CLOUD在虚拟机上的代理服务日志知道。
|
|     情况三: FIT2CLOUD在虚拟机上的代理服务eventagent停了。
|            1) 请联系support@fit2cloud.com;
|            2) 登陆到虚拟机查看代理服务状态或日志
|               a. ps aux | grep eventagent
|               b. vim /var/log/eventagent.log
|

六: FIT2CLOUD For 阿里云 常见问题
-----------------------------------------------------
| **Q: 启动集群后，怎么一台虚拟机都没有起来?** 
|
|     情况一: 集群虚拟机组的虚拟机数量为0
|        请检查集群的虚拟机组的设置，虚拟机数是否大于0, 一般每次在集群的虚拟机列表页面中，关闭
| 一台虚拟机后，FIT2CLOUD会把虚拟机组的虚拟机数量减1
|
|     情况二: 没有绑定阿里云或AWS的Access Key
|
|     情况三: 阿里云Access Key的帐户余额小于100
|
|     情况四: 超过阿里云或AWS帐号允许启动的虚拟机限额。阿里云默认帐户最多能启动10个虚拟机。
|
| **Q: 如果已经绑定了阿里云或AWS的AccessKey, 并且已经用这个Key启动了多台虚拟机，多个虚拟机正在运行，这时能否更改AccessKey?**
|
|     是可以更改的，只要更改为同一个账户下的AccessKey，那么就没什么问题。
|     但是，如果更改为另外一个账户下的AccessKey, 那么用旧的AccessKey启动的虚拟机就无法从FIT2CLOUD控制台关闭了。
|     这个需要注意。
|
| **Q: 为什么FIT2CLOUD For 阿里云 创建的虚拟机是按量付费的？**
|
|    如果使用阿里云运行应用的话，FIT2CLOUD是通过调用阿里云的ECS API创建虚机的，通过ECS API创建的虚机都是按量
| 付费类型的。如果您的虚机是临时使用的(从几分钟到几天)，比如用来搭建QA测试环境等，那么按量付费是非常合适的。如果您
| 是虚拟机需要长时间运行（1个月以上），那么按量付费的虚机会比包月的虚机贵不少。我们相信阿里云在不久的将来会大幅降低
| 按量付费的价格。另一方面，FIT2CLOUD后续也会支持导入包年包月的虚拟机进行管理。
|
| **Q: 为什么使用FIT2CLOUD要先绑定阿里云的Access Key？**
|
|    当您要求FIT2CLOUD创建应用运行所需的环境即虚拟机及存储时, 需要调用阿里云的API。
|
| **Q: 为什么无法Ping通虚机?**
|     虚机组默认的安全组规则只打开SSH 22端口，为了安全起见，其他端口都是关闭了。如果想Ping通，你需要在安全组中增加ICMP规则，如下图所示。

.. image:: _static/111-openping.png

| **Q: 为什么无法通过内网访问已有包月虚机?怎么才能访问**
|     问题原因：通过FIT2CLOUD启动的按量付费机器没有加入包月机器默认安全组。FIT2CLOUD为了安全起见，只开放用户在安全组中开通的端口。
|     解决办法：如果用户想让FIT2CLOUD中启动的虚机通过内网访问包月机器，那么需要在安全组中增加ALL规则，如下图所示。

.. image:: _static/111-accessMonthPackageVM.png

| **Q: SDK有Python版本吗?**
|     有，请访问git@github.com:fit2cloud/fit2cloud-python-sdk.git获取。
|     您可以以命令行方式使用，也可以将其引入应用程序使用。

.. code:: python
    
    命令行方式使用:
    ./f2cs.py config --endpoint=<endpoint> --id=<access key id> --secret=<access key secret>
    ./f2cs.py listClusters --cluster-name=<cluster name>
    ./f2cs.py listClusterRoles --cluster-name=<cluster name>
    ./f2cs.py listClusterServers --cluster-name=<cluster name>
    ./f2cs.py listClusterVMGroupServers --cluster-name=<cluster name> --cluster-vmgroup-name=<cluster vmgroup name>
    ./f2cs.py executeScript --cluster-name=<cluster name> --cluster-vmgroup-name=<cluster vmgroup> --cluster-server-id=<cluster server id> --script-file=<script file path> 
    ./f2cs.py getScriptLog --execution-id=<execution id>
    ./f2cs.py -h | --help
    ./f2cs.py -v | --version

| **Q: HostName可以自定义?**
|    可以。FIT2CLOUD支持三种方式的hostname命名规则：默认（不更改）；采用虚机组名称+内网IP；自定义前缀+序号。
|

七: FIT2CLOUD For 亚马逊AWS 常见问题
-----------------------------------------------------
| **Q: FIT2CLOUD支持EC2-Classic吗？**
|
|      不支持。FIT2CLOUD目前只支持EC2-VPC Platform, 且FIT2CLOUD启动的虚机都在Default VPC 和Default subnet中，
|      用户如果删除DefaultVPC, 那么将会无法启动虚拟机。
|
| **Q: 为什么使用FIT2CLOUD要先绑定AWS的Access Key？**
|
|    当您要求FIT2CLOUD创建应用运行所需的环境即虚拟机及存储时, 需要调用AWS的API。
|

八: FIT2CLOUD For 青云 常见问题
-----------------------------------------------------
| **Q: FIT2CLOUD支持青云的虚拟私有网络吗？**
|
|      支持。FIT2CLOUD不仅支持，而且可以简化对青云虚拟私有网络的使用。基于青云私有网络，
| 用户可以实现管理流(基于路由器上面绑定的公有IP)和业务流(基于负载均衡器)的分离，非常安全，推荐在生产系统上使用。
|

九: FIT2CLOUD For 微软Azure 常见问题
-----------------------------------------------------
| **Q: FIT2CLOUD支持启动windows机器吗？
| **A: 目前不支持，支持Ubuntu和CentOS机器。

| **Q: 支持Azure国外的数据中心吗？
| **A: 不支持。目前只支持世纪互联运营的中国数据中心。

| **Q: FIT2CLOUD支持地缘组吗？
| **A: 支持。通过FIT2CLOUD管理同一个集群都在同一个地缘组。

.. image:: _static/azure/new_cluster.png

| **Q: FIT2CLOUD支持虚拟网络吗？
| **A: 目前不支持。

| **Q: 通过FIT2CLOUD可以起多少台虚机？
| **A: 微软Azure的限制，单个账号默认可以启动20个CPU core，如果使用最小的1个core cpu机器，可以启动20台。

| **Q: Azure使用的是负载均衡，它和其他云的安全组有什么区别？
| **A: 通过FIT2CLOUD启动的集群，属于一个Azure Cloud Service，一个CloudService只有一个PublicIP，需要通过负载均衡的方式将内部端口暴露给PublicIP:Port。

| **Q: FIT2CLOUD支持Azure下的Raid吗？
| **A: 由于微软Azure的限制，目前不支持Raid设置。

| **Q: FIT2CLOUD启动Azure虚机耗时很长？
| **A: 由于微软Azure安全性的限制，启动机器不能并发，所以会有些慢，但却能100%保证正确启动。

| **Q: FIT2CLOUD创建Azure虚机的磁盘如何设置？
| **A: FIT2CLOUD创建的磁盘全部都在Azure云的Storage下，默认名称是"fit2cloud<用户ID><地缘组>"


