window.addEventListener('DOMContentLoaded',ready);
function ready(){
  function handleTouch(event){
    if(event.touches.length === 1){
      var div = document.getElementById('div1');
      switch(event.type){
        case 'touchstart':
            div.innerHTML = "touch started ("+event.touches[0].clientX+','+event.touches[0].clientY+')';
            break;
        case 'touchend':
            div.innerHTML += "<br>touch ended ("+event.changedTouches[0].clientX+','+event.changedTouches[0].clientY+')';
            break;
        case 'touchmove':
            event.preventDefault();
            div.innerHTML += "<br>touch moved ("+event.changedTouches[0].clientX+','+event.changedTouches[0].clientY+')';
            break;
      }
    }
  }
  window.addEventListener('touchstart',handleTouch);
  window.addEventListener('touchend',handleTouch);
  window.addEventListener('touchmove',handleTouch);
}
