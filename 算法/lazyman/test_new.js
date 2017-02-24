function cons(){
  var o = {};
  o.name = 'xiaoboma';
  o.age = '23';
  this.name2 = 'xiaohuanhuan';
  this.age = '23';
  return o;
};

var q = new cons();
console.log(q);

function test(){
  console.log('hello');
  test = function(){
    console.log('hello2');
  }
}
test();
test();
