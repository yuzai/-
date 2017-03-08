var slider = function(){
  this.curIndex = 0;
}
slider.prototype.changeTo = function(num){
  var goLeft = num*400;
  $('.imgList').animate({left:'-'+goLeft+'px'},500);
  $('.infoList').find('li').removeClass('infoOn').eq(num).addClass('infoOn');
  $('.indexList').find('li').removeClass('indexOn').eq(num).addClass('indexOn');
}
slider.prototype.event = function(){
  var self = this;
  $('.indexList').find('li').each(function(item){
    $(this).hover(function(){
      clearInterval(self.auto);
      self.changeTo(item);
      self.curIndex = item;
    },function(){
      self.autoChange();
    });
  })
  $("#prev").hover(function(){
    //滑入清除定时器
    clearInterval(self.auto);
  },function(){
    //滑出则重置定时器
    self.autoChange();
  });
  //左箭头点击处理
  $("#prev").click(function(){
    //根据curIndex进行上一个图片处理
    self.curIndex = (self.curIndex > 0) ? (--self.curIndex) : (5 - 1);
    self.changeTo(self.curIndex);
  });
  //右箭头滑入滑出事件处理
  $("#next").hover(function(){
    //滑入清除定时器
    clearInterval(self.auto);
  },function(){
    //滑出则重置定时器
    self.autoChange();
  });
  //右箭头点击处理
  $("#next").click(function(){
    if(self.curIndex===4){
      self.curIndex = 0;
    }else {
      self.curIndex++;
    }
    self.changeTo(self.curIndex);
  });
}
slider.prototype.autoChange = function(){
  var self = this;
  self.auto = setInterval(function(){
    if(self.curIndex===4){
      self.curIndex = 0;
    }else {
      self.curIndex++;
    }
    self.changeTo(self.curIndex);
  },2500);
}
slider.prototype.init = function(){
  this.event();
  this.autoChange();
}
var _slide = new slider();
_slide.init();
