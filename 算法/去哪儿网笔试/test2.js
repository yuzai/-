var fs = require('fs');
fs.readFile('./data.js',function(err,data){
	var str = data.toString();
	str = str.split('\r\n').map(function(item){
		return item.split(' ').map(function(item){
			return Number(item);
		})
	});
	console.log(str);



	var result = [];
	var min;
	var sum;
	for(var i=0,len = str.length;i<len;i++){
		var data = str[i].slice();
		min = data[0];
		sum = 0;
		for(var j=0;j<5;j++){
			sum+=data[j];
			if(data[j]<min){
				min = data[j];
			}
		}
		result.push({
			ave:sum,
			min:min,
			index:i
		})
	}
	result = sort(result,'min');
	var start = 0;
	var flag = false;
	var s = [];
	var temp;
	for(var i=0;i<len;i++){
			if(i===len-1 || result[i].min!==result[i+1].min){
				if(flag){
					temp = sort(result.slice(start,i+1),'ave');
					s=s.concat(temp);
					flag = false;
				}else{
					s=s.concat(result[i]);
					flag = false;
				}
			}else{
				if(!flag){
		          start = i;
		          flag = true;
		        }
			}
	}
	console.log(s);
	var ss=[];
	for(var i=0;i<len;i++){
		ss.push(s[i].index);
	}
	console.log(ss.toString());
	function sort(arr,key){
	  if(arr.length<=1){
	    return arr;
	  }
	  var left = [];
	  var right = [];
	  var base = arr[0];
	  for(var i=1;i<arr.length;i++)
	  {
	    if(arr[i][key]<=base[key]){
	      right.push(arr[i]);
	    }else {
	      left.push(arr[i])
	    }
	  }
	  return sort(left,key).concat(arr[0],sort(right,key));
	}
})