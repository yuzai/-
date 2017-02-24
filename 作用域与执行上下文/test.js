function fun(a){
  console.log(typeof test);
  var test;
  var a=3;
  var a;
  console.log(a);
  function test(){console.log('hello')};
}
fun(1);


(function foo(i) {
    console.log(i);
    if (i === 3) {
        return;
    }
    else {
        foo(++i);
        console.log(i);
    }
}(0));


var a = 10;
function bar(){
   console.log(a);
}
function foo(){
  var a=5;
  bar();
}
foo();

console.log('sss');
var a=10;
function   bar(){
    console.log(a)
    var a=5;
    function foo(){
       a = 3;
       console.log(a);
    }
    foo();
    console.log(a);
}
bar();
console.log(a);
