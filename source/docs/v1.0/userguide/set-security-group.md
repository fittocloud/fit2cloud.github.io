---
alias: set_security_group.html
---

## 设置安全组

这里我们仍然以在阿里云上建立一个wordpress网站为例, 为wordpress web虚拟机组的虚拟机设置安全组，开放80端口。

**第一步: 首先在页面最上方一行点击 "虚拟机组" 进入虚拟机组列表页面;**

![alt](/images/docs/userguide/020-SecurityGroup-ClickVMGroup.png)

**第二步: 在虚拟机组页面找到wordpress-web虚拟机组,然后点击虚拟机组所在行的 "操作",在 "操作" 的下拉菜单中点击"设置安全组规则" 进入安全组设置页面;**

![alt](/images/docs/userguide/020-SecurityGroup-ClickSetSecutiryGroup.png)

**第三步: 在安全组设置页面, 点击 "新建" 进入新建安全规则页面, 在新建安全规则页面:**

*  a) 协议 选择 "tcp"
*  b) 起始端口 填写 80
*  c) 截止端口 填写 80
*  d) CIDR IP保持默认 "0.0.0.0/0"

![alt](/images/docs/userguide/020-SecurityGroup-Add80Rule.png)

**第四步: 在安全组设置页面，点击 "保存"。**

```sql
  注1: 阿里云启动虚拟机后默认的端口是全部打开的，为了安全性，FIT2CLOUD做了一些改进，如果
  没有设置安全组规则，则通过FIT2CLOUD启动的虚拟机端口除22端口外全部对公网关闭，如果需要打开端口，
  需要设置虚拟机组的安全组规则。
 
  注2: FIT2CLOUD里，默认一个集群内的各个虚拟机的端口是互相开放的，即一个集群内的各个虚拟机可以互相
  访问彼此的端口。
```