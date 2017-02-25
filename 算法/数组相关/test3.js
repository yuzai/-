// 数组去重
//
// 给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组。
var gen = require('./random_gen');

//方法1，遍历
function uniqueArray(arr){
  var _arr = [];
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<_arr.length;j++){
      if(arr[i]===_arr[j]){
        break;
      }
    }
    if(j===_arr.length){
      _arr.push(arr[i])
    }
  }
  return _arr;
}

// for(var i=0;i<10;i++){
//     var arr = gen();
//     console.log(uniqueArray(arr));
//     console.log(arr);
// }
