function sort(arr){
  if(arr.length<=1){
    return arr;
  }
  var left = [];
  var right = [];
  var base = arr[0];
  for(var i=1;i<arr.length;i++)
  {
    if(arr[i].ave<base.ave){
      right.push(arr[i]);
    }else if(arr[i].ave === base.ave){
      if(arr[i].min<=base.min){
        right.push(arr[i]);
      }else{
        left.push(arr[i]);
      }
    }
    else{
      left.push(arr[i])
    }
  }
  return sort(left).concat(arr[0],sort(right));
}

var num = Number(read_line());
// var datame = [];
// datame[0] = [4,3,4,3,4];
// datame[1] = [4,3,3,4,4];
// datame[2] = [5,3,5,3,2];
// datame[3] = [5,5,5,5,5];
// datame[4] = [5,4,4,3,4];
// datame[5] = [5,2,5,4,4];
// datame[6] = [5,4,4,3,4];
// datame[7] = [5,4,4,3,4];
var result = [];
var min;
var sum;
for(var i=0;i<num;i++){
  var data = read_line().split(' ').map(function(item){
		return Number(item);
	});
  min = data[0];
  sum = 0;
  for(var j=0;j<5;j++){
    sum+=data[j];
    if(data[j]<min){
      min = data[j];
    }
  }
  result.push({
    min:sum,
    ave:min,
    index:i
  })
}
result = sort(result,'ave');
var s=[];
for(var i=0;i<num;i++){
   s.push(result[i].index);
}
print(s.toString().replace(/\,/g,' '));