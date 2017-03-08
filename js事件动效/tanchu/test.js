var test = {
  x:10,
  y:10,
  panmove:throttling(mymove,3000)
}
function mymove(){
  this.x++;
  this.y++;
  console.log(this.x);
  console.log(this.y);
}
function throttling(func,delay){
  console.log('hello');
  var inthrott = false;
  var lastact;
  return  function(){
    var context = this;
    var args = arguments;
    // console.log(this);
    console.log(inthrott);
    if(!inthrott){
      func.apply(context,args);
      inthrott = true;
      setTimeout(function(){
        inthrott = false;
      },delay);
    }else {
      clearTimeout(lastact);
      lastact = setTimeout(function(){
        func.apply(context,args);
        inthrott = false;
      },delay);
    }
  }
};
setInterval(test.panmove.bind(test),1000);
