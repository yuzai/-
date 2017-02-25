//寻找连续数组中的缺失数
//给定某无序数组，其包含了 n 个连续数字中的 n - 1 个，
//已知上下边界，要求以O(n)的复杂度找出缺失的数字。

// //法1,暴力搜索,复杂度应该是O(n^2)
// function findTheOne(arr,lower,upper){
//   for(var i=lower;i<upper;i++){
//     for(var j = 0;j<arr.length;j++){
//       if(arr[j] === i){
//         break;
//       }
//     }
//     if(j===arr.length){
//       return i;
//     }
//   }
// };

// //法二，对象赋值，然后查找
// //比较重要的一个思想，因为对象的存储使用了散列表，优势在于查找速度快，直接通过属性值进行查找，时间复杂度为O（1）
// function findTheOne(arr,lower,upper){
//   var obj = {};
//   for(var i=0;i<arr.length;i++){   //O(n)
//     obj[arr[i]] = 0;
//   }
//   for(i=lower;i<upper;i++){   //O(n)
//     if(obj[i]===undefined){
//       return i;
//     }
//   }
// }

//法三：智商问题
//数组之和通过最小值和最大值就可以确定，只需要用和减去数组的和就是要找的那个数字
function findTheOne(arr,lower,upper){
  //连续数列求和公式:n/2(lower+upper)
  var sum = arr.reduce(function(a,b){return a+b});//O(n)
  var sum2 = (lower+upper)*(arr.length+1)/2;//O(1)
  return sum2-sum;
}


module.exports = findTheOne;
