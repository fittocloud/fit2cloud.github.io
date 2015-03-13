---
title: FIT2CLOUD正式支持微软Azure云，帮助企业部署和管理基于Linux/开源技术栈的应用
---

<p class="meta">2014/12/07 - 北京 By 阮志敏</p>

FIT2CLOUD是一个建立在IaaS之上的云管理及DevOps协作平台，帮助企业提高云成熟度，实现云资源创建自动化、服务器自动化、混合云管理、应用部署升级自动化和持续交付。基于FIT2CLOUD，企业可以实现应用全生命周期的自动化管理，打通从代码到服务的转化通道，实现云应用的持续交付和自动化运维。

今天，我们正式完成了对国内微软Azure云(由世纪互联运营)的支持。我们的在线服务提供免费套餐，用户可以免费管理和部署10个虚机，欢迎大家[评测](http://fit2cloud.com/)。请参考我们的快速入门指南：[十分钟内部署Wordpress应用(包含2个Web虚机和1个数据库虚机)](http://docs.fit2cloud.com/azure_get_started.html)。

在这里，我们想给大家分享FIT2CLOUD支持Azure云背后的一些故事，及FIT2CLOUD可以帮助Azure用户做些什么。

<h2>一、我们为什么要支持微软Azure云？</h2>

微软Azure云是第一个在国内正式商用的国际水准的公有云，有明确的SLA承诺。过去两年来，Azure的两个转变给生态圈合作伙伴提供了非常大的创新空间。

<h3>1) 从PaaS服务扩展到IaaS服务</h3>

微软最初是将Azure作为一款平台即服务（PaaS）推出的，专注于将全新开发的应用带入云中，但是微软随后向它的平台中添加了基础设施即服务（IaaS）能力。用户借助IaaS可以部署Linux应用，并运行在Azure的虚拟机中，这大大扩大了Azure的使用范围。

2014年，微软Windows Azure为在IaaS和PaaS两个领域均处于Gartner“领导者”象限的公有云服务提供商。

<h3>2) 从微软技术栈扩展到开源技术栈</h3>

微软Azure Cloud Service(PaaS)提供了完全自动化、适用于微软技术栈的一体化PaaS服务，其与微软现有工具的高度整合与兼容。相比之下，如果用户要在Azure IaaS上面部署Linux/开源技术栈应用，则没有那么方便，那么用户需要自己安装和管理扩展等。

2014年初，微软开放技术有限公司宣布其中国子公司正式成立，积极拥抱开源技术栈，帮助开源软件在Windows Azure等微软平台上的顺利部署和运行。这为生态链伙伴提供了很多空间，FIT2CLOUD提供的是云管理及自动化工具，帮助用户更好地在Azure上面部署基于Linux/开源技术栈的应用。

<h2>二、微软Azure IaaS服务的三个特点</h2>


<h3>1) API非常严谨</h3>
	
AWS已经停止了对SOAP API的支持。微软Azure IaaS API仍然是基于SOAP协议的，虽然相对比较重，但是很严谨。对于同个云服务下面的虚机的变更操作，Azure不支持并发，一次只能调用一次API，否则会报[ConflictError : Windows Azure is currently performing an operation on this deployment that requires exclusive access]错误。

<h3>2) 按分钟计费</h3>

Azure的计费方式也很简单，没有包年包月一说，用户不会为哪些机器该续费、哪些机器不该续费发愁。Azure计费的时间单位是分钟，这对云上面的开发和测试来说，会节省很多费用。我们在两个月的开发过程中，总共花费不到50块钱。微软Azure提供的账单是非常清晰的,清晰的说明哪种类型的虚机用了多少时间。

<h3>3) 不仅仅是IaaS服务</h3>

Azure先做PaaS，之后提供IaaS服务，因此其IaaS服务(Azure Virtual Machine)中仍然可以发现PaaS的影子。Azure的虚机是位于云服务(Cloud Service)和部署(Deployment)之下。云服务(Cloud Service)提供了另一种维度的管理，把同个应用系统的虚机关联到一起，并提供端口转发、负载均衡、可用性集和自动伸缩服务服务。这极大了简化了应用的一些部署工作。
 
<h2>三、FIT2CLOUD：帮助用户在Azure上管理和部署基于Linux/开源技术栈的应用</h2>

Fit2Cloud提倡的IaaS(Azure Virtual Machine)+DevOps(FIT2CLOUD)开发模式可以充分利用IaaS的可编程特性，实现应用自动化部署和运维。我们提供适用于Linux/开源技术栈的一体化PaaS服务，帮助用户自动化部署和运维基于Linux/开源技术栈的应用，如下图所示。

![FIT2CLOUD一体化PaaS解决方案](/images/blog/fit2cloud-azure-solution.jpg =600x)

这个相当于于Azure为微软技术栈提供的PaaS服务，包括如下功能：

<h3>1) 一键部署应用系统所需的各种资源</h3>

FIT2CLOUD是从应用角度来管理资源。在FIT2CLOUD中，一个应用系统对应于一个集群，一个集群包括若干个虚机组。比如一个电商系统集群包括web虚机组，数据库虚机组，数据缓存虚机组，推荐系统虚机组等。用户可以定义每个虚机组下的虚机数量，大小，数据盘大小、负载均衡集等。集群启动后，FIT2CLOUD会自动创建这些资源，并设置这些资源之间的关联关系。

<h3>2) 虚机服务器自动安装、配置和应用部署</h3>

在FIT2CLOUD中，我们给虚机定义了一些事件，比如initialize, install, start, reboot等，用户可以为这些事件编写处理脚本，完成虚机启动后软件安装、配置和代码部署。

<h3>3) 自动化运维</h3>

FIT2CLOUD还提供了很多功能和工具帮助用户实现自动化运维，比如：

   * 自动伸缩功能(auto-scaling)。FIT2CLOUD支持基于时间的伸缩和基于监控数据的监控。监控数据由FIT2CLOUD Agent采集。
   * 执行脚本功能。用户可以同时在一个或者多个虚机上执行脚本。比如前阵子发生的openssl漏洞，用户可以快速地在所有虚机上运行yum update openssl脚本来修复。
   * 统一监控和告警。FIT2CLOUD提供基础的告警服务，当虚机的CPU/Disk/RAM使用率超过一定数值，系统将会告警。

<h3>4) 跨云迁移</h3>

FIT2CLOUD还支持国内其他主流公有云，比如阿里云等，基于FIT2CLOUD，用户可以方面将系统在不同云之间进行迁移，FIT2CLOUD抽象掉了不同IaaS之间的差异，给用户提供一致的管理和部署工具。

<h2>四、我们的下一步计划</h2>

我们下一步将帮助用户在Azure上部署容器管理服务，类似GCE上面的Google Container Engine容器管理服务。基于FIT2CLOUD，企业可以通过在Azure上一键部署Kubernetes集群，并实现对这个集群的自动化运维和管理，如监控、监控检查及自动伸缩等。企业方的开发人员可以在Kubernetes上部署Docker container应用，如下图所示：

![FIT2CLOUD和Docker](/images/blog/fit2cloud-docker.jpg =600x)
