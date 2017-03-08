

function getThen(value){
	var t = typeof value;
	if(value && (t==='object' || t === 'function')){
		var then  = value.then;
		if(typeof then === 'function')
			return then;
	}
	return null;
}

function doResolve(func,onfullied,onrejected){
	var done = false;
	try{
		func(function(value){
			if(done){
				return ;
			}
			done = true;
			onfullied(value);
		},function(reason){
			if(done) return ;
			done = true;
			onrejected(reason);
		})
	}catch(e){
		if(done) return ;
		done = true;
		onrejected(e);
	}
}

var mypromise = function(func){
	this._state = 'pending';//fulfilled,rejceted
	this._handlers = [];
	this._value = null;
	var self = this;
    var fulfill = function(result){
        self._value = result;
        self._state = 'fulfilled'; 
    };
    var reject  = function(error){
    	self._value = error;
    	self._state = 'rejected';
    };
    var resolve = function(result){
    	try{
    		var then = getThen(result);
    		if(then){
    			doResolve(then.bind(result),resolve,reject);
    			return 
    		}
    		fulfill(result);
    	}catch(e){
    		reject(e);
    	}

    }
    doResolve(fn, resolve, reject);
}

var p = new mypromise(function(resolve,reject){
	setTimeout(function(){
		console.log('hi')

	},1000);
})