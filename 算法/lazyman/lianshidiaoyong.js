//  //链式调用1，jquery
// var myquery = function(){
//   return new _myquery(arguments[0]);
// };
// function _myquery(name){
//   this.name = name;
// };
// _myquery.prototype.eat = function(){
//   console.log(this.name+'is eating');
//   return this;
// };
// _myquery.prototype.drink = function(){
//   console.log(this.name+'is drinking');
//   return this;
// };
//
// myquery('xiaobo').eat().drink().eat().eat();


// // 链式调用2 underscore;
// var _ = function(arr) {
//     this._value = [].slice.apply(arr);
//     for (var method in _) {
//         if (method !== 'chain') {
//             _.prototype[method] = (function(method) {
//                 return function() {
//                     var args  = [].slice.apply(arguments);
//                     args.unshift(this._value);
//                     if(method === 'map'){
//                         this._value = _[method].apply(this,args);
//                     }else {
//                       _[method].apply(this,args);
//                     }
//                     return this;
//                 }
//             })(method);
//         }
//     }
//     _.prototype.value = function(){
//       return this._value;
//     }
// }
// _.forEach = function(array, fn) {
//     array.forEach(function(v, i, array) {
//         fn.apply(v, [v, i, array]);
//     })
// };
// _.map = function(array, fn) {
//     return array.map(function(v, i, array) {
//         return fn.apply(v, [v, i, array]);
//     })
// }
// _.chain = function(arr) {
//     return new _(arr);
// }
// _.chain([1, 2, 3]);
//
// var a = [1, 2, 3];
// _.forEach(a, function(v){console.log(v);})
// console.log(_.map(a, function(v){return ++v;}))
// console.log(_.chain(a).map(function(v){return ++v;}).forEach(function(v){console.log(v);}).value())




//loadsh
function Task(){
  this.queen = [];
  this.queenIndex = 0;
  this.loopCount = 0;
  this.loopIndex = 0;
  this.loopStart = 0;
  Task.prototype.__proto__ = task_proto;
  for(var method in task_proto){
    Task.prototype[method] = (function(method){
    return function(){
          this.queen.push({
            name:method,
            fn:Task.prototype.__proto__[method],
            args:arguments
          });
          if(method === 'done'){
            this.next();
          }
          return this;
        }
    })(method)
  }
};
Task.prototype.next = function(){
  var task = this.queen[this.queenIndex];
  console.log(task.fn);
  task.fn.apply(this,task.args);
  if(task.name!=='done'){
    this.queenIndex++;
    this.next();
  }else {
    this.queen = [];
    this.queenIndex = 0;
  }
}
var task_proto = {
  loop:function(num){
    this.loopStart = this.queenIndex;
    this.loopCount = num;
  },
  job:function(str){
    console.log(str);
  },
  end:function(){
    this.loopIndex++;
    if(this.loopIndex<this.loopCount){
      this.queenIndex = this.loopStart;
    }else {
      this.loopIndex = 0;
    }
  },
  done:function(){
    console.log('done');
  }
};
var t = new Task();
t.job('student').job('333').loop(3).job('teacher').end().done();
