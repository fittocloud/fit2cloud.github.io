FIT2CLOUD For AWS 常见问题
================================================================

| **Q: FIT2CLOUD支持EC2-Classic吗？**
|
|      不支持。FIT2CLOUD目前只支持EC2-VPC Platform, 且FIT2CLOUD启动的虚机都在Default VPC 和Default subnet中，
|      用户如果删除DefaultVPC, 那么将会无法启动虚拟机。
|
| **Q: 为什么使用FIT2CLOUD要先绑定AWS的Access Key？**
|
|    当您要求FIT2CLOUD创建应用运行所需的环境即虚拟机及存储时, 需要调用AWS的API。
|