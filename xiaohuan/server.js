var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain',"Access-Control-Allow-Origin": "*"});
    res.write("hellow world!");
    res.end();
}).listen(3000);
