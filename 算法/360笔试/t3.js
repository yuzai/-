// var num = [5,6];
// var main = [1,2,3,5,6];

// var temp = [3,2,1,4,5,6];

var num = '5 6'.split(' ');
num = num.map(function(item){
      return Number(item);
})
var main = '1 2 3 5 6'.split(' ');
main = main.map(function(item){
      return Number(item);
})
var temp = [3,2,1,4,5,6];
// for(var i=0;i<num[1];i++){
//       temp.push(Number(read_line()));
// }



var idle = [];
var index = 0;
for(var i=1,max=main[main.length-1];i<max;i++){
      if(i!= main[index]){
            idle.push(i);
      }else{
            index++;
      }
}
idle.push(max+1);
temp.forEach(function(item){
	for(var i=0;i<idle.length;i++){
		if(item<=idle[i]){
			console.log(idle[i]);
			break;
		}
	}
	if(i===idle.length){
		console.log(item);
	}
})