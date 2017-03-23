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

//3. 快速排序2
function quick_sort2(arr){
  var _arr = arr.slice();
  return quick_sort(_arr,0,_arr.length-1);
}
function quick_sort(arr,i,j){
  if((j-i)<1)
  {
    return arr;
  }
  var left = i;
  var right = j;
  var base = left;
  var center = arr[left];
  while(left<right){
    while(left<right && arr[right]>=center){
      right--;
    }
    if(left<right)
    {
      arr[left] = arr[right];
      left++;
    }
    while(left<right && arr[left]<center){
      left++;
    }
    if(left<right){
      arr[right] = arr[left];
      right--;
    }
  }
  base = left;
  arr[base] = center;
  quick_sort(arr,i,base-1);
  quick_sort(arr,(base+1),j);
  return arr;
}
//3. 原生方法排序
function normal(arr){
  return arr.sort(function(a,b){return a-b;});
}
module.exports = {
  bubble:bubble,
  quick:quick,
  normal:normal,
  quick2:quick_sort2
}
var arr = [3,1,3,6,2,7,9,2,1,0,1,2];
console.log(arr.slice());
console.log(quick_sort2(arr));
console.log(arr);
