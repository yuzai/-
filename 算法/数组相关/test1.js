//计算一个无序数组中的乘积最大的三个元素
var pick = function(arr){
  if(arr.length<3){
    return '数组元素太少';
  }
  var _arr = arr.slice();
  _arr.sort(function(a,b){return a-b});
  var s1 = _arr[0]*_arr[1]*_arr[_arr.length-1];
  var s2 = _arr[_arr.length-1]*_arr[_arr.length-2]*_arr[_arr.length-3];
  return s1>s2?s1:s2;
};
module.exports = pick;
