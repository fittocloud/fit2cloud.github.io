阿里云：自定义监控功能指南
====================================

一: 设置自定义监控脚本（规则）
-------------------------------------
| 举例： 
|    1. java进程数：ps -ef | grep java | wc -l
|    2. 端口是否存在: netstat -ntpl| grep 8080 | wc -l
|    3. file handlers总数： lsof | wc -l
|    4. mysql thread connected: mysqladmin -uroot -pfit2cloud extended-status | grep Threads_connected | awk '{ print $4}'
