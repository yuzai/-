//lazyman
var lazyman = function(name,age){
  return new _mychain(name,age);
};

var _mychain = function(name,age){
  this.name = name;
  this.age = age;
  this.task = [];
  var self = this;
  var fn = (function(n){
    var name = n;
    return function(){
      console.log('my name is '+name);
      self.next();
    }
  })(name);
  this.task.push(fn);
  setTimeout(function(){
    self.next();
  },0);
};
_mychain.prototype.next = function(){
  var fn = this.task.shift();
  fn && fn();
};
_mychain.prototype.sayage = function(){
  var self = this;
  var fn  = (function(age){
    return function(){
      console.log('my age is '+age);
      self.next();
    }
  })(this.age);
  this.task.push(fn);
  return this;
};
_mychain.prototype.eat = function(name){
  var self = this;
  var fn  = (function(name){
    return function(){
      console.log('eat '+name);
      self.next();
    }
  })(name);
  this.task.push(fn);
  return this;
};
_mychain.prototype.sleep = function(time){
  var self = this;
  var fn = (function(time){
    return function(){
      setTimeout(function(){
        console.log('sleep for '+time+'s');
        self.next();
      },time*1000);
    }
  })(time);
  this.task.push(fn);
  return this;
}
_mychain.prototype.sleepFirst = function(time){
  var self = this;
  var fn = (function(time){
    return function(){
      setTimeout(function(){
        console.log('sleep first for '+time+'s');
        self.next();
      },time*1000);
    }
  })(time);
  this.task.unshift(fn);
  return this;
}
lazyman('xiaobo',23).eat('lunch').eat('dinner').sleep(5).sleepFirst(2).sayage();
