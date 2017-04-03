var fs = require('fs');
fs.readFile('./data.js',function(err,data){
  var str = data.toString();
  str = str.split('\r\n').map(function(item){
    return item.split(' ').map(function(item){
      return Number(item);
    })
  });

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

var num = str.length;
var result = [];
var min;
var sum;
for(var i=0;i<num;i++){
  var data = str[i]
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
result = sort(result);
console.log(result);
var s=[];
for(var i=0;i<num;i++){
   s.push(result[i].index);
}
console.log(s.toString().replace(/\,/g,' '));
})