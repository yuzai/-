function lazyman(name){
  return new _lazyman(name);
};
var _lazyman = function(name){
  this.task = [];
  this.name = name;
  var self = this;
  var fn = (function(n){
    return function(){
      console.log('hello I am '+n);
      self.next();
    }
  })(name);
  this.task.push(fn);
  setTimeout(function(){
    self.next();
  });
}
_lazyman.prototype.next = function(){
  var fn = this.task.shift();
  fn && fn();
}
_lazyman.prototype.sayname = function(){
  var self = this;
  var fn = function(){
    console.log(self.name);
    self.next();
  }
  this.task.push(fn);
  return this;
}
_lazyman.prototype.eat = function(name){
  var self = this;
  var fn = function(){
    console.log('I am eating '+name);
    self.next();
  }
  this.task.push(fn);
  return this;
}

lazyman('xiaobo').eat('lunch').sayname().eat('dinner');
