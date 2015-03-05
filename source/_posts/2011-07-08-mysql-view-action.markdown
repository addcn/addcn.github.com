---
layout: post
title: "mysql视图表创建与修改"
date: 2011-07-08 18:43
comments: true
tags: mysql
categories: develop
---

旧博文备份[http://blog.uedao.com/blog/?p=20](http://blog.uedao.com/blog/?p=20)


**1、创建**
<pre class="terminal"><code>CREATE&nbsp;[OR REPLACE] [&lt;algorithm attributes&gt;] VIEW [database.]&lt; name&gt; [(&lt;columns&gt;)]<br />
AS&nbsp;&lt;SELECT&nbsp;statement&gt;&nbsp;[&lt;check options&gt;]
</code></pre>

例子：
<pre class="terminal"><code>CREATE VIEW `view_articles`
AS
SELECT
    a.id AS id,
    a.title AS title,
    a.content AS content,
    t.name AS tagname,
    u.firstname AS "username"
FROM `articles` a
    LEFT JOIN `tags` t
        ON a.tag_id = t.id
    LEFT JOIN `users` u
        ON a.user_id = u.id
ORDER BY a.posttime DESC;
</code></pre>

**2、修改**

<pre class="terminal"><code>ALTER&nbsp;[&lt;algorithm attributes&gt;] VIEW [&lt;database&gt;.]&lt; name&gt; [(&lt;columns&gt;)]<br />
AS&lt;SELECT&nbsp;statement&gt;&nbsp;[&lt;check options&gt;]
</code></pre>

例子：

<pre class="terminal"><code>ALTER VIEW `view_articles`
AS
SELECT
    a.id AS id,
    a.title AS title,
    a.content AS content,
    a.posttime AS posttime,
    t.name AS tagname,
    CONCAT(u.firstname,' ',u.lastname) AS "username"
FROM `articles` a
    LEFT JOIN `tags` t
        ON a.tag_id = t.id
    LEFT JOIN `users` u
        ON a.user_id = u.id
ORDER BY a.posttime DESC;
</code></pre>

修改已经建立好的视图表，最简单的方法就是在phpMyAdmin导出视图表的SQL，然后修改开头的“CREATE”（后面的
<pre class="terminal"><code>ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`&nbsp;SQL SECURITY DEFINER</code></pre>等不用管，保留它）为`ALTER`，运行语句即可。

**参考文章：**

[http://database.51cto.com/art/201005/200526.htm](http://database.51cto.com/art/201005/200526.htm)
[http://www.sqlinfo.net/mysql/mysql_VIEWS_the_basics.php](http://www.sqlinfo.net/mysql/mysql_VIEWS_the_basics.php)
[http://www.java2s.com/Tutorial/MySQL/0180__View/Catalog0180__View.htm](http://www.java2s.com/Tutorial/MySQL/0180__View/Catalog0180__View.htm)


