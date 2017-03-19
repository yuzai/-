var moment = require('moment');
var fs = require('fs');
var url = require('url');
var hash = require("crypto").createHash('sha1');

function test_css(req,res){
	res.writeHead(200,{
		'content-type':'text/css',
		//强缓存1，相对时间，单位是s
		'Cache-Control':'max-age=60',
		//强缓存2，与客户端时间进行比较，在客户端和
		//服务器端时区误差大的时候可能会出错，优先级低于Cache-Content
		'Expires':moment().add(10,'seconds').format()
	});
	res.end("div{width:100px;height:100px;background-color:skyblue}");
}

function test_js(req,res){
	//协商缓存1，last-modified 和if-modified-since
	//缺点在于文件的修改有时候不会及时更新，从而导致继续使用缓存
	console.log(req.headers['if-modified-since']);
	if(!req.headers['if-modified-since'] || 
		moment().subtract(10,'seconds') - req.headers['if-modified-since']>0){
		res.writeHead(200,{
	    	'content-type':'text/javascript',
		    'Last-Modified':moment(),
	    });
	    res.end("console.log(11111)");
	}else{
	  //如果上次修改的时间不大于上次发送的Last-Modified,
	  res.writeHead(304);
	  res.end();
    }
}

function test_img1(req,res){
	fs.readFile('./test1.jpg',function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                    res.writeHead(200,{
                    	'content-type':'image/jpeg',
                    	//强缓存1，相对时间，单位是s
		                'Cache-Control':'max-age=60'
		            });
                    res.end(data);
                }
            });//fs.readfile
}

function ico(req,res){
	fs.readFile('./test.ico',function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                    res.writeHead(200,{'content-type':'image/jpeg'});
                    res.end(data);
                }
            });//fs.readfile
}

function html(req,res){
	fs.readFile('./index.html',function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                    res.writeHead(302,{'location':'http://www.baidu.com'});
                    res.end(data);
                }
            });//fs.readfile
}

module.exports = function(req,res){
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
  switch(pathname){
    case '/css':test_css(req,res);break;
    case '/js':test_js(req,res);break;
    case '/img1':test_img1(req,res);break;
    case '/':html(req,res);break;
    case '/favicon.ico':ico(req,res);break;
    // case '/post':post(req,res);break;
    // case '/paper':paper(req,res);break;
    // case '/like':like(req,res);break;
    default: break;
  }
}