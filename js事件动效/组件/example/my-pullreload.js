var PullToReload = function(options){
  var self = this;

  //设置参数
  this.opts = {
    'refresh-element': 'ptr', // Required
		'content-element': 'content', // Required
		'border-height': 1,
		height: 40,
		'font-size': '30px',
		threshold: 20,
		'pre-content': '...',
		'loading-content': 'Loading...',
		'callback-loading': function () {
			setTimeout(function () {
				self.loadingEnd();
			}, 1000);
		} // Required
  }
  for(var key in this.opts){
    if(options[key] !== undefined)
    {
      this.opts[key] = options[key];
    }
  }
  this.ptr = document.querySelector('#'+this.opts['refresh-element']);
  this.content = document.querySelector('#'+this.opts['content-element']);
  this.isDragging = false;
  this.isThresholdReached = false;
  this.isend = true;

  PullToReload.prototype._style_init = function(){
    var ptr_style = {
      padding:'0px',
      margin:'0px',
      display:'block',
      height:this.opts['height']+'px',
      border:this.opts['border-height']+'px solid #000',
      borderTop:'0px',
      borderLeft:'0px',
      borderRight:'0px',
      textAlign:'center',
      lineHeight:this.opts.height + 'px',
      fontSize:this.opts['font-size']+'px',
      marginTop: '-' + (self.opts['border-height'] + self.opts.height) + 'px'
    }
    for(var key in ptr_style){
      this.ptr.style[key] = ptr_style[key];
    }
    self.ptr.innerHTML = self.opts['pre-content'];
  }
  PullToReload.prototype._getheight = function (event) {
  		if (event.pageY === undefined && event.touches !== undefined) {
  			if (event.touches.length <= 0) {
  				return false;
  			}
  			event.pageY = event.touches[event.touches.length - 1].pageY;
  		}
  		return event.pageY;

          // end getPageY
  };
  PullToReload.prototype._event = function(){
    this.content.addEventListener('mousedown',function(event){
      if(!self.isend){
        return ;
      }
      self._movestart(event);
    })
    this.content.addEventListener('touchstart',function(event){
      if(!self.isend){
        return ;
      }
      self._movestart(event);
    })
    document.addEventListener('mousemove',function(event){
      if(!self.isend){
        return ;
      }
      if(!self.isDragging){
        return ;
      }
      self._moving(event);
    })
    document.addEventListener('touchmove',function(event){
      if(!self.isend){
        return ;
      }
      if(!self.isDragging){
        return ;
      }
      self._moving(event);
    },{passive:false})
    document.addEventListener('mouseup',function(event){
      if(!self.isend){
        return ;
      }
      self._moveend();
    })
    document.addEventListener('touchend',function(event){
      if(!self.isend){
        return ;
      }
      self._moveend();
    })
  }
  PullToReload.prototype._movestart = function(event){
    this.isDragging = true;
    this.isThresholdReached = false;
    this.popStart = self._getheight(event);
  }
  PullToReload.prototype._moving = function(event){
    // event.preventDefault();
    event.stopImmediatePropagation();
    var offset = Math.floor(self._getheight(event) - self.popStart);
    if(offset>=0){
    if(offset>self.opts.threshold){
      self.isThresholdReached = true;
      self.ptr.innerHTML = self.opts['loading-content'];
    }else {
      self.isThresholdReached = false;
      self.ptr.innerHTML = self.opts['pre-content'];
    }
    var height = self.opts['border-height'] + self.opts.height-offset;
    self.ptr.style.marginTop = '-' + height>0?height:0 + 'px';
    }
  }
  PullToReload.prototype._moveend = function(){
    if(self.isThresholdReached){
      self.isend = false;
      self.ptr.style.marginTop = '0px';
      self.ptr.innerHTML = self.opts['loading-content'];
      setTimeout(function(){
        self.isend = true;
        self.ptr.style.marginTop = '-' + (self.opts['border-height'] + self.opts.height) + 'px';
        self.ptr.innerHTML = self.opts['pre-content'];
      },10000);
    }else {
      self.ptr.style.marginTop = '-' + (self.opts['border-height'] + self.opts.height) + 'px';
    }
    self.isDragging = false;
    self.isThresholdReached = false;
  }
  PullToReload.prototype.start = function(){
    this._style_init();
    this._event();
  }
  this.start();
}
