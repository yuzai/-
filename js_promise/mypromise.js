var mypromise = function(fn){
	var state = 'pending';
	var value = null;

	function fulfill(result){
		state = 'fulfilled';
		value = result;
	}

    function reject(error){
    	state = 'rejected';
    	value = error;
    }

    function handle(handler){
    	if(state === 'pending'){
    		handlers.push(handler);
    	}else{
    		if(state === 'fulfilled' && typeof handler.onfufilled === 'function'){
    			handler.onfufilled(value);
    		}
    		if(state === 'rejected' && typeof handler.onrejected === 'function'){
    			handler.onrejected(value);
    		}
    	}

    }

    mypromise.prototype.done = function(onfufilled,onrejected){
    	setTimeout(function(){
    		handle({
    			onfufilled:onfufilled,
    			onrejected:onrejected
    		})
    	},0)
    }
    mypromise.prototype.done = function(onfufilled,onrejected){
    	setTimeout(function(){
    		handle({
    			onfufilled:onfufilled,
    			onrejected:onrejected
    		})
    	},0)
    }

    mypromise.prototype.then = function(onfufilled,onrejected){
    	var self = this;
        return new mypromise(function(resolve,reject){
            return self.done(function (result) {
	      if (typeof onfufilled === 'function') {
	        try {
	          return resolve(onfufilled(result));
	        } catch (ex) {
	          return reject(ex);
	        }
	      } else {
	        return resolve(result);
	      }
	    }, function (error) {
	      if (typeof onrejected === 'function') {
	        try {
	          return resolve(onrejected(error));
	        } catch (ex) {
	          return reject(ex);
	        }
	      } else {
	        return reject(error);
	      }
	    });
        })  

    }
	fn(fulfill,reject);
}
setTimeout(function(){
	console.log('3')
},0);
var test = new mypromise(function(resolve,reject){
	console.log(1);
	resolve('5');
}).then(function(value){
	console.log(value);
})
console.log('2');