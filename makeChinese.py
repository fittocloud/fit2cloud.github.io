# coding=utf-8
import commands

cmd="sed -i  \"s/Page contents/内容/g\" *.html"
output=commands.getoutput(cmd)
cmd="sed -i  \"s/Next page/下一页/g\" *.html"
output=commands.getoutput(cmd)
cmd="sed -i  \"s/Previous page/上一页/g\" *.html"
output=commands.getoutput(cmd)
cmd="sed -i  \"s/For 阿里云 1.0//g\" *.html"
output=commands.getoutput(cmd)
cmd="sed -i  \"s/FIT2CLOUD 1.0 文档/Fit2Cloud在线文档 \| 云管理及DevOps协作平台/g\" *.html"
output=commands.getoutput(cmd)
cmd="sed -i  \"s/转向/Go/g\" *.html"
output=commands.getoutput(cmd)
#cmd="sed -i '' \"s/sidebar/目录/g\" *.html"
#output=commands.getoutput(cmd)
#print output
