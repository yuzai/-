//1.冒泡排序
function bubble(arr) {
    var _arr = arr.slice();
    var temp;
    var swaped;
    for (i = 0; i < arr.length - 1; i++) {
        swaped = false;
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (_arr[j] > _arr[j + 1]) {
                temp = _arr[j];
                _arr[j] = _arr[j + 1];
                _arr[j + 1] = temp;
                swaped = true;
            }
        }
        if (!swaped) {
            break;
        }
        // console.log(_arr);
    }
    return _arr;
}
// console.log(bubble([3, 2, 0, 1]));

//2.快速排序
function quick(arr){
  if(arr.length<=1){
    return arr;
  }
  var left = [];
  var right = [];
  var base = arr[0];
  for(var i=1;i<arr.length;i++)
  {
    if(arr[i]>base){
      right.push(arr[i]);
    }else {
      left.push(arr[i])
    }
  }
  // console.log(arr);

  return quick(left).concat(base,quick(right));
}
// console.log(quick([3,2,0,1]));

//3. 原生方法排序
function normal(arr){
  return arr.sort(function(a,b){return a-b;});
}
module.exports = {
  bubble:bubble,
  quick:quick,
  normal:normal
}
