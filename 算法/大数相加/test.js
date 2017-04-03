function BigSum(a,b){
	if(typeof a!=='string' || typeof b!=='string'){
		throw('不正确的输入');
	}
	if(a.length<=0){
		return b;
	}
	if(b.length<=0){
		return a;
	}

	var _a = a.split('').map(function(item){return Number(item)});
	var _b = b.split('').map(function(item){return Number(item)});
	// console.log(_a);
	// console.log(_b);
	var i = _a.length-1;
	var j = _b.length-1;
    var c = 0;
    var temp = 0;
    var result = [];
	while(i>=0 && j>=0){
		temp = _a[i]+_b[j]+c;
		if(temp>=10){
			temp -= 10;
			c=1;
			result.unshift(temp);
		}else{
			c = 0;
			result.unshift(temp);
		}
		i--;
		j--;
	}
	while(i >= 0){
		temp = _a[i]+c;
		if(temp>=10){
			temp -= 10;
			c=1;
			result.unshift(temp);
		}else{
			result.unshift(temp);
			return _a.slice(0,i).concat(result).join('').replace(/^0*/g,'');
		}
		i--;
	}
	while(j >= 0){
		temp = _b[j]+c;
		if(temp>=10){
			temp -= 10;
			c=1;
			result.unshift(temp);
		}else{
			result.unshift(temp);
			return _b.slice(0,i).concat(result).join('').replace(/^0*/g,'');
		}
		j--;
	}
	if(c===1){
		result.unshift(c);
	}
	return result.join('');
}

var a='9999999912345';
var b = '87655';
console.log(BigSum(a,b));