var http = require('http');
var url = require('url');
var util = require('util');

function js(req,res){
	console.log(req.referer);
	res.writeHead(200,{'content-Type':'text/javascript','token':'123456789'});
    res.end("console.log(1)");
}

function css(req,res){
	res.writeHead(200,{'content-Type':'text/css'});
    res.end("console.log(1)");
}


http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
  if(req.method==='GET'){
      switch(pathname){
         case '/js':js(req,res);break;
         case '/css':css(req,res);break;
         default: 
         res.writeHead(200,{'content-Type':'text/plain',"Set-Cookie":['a=000','t=1111','w=2222'],'token':'123456789'});
         res.end(util.inspect(url.parse(req.url, true)));
         break;
      }
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