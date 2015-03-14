---
alias: set_auto_scale.html
---

## 自动伸缩

这里我们以在阿里云上建立一个wordpress网站为例, 设置wordpress-web自动伸缩。

### 一: 基于时间的自动伸缩

**第一步: 首先在页面最上方一行点击 "集群" 进入集群列表页面;**

![alt](/images/docs/userguide/010-volume-GoToClusterList.png)

**第二步: 在集群页面找到wordpress-qingdao集群,然后点击集群所在行的 "虚拟机组" 进入虚拟机组列表页面;**

![alt](/images/docs/userguide/010-volume-GoToClusterRoleList.png)

**第三步: 在集群虚拟机组页面中找到wordpress-mysql虚拟机组，并点击这个虚拟机组的所在行最右边一列的 "操作", 在操作的下来菜单中点击 "自动伸缩设置" 进入自动伸缩设置页面;**

![alt](/images/docs/userguide/060-autoscale-SelectActionsAndSetAutoscale.png)

**第四步: 在自动伸缩设置页面 (如下图示)**

* a) 打开自动伸缩开关，在自动伸缩开关列表中选择"开启"
* b) 伸缩方式选择 "定时伸缩"
* c) Scale Out定时器 选择 "每天任务", 时间选择 "08:00"
* d) 虚机扩展到 选择 "2"
* e) Scale In定时器 选择 "每天任务", 时间选择 "23:00"
* f) 虚机缩减到 选择 "1"

![alt](/images/docs/userguide/060-autoscale-CronCommon.png)

**第五步: 在自动伸缩设置页面， 点击 "保存"**

### 二: 基于监控指标的自动伸缩

**第一步: 首先在页面最上方一行点击 "集群" 进入集群列表页面;**

![alt](/images/docs/userguide/010-volume-GoToClusterList.png)

**第二步: 在集群页面找到wordpress-qingdao集群,然后点击集群所在行的 "虚拟机组" 进入虚拟机组列表页面;**

![alt](/images/docs/userguide/010-volume-GoToClusterRoleList.png)

**第三步: 在集群虚拟机组页面中找到wordpress-mysql虚拟机组，并点击这个虚拟机组的所在行最右边一列的 "操作", 在操作的下来菜单中点击 "自动伸缩设置" 进入自动伸缩设置页面;**

![alt](/images/docs/userguide/060-autoscale-SelectActionsAndSetAutoscale.png)

**第四步: 在自动伸缩设置页面 (如下图示)**

![alt](/images/docs/userguide/060-autoscale-MetricCommon.png)

* a) 打开自动伸缩开关，在自动伸缩开关列表中选择"打开"
* b) 伸缩方式  选择 "情境伸缩"
* c) 虚机数下限 选择 "1"
* d) 虚机数下限 选择 "3"
* e) 虚机增加条件 选择 "添加", 在添加条件页面中设置后并保存;
  * e1) 触发条件 选择 "CPU使用率"
  * e2) 统计方式 选择 "平均值"
  * e3) 比较方式 选择 "大于"
  * e4) 界限值 填写 "90"
  * e5) 监测周期 填写 "5" 分钟
  * e6) 添加虚拟机数量 填写 "1" 

![alt](/images/docs/userguide/060-autoscale-SetIncreaseVMCondition.png)

* f) 虚机减少条件 选择 "添加", 在添加条件页面中设置后并保存;
  * f1) 触发条件 选择 "CPU使用率"
  * f2) 统计方式 选择 "平均值"
  * f3) 比较方式 选择 "小于"
  * f4) 界限值 填写 "70"
  * f5) 监测周期 填写 "5" 分钟
  * f6) 删除虚拟机数量 填写 "1" 

![alt](/images/docs/userguide/060-autoscale-SetDecreaseVMCondition.png)

* g) 伸缩间隔时间 填写 "5"

**第五步: 在自动伸缩设置页面， 点击 "保存"**

![alt](/images/docs/userguide/060-autoscale-MetricCommonComplete.png)

```sql
	注: 当同时设置了"虚机增加条件"和"虚机减少条件"时,若两个条件有重叠部分,则优先选择"虚机增加条件"。
```