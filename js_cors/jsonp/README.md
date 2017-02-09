### 功能及各个文件说明
此代码实现了jsonp的服务器以及客户端代码，可以进行跨域请求
ajax2.js:封装了一个发起ajax的代码，具体的说明见[这里](http://www.jianshu.com/p/4e1d2ee63da7)
index.html:客户端测试页面，两个按钮，一个通过ajax获取data,失败，另一个通过jsonp获取，成功输出数据
server.js:服务器端代码，处理jsonp请求

### 测试方法
1. 拷贝上述3个文件
2. 命令行运行node server.js，此时，服务器端已经运行
3. 打开index.html，点击ajax按钮，返回0,同时控制台报错，跨域了。点击jsonp，成功通信，返回服务器端写好的姓名
（如没有返回值，则可能服务器端口被占用，换一个比较奇葩的端口，4444等即可）

### 主要目的
在理解jsonp原理的基础上练习jsonp跨域代码的书写，熟悉node的写法

### 介绍文章
[跨域的解决方案（一）：jsonp及其实现](http://www.jianshu.com/p/9d08d6ce1b60)
