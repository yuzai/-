var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	var bpage = fs.readFileSync('./a.html');
	res.writeHeader(200,{'content-type':'text/html'});
	res.end(bpage);
}).listen(5000);

console.log('server b is running at http://localhost:5000');