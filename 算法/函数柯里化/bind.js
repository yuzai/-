function bind(){
  var fn = arguments[0];
  var context = arguments[1];
  var args = [].slice.call(arguments,2);
  return function(){
    fn.apply(context,args.concat([].slice.call(arguments)));
  }
}

var person = {
  name:'xiaobo',
  age:'25'
};

function sayage(){
  console.log(this.age);
}
bind(sayage,person)();
