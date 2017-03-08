function getURL(url){
	return new Promise(function(resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET',URL,true);
		xhr.onload = function(){
			if(xhr.statue==='200'){
				resolve(xhr.responseText);
			}else{
				reject(new Error(xhr.statusText));
			}
		}
		xhr.onerror = function(){
			reject(new Error(xhr.statusText));
		};
		xhr.send();
	})
}

var url = 'http://httpbin.org/get';
getURL(url).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error(error);
});