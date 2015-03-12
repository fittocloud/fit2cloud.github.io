---
layout: post
title: 云管理工具：用户有哪些选择？
---

{{ page.title }}
================

<p class="meta">2014/10/27 - 杭州 By 阮志敏</p>

当用户的虚机达到一定数量时，云管理工具就从非刚性需求变成刚性需求。因为随着虚机数量的增长，会出现越来越多的问题，比如

* 100台VM的密钥和密码怎么管理？
* 如何保证安全组是否只开放必要端口？
* 如何一键创建一个系统所需的所有资源，并完成配置？
* 如何给1000 VM同时打补丁？
* 如何给100 VM进行应用升级且服务不中断？
* 如何支持一周内部署升级100次？
* 如何保证测试环境和生产环境尽量一致？
* 系统能否能自动伸缩以节省成本？
* 如何实现统一监控和告警？
* 如何进行跨可用区、数据中心容灾？

那么，在构建自己的云管理解决方案时，用户有哪些选择呢？

<h2>一、自己构建</h2>

最典型的例子是Netflix。Netflix是构建在AWS上的最大Service，其使用的EC2实例数在10k数量级。Netflix认为其将服务迁移到AWS上后，其技术的核心工作是在AWS之上构建一个PaaS层。目前，这个PaaS中的大部分组件已经被Netflix开源了，在这当中包括最重要的云管理和部署工具：[Asgard](http://techblog.netflix.com/2012/06/asgard-web-based-cloud-management-and.html)(Web-based Cloud Management and Deployment)。

![Asgard](/images/asgard.gif =450x)

Netflix是先行者，它当时不得不自己构建工具，因为市场上没有能满足它需求的工具。同时Netflix成功的离不开其优秀的工程团队，及其在研发上面的持续投入。对于一般用户，自己构建必须考虑如下问题：

* 研发人员必须对IaaS非常熟悉，并且需要投入大量研发资源
* IaaS的升级非常频繁，如何保证您自己构建的工具能够支持这些新特性？
* IaaS API可能发生变化，您自己构建的工具能够必须即时更新

<h2>二、采用IaaS厂商的部署和管理工具</h2>

AWS除了管理控制台、CLI、SDK外，还提供了三个部署和管理相关服务：CloudFormation, OpsWorks, Beanstalk。其中，CloudFormation提供的功能是Template Provision; OpsWorks的核心功能是Application Automation，即应用生命周期管理；Beanstalk则可以帮助用户快速部署Web应用(Application Container)。

![AWS Deployment Options](/images/aws-deployment-options.png =450x)

采用IaaS厂商的部署和管理工具的最大风险是被Vendor Lock-in。如果企业的云策略是混合云模式，那么这种方案未必是最好选择。

<h2>三、采用国外的第三方云管理工具</h2>

RightScale是这个领域的标杆企业。Zynga, 其典型用户之一，就是通过RightScale来统一管理其在AWS和私有云(Cloudstack)上面的资源。RightScale支持的公有云、私有云，还支持传统虚机化环境，如下图所示：

![Rightscale](/images/rightscale.png =450x)

国外的第三方云管理工具的问题是其目前不支持中国本土公有云，比如阿里云、青云等。

<h2>四、FIT2CLOUD有什么特点？</h2>

FIT2CLOUD是一个建立在IaaS之上的云管理及DevOps协作平台，帮助企业提高云成熟度，实现云资源创建自动化、服务器自动化、混合云管理、应用部署升级自动化和持续交付。基于FIT2CLOUD，企业可以实现应用全生命周期的自动化管理，打通从代码到服务的转化通道，实现云应用的持续交付和自动化运维。

FIT2CLOUD的第一个特点是提供一体化的解决方案，包括：

   * 一键创建应用系统所需的各种资源(Template Provision)。在FIT2CLOUD中，一个应用系统对应于一个集群，一个集群包括若干个虚机组。比如一个电商系统集群包括web虚机组，database虚机组，cache虚机组，suggestion虚机组等。用户可以定义每个虚机组下的虚机数量，大小，数据盘大小等。
   * 虚机的自动安装和配置(Server Automation)。在FIT2CLOUD中，我们给虚机定义了一些事件，比如initialize, install, start, reboot等，用户可以为这些事件编写处理脚本。
   * 代码部署(Application Automation)。用户可以编写代码部署脚本，这些脚本将在虚机启动和配置完毕后执行。另外，用户也可以通过执行脚本来部署代码
   * 自动伸缩功能(Auto-scaling)。FIT2CLOUD支持基于时间的伸缩和基于监控数据的监控。监控数据由FIT2CLOUD Agent采集。
   * 执行脚本功能(Scripting Egnine)。用户可以同时在一个或者多个虚机上执行脚本。比如前阵子发生的openssl漏洞，用户可以快速地在所有虚机上运行yum update openssl脚本来修复。
   * 统一监控和告警(Monitring & Alert)。FIT2CLOUD提供基础的告警服务，当虚机的CPU/Disk/RAM使用率超过一定数值，系统将会告警。

![FIT2CLOUD](/images/full-stack-automation.jpg =450x)

FIT2CLOU的第二个特点是可以支持国内本土公有云，比如阿里云和青云QingCloud。未来，FIT2CLOUD将支持更多的公有云(Azure)和私有云(如Openstack/Cloudstack)。FIT2CLOUD将致力于解决跨平台云管理问题，让企业能够轻松部署和管理跨公有云、私有云和混合云的重要商业应用，为云基础设施和应用提供配置、监控、自动化和管理服务。
