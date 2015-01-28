监控和告警
===================================================
|
|    这里我们以在阿里云上建立一个wordpress网站为例, 为wordpress集群设置监控告警。
|
|    第一步: 首先在页面最上方一行点击 "集群" 进入集群列表页面;

.. image:: _static/010-volume-GoToClusterList.png

|  第二步: 在集群页面找到wordpress-qingdao集群,然后点击集群所在行的 "虚拟机组" 进入虚
| 拟机组列表页面;

.. image:: _static/010-volume-GoToClusterRoleList.png

|  第三步: 在集群虚拟机组页面, 找到wordpress-mysql虚拟机组，并点击这个虚拟机组的
| 所在行最右边一列的 "操作", 在操作的下来菜单中点击 "告警设置" 进入告警设置页面;

.. image:: _static/040-alert-SelectActionsAndSetAlert.png

|  第四步: 在告警设置设置页面, 点击"新建"进入"修改告警设置"页面
|  a) 告警项目选择"CPU使用率"
|  b) 持续时长选择"15分钟"
|  c) 统计方式选择"平均值"
|  d) 比较方式选择"大于"
|  e) 警告界限填写 "70"
|  f) 错误界限填写 "90"

.. image:: _static/040-alert-Common.png

|  第五步: 在告警设置页面， 点击 "保存"
|
|  当页面提示成功保存告警设置后,可以看到在告警设置列表里列出了刚刚添加的告警设置

.. image:: _static/040-alert-GoToAlertList.png