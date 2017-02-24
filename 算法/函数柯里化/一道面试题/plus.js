'use strict';
function plus(n){
  // // 实现1，我自己的实现
  // var args = [];
  // [].push.apply(args,arguments);
  // var result = function(){
  //   [].push.apply(args,arguments);
  //   return result;
  // }
  // result.toString = function(){
  //   return args.reduce(function(a,b){return a+b})
  // };
  // return result;

  //  //实现3，函数柯里化
  var args = [];
  var _plus = function(){
    [].push.apply(args,arguments);
    return _plus;
  }
  _plus.toString = function(){
    return args.reduce(function(a,b){return a+b})
  }
  return _plus(n);

  // //实现2,柯里化，但是没有处理参数不是一个的时候的情况
  // var result = function(m){
  //   return plus(m+n);
  // };
  // result.toString = function(){
  //   return n
  // };
  // return result;
}
alert(plus(4)(6));

module.exports = plus
