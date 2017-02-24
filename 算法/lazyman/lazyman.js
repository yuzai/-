function lazyman(name){
  return new _lazyman(name);
};

function _lazyman(name){
  var task = [];
  var self = this;
  var fn = (function(n){
    return function(){
      console.log('Hi this is '+n+'!');
      self.next();
    }
  })(name);
  this.task.push(fn);
  setTimeout(function(){
    self.next();
  },0);
}
_lazyman.prototype.next = function(){
  var fn = this.tasks.shift();
  fn && fn();
}
_lazyman.prototype.eat = function(name){
  var self = this;
  var fn = (function(n){
    return function(){
      console.log('Eat '+n+'~');
      self.next();
    }
  })(name)
  this.task.push(fn);
  return this;
}
_lazyman.prototype.sleep = function(time){

}
