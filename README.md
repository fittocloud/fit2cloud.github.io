FIT2CLOUD Docs & BLOG
============

这里是FIT2CLOUD文档和博客代码，采用基于Ruby的middleman（类似jekyll）搭建。

网站的配置文件在`config.erb`，文档/博客语法为Markdown，source/layouts和source/styles文件夹中存放
网站的布局和样式文件，如非必要，可不用修改。

* * *

准备
--------

* Git clone 当前仓库到本地
* 安装Ruby环境([RVM](http://rvm.io/))
```
  rvm install ruby-2.1.0
  rvm list
  rvm use ruby-2.1.0
```
* 在工程根目录执行 `bundle install` 如果命令不存在尝试`gem install bundle`
* 执行本地调试 `middleman server` PS: 我已经打开liveload，直接改写MD文件看效果
* 本地调试端口 [localhost:4567](http://localhost:4567)

写文档
--------

文档目录在source/docs下，可以参考写好的例子。

注意在每个文档开头写入alias，代表通过.md文件渲染成.html文件的文件名。

```
111.md
---
alias: test
---
在其他md文件或者html文件中，就可以用 test.html
```

严格按照文档.md在source/docs目录，图片在source/images的原则。

在线部署
-------

* `middleman build` 生成网站的静态文件，存入build/
* 生成的静态文件按需放在gh-pages或者Host上
* middleman支持s3 sync，已经配置了build完成后同步到S3

