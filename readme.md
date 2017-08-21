1 安装 git

2 自报家门
     git config --global user.name "Your Name"
     git config --global user.email "email@example.com"
3 创建本地git仓库
    1）创建一个仓库文件夹
    2）使用cd 命令 进入仓库文件夹，并使用 git init 初始化本地仓库(如果成功会多出一个.git的文件夹)
    3) 在本地仓库完成本地开发
    4）提交到本地仓库
        a）git add *(从工作区添加到暂存区)
        b) git commit -m "说明" (从暂存区提交到本地仓库)
4 创建SSH Key
    1）在git bash 中执行 ssh-keygen -t rsa -C "youremail@example.com"（执行命令期间所有的回复回车就可以了）
    2）命令成功以后在用户主目录下会新建.ssh文件夹，进入.ssh用文本编辑器打开id_rsa.pub文件
    3）复制文件中的内容，进入https://github.com/settings/keys(需要先登录github)，点击New SSH key,填写title，
    在Key中粘贴复制的内容，点击 Add SSH key。
    4）在本地 git bash 中测试 ：ssh git@github.com。
5 在github上创建远程仓库
    https://github.com/new 进入本地址 新建远程仓库，新建后会得到一个仓库地址(ssh 地址  不是  https地址)。
6 推送本地仓库到远程
    git remote add origin git@github.com:ghcode/praiseButton.git
    git push -u origin master


