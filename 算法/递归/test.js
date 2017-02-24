function sum(){
  var sum = 0;
  for(var i=1;i<=100;i++){
    sum+=i;
  }
  return sum;
}
console.log(sum());

function sumd(){
  var sum = 0;
  function add(n){
    if(n==1){
      return 1;
    }else {
      return n+add(n-1);
    }
  }
  return add(100);
}
console.log(sumd());
