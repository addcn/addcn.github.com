---
layout: post
title: "mysql经常使用的10个技巧"
date: 2011-06-29 18:43
comments: true
tags: mysql
categories: develop
---

旧博文备份[http://blog.uedao.com/blog/?p=5](http://blog.uedao.com/blog/?p=5)


**1、shell执行sql语句**
<pre class="terminal"><code>/usr/local/mysql/bin/mysql -h192.168.1.36 -uaddcn -p'password' -e "use  dev; SELECT * FROM config LIMIT 0,10;"
</code></pre>

**2、查看执行线程**
<pre class="terminal"><code>/usr/local/mysql/bin/mysqladmin -uaddcn -p'password'  pr
/usr/local/mysql/bin/mysqladmin -uaddcn -p'password' processlist | wc -l  #连接数
</code></pre>

**3、kill锁表线程**
<pre class="terminal"><code>/usr/local/mysql/bin/mysql -h192.168.1.36 -uaddcn -p'password'
mysql> show processlist;
mysql> kill 102609;
</code></pre>

**4、主从同步**

从机执行

<pre class="terminal"><code>
/usr/local/mysql/bin/mysql -h192.168.1.36 -uaddcn -p'password'
mysql> show slave status\G;
mysql> stop slave;
mysql> start slave;
</code></pre>

**5、数据库备份还原**

备份

<pre class="terminal"><code>/usr/local/mysql/bin/mysqldump -h192.168.1.36 -uaddcn -p'password' --opt  dev article > /home/addcn/backup/sql/dev_article_20110625.sql;
/usr/local/mysql/bin/mysqldump -h192.168.1.36 -uaddcn -p'password' --opt  -l --default-character-set=latin1 --skip-set-charset dev >  /home/addcn/backup/sql/dev_`date +%d`.sql;
/usr/local/mysql/bin/mysqldump -h192.168.1.36 -uaddcn -p'password' --opt  -l --default-character-set=latin1 --skip-set-charset dev article >  /home/addcn/backup/sql/dev_article_`date +%d`.sql;
</code></pre>

还原

<pre class="terminal"><code>/usr/local/mysql/bin/mysql -h192.168.1.36 -uaddcn -p'password'
mysql> show databases;
mysql> create database dev;
mysql> drop database dev;
mysql> use dev;
mysql> SET NAMES utf8;
mysql> source /home/addcn/backup/sql/dev_article_20110625.sql;
</code></pre>

**6、用户管理**
<pre class="terminal"><code>GRANT ALL PRIVILEGES ON *.* TO 'addcn'@'localhost' IDENTIFIED BY  'password' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON dev.* TO 'addcn'@'%' IDENTIFIED BY 'password'  WITH GRANT OPTION;
SET PASSWORD FOR 'addcn'@'localhost' = password('password');
SET PASSWORD FOR 'addcn'@'%' = password('password');
FLUSH PRIVILEGES;
</code></pre>

**7、sql复制记录**
<pre class="terminal"><code>INSERT INTO `table` SELECT * FROM `table1` WHERE id=1; #无主键
INSERT INTO `table`(`a`,`b`,`c`) SELECT `a`,`b`,`c` FROM `table1` WHERE  id=1 AND posttime<=UNIX_TIMESTAMP('2001-03-26 00:00:00'); #有主键写列
</code></pre>

**8、根据两关联表更新其中一表某字段**
<pre class="terminal"><code>UPDATE `table` SET a = !a WHERE id = 1; #布尔值取反
UPDATE `table1`,`table2` SET `table1`.id = `table2`.id WHERE  `table1`.id=`table2`.id; #更新
</code></pre>

**9、if函数**
<pre class="terminal"><code>UPDATE `users` SET money=IF(money>=$monty,money-{$monty},money) WHERE user_id=1001;
</code></pre>

扣费结合 if(mysql_affected_rows()) do_success_action(); 可防止INT字段超最大值而变很大数

**10、其它**
<pre class="terminal"><code>EXPLAIN SELECT * FROM `article` FORCE INDEX (user_id) WHERE 1; #分析语句
SELECT * FROM `article` FORCE INDEX (user_id) WHERE 1; #强制索引
UPDATE LOW_PRIORITY `article` SET browsenum=browsenum+1 WHERE id='1001'; #滞后更新
</code></pre>



