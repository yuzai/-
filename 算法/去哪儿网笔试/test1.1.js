
var num = Number(read_line());
var obj = {};
var score = 0;
for(var i=0;i<num;i++){
    var str = read_line();
	var data = str.split(' ').map(function(item){
		return Number(item);
	});
	// data = datame[i].slice();
	if(obj[data[0]]){
		if(data[1]==1&&data[2]==1){
			score+=30;
		}else if(data[1]==1){
			score+=5;
		}
	}else{
        if(data[1]==1){
		  obj[data[0]] = true;
        }
		if(data[1]==1&&data[2]==1){
			score+=30;
		}else if(data[1]==1){
			score+=10;
		}
	}
}
print(score);
// console.log(score);