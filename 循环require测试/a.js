var s = 5;
module.exports.a = function(){
	console.log(s);
};
var b = require('./b');
console.log(b.b);