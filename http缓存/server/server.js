var http = require('http');
var util = require('util');
var router = require('./router');

http.createServer(router).listen(3000);
console.log('server is listening on "3000"');
