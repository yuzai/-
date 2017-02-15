var files = document.getElementById('file1');
console.log(files);
files.addEventListener('change',function(event){
  console.log(event.target.files);
  var reader = new FileReader();
  var files = event.target.files;
  var type='default';
  var progress = document.getElementById('progress');
  var output = document.getElementById('output');

  if(/image/.test(files[0].type)){
    reader.readAsDataURL(files[0]);
    type='image';
  }else {
    reader.readAsText(files[0]);
    type = 'text';
  }
  reader.onerror = function(){
    output.innerHTML = '无法读取文件';
  }
  reader.onprogress = function(event){
    if(event.lengthComputable){
       progress.innerHTML = event.loaded + '/'+event.total;
    }
  }
  reader.onload = function(file){
    switch(type){
      case 'image':
          var img = new Image();
          img.alt = file.name;
          img.onload = function(){
            console.log(img.height)
          }
          img.src = reader.result;
          img.width = 300;
          output.appendChild(img);
          break;
          // output.innerHTML = "<img width = '300px'src='"+reader.result+"'>";break;
      case 'text':output.innerHTML = reader.result;break;
    }
  }
})

var dropdata = document.getElementById('drop-region');

function handleDrop(event){
  event.preventDefault();
  if(event.type==='drop'){
    var data = new FormData();
    file = event.dataTransfer.files[0];
    data.append('file1',file);
    xhr = new XMLHttpRequest();
    xhr.open('post','http://localhost:3000',true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4)
      {
        console.log(xhr.responseText);
      }
    }
    xhr.send(data);
  }

}
dropdata.addEventListener('drop',handleDrop);
dropdata.addEventListener('dragenter',handleDrop);
dropdata.addEventListener('dragover',handleDrop);
