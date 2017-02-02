var http = require('http');
var fs = require('fs');

var bpage = fs.readFileSync('./b.html');

http.createServer(function(req,res){
	res.writeHeader(200,{'content-type':'text/html'});
	res.end(bpage);
}).listen(3000);

console.log('server b is running at http://localhost:3000');
