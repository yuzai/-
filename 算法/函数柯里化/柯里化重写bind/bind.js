Function.prototype.mybind = function(){
	var fn = this;
	return function(){
		fn.apply(arguments);
	}
}
var a=2;
var b = 3;

var foo = {
	a:1,
	b:3
};
function add(){
	return this.a+this.b
};
console.log(add());//node this不指向window
console.log(add.bind(foo,123,333)());
