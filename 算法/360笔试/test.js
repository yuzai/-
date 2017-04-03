var str = read_line();
var len = str.length;
var s;
var sum = 0;
for(var i=2;i<= len;i+=2){
	  for(var j=0;j+i<= len;j++){
	  	if(isOu(str.slice(j,j+i))){
	  		sum++;
	  	}
	  }
}
function isOu(str){
	if(str.length%2 !== 0) return false;
	var obj = {};
	for(var i=0;i<str.length;i++){
		if(!obj[str[i]]){
			obj[str[i]] = 1;
		}else
		{
			obj[str[i]] += 1;
		}
	}
	for(var key in obj){
		if(obj[key]%2!==0){
			return false;
		}
	}
	return true;
}
print(sum);