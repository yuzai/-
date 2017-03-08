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
function move(event){
  console.log('you are moving');
  if(this.status==='playing')
  {
    var tempX=event.changedTouches[0].screenX;
    var tempY=1350-event.changedTouches[0].screenY;
    if(tempX<=0){
      this.left=0;
    }else if(tempX>=670){
      this.left=670;
    }else{
      this.left=tempX;
    }
    if(tempY<=10){
      this.bottom=10;
    }else if(tempY>=1310){
      this.bottom=1310;
    }else{
      this.bottom=tempY;
    }
  }
};
handlepanmove:(throttling.bind(this,move,50))(),
