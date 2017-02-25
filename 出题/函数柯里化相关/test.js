// function sum(){
//   var a;
//   if(arguments.length === 2){
//     return arguments[0]+arguments[1];
//   }else {
//     a = arguments[0];
//     return function(){
//       return a+arguments[0];
//     }
//   }
// }
// console.log(sum(2,3));
// console.log(sum(2)(3));

function sum(){
  var args = [].slice.apply(arguments);
  var _sum = function(){
    args = args.concat([].slice.apply(arguments));
    return _sum;
  }
  _sum.toString =function(){
    return args.reduce(function(a,b){return a+b});
  }
  return _sum;
}
console.log(sum(2,3).toString());
console.log(sum(2)(3).toString());
