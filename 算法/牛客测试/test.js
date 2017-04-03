function circle(n){
	if(n === 0) return 0;
	var num = 0;
	var temp;
	var len = Math.floor(Math.sqrt(n));
	var flag = len === Math.sqrt(n);
	for(var i=0;i<=len;i++){
		temp = Math.sqrt(n-i*i);
		if(Math.floor(temp) === temp){
			if(i===0 || (i===len && flag)){
				num+=2;
			}
			else{
				num+=4;
			}
		}
	}
	return num;
};

process.stdin.resume()
process.stdin.setEncoding("utf8");
process.stdin.on('data',function(data){
	console.log(circle(data));
})