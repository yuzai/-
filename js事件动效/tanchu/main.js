var tanchu = (function(){
  var _tanchu = {};
  _tanchu.prototype = {
    fn: function(title,content){
      this.title = title;
      this.content = content;
    },
    _createMask:function(){
      var mask = document.createElement('div');
      mask.id = '_mask';//此处有问题，id如果重复怎么办？如何生成和页面都不一样的id
      return mask;
    },
    _createCover:function(){
      var box = document.createElement('div');
      box.id = '_box';
      var str = `
        <div class='cover'>
          <div class='col1'><span>${this.title}</span><span>x</span></div>
          <div class='col2'>${this.content}</div>
          <div class='col3'>
            <button id='yes'>确定</button>
            <button id='no'>取消</button>
          </div>
        </div>
      `
      box.innerHTML = str;
      return box;
    },
    _createStyle:function(){
      var style = document.createElement('style');
      var str = `
        #_mask{
          position:fixed;
          top:0;
          left:0;
          right:0;
          bottom:0;
          opacity:0.5;
          filter:alpha(opacity=50);
          background-color:black;
          z-index:10;
        }
        #_box{
          position:fixed;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:20;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        #_box>.cover{
           width:50%;
           height:20%;
           display:flex;
           flex-flow:column nowrap;
        }
        #_box .col1{
          outline:1px solid black;
          background-color:skyblue;
          color:black;
          flex:0 1 auto;
          padding:2%;
          display:flex;
          flex-flow:row nowrap;
          justify-content:space-between;
        }
        #_box .col2{
          outline:1px solid black;
          background-color:white;
          color:black;
          flex:2 1 auto;
          padding:2%;
        }
        #_box .col3{
          outline:1px solid black;
          padding:1%;
          display:flex;
          justify-content:center;
          background-color:white;
          color:black;
          flex:0 1 auto;
        }
        #_box .col3 button{
          margin:0 1%;
        }
      `;
      style.type = 'text/css';
      style.innerHTML = str;
      return style;
    },
    _addEvent:function(){
      document.getElementById('_box').addEventListener('click',function(event){
        var s = event.target.innerHTML;
        if(s === '确定' || s === '取消' || s==='x'){
          this._destory();
        }
      }.bind(this))
    },
    _destory:function(){
      document.body.removeChild(this.mask);
      document.body.removeChild(this.cover);
      document.getElementsByTagName('head')[0].removeChild(this.style);
    },
    init:function(){
      this.mask = this._createMask();
      this.cover = this._createCover();
      this.style = this._createStyle();
      document.body.appendChild(this.mask);
      document.body.appendChild(this.cover);
      document.getElementsByTagName('head')[0].appendChild(this.style);
      this._addEvent();
    }
  }
  _tanchu.prototype.fn.prototype = _tanchu.prototype;
  return function(title,content){
  return new _tanchu.prototype.fn(title,content);
}
})()
var mytanchu = tanchu('title','content');
function showDialog(){
  mytanchu.init();
}
