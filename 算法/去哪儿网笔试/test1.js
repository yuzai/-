// // var num = Number(5);
// var num = Number(read_line());
// var obj = {};
// var score = 0;
// // var datame = [];
// //  datame[0] = [12,1,0];
// //  datame[1] = [15,0,0];
// //  datame[2] = [12,1,1];
// //  datame[3] = [12,1,0];
// //  datame[4] = [16,1,0];
// for(var i=0;i<num;i++){
// 	var data = read_line().split(' ').map(function(item){
// 		return Number(item);
// 	});
// 	// data = datame[i].slice();
// 	if(obj[data[0]]){
// 		if(data[1]===1&&data[2]===1){
// 			score+=30;
// 		}else if(data[1]===1){
// 			score+=5;
// 		}
// 	}else{
// 		obj[data[0]] = true;
// 		if(data[1]===1&&data[2]===1){
// 			score+=30;
// 		}else if(data[1]===1){
// 			score+=10;
// 		}
// 	}
// }
// print(score);
// // console.log(score);

var s="12  0  1\n";
console.log(s.replace(/\s+/g,' ').split(' ').map(function(item){return Number(item)}));