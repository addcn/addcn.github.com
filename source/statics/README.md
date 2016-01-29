blog.uedao.com
==================================================


##使用帮助


- 版本检出
 `git clone https://github.com/addcn/addcn.github.com.git`

- 配置环境


    - `git checkout source` #source分支时写作内容，master是hexo g生成的静态内容

    - `cd ..` #返回hexo初始目录

    - `hexo init addcn.github.com` #hexo初始，会创建相关文件

    - `cd addcn.github.com` #以下所有操作在该目录下进行

    - `npm install` #安装package.json文件中配置的dependencies模块

    - `git status`

    复制addcn.github.com根目录的CNAME、favicon.ico等文件到 source/_posts/***，避免`hexo g`生成丢失

- 开写文章
	
	创建文章`source/_posts/***.markdown`

- 提交更新

    - `hexo g` #markdown生成静态文件在`public`

    - `hexo s` #本地预览

    - `hexo d` #提交public内容到github

    - `git push` #提交source源文件入github的source分支




