var http = require("http");
var url = require("url");
var fs = require('fs');
var uuid = require('node-uuid');

function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");
  if(pathname === '/upload'){
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
    });
    req.on('end', function(){
        post = post.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(post, 'base64');
        var name = uuid.v1();
        fs.writeFile("upload/"+name+'.jpg', dataBuffer, function(err) {
            if(err){
              res.writeHead(200, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*"});
              res.end(err);
            }else{
              res.writeHead(200, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*"});
              res.end("success");
            }
        });
    });
  }else{
    if(pathname = '/'){

    }
  }
}

http.createServer(onRequest).listen(3001);
console.log("Server has started.");
