#!/bin/bash

make html
cp -R build/html/* .
sed -i "s/页面内容/页面内容/g" `grep "页面内容" -rl .`
sed -i "s/下一页/下一页/g" `grep "下一页" -rl .`
sed -i "s/上一页/上一页/g" `grep "上一页" -rl .`
sed -i "s/菜单/菜单/g" `grep "菜单" -rl .`
