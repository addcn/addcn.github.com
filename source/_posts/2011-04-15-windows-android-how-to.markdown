---
layout: post
title: "Windows下搭建Android开发环境"
date: 2011-04-15 18:43
comments: true
tags: android
categories: develop
---

旧博文备份[http://addcn.blogbus.com/logs/119738531.html](http://addcn.blogbus.com/logs/119738531.html)


**一、安装**

**1、jdk（非jre）下载**

[http://java.sun.com/javase/downloads/index.jsp](http://java.sun.com/javase/downloads/index.jsp)

默认安装在`C:\Program Files\Java\jdk1.6.0_24`

**2、eclipse下载**

（1）[http://www.oyksoft.com/soft/1250.html](http://www.oyksoft.com/soft/1250.html)

下载解压在`D:\Program Files\eclipse`

（2）添加环境变量

JAVA_HOME `C:\Program Files\Java\jdk1.6.0_24`

CLASSPATH `.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar`

PATH `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;D:\Program Files\Android\android-sdk-windows\tools`


**3、Android SDK**

[http://dl.google.com/android/android-sdk_r08-windows.zip](http://dl.google.com/android/android-sdk_r08-windows.zip)

解压在`D:\Program Files\Android\android-sdk-windows`

（1）安装android开发插件(ADT)

help->Install New SoftWare
Add
Name:Android
Location:https://dl-ssl.google.com/android/eclipse/

点击Yes按钮，最后重启Eclipse

（2）配置Android SDK

点击菜单window->preferences

选择android SDK解压后的目录

我这里只选了SDK 2.1 和samples for api 7 , 自己可以任意自定义，确定后，选择install按钮

（3）新建AVD(android vitural device)

android sdk and avd manager,选中Vitural Devices 在点击New按钮

AVD2.2

（4）HelloAndroid项目
<pre class="terminal"><code>HelloAndroid
com.helloandroid
HelloAndroid
8
Run as -> Run Configuration 选择AVD2.2
</code></pre>


**二、参考文章**

jdk环境变量配置

- [http://www.cnblogs.com/nicholas_f/articles/1494073.html](http://www.cnblogs.com/nicholas_f/articles/1494073.html)

Android开发环境搭建

- [http://yidingdian.com/?p=13](http://yidingdian.com/?p=13)
- [http://mobile.51cto.com/android-227548.htm](http://mobile.51cto.com/android-227548.htm)
- [http://www.cnblogs.com/Jackeyzhang/archive/2010/04/02/1703068.html](http://www.cnblogs.com/Jackeyzhang/archive/2010/04/02/1703068.html)

