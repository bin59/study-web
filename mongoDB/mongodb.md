　

启动\关闭
net start MongoDB
net stop MongoDB

登录
mongo

创建有权限的用户

use admin
db.createUser(
{ 
　　user: "root", #这个root可以随便写
　　pwd: "123", 
　　roles: [ { role: "root", db: "admin" } ] #权限，role是root说明是管理员，
}
)

然后登录
mongo
use admin
db.auth("root","123")