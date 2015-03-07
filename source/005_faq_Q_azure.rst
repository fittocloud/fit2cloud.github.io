FIT2CLOUD(Azure版) 常见问题
================================================================

| **Q: FIT2CLOUD支持启动windows机器吗？**
| **A**: 目前不支持，支持Ubuntu和CentOS机器。

| **Q: 支持Azure国外的数据中心吗？**
| **A**: 不支持。目前只支持世纪互联运营的中国数据中心。

| **Q: FIT2CLOUD支持地缘组吗？**
| **A**: 支持。通过FIT2CLOUD管理同一个集群都在同一个地缘组。

.. image:: _static/azure/new_cluster.png

| **Q: FIT2CLOUD支持虚拟网络吗？**
| **A**: 支持。用户在创建集群的时候,可以在部署方式中选择虚拟网络和子网。

| **Q: 通过FIT2CLOUD可以起多少台虚机？**
| **A**: 微软Azure的限制，单个账号默认可以启动20个CPU core，如果使用最小的1个core cpu机器，可以启动20台。

| **Q: Azure使用的是负载均衡，它和其他云的安全组有什么区别？**
| **A**: 通过FIT2CLOUD启动的集群，属于一个Azure Cloud Service，一个CloudService只有一个PublicIP，需要通过负载均衡的方式将内部端口暴露给PublicIP:Port。

| **Q: Azure负载均衡，有什么限制？**
| **A**: 由于微软会自动给集群中的虚机添加内部端口转发到PublicIP 60000+端口，所以不建议设置转发外部60000+以上端口。

| **Q: FIT2CLOUD支持Azure下的Raid吗？**
| **A**: 由于微软Azure的限制，目前不支持Raid设置。

| **Q: FIT2CLOUD启动Azure虚机耗时很长？**
| **A**: 由于微软Azure安全性的限制，启动机器不能并发，所以会有些慢，但却能100%保证正确启动。

| **Q: FIT2CLOUD创建Azure虚机的磁盘如何设置？**
| **A**: FIT2CLOUD创建的磁盘全部都在Azure云的Storage下，默认名称是"fit2cloud<用户ID><地缘组>"

| **Q: 虚机组绑定负载均衡，提示某端口已经被占用？**
| **A**: 有可能虚机组的集群类型下已经有别的虚机组绑定了该端口，微软限制同一集群下同一端口的重复绑定，您可以新建或者切换一下虚机组的集群类型。

| **Q: CentOS的SELinux状态是什么？
| **A**: 微软的限制CentOS的SELinux状态为forced，我们在保证网络服务可用的前提下，设置SELinux状态为permissive。如果有需要，执行setenforce 1恢复默认forced设置，但这有可能导致部分服务异常，httpd等。
