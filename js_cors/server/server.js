var http = require('http');
var url = require('url');

function get_res(Myurl,res){
	http.get(Myurl,function(res1){
		var html = '';
		res1.on('data', function(data) {
			html += data;
		});
		res1.on('end', function() {
			res.end(html);
		});
	});
}

http.createServer(function(req,res){
	//解析url
    var urlPath = url.parse(req.url).pathname;
    console.log(urlPath);
    if(urlPath === '/robot'){
    	var Myurl = 'http://op.juhe.cn/robot/index?'+url.parse(req.url).query;
	    res.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":"*"});
	    get_res(Myurl,res);
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.end('这是我架设的跨域通信的中转服务器');
    }
}).listen(3000);

console.log('server is running at http://localhost:3000');
