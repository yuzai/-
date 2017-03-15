var Event = function(){
	this._events = {};
}
Event.prototype.on = function(type,fun){
	if(typeof this._events[type] === 'undefined'){
		this._events[type] = [];
	}
	if(typeof fun === 'function'){
		this._events[type].push(fun);
	}
}
Event.prototype.emit = function(type){
	var fn = this._events[type];
	var args = [].splice.call(arguments,1);
	if(fn){

	}
}