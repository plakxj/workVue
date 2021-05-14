#这是是用来学习的，一堆垃圾，乱死了
```

git config --global user.name "angleyan"
git config --global user.email "angleyan0510@163.com"

mkdir workVue
cd workVue
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/angleyan0510/workVue.git
git push -u origin master

cd existing_git_repo
git remote add origin https://gitee.com/angleyan0510/workVue.git
git push -u origin master


# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

ssh -T git@github.com

Hi yourname! You've successfully authenticated, but GitHub does not provide shell access.

ssh -T git@gitee.com
