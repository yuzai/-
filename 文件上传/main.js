//获取数据的URL地址
function createObjectURL(blob) {
    if (window.URL) {
        return window.URL.createObjectURL(blob);
    } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(blob);
    } else {
        return null;
    }
}

//文件检测
function checkFile() {
    //获取文件
    var file = document.getElementById("uploadFile").files[0];
    // console.log(file);
    //文件为空判断
    if (file === null || file === undefined) {
        alert("请选择您要上传的文件！");
        return false;
    }

    //检测文件类型
    if(file.type.indexOf('image') === -1) {
        alert("请选择图片文件！");
        return false;
    }

    //计算文件大小
    var size = Math.floor(file.size/1024);
    if (size > 5000) {
        alert("上传文件不得超过5M!");
        return false;
    };
    return true;
};
var confirm = document.getElementById('btnConfirm');
confirm.addEventListener('click',function(){
  console.log(result.length);
    var xhr = new XMLHttpRequest();
    xhr.open('post','http://localhost:3001/upload')
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(result);
})
var result;
var filelist = document.getElementById('uploadFile');
filelist.addEventListener('change',function(event){
  var file = document.getElementById("uploadFile").files[0];
  var progress = document.getElementById("progress");
  var imgcontainer = document.getElementById("imgcontainer")
  var reader = new FileReader();
  if(/image/.test(file.type)){
    reader.readAsDataURL(file);
    reader.onprogress = function(event){
      if(event.lengthComputable){
        progress.innerHTML = event.loaded+'/'+event.total;
      }
    }
    reader.onerror = function(){
      progress.innerHTML = '上传失败，错误码为:'+reader.error.code;
    }
    reader.onload = function(event){
      result = reader.result;
      imgcontainer.innerHTML = '<img style="width:300px;height:300px;" src = "'+reader.result+'">';
    }
  }else {
    alert("请选择图片文件！");
  }
});
