// 数组去重
//
// 给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组。
var gen = require('./random_gen');

// //方法1，遍历
// function uniqueArray(arr){
//   var _arr = [];
//   for(var i=0;i<arr.length;i++){
//     for(var j=0;j<_arr.length;j++){
//       if(arr[i]===_arr[j]){
//         break;
//       }
//     }
//     if(j===_arr.length){
//       _arr.push(arr[i])
//     }
//   }
//   return _arr;
// }

//方法2：对象存储
function quchong(arr){
  var obj = {};
  var _arr = [];
  for(var i=0,len=arr.length;i<len;i++){
    if(!obj[arr[i]]){
      _arr.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return _arr;
}

// for(var i=0;i<10;i++){
//     var arr = gen();
console.log(quchong([6,2,3,3,4,5,6,6,4,4,4,4]));
//     console.log(arr);
// }
