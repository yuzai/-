var http = require('http');
var url = require('url');
var util = require('util');

var i=0;
http.createServer(function(req,res){
  console.log(req.method);
  if(req.method==='GET'){
      var time = new Date();
      var time = time.getTime() + 24*60*60*1000;//按ms计算，一天
      var time2 = new Date(time);
      var timeObj = time2.toGMTString();
      res.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":"*",'Expires':timeObj});
      res.end(util.inspect(url.parse(req.url, true)));
      i++;
  }
  else{
      // 定义了一个post变量，用于暂存请求体的信息
        var post = '';

        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function(chunk){
            post += chunk;
        });

        // 在end事件触发后然后向客户端返回。
        req.on('end', function(){
            post = JSON.parse(post);
            console.log(post);
            res.writeHead(200, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*"});
            res.end(util.inspect(post));
        });
    }
}).listen(3000);
console.log('server is listening on "3000"');
