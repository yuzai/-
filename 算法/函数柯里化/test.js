function test(){
  console.log(arguments);
  console.log([].slice.call(arguments,1,2));
}
test(1,2,3,4,'sss');
